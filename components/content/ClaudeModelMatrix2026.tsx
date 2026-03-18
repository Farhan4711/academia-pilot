'use client';
import React from 'react';

type ModelData = {
    name: string;
    release: string;
    context: string;
    bestUse: string;
    cost: string;
    color: string;
};

const models: ModelData[] = [
    {
        name: 'Haiku 4.5',
        release: 'Oct 2025',
        context: '200K',
        bestUse: 'High-volume, sub-agents',
        cost: 'Lowest',
        color: 'var(--color-text-muted)' // Slate
    },
    {
        name: 'Sonnet 4.6',
        release: 'Feb 17, 2026',
        context: '200K (1M Beta)',
        bestUse: 'Daily work, coding, agents',
        cost: '~$3/M tokens',
        color: '#60a5fa' // Azure
    },
    {
        name: 'Opus 4.6',
        release: 'Feb 5, 2026',
        context: '200K (1M Beta)',
        bestUse: 'Complex reasoning, research',
        cost: '~$15/M tokens',
        color: '#34d399' // Emerald
    }
];

const ClaudeModelMatrix2026: React.FC = () => {
    return (
        <div style={{
            margin: 'var(--space-10) 0',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)'
        }}>
            <div style={{
                padding: 'var(--space-4) var(--space-6)',
                borderBottom: '1px solid var(--color-border)',
                background: 'linear-gradient(135deg, rgba(77, 166, 255, 0.1) 0%, transparent 100%)'
            }}>
                <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>Claude 4.x Model Family (March 2026)</h4>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(0,0,0,0.2)', textAlign: 'left' }}>
                            <th style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>Model</th>
                            <th style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>Context</th>
                            <th style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>Best Use Case</th>
                            <th style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>Cost (Input)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((model, i) => (
                            <tr key={i} style={{ borderBottom: i < models.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                <td style={{ padding: '16px 20px' }}>
                                    <div className="flex items-center gap-2">
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: model.color }}></div>
                                        <strong style={{ color: 'var(--color-text-primary)' }}>{model.name}</strong>
                                    </div>
                                    <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', marginTop: '2px' }}>Rel: {model.release}</div>
                                </td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-secondary)' }}>{model.context}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <span style={{
                                        color: model.color,
                                        backgroundColor: `${model.color}15`,
                                        padding: '2px 8px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: 'var(--text-xs)',
                                        border: `1px solid ${model.color}30`
                                    }}>
                                        {model.bestUse}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{model.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaudeModelMatrix2026;
