'use client';

import React from 'react';

export default function TerminalPolicyTiers() {
    const tiers = [
        {
            name: 'OFF (Allow List Only)',
            status: 'SAFE',
            color: '#27C93F',
            description: 'Agent cannot execute any command unless it matches your explicit whitelist.',
            bestFor: 'Production, Security-critical, or Paying projects.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        },
        {
            name: 'AUTO (Default)',
            status: 'MODERATE',
            color: '#FFBD2E',
            description: 'Agent uses an internal model to judge command risk. May hallucinate safety.',
            bestFor: 'Internal tools or rapid experimentation.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            )
        },
        {
            name: 'TURBO (Deny List Only)',
            status: 'DANGEROUS',
            color: '#FF5F56',
            description: 'Agent executes everything except blacklisted commands. High risk of rogue action.',
            bestFor: 'Throwaway prototypes or non-sensitive local playground.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
            )
        }
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-4)',
            margin: 'var(--space-8) 0'
        }}>
            {tiers.map((tier, idx) => (
                <div key={idx} style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: tier.color,
                        color: idx === 1 ? '#000' : '#fff',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        padding: '4px 12px',
                        borderBottomLeftRadius: 'var(--radius-md)',
                        textTransform: 'uppercase'
                    }}>
                        {tier.status}
                    </div>

                    <div style={{ color: tier.color, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {tier.icon}
                        <h4 style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)' }}>{tier.name}</h4>
                    </div>

                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                        {tier.description}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                        <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Recommended for</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{tier.bestFor}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
