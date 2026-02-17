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
        return allNews.map(news => ({
            category: news.category || 'uncategorized',
            slug: news.slug.split('/').pop() || news.slug,
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

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
    try {
        const { category, slug } = await params;
        console.log('generateMetadata - Looking for slug:', slug, 'in category:', category);
        const article = getContentBySlug('news', slug);

        if (!article) {
            console.log('generateMetadata - Article not found for slug:', slug);
            return {
                title: 'Article Not Found - Academia Pilot',
            };
        }

        return {
            title: `${article.title} | ${article.category || 'News'} | Academia Pilot`,
            description: article.excerpt,
            keywords: article.tags?.join(', '),
            alternates: {
                canonical: `/news/${category}/${slug}`,
            },
            openGraph: {
                title: article.title,
                description: article.excerpt,
                type: 'article',
                url: `https://academiapilot.com/news/${category}/${slug}`,
                images: [
                    {
                        url: article.image || '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: article.title,
                description: article.excerpt,
                images: [article.image || '/og-image.png'],
            },
        };
    } catch (error) {
        console.error('Error in generateMetadata:', error);
        return {
            title: 'Error - Academia Pilot',
        };
    }
}


export default async function ArticlePage({ params }: PageProps) {
    const { category, slug } = await params;
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
                            <div className="flex items-center gap-2 text-sm text-accent">
                                <Link href="/" className="hover:underline">Home</Link>
                                <span>/</span>
                                <Link href="/news" className="hover:underline">News</Link>
                                <span>/</span>
                                <Link href={`/news/${category}`} className="hover:underline" style={{ textTransform: 'capitalize' }}>
                                    {category.replace(/-/g, ' ')}
                                </Link>
                            </div>
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

                        {/* Featured Image */}
                        {article.image && (
                            <div style={{
                                marginBottom: 'var(--space-8)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-xl)',
                                aspectRatio: '16/9'
                            }}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        )}

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

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": article.title,
                            "description": article.excerpt,
                            "image": `https://academiapilot.com${article.image || '/og-image.png'}`,
                            "datePublished": article.date,
                            "author": {
                                "@type": "Person",
                                "name": article.author || "Academia Pilot"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Academia Pilot",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://academiapilot.com/logo.png"
                                }
                            }
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://academiapilot.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "News",
                                    "item": "https://academiapilot.com/news"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": category.replace(/-/g, ' '),
                                    "item": `https://academiapilot.com/news/${category}`
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": article.title,
                                    "item": `https://academiapilot.com/news/${category}/${slug}`
                                }
                            ]
                        })
                    }}
                />

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
                                    <Card key={related.slug} href={`/news/${related.category || 'uncategorized'}/${related.slug.split('/').pop()}`}>
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
                                <Button variant="secondary" href="/news">
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
