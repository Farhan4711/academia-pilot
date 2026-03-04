'use client';
import React from 'react';

type Score = 'best' | 'good' | 'medium' | 'limited' | 'none';

interface Platform {
    name: string;
    icon: string;
    color: string;
    tag: string;
    tagColor: string;
    agentDepth: Score;
    repoAwareness: Score;
    automationScope: Score;
    governance: Score;
    idealFor: string;
}

const platforms: Platform[] = [
    {
        name: 'GitHub Agent HQ', icon: '🐙', color: '#7c3aed', tag: 'Enterprise Pick', tagColor: '#7c3aed',
        agentDepth: 'best', repoAwareness: 'best', automationScope: 'best', governance: 'best',
        idealFor: 'Enterprise multi-agent SDLC automation with governance',
    },
    {
        name: 'GitHub Copilot', icon: '🤖', color: '#2563eb', tag: 'Baseline', tagColor: '#2563eb',
        agentDepth: 'medium', repoAwareness: 'good', automationScope: 'medium', governance: 'good',
        idealFor: 'Individual developers — code completion and chat',
    },
    {
        name: 'Claude Code', icon: '🧠', color: '#ea580c', tag: 'Deep Reasoning', tagColor: '#ea580c',
        agentDepth: 'good', repoAwareness: 'best', automationScope: 'good', governance: 'limited',
        idealFor: 'Solo devs needing deep agentic coding and MCP integration',
    },
    {
        name: 'Cursor', icon: '⚡', color: '#0e7490', tag: 'IDE-Native', tagColor: '#0e7490',
        agentDepth: 'good', repoAwareness: 'good', automationScope: 'medium', governance: 'limited',
        idealFor: 'Daily coding and refactoring in an IDE-native experience',
    },
    {
        name: 'Windsurf', icon: '🌊', color: '#059669', tag: 'Parallel Capable', tagColor: '#059669',
        agentDepth: 'good', repoAwareness: 'good', automationScope: 'medium', governance: 'limited',
        idealFor: 'IDE-focused teams with multi-agent comparison needs',
    },
    {
        name: 'Devin (Cognition)', icon: '🤖', color: '#64748b', tag: 'Autonomous', tagColor: '#64748b',
        agentDepth: 'best', repoAwareness: 'good', automationScope: 'best', governance: 'medium',
        idealFor: 'Complex autonomous R&D and exploration tasks',
    },
    {
        name: 'Traditional CI/CD', icon: '🔧', color: '#374151', tag: 'Deterministic', tagColor: '#374151',
        agentDepth: 'none', repoAwareness: 'limited', automationScope: 'medium', governance: 'best',
        idealFor: 'Deterministic pipeline automation — no AI reasoning',
    },
];

function ScoreDot({ score }: { score: Score }) {
    const config: Record<Score, { fill: number; color: string; label: string }> = {
        best: { fill: 4, color: '#10b981', label: 'Best in class' },
        good: { fill: 3, color: '#3b82f6', label: 'Strong' },
        medium: { fill: 2, color: '#f59e0b', label: 'Moderate' },
        limited: { fill: 1, color: '#ef4444', label: 'Limited' },
        none: { fill: 0, color: '#6b7280', label: 'Not applicable' },
    };
    const c = config[score];
    return (
        <div style={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }} title={c.label}>
            {[1, 2, 3, 4].map(n => (
                <div key={n} style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: n <= c.fill ? c.color : 'var(--color-border)',
                    boxShadow: n <= c.fill ? `0 0 5px ${c.color}60` : 'none',
                }} />
            ))}
        </div>
    );
}

const dimensions = [
    { key: 'agentDepth', label: 'Agent Depth' },
    { key: 'repoAwareness', label: 'Repo Awareness' },
    { key: 'automationScope', label: 'Automation Scope' },
    { key: 'governance', label: 'Governance' },
];

export default function AgentHQCompetitorMatrix() {
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
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>📊 Competitive Analysis</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>GitHub Agent HQ vs The Field</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    Seven platforms across four enterprise decision-making dimensions. Dots = capability level (4 = best in class).
                </p>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '25%' }}>Platform</th>
                            {dimensions.map(d => (
                                <th key={d.key} style={{ padding: '12px 12px', textAlign: 'center', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>{d.label}</th>
                            ))}
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platforms.map((p, i) => (
                            <tr key={p.name} style={{
                                borderBottom: i < platforms.length - 1 ? '1px solid var(--color-border)' : 'none',
                                background: i === 0 ? `${p.color}08` : 'transparent',
                            }}>
                                <td style={{ padding: '14px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <span style={{ fontSize: 20 }}>{p.icon}</span>
                                        <div>
                                            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2 }}>{p.name}</div>
                                            <span style={{
                                                fontSize: 9, fontWeight: 700, color: p.tagColor,
                                                background: `${p.tagColor}18`, padding: '1px 6px', borderRadius: 10,
                                                textTransform: 'uppercase', letterSpacing: '0.05em',
                                            }}>{p.tag}</span>
                                        </div>
                                    </div>
                                </td>
                                {dimensions.map(d => (
                                    <td key={d.key} style={{ padding: '14px 12px', textAlign: 'center' }}>
                                        <ScoreDot score={p[d.key as keyof Platform] as Score} />
                                    </td>
                                ))}
                                <td style={{ padding: '14px 16px', fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.4, maxWidth: 200 }}>{p.idealFor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Legend + takeaway */}
            <div style={{ padding: '16px 28px', background: 'rgba(124,58,237,0.04)', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {[
                        { score: 'best' as Score, label: 'Best in class' },
                        { score: 'good' as Score, label: 'Strong' },
                        { score: 'medium' as Score, label: 'Moderate' },
                        { score: 'limited' as Score, label: 'Limited' },
                    ].map(item => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <ScoreDot score={item.score} />
                            <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{item.label}</span>
                        </div>
                    ))}
                </div>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: '#a78bfa' }}>Key insight:</strong> Agent HQ is the only platform with enterprise-grade governance <em>and</em> multi-agent depth simultaneously.
                </p>
            </div>
        </div>
    );
}
