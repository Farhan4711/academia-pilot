'use client';
import React from 'react';

type Support = 'full' | 'limited' | 'mirror' | 'none';

interface BrowserEntry {
    name: string;
    icon: string;
    physics: Support;
    touch: Support;
    notes: string;
    color: string;
}

const browsers: BrowserEntry[] = [
    { name: 'Chrome 90+', icon: '🟢', physics: 'full', touch: 'limited', notes: 'Best overall — hardware acceleration, best rAF scheduling', color: '#10b981' },
    { name: 'Firefox 88+', icon: '🦊', physics: 'full', touch: 'limited', notes: 'SpiderMonkey slightly slower on intensive physics loops', color: '#f97316' },
    { name: 'Safari 14+', icon: '🧭', physics: 'full', touch: 'full', notes: 'ITP may block CDN-hosted physics libraries — self-host to avoid', color: '#3b82f6' },
    { name: 'Edge (Chromium)', icon: '🔵', physics: 'full', touch: 'limited', notes: 'Same V8 engine as Chrome — identical performance', color: '#0ea5e9' },
    { name: 'IE 11', icon: '💀', physics: 'none', touch: 'none', notes: 'No ES6, no CSS transforms API, no Pointer Events — completely broken', color: '#ef4444' },
    { name: 'Mobile Chrome (Android)', icon: '📱', physics: 'limited', touch: 'mirror', notes: 'Performance limited on mid-range devices — use elgoog.im mirror only', color: '#f59e0b' },
    { name: 'Mobile Safari (iOS)', icon: '🍎', physics: 'limited', touch: 'mirror', notes: 'DeviceMotion requires explicit permission via user gesture on iOS 13+', color: '#a78bfa' },
    { name: 'iframe embed', icon: '🖼️', physics: 'limited', touch: 'none', notes: 'Mouse coordinates require postMessage coordinate remapping — see Hack 9', color: '#64748b' },
];

function SupportBadge({ value }: { value: Support }) {
    const config: Record<Support, { label: string; color: string; bg: string }> = {
        full: { label: '✓ Full', color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
        limited: { label: '◑ Limited', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        mirror: { label: '⇢ Mirror', color: '#60a5fa', bg: 'rgba(96,165,250,0.12)' },
        none: { label: '✗ None', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
    };
    const c = config[value];
    return (
        <span style={{ fontSize: 10, fontWeight: 700, color: c.color, background: c.bg, padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap' }}>
            {c.label}
        </span>
    );
}

export default function BrowserCompatibilityMatrix() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#34d399', marginBottom: 6 }}>🌐 Compatibility</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Browser Compatibility Reference</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    Physics full = Matter.js runs at 60fps with hardware acceleration. Mirror = use elgoog.im for best experience.
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '25%' }}>Browser</th>
                            <th style={{ padding: '12px 12px', textAlign: 'center', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '15%' }}>Physics</th>
                            <th style={{ padding: '12px 12px', textAlign: 'center', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '15%' }}>Touch</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {browsers.map((b, i) => (
                            <tr key={b.name} style={{ borderBottom: i < browsers.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                <td style={{ padding: '12px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <span style={{ fontSize: 18 }}>{b.icon}</span>
                                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)' }}>{b.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '12px 12px', textAlign: 'center' }}><SupportBadge value={b.physics} /></td>
                                <td style={{ padding: '12px 12px', textAlign: 'center' }}><SupportBadge value={b.touch} /></td>
                                <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{b.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', background: 'rgba(16,185,129,0.04)', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                {(['full', 'limited', 'mirror', 'none'] as Support[]).map(s => (
                    <SupportBadge key={s} value={s} />
                ))}
                <span style={{ fontSize: 11, color: 'var(--color-text-muted)', marginLeft: 8 }}>Mirror = use elgoog.im for that environment</span>
            </div>
        </div>
    );
}
