'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

interface NewsletterSignupProps {
    compact?: boolean;
}

export default function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');
        setMessage('');

        // For static export, we use the Google Apps Script Web App URL
        const scriptUrl = process.env.NEXT_PUBLIC_NEWSLETTER_SCRIPT_URL;

        if (!scriptUrl) {
            console.error('Missing NEXT_PUBLIC_NEWSLETTER_SCRIPT_URL environment variable');
            setStatus('error');
            setMessage('Newsletter service is currently unavailable.');
            return;
        }

        try {
            // We use 'no-cors' to avoid browser CORS issues with Google Apps Script's 302 redirects
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ email })
            });

            // With mode: 'no-cors', the response is opaque. We cannot read response.json() or response.ok.
            // If fetch() resolves without throwing a network error, the request was sent successfully to Google.
            setStatus('success');
            setMessage('🎉 Welcome to the Flight Crew! You are now subscribed.');
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
            setMessage('Network error or invalid service. Please try again later.');
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    };

    if (compact) {
        return (
            <Button variant="cta" size="sm" onClick={() => {
                const element = document.getElementById('newsletter-signup');
                element?.scrollIntoView({ behavior: 'smooth' });
            }}>
                Join Flight Crew
            </Button>
        );
    }

    return (
        <div id="newsletter-signup" className="card" style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)',
            borderColor: 'var(--color-accent)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🎁</div>
                <h3 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-bold)',
                    marginBottom: 'var(--space-2)',
                    color: 'var(--color-text-primary)'
                }}>
                    Claim Your Free 2026 AI Starter Kit
                </h3>
                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
                    Get our definitive guide to the essential AI tools, top prompts, and career templates. Plus, join 10,000+ professionals getting our weekly AI insights.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="pilot@example.com"
                        required
                        disabled={status === 'loading'}
                        style={{
                            flex: 1,
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-base)',
                            backgroundColor: 'var(--color-primary)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-text-primary)',
                            outline: 'none',
                            transition: 'border-color var(--transition-fast)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                    <Button
                        type="submit"
                        variant="cta"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Me the Kit'}
                    </Button>
                </div>

                {message && (
                    <div style={{
                        marginTop: 'var(--space-3)',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-sm)',
                        backgroundColor: status === 'success'
                            ? 'rgba(72, 187, 120, 0.1)'
                            : 'rgba(252, 129, 129, 0.1)',
                        color: status === 'success'
                            ? 'var(--color-success)'
                            : 'var(--color-error)',
                        border: `1px solid ${status === 'success' ? 'var(--color-success)' : 'var(--color-error)'}`
                    }}>
                        {message}
                    </div>
                )}
            </form>

            <p className="text-muted" style={{
                fontSize: 'var(--text-xs)',
                marginTop: 'var(--space-3)',
                textAlign: 'center'
            }}>
                No spam. Unsubscribe anytime. Powered by Beehiiv.
            </p>
        </div>
    );
}
