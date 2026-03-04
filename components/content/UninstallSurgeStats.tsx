'use client';
import React from 'react';

const stats = [
    {
        icon: '📲', label: 'ChatGPT Uninstalls', value: '+295%', sub: 'vs. normal 9% daily rate',
        color: '#ef4444', bg: 'rgba(239,68,68,0.1)', barPct: 95,
    },
    {
        icon: '⭐', label: '1-Star Reviews', value: '+775%', sub: 'then doubled again on Sunday',
        color: '#f97316', bg: 'rgba(249,115,22,0.1)', barPct: 100,
    },
    {
        icon: '⬇️', label: 'ChatGPT Downloads', value: '-13%', sub: 'Saturday, then -5% Sunday',
        color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', barPct: 35,
    },
    {
        icon: '🚀', label: 'Claude Downloads', value: '+51%', sub: 'surpassed ChatGPT for first time',
        color: '#10b981', bg: 'rgba(16,185,129,0.1)', barPct: 65,
    },
    {
        icon: '🏆', label: 'Claude App Store', value: '#1 US', sub: '+20 ranks, also #1 in 6 countries',
        color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', barPct: 100,
    },
    {
        icon: '⭐', label: '5-Star Ratings (ChatGPT)', value: '-50%', sub: 'dropped by half same weekend',
        color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', barPct: 50,
    },
];

export default function UninstallSurgeStats() {
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
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: 6 }}>📈 By the Numbers</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>February 28, 2026 — The Data</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    Independently verified by Sensor Tower and Appfigures. Behavioral data, not sentiment data.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
                {stats.map((s, i) => (
                    <div key={s.label} style={{
                        padding: '20px 24px', position: 'relative', overflow: 'hidden',
                        borderBottom: i < 4 ? '1px solid var(--color-border)' : 'none',
                        borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                            <span style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</span>
                            <div>
                                <div style={{ fontSize: 28, fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)', marginTop: 4 }}>{s.label}</div>
                            </div>
                        </div>
                        <div style={{ height: 4, borderRadius: 4, background: 'var(--color-border)', overflow: 'hidden', marginBottom: 8 }}>
                            <div style={{ height: '100%', width: `${s.barPct}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`, borderRadius: 4 }} />
                        </div>
                        <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0 }}>{s.sub}</p>
                    </div>
                ))}
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', background: 'rgba(239,68,68,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    Source: <strong style={{ color: 'var(--color-text)' }}>Sensor Tower</strong> (uninstalls, downloads) · <strong style={{ color: 'var(--color-text)' }}>Appfigures</strong> (rankings, reviews)
                </p>
            </div>
        </div>
    );
}
