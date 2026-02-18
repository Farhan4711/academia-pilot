'use client';

import React from 'react';
import Link from 'next/link';
import type { ContentItem } from '@/lib/content';

interface NewsTickerProps {
    items: ContentItem[];
}

export default function NewsTicker({ items }: NewsTickerProps) {
    if (!items || items.length === 0) return null;

    return (
        <div className="news-ticker-container" style={{
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid var(--color-border)',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 'var(--z-sticky)'
        }}>
            {/* Label */}
            <div className="news-label" style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-text-primary)',
                padding: '0 var(--space-4)',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'var(--font-bold)',
                fontSize: 'var(--text-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                zIndex: 2,
                boxShadow: '4px 0 15px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <span className="dot-pulse" style={{
                    marginRight: '8px',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%'
                }}></span>
                Latest on AP
                <div className="shine-sweep"></div>
            </div>

            {/* Ticker Content */}
            <div className="ticker-wrap" style={{
                flex: 1,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="ticker-move" style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    animation: 'ticker 60s linear infinite',
                    paddingLeft: '100%'
                }}>
                    {items.concat(items).map((item, index) => (
                        <Link
                            key={`${item.slug}-${index}`}
                            prefetch={false}
                            href={`/news/${item.category || 'uncategorized'}/${item.slug.split('/').pop()}/`}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0 var(--space-8)',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                fontSize: 'var(--text-sm)',
                                transition: 'color var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        >
                            <span style={{
                                fontWeight: 'var(--font-bold)',
                                color: 'var(--color-accent)',
                                marginRight: '8px'
                            }}>
                                {(item.category || '').replace(/-/g, ' ').toUpperCase()}
                            </span>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-20deg); }
                    20%, 100% { transform: translateX(200%) skewX(-20deg); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.2); opacity: 0.7; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .ticker-move:hover {
                    animation-play-state: paused;
                }
                .shine-sweep {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50px;
                    height: 100%;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
                    animation: shine 3s infinite linear;
                    pointer-events: none;
                }
                .dot-pulse {
                    animation: pulse 1.5s infinite ease-in-out;
                }
                @media (max-width: 768px) {
                    .ticker-move {
                        animation-duration: 40s;
                    }
                }
            `}</style>
        </div>
    );
}
