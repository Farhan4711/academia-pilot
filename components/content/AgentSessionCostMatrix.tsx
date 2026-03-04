'use client';
import React from 'react';

const sessions = [
    {
        type: 'Simple Task',
        desc: 'Single agent',
        icon: '⚡',
        tokens: '10K – 40K',
        cost: '$0.05 – $0.40',
        use: 'Bug fixes, Documentation',
        tier: 'low',
        color: '#10b981',
        examples: ['Fix a typo in auth.ts', 'Add JSDoc comments', 'Update README'],
    },
    {
        type: 'Parallel Comparison',
        desc: '2 agents simultaneously',
        icon: '⚖️',
        tokens: '20K – 80K',
        cost: '$0.10 – $0.80',
        use: 'Architecture decisions',
        tier: 'medium',
        color: '#3b82f6',
        examples: ['Claude vs Codex on same feature', 'Compare implementation strategies', 'API design review'],
    },
    {
        type: 'Full Mission',
        desc: '3+ agents orchestrated',
        icon: '🚀',
        tokens: '50K – 200K+',
        cost: '$0.50 – $2.00+',
        use: 'Feature implementation',
        tier: 'high',
        color: '#f59e0b',
        examples: ['Full feature with tests', 'Multi-file refactor', 'New API endpoint + docs'],
    },
    {
        type: 'Enterprise Long-Running',
        desc: 'SDLC automation',
        icon: '🏛️',
        tokens: '200K – 1M',
        cost: '$2.00 – $10.00',
        use: 'Full SDLC automation',
        tier: 'enterprise',
        color: '#7c3aed',
        examples: ['Sprint automation pipeline', 'Cross-repo refactor', 'Full feature branch lifecycle'],
    },
];

const controls = [
    { icon: '📊', title: 'Max file change count', desc: 'Set per session in AGENTS.md — agent flagged if exceeded' },
    { icon: '🧪', title: 'Coverage delta requirement', desc: 'Session blocked if test coverage drops below threshold' },
    { icon: '🚦', title: 'Approval gates', desc: 'Require human OK before expensive sequential task chains' },
    { icon: '📋', title: 'Mission Control alerts', desc: 'Flags over-threshold sessions before PR is opened' },
];

const tierBar: Record<string, number> = { low: 25, medium: 50, high: 75, enterprise: 100 };

export default function AgentSessionCostMatrix() {
    const card: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        margin: 'var(--space-10) 0',
        fontFamily: 'var(--font-sans)',
    };

    return (
        <div style={card}>
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fbbf24', marginBottom: 6 }}>💰 Cost Analysis</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Agent Session Cost Matrix</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    Running multiple agents means multiple API calls and multiple token bills. Understand costs before you scale — then use the control mechanisms.
                </p>
            </div>

            {/* Session cards */}
            <div style={{ padding: '24px 28px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                {sessions.map(s => (
                    <div key={s.type} style={{
                        background: `${s.color}08`, border: `1px solid ${s.color}28`,
                        borderRadius: 14, padding: '16px', position: 'relative', overflow: 'hidden',
                    }}>
                        {/* Top accent */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ fontSize: 20 }}>{s.icon}</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-text)' }}>{s.type}</div>
                                    <div style={{ fontSize: 10, color: 'var(--color-text-muted)' }}>{s.desc}</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 14, fontWeight: 900, color: s.color }}>{s.cost}</div>
                                <div style={{ fontSize: 9, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>per session</div>
                            </div>
                        </div>

                        {/* Token bar */}
                        <div style={{ marginBottom: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--color-text-muted)', marginBottom: 4 }}>
                                <span>Token range</span>
                                <span style={{ fontWeight: 700, color: s.color }}>{s.tokens} tokens</span>
                            </div>
                            <div style={{ height: 4, borderRadius: 6, background: 'var(--color-border)', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${tierBar[s.tier]}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`, borderRadius: 6, transition: 'width 0.8s ease' }} />
                            </div>
                        </div>

                        <div style={{ fontSize: 10, fontWeight: 600, color: s.color, background: `${s.color}15`, padding: '3px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 10 }}>
                            ✓ {s.use}
                        </div>

                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {s.examples.map(ex => (
                                <span key={ex} style={{ fontSize: 9, color: 'var(--color-text-muted)', background: 'var(--color-primary)', padding: '2px 6px', borderRadius: 8, border: '1px solid var(--color-border)' }}>{ex}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Cost controls */}
            <div style={{ padding: '24px 28px 0' }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Cost Control Mechanisms</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                    {controls.map(c => (
                        <div key={c.title} style={{ display: 'flex', gap: 10, padding: '12px', background: 'var(--color-primary)', border: '1px solid var(--color-border)', borderRadius: 10 }}>
                            <span style={{ fontSize: 18, flexShrink: 0 }}>{c.icon}</span>
                            <div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2 }}>{c.title}</div>
                                <div style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{c.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Warning */}
            <div style={{ margin: '24px 28px 28px', padding: '14px 18px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 12 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: '#f87171' }}>⚠️ Real-world cost signal: </strong>
                    Early adopter quote — "My first Agent HQ workflow cost $8 in API fees." Set max-file-change-count limits in AGENTS.md and test with single-agent sessions before scaling to parallel missions.
                </p>
            </div>
        </div>
    );
}
