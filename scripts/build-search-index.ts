/**
 * build-search-index.ts
 * Run this script BEFORE or AS PART OF `npm run build` to generate
 * public/search-index.json which the client-side search page will fetch.
 *
 * Usage: npx tsx scripts/build-search-index.ts
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface SearchDoc {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    type: string;
    category: string;
    tags: string;
    date: string;
}

function getAllMdxFiles(dir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            results = results.concat(getAllMdxFiles(fullPath));
        } else if (file.endsWith('.mdx')) {
            results.push(fullPath);
        }
    }
    return results;
}

async function buildIndex() {
    const contentRoot = path.join(process.cwd(), 'content');
    const types = [
        { dir: 'news', type: 'news' },
        { dir: 'tools', type: 'tools' },
        { dir: 'prompts', type: 'prompts' },
        { dir: 'ai-mastery-hub', type: 'ai-mastery-hub' },
    ];

    const docs: SearchDoc[] = [];
    let id = 0;

    for (const { dir, type } of types) {
        const dirPath = path.join(contentRoot, dir);
        const files = getAllMdxFiles(dirPath);

        for (const file of files) {
            try {
                const raw = fs.readFileSync(file, 'utf8');
                const { data } = matter(raw);

                const relativePath = path.relative(dirPath, file);
                const slug = relativePath.replace(/\\/g, '/').replace(/\.mdx$/, '');
                const parts = slug.split('/');
                const categoryFromPath = parts.length > 1 ? parts[0] : 'general';

                docs.push({
                    id: String(id++),
                    slug,
                    title: data.title || '',
                    excerpt: data.excerpt || data.description || '',
                    type,
                    category: data.category || categoryFromPath,
                    tags: Array.isArray(data.tags) ? data.tags.join(' ') : '',
                    date: data.date || '',
                });
            } catch {
                // skip malformed files
            }
        }
    }

    const outPath = path.join(process.cwd(), 'public', 'search-index.json');
    fs.writeFileSync(outPath, JSON.stringify(docs, null, 2), 'utf8');
    console.log(`✅ Search index built: ${docs.length} documents → public/search-index.json`);
}

buildIndex().catch((err) => { console.error(err); process.exit(1); });
