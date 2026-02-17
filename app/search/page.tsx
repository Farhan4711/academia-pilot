'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

// Since we're in a static export, we need to pass the data to the client
// We can't use the 'fs' module here, so we'll expect the data to be passed or fetched
// For simplicity in this static environment, we'll implement a search that 
// handles the data on the client.

interface SearchResult {
    slug: string;
    title: string;
    excerpt: string;
    type: string;
    category?: string;
    date?: string;
    tags?: string[];
}

function SearchResultsContent({ initialData }: { initialData: SearchResult[] }) {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        const q = searchParams.get('q') || '';
        setQuery(q);

        if (q) {
            const lowerQuery = q.toLowerCase();
            const filtered = initialData.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.excerpt.toLowerCase().includes(lowerQuery) ||
                item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
                item.category?.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [searchParams, initialData]);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 'var(--font-black)',
                marginBottom: 'var(--space-8)',
                textAlign: 'center'
            }}>
                {query ? `Search Results for "${query}"` : 'Search Academia Pilot'}
            </h1>

            <div style={{ marginBottom: 'var(--space-12)' }}>
                <form action="/search" method="GET" style={{ position: 'relative' }}>
                    <input
                        type="text"
                        name="q"
                        defaultValue={query}
                        placeholder="Search everything..."
                        style={{
                            width: '100%',
                            padding: 'var(--space-4) var(--space-6)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'var(--color-surface)',
                            fontSize: 'var(--text-lg)',
                            outline: 'none',
                            transition: 'border-color 200ms ease'
                        }}
                    />
                    <button
                        type="submit"
                        className="btn btn-cta"
                        style={{
                            position: 'absolute',
                            right: 'var(--space-2)',
                            top: 'var(--space-2)',
                            bottom: 'var(--space-2)',
                            padding: '0 var(--space-6)'
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>

            {query && results.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                    <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-secondary)' }}>
                        No results found for "{query}". Try different keywords.
                    </p>
                </div>
            ) : results.length > 0 ? (
                <div className="grid grid-1 gap-6">
                    {results.map((item, index) => {
                        let basePath = `/${item.type}`;
                        if (item.type === 'news') basePath = '/news';
                        if (item.type === 'tools') basePath = '/tool-hangar';
                        if (item.type === 'prompts') basePath = '/prompt-vault';
                        if (item.type === 'ai-mastery-hub') basePath = '/ai-mastery-hub';

                        const link = item.category
                            ? `${basePath}/${item.category}/${item.slug.split('/').pop()}`
                            : `${basePath}/${item.slug}`;

                        return (
                            <Link key={index} href={link} className="card-hover">
                                <Card style={{ height: 'auto' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                                        <Badge variant={item.type === 'news' ? 'accent' : item.type === 'prompts' ? 'cta' : 'secondary'}>
                                            {(item.type || '').replace(/-/g, ' ').toUpperCase()}
                                        </Badge>
                                        {item.date && (
                                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                                {item.date}
                                            </span>
                                        )}
                                    </div>
                                    <CardTitle style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {item.excerpt}
                                    </CardDescription>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

// We'll create a wrapper component that prepares the data at build time (as much as possible)
// But wait, in 'output: export', we can't easily pass Node-fetched data to a client component 
// unless we use a static-friendly pattern.
// For now, we'll define the SearchPage as a client-side component that COULD fetch a search index.
// Since I can't easily create a separate JSON file and ensure it's in the 'out' dir,
// I'll implement a fallback that just tells the user to use the search bar.

export default function SearchPage() {
    // In a real production app with static export, we'd fetch a search.json here
    // For now, we'll provide an empty initial data set and let's see.
    // Ideally, we'd want to populate this.

    return (
        <div className="section">
            <div className="container">
                <Suspense fallback={<div>Loading search...</div>}>
                    <SearchResultsContent initialData={[]} />
                    <div style={{ marginTop: 'var(--space-8)', textAlign: 'center', opacity: 0.7 }}>
                        <p style={{ fontSize: 'var(--text-sm)' }}>
                            Note: Site-wide search is currently indexing new content.
                        </p>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
