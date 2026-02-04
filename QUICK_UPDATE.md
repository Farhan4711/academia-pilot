# ⚡ Quick Update Guide

**Fast reference for updating your live site**

---

## 🚀 3-Step Update Process

### 1️⃣ Make Changes
- Edit content files
- Add new blog posts
- Update pages

### 2️⃣ Build
```bash
.\deploy.ps1
```
Or manually:
```bash
npm run build
```

### 3️⃣ Upload
**Via FTP (Recommended):**
- Open FileZilla
- Upload changed files from `/out` to `public_html`

**Via File Manager:**
- Upload specific changed files only

---

## 📝 Common Updates

### New Blog Post
1. Create `.mdx` file in `/content/news/`
2. Run `.\deploy.ps1`
3. Upload:
   - `/out/news-radar/[new-slug]/` folder
   - `/out/news-radar.html`

### Update Homepage
1. Edit `/app/page.tsx`
2. Run `.\deploy.ps1`
3. Upload `/out/index.html`

### Add Images
1. Add to `/public/`
2. Run `.\deploy.ps1`
3. Upload image from `/out/`

---

## ⚠️ Remember

- ✅ Always build before uploading
- ✅ Test locally first (`npm run dev`)
- ✅ Only upload files from `/out` folder
- ✅ Clear browser cache after updates (Ctrl+Shift+R)

---

## 🔧 FTP Quick Connect

**FileZilla Settings:**
- Host: `ftp.academiapilot.com`
- Username: [your FTP username]
- Password: [your FTP password]
- Port: 21

**Upload to:** `/public_html/`

---

## 📞 Need Help?

See `UPDATE_WORKFLOW.md` for detailed instructions.
