import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <section className="section">
                <div className="container container-md">
                    <div className="card" style={{
                        padding: 'var(--space-12)',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)',
                        borderColor: 'var(--color-accent)'
                    }}>
                        {/* 404 Icon */}
                        <div style={{
                            fontSize: 'var(--text-6xl)',
                            marginBottom: 'var(--space-6)',
                            filter: 'grayscale(0.3)'
                        }}>
                            🛸
                        </div>

                        {/* Error Code */}
                        <div style={{
                            fontSize: 'var(--text-6xl)',
                            fontWeight: 'var(--font-black)',
                            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-cta) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: 'var(--space-4)',
                            lineHeight: '1'
                        }}>
                            404
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'var(--text-3xl)',
                            fontWeight: 'var(--font-bold)',
                            marginBottom: 'var(--space-4)',
                            color: 'var(--color-text-primary)'
                        }}>
                            Lost in Space
                        </h1>

                        {/* Description */}
                        <p className="text-secondary" style={{
                            fontSize: 'var(--text-lg)',
                            marginBottom: 'var(--space-8)',
                            maxWidth: '500px',
                            margin: '0 auto var(--space-8)'
                        }}>
                            Looks like this page drifted off course. Let's get you back on the flight path.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
                            <Button variant="cta" size="lg" href="/">
                                Return to Base
                            </Button>
                            <Button variant="secondary" size="lg" href="/news/">
                                Browse News
                            </Button>
                        </div>

                        {/* Quick Links */}
                        <div style={{
                            marginTop: 'var(--space-12)',
                            paddingTop: 'var(--space-8)',
                            borderTop: '1px solid var(--color-border)'
                        }}>
                            <p className="text-muted" style={{
                                fontSize: 'var(--text-sm)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                Popular Destinations
                            </p>
                            <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
                                <Link href="/ai-mastery-hub/" className="text-accent hover:underline">
                                    AI Mastery Hub
                                </Link>
                                <Link href="/tool-hangar/" className="text-accent hover:underline">
                                    Tool Hangar
                                </Link>
                                <Link href="/prompt-vault/" className="text-accent hover:underline">
                                    Prompt Vault
                                </Link>
                                <Link href="/about/" className="text-accent hover:underline">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
