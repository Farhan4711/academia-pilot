'use client';
import React from 'react';

const layers = [
    {
        num: '01', icon: '📄', title: 'HTML Snapshot', color: '#64748b',
        why: 'Live google.com blocks scripts via CSP — only static mirrors work',
        what: 'Self-contained HTML file with base64-inlined assets',
        detail: 'elgoog.im, mrdoob.com serve a frozen replica of Google\'s UI',
    },
    {
        num: '02', icon: '📐', title: 'DOM Position Capture', color: '#2563eb',
        why: 'Must capture positions before any CSS changes to prevent stale data',
        what: 'getBoundingClientRect() called on all target elements in one batch',
        detail: 'All reads MUST be batched together — interleaved reads/writes cause reflow',
    },
    {
        num: '03', icon: '⚙️', title: 'Physics World Init', color: '#7c3aed',
        why: 'A single gravity vector value determines the entire visual behavior',
        what: 'Box2D or Matter.js world created with gravity + boundary walls',
        detail: 'gravity.y = -1 (up), +1 (down), 0 (zero). Walls at viewport edges.',
    },
    {
        num: '04', icon: '✂️', title: 'DOM Detachment', color: '#ea580c',
        why: 'Elements must leave normal document flow to be positioned by physics',
        what: 'position: fixed, left: 0, top: 0, transform for placement',
        detail: 'After this step the layout engine no longer controls these elements',
    },
    {
        num: '05', icon: '🔄', title: 'Render Loop', color: '#059669',
        why: 'Physics position → CSS transform must happen 60× per second',
        what: 'requestAnimationFrame → Engine.update() → write transform to DOM',
        detail: 'Center-to-corner offset correction: subtract half-width/height from physics x/y',
    },
    {
        num: '06', icon: '🖱️', title: 'Input Handling', color: '#d97706',
        why: 'Mouse/touch interaction must become physics forces, not DOM events',
        what: 'Pointer events → mouse joint (spring constraint) → throw on release',
        detail: 'Use Pointer Events API (not mouse events) for mobile compatibility',
    },
];

export default function DOMPhysicsLayerDiagram() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: 6 }}>🏗️ Architecture</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>The Six-Layer DOM Physics Pipeline</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    Every failure mode in Google Antigravity traces back to one of these six layers — understanding the pipeline is the foundation for all debugging.
                </p>
            </div>

            <div style={{ padding: '20px 28px 0' }}>
                {layers.map((layer, i) => (
                    <div key={layer.num}>
                        <div style={{
                            display: 'flex', gap: 14,
                            padding: '14px 16px',
                            background: `${layer.color}08`,
                            border: `1px solid ${layer.color}22`,
                            borderRadius: 14,
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${layer.color}, ${layer.color}44)` }} />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0 }}>
                                <div style={{
                                    width: 40, height: 40, borderRadius: 12,
                                    background: `linear-gradient(135deg, ${layer.color}33, ${layer.color}11)`,
                                    border: `1px solid ${layer.color}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                                }}>{layer.icon}</div>
                                <span style={{ fontSize: 9, fontWeight: 800, color: layer.color, letterSpacing: '0.05em' }}>L{layer.num}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-text)', marginBottom: 4 }}>{layer.title}</div>
                                <p style={{ fontSize: 11, color: layer.color, fontWeight: 600, margin: '0 0 4px' }}>→ {layer.what}</p>
                                <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: '0 0 4px', lineHeight: 1.5 }}>{layer.detail}</p>
                                <div style={{ fontSize: 10, color: 'var(--color-text-muted)', background: 'var(--color-primary)', padding: '2px 8px', borderRadius: 8, display: 'inline-block', border: '1px solid var(--color-border)' }}>
                                    ⚠️ {layer.why}
                                </div>
                            </div>
                        </div>
                        {i < layers.length - 1 && (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 32, padding: '4px 0 4px 32px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                    <div style={{ width: 1, height: 10, background: `linear-gradient(to bottom, ${layer.color}60, ${layers[i + 1].color}60)` }} />
                                    <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `5px solid ${layers[i + 1].color}60` }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ margin: '20px 28px 28px', padding: '12px 16px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 12, textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#60a5fa' }}>Debugging rule:</strong> When the effect breaks, identify which layer failed first. 90% of issues are at Layer 1 (CSP), Layer 2 (race condition), or Layer 5 (transform vs top/left).
                </p>
            </div>
        </div>
    );
}
