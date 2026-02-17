param()
if (Test-Path ".env.ftp") {
    Get-Content ".env.ftp" | ForEach-Object {
        if ($_ -match "^([^=]+)=(.+)$") {
            Set-Variable -Name ($matches[1].Trim()) -Value ($matches[2].Trim()) -Scope Script
        }
    }
}
# Check news-radar directory
$uri = "ftp://$FTP_HOST/news-radar/"
$req = [System.Net.FtpWebRequest]::Create($uri)
$req.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
$req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
$resp = $req.GetResponse()
$reader = New-Object System.IO.StreamReader($resp.GetResponseStream())
$reader.ReadToEnd()
$reader.Close()
$resp.Close()
