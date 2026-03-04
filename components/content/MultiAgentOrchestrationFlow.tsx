'use client';
import React from 'react';

const steps = [
    {
        phase: '01',
        icon: '📝',
        title: 'Developer Input',
        desc: 'GitHub Issue, PR comment, or natural language task',
        color: '#64748b',
        glow: 'rgba(100,116,139,0.3)',
        items: ['GitHub Issue', 'PR Context', 'Natural Language'],
    },
    {
        phase: '02',
        icon: '🎯',
        title: 'Mission Control',
        desc: 'Plan Mode decomposes task → agent routing → parallel dispatch',
        color: '#7c3aed',
        glow: 'rgba(124,58,237,0.3)',
        items: ['Plan Mode (VS Code)', 'Agent Selection', 'Parallel Dispatch'],
    },
    {
        phase: '03',
        icon: '⚙️',
        title: 'Agent Execution',
        desc: 'Agents generate code → tests → lint → type-check → PR',
        color: '#2563eb',
        glow: 'rgba(37,99,235,0.3)',
        items: ['Branch Creation', 'Code Generation', 'Test Generation', 'PR with Narrative'],
    },
    {
        phase: '04',
        icon: '🔐',
        title: 'Control Plane',
        desc: 'Audit log, branch controls, code review, CodeQL scan',
        color: '#059669',
        glow: 'rgba(5,150,105,0.3)',
        items: ['actor_is_agent Audit', 'CI Gating', 'CodeQL Scan', 'Copilot Code Review'],
    },
    {
        phase: '05',
        icon: '✅',
        title: 'Human Review',
        desc: 'Engineer reviews PR → merge or request changes',
        color: '#d97706',
        glow: 'rgba(217,119,6,0.3)',
        items: ['PR Review', 'Approve / Reject', 'Merge to Main'],
    },
];

const agentRoles = [
    { agent: 'Claude', color: '#ea580c', icon: '🤖', tasks: ['Complex reasoning', 'Architecture review', 'Code review', 'Security analysis'] },
    { agent: 'Codex', color: '#4338ca', icon: '⚡', tasks: ['Rapid generation', 'Boilerplate', 'Refactoring', 'Speed tasks'] },
    { agent: 'Copilot', color: '#0e7490', icon: '🚀', tasks: ['Daily completions', 'PR descriptions', 'Familiar workflows', 'Code review'] },
];

export default function MultiAgentOrchestrationFlow() {
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
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: 6 }}>⚡ How It Works</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Multi-Agent Task Execution — End to End</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    From developer input to merged PR — every step governed, audited, and human-approved at critical checkpoints.
                </p>
            </div>

            {/* Flow steps */}
            <div style={{ padding: '28px 28px 0' }}>
                {steps.map((step, i) => (
                    <div key={step.phase}>
                        <div style={{
                            display: 'flex', gap: 16, alignItems: 'flex-start',
                            padding: '16px', borderRadius: 14,
                            background: `${step.color}08`, border: `1px solid ${step.color}25`,
                            position: 'relative', overflow: 'hidden',
                        }}>
                            {/* Glow accent */}
                            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${step.color}, transparent)` }} />
                            {/* Phase badge */}
                            <div style={{
                                flexShrink: 0, width: 44, height: 44, borderRadius: 12,
                                background: `linear-gradient(135deg, ${step.color}44, ${step.color}11)`,
                                border: `1px solid ${step.color}40`,
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <div style={{ fontSize: 18 }}>{step.icon}</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: 9, fontWeight: 800, color: step.color, background: `${step.color}20`, padding: '2px 7px', borderRadius: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Phase {step.phase}</span>
                                    <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text)' }}>{step.title}</span>
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '0 0 10px', lineHeight: 1.5 }}>{step.desc}</p>
                                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                    {step.items.map(item => (
                                        <span key={item} style={{
                                            fontSize: 10, fontWeight: 600, color: step.color,
                                            background: `${step.color}15`, border: `1px solid ${step.color}25`,
                                            padding: '2px 8px', borderRadius: 20,
                                        }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Connector */}
                        {i < steps.length - 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                    <div style={{ width: 1, height: 12, background: `linear-gradient(to bottom, ${step.color}, ${steps[i + 1].color})` }} />
                                    <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `6px solid ${steps[i + 1].color}80` }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Agent role grid */}
            <div style={{ padding: '24px 28px 0' }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Agent Specialization at Phase 02</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                    {agentRoles.map(a => (
                        <div key={a.agent} style={{
                            background: `${a.color}08`, border: `1px solid ${a.color}25`,
                            borderRadius: 12, padding: '14px 12px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                                <span style={{ fontSize: 18 }}>{a.icon}</span>
                                <span style={{ fontSize: 12, fontWeight: 800, color: a.color }}>{a.agent}</span>
                            </div>
                            {a.tasks.map(t => (
                                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
                                    <span style={{ fontSize: 10, color: 'var(--color-text-muted)' }}>{t}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Key insight */}
            <div style={{ margin: '24px 28px 28px', padding: '14px 18px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 12 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: '#60a5fa' }}>File-scope locking: </strong>
                    When agents run in parallel, Mission Control locks file scopes to prevent edit conflicts — fewer rebase cycles than DIY parallel agent scripts.
                </p>
            </div>
        </div>
    );
}
