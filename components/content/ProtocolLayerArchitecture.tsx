'use client';
import React from 'react';

const layers = [
    {
        num: 'Layer 3',
        protocol: 'A2A Protocol',
        scope: 'Horizontal — Agent ↔ Agent',
        tagline: 'Who talks to whom?',
        color: '#6366f1',
        glow: 'rgba(99,102,241,0.25)',
        bg: 'rgba(99,102,241,0.08)',
        border: 'rgba(99,102,241,0.25)',
        icon: '🌐',
        description: 'A2A connects multiple AI agents so they can find each other and hand off work. It\'s the postal system of the agent world — you address a task to the right specialist agent, A2A routes it there.',
        examples: [
            'Supervisor Agent → Billing Agent',
            'Research Agent → Writing Agent',
            'Cross-company agent coordination',
        ],
        analogy: 'Like HTTP: you don\'t know what server code runs — you just send a request and get a response.',
    },
    {
        num: 'Layer 2',
        protocol: 'MCP Protocol',
        scope: 'Vertical — Agent → Tools',
        tagline: 'What can each agent use?',
        color: '#3b82f6',
        glow: 'rgba(59,130,246,0.25)',
        bg: 'rgba(59,130,246,0.08)',
        border: 'rgba(59,130,246,0.25)',
        icon: '🔧',
        description: 'MCP connects a single agent to its tools and data. It\'s the agent\'s "hands" — letting it read files, query databases, post to Slack, and call APIs through one standard interface rather than custom code.',
        examples: [
            'Claude Code → GitHub Repos',
            'Cursor → Postgres Database',
            'Antigravity → Local Filesystem',
        ],
        analogy: 'Like JDBC/ODBC: one standard driver interface that connects any app to any database.',
    },
    {
        num: 'Layer 1',
        protocol: 'LLM Infrastructure',
        scope: 'Physical — The Brain',
        tagline: 'The underlying intelligence',
        color: '#737373',
        glow: 'rgba(115,115,115,0.2)',
        bg: 'rgba(255,255,255,0.02)',
        border: 'rgba(115,115,115,0.2)',
        icon: '🧠',
        description: 'The foundational models (Claude, Gemini, GPT-4o) that process language and make decisions. MCP and A2A send instructions TO this layer — they serve it, not the other way around.',
        examples: ['Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'GPT-4o mini'],
        analogy: 'Like the CPU: protocols run above it, the model executes the actual intelligence.',
    },
];

export default function ProtocolLayerArchitecture() {
    return (
        <div style={{ margin: 'var(--space-10) 0', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', fontFamily: 'var(--font-sans)' }}>

            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a5b4fc', marginBottom: 6 }}>🏗 Architecture</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>MCP and A2A Are Different Layers, Not Competitors</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    Think of them like the networking model — each protocol solves a different problem at a different level. Most production systems need both.
                </p>
            </div>

            {/* Layers */}
            <div>
                {layers.map((layer, i) => (
                    <div key={i} style={{ padding: 28, borderBottom: i < layers.length - 1 ? '1px solid var(--color-border)' : 'none', display: 'flex', gap: 24, alignItems: 'flex-start', opacity: i === 2 ? 0.75 : 1 }}>

                        {/* Left — identity badge */}
                        <div style={{ flexShrink: 0, width: 160 }}>
                            <div style={{ background: layer.bg, border: `1px solid ${layer.border}`, borderRadius: 12, padding: '12px 14px', boxShadow: `0 0 20px ${layer.glow}` }}>
                                <div style={{ fontSize: 22, marginBottom: 6 }}>{layer.icon}</div>
                                <div style={{ fontSize: 10, fontWeight: 800, color: layer.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{layer.num}</div>
                                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text)', marginBottom: 4, lineHeight: 1.2 }}>{layer.protocol}</div>
                                <div style={{ fontSize: 10, color: layer.color, fontWeight: 700 }}>{layer.scope}</div>
                            </div>
                        </div>

                        {/* Right — explanation */}
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontStyle: 'italic', color: layer.color, fontWeight: 700, marginBottom: 10 }}>"{layer.tagline}"</div>
                            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 14 }}>{layer.description}</p>

                            {/* Real examples */}
                            <div style={{ marginBottom: 12 }}>
                                <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 8 }}>↳ Real Examples</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {layer.examples.map(ex => (
                                        <span key={ex} style={{ background: layer.bg, border: `1px solid ${layer.border}`, borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 600, color: layer.color }}>{ex}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Analogy */}
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${layer.color}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                                <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Analogy: </span>
                                <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{layer.analogy}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Golden rule footer */}
            <div style={{ padding: '14px 28px', background: 'rgba(37,99,235,0.06)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
                <p style={{ fontSize: 14, color: 'var(--color-text)', margin: 0, fontWeight: 600 }}>
                    ⚡ <span style={{ color: '#60a5fa' }}>Key Rule:</span> <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>Build each agent's MCP tool layer (Layer 2) BEFORE connecting agents via A2A (Layer 3). A weak agent on MCP is a weak participant on A2A.</span>
                </p>
            </div>
        </div>
    );
}
