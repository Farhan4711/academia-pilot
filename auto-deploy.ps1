# ========================================
# Academia Pilot - Automated Deploy Script
# ========================================
param([switch]$SkipBuild = $false)

$ErrorColor = "Red"; $SuccessColor = "Green"; $InfoColor = "Cyan"; $WarningColor = "Yellow"

Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host "  Academia Pilot - Auto Deploy" -ForegroundColor $InfoColor
Write-Host "========================================" -ForegroundColor $InfoColor

if (Test-Path ".env.ftp") {
    Get-Content ".env.ftp" | ForEach-Object {
        if ($_ -match "^([^=]+)=(.+)$") {
            Set-Variable -Name ($matches[1].Trim()) -Value ($matches[2].Trim()) -Scope Script
        }
    }
} else { Write-Host "Error: .env.ftp not found" -ForegroundColor $ErrorColor; exit 1 }

if (-not $FTP_HOST -or -not $FTP_USERNAME -or -not $FTP_PASSWORD) {
    Write-Host "Error: Credentials incomplete" -ForegroundColor $ErrorColor; exit 1
}

if (-not $SkipBuild) {
    Write-Host "[1/3] Building..." -ForegroundColor $WarningColor
    Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
    npm run build
    if ($LASTEXITCODE -ne 0) { exit 1 }
}

if (-not (Test-Path "out")) { exit 1 }
$outPath = (Resolve-Path "out").Path
$files = Get-ChildItem -Path "out" -Recurse -File

Write-Host "[3/3] Uploading..." -ForegroundColor $WarningColor

function Upload-File {
    param($Loc, $Rem)
    try {
        # Ensure URI is correctly formatted with a slash after host
        $remPath = $Rem
        if (-not $remPath.StartsWith("/")) { $remPath = "/$remPath" }
        $uri = "ftp://$FTP_HOST$remPath"
        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $b = [System.IO.File]::ReadAllBytes($Loc)
        $s = $req.GetRequestStream()
        $s.Write($b, 0, $b.Length)
        $s.Close()
        $req.GetResponse().Close()
        return $true
    } catch {
        Write-Host "  [X] Failed: $Rem ($($_.Exception.Message))" -ForegroundColor $ErrorColor
        return $false
    }
}

function Create-Dir {
    param($Rem)
    try {
        $remPath = $Rem
        if (-not $remPath.StartsWith("/")) { $remPath = "/$remPath" }
        $uri = "ftp://$FTP_HOST$remPath"
        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $req.GetResponse().Close()
    } catch {}
}

# Ensure FTP_REMOTE_DIR is in the correct format (starts with no slash, ends with /)
if ($FTP_REMOTE_DIR) {
    if ($FTP_REMOTE_DIR.StartsWith("/")) { $FTP_REMOTE_DIR = $FTP_REMOTE_DIR.Substring(1) }
    if (-not $FTP_REMOTE_DIR.EndsWith("/")) { $FTP_REMOTE_DIR = "$FTP_REMOTE_DIR/" }
} else {
    $FTP_REMOTE_DIR = ""
}

foreach ($f in $files) {
    $rel = $f.FullName.Substring($outPath.Length).TrimStart('\').Replace('\', '/')
    $parts = $rel.Split('/')
    $curr = ""
    # Prepend remote directory
    $remoteBase = $FTP_REMOTE_DIR.TrimEnd('/')
    
    for ($i=0; $i -lt ($parts.Length - 1); $i++) {
        $currPath = "$remoteBase"
        for ($j=0; $j -le $i; $j++) {
            $currPath = "$currPath/$($parts[$j])"
        }
        Create-Dir $currPath
    }
    
    $rem = "$remoteBase/$rel"
    Write-Host "  Uploading: $rel -> $rem"
    Upload-File -Loc $f.FullName -Rem $rem | Out-Null
}

if (Test-Path "public\.htaccess") {
    $remHt = "$($FTP_REMOTE_DIR.TrimEnd('/'))/.htaccess"
    Write-Host "  Uploading .htaccess -> $remHt"
    Upload-File -Loc "public\.htaccess" -Rem $remHt | Out-Null
}

Write-Host "Deployment Complete! ✅" -ForegroundColor $SuccessColor
