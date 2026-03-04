import { getAllContent, getContentBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import ToolSnapshot from '@/components/tools/ToolSnapshot';
import ToolAlternatives from '@/components/tools/ToolAlternatives';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import LLMComparisonMatrix from '@/components/content/LLMComparisonMatrix';
import LLMPricingTable from '@/components/content/LLMPricingTable';
import LLMProsCons from '@/components/content/LLMProsCons';
import ChatGPTPricingTable from '@/components/content/ChatGPTPricingTable';
import ChatGPTProsCons from '@/components/content/ChatGPTProsCons';
import ClaudeAIPricingTable from '@/components/content/ClaudeAIPricingTable';
import ClaudeAIProsCons from '@/components/content/ClaudeAIProsCons';
import GeminiAIPricingTable from '@/components/content/GeminiAIPricingTable';
import GeminiAIProsCons from '@/components/content/GeminiAIProsCons';
import CodingToolComparisonMatrix from '@/components/content/CodingToolComparisonMatrix';

export async function generateStaticParams() {
    try {
        const allTools = getAllContent('tools');
        return allTools.map(tool => ({
            category: tool.category || 'uncategorized',
            slug: tool.slug.split('/').pop() || tool.slug,
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
        const tool = getContentBySlug('tools', slug);

        if (!tool) {
            return { title: 'Tool Not Found - Academia Pilot' };
        }

        const baseTitle = `${tool.title} Review & Features`;

        return {
            title: baseTitle,
            description: tool.excerpt,
            keywords: tool.tags?.join(', '),
            alternates: {
                canonical: `/tool-hangar/${category}/${slug}/`,
            },
            openGraph: {
                title: `${tool.title} — AI Tool Review | Academia Pilot`,
                description: tool.excerpt,
                type: 'website',
                url: `https://academiapilot.com/tool-hangar/${category}/${slug}/`,
                images: [
                    {
                        url: '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: `${tool.title} — AI Tool Review`,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: `${tool.title} Review & Features`,
                description: tool.excerpt,
                images: ['/og-image.png'],
            },
        };
    } catch (error) {
        return { title: 'Error - Academia Pilot' };
    }
}

export default async function ToolPage({ params }: PageProps) {
    const { category, slug } = await params;
    const tool = getContentBySlug('tools', slug);

    if (!tool) {
        notFound();
    }

    return (
        <div>
            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": tool.title,
                        "description": tool.excerpt,
                        "applicationCategory": "DeveloperApplication",
                        "offers": {
                            "@type": "Offer",
                            "price": tool.pricingTier === 'Free' ? "0" : "Contact for pricing",
                            "priceCurrency": "USD"
                        }
                    })
                }}
            />

            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-12)',
                paddingBottom: 'var(--space-8)'
            }}>
                <div className="container container-md">
                    {/* Breadcrumb */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <div className="flex items-center gap-2 text-sm text-accent">
                            <Link href="/" className="hover:underline">Home</Link>
                            <span>/</span>
                            <Link href="/tool-hangar" className="hover:underline">Tool Hangar</Link>
                            <span>/</span>
                            <Link href={`/tool-hangar?category=${category}`} className="hover:underline" style={{ textTransform: 'capitalize' }}>
                                {category.replace(/-/g, ' ')}
                            </Link>
                            <span>/</span>
                            <span className="text-secondary">{tool.title}</span>
                        </div>
                    </div>

                    <ToolSnapshot
                        title={tool.title}
                        description={tool.excerpt}
                        category={tool.category}
                        publisher={tool.author}
                        launchYear={tool.date ? new Date(tool.date).getFullYear().toString() : undefined}
                        pricingTier={tool.pricingTier || tool.pricing}
                        apiAvailable={tool.apiAvailable}
                        openSource={tool.openSource}
                        enterpriseReady={tool.enterpriseReady}
                        localDeployment={tool.localDeployment}
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="section" style={{ paddingBottom: 'var(--space-8)' }}>
                <div className="container container-md">
                    <div className="prose">
                        {(() => {
                            const COMPONENT_MAP: Record<string, React.ReactNode> = {
                                'LLMComparisonMatrix': <LLMComparisonMatrix />,
                                'LLMPricingTable': <LLMPricingTable toolName={tool.title} tiers={[]} />,
                                'LLMProsCons': <LLMProsCons pros={[]} cons={[]} />,
                                'ChatGPTPricingTable': <ChatGPTPricingTable />,
                                'ChatGPTProsCons': <ChatGPTProsCons />,
                                'ClaudeAIPricingTable': <ClaudeAIPricingTable />,
                                'ClaudeAIProsCons': <ClaudeAIProsCons />,
                                'GeminiAIPricingTable': <GeminiAIPricingTable />,
                                'GeminiAIProsCons': <GeminiAIProsCons />,
                                'CodingToolComparisonMatrix': <CodingToolComparisonMatrix />,
                            };
                            const MARKER_REGEX = /:::COMPONENT:(\w+):::/g;
                            const segments: Array<{ type: 'markdown' | 'component'; value: string }> = [];
                            let lastIndex = 0;
                            let match;
                            const content = tool.content;
                            while ((match = MARKER_REGEX.exec(content)) !== null) {
                                if (match.index > lastIndex) {
                                    segments.push({ type: 'markdown', value: content.slice(lastIndex, match.index) });
                                }
                                segments.push({ type: 'component', value: match[1] });
                                lastIndex = match.index + match[0].length;
                            }
                            if (lastIndex < content.length) {
                                segments.push({ type: 'markdown', value: content.slice(lastIndex) });
                            }
                            if (segments.length === 0) {
                                return <MarkdownRenderer content={content} />;
                            }
                            return (
                                <>
                                    {segments.map((seg, i) =>
                                        seg.type === 'component' ? (
                                            <div key={i} className="not-readable" style={{ margin: 'var(--space-10) 0' }}>
                                                {COMPONENT_MAP[seg.value] ?? null}
                                            </div>
                                        ) : (
                                            <MarkdownRenderer key={i} content={seg.value} />
                                        )
                                    )}
                                </>
                            );
                        })()}
                    </div>

                    <div style={{ marginTop: 'var(--space-8)', display: 'flex', justifyContent: 'center' }}>
                        <Button variant="cta" size="lg" href={tool.url || '#'} target="_blank">
                            Try {tool.title} Today →
                        </Button>
                    </div>
                </div>
            </section>


            {/* Alternatives Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md">
                    <ToolAlternatives currentSlug={slug} category={category} tags={tool.tags} />
                </div>
            </section>

            {/* FAQ Section */}
            {tool.faq && tool.faq.length > 0 && (
                <section className="section">
                    <div className="container container-md">
                        <FAQAccordion
                            faqs={tool.faq.map((f: { question: string; answer: string; icon?: string }) => ({ ...f, icon: f.icon || '❓' }))}
                            title={`Frequently Asked Questions about ${tool.title}`}
                            subtitle={`Common queries about pricing, features, and capabilities of ${tool.title}.`}
                        />
                    </div>
                </section>
            )}

            {/* Categories */}
            {tool.tags && tool.tags.length > 0 && (
                <section className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
                    <div className="container container-md">
                        <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>Related Topics</h4>
                        <div className="flex flex-wrap gap-2">
                            {tool.tags.map((tag: string) => (
                                <Link key={tag} href={`/search?q=${tag}`}>
                                    <Badge variant="secondary">{tag}</Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
