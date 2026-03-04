'use client';

import React from 'react';

interface TLDRBoxProps {
    points: string[];
    title?: string;
}

/**
 * TL;DR / Key Takeaways callout box shown at the top of news articles.
 * Points are passed from the MDX frontmatter `tldr` array field.
 */
export default function TLDRBox({ points, title = 'TL;DR — Key Takeaways' }: TLDRBoxProps) {
    if (!points || points.length === 0) return null;

    return (
        <div
            role="note"
            aria-label="Key Takeaways"
            style={{
                margin: 'var(--space-8) 0',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(0,112,243,0.08) 0%, rgba(0,212,180,0.06) 100%)',
                border: '1px solid rgba(0,112,243,0.25)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative glow strip */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--color-accent), var(--color-cta))',
                borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <span style={{ fontSize: '1.25rem' }}>⚡</span>
                <h2 style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    margin: 0,
                }}>
                    {title}
                </h2>
            </div>

            <ul style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
            }}>
                {points.map((point, i) => (
                    <li
                        key={i}
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-3)',
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6',
                        }}
                    >
                        <span style={{
                            flexShrink: 0,
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-accent), var(--color-cta))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: '#fff',
                            marginTop: '2px',
                        }}>
                            {i + 1}
                        </span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
