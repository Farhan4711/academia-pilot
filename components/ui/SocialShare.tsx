'use client';

import React, { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
    excerpt?: string;
}

interface ShareBtn {
    id: string;
    label: string;
    icon: string;
    bgColor: string;
    textColor: string;
    hoverBg: string;
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
            id: 'x',
            label: 'Share on X',
            icon: '𝕏',
            bgColor: 'var(--color-surface)',
            textColor: 'var(--color-text-primary)',
            hoverBg: 'var(--color-surface-hover)',
            action: () => window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400'),
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            icon: 'in',
            bgColor: 'var(--color-surface)',
            textColor: '#0077b5',
            hoverBg: '#f0f7f9',
            action: () => window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=600,height=500'),
        },
        {
            id: 'copy',
            label: copied ? 'Copied Link!' : 'Copy Link',
            icon: copied ? '✓' : '🔗',
            bgColor: copied ? '#10b981' : 'var(--color-surface)',
            textColor: copied ? '#ffffff' : 'var(--color-text-primary)',
            hoverBg: copied ? '#059669' : 'var(--color-surface-hover)',
            action: handleCopy,
        },
    ];

    return (
        <div className="share-pod">
            <span className="share-label">Share This Insight</span>
            
            <div className="share-buttons">
                {buttons.map((btn) => (
                    <button
                        key={btn.id}
                        className={`share-btn share-btn-${btn.id} ${copied && btn.id === 'copy' ? 'copied' : ''}`}
                        onClick={btn.action}
                        aria-label={btn.label}
                        title={btn.label}
                        style={{
                            '--btn-bg': btn.bgColor,
                            '--btn-text': btn.textColor,
                            '--btn-hover-bg': btn.hoverBg,
                        } as React.CSSProperties}
                    >
                        <span className="btn-icon">{btn.icon}</span>
                        <span className="btn-label">{btn.label}</span>
                    </button>
                ))}
            </div>

            <style jsx>{`
                .share-pod {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-5);
                    padding: var(--space-3) var(--space-5);
                    margin: var(--space-10) 0;
                    background: var(--color-background-secondary);
                    border-radius: 100px;
                    border: 1px solid var(--color-border-subtle);
                    flex-wrap: wrap;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
                }

                @media (prefers-color-scheme: dark) {
                    .share-pod {
                        background: rgba(255, 255, 255, 0.03);
                        box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
                        border-color: rgba(255, 255, 255, 0.05);
                    }
                }

                .share-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-text-secondary);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    white-space: nowrap;
                    margin-right: var(--space-2);
                }

                .share-buttons {
                    display: flex;
                    gap: var(--space-3);
                    flex-wrap: wrap;
                }

                .share-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 100px;
                    border: 1px solid var(--color-border-subtle);
                    background: var(--btn-bg);
                    color: var(--btn-text);
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02);
                }

                @media (prefers-color-scheme: dark) {
                    .share-btn {
                        border-color: rgba(255, 255, 255, 0.08);
                        background: rgba(255, 255, 255, 0.06);
                        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                    }
                    .share-btn-linkedin {
                        color: #38bdf8; /* Lighter blue for dark mode */
                    }
                }

                .share-btn:hover {
                    background: var(--btn-hover-bg);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
                    border-color: var(--color-border);
                }
                
                .share-btn.copied {
                    border-color: transparent;
                }

                .share-btn.copied:hover {
                    transform: none;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
                }

                .share-btn-x .btn-icon {
                    font-family: serif;
                    font-weight: bold;
                    font-size: 1.1em;
                }

                @media (max-width: 640px) {
                    .share-pod {
                        border-radius: var(--radius-xl);
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-4);
                        padding: var(--space-5);
                        width: 100%;
                    }
                    .share-label {
                        margin-right: 0;
                    }
                }
            `}</style>
        </div>
    );
}
