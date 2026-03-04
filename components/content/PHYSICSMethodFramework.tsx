'use client';
import React from 'react';

const phases = [
    {
        letter: 'P', word: 'Prepare', icon: '📐', color: '#7c3aed',
        title: 'Position Capture Without Thrashing',
        rule: 'Batch ALL reads before ANY writes',
        detail: 'Call getBoundingClientRect() on every element first. Then do all style writes. Never interleave.',
        bad: 'el.getBoundingClientRect() then el.style.position = "fixed" — repeated per element',
        good: 'const rects = elements.map(el => el.getBoundingClientRect()); // then all writes',
    },
    {
        letter: 'H', word: 'Hook', icon: '🔗', color: '#2563eb',
        title: 'Boundary Wall Construction',
        rule: 'Always include the resize handler',
        detail: 'Create invisible static bodies at viewport edges. Rebuild them on resize — old walls must be removed or duplicates accumulate.',
        bad: 'walls.push(Bodies.rectangle(...)) on resize — old walls remain',
        good: 'walls.forEach(w => World.remove(world, w)); walls = createBoundaryWalls();',
    },
    {
        letter: 'Y', word: 'Initialize', icon: '⚙️', color: '#0e7490',
        title: 'Physics Bodies from DOM Elements',
        rule: 'Filter hidden elements — null references abort initialization',
        detail: 'Skip elements where offsetParent is null (hidden by extensions or CSS). Skip elements smaller than 4px. Wrap in try/catch.',
        bad: 'elements.forEach(el => createPhysicsBody(el)) — crashes on hidden elements',
        good: '.filter(el => el.offsetParent !== null && r.width > 4 && r.height > 4)',
    },
    {
        letter: 'S', word: 'Simulate', icon: '🔄', color: '#059669',
        title: 'The Render Loop',
        rule: 'Subtract half-dimensions from physics center position',
        detail: 'Physics tracks body center. CSS positions from top-left. Subtract halfW/halfH or every element is offset by exactly half its size.',
        bad: '`translate(${body.position.x}px, ${body.position.y}px)` — visual offset bug',
        good: '`translate(${x - halfW}px, ${y - halfH}px) rotate(${angle}rad)`',
    },
    {
        letter: 'I', word: 'Control', icon: '🎮', color: '#ea580c',
        title: 'Runtime Gravity Switching',
        rule: 'Gravity is a runtime value — change it any time, no reset needed',
        detail: 'engine.gravity.y and engine.gravity.x are mutable live values. DeviceMotion tilt, rotating gravity, and keyboard gravity all modify these directly.',
        bad: 'Recreating the physics world to change gravity direction',
        good: 'engine.gravity.y = -1; // takes effect on next physics step',
    },
    {
        letter: 'C', word: 'Secure', icon: '🔒', color: '#d97706',
        title: 'Production Safety Checklist',
        rule: 'prefers-reduced-motion is non-negotiable for production',
        detail: 'Check window.matchMedia("(prefers-reduced-motion: reduce)") before any init. Provide a keyboard-accessible reset button. Monitor FPS and degrade gracefully.',
        bad: 'Initializing physics unconditionally on all devices',
        good: 'if (!reduce.matches) initPhysics(); // skip for reduced-motion users',
    },
];

export default function PHYSICSMethodFramework() {
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
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>🎯 Implementation Framework</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>The PHYSICS Method</h3>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                    {phases.map(p => (
                        <span key={p.letter} style={{ fontSize: 13, fontWeight: 900, color: p.color, background: `${p.color}18`, padding: '3px 10px', borderRadius: 20 }}>{p.letter}</span>
                    ))}
                </div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    <strong>Prepare → Hook → Initialize → Simulate → Control → Secure</strong> — a complete deployment framework for DOM physics on any webpage.
                </p>
            </div>

            <div style={{ padding: '20px 28px 0' }}>
                {phases.map((p, i) => (
                    <div key={p.letter} style={{ marginBottom: i < phases.length - 1 ? 14 : 0 }}>
                        <div style={{
                            display: 'flex', gap: 14, padding: '16px',
                            background: `${p.color}08`, border: `1px solid ${p.color}22`, borderRadius: 14,
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 44 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)`, border: `1px solid ${p.color}40`,
                                    fontSize: 20,
                                }}>{p.icon}</div>
                                <div style={{ fontSize: 14, fontWeight: 900, color: p.color }}>{p.letter}</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text)' }}>{p.word}: {p.title}</span>
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '0 0 8px', lineHeight: 1.5 }}>{p.detail}</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                    <div style={{ background: 'rgba(239,68,68,0.06)', padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.2)' }}>
                                        <div style={{ fontSize: 9, fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>✗ Wrong</div>
                                        <code style={{ fontSize: 10, color: 'var(--color-text-muted)', fontFamily: 'monospace', lineHeight: 1.5, display: 'block', wordBreak: 'break-word' }}>{p.bad}</code>
                                    </div>
                                    <div style={{ background: 'rgba(16,185,129,0.06)', padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)' }}>
                                        <div style={{ fontSize: 9, fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>✓ Correct</div>
                                        <code style={{ fontSize: 10, color: 'var(--color-text-muted)', fontFamily: 'monospace', lineHeight: 1.5, display: 'block', wordBreak: 'break-word' }}>{p.good}</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ margin: '20px 28px 28px', padding: '12px 16px', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#a78bfa' }}>Rule of 60:</strong> Every phase has exactly one critical rule. Violating any one of the six rules produces a bug that no amount of debugging the other phases will fix.
                </p>
            </div>
        </div>
    );
}
