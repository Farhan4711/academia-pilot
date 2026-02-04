# ========================================
# Academia Pilot - Automated Deploy Script
# ========================================
# This script builds your site and automatically uploads to Hostinger
# Usage: .\auto-deploy.ps1

param(
    [switch]$SkipBuild = $false
)

# Colors for output
$ErrorColor = "Red"
$SuccessColor = "Green"
$InfoColor = "Cyan"
$WarningColor = "Yellow"

Write-Host ""
Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host "  Academia Pilot - Auto Deploy" -ForegroundColor $InfoColor
Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host ""

# Load FTP credentials
if (Test-Path ".env.ftp") {
    Write-Host "[INFO] Loading FTP credentials..." -ForegroundColor $InfoColor
    Get-Content ".env.ftp" | ForEach-Object {
        if ($_ -match "^([^=]+)=(.+)$") {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim()
            Set-Variable -Name $key -Value $value -Scope Script
        }
    }
} else {
    Write-Host "[ERROR] .env.ftp file not found!" -ForegroundColor $ErrorColor
    Write-Host "Please create .env.ftp with your FTP credentials." -ForegroundColor $WarningColor
    Write-Host "See .env.ftp.example for template." -ForegroundColor $WarningColor
    exit 1
}

# Validate credentials
if (-not $FTP_HOST -or -not $FTP_USERNAME -or -not $FTP_PASSWORD) {
    Write-Host "[ERROR] FTP credentials incomplete!" -ForegroundColor $ErrorColor
    Write-Host "Please fill in all values in .env.ftp" -ForegroundColor $WarningColor
    exit 1
}

# Step 1: Build the site
if (-not $SkipBuild) {
    Write-Host "[1/3] Building production version..." -ForegroundColor $WarningColor
    Write-Host "      Cleaning previous builds..." -ForegroundColor $InfoColor
    Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
    
    Write-Host "      Running build..." -ForegroundColor $InfoColor
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[ERROR] Build failed!" -ForegroundColor $ErrorColor
        Write-Host "Please fix the errors and try again." -ForegroundColor $WarningColor
        exit 1
    }
    
    Write-Host "      ✓ Build successful!" -ForegroundColor $SuccessColor
    Write-Host ""
} else {
    Write-Host "[1/3] Skipping build (using existing /out folder)..." -ForegroundColor $WarningColor
    Write-Host ""
}

# Step 2: Prepare for upload
Write-Host "[2/3] Preparing files for upload..." -ForegroundColor $WarningColor

if (-not (Test-Path "out")) {
    Write-Host "[ERROR] /out folder not found!" -ForegroundColor $ErrorColor
    Write-Host "Please run without -SkipBuild flag to build first." -ForegroundColor $WarningColor
    exit 1
}

$outPath = Resolve-Path "out"
Write-Host "      Source: $outPath" -ForegroundColor $InfoColor
Write-Host "      Destination: $FTP_HOST$FTP_REMOTE_DIR" -ForegroundColor $InfoColor
Write-Host ""

# Step 3: Upload via FTP
Write-Host "[3/3] Uploading to Hostinger..." -ForegroundColor $WarningColor
Write-Host ""

# Function to upload file via FTP
function Upload-FileToFTP {
    param(
        [string]$LocalPath,
        [string]$RemotePath
    )
    
    try {
        $ftpUri = "ftp://$FTP_HOST$RemotePath"
        $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $ftpRequest.UseBinary = $true
        $ftpRequest.KeepAlive = $false
        
        $fileContent = [System.IO.File]::ReadAllBytes($LocalPath)
        $ftpRequest.ContentLength = $fileContent.Length
        
        $requestStream = $ftpRequest.GetRequestStream()
        $requestStream.Write($fileContent, 0, $fileContent.Length)
        $requestStream.Close()
        
        $response = $ftpRequest.GetResponse()
        $response.Close()
        
        return $true
    }
    catch {
        Write-Host "      [ERROR] Failed to upload: $RemotePath" -ForegroundColor $ErrorColor
        Write-Host "      Error: $($_.Exception.Message)" -ForegroundColor $ErrorColor
        return $false
    }
}

# Function to create FTP directory
function Create-FTPDirectory {
    param([string]$RemotePath)
    
    try {
        $ftpUri = "ftp://$FTP_HOST$RemotePath"
        $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $ftpRequest.GetResponse() | Out-Null
    }
    catch {
        # Directory might already exist, ignore error
    }
}

# Get all files to upload
$files = Get-ChildItem -Path "out" -Recurse -File
$totalFiles = $files.Count
$uploadedFiles = 0
$failedFiles = 0

Write-Host "      Found $totalFiles files to upload" -ForegroundColor $InfoColor
Write-Host ""

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($outPath.Path.Length).Replace('\', '/')
    $remotePath = "$FTP_REMOTE_DIR$relativePath"
    
    # Create directory if needed
    $remoteDir = Split-Path $remotePath -Parent
    if ($remoteDir -ne $FTP_REMOTE_DIR) {
        Create-FTPDirectory -RemotePath $remoteDir
    }
    
    # Upload file
    Write-Host "      Uploading: $relativePath" -ForegroundColor $InfoColor
    
    if (Upload-FileToFTP -LocalPath $file.FullName -RemotePath $remotePath) {
        $uploadedFiles++
    } else {
        $failedFiles++
    }
    
    # Progress indicator
    $progress = [math]::Round(($uploadedFiles / $totalFiles) * 100)
    Write-Progress -Activity "Uploading files" -Status "$uploadedFiles of $totalFiles files" -PercentComplete $progress
}

Write-Progress -Activity "Uploading files" -Completed

# Upload .htaccess from public folder
Write-Host ""
Write-Host "      Uploading .htaccess..." -ForegroundColor $InfoColor
if (Test-Path "public\.htaccess") {
    Upload-FileToFTP -LocalPath "public\.htaccess" -RemotePath "$FTP_REMOTE_DIR.htaccess" | Out-Null
}

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host "  Deployment Complete!" -ForegroundColor $SuccessColor
Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host ""
Write-Host "  ✓ Uploaded: $uploadedFiles files" -ForegroundColor $SuccessColor
if ($failedFiles -gt 0) {
    Write-Host "  ✗ Failed: $failedFiles files" -ForegroundColor $ErrorColor
}
Write-Host ""
Write-Host "  Your site is live at:" -ForegroundColor $InfoColor
Write-Host "  https://academiapilot.com" -ForegroundColor $SuccessColor
Write-Host ""
Write-Host "  Remember to:" -ForegroundColor $WarningColor
Write-Host "  - Clear your browser cache (Ctrl+Shift+R)" -ForegroundColor $InfoColor
Write-Host "  - Test the live site" -ForegroundColor $InfoColor
Write-Host ""
