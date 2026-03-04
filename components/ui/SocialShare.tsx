'use client';

import React, { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
    excerpt?: string;
}

interface ShareBtn {
    label: string;
    icon: string;
    color: string;
    action: () => void;
}

export default function SocialShare({ url, title, excerpt = '' }: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    const fullUrl = url.startsWith('http') ? url : `https://academiapilot.com${url}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback for older browsers
            const ta = document.createElement('textarea');
            ta.value = fullUrl;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const tweet = `${title}\n\n${excerpt.length > 100 ? excerpt.slice(0, 100) + '…' : excerpt}\n\n${fullUrl}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

    const buttons: ShareBtn[] = [
        {
            label: 'Share on X',
            icon: '𝕏',
            color: '#000',
            action: () => window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400'),
        },
        {
            label: 'Share on LinkedIn',
            icon: 'in',
            color: '#0077B5',
            action: () => window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=600,height=500'),
        },
        {
            label: copied ? 'Copied!' : 'Copy Link',
            icon: copied ? '✓' : '🔗',
            color: copied ? '#4CAF50' : 'var(--color-accent)',
            action: handleCopy,
        },
    ];

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
                padding: 'var(--space-4) 0',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                margin: 'var(--space-8) 0',
            }}
        >
            <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
            }}>
                Share
            </span>

            {buttons.map((btn) => (
                <button
                    key={btn.label}
                    onClick={btn.action}
                    aria-label={btn.label}
                    title={btn.label}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        padding: 'var(--space-2) var(--space-4)',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${btn.color}`,
                        backgroundColor: 'transparent',
                        color: btn.color,
                        fontSize: 'var(--text-sm)',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 150ms, color 150ms',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = btn.color;
                        e.currentTarget.style.color = btn.color === '#000' || btn.color === '#0077B5' ? '#fff' : '#000';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = btn.color;
                    }}
                >
                    <span style={{ fontFamily: btn.label.startsWith('Share on X') ? 'serif' : 'inherit', fontWeight: 'bold' }}>
                        {btn.icon}
                    </span>
                    {btn.label}
                </button>
            ))}
        </div>
    );
}
