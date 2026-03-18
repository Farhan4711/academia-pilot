'use client';
import React from 'react';

const RewriteDecisionMatrix: React.FC = () => {
    const matrix = [
        {
            condition: 'Age < 3 months, < 5K lines, zero production users',
            verdict: 'Rewrite',
            color: '#ef4444',
            reasoning: 'Rewrite cost < fix cost + liability'
        },
        {
            condition: 'Age > 6 months, production users, no auth vulnerabilities',
            verdict: 'Refactor incrementally',
            color: '#3b82f6',
            reasoning: 'Migration cost > fix cost; users cannot be disrupted'
        },
        {
            condition: 'Auth vulnerabilities confirmed, user data exposed',
            verdict: 'Emergency fix + rewrite plan within 90 days',
            color: '#f97316',
            reasoning: 'Legal and reputational cost of delay is highest risk'
        },
        {
            condition: 'Six-month wall reached, velocity near zero',
            verdict: 'Rewrite',
            color: '#ef4444',
            reasoning: 'Refactoring unmaintainable code costs more than rebuilding'
        },
        {
            condition: 'Age < 3 months, vulnerabilities found, no production users yet',
            verdict: 'Fix now',
            color: '#10b981',
            reasoning: 'No user migration cost; fix before any user arrives'
        },
        {
            condition: 'Any codebase with hardcoded production credentials',
            verdict: 'Rotate immediately, then decide',
            color: '#eab308',
            reasoning: 'Rotation is not a decision — it is an emergency action'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            background: '#0f172a',
            padding: '32px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(51, 65, 85, 0.5)',
        }}>
            <h3 style={{
                color: '#f8fafc',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '24px',
            }}>
                Rewrite vs Fix: The Decision Matrix
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {matrix.map((item, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1fr',
                        gap: '24px',
                        alignItems: 'center',
                        background: 'var(--color-surface)',
                        padding: '20px',
                        borderRadius: '12px',
                        borderLeft: `4px solid ${item.color}`
                    }}>
                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '500' }}>
                            {item.condition}
                        </div>
                        <div style={{
                            background: `${item.color}20`,
                            color: item.color,
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '700',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            whiteSpace: 'nowrap'
                        }}>
                            {item.verdict}
                        </div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: '13px', fontStyle: 'italic' }}>
                            {item.reasoning}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewriteDecisionMatrix;
