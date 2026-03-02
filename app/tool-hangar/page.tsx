import { getAllContent, getCategories, searchContent } from '@/lib/content';
import Badge from '@/components/ui/Badge';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { getCategoryMetadata } from '@/lib/categories';
import ToolHangarFilters from '@/components/tools/ToolHangarFilters';

const meta = getCategoryMetadata('tool-hangar');

export const metadata = {
    title: "The Tool Hangar - Pilot-Vetted AI Tools & Ranking Engine",
    description: meta?.seoDescription || "The ultimate directory for the agentic era. Vetted AI models, IDEs, and research tools that power 10x workflows.",
    alternates: {
        canonical: "/tool-hangar/",
    },
};

export default function ToolHangarPage({
    searchParams
}: {
    searchParams: { q?: string; category?: string; pricing?: string }
}) {
    const allTools = getAllContent('tools');
    const categories = getCategories('tools');

    // Filtering logic
    const query = searchParams.q?.toLowerCase() || '';
    const activeCategory = searchParams.category || '';
    const activePricing = searchParams.pricing || '';

    let displayedTools = allTools;

    if (query) {
        displayedTools = searchContent('tools', query);
    }

    if (activeCategory) {
        displayedTools = displayedTools.filter(t => t.category === activeCategory);
    }

    if (activePricing) {
        displayedTools = displayedTools.filter(t => t.pricingTier?.toLowerCase() === activePricing.toLowerCase() || t.pricing?.toLowerCase().includes(activePricing.toLowerCase()));
    }

    const featuredTools = allTools.filter(t => t.featured).slice(0, 3);
    const trendingTools = allTools.slice(0, 6); // Just newest for now

    // Derived filters
    const pricingTiers = Array.from(new Set(allTools.map(t => t.pricingTier).filter(Boolean))) as string[];

    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: '1.2'
                        }}>
                            {meta?.introTitle || 'The Agentic Directory'}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.6',
                            textAlign: 'center',
                            maxWidth: '900px',
                            margin: '0 auto var(--space-8)'
                        }}>
                            {meta?.introContent || 'Discover, compare, and deploy the most powerful AI models, IDEs, and tools vetted for modern workflows.'}
                        </div>

                        {/* Premium Search & Filters Wrapper */}
                        <div style={{
                            backgroundColor: 'rgba(26, 31, 46, 0.7)', /* Dark surface color (#1A1F2E) with opacity */
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            padding: 'var(--space-6)',
                            borderRadius: 'calc(var(--radius-xl) + 4px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                            marginBottom: 'var(--space-12)',
                            position: 'relative',
                            zIndex: 10
                        }}>
                            <ToolHangarFilters
                                query={query}
                                activeCategory={activeCategory}
                                activePricing={activePricing}
                                categories={categories}
                                pricingTiers={pricingTiers}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured & Trending Section (Only show if no search/filters active) */}
            {(!query && !activeCategory && !activePricing) && (
                <>
                    {featuredTools.length > 0 && (
                        <section className="section">
                            <div className="container">
                                <h2 className="section-title">Featured Tools</h2>
                                <div className="grid grid-3">
                                    {featuredTools.map((tool) => (
                                        <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`} variant="highlight">
                                            <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                                <Badge variant="success">Featured</Badge>
                                                <span style={{ fontSize: 'var(--text-xl)' }}>🔥</span>
                                            </div>

                                            <CardTitle>{tool.title}</CardTitle>
                                            <CardDescription>{tool.excerpt}</CardDescription>

                                            <div className="flex flex-wrap gap-1" style={{ marginTop: 'var(--space-4)' }}>
                                                {tool.tags?.slice(0, 3).map(tag => (
                                                    <Badge key={tag} variant="secondary" style={{ fontSize: '10px' }}>{tag}</Badge>
                                                ))}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                        <div className="container">
                            <h2 className="section-title">Trending & Updated</h2>
                            <div className="grid grid-3">
                                {trendingTools.map((tool) => (
                                    <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`}>
                                        <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                            <Badge variant="accent">{tool.pricingTier || tool.pricing || 'Freemium'}</Badge>
                                            {tool.apiAvailable && <Badge variant="success">API</Badge>}
                                        </div>
                                        <CardTitle>{tool.title}</CardTitle>
                                        <CardDescription>{tool.excerpt}</CardDescription>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* All Tools Grid or Filter Results */}
            <section className="section">
                <div className="container">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="section-title" style={{ marginBottom: 0 }}>
                            {query || activeCategory || activePricing ? 'Search Results' : 'All Vetted Tools'}
                        </h2>
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                            Showing {displayedTools.length} results
                        </span>
                    </div>

                    {displayedTools.length > 0 ? (
                        <div className="grid grid-3">
                            {displayedTools.map((tool) => (
                                <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="accent">{tool.pricingTier || tool.pricing || 'Freemium'}</Badge>
                                        <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>
                                            {tool.category?.replace(/-/g, ' ')}
                                        </Badge>
                                        {tool.enterpriseReady && <Badge variant="success">Enterprise</Badge>}
                                    </div>
                                    <CardTitle>{tool.title}</CardTitle>
                                    <CardDescription>{tool.excerpt}</CardDescription>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: 'var(--space-12) 0' }}>
                            <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text-secondary)' }}>No tools found</h3>
                            <p>Try adjusting your filters or search query.</p>
                            <Button href="/tool-hangar" variant="secondary" style={{ marginTop: 'var(--space-4)' }}>Clear All Filters</Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
