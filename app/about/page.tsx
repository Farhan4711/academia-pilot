import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
    title: "About - The Pilot Behind Academia Pilot",
    description: "Learn about Academia Pilot's mission to help entrepreneurs and creators navigate the agentic frontier.",
};

export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-20)'
            }}>
                <div className="container container-md">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            About The Pilot
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            Your co-pilot for navigating the agentic frontier
                        </p>
                    </div>

                    <div className="card" style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                            The Mission
                        </h2>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8', marginBottom: 'var(--space-4)' }}>
                            AI is evolving faster than anyone can keep up with. Every week brings new models, tools, and capabilities.
                            For entrepreneurs and creators, this creates a paradox: AI could 10x your productivity, but learning
                            which tools to use and how to use them takes more time than you have.
                        </p>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>
                            Academia Pilot solves this. We cut through the noise, test everything, and deliver only what matters:
                            breaking news explained in plain English, honest tool reviews, battle-tested prompts, and curated courses.
                            Think of us as your AI research team, condensed into a daily newsletter and resource hub.
                        </p>
                    </div>

                    <div className="grid grid-2 gap-6" style={{ marginBottom: 'var(--space-12)' }}>
                        <div className="card" style={{ borderColor: 'var(--color-accent)' }}>
                            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-3)', color: 'var(--color-accent)' }}>
                                What We Do
                            </h3>
                            <ul style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Track AI breakthroughs daily</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Test every major AI tool</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Create battle-tested prompts</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Curate the best courses</li>
                                <li>Explain "why it matters"</li>
                            </ul>
                        </div>

                        <div className="card" style={{ borderColor: 'var(--color-cta)' }}>
                            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-3)', color: 'var(--color-cta)' }}>
                                Who It's For
                            </h3>
                            <ul style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Solo founders building with AI</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Content creators scaling output</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Developers learning agentic tools</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Entrepreneurs staying ahead</li>
                                <li>Anyone overwhelmed by AI news</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card" style={{
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)',
                        borderColor: 'var(--color-accent)',
                        marginBottom: 'var(--space-12)'
                    }}>
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                            Why "Academia Pilot"?
                        </h2>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8', marginBottom: 'var(--space-4)' }}>
                            The name combines two ideas:
                        </p>
                        <ul style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <strong style={{ color: 'var(--color-text-primary)' }}>Academia:</strong> We approach AI with academic rigor—testing,
                                researching, and verifying everything before recommending it.
                            </li>
                            <li>
                                <strong style={{ color: 'var(--color-text-primary)' }}>Pilot:</strong> We're your co-pilot, helping you navigate
                                the complex and rapidly changing AI landscape without getting lost in the noise.
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-6)' }}>
                            Join the Flight Crew
                        </h2>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)', maxWidth: '600px', margin: '0 auto' }}>
                            Get weekly AI insights, tool reviews, and exclusive prompts delivered to your inbox.
                            No spam, no fluff—just what you need to stay ahead.
                        </p>
                        <Button variant="cta" size="lg" href="/#newsletter-signup">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md text-center">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-6)' }}>
                        Get in Touch
                    </h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)' }}>
                        Have questions, suggestions, or want to collaborate? We'd love to hear from you.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="secondary" href="mailto:hello@academiapilot.com">
                            Email Us
                        </Button>
                        <Button variant="secondary" href="https://twitter.com/academiapilot">
                            Follow on Twitter
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
