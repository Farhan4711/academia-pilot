'use client';
import React, { useState } from 'react';

const tools = [
    {
        name: 'Claude Code',
        layer: 'Agentic IDE',
        sweBench: '80.8% (Opus 4.6)',
        context: '1M tokens',
        agentMode: '16+ parallel agents',
        freeTier: false,
        paidFrom: '$20/mo',
        bestFor: 'Large codebase deep analysis',
        highlight: true,
    },
    {
        name: 'Cursor',
        layer: 'Agentic IDE',
        sweBench: '~77%',
        context: '120K (effective)',
        agentMode: '8 parallel agents',
        freeTier: true,
        paidFrom: '$20/mo',
        bestFor: 'Daily IDE coding, multi-model',
        highlight: true,
    },
    {
        name: 'Windsurf',
        layer: 'Agentic IDE',
        sweBench: 'Competitive',
        context: 'Fast Context (10×)',
        agentMode: 'Cascade + parallel',
        freeTier: true,
        paidFrom: '$15/mo',
        bestFor: 'Enterprise monorepos, JetBrains',
    },
    {
        name: 'GitHub Copilot',
        layer: 'Agentic Platform',
        sweBench: 'Model-based',
        context: 'Repository-indexed',
        agentMode: 'Agent HQ',
        freeTier: true,
        paidFrom: '$10/mo',
        bestFor: 'GitHub-native teams, governance',
    },
    {
        name: 'Replit',
        layer: 'Browser Builder',
        sweBench: 'N/A',
        context: 'Session-based',
        agentMode: 'Agent 3 (200 min)',
        freeTier: true,
        paidFrom: '$25/mo',
        bestFor: 'Mobile app MVPs, browser-native',
    },
    {
        name: 'Bolt.new',
        layer: 'Browser Builder',
        sweBench: 'N/A',
        context: 'Prompt-based',
        agentMode: 'Generative',
        freeTier: true,
        paidFrom: '$20/mo',
        bestFor: 'Framework-flexible web prototyping',
    },
    {
        name: 'Lovable',
        layer: 'Browser Builder',
        sweBench: 'N/A',
        context: 'Prompt-based',
        agentMode: 'Generative',
        freeTier: true,
        paidFrom: '$25/mo',
        bestFor: 'Highest UI quality React/Supabase',
    },
    {
        name: 'Codeium',
        layer: 'Code Completion',
        sweBench: 'N/A',
        context: 'Codebase-aware',
        agentMode: 'None',
        freeTier: true, // Unlimited free
        paidFrom: 'Free',
        bestFor: 'Free unlimited code completion',
    },
    {
        name: 'Codex',
        layer: 'Cloud Agent',
        sweBench: 'Validated',
        context: 'Repository-scoped',
        agentMode: 'Async cloud',
        freeTier: false,
        paidFrom: '$200/mo (Pro)',
        bestFor: 'Async PR task delegation',
    },
    {
        name: 'Devin',
        layer: 'Autonomous Agent',
        sweBench: 'Competitive',
        context: 'Task-scoped',
        agentMode: 'Fully autonomous',
        freeTier: false,
        paidFrom: '~$500/mo',
        bestFor: 'Fully delegated engineering tasks',
    },
    {
        name: 'Continue.dev',
        layer: 'Open Source',
        sweBench: 'Model-based',
        context: 'Indexed',
        agentMode: 'None',
        freeTier: true,
        paidFrom: 'Free',
        bestFor: 'Air-gapped & full-control local AI',
    },
    {
        name: 'Ollama',
        layer: 'Local Runtime',
        sweBench: 'Model-dependent',
        context: 'Model-dependent',
        agentMode: 'Via integrations',
        freeTier: true,
        paidFrom: 'Free',
        bestFor: 'Privacy-first local models (CLI)',
    },
    {
        name: 'LM Studio',
        layer: 'Local Runtime',
        sweBench: 'Model-dependent',
        context: 'Model-dependent',
        agentMode: 'Via integrations',
        freeTier: true,
        paidFrom: 'Free',
        bestFor: 'GUI-first local model management',
    },
];

export default function CodingToolComparisonMatrix() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(20,25,45,0.95) 0%, rgba(25,35,65,0.95) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px -10px rgba(0,0,0,0.5)',
            margin: 'var(--space-8) 0',
        }}>
            <div style={{
                padding: 'var(--space-6)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.03)',
            }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    <span style={{ fontSize: '22px' }}>💻</span>
                    AI Coding Tools — 2026 Master Decision Matrix
                </h3>
                <p style={{ margin: '6px 0 0', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                    14 leading AI coding tools evaluated by layer, benchmark, and agent architecture.
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                            {['Tool', 'Layer', 'SWE-bench', 'Context Window', 'Agent Mode', 'Free Tier', 'Paid From', 'Single Best Use Case'].map((h) => (
                                <th key={h} style={{
                                    padding: '12px 16px',
                                    textAlign: 'left',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(148,163,184,0.7)',
                                    whiteSpace: 'nowrap',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool, i) => (
                            <tr
                                key={tool.name}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    background: hovered === i
                                        ? 'rgba(56,189,248,0.08)'
                                        : tool.highlight
                                            ? 'rgba(56,189,248,0.04)'
                                            : 'transparent',
                                    transition: 'background 0.2s ease',
                                    cursor: 'default',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                }}
                            >
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                                    <div style={{ fontWeight: '600', color: 'var(--color-text-primary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {tool.highlight && (
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', display: 'inline-block', flexShrink: 0 }} />
                                        )}
                                        {tool.name}
                                    </div>
                                </td>
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        color: tool.layer.includes('Agentic') ? '#38bdf8' : tool.layer.includes('Builder') ? '#f472b6' : 'var(--color-text-secondary)',
                                        background: tool.layer.includes('Agentic') ? 'rgba(56,189,248,0.1)' : tool.layer.includes('Builder') ? 'rgba(244,114,182,0.1)' : 'rgba(255,255,255,0.05)',
                                        padding: '3px 8px',
                                        borderRadius: '6px',
                                        display: 'inline-block'
                                    }}>
                                        {tool.layer}
                                    </span>
                                </td>
                                <td style={{ padding: '14px 16px', fontSize: '13px', color: tool.sweBench.includes('80') ? '#34d399' : 'var(--color-text-secondary)', fontWeight: tool.sweBench.includes('80') ? '600' : 'normal' }}>
                                    {tool.sweBench}
                                </td>
                                <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>
                                    {tool.context}
                                </td>
                                <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                                    {tool.agentMode}
                                </td>
                                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                                    <span style={{
                                        color: tool.freeTier ? '#34d399' : '#ef4444',
                                        fontSize: '13px',
                                        fontWeight: 'bold'
                                    }}>
                                        {tool.freeTier ? '✓' : '✗'}
                                    </span>
                                </td>
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '600', color: '#a78bfa' }}>
                                    {tool.paidFrom}
                                </td>
                                <td style={{ padding: '14px 16px', fontSize: '12px', color: 'var(--color-text-secondary)', maxWidth: '200px' }}>
                                    {tool.bestFor}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{
                padding: '12px 16px',
                fontSize: '11px',
                color: 'var(--color-text-muted)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
            }}>
                ✓ = Free tier available &nbsp;|&nbsp; Updated: March 2026
            </div>
        </div>
    );
}
