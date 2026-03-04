'use client';

import React from 'react';
import Link from 'next/link';

interface InlineCTAProps {
    title: string;
    description: string;
    buttonText: string;
    href: string;
    icon?: string;
}

/**
 * A contextual Call To Action to be embedded within or at the end of articles.
 * Helps drive engagement to related tools, guides, or the Prompt Vault.
 */
export default function InlineCTA({
    title,
    description,
    buttonText,
    href,
    icon = '💡',
}: InlineCTAProps) {
    const isExternal = href.startsWith('http');

    return (
        <aside
            style={{
                margin: 'var(--space-8) 0',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.1) 0%, rgba(0, 212, 180, 0.05) 100%)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-accent)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                <h4 style={{
                    margin: 0,
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--color-text-primary)'
                }}>
                    {title}
                </h4>
            </div>

            <p style={{
                margin: 0,
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.5'
            }}>
                {description}
            </p>

            <div style={{ marginTop: 'var(--space-2)' }}>
                {isExternal ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: 'var(--space-2) var(--space-4)',
                            backgroundColor: 'var(--color-accent)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '500',
                            fontSize: 'var(--text-sm)',
                            transition: 'background-color 200ms ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                    >
                        {buttonText} {`\u2197`}
                    </a>
                ) : (
                    <Link
                        href={href}
                        style={{
                            display: 'inline-block',
                            padding: 'var(--space-2) var(--space-4)',
                            backgroundColor: 'var(--color-accent)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '500',
                            fontSize: 'var(--text-sm)',
                            transition: 'background-color 200ms ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                    >
                        {buttonText} {`\u2192`}
                    </Link>
                )}
            </div>
        </aside>
    );
}
