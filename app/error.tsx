'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <section className="section">
                <div className="container container-md">
                    <div className="card" style={{
                        padding: 'var(--space-12)',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 77, 0, 0.05) 100%)',
                        borderColor: 'var(--color-cta)'
                    }}>
                        {/* Error Icon */}
                        <div style={{
                            fontSize: 'var(--text-6xl)',
                            marginBottom: 'var(--space-6)'
                        }}>
                            ⚠️
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'var(--text-4xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-cta) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Houston, We Have a Problem
                        </h1>

                        {/* Description */}
                        <p className="text-secondary" style={{
                            fontSize: 'var(--text-lg)',
                            marginBottom: 'var(--space-2)',
                            maxWidth: '500px',
                            margin: '0 auto var(--space-2)'
                        }}>
                            Something went wrong on our end. Don't worry, our flight crew is on it.
                        </p>

                        {/* Error Details (in development) */}
                        {process.env.NODE_ENV === 'development' && (
                            <details style={{
                                marginTop: 'var(--space-4)',
                                marginBottom: 'var(--space-6)',
                                textAlign: 'left',
                                backgroundColor: 'var(--color-primary)',
                                padding: 'var(--space-4)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)'
                            }}>
                                <summary style={{
                                    cursor: 'pointer',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--space-2)'
                                }}>
                                    Error Details (Development Only)
                                </summary>
                                <code style={{
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--color-error)',
                                    wordBreak: 'break-word'
                                }}>
                                    {error.message}
                                </code>
                            </details>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4 justify-center" style={{
                            flexWrap: 'wrap',
                            marginTop: 'var(--space-8)'
                        }}>
                            <Button
                                variant="cta"
                                size="lg"
                                onClick={reset}
                            >
                                Try Again
                            </Button>
                            <Button variant="secondary" size="lg" href="/">
                                Return Home
                            </Button>
                        </div>

                        {/* Help Text */}
                        <div style={{
                            marginTop: 'var(--space-12)',
                            paddingTop: 'var(--space-8)',
                            borderTop: '1px solid var(--color-border)'
                        }}>
                            <p className="text-muted" style={{
                                fontSize: 'var(--text-sm)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                If this problem persists, please contact us
                            </p>
                            <a
                                href="mailto:support@academiapilot.com"
                                className="text-accent hover:underline"
                            >
                                support@academiapilot.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
