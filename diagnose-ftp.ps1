param(
    [string]$RemoteFile = "/index.html",
    [string]$LocalFile = "remote-index.html"
)

# Load Credentials
if (Test-Path ".env.ftp") {
    $lines = Get-Content ".env.ftp"
    foreach ($line in $lines) {
        if ($line -match "^([^=]+)=(.*)$") {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim()
            if ($name -eq "FTP_HOST") {
                $value = $value -replace "^ftp://", ""
                $value = $value -replace "/$", ""
            }
            Set-Variable -Name $name -Value $value -Scope Script
        }
    }
}

$uri = "ftp://$($script:FTP_HOST)$($RemoteFile)"
Write-Host "Downloading $uri to $LocalFile..."

try {
    $req = [System.Net.FtpWebRequest]::Create($uri)
    $req.Credentials = New-Object System.Net.NetworkCredential($script:FTP_USERNAME, $script:FTP_PASSWORD)
    $req.Method = [System.Net.WebRequestMethods+Ftp]::DownloadFile
    $req.UsePassive = $true
    $req.KeepAlive = $false
    
    $resp = $req.GetResponse()
    $stream = $resp.GetResponseStream()
    
    $outFile = [System.IO.File]::Create($LocalFile)
    $stream.CopyTo($outFile)
    
    $outFile.Close()
    $stream.Close()
    $resp.Close()
    
    Write-Host "[SUCCESS] Downloaded to $LocalFile" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] $($_.Exception.Message)" -ForegroundColor Red
}

if (-not $script:FTP_HOST) { 
    Write-Host "[ERROR] FTP_HOST not found in .env.ftp" -ForegroundColor Red
    exit 1
}


$LogFile = "$PSScriptRoot\ftp-debug.log"
"FTP Debug Log - $(Get-Date)" | Out-File -FilePath $LogFile -Encoding utf8

function Log {
    param($msg, $color="White")
    Write-Host $msg -ForegroundColor $color
    $msg | Out-File -FilePath $LogFile -Append -Encoding utf8
}

Log "[INFO] Host: $($script:FTP_HOST)" "Cyan"
Log "[INFO] User: $($script:FTP_USERNAME)" "Cyan"
Log "[INFO] Testing login and listing $RemoteDir ..." "Cyan"



$uri = "ftp://$($script:FTP_HOST)$($RemoteDir)"
if (-not $uri.EndsWith("/")) { $uri += "/" }

try {
    Log "  Attempt 1: User '$($script:FTP_USERNAME)' ..."
    $req = [System.Net.FtpWebRequest]::Create($uri)
    $req.Credentials = New-Object System.Net.NetworkCredential($script:FTP_USERNAME, $script:FTP_PASSWORD)
    $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails
    $req.KeepAlive = $false
    $req.UsePassive = $true
    
    $resp = $req.GetResponse()
    $reader = New-Object System.IO.StreamReader($resp.GetResponseStream())
    $content = $reader.ReadToEnd()
    $reader.Close()
    $resp.Close()
    
    Log "[SUCCESS] Connected! Files found:" "Green"
    Log $content
} catch {
    Log "[FAIL] $($_.Exception.Message)" "Red"
    if ($_.Exception.InnerException) {
        Log "Details: $($_.Exception.InnerException.Message)" "Red"
    }

    # Fallback to short user
    if ($script:FTP_USERNAME -match "^(u[0-9]+)\.") {
        $shortUser = $matches[1]
        Log ""
        Log "  Attempt 2: User '$shortUser' (Short) ..."
        try {
            $req = [System.Net.FtpWebRequest]::Create($uri)
            $req.Credentials = New-Object System.Net.NetworkCredential($shortUser, $script:FTP_PASSWORD)
            $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails
            $req.KeepAlive = $false
            $req.UsePassive = $true
            
            $resp = $req.GetResponse()
            $reader = New-Object System.IO.StreamReader($resp.GetResponseStream())
            $content = $reader.ReadToEnd()
            $reader.Close()
            $resp.Close()

            Log "[SUCCESS] Connected with short user!" "Green"
            Log "TIP: Use '$shortUser' as your FTP_USERNAME." "Yellow"
            return
        } catch {
            Log "[FAIL] $($_.Exception.Message)" "Red"
        }
    }

    # Attempt 3: FTPS (SSL) with original user
    Log ""
    Log "  Attempt 3: FTPS (SSL) with User '$($script:FTP_USERNAME)' ..."
    try {
        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Credentials = New-Object System.Net.NetworkCredential($script:FTP_USERNAME, $script:FTP_PASSWORD)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails
        $req.KeepAlive = $false
        $req.UsePassive = $true
        $req.EnableSsl = $true
        $req.ServerCertificateValidationCallback = { $true }
        
        $resp = $req.GetResponse()
        
        $reader = New-Object System.IO.StreamReader($resp.GetResponseStream())
        $content = $reader.ReadToEnd()
        $reader.Close()
        $resp.Close()

        Log "[SUCCESS] Connected with FTPS!" "Green"
        Log "  [TIP] Your server requires SSL. We need to update the deploy script." "Yellow"
        return
    } catch {
        Log "[FAIL] $($_.Exception.Message)" "Red"
        if ($_.Exception.InnerException) {
            Log "    Details: $($_.Exception.InnerException.Message)" "Red"
        }
    }
}

