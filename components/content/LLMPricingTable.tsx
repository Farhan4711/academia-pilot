'use client';
import React from 'react';

interface PricingTier {
    plan: string;
    price: string;
    features: string[];
    limits?: string;
    highlight?: boolean;
}

interface LLMPricingTableProps {
    toolName: string;
    tiers: PricingTier[];
    apiNote?: string;
}

export default function LLMPricingTable({ toolName, tiers, apiNote }: LLMPricingTableProps) {
    return (
        <div style={{
            margin: 'var(--space-8) 0',
            background: 'linear-gradient(135deg, rgba(15,20,40,0.9) 0%, rgba(20,30,60,0.9) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 16px 48px -8px rgba(0,0,0,0.4)',
        }}>
            <div style={{
                padding: 'var(--space-5) var(--space-6)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <span style={{ fontSize: '20px' }}>💳</span>
                <div>
                    <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>
                        {toolName} — Pricing Structure
                    </h3>
                    <p style={{ margin: '2px 0 0', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        Current as of February 2026
                    </p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(tiers.length, 4)}, 1fr)`,
                gap: '1px',
                background: 'rgba(255,255,255,0.05)',
                padding: '1px',
            }}>
                {tiers.map((tier, i) => (
                    <div
                        key={tier.plan}
                        style={{
                            background: tier.highlight
                                ? 'linear-gradient(180deg, rgba(99,102,241,0.15) 0%, rgba(15,20,40,0.98) 100%)'
                                : 'rgba(15,20,40,0.98)',
                            padding: 'var(--space-6)',
                            position: 'relative',
                            borderTop: tier.highlight ? '2px solid #6366f1' : '2px solid transparent',
                        }}
                    >
                        {tier.highlight && (
                            <div style={{
                                position: 'absolute',
                                top: '-1px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: '#6366f1',
                                color: 'var(--color-text-primary)',
                                fontSize: '10px',
                                fontWeight: '700',
                                letterSpacing: '0.1em',
                                padding: '2px 10px',
                                borderRadius: '0 0 6px 6px',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                            }}>
                                Most Popular
                            </div>
                        )}

                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <div style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: tier.highlight ? '#a78bfa' : 'var(--color-text-muted)',
                                marginBottom: '8px',
                            }}>
                                {tier.plan}
                            </div>
                            <div style={{
                                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                                fontWeight: '800',
                                color: 'var(--color-text-primary)',
                                lineHeight: 1,
                            }}>
                                {tier.price}
                            </div>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-4)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {tier.features.map((feature, fi) => (
                                <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'rgba(203,213,225,0.8)', lineHeight: 1.4 }}>
                                    <span style={{ color: '#34d399', flexShrink: 0, marginTop: '1px' }}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {tier.limits && (
                            <div style={{
                                fontSize: '11px',
                                color: 'var(--color-text-muted)',
                                background: 'rgba(255,255,255,0.04)',
                                padding: '6px 10px',
                                borderRadius: '6px',
                                marginTop: 'auto',
                            }}>
                                {tier.limits}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {apiNote && (
                <div style={{
                    padding: '12px 24px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    fontSize: '12px',
                    color: 'var(--color-text-muted)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    <span style={{ color: '#60a5fa' }}>🔌</span>
                    <span><strong style={{ color: 'rgba(203,213,225,0.8)' }}>API:</strong> {apiNote}</span>
                </div>
            )}
        </div>
    );
}
