import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { getCategoryMetadata } from '@/lib/categories';
import { getAllContent } from '@/lib/content';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import FAQAccordion from '@/components/ui/FAQAccordion';

const meta = getCategoryMetadata('ai-mastery-hub');

export const metadata = {
    title: "AI Mastery Hub: Advanced Guides, Tutorials & Workflows",
    description: "The AI Mastery Hub is your ultimate resource for mastering artificial intelligence. Advanced guides, agentic workflows, and expert tutorials for developers.",
    alternates: {
        canonical: "/ai-mastery-hub/",
    },
    keywords: ["AI Mastery Hub", "Agentic AI", "Prompt Engineering", "AI Security", "MCP Guide", "Vibe Coding"],
};

export default function AIMasteryHubPage() {
    // Fetch articles for the grid
    const masteryArticles = getAllContent('ai-mastery-hub');

    const faqItems = [
        {
            question: "How do I save time with Antigravity?",
            answer: "AI Mastery Hub workflows reduce development time by 70-90% for most projects. Instead of writing code line-by-line, you describe what you want and AI agents handle implementation, testing, and refactoring automatically."
        },
        {
            question: "Is Antigravity better than Cursor or GitHub Copilot?",
            answer: "AI Mastery Hub presents a fundamentally different approach. Traditional tools assist with coding, while the Hub teaches you to use autonomous agents to build entire features. Use AI Hub strategies for new projects and Cursor for incremental improvements."
        },
        {
            question: "Can beginners use Antigravity effectively?",
            answer: "Yes, but with caution. Agentic AI makes building apps easier, but you still need to understand architecture, databases, and APIs to review agent proposals effectively. It's best used by developers with at least 1-2 years of experience."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container container-lg">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <Badge variant="cta" style={{ marginBottom: 'var(--space-4)' }}>
                            High-Rank Magnet
                        </Badge>

                        <h1 style={{
                            fontSize: 'var(--text-6xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-6)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: '1.1'
                        }}>
                            AI Mastery Hub: <br />
                            <span className="text-secondary text-4xl">Advanced Guides, Tutorials & Workflows</span>
                        </h1>

                        <div style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                The AI Mastery Hub is your ultimate resource for mastering artificial intelligence. This hub is designed for developers, researchers, marketers, and AI enthusiasts who want to move beyond basic usage and unlock advanced skills, techniques, and strategies.
                            </p>

                            <p style={{ fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>Here you’ll find:</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-4)' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>• <strong>Prompt engineering tutorials:</strong> Learn how to craft, optimize, and scale AI prompts for maximum results.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>• <strong>AI security guides:</strong> Understand vulnerabilities, safe deployment, and ethical best practices.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>• <strong>Advanced workflows:</strong> Agentic AI, multi-model orchestration, automation pipelines, and tool integration.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>• <strong>Industry applications:</strong> AI in business, education, marketing, and research.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>• <strong>Case studies and templates:</strong> Learn from real-world projects and replicate workflows for your needs.</li>
                            </ul>

                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                Each guide is designed to be actionable, practical, and up-to-date with the latest AI models and techniques. By combining these guides with Prompt Vault templates and Tool Hangar insights, you can build professional-grade AI workflows and solutions efficiently.
                            </p>

                            <p>
                                Whether you want to improve productivity, secure AI applications, or explore cutting-edge generative AI capabilities, the AI Mastery Hub equips you with the knowledge and tools to succeed in 2026 and beyond.
                            </p>
                        </div>



                        <div className="flex gap-4 justify-center">
                            <Button variant="cta" size="lg" href="#tutorial">
                                Start Tutorial
                            </Button>
                            <Button variant="secondary" size="lg" href="/prompt-vault/">
                                Get Prompts
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Guides & Articles Grid */}
            <section className="section">
                <div className="container container-md">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                        Latest Advanced Guides
                    </h2>

                    {masteryArticles.length > 0 ? (
                        <div className="grid grid-2">
                            {masteryArticles.map((article) => (
                                <Card key={article.slug} href={`/ai-mastery-hub/${article.slug}`}>
                                    <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                                        <Badge variant="accent">
                                            {article.badge || 'Guide'}
                                        </Badge>
                                        <span className="text-xs text-muted">{new Date(article.date).toLocaleDateString()}</span>
                                    </div>

                                    <CardTitle>{article.title}</CardTitle>
                                    <CardDescription>{article.excerpt}</CardDescription>

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
                    ) : (
                        <div className="text-center p-8 border border-dashed border-border rounded-lg text-muted">
                            New guides are being indexed. Check back momentarily.
                        </div>
                    )}
                </div>
            </section>



            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md text-center">
                    <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-4)' }}>
                        Ready to Master AI Hub?
                    </h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)' }}>
                        Get our battle-tested Antigravity prompts and join the Flight Crew for weekly tips.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="cta" size="lg" href="/prompt-vault/">
                            Get AI Mastery Prompts
                        </Button>
                        <Button variant="secondary" size="lg" href="/#newsletter-signup">
                            Join Newsletter
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container container-lg">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>

                    <FAQAccordion
                        faqs={faqItems.map(item => ({
                            ...item,
                            icon: '💡'
                        }))}
                    />
                </div>
            </section>
        </div>
    );
}
