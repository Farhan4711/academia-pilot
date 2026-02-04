import { getAllContent, getContentBySlug, getRelatedContent, formatDate } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

// Generate static params for all news articles (required for static export)
export async function generateStaticParams() {
    try {
        const allNews = getAllContent('news');
        console.log('generateStaticParams - Found articles:', allNews.length);
        console.log('generateStaticParams - Slugs:', allNews.map(n => n.slug));
        return allNews.map(news => ({
            slug: news.slug,
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;
        console.log('generateMetadata - Looking for slug:', slug);
        const article = getContentBySlug('news', slug);

        if (!article) {
            console.log('generateMetadata - Article not found for slug:', slug);
            return {
                title: 'Article Not Found - Academia Pilot',
            };
        }

        return {
            title: `${article.title} - Academia Pilot`,
            description: article.excerpt,
            keywords: article.tags?.join(', '),
        };
    } catch (error) {
        console.error('Error in generateMetadata:', error);
        return {
            title: 'Error - Academia Pilot',
        };
    }
}


export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getContentBySlug('news', slug);

    if (!article) {
        notFound();
    }

    // Get related articles based on tags
    const relatedArticles = getRelatedContent('news', slug, article.tags || [], 3);

    return (
        <div>
            {/* Article Header */}
            <article>
                <section className="section" style={{
                    background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                    paddingTop: 'var(--space-16)',
                    paddingBottom: 'var(--space-8)'
                }}>
                    <div className="container container-md">
                        {/* Breadcrumb */}
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <Link href="/news-radar" className="text-accent hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
                                ← Back to News Radar
                            </Link>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-4)' }}>
                            <Badge variant="cta">{formatDate(article.date)}</Badge>
                            {article.badge && (
                                <Badge variant="cta">{article.badge}</Badge>
                            )}
                            {article.featured && (
                                <Badge variant="accent">Featured</Badge>
                            )}
                            {article.category && (
                                <Badge variant="accent">{article.category}</Badge>
                            )}
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            lineHeight: '1.2'
                        }}>
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6',
                            marginBottom: 'var(--space-6)'
                        }}>
                            {article.excerpt}
                        </p>

                        {/* Meta info */}
                        <div className="flex gap-4 items-center text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                            {article.author && (
                                <span>By {article.author}</span>
                            )}
                            <span>•</span>
                            <span>{formatDate(article.date)}</span>
                        </div>

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--space-4)' }}>
                                {article.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: 'var(--text-xs)',
                                            color: 'var(--color-text-muted)',
                                            backgroundColor: 'var(--color-primary)',
                                            padding: 'var(--space-1) var(--space-3)',
                                            borderRadius: 'var(--radius-full)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Article Content */}
                <section className="section">
                    <div className="container container-md">
                        <MarkdownRenderer content={article.content} />
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <div className="container container-md">
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-12)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-surface) 100%)'
                        }}>
                            <h3 style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 'var(--font-bold)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                Don't Miss the Next Breakthrough
                            </h3>
                            <p className="text-secondary" style={{
                                fontSize: 'var(--text-lg)',
                                marginBottom: 'var(--space-6)',
                                maxWidth: '600px',
                                margin: '0 auto var(--space-6)'
                            }}>
                                Get weekly AI news, tool reviews, and prompts delivered to your inbox.
                            </p>
                            <NewsletterSignup />
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="section">
                        <div className="container">
                            <h2 style={{
                                fontSize: 'var(--text-3xl)',
                                fontWeight: 'var(--font-bold)',
                                marginBottom: 'var(--space-8)',
                                textAlign: 'center'
                            }}>
                                Related Articles
                            </h2>

                            <div className="grid grid-3">
                                {relatedArticles.map((related) => (
                                    <Card key={related.slug} href={`/news-radar/${related.slug}`}>
                                        <div style={{ marginBottom: 'var(--space-3)' }}>
                                            <Badge variant="cta">
                                                {new Date(related.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </Badge>
                                        </div>
                                        <CardTitle>{related.title}</CardTitle>
                                        <CardDescription>{related.excerpt}</CardDescription>
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

                            <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
                                <Button variant="secondary" href="/news-radar">
                                    View All News
                                </Button>
                            </div>
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}
