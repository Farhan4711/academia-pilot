import { getAllContent, getContentBySlug, getRelatedContent } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CopyButton from '@/components/ui/CopyButton';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

export async function generateStaticParams() {
    try {
        const allPrompts = getAllContent('prompts');
        return allPrompts.map(prompt => ({
            category: prompt.category || 'uncategorized',
            slug: prompt.slug.split('/').pop() || prompt.slug,
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
        const prompt = getContentBySlug('prompts', slug);

        if (!prompt) {
            return { title: 'Prompt Not Found - Academia Pilot' };
        }

        return {
            title: `${prompt.title} | ${prompt.category || 'Prompts'} | Prompt Vault`,
            description: prompt.excerpt,
            alternates: {
                canonical: `/prompt-vault/${category}/${slug}`,
            },
        };
    } catch (error) {
        return { title: 'Error - Academia Pilot' };
    }
}

export default async function PromptPage({ params }: PageProps) {
    const { category, slug } = await params;
    const prompt = getContentBySlug('prompts', slug);

    if (!prompt) {
        notFound();
    }

    const relatedPrompts = getRelatedContent('prompts', slug, prompt.tags || [], 3);

    return (
        <div>
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
                            <Link href="/prompt-vault" className="hover:underline">Prompt Vault</Link>
                            <span>/</span>
                            <Link href={`/prompt-vault/${category}`} className="hover:underline" style={{ textTransform: 'capitalize' }}>
                                {category.replace(/-/g, ' ')}
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-4)' }}>
                        <Badge variant="accent">{prompt.level || 'Intermediate'}</Badge>
                        {prompt.category && (
                            <Badge variant="cta">{prompt.category}</Badge>
                        )}
                        {prompt.premium && (
                            <Badge variant="cta">Premium</Badge>
                        )}
                    </div>

                    <h1 style={{
                        fontSize: 'var(--text-5xl)',
                        fontWeight: 'var(--font-black)',
                        marginBottom: 'var(--space-4)',
                        lineHeight: '1.2'
                    }}>
                        {prompt.title}
                    </h1>

                    <p style={{
                        fontSize: 'var(--text-xl)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: '1.6',
                        marginBottom: 'var(--space-8)'
                    }}>
                        {prompt.excerpt}
                    </p>

                    {/* Copy Box */}
                    <div style={{
                        background: 'var(--color-primary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-6)',
                        boxShadow: 'var(--shadow-lg)',
                        marginBottom: 'var(--space-12)'
                    }}>
                        <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-4)' }}>
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: 'var(--font-bold)',
                                color: 'var(--color-text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                The Prompt
                            </span>
                            <CopyButton text={prompt.prompt || ''} variant="cta" />
                        </div>
                        <pre style={{
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            padding: 'var(--space-4)',
                            borderRadius: 'var(--radius-md)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-primary)',
                            whiteSpace: 'pre-wrap',
                            overflowX: 'auto',
                            maxHeight: '400px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            {prompt.prompt}
                        </pre>
                    </div>

                    {/* Meta/Context */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--space-6)',
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-surface)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        marginBottom: 'var(--space-12)'
                    }}>
                        <div>
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', display: 'block', marginBottom: 'var(--space-1)' }}>Model Optimization</span>
                            <span style={{ fontWeight: 'var(--font-semibold)' }}>{prompt.context || 'Universal'}</span>
                        </div>
                        <div>
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', display: 'block', marginBottom: 'var(--space-1)' }}>Difficulty</span>
                            <span style={{ fontWeight: 'var(--font-semibold)' }}>{prompt.level || 'Intermediate'}</span>
                        </div>
                        {prompt.tags && (
                            <div>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', display: 'block', marginBottom: 'var(--space-1)' }}>Tags</span>
                                <div className="flex flex-wrap gap-1">
                                    {prompt.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" style={{ fontSize: '10px' }}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container container-md">
                    <MarkdownRenderer content={prompt.content} />
                </div>
            </section>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": prompt.title,
                        "description": prompt.excerpt,
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Copy the prompt",
                                "text": "Click the copy button to copy the optimized prompt to your clipboard."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Customize",
                                "text": "Follow the customization instructions to adapt the prompt to your specific needs."
                            }
                        ]
                    })
                }}
            />

            {/* Related Prompts */}
            {relatedPrompts.length > 0 && (
                <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <div className="container">
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                            Related Prompts
                        </h2>
                        <div className="grid grid-3">
                            {relatedPrompts.map((related) => (
                                <Card key={related.slug} href={`/prompt-vault/${related.category || 'uncategorized'}/${related.slug.split('/').pop()}`}>
                                    <CardTitle>{related.title}</CardTitle>
                                    <CardDescription>{related.excerpt}</CardDescription>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
                            <Button variant="secondary" href="/prompt-vault">
                                View Full Vault
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
