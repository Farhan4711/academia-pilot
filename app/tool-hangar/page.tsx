import { getAllContent, getCategories } from '@/lib/content';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Link from 'next/link';
import { getCategoryMetadata } from '@/lib/categories';

const meta = getCategoryMetadata('tool-hangar');

export const metadata = {
    title: meta?.title || "The Tool Hangar - Pilot-Vetted AI Tools | Academia Pilot",
    description: meta?.seoDescription || "The ultimate directory for the agentic era. Vetted AI models, IDEs, and research tools that power 10x workflows.",
    alternates: {
        canonical: "/tool-hangar/",
    },
};

export default function ToolHangarPage() {
    const allTools = getAllContent('tools');
    const categories = getCategories('tools');

    const pilotsPicks = allTools.slice(0, 3); // Featured tools

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
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {meta?.introTitle || 'The Tool Hangar'}
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
                            {meta?.introContent || 'Vetted tools for the agentic era. We test the models, IDEs, and agents so you can just focus on building.'}
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
                                    href={`/tool-hangar/${cat}/`}
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

            {/* Pilot's Picks */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Pilot's Picks</h2>
                    <div className="grid grid-3">
                        {pilotsPicks.map((tool) => (
                            <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`} variant="highlight">
                                <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant="success">Pilot's Pick</Badge>
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

            {/* All Tools Grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 className="section-title">All Vetted Tools</h2>
                    <div className="grid grid-3">
                        {allTools.map((tool) => (
                            <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`}>
                                <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant="accent">{tool.pricing || 'Freemium'}</Badge>
                                    <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>
                                        {tool.category?.replace(/-/g, ' ')}
                                    </Badge>
                                </div>
                                <CardTitle>{tool.title}</CardTitle>
                                <CardDescription>{tool.excerpt}</CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tool Suggestion CTA */}
            <section className="section">
                <div className="container container-md">
                    <div style={{
                        textAlign: 'center',
                        padding: 'var(--space-12)',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                            Have a Tool to Suggest?
                        </h2>
                        <p className="text-secondary" style={{ marginBottom: 'var(--space-8)' }}>
                            We're always looking for the next game-changing tool for the agentic era.
                            If you've built or found something incredible, let us know.
                        </p>
                        <Button variant="cta" href="mailto:pilot@academiapilot.com">Suggest a Tool</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
