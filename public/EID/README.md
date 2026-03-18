# 🌙 Celestial Eid Card — Integration Guide

## Files Delivered

| File | Location in your project |
|------|--------------------------|
| `page.tsx` | `app/eid/page.tsx` |
| `EidExperience.tsx` | `app/eid/EidExperience.tsx` |
| `eid.module.css` | `app/eid/eid.module.css` |
| `og-eid.svg` | `public/og-eid.svg` |

---

## Step 1 — Add Google Fonts

In `app/layout.tsx`, add to the `<head>` (or use `next/font/google`):

```tsx
// Option A — next/font/google (recommended for Next.js 14/15)
import { Reem_Kufi, Amiri, Cinzel } from 'next/font/google';

const reemKufi = Reem_Kufi({ subsets: ['arabic', 'latin'], variable: '--font-reem-kufi' });
const amiri    = Amiri({ subsets: ['arabic', 'latin'], weight: ['400','700'], variable: '--font-amiri' });
const cinzel   = Cinzel({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-cinzel' });
```

Then wrap `<body>` with `${reemKufi.variable} ${amiri.variable} ${cinzel.variable}`.

```css
/* In globals.css — map variables to font names */
:root {
  --font-reem-kufi: 'Reem Kufi', serif;
  --font-amiri:     'Amiri', serif;
  --font-cinzel:    'Cinzel', serif;
}
```

**Option B — Google CDN (simpler, works immediately)**

Add to `app/layout.tsx` inside your metadata or a `<link>` in a custom `_document`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600;700&family=Reem+Kufi:wght@400;600;700&display=swap" rel="stylesheet" />
```

---

## Step 2 — Install html2canvas

```bash
npm install html2canvas
# or
yarn add html2canvas
```

> Note: `html2canvas` is imported **dynamically** inside `EidExperience.tsx` — no SSR issues.

---

## Step 3 — Add the Audio File

Place your oud/duff track at:
```
public/eid-audio.mp3
```

> Free source: search **"oud background Ramadan loop"** on freesound.org or pixabay.com.
> Keep file size under 1MB for fast mobile loading.
> The audio is **muted by default** — users tap 🔇 to enable.

---

## Step 4 — Generate the OG PNG

The `og-eid.svg` is included. To generate the PNG for WhatsApp previews, add to `scripts/generate-eid-og.ts`:

```ts
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

async function generate() {
  const svg = readFileSync(join(process.cwd(), 'public/og-eid.svg'));
  await sharp(svg)
    .png()
    .resize(1200, 630)
    .toFile(join(process.cwd(), 'public/og-eid.png'));
  console.log('✓ og-eid.png generated');
}
generate();
```

Run with:
```bash
npx ts-node --project tsconfig.json scripts/generate-eid-og.ts
```

---

## Step 5 — Add to globals.css (design tokens)

```css
:root {
  --eid-navy:   #0A0F2C;
  --eid-gold:   #D4AF37;
  --eid-emerald:#004225;
  --eid-cream:  #F5F0DC;
  --eid-dark:   #060B1E;
}

/* Ensure full viewport height works on mobile */
html, body {
  height: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
}
```

---

## URL Structure

```
/eid                          → Generic card (tap to open)
/eid?to=Ali&from=Sara&msg=0   → Personalized (auto-opens)
```

### Parameters

| Param | Type | Description |
|-------|------|-------------|
| `to`  | string | Receiver's name (URL-encoded) |
| `from`| string | Sender's name (URL-encoded) |
| `msg` | 0–4 | Message template index |

### Message Templates

| Index | Label | Arabic phrase |
|-------|-------|---------------|
| 0 | Spiritual | تَقَبَّلَ اللّٰهُ مِنَّا وَمِنْكُمْ |
| 1 | Joyful | جَعَلَ اللّٰهُ عِيدَكُمْ فَرَحاً |
| 2 | Traditional | كُلُّ عَامٍ وَأَنْتُمْ بِخَيْر |
| 3 | Prayer | عَسَاكُمْ مِنْ عُوَّادَه |
| 4 | Warm | عِيدٌ مُبَارَك |

---

## Animation Phases (Timeline)

| Time | Event |
|------|-------|
| 0s | Intro screen — lantern + bismillah |
| Tap | Fireworks canvas (3 bursts, 30 particles each) |
| +0.3s | Starfield fades in |
| +0.6s | Mosque silhouette rises from bottom |
| +0.8s | Arabesque corner borders appear |
| +1.2s | Crescent + star drops from top |
| +1.6s | Arabic title fades in |
| +2.0s | Lanterns appear and begin swaying |
| +2.4s | Message box slides in |
| +2.8s | Typewriter: Arabic salam text |
| +5.2s | Action buttons appear |
| +5.6s | Audio toggle appears |

---

## WhatsApp Sharing

When shared, WhatsApp will read the Open Graph tags set by `generateMetadata()`:

- **Title**: Personalized with receiver's name if present
- **Description**: Sender name + blessing message  
- **Image**: `/og-eid.png` — 1200×630 mosque silhouette card
- **Theme color**: `#0A0F2C` (deep navy — colors the browser chrome on Android)

---

## Performance Notes

- Fireworks: `requestAnimationFrame` + max 30 particles — safe on mid-range Android
- Stars: pure CSS `animation` — no JS, GPU-accelerated  
- Lanterns: CSS `transform: rotate` only — no layout reflow
- All animations use `will-change: transform, opacity`
- `html2canvas` loaded lazily — zero impact on initial load
- `eid-audio.mp3` loaded on user gesture only — no preload

---

## Browser Support

| Browser | Support |
|---------|---------|
| Safari iOS 14+ | ✅ Full |
| Chrome Android | ✅ Full |
| WhatsApp WebView (iOS) | ✅ Full |
| WhatsApp WebView (Android) | ✅ Full |
| Samsung Internet | ✅ Full |
| Firefox Android | ✅ Full |
