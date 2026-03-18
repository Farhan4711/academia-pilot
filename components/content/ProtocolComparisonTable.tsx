'use client';
import React from 'react';

type Row = { dimension: string; mcp: string; a2a: string; why: string; category: 'identity' | 'technical' | 'practical' };

const rows: Row[] = [
    { dimension: 'Created By', mcp: 'Anthropic (Nov 2024)', a2a: 'Google (Apr 2025)', why: 'Both are now Linux Foundation projects — neither company controls the spec alone.', category: 'identity' },
    { dimension: 'Purpose', mcp: 'Connects one agent to external tools & data', a2a: 'Connects multiple agents to each other', why: 'MCP = vertical (agent → tools). A2A = horizontal (agent ↔ agent). Different problems entirely.', category: 'identity' },
    { dimension: 'Best Analogy', mcp: 'JDBC / ODBC database drivers', a2a: 'HTTP for the internet', why: 'MCP standardizes how you talk to one tool. A2A standardizes how services discover and call each other.', category: 'identity' },
    { dimension: 'Message Format', mcp: 'JSON-RPC 2.0', a2a: 'JSON-RPC 2.0', why: 'Same base format — different schemas on top. This makes building bridges easier.', category: 'technical' },
    { dimension: 'Transport', mcp: 'stdio (local) or SSE/HTTP (remote)', a2a: 'HTTPS (always network-based)', why: 'MCP can run entirely on your machine. A2A always assumes network communication.', category: 'technical' },
    { dimension: 'Discovery', mcp: 'Agent sees tool schemas directly in context', a2a: 'Agent Card at /.well-known/agent.json', why: 'MCP exposes fine-grained tool details. A2A exposes only high-level capabilities — internal logic stays hidden.', category: 'technical' },
    { dimension: 'Authentication', mcp: 'OAuth 2.1 (still evolving in spec)', a2a: 'OAuth 2.0 (built in from day one)', why: 'A2A auth is more mature. For MCP, configure auth carefully — defaults can be permissive.', category: 'technical' },
    { dimension: 'Long Tasks', mcp: 'Not native — tends to be synchronous', a2a: 'Native async support for multi-step tasks', why: 'If your workflow takes more than a few seconds, A2A handles it better. MCP is for quick, discrete tool calls.', category: 'practical' },
    { dimension: 'When to Use', mcp: 'Any time an agent needs tools or data', a2a: 'When multiple specialized agents must hand off tasks', why: 'Start with MCP always. Only add A2A once you have agents that genuinely need to coordinate.', category: 'practical' },
    { dimension: '2026 Status', mcp: '97M monthly downloads. Industry standard.', a2a: '50+ enterprise partners. Growing fast.', why: 'MCP is broadly adopted in developer tools. A2A is in enterprise pilots — consumer tools coming 2026-27.', category: 'practical' },
];

const categoryStyle: Record<string, { color: string; bg: string; border: string }> = {
    identity: { color: '#a3a3a3', bg: 'rgba(163,163,163,0.08)', border: 'rgba(163,163,163,0.2)' },
    technical: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
    practical: { color: '#34d399', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
};

export default function ProtocolComparisonTable() {
    const card: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        margin: 'var(--space-10) 0',
        fontFamily: 'var(--font-sans)',
    };

    const colHead = (letter: string, label: string, color: string, gradient: string, glow: string) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 13, boxShadow: glow }}>{letter}</div>
            <span style={{ color, fontWeight: 700, fontSize: 14 }}>{label}</span>
        </div>
    );

    return (
        <div style={card}>
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(59,130,246,0.04) 100%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a5b4fc', marginBottom: 6 }}>📊 Deep Comparison</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>MCP vs A2A: 10-Dimension Practical Comparison</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>Every row includes a "Why It Matters" explanation — not just spec differences.</p>
            </div>

            {/* Column headers */}
            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', borderBottom: '1px solid var(--color-border)', backgroundColor: 'rgba(0,0,0,0.25)', padding: '12px 20px', gap: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Dimension</div>
                <div style={{ paddingLeft: 16, borderLeft: '1px solid var(--color-border)' }}>
                    {colHead('M', 'MCP', '#60a5fa', 'linear-gradient(135deg, #2563eb, #1d4ed8)', '0 3px 10px rgba(37,99,235,0.3)')}
                </div>
                <div style={{ paddingLeft: 16, borderLeft: '1px solid var(--color-border)' }}>
                    {colHead('A', 'A2A', '#a5b4fc', 'linear-gradient(135deg, #6366f1, #4338ca)', '0 3px 10px rgba(99,102,241,0.3)')}
                </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => {
                const cat = categoryStyle[row.category];
                return (
                    <div key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none', backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', padding: '14px 20px', gap: 0 }}>
                            {/* Dimension */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 12 }}>
                                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{row.dimension}</div>
                                <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', padding: '2px 8px', borderRadius: 20, background: cat.bg, color: cat.color, border: `1px solid ${cat.border}`, alignSelf: 'flex-start' }}>
                                    {row.category}
                                </span>
                            </div>
                            {/* MCP */}
                            <div style={{ padding: '0 16px', borderLeft: '1px solid var(--color-border)' }}>
                                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{row.mcp}</div>
                            </div>
                            {/* A2A */}
                            <div style={{ padding: '0 16px', borderLeft: '1px solid var(--color-border)' }}>
                                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{row.a2a}</div>
                            </div>
                        </div>
                        {/* Why it matters — spans full width */}
                        <div style={{ margin: '0 20px 14px', paddingLeft: 14, borderLeft: '2px solid #404040' }}>
                            <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#525252' }}>Why it matters: </span>
                            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{row.why}</span>
                        </div>
                    </div>
                );
            })}

            {/* Footer */}
            <div style={{ padding: '12px 28px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
                <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0 }}>
                    Both protocols governed by Linux Foundation's Agentic AI Foundation · Anthropic, Google, OpenAI, Microsoft are signatories
                </p>
            </div>
        </div>
    );
}
