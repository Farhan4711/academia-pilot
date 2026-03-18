'use client';
import React from 'react';

const ClaudeVsCompetitorsTable: React.FC = () => {
    const data = [
        { dim: 'Complex Coding (SWE-bench)', claude: '~80%', gpt: '~70-77%', gemini: '~65-68%' },
        { dim: 'Abstract Reasoning (ARC-AGI-2)', claude: 'Competitive', gpt: 'Leads (~53%)', gemini: 'Strong' },
        { dim: 'Expert Task Quality (GDPval-AA Elo)', claude: '1606', gpt: '—', gemini: '1317' },
        { dim: 'Context Window', claude: '200K / 1M beta', gpt: '1M', gemini: '1M' },
        { dim: 'Multimodal (native)', claude: 'Strong', gpt: 'Strong', gemini: 'Strongest' },
        { dim: 'Pricing (input/output per M)', claude: '$5 / $25', gpt: 'Comparable', gemini: '~$2 / $8' },
        { dim: 'Prompt Injection Security', claude: '4.7% success', gpt: '21.9%', gemini: '12.5%' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'var(--color-surface)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
            <h3 style={{
                color: '#c4b5fd',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                textTransform: 'uppercase'
            }}>Benchmark Landscape (2026)</h3>

            <div style={{ overflowX: 'auto', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(139, 92, 246, 0.15)', borderBottom: '1px solid rgba(139, 92, 246, 0.3)' }}>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#ddd6fe' }}>Dimension</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#f59e0b' }}>Claude Opus 4.6</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#10b981' }}>GPT-5.2 / 5.3-Codex</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#3b82f6' }}>Gemini 3.1 Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-border-light)', backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                <td style={{ padding: '16px', color: 'var(--color-border)', fontWeight: 'bold' }}>{row.dim}</td>
                                <td style={{ padding: '16px', color: '#fcd34d', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.claude}</td>
                                <td style={{ padding: '16px', color: '#6ee7b7', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.gpt}</td>
                                <td style={{ padding: '16px', color: '#93c5fd', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.gemini}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaudeVsCompetitorsTable;
