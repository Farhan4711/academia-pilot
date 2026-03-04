import fs from 'fs';
import path from 'path';

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

async function verifyContent() {
    const directories = ['news', 'tools', 'prompts', 'ai-mastery-hub'];
    const allSlugs = new Set<string>();
    const duplicateSlugs: string[] = [];

    for (const dir of directories) {
        const contentDir = path.join(process.cwd(), 'content', dir);
        if (!fs.existsSync(contentDir)) continue;

        const allFiles = getAllFiles(contentDir).filter(f => f.endsWith('.mdx'));

        for (const file of allFiles) {
            const fileContent = fs.readFileSync(file, 'utf8');

            // Simple parse for slug
            let slug = '';
            const slugMatch = fileContent.match(/slug:\s*["']([^"']+)["']/);
            if (slugMatch) {
                slug = slugMatch[1];
            } else {
                slug = path.basename(file, '.mdx');
            }

            if (allSlugs.has(slug)) {
                duplicateSlugs.push(slug);
            } else {
                allSlugs.add(slug);
            }
        }
    }

    console.log('--- Duplicate Slug Check ---');
    if (duplicateSlugs.length > 0) {
        console.error(`❌ Found ${duplicateSlugs.length} duplicate slugs:`);
        duplicateSlugs.forEach(slug => console.error(`  - ${slug}`));
    } else {
        console.log('✅ No duplicate slugs found in content files.');
    }
}

verifyContent().catch(console.error);
