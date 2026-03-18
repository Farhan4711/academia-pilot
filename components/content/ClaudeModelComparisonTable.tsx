'use client';
import React from 'react';

const ClaudeModelComparisonTable: React.FC = () => {
    const data = [
        { model: 'Haiku 4.5', tier: 'Budget', input: '$1.00', output: '$5.00', context: '200K', swe: '73.3%', bestFor: 'Speed, volume, automation' },
        { model: 'Sonnet 4', tier: 'Mid', input: 'Standard', output: 'Standard', context: '200K', swe: '~70%', bestFor: 'Legacy deployments' },
        { model: 'Sonnet 4.5', tier: 'Mid', input: '$3.00', output: '$15.00', context: '200K / 1M', swe: '77.2%', bestFor: 'Coding, research, production' },
        { model: 'Sonnet 4.6', tier: 'Mid', input: '$3.00', output: '$15.00', context: '200K / 1M', swe: 'Opus-class', bestFor: 'Daily driver, computer use' },
        { model: 'Opus 4', tier: 'Premium', input: 'Legacy', output: 'Legacy', context: '200K', swe: '—', bestFor: 'Legacy only' },
        { model: 'Opus 4.1', tier: 'Premium', input: '$15.00', output: '$75.00', context: '200K', swe: '80.9%', bestFor: 'Legacy, migrate away' },
        { model: 'Opus 4.5', tier: 'Premium', input: '$5.00', output: '$25.00', context: '200K', swe: '80.9%', bestFor: 'Complex reasoning, security' },
        { model: 'Opus 4.6', tier: 'Premium', input: '$5.00', output: '$25.00', context: '200K / 1M', swe: 'Frontier', bestFor: 'Deep reasoning, large context' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
            padding: '40px 24px',
            borderRadius: '16px',
            margin: '40px 0',
            border: '1px solid rgba(244, 114, 182, 0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
            <h3 style={{
                color: '#fbcfe8',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '24px',
                textTransform: 'uppercase'
            }}>Model Comparison Table</h3>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(244, 114, 182, 0.15)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Model</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Tier</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Input ($/M)</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Output ($/M)</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Context Window</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>SWE-bench</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-text-primary)' }}>Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)', borderBottom: '1px solid var(--color-border-light)' }}>
                                <td style={{ padding: '12px 16px', color: 'var(--color-border)', fontWeight: 'bold' }}>{row.model}</td>
                                <td style={{ padding: '12px 16px', color: '#f472b6' }}>{row.tier}</td>
                                <td style={{ padding: '12px 16px', color: '#34d399' }}>{row.input}</td>
                                <td style={{ padding: '12px 16px', color: '#f87171' }}>{row.output}</td>
                                <td style={{ padding: '12px 16px', color: '#bfdbfe' }}>{row.context}</td>
                                <td style={{ padding: '12px 16px', color: '#fde047' }}>{row.swe}</td>
                                <td style={{ padding: '12px 16px', color: 'var(--color-text-secondary)' }}>{row.bestFor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaudeModelComparisonTable;
