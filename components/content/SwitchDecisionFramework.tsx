'use client';
import React from 'react';

const switchReasons = [
    { icon: '🛡️', title: 'Ethics alignment matters', detail: 'Anthropic refused the Pentagon deal. Constitutional AI framework. Safety research investments.', tag: 'Values' },
    { icon: '📄', title: 'Long document workflows', detail: '200K context (up to 1M Max) vs 128K. Codebases, PDFs, multi-document analysis.', tag: 'Productivity' },
    { icon: '💻', title: 'Developer API focus', detail: 'Claude Code, CLAUDE.md config, MCP ecosystem. API stayed operational during outage.', tag: 'Developer' },
    { icon: '🏢', title: 'Enterprise AI governance', detail: 'Constitutional AI approach. Structured safety frameworks. Explicit military use limits.', tag: 'Compliance' },
];

const stayReasons = [
    { icon: '🎨', title: 'Image generation required', detail: 'DALL-E 3 is native and mature. Claude has no equivalent built-in image generation.', tag: 'Creative' },
    { icon: '🎙️', title: 'Voice mode is critical', detail: 'ChatGPT Advanced Voice Mode is more developed with a larger ecosystem.', tag: 'Voice' },
    { icon: '🔌', title: 'Deep ecosystem investment', detail: 'Custom GPTs, Assistants API, Plugin marketplace — real migration cost.', tag: 'Ecosystem' },
    { icon: '⏱️', title: 'Reliability is top priority', detail: 'ChatGPT infrastructure is more mature. Claude March outage is a data point.', tag: 'Uptime' },
];

export default function SwitchDecisionFramework() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(16,185,129,0.06) 100%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>🧭 Decision Framework</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Should You Switch from ChatGPT to Claude?</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
                    Not every user&apos;s needs are the same. The ethics question is real — but not the only variable.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {/* Switch to Claude column */}
                <div style={{ borderRight: '1px solid var(--color-border)' }}>
                    <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--color-border)', background: 'rgba(124,58,237,0.06)' }}>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 6 }}>
                            🟣 Switch to Claude if…
                        </div>
                    </div>
                    {switchReasons.map((r, i) => (
                        <div key={r.title} style={{
                            padding: '14px 20px',
                            borderBottom: i < switchReasons.length - 1 ? '1px solid var(--color-border)' : 'none',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                <span style={{ fontSize: 18 }}>{r.icon}</span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)' }}>{r.title}</span>
                                <span style={{ fontSize: 9, fontWeight: 700, color: '#7c3aed', background: 'rgba(124,58,237,0.12)', padding: '1px 6px', borderRadius: 20, marginLeft: 'auto' }}>{r.tag}</span>
                            </div>
                            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5, paddingLeft: 32 }}>{r.detail}</p>
                        </div>
                    ))}
                </div>

                {/* Stay with ChatGPT column */}
                <div>
                    <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--color-border)', background: 'rgba(16,185,129,0.06)' }}>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: 6 }}>
                            🟢 Stay with ChatGPT if…
                        </div>
                    </div>
                    {stayReasons.map((r, i) => (
                        <div key={r.title} style={{
                            padding: '14px 20px',
                            borderBottom: i < stayReasons.length - 1 ? '1px solid var(--color-border)' : 'none',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                <span style={{ fontSize: 18 }}>{r.icon}</span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)' }}>{r.title}</span>
                                <span style={{ fontSize: 9, fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.12)', padding: '1px 6px', borderRadius: 20, marginLeft: 'auto' }}>{r.tag}</span>
                            </div>
                            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5, paddingLeft: 32 }}>{r.detail}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', background: 'rgba(124,58,237,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#a78bfa' }}>Recommendation:</strong> Maintain access to both platforms. The multi-platform era has arrived — picking a winner is less important than having fallback options.
                </p>
            </div>
        </div>
    );
}
