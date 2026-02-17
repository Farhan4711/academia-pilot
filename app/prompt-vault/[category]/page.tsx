import { getAllContent, getContentByCategory, getCategories, formatDate } from '@/lib/content';
import { notFound } from 'next/navigation';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getCategoryMetadata } from '@/lib/categories';

export async function generateStaticParams() {
    const categories = getCategories('prompts');
    return categories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const meta = getCategoryMetadata(category);
    const readableCategory = category.replace(/-/g, ' ');

    return {
        title: meta?.title || `${readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1)} Prompts - Prompt Vault | Academia Pilot`,
        description: meta?.seoDescription || `Unlock battle-tested AI prompts for ${readableCategory}. Battle-tested, optimized, and ready to use.`,
    };
}

export default async function PromptCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const promptItems = getContentByCategory('prompts', category);
    const meta = getCategoryMetadata(category);

    if (promptItems.length === 0 && !meta) {
        const categories = getCategories('prompts');
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
                            <Link href="/prompt-vault" className="text-accent hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
                                ← All Prompts
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
                            {meta?.introTitle || `${readableCategory} Prompts`}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.7',
                            whiteSpace: 'pre-wrap',
                            textAlign: 'left',
                            marginBottom: 'var(--space-8)'
                        }}>
                            {meta?.introContent || `Optimized prompts for ${readableCategory} to help you get better results from AI.`}
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

            {/* Prompt Grid */}
            <section className="section">
                <div className="container">
                    {promptItems.length === 0 ? (
                        <div className="text-center text-secondary">
                            <p>No prompts found in this category yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {promptItems.map((item) => (
                                <Card key={item.slug} href={`/prompt-vault/${category}/${item.slug.split('/').pop()}`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="accent">
                                            {item.level || 'Intermediate'}
                                        </Badge>
                                        {item.premium && (
                                            <Badge variant="cta">Premium</Badge>
                                        )}
                                    </div>

                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>

                                    <div style={{ marginTop: 'var(--space-4)' }}>
                                        <span className="text-accent" style={{
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: 'var(--font-semibold)'
                                        }}>
                                            View Prompt →
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
