'use client';
import React from 'react';

const steps = [
    { id: 'L', name: 'Locate', desc: 'Identify your starting mode.', icon: '📍' },
    { id: 'E', name: 'Explore', desc: 'Complete foundational tutorials.', icon: '🔍' },
    { id: 'A', name: 'Automate', desc: 'Build your first shared Skill.', icon: '⚡' },
    { id: 'R', name: 'Refine', desc: 'Add relevant industry tracks.', icon: '🎯' },
    { id: 'N', name: 'Network', desc: 'Connect Claude to your tools.', icon: '🔗' },
    { id: 'S', name: 'Scale', desc: 'Distribute to your whole team.', icon: '🚀' }
];

const LearnMethodFramework: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-12) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-black)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    The <span style={{ color: 'var(--color-accent)' }}>LEARN</span> Method
                </h3>
                <p className="text-secondary">A six-stage professional progression framework.</p>
            </div>

            <div className="flex flex-col gap-4">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-6 transition"
                        style={{
                            padding: 'var(--space-4) var(--space-6)',
                            backgroundColor: i === 0 ? 'rgba(77, 166, 255, 0.05)' : 'var(--color-surface)',
                            border: i === 0 ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 'var(--font-black)',
                                color: i === 0 ? 'var(--color-accent)' : 'var(--color-text-muted)',
                                width: '40px',
                                textAlign: 'center'
                            }}
                        >
                            {step.id}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div className="flex items-center gap-2">
                                <span style={{ fontSize: 'var(--text-lg)' }}>{step.icon}</span>
                                <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>{step.name}</h4>
                            </div>
                            <p className="text-secondary" style={{ margin: '2px 0 0', fontSize: 'var(--text-sm)' }}>
                                {step.desc}
                            </p>
                        </div>

                        {i < steps.length - 1 && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '42px',
                                    width: '2px',
                                    height: '16px',
                                    backgroundColor: 'var(--color-border)',
                                    zIndex: -1
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnMethodFramework;
