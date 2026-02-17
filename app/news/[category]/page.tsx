import { getAllContent, getContentByCategory, getCategories, formatDate } from '@/lib/content';
import { getCategoryMetadata } from '@/lib/categories';
import { notFound } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

export async function generateStaticParams() {
    const categories = getCategories('news');
    return categories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const meta = getCategoryMetadata(category);
    const readableCategory = category.replace(/-/g, ' ');

    return {
        title: meta?.title || `${readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1)} AI News - Academia Pilot`,
        description: meta?.seoDescription || `Explore the latest ${readableCategory} AI news, breakthroughs, and analysis on Academia Pilot.`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const newsItems = getContentByCategory('news', category);
    const meta = getCategoryMetadata(category);

    if (newsItems.length === 0 && !meta) {
        // Double check if the category exists by listing all categories
        const categories = getCategories('news');
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
                            <Link href="/news" className="text-accent hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
                                ← All News
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
                            {meta?.introTitle || `${readableCategory} News`}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: 'var(--space-8)',
                            whiteSpace: 'pre-line'
                        }}>
                            {meta?.introContent || `The latest breakthroughs and updates in ${readableCategory}.`}
                        </div>

                        {/* Category Internal Linking Block */}
                        {meta?.internalLinks && (
                            <div style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-accent)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                marginTop: 'var(--space-8)',
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

            {/* News Grid */}
            <section className="section">
                <div className="container">
                    {newsItems.length === 0 ? (
                        <div className="text-center text-secondary">
                            <p>No articles found in this category yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {newsItems.map((item) => (
                                <Card key={item.slug} href={`/news/${category}/${item.slug.split('/').pop()}`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="cta">
                                            {formatDate(item.date)}
                                        </Badge>
                                        {item.badge && (
                                            <Badge variant="cta">{item.badge}</Badge>
                                        )}
                                    </div>

                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>

                                    <div style={{ marginTop: 'var(--space-4)' }}>
                                        <span className="text-accent" style={{
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: 'var(--font-semibold)'
                                        }}>
                                            Read more →
                                        </span>
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
