# 🚀 Quick Deployment Reference

**Academia Pilot → Hostinger Deployment**

---

## ⚡ Quick Commands

```bash
# 1. Build
npm run build

# 2. Test locally
npx serve out

# 3. Upload /out folder to Hostinger public_html
```

---

## 📁 Files Created for Deployment

✅ **SEO Files:**
- `public/robots.txt` - Search engine instructions
- `public/sitemap.xml` - Site structure for SEO

✅ **Server Configuration:**
- `public/.htaccess` - Apache server rules (HTTPS, routing, caching)

✅ **Environment:**
- `.env.production` - Production environment variables

✅ **Documentation:**
- `DEPLOYMENT_GUIDE.md` - Complete step-by-step guide

---

## 🎯 Deployment Steps (Summary)

### 1. Build Project
```bash
npm run build
```
Creates `/out` folder with static files

### 2. Upload to Hostinger
- **Method 1:** File Manager (Hostinger panel)
- **Method 2:** FTP (FileZilla)

Upload contents of `/out` to `public_html`

### 3. Upload .htaccess
Copy `public/.htaccess` to `public_html/.htaccess`

### 4. Configure SSL
- Hostinger panel → Security → SSL
- Install free Let's Encrypt certificate
- Enable "Force HTTPS"

### 5. Point Domain
- Update nameservers to Hostinger
- Or add A record to Hostinger IP

### 6. Verify
Visit https://academiapilot.com

---

## 🔧 Important Files

| File | Location | Purpose |
|------|----------|---------|
| `.htaccess` | `public_html/` | Server configuration |
| `robots.txt` | `public_html/` | SEO crawling rules |
| `sitemap.xml` | `public_html/` | SEO site structure |
| `.env.production` | Root (local only) | Environment variables |

---

## ✅ Verification Checklist

- [ ] Site loads at https://academiapilot.com
- [ ] SSL active (lock icon)
- [ ] All pages work
- [ ] No 404 errors
- [ ] Mobile responsive
- [ ] Submit sitemap to Google Search Console

---

## 🐛 Common Issues

**404 on refresh?**
→ Upload `.htaccess` to root

**Images not loading?**
→ Check paths, verify upload

**No HTTPS?**
→ Install SSL certificate in Hostinger

---

## 📞 Quick Links

- **Hostinger Panel:** https://hpanel.hostinger.com
- **Google Search Console:** https://search.google.com/search-console
- **Full Guide:** See `DEPLOYMENT_GUIDE.md`

---

**Status:** Ready to deploy! ✅
