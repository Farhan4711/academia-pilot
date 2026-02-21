# 📤 Upload Guide: Out Folder → Hostinger Public_HTML

**Step-by-Step Instructions for Uploading Your Site**

---

## 🎯 Overview

You will upload the contents of your `/out` folder to Hostinger's `public_html` directory.

```
Your Computer                    Hostinger Server
/out/                    →      public_html/
├── index.html          →      ├── index.html
├── _next/              →      ├── _next/
├── news-radar/         →      ├── news-radar/
├── resources/          →      ├── resources/
└── ...                 →      └── ...
```

---

## ⚠️ IMPORTANT: Build First!

Before uploading, you MUST build your project:

```bash
# Navigate to project folder
cd C:\Users\Farhan Ul Haq\Desktop\PROJECT\academia-pilot

# Build the project
npm run build
```

This creates the `/out` folder with all your static files.

---

## 📋 Method 1: Hostinger File Manager (Easiest)

### Step 1: Access Hostinger Panel

1. Go to https://hpanel.hostinger.com
2. Log in with your credentials
3. Select your hosting plan

### Step 2: Open File Manager

1. Click on **"Files"** in the left sidebar
2. Click **"File Manager"**
3. A new tab will open with your file manager

### Step 3: Navigate to public_html

1. You'll see a folder called `public_html`
2. **Double-click** to open it
3. This is where your website files go

### Step 4: Clear Existing Files (If Any)

⚠️ **Only if this is a fresh install:**

1. Select all files in `public_html` (if any exist)
2. Click **"Delete"** button
3. Confirm deletion

💡 **If you have existing files, back them up first!**

### Step 5: Upload Your Site

1. Click the **"Upload Files"** button (top right)
2. Click **"Select Files"** or drag and drop

3. **Navigate to your project folder:**
   ```
   C:\Users\Farhan Ul Haq\Desktop\PROJECT\academia-pilot\out
   ```

4. **Select ALL files and folders inside `/out`:**
   - Press `Ctrl + A` to select all
   - Or manually select:
     - `index.html`
     - `404.html`
     - `_next/` folder
     - `news-radar/` folder
     - `resources/` folder
     - `about/` folder
     - All other files and folders

5. Click **"Open"** to start upload

6. **Wait for upload to complete**
   - Progress bar will show upload status
   - Don't close the browser until complete
   - Large sites may take 5-10 minutes

### Step 6: Upload .htaccess

1. Still in `public_html` folder
2. Click **"Upload Files"** again
3. Navigate to:
   ```
   C:\Users\Farhan Ul Haq\Desktop\PROJECT\academia-pilot\public
   ```
4. Select `.htaccess` file
5. Upload it

⚠️ **Important:** The `.htaccess` file might be hidden. Enable "Show hidden files" in Windows Explorer:
   - Open File Explorer
   - Click "View" tab
   - Check "Hidden items"

### Step 7: Verify Upload

In File Manager, you should now see:

```
public_html/
├── .htaccess          ← Server configuration
├── index.html         ← Your homepage
├── 404.html           ← Error page
├── robots.txt         ← SEO file
├── sitemap.xml        ← SEO sitemap
├── _next/             ← Next.js assets
├── news-radar/        ← News articles
├── resources/         ← Resources pages
└── [other folders]
```

---

## 📋 Method 2: FTP Upload (For Large Sites)

### Step 1: Get FTP Credentials

1. In Hostinger panel, go to **"Files" → "FTP Accounts"**
2. Note down:
   - **FTP Hostname:** (e.g., `ftp.yourdomain.com`)
   - **Username:** (your FTP username)
   - **Password:** (your FTP password)
   - **Port:** 21

### Step 2: Download FileZilla

1. Go to https://filezilla-project.org/download.php
2. Download **FileZilla Client** (free)
3. Install it

### Step 3: Connect to Hostinger

1. Open FileZilla
2. Enter your FTP credentials:
   - **Host:** `ftp.yourdomain.com`
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21
3. Click **"Quickconnect"**

### Step 4: Navigate to Folders

**Left side (Your Computer):**
1. Navigate to:
   ```
   C:\Users\Farhan Ul Haq\Desktop\PROJECT\academia-pilot\out
   ```

**Right side (Hostinger Server):**
1. Navigate to `public_html` folder
2. Double-click to open it

### Step 5: Upload Files

1. **On the left side**, select ALL files and folders in `/out`
2. **Right-click** and select **"Upload"**
3. Or **drag and drop** from left to right

FileZilla will show upload progress at the bottom.

### Step 6: Upload .htaccess

1. **On the left side**, navigate to:
   ```
   C:\Users\Farhan Ul Haq\Desktop\PROJECT\academia-pilot\public
   ```
2. Find `.htaccess` file
3. Drag it to the right side (`public_html` folder)

### Step 7: Verify Upload

