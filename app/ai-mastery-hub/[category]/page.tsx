import { getAllContent, getContentByCategory, getCategories } from '@/lib/content';
import { notFound } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { getCategoryMetadata } from '@/lib/categories';

// Since ai-mastery-hub might not have content files yet, we handle static params carefully
export async function generateStaticParams() {
    // For now we can return an empty array or known categories from lib/categories
    // But typically this would depend on content files.
    // Let's hardcode the ones we just added if content doesn't exist.
    const hubCategories = ['prompt-engineering', 'ai-security'];
    return hubCategories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    // Map registry key if needed (e.g. hub-ai-security)
    const registryKey = category === 'ai-security' ? 'hub-ai-security' : category;
    const meta = getCategoryMetadata(registryKey);
    const readableCategory = category.replace(/-/g, ' ');

    return {
        title: meta?.title || `${readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1)} Mastery - AI Mastery Hub | Academia Pilot`,
        description: meta?.seoDescription || `Expert guides and tutorials on ${readableCategory} to help you master AI development.`,
    };
}

export default async function HubCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    // content type is 'ai-mastery-hub'
    const guideItems = getContentByCategory('ai-mastery-hub', category);
    const registryKey = category === 'ai-security' ? 'hub-ai-security' : category;
    const meta = getCategoryMetadata(registryKey);

    if (guideItems.length === 0 && !meta) {
        notFound();
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
                            <Link href="/ai-mastery-hub" className="text-accent hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
                                ← AI Mastery Hub
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
                            {meta?.introTitle || `${readableCategory} Mastery`}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.7',
                            whiteSpace: 'pre-wrap',
                            textAlign: 'left',
                            marginBottom: 'var(--space-8)'
                        }}>
                            {meta?.introContent || `Deep-dive guides and best practices for ${readableCategory}.`}
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

            {/* Guides Grid */}
            <section className="section">
                <div className="container">
                    {guideItems.length === 0 ? (
                        <div className="text-center text-secondary">
                            <p>Premium guides for this section are being finalized. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {guideItems.map((item) => (
                                <Card key={item.slug} href={`/ai-mastery-hub/${category}/${item.slug.split('/').pop()}`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="accent">
                                            {item.level || 'Expert'}
                                        </Badge>
                                    </div>

                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>

                                    <div style={{ marginTop: 'var(--space-4)' }}>
                                        <span className="text-accent" style={{
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: 'var(--font-semibold)'
                                        }}>
                                            Read Guide →
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
