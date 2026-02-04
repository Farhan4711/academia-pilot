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
 * @param type - Content type (news, tools, prompts, courses)
 * @returns Array of content items sorted by date (newest first)
 */
export function getAllContent(type: 'news' | 'tools' | 'prompts' | 'courses'): ContentItem[] {
    const typeDirectory = path.join(contentDirectory, type);

    // Return empty array if directory doesn't exist
    if (!fs.existsSync(typeDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(typeDirectory)
        .filter(file => file.endsWith('.mdx'));

    const allContent = fileNames.map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(typeDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
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
            ...data, // Include any additional custom fields
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
export function getLatestContent(type: 'news' | 'tools' | 'prompts' | 'courses', limit: number): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.slice(0, limit);
}

/**
 * Get content filtered by category
 * @param type - Content type
 * @param category - Category to filter by
 * @returns Array of filtered content items
 */
export function getContentByCategory(type: 'news' | 'tools' | 'prompts' | 'courses', category: string): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.category === category);
}

/**
 * Get featured content
 * @param type - Content type
 * @returns Array of featured content items
 */
export function getFeaturedContent(type: 'news' | 'tools' | 'prompts' | 'courses'): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.featured === true);
}

/**
 * Get content filtered by tag
 * @param type - Content type
 * @param tag - Tag to filter by
 * @returns Array of filtered content items
 */
export function getContentByTag(type: 'news' | 'tools' | 'prompts' | 'courses', tag: string): ContentItem[] {
    const allContent = getAllContent(type);
    return allContent.filter(item => item.tags?.includes(tag));
}

/**
 * Search content by query
 * @param type - Content type
 * @param query - Search query
 * @returns Array of matching content items
 */
export function searchContent(type: 'news' | 'tools' | 'prompts' | 'courses', query: string): ContentItem[] {
    const allContent = getAllContent(type);
    const lowerQuery = query.toLowerCase();

    return allContent.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.excerpt?.toLowerCase().includes(lowerQuery) ||
        item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

/**
 * Get single content item by slug
 * @param type - Content type
 * @param slug - Content slug
 * @returns Content item with full content, or null if not found
 */
export function getContentBySlug(type: 'news' | 'tools' | 'prompts' | 'courses', slug: string): (ContentItem & { content: string }) | null {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
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
export function getCategories(type: 'news' | 'tools' | 'prompts' | 'courses'): string[] {
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
export function getTags(type: 'news' | 'tools' | 'prompts' | 'courses'): string[] {
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
    type: 'news' | 'tools' | 'prompts' | 'courses',
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
export function getContentStats(type: 'news' | 'tools' | 'prompts' | 'courses') {
    const allContent = getAllContent(type);

    return {
        total: allContent.length,
        featured: allContent.filter(item => item.featured).length,
        categories: getCategories(type).length,
        tags: getTags(type).length,
        latest: allContent[0]?.date || null,
    };
}
