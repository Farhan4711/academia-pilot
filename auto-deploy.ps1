# ========================================
# Academia Pilot - Fast Delta Deploy v3
# ========================================
# Features:
#   - MD5 hash manifest: only uploads files that actually changed
#   - Sequential FTP uploads (reliable on shared hosting)
#   - KeepAlive=false to prevent connection issues
#   - -ForceFull flag to bypass delta and upload everything
#   - -SkipBuild flag to skip npm build step
# ========================================
param(
    [switch]$SkipBuild = $false,
    [switch]$ForceFull = $false
)

$ErrorColor   = "Red"
$SuccessColor = "Green"
$InfoColor    = "Cyan"
$WarningColor = "Yellow"
$ManifestFile = ".deploy-manifest.json"

Write-Host ""
Write-Host "========================================" -ForegroundColor $InfoColor
Write-Host "  Academia Pilot - Fast Delta Deploy v3" -ForegroundColor $InfoColor
Write-Host "========================================" -ForegroundColor $InfoColor

# -- Load .env.ftp credentials ------------------------------------------------
if (Test-Path ".env.ftp") {
    Get-Content ".env.ftp" | ForEach-Object {
        if ($_ -match "^([^=]+)=(.+)$") {
            Set-Variable -Name ($matches[1].Trim()) -Value ($matches[2].Trim()) -Scope Script
        }
    }
} else {
    Write-Host "Error: .env.ftp not found" -ForegroundColor $ErrorColor
    exit 1
}

if (-not $FTP_HOST -or -not $FTP_USERNAME -or -not $FTP_PASSWORD) {
    Write-Host "Error: FTP credentials incomplete" -ForegroundColor $ErrorColor
    exit 1
}

# Normalize remote dir
if ($FTP_REMOTE_DIR) {
    if ($FTP_REMOTE_DIR.StartsWith("/")) { $FTP_REMOTE_DIR = $FTP_REMOTE_DIR.Substring(1) }
    if (-not $FTP_REMOTE_DIR.EndsWith("/")) { $FTP_REMOTE_DIR = "$FTP_REMOTE_DIR/" }
} else {
    $FTP_REMOTE_DIR = ""
}

# -- Helper functions ----------------------------------------------------------
function Upload-File {
    param($Loc, $Rem)
    try {
        $remPath = $Rem
        if (-not $remPath.StartsWith("/")) { $remPath = "/$remPath" }
        $parts = $remPath.Split('/') | ForEach-Object { [Uri]::EscapeDataString($_) }
        $escapedPath = $parts -join "/"
        $uri = "ftp://$FTP_HOST$escapedPath"

        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $req.KeepAlive = $false
        $req.UseBinary = $true
        $req.UsePassive = $true
        $req.Timeout = 30000
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
        $parts = $remPath.Split('/') | ForEach-Object { [Uri]::EscapeDataString($_) }
        $escapedPath = $parts -join "/"
        $uri = "ftp://$FTP_HOST$escapedPath"

        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $req.KeepAlive = $false
        $req.Timeout = 10000
        $req.GetResponse().Close()
    } catch {}
}

# -- Step 1: Build ------------------------------------------------------------
if (-not $SkipBuild) {
    Write-Host "`n[1/3] Building project..." -ForegroundColor $WarningColor
    Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed." -ForegroundColor $ErrorColor
        exit 1
    }
    Write-Host "  Build complete." -ForegroundColor $SuccessColor
} else {
    Write-Host "`n[1/3] Skipping build (-SkipBuild)" -ForegroundColor $WarningColor
}

if (-not (Test-Path "out")) {
    Write-Host "Error: 'out' folder not found." -ForegroundColor $ErrorColor
    exit 1
}

# -- Step 2: Delta scan -------------------------------------------------------
Write-Host "`n[2/3] Scanning for changes..." -ForegroundColor $WarningColor
$sw = [System.Diagnostics.Stopwatch]::StartNew()

$outPath  = (Resolve-Path "out").Path
$allFiles = Get-ChildItem -Path "out" -Recurse -File

# Load previous manifest
$prevManifest = @{}
if ((Test-Path $ManifestFile) -and -not $ForceFull) {
    try {
        $raw = Get-Content $ManifestFile -Raw
        $parsed = $raw | ConvertFrom-Json
        $parsed.PSObject.Properties | ForEach-Object { $prevManifest[$_.Name] = $_.Value }
        Write-Host "  Previous manifest: $($prevManifest.Count) entries" -ForegroundColor $InfoColor
    } catch {
        Write-Host "  Warning: Could not load manifest, uploading all" -ForegroundColor $WarningColor
        $prevManifest = @{}
    }
} elseif ($ForceFull) {
    Write-Host "  Force full upload mode" -ForegroundColor $WarningColor
}

