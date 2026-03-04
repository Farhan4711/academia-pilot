import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Get all files recursively
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

async function verifyNewsRoutes() {
    const contentDir = path.join(process.cwd(), 'content', 'news');
    const allFiles = getAllFiles(contentDir).filter(file => file.endsWith('.mdx'));

    console.log(`Found ${allFiles.length} news articles to verify.`);

    let successCount = 0;
    let failCount = 0;

    for (const file of allFiles) {
        const fileContent = fs.readFileSync(file, 'utf8');
        const { data } = matter(fileContent);

        // Extract category from path, assuming content/news/[category]/[slug].mdx
        const relativePath = path.relative(contentDir, file);
        const parts = relativePath.split(path.sep);

        // Fallback if structure isn't exactly category/slug
        let category = data.category || (parts.length > 1 ? parts[0] : 'general');
        // Ensure category is lowercase for URL
        category = category.toString().toLowerCase();

        let slug = data.slug;
        if (!slug) {
            slug = path.basename(file, '.mdx');
        }

        // Look for the expected HTML file in out/news/[category]/[slug].html
        // Next.js static export generates .html files or directories with index.html
        const expectedHtmlPath1 = path.join(process.cwd(), 'out', 'news', category, `${slug}.html`);
        const expectedHtmlPath2 = path.join(process.cwd(), 'out', 'news', category, slug, `index.html`);

        if (fs.existsSync(expectedHtmlPath1) || fs.existsSync(expectedHtmlPath2)) {
            successCount++;
        } else {
            console.error(`❌ Missing static route for: /news/${category}/${slug}`);
            failCount++;
        }
    }

    console.log('---');
    console.log(`✅ Verified: ${successCount}`);
    if (failCount > 0) {
        console.error(`❌ Failed: ${failCount}`);
        process.exit(1);
    } else {
        console.log('🚀 All news routes successfully exported!');
    }
}

verifyNewsRoutes().catch(console.error);
