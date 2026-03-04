/**
 * optimize-images.ts
 * Recursively compresses all PNG/JPG/WebP images under public/ using sharp.
 * Usage: npx tsx scripts/optimize-images.ts
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

function getAllImages(dir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            results = results.concat(getAllImages(full));
        } else if (EXTENSIONS.includes(path.extname(file).toLowerCase())) {
            results.push(full);
        }
    }
    return results;
}

async function optimizeImage(filePath: string): Promise<void> {
    const ext = path.extname(filePath).toLowerCase();
    const originalSize = fs.statSync(filePath).size;

    let pipeline = sharp(filePath);
    const meta = await pipeline.metadata();
    const width = meta.width || 0;

    if (width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }

    let outputBuffer: Buffer;

    if (ext === '.png') {
        outputBuffer = await pipeline.png({ quality: 85, compressionLevel: 9 }).toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
        outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    } else if (ext === '.webp') {
        outputBuffer = await pipeline.webp({ quality: 82, effort: 6 }).toBuffer();
    } else {
        return;
    }

    const newSize = outputBuffer.byteLength;
    const saving = originalSize - newSize;
    const pct = ((saving / originalSize) * 100).toFixed(1);

    if (saving > 0) {
        fs.writeFileSync(filePath, outputBuffer);
        const rel = path.relative(process.cwd(), filePath);
        console.log(`✅  ${rel}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (−${pct}%)`);
    } else {
        const rel = path.relative(process.cwd(), filePath);
        console.log(`⏭  ${rel}: already optimal (${(originalSize / 1024).toFixed(1)}KB)`);
    }
}

async function run() {
    const images = getAllImages(PUBLIC_DIR);
    console.log(`Found ${images.length} image(s) to process…\n`);
    let processed = 0;
    for (const img of images) {
        try {
            await optimizeImage(img);
            processed++;
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            console.warn(`⚠️  Skipped ${path.relative(process.cwd(), img)}: ${msg}`);
        }
    }
    console.log(`\n🏁 Done. Processed ${processed}/${images.length} image(s).`);
}

run().catch(err => { console.error(err); process.exit(1); });
