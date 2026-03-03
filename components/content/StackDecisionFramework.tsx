'use client';
import React from 'react';

const steps = [
    {
        letter: 'S', phase: 'Step 01', name: 'Survey', color: '#3b82f6', glow: 'rgba(59,130,246,0.3)', bg: 'rgba(59,130,246,0.1)',
        question: 'Are you building ONE agent or MANY agents?',
        choices: [
            { label: '🔵 Single Agent', desc: 'One AI that uses tools to complete tasks (e.g. coding assistant)', outcome: '→ Use MCP only. Stop here.' },
            { label: '🟣 Multi-Agent', desc: 'Several AI agents that hand off work to each other', outcome: '→ Continue through all 5 steps' },
        ],
        why: 'Most developers over-engineer. 80% of use cases only need MCP. Only add A2A when you genuinely have multiple specialized agents.',
    },
    {
        letter: 'T', phase: 'Step 02', name: 'Tool Layer', color: '#6366f1', glow: 'rgba(99,102,241,0.3)', bg: 'rgba(99,102,241,0.1)',
        question: 'Connect each agent to its tools via MCP first',
        actions: [
            'Install MCP servers for each service your agent needs (GitHub, Postgres, Slack)',
            'Configure your AI tool (Claude Code / Cursor) to use those servers',
            'Test: can your agent read a file? Query a DB? Post to Slack? — verify before adding A2A',
        ],
        why: 'An agent that can\'t use its own tools reliably cannot be a good participant in a multi-agent A2A network.',
    },
    {
        letter: 'A', phase: 'Step 03', name: 'Authenticate', color: '#7c3aed', glow: 'rgba(124,58,237,0.3)', bg: 'rgba(124,58,237,0.1)',
        question: 'Lock down access before opening agent boundaries',
        actions: [
            'MCP layer: set allowedDirectories and blockedCommands in your MCP server config',
            'A2A layer: implement OAuth 2.0 before any agent accepts external task requests',
            'Validate all outputs — treat every agent response as untrusted input',
        ],
        why: 'Security is 10× harder to add after the fact. Build auth in step 3, not step 7.',
    },
    {
        letter: 'C', phase: 'Step 04', name: 'Connect', color: '#e11d48', glow: 'rgba(225,29,72,0.3)', bg: 'rgba(225,29,72,0.1)',
        question: 'Publish Agent Cards so agents can discover each other',
        actions: [
            'Create /.well-known/agent.json describing each agent\'s capabilities',
            'Write capabilities in plain English — not tool function names',
            'Register each agent in a central Agent Registry',
        ],
        why: 'The Agent Card is a job description, not a technical spec. Other agents read it to decide who to hire for a sub-task.',
    },
    {
        letter: 'K', phase: 'Step 05', name: 'Coordinate', color: '#10b981', glow: 'rgba(16,185,129,0.3)', bg: 'rgba(16,185,129,0.1)',
        question: 'Build the Supervisor Agent that delegates via A2A',
        actions: [
            'Supervisor reads Agent Cards and picks the right specialist per task',
            'Delegate via A2A task requests with clear input/output schemas',
            'Log every delegation — a failed sub-agent should never silently break the pipeline',
        ],
        why: 'At 10+ agents, add an Agent Registry Service so the Supervisor doesn\'t hard-code routes.',
    },
];

export default function StackDecisionFramework() {
    return (
        <div style={{ margin: 'var(--space-10) 0', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', fontFamily: 'var(--font-sans)' }}>

            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(59,130,246,0.07), transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: 6 }}>🗺 Implementation Roadmap</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>The STACK Method — Do These 5 Steps In Order</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>A decision framework for adding MCP and A2A to your projects without over-engineering.</p>
            </div>

            {/* Steps */}
            {steps.map((step, i) => (
                <div key={i} style={{ padding: '24px 28px', borderBottom: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none', display: 'flex', gap: 20 }}>

                    {/* Letter badge */}
                    <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 22, boxShadow: `0 4px 16px ${step.glow}`, border: `1px solid rgba(255,255,255,0.15)` }}>
                        {step.letter}
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{step.phase} — {step.name}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text)', marginBottom: 14 }}>{step.question}</div>

                        {/* Decision tree (Step 1 only) */}
                        {step.choices && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                                {step.choices.map((c, j) => (
                                    <div key={j} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 14 }}>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 6 }}>{c.label}</div>
                                        <div style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: 8 }}>{c.desc}</div>
                                        <div style={{ fontSize: 12, fontWeight: 700, color: step.color }}>{c.outcome}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Action list */}
                        {step.actions && (
                            <div style={{ marginBottom: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {step.actions.map((act, j) => (
                                    <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                        <span style={{ color: step.color, fontWeight: 800, fontSize: 14, marginTop: 0, flexShrink: 0 }}>→</span>
                                        <span style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>{act}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Why box */}
                        <div style={{ background: step.bg, border: `1px solid ${step.color}33`, borderRadius: 10, padding: '10px 14px' }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Why This Order: </span>
                            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{step.why}</span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Footer */}
            <div style={{ padding: '14px 28px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)', margin: 0, fontStyle: 'italic' }}>
                    "Implement MCP for local mastery before attempting A2A for global coordination." — The Golden Rule
                </p>
            </div>
        </div>
    );
}
