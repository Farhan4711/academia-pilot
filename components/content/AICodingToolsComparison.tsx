'use client';
import React from 'react';

const AICodingToolsComparison: React.FC = () => {
    const tools = [
        { name: 'Claude Code', useCase: 'Complex Architecture', speed: 'Iterative Agents', style: 'Highly Custom', icon: '🤖' },
        { name: 'Cursor', useCase: 'Quick Feature Edits', speed: 'Autocomplete Fixes', style: 'Standard IDE', icon: '⌨️' },
        { name: 'Lovable', useCase: 'Rapid Prototypes', speed: 'One-shot Gen', style: 'Homogeneous', icon: '✨' },
    ];

    return (
        <div style={{
            margin: '40px 0',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            fontFamily: "'Inter', sans-serif"
        }}>
            <h3 style={{
                color: '#3B82F6',
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <span style={{ fontSize: '24px' }}>📊</span> AI Coding Tool Comparison (2026)
            </h3>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                            <th style={{ textAlign: 'left', padding: '12px', color: '#94a3b8' }}>Tool</th>
                            <th style={{ textAlign: 'left', padding: '12px', color: '#94a3b8' }}>Primary Use Case</th>
                            <th style={{ textAlign: 'left', padding: '12px', color: '#94a3b8' }}>Development Speed</th>
                            <th style={{ textAlign: 'left', padding: '12px', color: '#94a3b8' }}>Output Style</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool, idx) => (
                            <tr key={idx} style={{
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                transition: 'background 0.2s',
                            }}>
                                <td style={{ padding: '16px 12px', fontWeight: '700', color: '#fff' }}>
                                    <span style={{ marginRight: '8px' }}>{tool.icon}</span> {tool.name}
                                </td>
                                <td style={{ padding: '16px 12px' }}>{tool.useCase}</td>
                                <td style={{ padding: '16px 12px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: 'rgba(59, 130, 246, 0.15)',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        color: '#60a5fa',
                                        border: '1px solid rgba(59, 130, 246, 0.3)'
                                    }}>{tool.speed}</span>
                                </td>
                                <td style={{ padding: '16px 12px' }}>{tool.style}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p style={{ marginTop: '20px', fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>
                * Claude Code leads in architectural coherence due to its deep context capabilities.
            </p>
        </div>
    );
}

export default AICodingToolsComparison;
