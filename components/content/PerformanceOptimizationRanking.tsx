'use client';
import React from 'react';

const optimizations = [
    { rank: '01', impact: 'Critical', pct: 100, color: '#ef4444', icon: '🚀', title: 'Use transform, never top/left', desc: '5–10× faster. CSS transform runs on GPU compositor thread — zero layout cost.', impl: "el.style.transform = `translate(${x}px, ${y}px)`", tag: 'GPU' },
    { rank: '02', impact: 'High', pct: 80, color: '#f97316', icon: '📦', title: 'Batch all reads before writes', desc: 'Collect ALL getBoundingClientRect() calls first, then do all style writes. Prevents layout thrashing.', impl: 'const rects = elements.map(el => el.getBoundingClientRect()); // then writes', tag: 'Reflow' },
    { rank: '03', impact: 'High', pct: 70, color: '#f59e0b', icon: '🎨', title: 'Add will-change: transform', desc: 'Tell the browser in advance which elements will animate — promotes them to their own GPU layer.', impl: "el.style.willChange = 'transform'; // set during init", tag: 'GPU' },
    { rank: '04', impact: 'High', pct: 65, color: '#eab308', icon: '😴', title: 'Enable body sleeping', desc: 'Resting bodies are excluded from physics simulation entirely — massive savings for settled scenes.', impl: "Engine.create({ enableSleeping: true })", tag: 'Physics' },
    { rank: '05', impact: 'High', pct: 60, color: '#84cc16', icon: '🔇', title: 'Pause when tab is hidden', desc: 'Stops simulation loop completely when user switches tabs. Saves CPU and battery.', impl: "document.addEventListener('visibilitychange', () => { running = !document.hidden; })", tag: 'CPU/Battery' },
    { rank: '06', impact: 'Medium', pct: 40, color: '#22c55e', icon: '🔍', title: 'Filter invisible elements', desc: 'Skip elements smaller than 4px or with offsetParent === null before creating physics bodies.', impl: '.filter(el => r.width > 4 && r.height > 4 && el.offsetParent !== null)', tag: 'Init' },
    { rank: '07', impact: 'Medium', pct: 35, color: '#10b981', icon: '🚦', title: 'Cap maximum velocity', desc: 'Prevents tunneling through walls and reduces collision computation at high speeds.', impl: "Events.on(engine, 'beforeUpdate', () => { if (body.speed > 20) Body.setSpeed(body, 20); })", tag: 'Stability' },
    { rank: '08', impact: 'Medium', pct: 28, color: '#06b6d4', icon: '📱', title: 'Reduce to 30fps on mobile', desc: 'Step physics every other requestAnimationFrame frame on mobile — halves CPU/battery cost.', impl: 'let tick = 0; if (++tick % 2 === 0) Engine.update(engine, 1000/30);', tag: 'Mobile' },
    { rank: '09', impact: 'Medium', pct: 20, color: '#3b82f6', icon: '🔢', title: 'Hard cap body count', desc: 'Cap at 80 physics bodies. Beyond that, quadratic collision detection cost dominates.', impl: 'const elements = [...querySelectorAll(sel)].slice(0, 80);', tag: 'Scale' },
    { rank: '10', impact: 'A11y', pct: 100, color: '#8b5cf6', icon: '♿', title: 'Respect prefers-reduced-motion', desc: 'Non-negotiable for production. Users with vestibular disorders can experience physical harm from physics animations.', impl: "const reduce = matchMedia('(prefers-reduced-motion: reduce)'); if (!reduce.matches) initPhysics();", tag: 'Accessibility' },
];

export default function PerformanceOptimizationRanking() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: 6 }}>⚡ Performance</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>10 Optimizations — Ranked by Verified Impact</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    Apply these in order. The top 3 alone remove 90% of performance problems in any DOM physics implementation.
                </p>
            </div>

            <div style={{ padding: '16px 28px 0' }}>
                {optimizations.map((opt, i) => (
                    <div key={opt.rank} style={{
                        display: 'flex', gap: 14, padding: '14px 0',
                        borderBottom: i < optimizations.length - 1 ? '1px solid var(--color-border)' : 'none',
                    }}>
                        {/* Rank + bar */}
                        <div style={{ flexShrink: 0, width: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                            <span style={{ fontSize: 18 }}>{opt.icon}</span>
                            <span style={{ fontSize: 11, fontWeight: 900, color: opt.color }}>#{opt.rank}</span>
                            <div style={{ width: 4, height: 40, borderRadius: 6, background: 'var(--color-border)', overflow: 'hidden' }}>
                                <div style={{ width: '100%', height: `${opt.pct}%`, background: opt.color, borderRadius: 6, marginTop: 'auto' }} />
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>{opt.title}</span>
                                <span style={{ fontSize: 9, fontWeight: 700, color: opt.color, background: `${opt.color}18`, padding: '1px 7px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{opt.impact}</span>
                                <span style={{ fontSize: 9, color: 'var(--color-text-muted)', background: 'var(--color-primary)', padding: '1px 6px', borderRadius: 20, border: '1px solid var(--color-border)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{opt.tag}</span>
                            </div>
                            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '0 0 6px', lineHeight: 1.5 }}>{opt.desc}</p>
                            <code style={{ fontSize: 10, color: opt.color, background: `${opt.color}10`, padding: '3px 8px', borderRadius: 6, fontFamily: 'monospace', border: `1px solid ${opt.color}20`, display: 'block', overflowX: 'auto', whiteSpace: 'pre', lineHeight: 1.6 }}>{opt.impl}</code>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ padding: '16px 28px 24px' }}>
                <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12 }}>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                        <strong style={{ color: '#f87171' }}>The single most impactful change anyone can make: </strong>
                        Replace <code style={{ fontSize: 11, padding: '1px 4px', background: 'var(--color-surface)', borderRadius: 4 }}>style.top/left</code> with <code style={{ fontSize: 11, padding: '1px 4px', background: 'var(--color-surface)', borderRadius: 4 }}>style.transform</code>. This one change eliminates browser freeze in virtually every old fork.
                    </p>
                </div>
            </div>
        </div>
    );
}
