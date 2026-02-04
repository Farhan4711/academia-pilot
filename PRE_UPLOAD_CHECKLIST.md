# ✅ Pre-Upload Checklist

**Complete this checklist before uploading to Hostinger**

---

## 🔧 Build Preparation

- [ ] **Project builds successfully**
  ```bash
  npm run build
  ```
  - Check for errors in console
  - Verify `/out` folder is created

- [ ] **Test build locally**
  ```bash
  npx serve out
  ```
  - Visit http://localhost:3000
  - Test all pages
  - Check for console errors

---

## 📁 Files to Upload

### From `/out` folder → `public_html/`

Upload ALL contents of `/out` folder:

- [ ] `index.html`
- [ ] `404.html`
- [ ] `_next/` folder (all Next.js assets)
- [ ] `news-radar/` folder
- [ ] `resources/` folder
- [ ] `about/` folder
- [ ] `privacy-policy/` folder
- [ ] `terms-of-service/` folder
- [ ] All other page folders
- [ ] `robots.txt`
- [ ] `sitemap.xml`

### From `/public` folder → `public_html/`

- [ ] `.htaccess` file (IMPORTANT!)

---

## 🌐 Hostinger Configuration

- [ ] **Hostinger account active**
- [ ] **Hosting plan selected**
- [ ] **FTP credentials available** (if using FTP)
- [ ] **Domain pointed to Hostinger**
  - Nameservers updated OR
  - A record configured

---

## 🔐 SSL Certificate

- [ ] **SSL certificate installed**
  - Hostinger panel → Security → SSL
  - Install free Let's Encrypt
- [ ] **Force HTTPS enabled**

---

## ✅ Post-Upload Verification

After uploading, check:

- [ ] **Site loads:** https://academiapilot.com
- [ ] **HTTPS active** (lock icon in browser)
- [ ] **Homepage displays correctly**
- [ ] **Navigation works**
- [ ] **All pages load:**
  - [ ] /news-radar
  - [ ] /resources
  - [ ] /resources/agency-blueprint
  - [ ] /resources/codex-mastery-pack
  - [ ] /about
- [ ] **No 404 errors**
- [ ] **Images load**
- [ ] **Mobile responsive**
- [ ] **No console errors** (F12 → Console)

---

## 📊 SEO Setup

- [ ] **robots.txt accessible**
  - Visit: https://academiapilot.com/robots.txt
- [ ] **sitemap.xml accessible**
  - Visit: https://academiapilot.com/sitemap.xml
- [ ] **Submit to Google Search Console**
  - Add property
  - Verify ownership
  - Submit sitemap

---

## 🎯 Optional Enhancements

- [ ] **Analytics configured** (Plausible/Google Analytics)
- [ ] **OG image generated** (from template)
- [ ] **Email service integrated** (Beehiiv)
- [ ] **Social media links updated**

---

## 📝 Upload Methods

Choose ONE method:

### Method 1: File Manager ✅ Recommended
- Easier for beginners
- No software needed
- Upload via browser

### Method 2: FTP
- Better for large sites
- Faster uploads
- Requires FileZilla

See `UPLOAD_GUIDE.md` for detailed instructions.

---

## ⚠️ Important Notes

1. **Build first!** Always run `npm run build` before uploading
2. **Upload .htaccess!** Critical for routing and HTTPS
3. **Test locally!** Use `npx serve out` to test before upload
4. **Backup existing files!** If you have content already
5. **Wait for DNS!** Can take up to 48 hours

---

## 🚀 Ready to Upload?

If all items above are checked, you're ready!

**Next:** Follow `UPLOAD_GUIDE.md` for step-by-step instructions.

---

**Status:** ⏳ Awaiting Upload
