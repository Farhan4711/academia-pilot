# Academia Pilot - Quick Deploy Script
# This script builds and prepares your site for deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Academia Pilot - Deploy Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean previous builds
Write-Host "[1/3] Cleaning previous builds..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
Write-Host "✓ Cleaned .next and out folders" -ForegroundColor Green
Write-Host ""

# Step 2: Build production version
Write-Host "[2/3] Building production version..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build successful!" -ForegroundColor Green
} else {
    Write-Host "✗ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: Show next steps
Write-Host "[3/3] Build complete! Next steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Your site is ready in the /out folder." -ForegroundColor White
Write-Host ""
Write-Host "Upload to Hostinger:" -ForegroundColor Cyan
Write-Host "  1. Open FileZilla and connect to your FTP" -ForegroundColor White
Write-Host "  2. Navigate to public_html on the server" -ForegroundColor White
Write-Host "  3. Upload contents of /out folder" -ForegroundColor White
Write-Host "  4. Upload public/.htaccess to public_html/.htaccess" -ForegroundColor White
Write-Host ""
Write-Host "Or use Hostinger File Manager:" -ForegroundColor Cyan
Write-Host "  1. Zip the /out folder" -ForegroundColor White
Write-Host "  2. Upload to public_html" -ForegroundColor White
Write-Host "  3. Extract and move files to root" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Ready to deploy! 🚀" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
