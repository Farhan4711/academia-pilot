'use client';
import React from 'react';

const GroundFramework: React.FC = () => {
    const stages = [
        {
            letter: 'G',
            name: 'Guard',
            color: '#ef4444',
            desc: 'Security Hardening Audit. Lock down open Database rules (Firebase/Supabase), rotate exposed git credentials, and ensure AI agents are removed from production DBs.'
        },
        {
            letter: 'R',
            name: 'Refactor',
            color: '#f97316',
            desc: 'Eliminate Cumulative Refactor Deficit. Consolidate every duplicated function without adding any new features. Decide: Rewrite vs Fix.'
        },
        {
            letter: 'O',
            name: 'Own',
            color: '#eab308',
            desc: 'Build a mental model of generated code. Generate module dependency maps. Read security-critical paths line-by-line using AI to explain, not just generate.'
        },
        {
            letter: 'U',
            name: 'Underpin',
            color: '#84cc16',
            desc: 'Ensure test coverage is structurally sound. Generate boundary, null, and security-payload tests for Auth and DB access functions. General coverage % means nothing.'
        },
        {
            letter: 'N',
            name: 'Notify',
            color: '#0ea5e9',
            desc: 'Inject strict observability. Use Correlation IDs in structured logs to retrace unexpected vibe-coded operations. Alert on every new error type.'
        },
        {
            letter: 'D',
            name: 'Document',
            color: '#8b5cf6',
            desc: 'Log Architecture Decision Records (ADRs) and third-party AI-hallucinated dependencies into a rigorous Known-Limitations Register.'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            background: 'linear-gradient(to bottom, #0f172a, #020617)',
            padding: '48px 32px',
            borderRadius: '24px',
            margin: '48px 0',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ color: 'var(--color-text-primary)', fontSize: '28px', fontWeight: '800', margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
                    The GROUND Framework
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', margin: 0, maxWidth: '600px', marginInline: 'auto' }}>
                    A systematic six-stage methodology for hardening vibe-coded prototypes for production and mitigating the six-month wall.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
                {stages.map((stage, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        background: 'var(--color-surface)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.03)',
                        transition: 'transform 0.2s, background 0.2s',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.01)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.4)';
                        }}
                    >
                        <div style={{
                            width: '80px',
                            background: `linear-gradient(135deg, ${stage.color}ee, ${stage.color}88)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text-primary)',
                            fontSize: '36px',
                            fontWeight: '900',
                            flexShrink: 0
                        }}>
                            {stage.letter}
                        </div>
                        <div style={{ padding: '24px' }}>
                            <h4 style={{ color: stage.color, fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0' }}>
                                {stage.name}
                            </h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                                {stage.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroundFramework;
