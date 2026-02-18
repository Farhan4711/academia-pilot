import { getAllContent, getCategories, formatDate } from '@/lib/content';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Link from 'next/link';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import { getCategoryMetadata } from '@/lib/categories';

const meta = getCategoryMetadata('prompt-vault');

export const metadata = {
    title: meta?.title || "The Prompt Vault - Battle-Tested AI Prompts | Academia Pilot",
    description: meta?.seoDescription || "Copy, paste, and get results. Battle-tested AI prompts, templates, and configurations that save you 20+ hours per week.",
    alternates: {
        canonical: "/prompt-vault/",
    },
};

export default function PromptVaultPage() {
    const allPrompts = getAllContent('prompts');
    const categories = getCategories('prompts');

    // Group prompts by category for the index view if desired, or just show featured
    const featuredPrompts = allPrompts.filter(p => !p.premium).slice(0, 6);
    const premiumPrompts = allPrompts.filter(p => p.premium);

    return (
        <div>
            {/* Hero */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {meta?.introTitle || 'The Prompt Vault'}
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.7',
                            whiteSpace: 'pre-wrap',
                            textAlign: 'left',
                            maxWidth: '800px',
                            margin: '0 auto var(--space-8)'
                        }}>
                            {meta?.introContent || 'Battle-tested prompts, templates, and configs that save you 20+ hours per week. Copy, paste, and get results.'}
                        </div>

                        {/* Internal Linking Block */}
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
                                    Explore Related Sections:
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

                        {/* Category Quick Links */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map(cat => (
                                <Link
                                    key={cat}
                                    href={`/prompt-vault/${cat}/`}
                                    className="btn btn-secondary btn-sm"
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {cat.replace(/-/g, ' ')}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Prompts */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Latest Free Prompts</h2>
                    <div className="grid grid-3">
                        {featuredPrompts.map((item) => (
                            <Card key={item.slug} href={`/prompt-vault/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}/`}>
                                <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant="accent">
                                        {item.level || 'Intermediate'}
                                    </Badge>
                                    <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>
                                        {item.category?.replace(/-/g, ' ')}
                                    </Badge>
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
                </div>
            </section>

            {/* Premium Prompts Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 className="section-title">Premium Agentic Workflows</h2>
                    <p className="text-center text-secondary" style={{ marginBottom: 'var(--space-8)' }}>
                        Advanced multi-agent swarms and autonomous research pipelines.
                    </p>

                    {premiumPrompts.length > 0 ? (
                        <div className="grid grid-3">
                            {premiumPrompts.map((item) => (
                                <Card key={item.slug} href={`/prompt-vault/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}/`} variant="highlight">
                                    <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="cta">Premium</Badge>
                                        <div style={{ fontSize: 'var(--text-2xl)' }}>🔒</div>
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.excerpt}</CardDescription>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            textAlign: 'center',
                            padding: 'var(--space-12)',
                            border: '2px dashed var(--color-border)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>🚀</div>
                            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)' }}>Premium Vault Opening Soon</h3>
                            <p className="text-secondary" style={{ marginBottom: 'var(--space-6)' }}>
                                We're finalizing our multi-agent swarm templates and autonomous research blueprints.
                            </p>
                            <Button variant="cta" href="/#newsletter">Get Notified</Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section">
                <div className="container container-md">
                    <NewsletterSignup />
                </div>
            </section>
        </div>
    );
}
