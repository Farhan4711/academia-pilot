import { getAllContent, getContentByCategory, getCategories } from '@/lib/content';
import { notFound } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { getCategoryMetadata } from '@/lib/categories';

export async function generateStaticParams() {
    const categories = getCategories('tools');
    return categories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const meta = getCategoryMetadata(category);
    const readableCategory = category.replace(/-/g, ' ');

    return {
        title: meta?.title || `${readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1)} Tools - Tool Hangar | Academia Pilot`,
        description: meta?.seoDescription || `Discovery the best AI tools for ${readableCategory}. Pilot-vetted, battle-tested, and ready to deploy.`,
    };
}

export default async function ToolCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const toolItems = getContentByCategory('tools', category);
    const meta = getCategoryMetadata(category);

    if (toolItems.length === 0 && !meta) {
        const categories = getCategories('tools');
        if (!categories.includes(category)) {
            notFound();
        }
    }

    const readableCategory = category.replace(/-/g, ' ');

    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <Link href="/tool-hangar" className="text-accent hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
                                ← All Tools
                            </Link>
                        </div>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textTransform: 'capitalize'
                        }}>
                            {meta?.introTitle || `${readableCategory} Tools`}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.7',
                            whiteSpace: 'pre-wrap',
                            textAlign: 'left',
                            marginBottom: 'var(--space-8)'
                        }}>
                            {meta?.introContent || `The best AI tools for ${readableCategory}, vetted by our pilots for maximum efficiency.`}
                        </div>

                        {/* Category Internal Linking Block */}
                        {meta?.internalLinks && (
                            <div style={{
                                backgroundColor: 'rgba(0, 112, 243, 0.05)',
                                padding: 'var(--space-6)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-accent)',
                                marginBottom: 'var(--space-8)',
                                textAlign: 'left'
                            }}>
                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                                    Explore More:
                                </h3>
                                <div className="grid grid-2 gap-4">
                                    {meta.internalLinks.map((link, idx) => (
                                        <Link key={idx} href={link.href} className="text-accent hover:underline flex items-center gap-2">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Tool Grid */}
            <section className="section">
                <div className="container">
                    {toolItems.length === 0 ? (
                        <div className="text-center text-secondary">
                            <p>No tools found in this category yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {toolItems.map((item) => (
                                <Card key={item.slug} href={`/tool-hangar/${category}/${item.slug.split('/').pop()}`}>
                                    <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="accent">
                                            {item.pricing || 'Free'}
                                        </Badge>
                                        <div style={{ fontSize: 'var(--text-xl)' }}>🔥</div>
                                    </div>

                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>

                                    <div className="flex flex-wrap gap-1" style={{ marginTop: 'var(--space-4)' }}>
                                        {item.tags?.slice(0, 3).map(tag => (
                                            <Badge key={tag} variant="secondary" style={{ fontSize: '10px' }}>{tag}</Badge>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