Check the right side (server) - you should see all your files in `public_html`.

---

## ✅ Post-Upload Checklist

After uploading, verify these files exist in `public_html`:

- [ ] `.htaccess` (server configuration)
- [ ] `index.html` (homepage)
- [ ] `404.html` (error page)
- [ ] `robots.txt` (SEO)
- [ ] `sitemap.xml` (SEO)
- [ ] `_next/` folder (Next.js assets)
- [ ] `news-radar/` folder
- [ ] `resources/` folder
- [ ] All other page folders

---

## 🌐 Configure Domain & SSL

### Step 1: Enable SSL Certificate

1. In Hostinger panel, go to **"Security" → "SSL"**
2. Select your domain: `academiapilot.com`
3. Click **"Install SSL"** (free Let's Encrypt)
4. Wait 5-10 minutes for installation
5. Enable **"Force HTTPS"** option

### Step 2: Point Domain (If Not Already)

**If your domain is registered with Hostinger:**
- Already configured automatically ✅

**If your domain is elsewhere:**
1. Log in to your domain registrar
2. Update nameservers to:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
3. Wait 24-48 hours for DNS propagation

---

## 🔍 Test Your Site

### Step 1: Visit Your Domain

Open your browser and go to:
```
https://academiapilot.com
```

### Step 2: Test All Pages

Visit these URLs and verify they load:

- ✅ https://academiapilot.com (Homepage)
- ✅ https://academiapilot.com/news-radar
- ✅ https://academiapilot.com/resources
- ✅ https://academiapilot.com/resources/agency-blueprint
- ✅ https://academiapilot.com/resources/codex-mastery-pack
- ✅ https://academiapilot.com/about

### Step 3: Check for Errors

1. Open browser DevTools (Press `F12`)
2. Go to **"Console"** tab
3. Look for any red errors
4. Go to **"Network"** tab
5. Refresh page and check for failed requests (red items)

### Step 4: Test Mobile

1. Resize browser window to mobile size
2. Or use DevTools mobile emulator
3. Verify site looks good on mobile

---

## 🐛 Troubleshooting

### Issue: "404 Not Found" on page refresh

**Cause:** `.htaccess` file not uploaded or not working

**Solution:**
1. Verify `.htaccess` exists in `public_html` root
2. Check file permissions: Should be `644`
3. Verify `.htaccess` content matches the template

### Issue: Images not loading

**Cause:** Images not uploaded or wrong paths

**Solution:**
1. Check if images exist in `public_html`
2. Verify image paths in code
3. Check file permissions: `644` for files, `755` for folders

### Issue: "Site can't be reached"

**Cause:** DNS not propagated or domain not pointed

**Solution:**
1. Wait for DNS propagation (up to 48 hours)
2. Verify nameservers are correct
3. Clear browser cache and try again

### Issue: No HTTPS (Not Secure)

**Cause:** SSL certificate not installed

**Solution:**
1. Go to Hostinger panel → Security → SSL
2. Install SSL certificate
3. Enable "Force HTTPS"
4. Wait 10 minutes and refresh

---

## 🔄 Updating Your Site

When you make changes:

1. **Edit files locally**
2. **Test:** `npm run dev`
3. **Build:** `npm run build`
4. **Upload only changed files** to `public_html`
5. **Clear browser cache** and test

**Quick update:**
- Only upload the specific files you changed
- No need to re-upload everything

---

## 📁 File Permissions (If Needed)

If you encounter permission errors:

**Correct permissions:**
- **Files:** `644` (rw-r--r--)
- **Folders:** `755` (rwxr-xr-x)

**To set in File Manager:**
1. Right-click file/folder
2. Select "Permissions"
3. Set to `644` for files, `755` for folders

**To set in FileZilla:**
1. Right-click file/folder
2. Select "File permissions"
3. Enter `644` or `755`

---

## ✅ Final Checklist

Before you're done:

- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` uploaded to root
- [ ] SSL certificate installed
- [ ] HTTPS working (lock icon in browser)
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] No 404 errors
- [ ] No console errors
- [ ] Mobile responsive works
- [ ] Images load properly

---

## 🎉 You're Live!

Once all checks pass, your site is live at:

**https://academiapilot.com**

### Next Steps:

1. **Submit to Google Search Console**
   - https://search.google.com/search-console
   - Submit sitemap: `https://academiapilot.com/sitemap.xml`

2. **Share on social media**

3. **Monitor traffic** with analytics

4. **Update content** regularly

---

## 📞 Need Help?

**Hostinger Support:**
- Live Chat in Hostinger panel
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com

**Common Questions:**
- How long does DNS take? → Up to 48 hours
- How to update site? → Upload new files to `public_html`
- SSL not working? → Wait 10 minutes after installation

---

**Last Updated:** February 3, 2026  
**Status:** Ready to Upload! 🚀
