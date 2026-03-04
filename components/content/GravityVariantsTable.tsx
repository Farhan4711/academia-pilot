'use client';
import React from 'react';

const variants = [
    {
        name: 'Google Anti-Gravity',
        year: '2009',
        icon: '⬆️',
        gravity: 'y: -1',
        desc: 'Elements float upward toward the screen top, drift and collide at the ceiling.',
        color: '#7c3aed',
        tag: 'Original by Mr. Doob',
        tagColor: '#7c3aed',
        feel: 'Floaty, dreamy',
        demo: ['Logo drifts up', 'Search bar hits ceiling', 'Mouse drag launches elements'],
    },
    {
        name: 'Google Gravity',
        year: '2009',
        icon: '⬇️',
        gravity: 'y: +1',
        desc: 'All elements collapse to the viewport floor, pile up in a heap, and respond to being thrown.',
        color: '#2563eb',
        tag: 'Most viral variant',
        tagColor: '#2563eb',
        feel: 'Satisfying, physical',
        demo: ['Logo smashes floor', 'Elements stack and pile', 'Throw them: they fly'],
    },
    {
        name: 'Google Space',
        year: '2011',
        icon: '🌌',
        gravity: 'x: 0, y: 0',
        desc: 'Zero gravity — elements drift weightlessly. Cursor emits a repulsion field pushing them away.',
        color: '#0e7490',
        tag: 'Zero gravity',
        tagColor: '#0e7490',
        feel: 'Meditative, weightless',
        demo: ['Elements drift freely', 'Cursor repels everything', 'Mouse magnet mode'],
    },
    {
        name: 'Google Gravity Lava',
        year: '2012',
        icon: '🌋',
        gravity: 'y: +1',
        desc: 'Elements fall downward, but on collision they visually "melt" — special shader applied on impact.',
        color: '#ea580c',
        tag: 'Visual variant',
        tagColor: '#ea580c',
        feel: 'Dramatic, destructive',
        demo: ['Elements fall normally', 'Collision = melt effect', 'Pool of lava forms'],
    },
];

export default function GravityVariantsTable() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>🌍 Variant Guide</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>The Four Gravity Variants — One Architecture, Four Behaviors</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    All four share identical code. The only difference is a single vector value in the physics engine.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
                {variants.map((v, i) => (
                    <div key={v.name} style={{
                        padding: '20px 24px',
                        borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                        borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${v.color}, transparent)` }} />
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                            <span style={{ fontSize: 28, flexShrink: 0 }}>{v.icon}</span>
                            <div>
                                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text)', marginBottom: 3 }}>{v.name}</div>
                                <span style={{ fontSize: 9, fontWeight: 700, color: v.tagColor, background: `${v.tagColor}18`, padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{v.tag}</span>
                            </div>
                        </div>
                        <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 12 }}>{v.desc}</p>
                        <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
                            <code style={{ fontSize: 10, fontWeight: 700, color: v.color, background: `${v.color}15`, padding: '3px 10px', borderRadius: 20, fontFamily: 'monospace', border: `1px solid ${v.color}30` }}>
                                engine.gravity.{v.gravity}
                            </code>
                        </div>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {v.demo.map(d => (
                                <span key={d} style={{ fontSize: 10, color: 'var(--color-text-muted)', background: 'var(--color-primary)', padding: '2px 7px', borderRadius: 8, border: '1px solid var(--color-border)' }}>{d}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', background: 'rgba(124,58,237,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#a78bfa' }}>The key insight:</strong> Change <code style={{ fontSize: 12, padding: '1px 5px', background: 'var(--color-surface)', borderRadius: 4 }}>engine.gravity.y</code> from <code style={{ fontSize: 12, padding: '1px 5px', background: 'var(--color-surface)', borderRadius: 4 }}>-1</code> to <code style={{ fontSize: 12, padding: '1px 5px', background: 'var(--color-surface)', borderRadius: 4 }}>+1</code> and the entire visual experience inverts.
                </p>
            </div>
        </div>
    );
}
