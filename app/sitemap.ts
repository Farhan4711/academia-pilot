import { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://academiapilot.com';

    // 1. Static Routes
    const routes = [
        '',
        '/news',
        '/tool-hangar',
        '/prompt-vault',
        '/ai-mastery-hub',
        '/antigravity-guide',
        '/resources',
        '/course-navigator',
        '/about',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Content: News
    const news = getAllContent('news').map((item) => ({
        url: `${baseUrl}/news/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}`,
        lastModified: new Date(item.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Dynamic Content: Tools
    const tools = getAllContent('tools').map((item) => ({
        url: `${baseUrl}/tool-hangar/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}`,
        lastModified: new Date(item.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // 4. Dynamic Content: Prompts
    const prompts = getAllContent('prompts').map((item) => ({
        url: `${baseUrl}/prompt-vault/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}`,
        lastModified: new Date(item.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // 5. Dynamic Content: AI Mastery Hub
    const hub = getAllContent('ai-mastery-hub').map((item) => ({
        url: `${baseUrl}/ai-mastery-hub/${item.slug.split('/').pop()}`,
        lastModified: new Date(item.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...news, ...tools, ...prompts, ...hub];
}
