'use client';
import React from 'react';

const layers = [
    {
        id: 'control',
        icon: '🏛️',
        label: 'Mission Control',
        sublabel: 'Unified Command Layer',
        color: '#7c3aed',
        glow: 'rgba(124,58,237,0.4)',
        bg: 'rgba(124,58,237,0.08)',
        border: 'rgba(124,58,237,0.3)',
        items: ['GitHub.com', 'VS Code', 'Mobile', 'CLI'],
        desc: 'Direct, monitor, and manage every AI-driven task from any device',
    },
    {
        id: 'execution',
        icon: '⚙️',
        label: 'Agent Execution Layer',
        sublabel: 'Where Agents Operate',
        color: '#2563eb',
        glow: 'rgba(37,99,235,0.4)',
        bg: 'rgba(37,99,235,0.08)',
        border: 'rgba(37,99,235,0.3)',
        items: ['Claude (Anthropic)', 'Codex (OpenAI)', 'Copilot', 'Custom Agents'],
        desc: 'Each agent runs with a least-privilege scoped GitHub token',
    },
    {
        id: 'governance',
        icon: '🔐',
        label: 'Control Plane',
        sublabel: 'Enterprise Governance Layer',
        color: '#059669',
        glow: 'rgba(5,150,105,0.4)',
        bg: 'rgba(5,150,105,0.08)',
        border: 'rgba(5,150,105,0.3)',
        items: ['Audit Logs', 'Branch Controls', 'Agent Allowlist', 'MCP Registry'],
        desc: 'Set security policies, manage access, obtain usage metrics',
    },
];

const agents = [
    { name: 'Claude', icon: '🤖', color: '#ea580c', desc: 'Architecture & reasoning' },
    { name: 'Codex', icon: '⚡', color: '#4338ca', desc: 'Speed & generation' },
    { name: 'Copilot', icon: '🚀', color: '#0e7490', desc: 'Daily coding & completions' },
    { name: 'Custom', icon: '🧩', color: '#6b7280', desc: 'Org-specific agents' },
];

export default function AgentHQArchitectureDiagram() {
    const card: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        margin: 'var(--space-10) 0',
        fontFamily: 'var(--font-sans)',
    };
    const header: React.CSSProperties = {
        padding: '20px 28px',
        borderBottom: '1px solid var(--color-border)',
        background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)',
    };

    return (
        <div style={card}>
            <div style={header}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>🏗️ Architecture</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>GitHub Agent HQ — Three-Layer Architecture</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    Agent HQ is not a feature — it is an orchestration architecture. Three distinct layers govern how agents operate on repositories.
                </p>
            </div>

            <div style={{ padding: '28px 28px 0' }}>
                {layers.map((layer, i) => (
                    <div key={layer.id}>
                        {/* Layer card */}
                        <div style={{
                            background: layer.bg,
                            border: `1px solid ${layer.border}`,
                            borderRadius: 14,
                            padding: '18px 20px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Accent bar */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${layer.color}, transparent)` }} />
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                                    background: `linear-gradient(135deg, ${layer.color}33, ${layer.color}11)`,
                                    border: `1px solid ${layer.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                                }}>
                                    {layer.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--color-text)' }}>{layer.label}</span>
                                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: layer.color, background: `${layer.color}22`, padding: '2px 8px', borderRadius: 20 }}>{layer.sublabel}</span>
                                    </div>
                                    <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '0 0 12px', lineHeight: 1.5 }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                        {layer.items.map(item => (
                                            <span key={item} style={{
                                                fontSize: 11, fontWeight: 600, color: layer.color,
                                                background: `${layer.color}18`, border: `1px solid ${layer.color}30`,
                                                padding: '3px 10px', borderRadius: 20,
                                            }}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Connector arrow */}
                        {i < layers.length - 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <div style={{ width: 1, height: 14, background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(37,99,235,0.5))' }} />
                                    <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid rgba(100,100,180,0.5)' }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Agent fleet row */}
            <div style={{ padding: '24px 28px 0' }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Live Agent Fleet</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                    {agents.map(a => (
                        <div key={a.name} style={{
                            background: `${a.color}10`, border: `1px solid ${a.color}30`,
                            borderRadius: 12, padding: '12px 10px', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: 22, marginBottom: 4 }}>{a.icon}</div>
                            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--color-text)', marginBottom: 2 }}>{a.name}</div>
                            <div style={{ fontSize: 10, color: 'var(--color-text-muted)', lineHeight: 1.3 }}>{a.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Takeaway */}
            <div style={{ margin: '24px 28px 28px', padding: '14px 18px', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, textAlign: 'center' }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: '#a78bfa' }}>The key insight: </strong>
                    Agent HQ doesn't replace GitHub — it adds an orchestration layer <em>above</em> Git, PR, and Actions. Agents interact with your existing primitives; the control plane governs how.
                </p>
            </div>
        </div>
    );
}
