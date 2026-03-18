'use client';
import React from 'react';

const MicrosoftSkillMethod: React.FC = () => {
    const steps = [
        {
            label: 'S',
            name: 'Sequence',
            desc: 'Identify your target credential BEFORE starting any course.',
            detail: 'Use the decision matrix to pick the right path.',
            color: '#38bdf8',
            icon: '🎯'
        },
        {
            label: 'K',
            name: 'Knowledge-Build',
            desc: 'Complete modules with active retention protocols.',
            detail: 'Quiz → Summarize → Type Code → Verify.',
            color: '#818cf8',
            icon: '📚'
        },
        {
            label: 'I',
            name: 'Integrate',
            desc: 'Apply learning to real projects during the week.',
            detail: 'Every course must produce a GitHub integration.',
            color: '#6366f1',
            icon: '🏗️'
        },
        {
            label: 'L',
            name: 'Launch',
            desc: 'Convert to a verified credential within 2 weeks.',
            detail: 'Focused 14-day exam preparation sprint.',
            color: '#8b5cf6',
            icon: '🚀'
        },
        {
            label: 'L',
            name: 'Lock-In',
            desc: 'Maintain renewals and expand your credential stack.',
            detail: 'Scale with AI-102 and specialized paths.',
            color: '#fbbf24',
            icon: '🔒'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '60px 0',
            padding: '40px',
            background: '#0f172a',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{ textAlign: 'center', color: '#f1f5f9', fontSize: '24px', fontWeight: '800', marginBottom: '40px' }}>
                The SKILL Method: Professional Execution Framework
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', position: 'relative' }}>
                {/* Connector Line */}
                <div style={{
                    position: 'absolute',
                    top: '25px',
                    left: '50px',
                    right: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #38bdf8, #fbbf24)',
                    opacity: 0.2,
                    zIndex: 0
                }} />

                {steps.map((step, idx) => (
                    <div key={idx} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#1e293b',
                            border: `2px solid ${step.color}`,
                            color: step.color,
                            fontSize: '20px',
                            fontWeight: '900',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            boxShadow: `0 0 20px ${step.color}30`
                        }}>
                            {step.label}
                        </div>
                        <div style={{ color: 'var(--color-text-primary)', fontSize: '14px', fontWeight: '800', marginBottom: '8px' }}>{step.name}</div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '40px', display: 'grid', gap: '16px' }}>
                {steps.map((step, idx) => (
                    <div key={idx} style={{
                        padding: '20px 24px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        borderLeft: `4px solid ${step.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px'
                    }}>
                        <div style={{ fontSize: '28px' }}>{step.icon}</div>
                        <div>
                            <div style={{ color: '#f1f5f9', fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>
                                Phase {idx + 1}: {step.name}
                            </div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: '1.5' }}>
                                {step.desc} <span style={{ color: step.color }}>{step.detail}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MicrosoftSkillMethod;
