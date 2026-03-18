'use client';
import React from 'react';

const ClaudePricingTable: React.FC = () => {
    const pricingData = [
        { model: 'Haiku 4.5', input: '$1.00', output: '$5.00', tier: 'Budget' },
        { model: 'Sonnet 4.5', input: '$3.00', output: '$15.00', tier: 'Mid' },
        { model: 'Sonnet 4.6', input: '$3.00', output: '$15.00', tier: 'Mid' },
        { model: 'Opus 4.5', input: '$5.00', output: '$25.00', tier: 'Premium' },
        { model: 'Opus 4.6', input: '$5.00', output: '$25.00', tier: 'Premium' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'var(--color-surface)',
            padding: '40px 24px',
            borderRadius: '16px',
            margin: '40px 0',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
            <h3 style={{
                color: '#e0e7ff',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '24px',
                textTransform: 'uppercase'
            }}>Current Pricing Structure (February 2026)</h3>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(139, 92, 246, 0.25)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Model</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Input / 1M tokens</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Output / 1M tokens</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Tier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingData.map((row, i) => (
                            <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)' }}>
                                <td style={{ padding: '12px 16px', color: 'var(--color-border)', fontWeight: 'bold' }}>{row.model}</td>
                                <td style={{ padding: '12px 16px', color: '#34d399' }}>{row.input}</td>
                                <td style={{ padding: '12px 16px', color: '#f87171' }}>{row.output}</td>
                                <td style={{ padding: '12px 16px', color: 'var(--color-text-secondary)' }}>{row.tier}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaudePricingTable;
