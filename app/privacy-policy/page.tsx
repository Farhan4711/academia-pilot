import Link from 'next/link';

export const metadata = {
    title: "Privacy Policy",
    description: "Academia Pilot Privacy Policy - How we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container container-md">
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Privacy Policy
                        </h1>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            Last updated: February 3, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container container-md">
                    <div className="card" style={{ padding: 'var(--space-8)' }}>
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-12) 0',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)'
                        }}>
                            <div style={{ fontSize: 'var(--text-6xl)', marginBottom: 'var(--space-4)' }}>
                                🚧
                            </div>
                            <h2 style={{
                                fontSize: 'var(--text-3xl)',
                                fontWeight: 'var(--font-bold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }}>
                                Coming Soon
                            </h2>
                            <p className="text-secondary" style={{
                                fontSize: 'var(--text-lg)',
                                marginBottom: 'var(--space-6)',
                                maxWidth: '600px',
                                margin: '0 auto var(--space-6)'
                            }}>
                                We're currently preparing our comprehensive Privacy Policy.
                                In the meantime, rest assured that we take your privacy seriously
                                and handle all data with care.
                            </p>

                            <div style={{
                                textAlign: 'left',
                                maxWidth: '700px',
                                margin: '0 auto',
                                padding: 'var(--space-6)',
                                backgroundColor: 'var(--color-primary)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)'
                            }}>
                                <h3 style={{
                                    fontSize: 'var(--text-xl)',
                                    fontWeight: 'var(--font-semibold)',
                                    marginBottom: 'var(--space-4)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Quick Summary
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                }}>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                        We only collect data necessary to provide our services
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                        We never sell your personal information
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                        You can unsubscribe from our newsletter anytime
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                        We use industry-standard security measures
                                    </li>
                                </ul>
                            </div>

                            <div id="cookies" style={{ marginTop: 'var(--space-8)' }}>
                                <h3 style={{
                                    fontSize: 'var(--text-xl)',
                                    fontWeight: 'var(--font-semibold)',
                                    marginBottom: 'var(--space-3)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Cookie Policy
                                </h3>
                                <p className="text-secondary">
                                    We use minimal cookies to improve your browsing experience.
                                    Details coming soon.
                                </p>
                            </div>

                            <div style={{ marginTop: 'var(--space-8)' }}>
                                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                                    Have questions about privacy?
                                </p>
                                <a
                                    href="mailto:privacy@academiapilot.com"
                                    className="btn-primary"
                                    style={{ display: 'inline-flex' }}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
                            <Link href="/" className="text-accent hover:underline">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
