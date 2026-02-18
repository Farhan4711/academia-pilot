import { getAllContent, getContentBySlug, getRelatedContent } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

export async function generateStaticParams() {
    try {
        const allTools = getAllContent('tools');
        return allTools.map(tool => ({
            category: tool.category || 'uncategorized',
            slug: tool.slug.split('/').pop() || tool.slug,
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    try {
        const { category, slug } = await params;
        const tool = getContentBySlug('tools', slug);

        if (!tool) {
            return { title: 'Tool Not Found - Academia Pilot' };
        }

        return {
            title: `${tool.title} - Pilot's Pick | Tool Hangar | Academia Pilot`,
            description: tool.excerpt,
            alternates: {
                canonical: `/tool-hangar/${category}/${slug}/`,
            },
        };
    } catch (error) {
        return { title: 'Error - Academia Pilot' };
    }
}

export default async function ToolPage({ params }: PageProps) {
    const { category, slug } = await params;
    console.log(`[Page] Loading tool: /tool-hangar/${category}/${slug}`);

    const tool = getContentBySlug('tools', slug);
    console.log(`[Page] getContentBySlug result: ${tool ? 'Found' : 'NOT Found'} (Canonical slug: ${tool?.slug})`);

    if (!tool) {
        console.warn(`[Page] Triggering notFound() for: /tool-hangar/${category}/${slug}`);
        notFound();
    }

    const relatedTools = getRelatedContent('tools', slug, tool.tags || [], 3);

    return (
        <div>
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-8)'
            }}>
                <div className="container">
                    {/* Breadcrumb */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <div className="flex items-center gap-2 text-sm text-accent">
                            <Link href="/" className="hover:underline">Home</Link>
                            <span>/</span>
                            <Link href="/tool-hangar" className="hover:underline">Tool Hangar</Link>
                            <span>/</span>
                            <Link href={`/tool-hangar/${category}`} className="hover:underline" style={{ textTransform: 'capitalize' }}>
                                {category.replace(/-/g, ' ')}
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
                        <div>
                            <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-4)' }}>
                                <Badge variant="success">Pilot's Pick</Badge>
                                <Badge variant="cta">{tool.pricing || 'Freemium'}</Badge>
                            </div>

                            <h1 style={{
                                fontSize: 'var(--text-6xl)',
                                fontWeight: 'var(--font-black)',
                                marginBottom: 'var(--space-4)',
                                lineHeight: '1.1'
                            }}>
                                {tool.title}
                            </h1>

                            <p style={{
                                fontSize: 'var(--text-xl)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.6',
                                marginBottom: 'var(--space-8)'
                            }}>
                                {tool.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button variant="cta" size="lg" href={tool.affiliateLink || '#'} target="_blank">
                                    Get {tool.title} →
                                </Button>
                                {tool.tags && (
                                    <div className="flex flex-wrap gap-1 items-center">
                                        {tool.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tool Sidebar / Features */}
                        <div style={{
                            background: 'var(--color-primary)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--space-8)',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                                Key Features
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                {tool.features?.map((feature: string, index: number) => (
                                    <li key={index} className="flex gap-3 text-secondary">
                                        <span style={{ color: 'var(--color-success)' }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container container-md">
                    <div className="prose">
                        <MarkdownRenderer content={tool.content} />
                    </div>
                </div>
            </section>

            {/* Review / Verdict Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md">
                    <div style={{
                        padding: 'var(--space-10)',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-accent)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-4)' }}>
                                The Pilot's Verdict
                            </h2>
                            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                                For anyone building in the agentic era, {tool.title} is a non-negotiable part of the stack. It consistently outperforms competitors in our stress tests for {tool.category} workflows.
                            </p>
                            <Button variant="cta" href={tool.affiliateLink || '#'}>
                                Launch {tool.title} Now
                            </Button>
                        </div>
                        {/* Decorative Background Icon */}
                        <div style={{
                            position: 'absolute',
                            right: '-20px',
                            bottom: '-20px',
                            fontSize: '160px',
                            opacity: 0.05,
                            pointerEvents: 'none'
                        }}>
                            🚀
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                            Similar Tools in {category.replace(/-/g, ' ')}
                        </h2>
                        <div className="grid grid-3">
                            {relatedTools.map((related) => (
                                <Card key={related.slug} href={`/tool-hangar/${related.category || 'uncategorized'}/${related.slug.split('/').pop()}/`}>
                                    <CardTitle>{related.title}</CardTitle>
                                    <CardDescription>{related.excerpt}</CardDescription>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": tool.title,
                        "description": tool.excerpt,
                        "applicationCategory": "AI Tool",
                        "offers": {
                            "@type": "Offer",
                            "price": "20.00",
                            "priceCurrency": "USD"
                        }
                    })
                }}
            />
        </div>
    );
}
