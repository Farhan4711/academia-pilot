import { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/content';

export const dynamic = 'force-static';

const BASE_URL = 'https://academiapilot.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Static Pages
    const staticPages = [
        '',
        '/news-radar',
        '/resources',
        '/antigravity-guide',
        '/tool-hangar',
        '/prompt-vault',
        '/course-navigator',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: (route === '' || route === '/news-radar') ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : (route === '/privacy-policy' || route === '/terms-of-service') ? 0.3 : 0.8,
    }));

    // 2. Resource Pages (Assuming these are static currently based on old sitemap)
    const resourcePages = [
        '/resources/agency-blueprint',
        '/resources/codex-mastery-pack',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 3. Dynamic News Articles
    const newsPages = getAllContent('news').map((article) => {
        const category = article.category || 'uncategorized';
        const cleanSlug = article.slug.split('/').pop() || article.slug;
        return {
            url: `${BASE_URL}/news/${category}/${cleanSlug}/`,
            lastModified: new Date(article.date).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    // 4. Dynamic Tool Hangar Items
    const toolPages = getAllContent('tools').map((tool) => {
        const category = tool.category || 'uncategorized';
        const cleanSlug = tool.slug.split('/').pop() || tool.slug;
        return {
            url: `${BASE_URL}/tool-hangar/${category}/${cleanSlug}/`,
            lastModified: new Date(tool.date).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        };
    });

    // 5. Dynamic Prompt Vault Items
    const promptPages = getAllContent('prompts').map((prompt) => {
        const category = prompt.category || 'uncategorized';
        const cleanSlug = prompt.slug.split('/').pop() || prompt.slug;
        return {
            url: `${BASE_URL}/prompt-vault/${category}/${cleanSlug}/`,
            lastModified: new Date(prompt.date).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        };
    });

    // 6. AI Mastery Hub Articles
    const masteryPages = getAllContent('ai-mastery-hub').map((article) => {
        const category = article.category || 'uncategorized';
        const cleanSlug = article.slug.split('/').pop() || article.slug;
        return {
            url: `${BASE_URL}/ai-mastery-hub/${category}/${cleanSlug}/`,
            lastModified: new Date(article.date).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        };
    });

    return [
        ...staticPages,
        ...resourcePages,
        ...newsPages,
        ...toolPages,
        ...promptPages,
        ...masteryPages
    ] as MetadataRoute.Sitemap;
}
