import Link from 'next/link';

export const metadata = {
    title: "Terms of Service",
    description: "Academia Pilot Terms of Service - Terms and conditions for using our platform.",
};

export default function TermsOfServicePage() {
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
                            Terms of Service
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
                            background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 77, 0, 0.05) 100%)'
                        }}>
                            <div style={{ fontSize: 'var(--text-6xl)', marginBottom: 'var(--space-4)' }}>
                                📜
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
                                We're currently finalizing our Terms of Service.
                                By using Academia Pilot, you agree to use our platform
                                responsibly and in accordance with applicable laws.
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
                                    Key Points
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                }}>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-cta)' }}>•</span>
                                        Use our content for personal and educational purposes
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-cta)' }}>•</span>
                                        Respect intellectual property rights
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-cta)' }}>•</span>
                                        No spam, abuse, or malicious activity
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-cta)' }}>•</span>
                                        We reserve the right to modify services
                                    </li>
                                    <li className="text-secondary" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                        <span style={{ color: 'var(--color-cta)' }}>•</span>
                                        Content is provided "as is" for informational purposes
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginTop: 'var(--space-8)' }}>
                                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                                    Questions about our terms?
                                </p>
                                <a
                                    href="mailto:legal@academiapilot.com"
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
