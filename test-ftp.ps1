param($host_name, $user, $pass)
try {
    $uri = "ftp://$host_name/"
    $req = [System.Net.FtpWebRequest]::Create($uri)
    $req.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
    $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
    $resp = $req.GetResponse()
    Write-Host "Success! Connected and listed directory."
    $resp.Close()
} catch {
    Write-Host "Failed: $($_.Exception.Message)"
}
