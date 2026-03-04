'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

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

function getResultLink(item: SearchDoc): string {
    const basePaths: Record<string, string> = {
        news: '/news',
        tools: '/tool-hangar',
        prompts: '/prompt-vault',
        'ai-mastery-hub': '/ai-mastery-hub',
    };
    const base = basePaths[item.type] || `/${item.type}`;
    const leafSlug = item.slug.split('/').pop();
    return item.category && item.category !== 'general'
        ? `${base}/${item.category}/${leafSlug}/`
        : `${base}/${leafSlug}/`;
}

const TYPE_BADGE: Record<string, 'accent' | 'cta' | 'secondary'> = {
    news: 'accent',
    prompts: 'cta',
    tools: 'secondary',
    'ai-mastery-hub': 'secondary',
};

function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [allDocs, setAllDocs] = useState<SearchDoc[]>([]);
    const [input, setInput] = useState(searchParams.get('q') || '');
    const [results, setResults] = useState<SearchDoc[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeType, setActiveType] = useState<string>('all');

    // Load the static index once
    useEffect(() => {
        fetch('/search-index.json')
            .then((r) => r.json())
            .then((docs: SearchDoc[]) => {
                setAllDocs(docs);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Run search whenever query or filter changes
    const runSearch = useCallback(
        (q: string, type: string) => {
            if (!q.trim()) { setResults([]); return; }
            const lq = q.toLowerCase();
            let filtered = allDocs.filter(
                (d) =>
                    d.title.toLowerCase().includes(lq) ||
                    d.excerpt.toLowerCase().includes(lq) ||
                    d.tags.toLowerCase().includes(lq) ||
                    d.category.toLowerCase().includes(lq)
            );
            if (type !== 'all') filtered = filtered.filter((d) => d.type === type);
            setResults(filtered);
        },
        [allDocs]
    );

    // Sync with URL query param
    useEffect(() => {
        const q = searchParams.get('q') || '';
        setInput(q);
        if (!loading) runSearch(q, activeType);
    }, [searchParams, loading, runSearch, activeType]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search/?q=${encodeURIComponent(input.trim())}`);
    };

    const types = ['all', 'news', 'tools', 'prompts', 'ai-mastery-hub'];
    const query = searchParams.get('q') || '';

    return (
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {/* Page heading */}
            <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 'var(--font-black)',
                marginBottom: 'var(--space-8)',
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--color-text-primary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
                {query ? `Results for "${query}"` : 'Search Academia Pilot'}
            </h1>

            {/* Search form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: 'var(--space-6)', position: 'relative' }}>
                <input
                    id="search-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search news, tools, prompts, guides..."
                    autoFocus
                    style={{
                        width: '100%',
                        padding: 'var(--space-4) var(--space-16) var(--space-4) var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--text-lg)',
                        outline: 'none',
                        transition: 'border-color 200ms',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                />
                <button
                    type="submit"
                    className="btn-primary"
                    style={{ position: 'absolute', right: 'var(--space-2)', top: 'var(--space-2)', bottom: 'var(--space-2)', padding: '0 var(--space-5)' }}
                >
                    Search
                </button>
            </form>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
                {types.map((t) => (
                    <button
                        key={t}
                        onClick={() => { setActiveType(t); runSearch(query, t); }}
                        style={{
                            padding: 'var(--space-1) var(--space-4)',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid var(--color-border)',
                            backgroundColor: activeType === t ? 'var(--color-accent)' : 'transparent',
                            color: activeType === t ? '#fff' : 'var(--color-text-secondary)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: '500',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            transition: 'all 150ms',
                        }}
                    >
                        {t === 'ai-mastery-hub' ? 'Mastery Hub' : t === 'all' ? 'All' : t}
                    </button>
                ))}
            </div>

            {/* Results */}
            {loading ? (
                <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading index…</p>
            ) : query && results.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>🔍</div>
                    <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-secondary)' }}>
                        No results for <strong>"{query}"</strong>. Try different keywords.
                    </p>
                </div>
            ) : results.length > 0 ? (
                <>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                        {results.length} result{results.length !== 1 ? 's' : ''} found
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {results.map((item) => (
                            <Link key={item.id} href={getResultLink(item)} style={{ textDecoration: 'none' }}>
                                <Card style={{ height: 'auto', transition: 'border-color 150ms' }}
                                    className="card-hover">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                                        <Badge variant={TYPE_BADGE[item.type] || 'secondary'}>
                                            {item.type.replace(/-/g, ' ').toUpperCase()}
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
                                    <CardDescription>{item.excerpt}</CardDescription>
                                    {item.tags && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                                            {item.tags.split(' ').filter(Boolean).slice(0, 4).map((tag) => (
                                                <span key={tag} style={{
                                                    fontSize: 'var(--text-xs)',
                                                    padding: '2px 8px',
                                                    borderRadius: 'var(--radius-full)',
                                                    backgroundColor: 'rgba(255,255,255,0.07)',
                                                    color: 'var(--color-text-muted)',
                                                }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </Card>
                            </Link>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className="section">
            <div className="container">
                <Suspense fallback={<div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>Loading search…</div>}>
                    <SearchContent />
                </Suspense>
            </div>
        </div>
    );
}
