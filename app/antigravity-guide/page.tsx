import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
    title: "The Antigravity Guide - Master Vibe Coding in 10 Minutes",
    description: "Complete tutorial on Google Antigravity: the revolutionary IDE that codes itself. Learn the interface, master vibe coding, and build your first app in 10 minutes.",
    keywords: ["Google Antigravity tutorial", "Antigravity IDE vs Cursor", "Antigravity Agent Manager guide", "Vibe Coding in Antigravity", "best Antigravity extensions 2026"],
};

export default function AntigravityGuidePage() {
    return (
        <div>
            {/* Hero */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)'
            }}>
                <div className="container container-lg">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
                            The Antigravity Guide
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.6'
                        }}>
                            Master Google's revolutionary IDE and build your first app in 10 minutes using vibe coding.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <Button variant="cta" size="lg" href="#tutorial">
                                Start Tutorial
                            </Button>
                            <Button variant="secondary" size="lg" href="/prompt-vault">
                                Get Prompts
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="section">
                <div className="container container-md">
                    <div className="card" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-accent)' }}>
                        <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                            What You'll Learn
                        </h2>
                        <div className="grid grid-2 gap-4">
                            <div>
                                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                    Part 1: Understanding Antigravity
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)' }}>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ Why Antigravity changes everything</li>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ The Editor vs. Agent Manager</li>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ How vibe coding works</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                    Part 2: Hands-On Tutorial
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)' }}>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ Setting up your first project</li>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ Building a complete app</li>
                                    <li style={{ marginBottom: 'var(--space-1)' }}>→ Best practices & tips</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container container-md">
                    <article style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>

                        {/* Section 1 */}
                        <div style={{ marginBottom: 'var(--space-12)' }}>
                            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-6)' }}>
                                Why Antigravity Is the End of Traditional IDEs
                            </h2>

                            <p className="text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
                                For 50 years, developers have written code the same way: character by character, line by line.
                                Google Antigravity fundamentally changes this paradigm. Instead of writing code, you describe
                                what you want to build, and AI agents handle the implementation.
                            </p>

                            <div className="card" style={{ marginBottom: 'var(--space-6)', backgroundColor: 'rgba(0, 112, 243, 0.05)', borderColor: 'var(--color-accent)' }}>
                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-3)' }}>
                                    The Paradigm Shift
                                </h3>
                                <div className="grid grid-2 gap-6">
                                    <div>
                                        <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-text-muted)' }}>
                                            Traditional IDEs
                                        </h4>
                                        <ul style={{ color: 'var(--color-text-secondary)' }}>
                                            <li>Write every line of code</li>
                                            <li>Manual debugging</li>
                                            <li>Refactor yourself</li>
                                            <li>Write tests separately</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                            Antigravity
                                        </h4>
                                        <ul style={{ color: 'var(--color-text-secondary)' }}>
                                            <li>Describe what you want</li>
                                            <li>AI handles implementation</li>
                                            <li>Automatic refactoring</li>
                                            <li>Tests generated automatically</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-secondary">
                                This isn't just faster—it's a completely different way of thinking about software development.
                                You become an architect and product designer, while AI agents handle the construction.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div style={{ marginBottom: 'var(--space-12)' }}>
                            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-6)' }}>
                                Understanding the Interface
                            </h2>

                            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-accent)' }}>
                                The Editor: Your Traditional View
                            </h3>

                            <p className="text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
                                The Editor looks familiar—it's where you see your code. But unlike traditional IDEs, you rarely
                                type here. Instead, you review and approve changes made by AI agents.
                            </p>

                            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-3)' }}>
                                    Key Features
                                </h4>
                                <ul style={{ color: 'var(--color-text-secondary)' }}>
                                    <li style={{ marginBottom: 'var(--space-2)' }}>
                                        <strong style={{ color: 'var(--color-text-primary)' }}>Diff View:</strong> See exactly what agents changed
                                    </li>
                                    <li style={{ marginBottom: 'var(--space-2)' }}>
                                        <strong style={{ color: 'var(--color-text-primary)' }}>Inline Comments:</strong> AI explains its decisions
                                    </li>
                                    <li style={{ marginBottom: 'var(--space-2)' }}>
                                        <strong style={{ color: 'var(--color-text-primary)' }}>One-Click Approval:</strong> Accept or reject changes instantly
                                    </li>
                                </ul>
                            </div>

                            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-accent)' }}>
                                The Agent Manager: Mission Control
                            </h3>

                            <p className="text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
                                This is where the magic happens. The Agent Manager orchestrates multiple specialized AI agents,
                                each handling different aspects of development.
                            </p>

                            <div className="grid grid-2 gap-4" style={{ marginBottom: 'var(--space-6)' }}>
                                <div className="card">
                                    <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                        Architect Agent
                                    </h4>
                                    <p className="text-secondary" style={{ fontSize: 'var(--text-base)' }}>
                                        Designs system architecture, chooses patterns, and plans implementation strategy.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                        Implementation Agent
                                    </h4>
                                    <p className="text-secondary" style={{ fontSize: 'var(--text-base)' }}>
                                        Writes production-quality code following best practices and your style guide.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                        Test Agent
                                    </h4>
                                    <p className="text-secondary" style={{ fontSize: 'var(--text-base)' }}>
                                        Creates comprehensive test suites with edge cases and integration tests.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-accent)' }}>
                                        Refactor Agent
                                    </h4>
                                    <p className="text-secondary" style={{ fontSize: 'var(--text-base)' }}>
                                        Optimizes code for performance, readability, and maintainability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Tutorial */}
                        <div id="tutorial" style={{ marginBottom: 'var(--space-12)' }}>
                            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-6)' }}>
                                Your First App in 10 Minutes
                            </h2>

                            <p className="text-secondary" style={{ marginBottom: 'var(--space-6)' }}>
                                Let's build a complete task management app with authentication, database, and API—all in 10 minutes.
                            </p>

                            {/* Step 1 */}
                            <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-accent)' }}>
                                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'var(--font-black)',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        1
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                                        Create a New Project
                                    </h3>
                                </div>
                                <p className="text-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                                    Open Antigravity and click "New Project." Choose "Web App" and name it "TaskMaster."
                                </p>
                                <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
                                    <div className="text-muted">// Antigravity creates:</div>
                                    <div className="text-accent">✓ Next.js project structure</div>
                                    <div className="text-accent">✓ TypeScript configuration</div>
                                    <div className="text-accent">✓ Database setup (Prisma)</div>
                                    <div className="text-accent">✓ Authentication boilerplate</div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-accent)' }}>
                                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'var(--font-black)',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        2
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                                        Describe Your App
                                    </h3>
                                </div>
                                <p className="text-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                                    Open the Agent Manager and describe what you want to build:
                                </p>
                                <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                    "Build a task management app with user authentication, task CRUD operations,
                                    categories, due dates, and a clean modern UI. Use Prisma for the database and
                                    NextAuth for authentication."
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-accent)' }}>
                                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'var(--font-black)',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        3
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                                        Review the Architecture
                                    </h3>
                                </div>
                                <p className="text-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                                    The Architect Agent proposes a system design. Review and approve:
                                </p>
                                <ul style={{ color: 'var(--color-text-secondary)' }}>
                                    <li>Database schema (User, Task, Category tables)</li>
                                    <li>API routes (/api/tasks, /api/auth)</li>
                                    <li>Component structure (TaskList, TaskForm, etc.)</li>
                                    <li>Authentication flow</li>
                                </ul>
                            </div>

                            {/* Step 4 */}
                            <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-cta)' }}>
                                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-cta)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'var(--font-black)',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        4
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                                        Watch It Build
                                    </h3>
                                </div>
                                <p className="text-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                                    Click "Approve" and watch the agents work in real-time:
                                </p>
                                <div className="progress-bar" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div className="progress-fill" style={{ width: '100%' }}></div>
                                </div>
                                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                    ⏱️ Estimated time: 8 minutes
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-success)' }}>
                                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-success)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'var(--font-black)',
                                        fontSize: 'var(--text-xl)'
                                    }}>
                                        5
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                                        Test & Deploy
                                    </h3>
                                </div>
                                <p className="text-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                                    Your app is ready! Antigravity has created:
                                </p>
                                <ul style={{ color: 'var(--color-text-secondary)' }}>
                                    <li>✓ Complete authentication system</li>
                                    <li>✓ Task CRUD operations</li>
                                    <li>✓ Database migrations</li>
                                    <li>✓ Comprehensive test suite</li>
                                    <li>✓ Production-ready code</li>
                                </ul>
                                <div style={{ marginTop: 'var(--space-4)' }}>
                                    <Button variant="cta" href="#">
                                        Run npm run dev
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div style={{ marginBottom: 'var(--space-12)' }}>
                            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-6)' }}>
                                Best Practices & Pro Tips
                            </h2>

                            <div className="grid grid-2 gap-6">
                                <div className="card" style={{ borderColor: 'var(--color-accent)' }}>
                                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-3)', color: 'var(--color-accent)' }}>
                                        ✅ Do This
                                    </h3>
                                    <ul style={{ color: 'var(--color-text-secondary)' }}>
                                        <li>Be specific in your descriptions</li>
                                        <li>Review architecture before approving</li>
                                        <li>Use the Refactor Agent regularly</li>
                                        <li>Let agents write tests</li>
                                    </ul>
                                </div>
                                <div className="card" style={{ borderColor: 'var(--color-error)' }}>
                                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-3)', color: 'var(--color-error)' }}>
                                        ❌ Avoid This
                                    </h3>
                                    <ul style={{ color: 'var(--color-text-secondary)' }}>
                                        <li>Don't manually edit agent code</li>
                                        <li>Don't skip architecture review</li>
                                        <li>Don't use for learning basics</li>
                                        <li>Don't ignore agent warnings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container container-md text-center">
                    <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-4)' }}>
                        Ready to Master Antigravity?
                    </h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)' }}>
                        Get our battle-tested Antigravity prompts and join the Flight Crew for weekly tips.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="cta" size="lg" href="/prompt-vault">
                            Get Antigravity Prompts
                        </Button>
                        <Button variant="secondary" size="lg" href="/#newsletter-signup">
                            Join Newsletter
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container container-md">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                How do I save time with Antigravity?
                            </h3>
                            <p className="text-secondary">
                                Antigravity reduces development time by 70-90% for most projects. Instead of writing code line-by-line,
                                you describe what you want and AI agents handle implementation, testing, and refactoring automatically.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                Is Antigravity better than Cursor or GitHub Copilot?
                            </h3>
                            <p className="text-secondary">
                                Antigravity is fundamentally different. Cursor and Copilot assist with coding, while Antigravity uses
                                autonomous agents to build entire features. Use Antigravity for new projects and Cursor for incremental improvements.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                Can beginners use Antigravity effectively?
                            </h3>
                            <p className="text-secondary">
                                Yes, but with caution. Antigravity makes building apps easier, but you still need to understand architecture,
                                databases, and APIs to review agent proposals effectively. It's best used by developers with at least 1-2 years of experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
