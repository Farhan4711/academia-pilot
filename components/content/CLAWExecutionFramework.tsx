'use client';
import React from 'react';

const CLAWExecutionFramework: React.FC = () => {
    const phases = [
        {
            label: 'C',
            name: 'Containerize',
            weeks: 'Week 1–2',
            desc: 'Ship working, secure, hosted instance with billing.',
            tasks: ['Docker Provisioning', 'Stripe Integration', 'Shared Auth'],
            color: '#38bdf8'
        },
        {
            label: 'L',
            name: 'Localize',
            weeks: 'Week 3–6',
            desc: 'Identify high-WTP vertical with weak competition.',
            tasks: ['Niche Selection', 'SOUL.md Templates', 'Specific Skills'],
            color: '#818cf8'
        },
        {
            label: 'A',
            name: 'Acquire',
            weeks: 'Week 4–10',
            desc: 'Reach $5K MRR through direct vertical acquisition.',
            tasks: ['Reddit/X Posts', 'ProductHunt', 'Cold Sequences'],
            color: '#6366f1'
        },
        {
            label: 'W',
            name: 'Widen',
            weeks: 'Month 3+',
            desc: 'Build moats before generic market commoditizes.',
            tasks: ['Proprietary Skills', 'SOC 2 Pipeline', 'User Community'],
            color: '#fbbf24'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '60px 0',
            padding: '40px',
            background: '#0f172a',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{ textAlign: 'center', color: '#f8fafc', fontSize: '24px', fontWeight: '800', marginBottom: '48px' }}>
                The CLAW Method: Wrapper Execution Framework
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', position: 'relative', marginBottom: '40px' }}>
                {/* Visual Connector */}
                <div style={{
                    position: 'absolute',
                    top: '30px',
                    left: '50px',
                    right: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #38bdf8, #818cf8, #6366f1, #fbbf24)',
                    opacity: 0.2,
                    zIndex: 0
                }} />

                {phases.map((phase, idx) => (
                    <div key={idx} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '18px',
                            background: 'rgba(255,255,255,0.03)',
                            border: `2px solid ${phase.color}`,
                            color: phase.color,
                            fontSize: '24px',
                            fontWeight: '900',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            boxShadow: `0 0 20px ${phase.color}20`
                        }}>
                            {phase.label}
                        </div>
                        <div style={{ color: '#f1f5f9', fontSize: '14px', fontWeight: '800', marginBottom: '4px' }}>{phase.name}</div>
                        <div style={{ color: phase.color, fontSize: '11px', fontWeight: '700' }}>{phase.weeks}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
                {phases.map((phase, idx) => (
                    <div key={idx} style={{
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '20px',
                        borderLeft: `4px solid ${phase.color}`,
                        display: 'flex',
                        gap: '32px',
                        alignItems: 'center'
                    }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>
                                Phase {idx + 1}: {phase.name}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.5' }}>
                                {phase.desc}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '300px' }}>
                            {phase.tasks.map(task => (
                                <span key={task} style={{
                                    fontSize: '11px',
                                    color: phase.color,
                                    background: `${phase.color}10`,
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    border: `1px solid ${phase.color}20`,
                                    fontWeight: '600'
                                }}>
                                    {task}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CLAWExecutionFramework;
