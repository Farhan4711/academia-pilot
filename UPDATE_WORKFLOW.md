# 🔄 Update Workflow - Push Changes to Live Site

**Quick guide for updating your live Academia Pilot website**

---

## 🎯 Overview

When you make changes to your site (add blog posts, update content, etc.), you need to:
1. Build the updated site locally
2. Upload the changed files to Hostinger

---

## ⚡ Quick Update Process

### Step 1: Make Your Changes Locally

Edit your content files:
- Add new blog posts in `/content/news/`
- Update pages in `/app/`
- Add images to `/public/`
- etc.

### Step 2: Test Locally

```bash
# Run dev server to test
npm run dev

# Visit http://localhost:3000
# Verify your changes look good
```

### Step 3: Build Production Version

```bash
# Clean previous build
Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue

# Build new version
npm run build
```

This creates a fresh `/out` folder with your updated site.

### Step 4: Upload to Hostinger

**Option A: FTP (Recommended for regular updates)**

1. Open FileZilla
2. Connect to your Hostinger FTP
3. Navigate to `public_html` on the right side
4. Navigate to your `/out` folder on the left side
5. **Upload only the files you changed:**
   - New blog post? Upload the new folder in `news-radar/`
   - Updated homepage? Upload `index.html`
   - New images? Upload to the appropriate folder

**Option B: File Manager (For small changes)**

1. Log in to Hostinger panel
2. Go to File Manager → `public_html`
3. Upload the specific files you changed

---

## 📝 Common Update Scenarios

### Adding a New Blog Post

**Files to upload:**
```
/out/news-radar/[new-article-slug]/
/out/news-radar.html (updated listing page)
/out/sitemap.xml (if you updated it)
```

**Steps:**
1. Create new `.mdx` file in `/content/news/`
2. Run `npm run build`
3. Upload the new article folder from `/out/news-radar/[slug]/`
4. Upload updated `/out/news-radar.html`

### Updating Homepage

**Files to upload:**
```
/out/index.html
```

**Steps:**
1. Edit `/app/page.tsx`
2. Run `npm run build`
3. Upload `/out/index.html`

### Adding New Images

**Files to upload:**
```
/out/[image-name].jpg (or wherever you placed it)
```

**Steps:**
1. Add image to `/public/` folder
2. Run `npm run build`
3. Upload the image from `/out/`

### Updating Resources Pages

**Files to upload:**
```
/out/resources.html (if hub page changed)
/out/resources/agency-blueprint/ (if that page changed)
/out/resources/codex-mastery-pack/ (if that page changed)
```

---

## 🚀 Automated Deployment Options

### Option 1: FTP Sync Script (Recommended)

Create a PowerShell script to automatically sync changes:

**File:** `deploy.ps1`

```powershell
# Deploy to Hostinger via FTP
Write-Host "Building site..." -ForegroundColor Cyan
npm run build

Write-Host "Deploying to Hostinger..." -ForegroundColor Cyan

# FTP credentials (KEEP THIS FILE PRIVATE!)
$ftpServer = "ftp://ftp.academiapilot.com"
$ftpUsername = "your-ftp-username"
$ftpPassword = "your-ftp-password"

# Upload function
function Upload-File {
    param($LocalFile, $RemotePath)
    
    $webclient = New-Object System.Net.WebClient
    $webclient.Credentials = New-Object System.Net.NetworkCredential($ftpUsername, $ftpPassword)
    $uri = New-Object System.Uri("$ftpServer/$RemotePath")
    $webclient.UploadFile($uri, $LocalFile)
}

# Upload all files in /out to public_html
# Add your upload logic here

Write-Host "Deployment complete!" -ForegroundColor Green
```

**Usage:**
```bash
.\deploy.ps1
```

### Option 2: GitHub Actions (Advanced)

If you use GitHub, you can automate deployment:

1. **Push code to GitHub**
2. **GitHub Actions builds the site**
3. **Automatically uploads to Hostinger via FTP**

**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Hostinger via FTP
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: ftp.academiapilot.com
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./out/
        server-dir: /public_html/
```

### Option 3: WinSCP Sync (Windows)

1. Download WinSCP: https://winscp.net
2. Set up FTP connection to Hostinger
3. Use "Synchronize" feature to upload only changed files

---

## 📋 Pre-Update Checklist

Before deploying updates:

- [ ] Test changes locally (`npm run dev`)
- [ ] Build successfully (`npm run build`)
- [ ] Check for console errors
- [ ] Verify new content displays correctly
- [ ] Test on mobile (resize browser)
- [ ] Backup current live site (optional but recommended)

---

## 🔄 Full Site Update (When Many Changes)

If you've made many changes across the site:

```bash
# 1. Build
npm run build

# 2. Delete everything in public_html (via File Manager)
# 3. Upload entire /out folder contents
# 4. Upload .htaccess from /public folder
```

---

## ⚠️ Important Notes

1. **Always build before uploading**
   - Never upload source files (`.tsx`, `.ts`, etc.)
   - Only upload the built files from `/out`

2. **Don't upload these:**
   - `node_modules/`
   - `.next/`
   - Source code files
   - `.env` files

3. **Do upload these:**
   - Everything in `/out` folder
   - `.htaccess` from `/public` (if changed)

4. **Cache clearing:**
   - After updates, clear your browser cache (Ctrl+Shift+R)
   - Or use incognito mode to see changes

---

## 🎯 Recommended Workflow

**For regular content updates:**

1. **Monday-Friday:** Make changes, test locally
2. **Build:** `npm run build`
3. **Upload via FTP:** Only changed files
4. **Verify:** Visit live site and check changes

**For major updates:**

1. **Test thoroughly locally**
2. **Build production version**
3. **Backup live site** (download current files)
4. **Upload all files**
5. **Test live site**
6. **Monitor for issues**

---

## 🐛 Troubleshooting Updates

**Changes not showing:**
- Clear browser cache (Ctrl+Shift+R)
- Check file was actually uploaded
- Verify file permissions (644 for files)

**Site broken after update:**
- Restore from backup
- Check `.htaccess` is in place
- Verify all files uploaded correctly

**404 errors on new pages:**
- Ensure folder structure is correct
- Check `.htaccess` is uploaded
- Verify `index.html` exists in new folders

---

## 📞 Quick Reference

**Build command:**
```bash
npm run build
```

**FTP Details:**
- Host: `ftp.academiapilot.com`
- Port: 21
- Remote directory: `/public_html/`

**Files to always upload:**
- Changed HTML files
- New folders
- Updated images
- Modified sitemap.xml (if SEO changed)

---

**Last Updated:** February 3, 2026  
**Status:** Live Site Deployed ✅
