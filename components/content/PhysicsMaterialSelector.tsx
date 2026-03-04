'use client';
import React, { useState } from 'react';

const materials = [
    { name: 'Rubber', icon: '🔴', restitution: 0.9, friction: 0.8, frictionAir: 0.01, density: 0.002, feel: 'Bouncy, grippy', color: '#ef4444', desc: 'High elasticity, sticks to surfaces, bounces vigorously on impact.' },
    { name: 'Steel', icon: '⚙️', restitution: 0.1, friction: 0.3, frictionAir: 0.001, density: 0.008, feel: 'Heavy, minimal bounce', color: '#6b7280', desc: 'Dense and stiff. Barely bounces, slides with moderate friction, fastest freefall.' },
    { name: 'Feather', icon: '🪶', restitution: 0.3, friction: 0.1, frictionAir: 0.1, density: 0.0001, feel: 'Light, floats to rest', color: '#f59e0b', desc: 'Very high air resistance — drifts slowly, comes to rest gently, barely affected by collisions.' },
    { name: 'Ice', icon: '🧊', restitution: 0.05, friction: 0.005, frictionAir: 0.005, density: 0.003, feel: 'Slides, barely bounces', color: '#60a5fa', desc: 'Nearly frictionless surface. Elements slide unpredictably on impact without gripping.' },
    { name: 'Jelly', icon: '🟡', restitution: 0.7, friction: 0.5, frictionAir: 0.04, density: 0.001, feel: 'Wobbles, medium bounce', color: '#d97706', desc: 'Moderate everything — a balanced "playful" feel used in most interactive demos.' },
];

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
    const pct = Math.round((value / max) * 100);
    return (
        <div style={{ height: 6, borderRadius: 6, background: 'var(--color-border)', overflow: 'hidden', flex: 1 }}>
            <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}88)`, borderRadius: 6, transition: 'width 0.4s ease' }} />
        </div>
    );
}

export default function PhysicsMaterialSelector() {
    const [active, setActive] = useState(0);
    const m = materials[active];

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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(217,119,6,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fbbf24', marginBottom: 6 }}>🧪 Physics Materials</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Interactive Material Reference</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>Click a material to explore its properties and the exact Matter.js values that create that feel.</p>
            </div>

            {/* Material selector */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', overflowX: 'auto' }}>
                {materials.map((mat, i) => (
                    <button key={mat.name} onClick={() => setActive(i)} style={{
                        flex: 1, minWidth: 90, padding: '12px 8px', border: 'none', cursor: 'pointer',
                        background: active === i ? `${mat.color}15` : 'transparent',
                        borderBottom: active === i ? `2px solid ${mat.color}` : '2px solid transparent',
                        color: active === i ? mat.color : 'var(--color-text-muted)',
                        fontFamily: 'var(--font-sans)', fontWeight: active === i ? 700 : 500,
                        fontSize: 12, transition: 'all 0.2s',
                    }}>
                        <div style={{ fontSize: 20, marginBottom: 4 }}>{mat.icon}</div>
                        {mat.name}
                    </button>
                ))}
            </div>

            {/* Detail panel */}
            <div style={{ padding: '24px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span style={{ fontSize: 32 }}>{m.icon}</span>
                        <div>
                            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text)' }}>{m.name}</div>
                            <div style={{ fontSize: 11, color: m.color, fontWeight: 600 }}>{m.feel}</div>
                        </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
                <div>
                    {[
                        { label: 'Restitution (bounciness)', val: m.restitution, max: 1 },
                        { label: 'Friction', val: m.friction, max: 1 },
                        { label: 'Air Resistance', val: m.frictionAir * 10, max: 1 },
                        { label: 'Density', val: Math.min(m.density * 200, 1), max: 1 },
                    ].map(p => (
                        <div key={p.label} style={{ marginBottom: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 11, color: 'var(--color-text-muted)' }}>
                                <span>{p.label}</span>
                                <span style={{ fontWeight: 700, color: m.color }}>{p.val.toFixed(2)}</span>
                            </div>
                            <Bar value={p.val} max={p.max} color={m.color} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Code snippet */}
            <div style={{ margin: '0 28px 24px', background: 'rgba(0,0,0,0.25)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ padding: '6px 14px', borderBottom: '1px solid var(--color-border)', fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.08em' }}>MATTER.JS</div>
                <pre style={{ margin: 0, padding: '14px', fontSize: 11, fontFamily: 'monospace', lineHeight: 1.7, color: 'var(--color-text-muted)', overflowX: 'auto' }}>
                    {`Bodies.rectangle(x, y, w, h, {\n  restitution: ${m.restitution},\n  friction:    ${m.friction},\n  frictionAir: ${m.frictionAir},\n  density:     ${m.density}\n});`}
                </pre>
            </div>
        </div>
    );
}
