// Enhanced Content Management Utility Library
// Provides automated content loading, filtering, and categorization

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category?: string;
    tags?: string[];
    badge?: string;
    featured?: boolean;
    pilotScore?: number;
    premium?: boolean;
    author?: string;
    pricing?: string;
    features?: string[];
    level?: string;
    duration?: string;
    url?: string;
    content?: string;
    [key: string]: any; // Allow additional custom fields
}

/**
 * Get all content of a specific type
 * @param type - Content type (news, tools, prompts, courses, ai-mastery-hub)
 * @returns Array of content items sorted by date (newest first)
 */
export function getAllContent(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub'): ContentItem[] {
    const typeDirectory = path.join(contentDirectory, type);

    // Return empty array if directory doesn't exist
    if (!fs.existsSync(typeDirectory)) {
        return [];
    }

    const getAllFiles = (dir: string, baseDir: string = dir): string[] => {
        let results: string[] = [];
        const list = fs.readdirSync(dir);
        list.forEach((file) => {
            file = path.join(dir, file);
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(getAllFiles(file, baseDir));
            } else if (file.endsWith('.mdx')) {
                results.push(path.relative(baseDir, file));
            }
        });
        return results;
    };

    const filePaths = getAllFiles(typeDirectory);

    const allContent = filePaths.map(filePath => {
        const slug = filePath.replace(/\\/g, '/').replace(/\.mdx$/, '');
        const fullPath = path.join(typeDirectory, filePath);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        // Determine category from directory structure if not explicitly set
        const pathParts = slug.split('/');
        const categoryFromPath = pathParts.length > 1 ? pathParts[0] : undefined;

        return {
            slug,
            title: data.title || '',
            date: data.date || '',
            excerpt: data.excerpt || '',
            category: data.category || categoryFromPath,
            tags: data.tags || [],
            badge: data.badge,
            featured: data.featured || false,
            pilotScore: data.pilotScore,
            premium: data.premium || false,
            author: data.author,
            pricing: data.pricing,
            features: data.features || [],
            level: data.level,
            duration: data.duration,
            url: data.url,
            ...data,
        } as ContentItem;
    });

    // Sort by date, newest first
    return allContent.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get latest N items
 * @param type - Content type
 * @param limit - Number of items to return
 * @returns Array of latest content items
 */
export function getLatestContent(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub', limit: number): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.slice(0, limit);
}

/**
 * Get content filtered by category
 * @param type - Content type
 * @param category - Category to filter by
 * @returns Array of filtered content items
 */
export function getContentByCategory(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub', category: string): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.category === category);
}

/**
 * Get featured content
 * @param type - Content type
 * @returns Array of featured content items
 */
export function getFeaturedContent(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub'): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.featured === true);
}

/**
 * Get content filtered by tag
 * @param type - Content type
 * @param tag - Tag to filter by
 * @returns Array of filtered content items
 */
export function getContentByTag(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub', tag: string): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.tags?.includes(tag));
}

/**
 * Search content by query
 * @param type - Content type
 * @param query - Search query
 * @returns Array of matching content items
 */
export function searchContent(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub', query: string): ContentItem[] {
    const allContent = getAllContent(type);
    const lowerQuery = query.toLowerCase();

    return allContent.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.excerpt?.toLowerCase().includes(lowerQuery) ||
        item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

/**
 * Search across all content types
 * @param query - Search query
 * @returns Array of matching content items with their type
 */
export function searchAllContent(query: string): (ContentItem & { type: string })[] {
    const types: ('news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub')[] = [
        'news', 'tools', 'prompts', 'courses', 'ai-mastery-hub'
    ];

    let results: (ContentItem & { type: string })[] = [];

    types.forEach(type => {
        const matches = searchContent(type, query);
        results = results.concat(matches.map(item => ({ ...item, type })));
    });

    return results;
}

/**
 * Get single content item by slug
 * @param type - Content type
 * @param slug - Content slug
 * @returns Content item with full content, or null if not found
 */
export function getContentBySlug(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub', slug: string): (ContentItem & { content: string }) | null {
    // Try to find the file directly first
    let fullPath = path.join(contentDirectory, type, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        // If not found, it might be in a subdirectory but the slug passed doesn't include it
        // Search recursively for a file matching the slug
        const findFile = (dir: string): string | null => {
            const list = fs.readdirSync(dir);
            for (const file of list) {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                if (stat && stat.isDirectory()) {
                    const found = findFile(filePath);
                    if (found) return found;
                } else if (file === `${slug}.mdx`) {
                    return filePath;
                }
            }
            return null;
        };

        const foundPath = findFile(path.join(contentDirectory, type));
        if (foundPath) {
            fullPath = foundPath;
        } else {
            return null;
        }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        category: data.category,
        tags: data.tags || [],
        badge: data.badge,
        featured: data.featured || false,
        pilotScore: data.pilotScore,
        premium: data.premium || false,
        author: data.author,
        pricing: data.pricing,
        features: data.features || [],
        level: data.level,
        duration: data.duration,
        url: data.url,
        ...data,
    };
}

/**
 * Get all unique categories for a content type
 * @param type - Content type
 * @returns Array of unique category names
 */
export function getCategories(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub'): string[] {
    const allContent = getAllContent(type);
    const categories = new Set(
        allContent
            .map(item => item.category)
            .filter((category): category is string => Boolean(category))
    );
    return Array.from(categories).sort();
}

/**
 * Get all unique tags for a content type
 * @param type - Content type
 * @returns Array of unique tag names
 */
export function getTags(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub'): string[] {
    const allContent = getAllContent(type);
    const tags = new Set(allContent.flatMap(item => item.tags || []));
    return Array.from(tags).sort();
}

/**
 * Get related content based on tags
 * @param type - Content type
 * @param currentSlug - Current item slug to exclude
 * @param tags - Tags to match
 * @param limit - Maximum number of related items
 * @returns Array of related content items
 */
export function getRelatedContent(
    type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub',
    currentSlug: string,
    tags: string[] = [],
    limit: number = 3
): ContentItem[] {
    const allContent = getAllContent(type);

    // Filter out current item and calculate relevance score
    const relatedContent = allContent
        .filter(item => item.slug !== currentSlug)
        .map(item => {
            const matchingTags = item.tags?.filter(tag => tags.includes(tag)) || [];
            return {
                ...item,
                relevanceScore: matchingTags.length,
            };
        })
        .filter(item => item.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore);

    return relatedContent.slice(0, limit);
}

/**
 * Format date string to readable format
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Get content statistics
 * @param type - Content type
 * @returns Object with content statistics
 */
export function getContentStats(type: 'news' | 'tools' | 'prompts' | 'courses' | 'ai-mastery-hub') {
    const allContent = getAllContent(type);

    return {
        total: allContent.length,
        featured: allContent.filter(item => item.featured).length,
        categories: getCategories(type).length,
        tags: getTags(type).length,
        latest: allContent[0]?.date || null,
    };
}
