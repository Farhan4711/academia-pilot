'use client';
import React from 'react';

const milestones = [
    { date: 'Nov 2024', event: 'Anthropic open-sources MCP', note: 'Starting at ~100K monthly downloads', highlight: false },
    { date: 'Jan 2025', event: 'GitHub, Slack, Postgres official servers ship', note: 'Developer adoption begins', highlight: false },
    { date: 'Mar 2025', event: 'OpenAI adopts MCP', note: 'Assistants API deprecation announced', highlight: true },
    { date: 'May 2025', event: 'VS Code adds native MCP support', note: 'GitHub Copilot integration', highlight: false },
    { date: 'Dec 2025', event: '97M monthly SDK downloads', note: 'Linux Foundation takes governance', highlight: true },
];

const partners = ['Salesforce', 'SAP', 'Accenture', 'ServiceNow', 'MongoDB', 'Box', 'LangChain'];

export default function ProtocolAdoptionStats() {
    const cardBase: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        fontFamily: 'var(--font-sans)',
    };
    return (
        <div style={{ margin: 'var(--space-10) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontFamily: 'var(--font-sans)' }}>

            {/* MCP Card */}
            <div style={cardBase}>
                {/* Header */}
                <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, transparent 70%)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 16, boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>M</div>
                    <div>
                        <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: 16 }}>MCP Timeline</div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: 11 }}>Nov 2024 → Dec 2025</div>
                    </div>
                </div>

                {/* Stat */}
                <div style={{ margin: 20, background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 12, padding: '16px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15), transparent 60%)' }} />
                    <div style={{ fontSize: 46, fontWeight: 900, color: 'var(--color-text)', lineHeight: 1, position: 'relative' }}>97M</div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, position: 'relative' }}>Monthly SDK Downloads</div>
                    <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 6, position: 'relative' }}>970× growth in 13 months</div>
                </div>

                {/* Milestones */}
                <div style={{ padding: '0 20px 20px' }}>
                    {milestones.map((m, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: 12, alignItems: 'flex-start',
                            padding: '10px 12px', marginBottom: 6,
                            borderRadius: 10,
                            background: m.highlight ? 'rgba(37,99,235,0.08)' : 'rgba(255,255,255,0.02)',
                            border: m.highlight ? '1px solid rgba(37,99,235,0.2)' : '1px solid transparent',
                        }}>
                            <div style={{ minWidth: 70, fontSize: 10, fontWeight: 700, color: '#60a5fa', paddingTop: 1 }}>{m.date}</div>
                            <div>
                                <div style={{ fontSize: 12, fontWeight: m.highlight ? 700 : 500, color: 'var(--color-text)' }}>{m.event}</div>
                                <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 2 }}>{m.note}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ padding: '12px 22px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--color-border)', textAlign: 'center', fontSize: 11, color: 'var(--color-text-muted)' }}>
                    10,000+ community servers · SDKs in Python, TypeScript, Java, C#, Swift
                </div>
            </div>

            {/* A2A Card */}
            <div style={cardBase}>
                {/* Header */}
                <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, transparent 70%)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6366f1, #4338ca)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 16, boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}>A</div>
                    <div>
                        <div style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: 16 }}>A2A Adoption</div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: 11 }}>Apr 2025 → Present</div>
                    </div>
                </div>

                {/* Stat */}
                <div style={{ margin: 20, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 12, padding: '16px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15), transparent 60%)' }} />
                    <div style={{ fontSize: 46, fontWeight: 900, color: 'var(--color-text)', lineHeight: 1, position: 'relative' }}>50+</div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#a5b4fc', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, position: 'relative' }}>Enterprise Partners at Launch</div>
                    <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 6, position: 'relative' }}>Fortune 500 pilots already live in 2026</div>
                </div>

                {/* Plain English Box */}
                <div style={{ margin: '0 20px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>💡 What A2A Actually Does</div>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                        A2A lets a <strong style={{ color: 'var(--color-text)' }}>Supervisor Agent</strong> at company A discover and delegate tasks to a <strong style={{ color: 'var(--color-text)' }}>Specialist Agent</strong> at company B — without either exposing internal code. Like hiring a contractor: you specify the job, they deliver, the internal process stays private.
                    </p>
                </div>

                {/* Partner tags */}
                <div style={{ padding: '0 20px 20px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Launch Partners Include</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {partners.map(p => (
                            <span key={p} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 8, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: '#a5b4fc' }}>{p}</span>
                        ))}
                        <span style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '5px 12px', fontSize: 12, color: 'var(--color-text-muted)' }}>+43 more</span>
                    </div>
                </div>

                <div style={{ padding: '12px 22px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--color-border)', textAlign: 'center', fontSize: 11, color: 'var(--color-text-muted)' }}>
                    Both MCP and A2A governed by the Linux Foundation (Agentic AI Foundation)
                </div>
            </div>
        </div>
    );
}
