# 🚀 Automated Deployment - Setup Guide

**One-command deployment to Hostinger**

---

## ✅ Setup (One-Time Only)

### Step 1: Configure FTP Credentials

1. **Open the file:** `.env.ftp`
2. **Fill in your Hostinger FTP details:**

```env
FTP_HOST=ftp.academiapilot.com
FTP_USERNAME=your-actual-ftp-username
FTP_PASSWORD=your-actual-ftp-password
FTP_PORT=21
FTP_REMOTE_DIR=/public_html/
```

3. **Get your FTP credentials from Hostinger:**
   - Log in to Hostinger panel
   - Go to **Files → FTP Accounts**
   - Copy your FTP username and password

4. **Save the file**

⚠️ **IMPORTANT:** Never commit `.env.ftp` to Git! It's already in `.gitignore`.

---

## 🎯 Usage

### Deploy Everything (Build + Upload)

```bash
.\auto-deploy.ps1
```

This will:
1. ✅ Clean previous builds
2. ✅ Build production version
3. ✅ Upload all files to Hostinger
4. ✅ Upload .htaccess
5. ✅ Show progress and summary

### Deploy Without Building (Use Existing Build)

```bash
.\auto-deploy.ps1 -SkipBuild
```

Use this if you just built and want to re-upload.

---

## 📝 Workflow Examples

### Adding a New Blog Post

```bash
# 1. Create your blog post
# Add file: /content/news/my-new-post.mdx

# 2. Deploy automatically
.\auto-deploy.ps1

# Done! Your new post is live.
```

### Updating Homepage

```bash
# 1. Edit /app/page.tsx

# 2. Deploy
.\auto-deploy.ps1

# Done! Changes are live.
```

### Multiple Changes

```bash
# 1. Make all your changes
# 2. Test locally: npm run dev
# 3. Deploy everything
.\auto-deploy.ps1

# All changes deployed!
```

---

## 🎨 What You'll See

```
========================================
  Academia Pilot - Auto Deploy
========================================

[1/3] Building production version...
      Cleaning previous builds...
      Running build...
      ✓ Build successful!

[2/3] Preparing files for upload...
      Source: C:\...\out
      Destination: ftp.academiapilot.com/public_html/

[3/3] Uploading to Hostinger...
      Found 150 files to upload
      
      Uploading: index.html
      Uploading: news-radar/index.html
      Uploading: resources/index.html
      ...
      
      Uploading .htaccess...

========================================
  Deployment Complete!
========================================

  ✓ Uploaded: 150 files

  Your site is live at:
  https://academiapilot.com

  Remember to:
  - Clear your browser cache (Ctrl+Shift+R)
  - Test the live site
```

---

## ⚡ Speed

- **First deployment:** ~3-5 minutes (all files)
- **Updates:** ~1-3 minutes (all files)
- **Small changes:** ~30 seconds

---

## 🐛 Troubleshooting

### "FTP credentials incomplete"
- Open `.env.ftp` and fill in all fields
- Make sure there are no extra spaces

### "Build failed"
- Fix the errors shown in the output
- Run `npm run dev` to test locally first

### "Failed to upload" errors
- Check your internet connection
- Verify FTP credentials are correct
- Try again (sometimes network issues)

### Changes not showing on live site
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for server to update
- Check in incognito mode

---

## 🔐 Security

- ✅ `.env.ftp` is in `.gitignore` (won't be committed)
- ✅ Keep your FTP password secure
- ✅ Don't share `.env.ftp` file

---

## 📊 What Gets Uploaded

**Uploaded:**
- All HTML files
- All CSS/JS files
- All images
- All folders
- .htaccess

**Not uploaded:**
- Source code (.tsx, .ts files)
- node_modules/
- .next/ folder
- .env files

---

## ✅ Daily Workflow

```bash
# Morning: Make changes
# Edit content, add posts, update pages

# Test locally
npm run dev

# Deploy to live site
.\auto-deploy.ps1

# Verify
# Visit https://academiapilot.com
```

---

## 🎉 That's It!

You now have **one-command deployment**!

Just run `.\auto-deploy.ps1` and your changes go live automatically.

No manual FTP uploads, no file manager, no zipping. Just one command! 🚀
