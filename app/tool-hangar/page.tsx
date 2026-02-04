import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
    title: "Tool Hangar - Best AI Tools for 2026",
    description: "Curated directory of the best AI tools for productivity, coding, and business. Each tool rated with our Pilot Score and honest reviews.",
};

export default function ToolHangarPage() {
    const tools = [
        {
            name: "Claude 3.5 Sonnet",
            description: "Best-in-class for coding and analysis",
            score: 9.5,
            category: "AI Assistant",
            pricing: "$20/month",
            killerFeature: "200K context window with perfect recall",
            skipReason: "Expensive for casual use",
            badge: "Top Pick"
        },
        {
            name: "Google Antigravity",
            description: "Revolutionary vibe coding experience",
            score: 9.0,
            category: "Development",
            pricing: "Free + Pro $20/month",
            killerFeature: "Autonomous agents build entire apps",
            skipReason: "Steep learning curve for beginners",
            badge: "Game Changer"
        },
        {
            name: "Perplexity Pro",
            description: "The future of AI-powered research",
            score: 8.5,
            category: "Research",
            pricing: "$20/month",
            killerFeature: "Real-time web search with citations",
            skipReason: "Free tier is quite limited",
            badge: "Essential"
        },
        {
            name: "Cursor IDE",
            description: "AI-powered code editor",
            score: 8.0,
            category: "Development",
            pricing: "$20/month",
            killerFeature: "Best AI autocomplete in the market",
            skipReason: "Not as powerful as Antigravity for new projects",
            badge: "Solid Choice"
        },
        {
            name: "Kimi AI",
            description: "Cost-effective multilingual AI",
            score: 8.0,
            category: "AI Assistant",
            pricing: "$29/month",
            killerFeature: "200K context at 1/60th the cost",
            skipReason: "Data hosted in China",
            badge: "Budget Pick"
        },
        {
            name: "ChatGPT Plus",
            description: "The original AI assistant",
            score: 7.5,
            category: "AI Assistant",
            pricing: "$20/month",
            killerFeature: "Most versatile for general tasks",
            skipReason: "Surpassed by Claude for coding",
            badge: "Classic"
        }
    ];

    return (
        <div>
            {/* Hero */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)'
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
                            The Tool Hangar
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.6'
                        }}>
                            Honest reviews of the best AI tools. Each rated with our Pilot Score,
                            one killer feature, and one reason to skip.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {tools.map((tool, index) => (
                            <div key={index} className="card hover-lift">
                                <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant={index === 0 ? "success" : index === 1 ? "cta" : "accent"}>
                                        {tool.badge}
                                    </Badge>
                                    <div style={{
                                        fontSize: 'var(--text-3xl)',
                                        fontWeight: 'var(--font-black)',
                                        color: 'var(--color-accent)'
                                    }}>
                                        {tool.score}
                                    </div>
                                </div>

                                <h3 style={{
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 'var(--font-bold)',
                                    marginBottom: 'var(--space-2)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    {tool.name}
                                </h3>

                                <p className="text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
                                    {tool.description}
                                </p>

                                <div style={{ marginBottom: 'var(--space-3)' }}>
                                    <div className="flex justify-between" style={{ marginBottom: 'var(--space-2)' }}>
                                        <span className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>Category:</span>
                                        <span className="text-primary" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)' }}>
                                            {tool.category}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>Pricing:</span>
                                        <span className="text-primary" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)' }}>
                                            {tool.pricing}
                                        </span>
                                    </div>
                                </div>

                                <div style={{
                                    padding: 'var(--space-3)',
                                    backgroundColor: 'rgba(0, 112, 243, 0.05)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--space-3)'
                                }}>
                                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', color: 'var(--color-accent)', marginBottom: 'var(--space-1)' }}>
                                        ✓ Killer Feature
                                    </div>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                        {tool.killerFeature}
                                    </div>
                                </div>

                                <div style={{
                                    padding: 'var(--space-3)',
                                    backgroundColor: 'rgba(255, 77, 0, 0.05)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', color: 'var(--color-cta)', marginBottom: 'var(--space-1)' }}>
                                        ✗ Reason to Skip
                                    </div>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                        {tool.skipReason}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-6)', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                How do I save time with these AI tools?
                            </h3>
                            <p className="text-secondary">
                                Each tool in the Tool Hangar is selected for its ability to automate or accelerate specific tasks.
                                Claude excels at coding, Perplexity at research, and Antigravity at building entire applications—saving
                                you 10-20 hours per week when used correctly.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                What is the Pilot Score based on?
                            </h3>
                            <p className="text-secondary">
                                Our Pilot Score (1-10) evaluates tools on capability, ease of use, value for money, and real-world impact.
                                We test each tool extensively before rating it.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                Which AI tool should I start with?
                            </h3>
                            <p className="text-secondary">
                                For most users, start with Claude 3.5 Sonnet for general AI assistance and coding. Add Perplexity Pro
                                for research and Antigravity when you're ready to build full applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
