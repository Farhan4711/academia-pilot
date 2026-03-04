'use client';
import React, { useState } from 'react';

const tools = [
    {
        name: 'ChatGPT',
        company: 'OpenAI',
        bestFor: 'General professionals, broad use',
        context: '128K (GPT-5)',
        multimodal: true,
        freeTier: true,
        startPrice: '$20/mo',
        api: true,
        openSource: false,
        highlight: true,
    },
    {
        name: 'Claude',
        company: 'Anthropic',
        bestFor: 'Long docs, precise writing, coding',
        context: '200K+',
        multimodal: true,
        freeTier: true,
        startPrice: '$20/mo',
        api: true,
        openSource: false,
    },
    {
        name: 'Gemini',
        company: 'Google DeepMind',
        bestFor: 'Google Workspace, large video/audio',
        context: '2M (Pro)',
        multimodal: true,
        freeTier: true,
        startPrice: '$20/mo',
        api: true,
        openSource: false,
    },
    {
        name: 'Grok',
        company: 'xAI',
        bestFor: 'Real-time X data, reasoning',
        context: '256K',
        multimodal: true,
        freeTier: true,
        startPrice: '$8/mo',
        api: true,
        openSource: false,
    },
    {
        name: 'Microsoft Copilot',
        company: 'Microsoft',
        bestFor: 'Microsoft 365 enterprise users',
        context: '128K',
        multimodal: true,
        freeTier: false,
        startPrice: '$30/user/mo',
        api: true,
        openSource: false,
    },
    {
        name: 'Perplexity',
        company: 'Perplexity AI',
        bestFor: 'Research, cited answers',
        context: '32K',
        multimodal: false,
        freeTier: true,
        startPrice: '$20/mo',
        api: true,
        openSource: false,
    },
    {
        name: 'Meta AI / Llama',
        company: 'Meta',
        bestFor: 'Open-source, social apps, local',
        context: '10M (Scout)',
        multimodal: true,
        freeTier: true,
        startPrice: 'Free',
        api: true,
        openSource: true,
    },
    {
        name: 'DeepSeek',
        company: 'DeepSeek AI',
        bestFor: 'Low-cost API, coding, reasoning',
        context: '128K',
        multimodal: false,
        freeTier: true,
        startPrice: '$0.14/M tokens',
        api: true,
        openSource: true,
    },
];

const Badge = ({ value, positive }: { value: boolean; positive?: boolean }) => (
    <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        fontSize: '13px',
        fontWeight: 'bold',
        background: value ? (positive !== false ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)') : 'rgba(100,116,139,0.15)',
        color: value ? (positive !== false ? '#22c55e' : '#ef4444') : '#64748b',
    }}>
        {value ? '✓' : '✗'}
    </span>
);

export default function LLMComparisonMatrix() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(15,20,40,0.95) 0%, rgba(20,30,60,0.95) 100%)',
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
                    <span style={{ fontSize: '22px' }}>⚡</span>
                    AI Chatbots & LLMs — 2026 Comparison
                </h3>
                <p style={{ margin: '6px 0 0', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                    8 leading platforms across key decision dimensions
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                            {['Tool', 'Best For', 'Context Window', 'Multi\u00admodal', 'Free Tier', 'Starting Price', 'API', 'Open Source'].map((h) => (
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
                                        ? 'rgba(99,102,241,0.08)'
                                        : tool.highlight
                                            ? 'rgba(99,102,241,0.04)'
                                            : 'transparent',
                                    transition: 'background 0.2s ease',
                                    cursor: 'default',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                }}
                            >
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                                    <div style={{ fontWeight: '600', color: 'var(--color-text-primary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {tool.highlight && (
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', display: 'inline-block', flexShrink: 0 }} />
                                        )}
                                        {tool.name}
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{tool.company}</div>
                                </td>
                                <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-text-secondary)', maxWidth: '200px' }}>
                                    {tool.bestFor}
                                </td>
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                                    <span style={{
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: '#a78bfa',
                                        background: 'rgba(167,139,250,0.1)',
                                        padding: '3px 8px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                    }}>
                                        {tool.context}
                                    </span>
                                </td>
                                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                                    <Badge value={tool.multimodal} />
                                </td>
                                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                                    <Badge value={tool.freeTier} />
                                </td>
                                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '600', color: '#34d399' }}>
                                    {tool.startPrice}
                                </td>
                                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                                    <Badge value={tool.api} />
                                </td>
                                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                                    <Badge value={tool.openSource} />
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
                ✓ = Yes &nbsp;|&nbsp; ✗ = No &nbsp;|&nbsp; Updated: February 2026
            </div>
        </div>
    );
}
