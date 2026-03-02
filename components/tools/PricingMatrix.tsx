import React from 'react';

export interface PricingTier {
    plan: string;
    price: string;
    features: string[];
    apiAccess: string;
    limits: string;
}

interface PricingMatrixProps {
    tiers: PricingTier[];
}

export default function PricingMatrix({ tiers }: PricingMatrixProps) {
    if (!tiers || tiers.length === 0) return null;

    return (
        <div style={{
            width: '100%',
            overflowX: 'auto',
            marginBottom: 'var(--space-8)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)'
        }}>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '600px'
            }}>
                <thead>
                    <tr style={{ backgroundColor: 'var(--color-surface)', borderBottom: '2px solid var(--color-border)' }}>
                        <th style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Plan</th>
                        <th style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', color: 'var(--color-accent)' }}>Price</th>
                        <th style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Key Features</th>
                        <th style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>API Access</th>
                        <th style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Limits</th>
                    </tr>
                </thead>
                <tbody>
                    {tiers.map((tier, index) => (
                        <tr key={index} style={{ borderBottom: index < tiers.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                            <td style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-medium)', verticalAlign: 'top' }}>{tier.plan}</td>
                            <td style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-lg)', verticalAlign: 'top' }}>{tier.price}</td>
                            <td style={{ padding: 'var(--space-4)', verticalAlign: 'top' }}>
                                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-text-secondary)' }}>
                                    {tier.features.map((feature, i) => (
                                        <li key={i} style={{ marginBottom: '4px' }}>{feature}</li>
                                    ))}
                                </ul>
                            </td>
                            <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)', verticalAlign: 'top' }}>{tier.apiAccess}</td>
                            <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)', verticalAlign: 'top', fontSize: 'var(--text-sm)' }}>{tier.limits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
