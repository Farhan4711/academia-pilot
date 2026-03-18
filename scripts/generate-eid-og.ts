import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const svgPath = path.join(root, 'public', 'og-eid.svg');
const outPath = path.join(root, 'public', 'og-eid.png');

async function main() {
  if (!fs.existsSync(svgPath)) {
    console.log('[eid-og] Skip: missing public/og-eid.svg');
    return;
  }

  const svg = fs.readFileSync(svgPath);

  await sharp(svg)
    .resize(1200, 630, { fit: 'cover' })
    .png({ quality: 92 })
    .toFile(outPath);

  console.log('[eid-og] Wrote public/og-eid.png');
}

main().catch((err) => {
  console.error('[eid-og] Failed:', err);
  process.exitCode = 1;
});
