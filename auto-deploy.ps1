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
        $uri = "ftp://$FTP_HOST$Rem"
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
        $uri = "ftp://$FTP_HOST$Rem"
        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $req.GetResponse().Close()
    } catch {}
}

foreach ($f in $files) {
    $rel = $f.FullName.Substring($outPath.Length).TrimStart('\').Replace('\', '/')
    $parts = $rel.Split('/')
    $curr = ""
    for ($i=0; $i -lt ($parts.Length - 1); $i++) {
        $curr = "$curr/$($parts[$i])"
        Create-Dir $curr
    }
    $rem = "$curr/$($parts[-1])"
    Write-Host "  Uploading: $rel"
    Upload-File -Loc $f.FullName -Rem $rem | Out-Null
}

if (Test-Path "public\.htaccess") {
    Write-Host "  Uploading .htaccess"
    Upload-File -Loc "public\.htaccess" -Rem "/.htaccess" | Out-Null
}

Write-Host "Deployment Complete! ✅" -ForegroundColor $SuccessColor
