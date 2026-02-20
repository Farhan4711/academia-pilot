'use client';
import React from 'react';

const CompetitorMatrixTable: React.FC = () => {
    const data = [
        { dim: 'Context Window', gemini: '1M tokens', gpt: '128K tokens', claude: '200K tokens' },
        { dim: 'ARC-AGI-2', gemini: '77.1%', gpt: '~40–50%', claude: '~65% (Opus 4.6)' },
        { dim: 'LiveCodeBench Elo', gemini: '2,887', gpt: '2,393', claude: 'Competitive' },
        { dim: 'SWE-Bench', gemini: '80.6%', gpt: 'Competitive', claude: '~80.9% (Opus 4.6)' },
        { dim: 'Multimodal Input', gemini: 'Text, image, video, audio', gpt: 'Text, image', claude: 'Text, image' },
        { dim: 'Computer Use', gemini: 'Yes', gpt: 'Yes', claude: 'Yes' },
        { dim: 'Input Pricing / 1M', gemini: '$2.00', gpt: '$1.25', claude: '$3.00 (Sonnet 4.6)' },
        { dim: 'Output Pricing / 1M', gemini: '$12.00', gpt: '$10.00', claude: '$15.00 (Sonnet 4.6)' },
        { dim: 'Batch Discount', gemini: '50%', gpt: '50%', claude: 'None (standard)' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #052e16 0%, #020617 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
            <h3 style={{
                color: '#6ee7b7',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                textTransform: 'uppercase'
            }}>Full Competitive Comparison (2026)</h3>

            <div style={{ overflowX: 'auto', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(16, 185, 129, 0.15)', borderBottom: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#a7f3d0' }}>Dimension</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#3b82f6' }}>Gemini 3.1 Pro</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#10b981' }}>GPT-5.2</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#f59e0b' }}>Claude 4.6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                <td style={{ padding: '16px', color: '#e2e8f0', fontWeight: 'bold' }}>{row.dim}</td>
                                <td style={{ padding: '16px', color: '#93c5fd', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.gemini}</td>
                                <td style={{ padding: '16px', color: '#6ee7b7', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.gpt}</td>
                                <td style={{ padding: '16px', color: '#fcd34d', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.claude}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompetitorMatrixTable;
