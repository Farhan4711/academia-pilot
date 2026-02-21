# OG Image Generation Instructions

The OG image template has been created at `public/og-image-template.html`.

## To Generate the OG Image:

### Option 1: Using Browser Screenshot
1. Open `public/og-image-template.html` in your browser
2. Set browser window to exactly 1200x630 pixels
3. Take a screenshot and save as `public/og-image.png`

### Option 2: Using Online Tool
1. Visit https://www.screely.com/ or similar
2. Upload the HTML file or paste the HTML content
3. Set dimensions to 1200x630
4. Download as PNG and save to `public/og-image.png`

### Option 3: Using Command Line (if you have Node.js puppeteer)
```bash
npm install puppeteer
node -e "const puppeteer = require('puppeteer'); (async () => { const browser = await puppeteer.launch(); const page = await browser.newPage(); await page.setViewport({ width: 1200, height: 630 }); await page.goto('file://' + __dirname + '/public/og-image-template.html'); await page.screenshot({ path: 'public/og-image.png' }); await browser.close(); })();"
```

## Current Status:
- Template created: ✅
- PNG file: ❌ (needs to be generated)
- Metadata updated: ✅ (commented out until PNG is ready)

Once you generate the PNG, uncomment the OG image lines in `app/layout.tsx`.
