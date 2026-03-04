'use client';
import React from 'react';

const events = [
    {
        date: 'Feb 27',
        day: 'Friday',
        icon: '🛑',
        color: '#7c3aed',
        title: 'Anthropic Refuses Pentagon Deal',
        stats: [
            { label: 'Claude downloads', value: '+37%', trend: 'up' },
        ],
        detail: 'Anthropic publicly announces refusal of DoD deal, citing surveillance and autonomous weapons concerns.',
    },
    {
        date: 'Feb 28',
        day: 'Saturday',
        icon: '💥',
        color: '#ef4444',
        title: 'The Uninstall Event',
        stats: [
            { label: 'ChatGPT uninstalls', value: '+295%', trend: 'down' },
            { label: '1-star reviews', value: '+775%', trend: 'down' },
            { label: 'Claude downloads', value: '+51%', trend: 'up' },
            { label: 'Claude App Store', value: '#1 US', trend: 'up' },
        ],
        detail: 'OpenAI Pentagon deal becomes widely public. #CancelChatGPT and #QuitGPT trend globally. Claude hits #1 on the Apple App Store for the first time.',
    },
    {
        date: 'Mar 1',
        day: 'Sunday',
        icon: '📉',
        color: '#f97316',
        title: 'Sustained Decline',
        stats: [
            { label: 'ChatGPT downloads', value: '-5%', trend: 'down' },
            { label: '1-star reviews', value: '2× again', trend: 'down' },
        ],
        detail: 'ChatGPT downloads continue falling. 1-star reviews double for a second day. Claude maintains #1 position.',
    },
    {
        date: 'Mar 2',
        day: 'Monday',
        icon: '🔴',
        color: '#dc2626',
        title: 'Claude Goes Down',
        stats: [
            { label: 'Downdetector reports', value: '~2,000', trend: 'down' },
            { label: 'Web + Mobile + Code', value: 'Affected', trend: 'down' },
            { label: 'API', value: 'Operational', trend: 'up' },
        ],
        detail: 'Claude experiences global outage starting 11:49 UTC. Frontend auth systems overwhelmed by traffic surge. API remains operational. Altman posts damage control on X.',
    },
];

export default function MigrationEventTimeline() {
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
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: 6 }}>📊 Event Timeline</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>72 Hours That Redrew the AI Map</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>February 27 – March 2, 2026 — tracked in real time by Sensor Tower, Appfigures, and Downdetector.</p>
            </div>

            <div style={{ padding: '20px 28px 0' }}>
                {events.map((ev, i) => (
                    <div key={ev.date}>
                        <div style={{
                            display: 'flex', gap: 16, padding: '16px',
                            background: `${ev.color}08`, border: `1px solid ${ev.color}22`, borderRadius: 14,
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${ev.color}, ${ev.color}44)` }} />
                            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 50 }}>
                                <span style={{ fontSize: 24 }}>{ev.icon}</span>
                                <div style={{ fontSize: 14, fontWeight: 900, color: ev.color }}>{ev.date}</div>
                                <div style={{ fontSize: 9, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{ev.day}</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text)', marginBottom: 6 }}>{ev.title}</div>
                                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                                    {ev.stats.map(s => (
                                        <span key={s.label} style={{
                                            fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                                            color: s.trend === 'up' ? '#10b981' : '#ef4444',
                                            background: s.trend === 'up' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
                                            border: `1px solid ${s.trend === 'up' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
                                        }}>
                                            {s.value} {s.label}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>{ev.detail}</p>
                            </div>
                        </div>
                        {i < events.length - 1 && (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 40, padding: '4px 0 4px 40px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                    <div style={{ width: 1, height: 10, background: `linear-gradient(to bottom, ${ev.color}60, ${events[i + 1].color}60)` }} />
                                    <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `5px solid ${events[i + 1].color}60` }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ margin: '20px 28px 28px', padding: '12px 16px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#f87171' }}>First in AI history:</strong> A verified, large-scale user migration from one AI platform to another driven primarily by ethical concerns — not features or pricing.
                </p>
            </div>
        </div>
    );
}
