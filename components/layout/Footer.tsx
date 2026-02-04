'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            marginTop: 'var(--space-20)'
        }}>
            {/* Main Footer Content */}
            <div className="container" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-8)' }}>
                <div className="grid grid-4 gap-8">
                    {/* Brand Column */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-2" style={{ marginBottom: 'var(--space-4)' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'linear-gradient(135deg, var(--color-accent), var(--color-cta))',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'var(--font-black)',
                                fontSize: 'var(--text-base)'
                            }}>
                                AP
                            </div>
                            <div style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 'var(--font-bold)',
                                background: 'linear-gradient(135deg, var(--color-text-primary), var(--color-accent))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Academia Pilot
                            </div>
                        </div>

                        <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', lineHeight: '1.6' }}>
                            Your co-pilot for navigating the agentic frontier.
                        </p>

                        {/* Social Links */}
                        <div>
                            <h4 style={{
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-semibold)',
                                marginBottom: 'var(--space-3)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--color-text-muted)'
                            }}>
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/academiapilot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary hover:text-accent transition-fast"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)',
                                        transition: 'all var(--transition-fast)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                    aria-label="GitHub"
                                >
                                    ⚡
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigate Column */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--font-semibold)',
                            marginBottom: 'var(--space-4)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--color-text-muted)'
                        }}>
                            Navigate
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/news-radar" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    News Radar
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/antigravity-guide" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Antigravity Guide
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/tool-hangar" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Tool Hangar
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/prompt-vault" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Prompt Vault
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/course-navigator" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Course Navigator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--font-semibold)',
                            marginBottom: 'var(--space-4)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--color-text-muted)'
                        }}>
                            Resources
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/about" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    About The Pilot
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <a href="mailto:hello@academiapilot.com" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Contact
                                </a>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/privacy-policy" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li style={{ marginBottom: 'var(--space-2)' }}>
                                <Link href="/terms-of-service" className="text-secondary hover:text-accent transition-fast" style={{ fontSize: 'var(--text-sm)' }}>
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--font-semibold)',
                            marginBottom: 'var(--space-4)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--color-text-muted)'
                        }}>
                            Join the Flight Crew
                        </h4>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', lineHeight: '1.6' }}>
                            Get weekly AI insights, tool reviews, and exclusive prompts.
                        </p>
                        <Link href="#newsletter-signup" className="btn-primary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                            Subscribe to Newsletter
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-primary)'
            }}>
                <div className="container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-muted" style={{ fontSize: 'var(--text-xs)' }}>
                            © {currentYear} Academia Pilot. Navigating the agentic frontier.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/privacy-policy" className="text-muted hover:text-accent transition-fast" style={{ fontSize: 'var(--text-xs)' }}>
                                Privacy
                            </Link>
                            <Link href="/terms-of-service" className="text-muted hover:text-accent transition-fast" style={{ fontSize: 'var(--text-xs)' }}>
                                Terms
                            </Link>
                            <Link href="/privacy-policy#cookies" className="text-muted hover:text-accent transition-fast" style={{ fontSize: 'var(--text-xs)' }}>
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
