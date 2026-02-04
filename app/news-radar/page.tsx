import Link from 'next/link';
import { getAllContent, formatDate } from '@/lib/content';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata = {
    title: "News Radar - Breaking AI News",
    description: "Stay updated with the latest AI breakthroughs, tool releases, and industry insights. Your radar for navigating the agentic frontier.",
};

export default function NewsRadarPage() {
    const newsItems = getAllContent('news');

    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            News Radar
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            Breaking AI news, analyzed and explained. Every post answers "Why does this matter?"
                            in the first 50 words.
                        </p>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section">
                <div className="container">
                    {newsItems.length === 0 ? (
                        <div className="text-center text-secondary">
                            <p>No news articles found. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {newsItems.map((item) => (
                                <Card key={item.slug} href={`/news-radar/${item.slug}`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="cta">
                                            {formatDate(item.date)}
                                        </Badge>
                                        {item.badge && (
                                            <Badge variant="cta">{item.badge}</Badge>
                                        )}
                                        {item.featured && (
                                            <Badge variant="accent">Featured</Badge>
                                        )}
                                    </div>

                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>

                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--space-3)' }}>
                                            {item.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        fontSize: 'var(--text-xs)',
                                                        color: 'var(--color-text-muted)',
                                                        backgroundColor: 'var(--color-primary)',
                                                        padding: 'var(--space-1) var(--space-2)',
                                                        borderRadius: 'var(--radius-sm)'
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

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

            {/* FAQ Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md">
                    <h2 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 'var(--font-bold)',
                        marginBottom: 'var(--space-6)',
                        textAlign: 'center'
                    }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                How often is News Radar updated?
                            </h3>
                            <p className="text-secondary">
                                We publish new articles daily, covering the most important AI breakthroughs and tool releases.
                                Subscribe to our newsletter to get updates delivered to your inbox.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                What makes News Radar different from other AI news sources?
                            </h3>
                            <p className="text-secondary">
                                Every article answers "Why does this matter?" in the first 50 words. We focus on practical
                                implications for entrepreneurs and creators, not just technical details.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                Can I suggest topics for News Radar?
                            </h3>
                            <p className="text-secondary">
                                Absolutely! Email us at news@academiapilot.com with AI developments you'd like us to cover.
                                We prioritize topics that matter most to our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