# Build new manifest and collect changed files
$newManifest   = @{}
$filesToUpload = [System.Collections.Generic.List[hashtable]]::new()

$remoteBase = $FTP_REMOTE_DIR.TrimEnd('/')

foreach ($f in $allFiles) {
    $rel  = $f.FullName.Substring($outPath.Length).TrimStart('\').Replace('\', '/')
    $hash = (Get-FileHash $f.FullName -Algorithm MD5).Hash
    $newManifest[$rel] = $hash

    $rem = if ($remoteBase -ne "") { "$remoteBase/$rel" } else { "/$rel" }

    if ($ForceFull -or ($prevManifest[$rel] -ne $hash)) {
        $filesToUpload.Add(@{ Local = $f.FullName; Remote = $rem; Rel = $rel })
    }
}

# Also check .htaccess
if (Test-Path "public\.htaccess") {
    $htRel  = ".htaccess"
    $htHash = (Get-FileHash "public\.htaccess" -Algorithm MD5).Hash
    $newManifest[$htRel] = $htHash
    $htRem = if ($remoteBase -ne "") { "$remoteBase/.htaccess" } else { "/.htaccess" }
    if ($ForceFull -or ($prevManifest[$htRel] -ne $htHash)) {
        $filesToUpload.Add(@{ Local = (Resolve-Path "public\.htaccess").Path; Remote = $htRem; Rel = $htRel })
    }
}

$totalChanged = $filesToUpload.Count
$totalAll     = $allFiles.Count
$skipped      = $totalAll - $totalChanged

if ($totalChanged -eq 0) {
    Write-Host "  Nothing changed -- already up to date!" -ForegroundColor $SuccessColor
    $newManifest | ConvertTo-Json -Depth 1 | Set-Content $ManifestFile -Encoding UTF8
    exit 0
}

Write-Host ("  {0} changed / {1} total (skipping {2} unchanged)" -f $totalChanged, $totalAll, $skipped) -ForegroundColor $InfoColor

# -- Step 3: Upload changed files ---------------------------------------------
Write-Host "`n[3/3] Uploading $totalChanged file(s)..." -ForegroundColor $WarningColor

$uploadSuccess = 0
$uploadFailed  = 0
$counter       = 0

foreach ($f in $filesToUpload) {
    $counter++

    # Create parent directories
    $parts = $f.Remote.Split('/')
    for ($i = 1; $i -lt ($parts.Length - 1); $i++) {
        $dirPath = ($parts[0..$i] -join "/")
        Create-Dir $dirPath
    }

    # Show progress
    $pct = [int](($counter / $totalChanged) * 100)
    Write-Host ("  [{0}/{1}] {2}" -f $counter, $totalChanged, $f.Rel)

    $result = Upload-File -Loc $f.Local -Rem $f.Remote
    if ($result) {
        $uploadSuccess++
    } else {
        $uploadFailed++
    }
}

# -- Save manifest -------------------------------------------------------------
$newManifest | ConvertTo-Json -Depth 1 | Set-Content $ManifestFile -Encoding UTF8

# -- Summary -------------------------------------------------------------------
$elapsed = [math]::Round($sw.Elapsed.TotalSeconds, 1)
Write-Host "`n========================================" -ForegroundColor $InfoColor
Write-Host "  Deployment Summary" -ForegroundColor $InfoColor
Write-Host "  Total files  : $totalAll"
Write-Host "  Changed      : $totalChanged"
Write-Host "  Skipped      : $skipped"
Write-Host "  Uploaded OK  : $uploadSuccess" -ForegroundColor $SuccessColor
$fc = if ($uploadFailed -gt 0) { "Red" } else { "Green" }
Write-Host "  Failed       : $uploadFailed" -ForegroundColor $fc
Write-Host "  Time         : ${elapsed}s"
Write-Host "========================================" -ForegroundColor $InfoColor

if ($uploadFailed -gt 0) {
    Write-Host "`nDeployment finished with errors." -ForegroundColor $WarningColor
    Write-Host "Tip: re-run with -SkipBuild to retry only changed files." -ForegroundColor $InfoColor
    exit 1
} else {
    Write-Host "`nDeployment Complete!" -ForegroundColor $SuccessColor
}
