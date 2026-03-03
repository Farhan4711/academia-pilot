'use client';

import React from 'react';

export default function ModelRotationStrategy() {
    const strategy = [
        {
            phase: 'Architecture + Spec Review',
            model: 'Gemini 3.1 Pro (High)',
            reason: 'Strongest reasoning and deepest context understanding.',
            icon: '🏗️',
            style: 'linear-gradient(135deg, rgba(66, 133, 244, 0.2) 0%, rgba(66, 133, 244, 0.05) 100%)',
            borderColor: 'rgba(66, 133, 244, 0.4)'
        },
        {
            phase: 'Component implementation',
            model: 'Claude Sonnet 4.6',
            reason: 'Consistent output, strong code generation speed.',
            icon: '🎨',
            style: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.05) 100%)',
            borderColor: 'rgba(217, 119, 6, 0.4)'
        },
        {
            phase: 'Testing + Bug fixing',
            model: 'Gemini 3 Flash',
            reason: 'Fastest for targeted tasks, conserves Pro quota.',
            icon: '⚡',
            style: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)',
            borderColor: 'rgba(16, 185, 129, 0.4)'
        },
        {
            phase: 'Final Review + Security',
            model: 'Claude Opus 4.6',
            reason: 'Ultimate quality gate for complex logic verification.',
            icon: '🛡️',
            style: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 100%)',
            borderColor: 'rgba(139, 92, 246, 0.4)'
        }
    ];

    return (
        <div style={{
            margin: 'var(--space-8) 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
        }}>
            {strategy.map((it, idx) => (
                <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: 'var(--space-4)',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    transition: 'transform 0.2s'
                }}>
                    <div style={{
                        width: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        background: it.style,
                        borderRight: `1px solid ${it.borderColor}`
                    }}>
                        {it.icon}
                    </div>

                    <div style={{ padding: 'var(--space-4)', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <h4 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 'bold' }}>{it.phase}</h4>
                            <span style={{
                                fontSize: '10px',
                                backgroundColor: 'var(--color-primary)',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-accent)'
                            }}>Step {idx + 1}</span>
                        </div>
                        <div style={{ fontSize: 'var(--text-lg)', color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '8px' }}>
                            {it.model}
                        </div>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                            {it.reason}
                        </p>
                    </div>
                </div>
            ))}

            <div style={{
                marginTop: 'var(--space-2)',
                padding: 'var(--space-4)',
                backgroundColor: 'rgba(66, 133, 244, 0.1)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                border: '1px dashed rgba(66, 133, 244, 0.3)'
            }}>
                <div style={{ fontSize: '20px' }}>💡</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
                    <strong>Pro Tip:</strong> This rotation extends your high-quality context budget across a full working day rather than exhausting Pro limits in the first two hours.
                </div>
            </div>
        </div>
    );
}
