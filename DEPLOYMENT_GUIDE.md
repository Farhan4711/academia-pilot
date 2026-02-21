# 🚀 Academia Pilot - Hostinger Deployment Guide

**Quick Start Guide for Deploying to Hostinger**

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure you have:

- [x] Hostinger account with hosting plan
- [x] Domain name (academiapilot.com) pointed to Hostinger
- [x] FTP credentials from Hostinger
- [ ] Production build tested locally
- [ ] All content reviewed and finalized

---

## 📦 Step 1: Build the Project

### 1.1 Clean Previous Builds

```bash
# Remove old build files
Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue
```

### 1.2 Install Dependencies (if needed)

```bash
npm install
```

### 1.3 Build for Production

```bash
npm run build
```

**Expected Output:**
- Creates `/out` directory with static HTML files
- All pages compiled successfully
- No errors in console

### 1.4 Test Build Locally

```bash
# Install serve globally (if not already installed)
npm install -g serve

# Serve the built site
serve out

# Open http://localhost:3000 and test
```

**Test Checklist:**
- [ ] Homepage loads
- [ ] Navigation works
- [ ] News articles load
- [ ] Resources pages work
- [ ] No console errors

---

## 📤 Step 2: Upload to Hostinger

### Option A: File Manager (Easiest)

1. **Log in to Hostinger:**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Open File Manager:**
   - Go to "Files" → "File Manager"
   - Navigate to `public_html` folder

3. **Clear Existing Files (if any):**
   - Select all files in `public_html`
   - Delete them (backup first if needed)

4. **Upload Your Site:**
   - Click "Upload" button
   - Select ALL files from your `/out` directory
   - Wait for upload to complete

5. **Upload .htaccess:**
   - Upload the `.htaccess` file from `/public` folder
   - Place it in the root of `public_html`

### Option B: FTP (Recommended for Large Sites)

1. **Get FTP Credentials:**
   - In Hostinger panel, go to "Files" → "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Connect with FileZilla:**
   - Download FileZilla: https://filezilla-project.org
   - Open FileZilla
   - Enter FTP credentials:
     - Host: `ftp.yourdomain.com`
     - Username: Your FTP username
     - Password: Your FTP password
     - Port: 21

3. **Upload Files:**
   - Navigate to `public_html` on remote side
   - Navigate to your `/out` folder on local side
   - Select all files and drag to remote side
   - Wait for transfer to complete

4. **Upload .htaccess:**
   - Upload `.htaccess` from `/public` to `public_html`

---

## 🌐 Step 3: Configure Domain & SSL

### 3.1 Point Domain to Hostinger

**If domain is registered elsewhere:**

1. Log in to your domain registrar
2. Update nameservers to:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
3. Wait for DNS propagation (up to 48 hours)

**If domain is on Hostinger:**
- Already configured automatically

### 3.2 Enable SSL Certificate

1. In Hostinger panel, go to "Security" → "SSL"
2. Select your domain
3. Click "Install SSL" (free Let's Encrypt)
4. Wait for installation (5-10 minutes)
5. Enable "Force HTTPS" option

---

## 🔍 Step 4: Verify Deployment

### 4.1 Test Your Site

Visit your domain: `https://academiapilot.com`

**Check:**
- [ ] Homepage loads correctly
- [ ] HTTPS is active (lock icon in browser)
- [ ] All navigation links work
- [ ] News Radar articles load
- [ ] Resources pages work
- [ ] Images display properly
- [ ] No 404 errors
- [ ] Mobile responsive works

### 4.2 Test Specific Pages

- https://academiapilot.com/news-radar
- https://academiapilot.com/resources
- https://academiapilot.com/resources/agency-blueprint
- https://academiapilot.com/resources/codex-mastery-pack
- https://academiapilot.com/about

### 4.3 Check Console

- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

---

## 🎯 Step 5: SEO Setup

### 5.1 Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `academiapilot.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://academiapilot.com/sitemap.xml`

### 5.2 Test SEO

- Check meta tags: https://metatags.io
- Test OG images: https://www.opengraph.xyz
- Verify robots.txt: `https://academiapilot.com/robots.txt`
- Verify sitemap: `https://academiapilot.com/sitemap.xml`

---

## 📊 Step 6: Analytics Setup (Optional)

### 6.1 Enable Plausible Analytics

1. Sign up at https://plausible.io
2. Add your domain
3. Get your script code
4. Update `app/layout.tsx`:

```tsx
// Uncomment the Plausible script section
<script defer data-domain="academiapilot.com" src="https://plausible.io/js/script.js"></script>
```

5. Rebuild and redeploy

### 6.2 Google Analytics (Alternative)

1. Create GA4 property
2. Get measurement ID
3. Add to `.env.production`
4. Rebuild and redeploy

---

## 🐛 Troubleshooting

### Issue: 404 on Page Refresh

**Solution:** Ensure `.htaccess` is uploaded to `public_html` root

### Issue: Images Not Loading

**Solution:** 
- Check image paths are correct
- Ensure images are in `/out` directory
- Verify file permissions (644 for files, 755 for folders)

### Issue: HTTPS Not Working

**Solution:**
- Wait for SSL installation to complete
- Clear browser cache
- Check "Force HTTPS" is enabled in Hostinger

### Issue: Slow Loading

**Solution:**
- Enable caching in `.htaccess` (already configured)
- Optimize images before uploading
- Consider using Cloudflare CDN

---

## 🔄 Updating Your Site

When you make changes:

1. **Make changes locally**
2. **Test with `npm run dev`**
3. **Build:** `npm run build`
4. **Upload only changed files** via FTP or File Manager
5. **Clear browser cache** and test

**Quick Update Process:**
```bash
# Build
npm run build

# Upload /out contents to public_html
# (Use FTP or File Manager)
```

---

## 📁 File Structure on Hostinger

```
public_html/
├── .htaccess              # Apache configuration
├── index.html             # Homepage
├── 404.html              # Custom 404 page
├── robots.txt            # SEO robots file
├── sitemap.xml           # SEO sitemap
├── news-radar/
│   ├── index.html
│   └── [article-slug]/
│       └── index.html
├── resources/
│   ├── index.html
│   ├── agency-blueprint/
│   │   └── index.html
│   └── codex-mastery-pack/
│       └── index.html
├── _next/                # Next.js assets
│   ├── static/
│   └── ...
└── [other pages]/
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads at https://academiapilot.com
- [ ] SSL certificate is active
- [ ] All pages are accessible
- [ ] Navigation works correctly
- [ ] Images load properly
- [ ] Forms work (if applicable)
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Submitted to Google Search Console
- [ ] Sitemap submitted
- [ ] Analytics configured (optional)
- [ ] Social media links updated
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices

---

## 🎉 You're Live!

Your Academia Pilot site is now deployed and accessible at:

**https://academiapilot.com**

### Next Steps:

1. **Share your site** on social media
2. **Monitor analytics** to track visitors
3. **Update content** regularly
4. **Engage with users** via newsletter
5. **Optimize based on feedback**

---

## 📞 Support

**Hostinger Support:**
- Live Chat: Available in Hostinger panel
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com

**Next.js Documentation:**
- Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## 🔐 Important Files to Keep

**Keep these files safe:**
- FTP credentials
- Hostinger login details
- Domain registrar login
- SSL certificate info (auto-renewed)
- Backup of `/out` directory

---

**Last Updated:** February 3, 2026  
**Version:** 1.0  
**Status:** Ready for Deployment ✅
