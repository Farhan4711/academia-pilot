'use client';
import React from 'react';

type Status = 'investigating' | 'ongoing' | 'fix' | 'resolved' | 'repeat';

interface Incident {
    time: string;
    date: string;
    status: Status;
    message: string;
}

const incidents: Incident[] = [
    { time: '11:49', date: 'Mar 2', status: 'investigating', message: 'Elevated errors on claude.ai — investigating' },
    { time: '12:06', date: 'Mar 2', status: 'ongoing', message: 'Ongoing investigation, no resolution' },
    { time: '12:21', date: 'Mar 2', status: 'investigating', message: 'API operational; failure isolated to claude.ai and login/logout paths' },
    { time: '13:37', date: 'Mar 2', status: 'ongoing', message: 'Some API methods also found non-functional' },
    { time: '15:25', date: 'Mar 2', status: 'fix', message: 'Fix implemented, monitoring' },
    { time: '15:47', date: 'Mar 2', status: 'resolved', message: 'Incident resolved' },
    { time: '18:18', date: 'Mar 2', status: 'repeat', message: 'Repeat of the issue — re-investigating' },
    { time: '21:16', date: 'Mar 2', status: 'resolved', message: 'Second resolution' },
    { time: '03:15', date: 'Mar 3', status: 'repeat', message: 'New incident — claude.ai, Cowork, platform, Claude Code affected' },
    { time: '08:39', date: 'Mar 3', status: 'fix', message: 'Fix implemented and monitoring' },
    { time: '10:18', date: 'Mar 3', status: 'resolved', message: 'Resolved' },
    { time: '10:27', date: 'Mar 3', status: 'investigating', message: 'Elevated errors on Claude Opus 4.6 — fix implemented' },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
    investigating: { label: '🔍 Investigating', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
    ongoing: { label: '⏳ Ongoing', color: '#f97316', bg: 'rgba(249,115,22,0.12)' },
    fix: { label: '🔧 Fix Deployed', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
    resolved: { label: '✅ Resolved', color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
    repeat: { label: '🔴 Recurrence', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
};

export default function OutageIncidentTracker() {
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
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: 6 }}>🔴 Incident Timeline</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Claude Outage — March 2–3, 2026</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    From Anthropic&apos;s official status page. The outage recurred 3 times across 2 days before full resolution.
                </p>
            </div>

            <div style={{ padding: '16px 28px 0' }}>
                {incidents.map((inc, i) => {
                    const cfg = statusConfig[inc.status];
                    return (
                        <div key={`${inc.date}-${inc.time}`} style={{ display: 'flex', gap: 14, marginBottom: i < incidents.length - 1 ? 0 : 0 }}>
                            {/* Timeline line */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16, flexShrink: 0 }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: cfg.color, flexShrink: 0, marginTop: 5, border: `2px solid ${cfg.bg}` }} />
                                {i < incidents.length - 1 && (
                                    <div style={{ width: 1, flex: 1, background: 'var(--color-border)', minHeight: 24 }} />
                                )}
                            </div>
                            <div style={{ flex: 1, paddingBottom: i < incidents.length - 1 ? 8 : 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' }}>
                                    <code style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text)', fontFamily: 'monospace', background: 'var(--color-primary)', padding: '1px 6px', borderRadius: 4, border: '1px solid var(--color-border)' }}>
                                        {inc.date} · {inc.time} UTC
                                    </code>
                                    <span style={{ fontSize: 9, fontWeight: 700, color: cfg.color, background: cfg.bg, padding: '2px 8px', borderRadius: 20 }}>
                                        {cfg.label}
                                    </span>
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{inc.message}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                {(Object.keys(statusConfig) as Status[]).map(s => (
                    <span key={s} style={{ fontSize: 10, fontWeight: 700, color: statusConfig[s].color, background: statusConfig[s].bg, padding: '2px 8px', borderRadius: 20 }}>
                        {statusConfig[s].label}
                    </span>
                ))}
            </div>
        </div>
    );
}
