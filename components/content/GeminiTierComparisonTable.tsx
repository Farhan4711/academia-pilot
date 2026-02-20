'use client';
import React from 'react';

const GeminiTierComparisonTable: React.FC = () => {
    const data = [
        { feature: 'Release', flashLite: 'July 2025 (GA)', flash3: 'December 2025', pro3: 'November 2025', pro31: 'February 2026' },
        { feature: 'Input Price / 1M', flashLite: '$0.10', flash3: '$0.50', pro3: '$2.00', pro31: '$2.00' },
        { feature: 'Output Price / 1M', flashLite: '$0.40', flash3: '$3.00', pro3: '$12.00', pro31: '$12.00' },
        { feature: 'Context Window', flashLite: '1M tokens', flash3: '1M tokens', pro3: '1M tokens', pro31: '1M tokens' },
        { feature: 'Max Output Tokens', flashLite: '65,536', flash3: '64,000', pro3: '64,000', pro31: '64,000' },
        { feature: 'Thinking Mode', flashLite: 'Controllable budget', flash3: 'Standard', pro3: 'Deep Think', pro31: 'Deep Think (upgraded)' },
        { feature: 'Computer Use', flashLite: 'No', flash3: 'Yes (preview)', pro3: 'Yes', pro31: 'Yes' },
        { feature: 'ARC-AGI-2 Score', flashLite: '—', flash3: '—', pro3: '31.1%', pro31: '77.1%' },
        { feature: 'LiveCodeBench Elo', flashLite: '—', flash3: '—', pro3: '2,439', pro31: '2,887' },
        { feature: 'SWE-Bench', flashLite: '—', flash3: '—', pro3: 'Competitive', pro31: '80.6%' },
        { feature: 'Best For', flashLite: 'High-volume pipelines', flash3: 'Speed-critical production', pro3: 'Complex reasoning', pro31: 'Frontier R&D, agentic coding' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            overflow: 'hidden'
        }}>
            <h3 style={{
                color: '#818cf8',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(129, 140, 248, 0.3)'
            }}>
                Gemini Model Tiers Comparison
            </h3>

            <div style={{
                overflowX: 'auto',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(99, 102, 241, 0.15)'
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '14px',
                    minWidth: '900px'
                }}>
                    <thead>
                        <tr style={{
                            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
                            borderBottom: '2px solid rgba(129, 140, 248, 0.3)'
                        }}>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#a5b4fc', width: '20%' }}>Feature</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#fbbf24', width: '20%' }}>2.5 Flash-Lite</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#fbbf24', width: '20%' }}>3 Flash</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#34d399', width: '20%' }}>3 Pro</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#3b82f6', width: '20%' }}>3.1 Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} style={{
                                background: index % 2 === 0 ? 'rgba(15, 23, 42, 0.5)' : 'rgba(30, 41, 59, 0.3)',
                                borderBottom: '1px solid rgba(71, 85, 105, 0.2)',
                                transition: 'background 0.3s ease'
                            }}>
                                <td style={{ padding: '16px 20px', color: '#e0e7ff', fontWeight: '600', borderRight: '1px solid rgba(71, 85, 105, 0.2)' }}>{row.feature}</td>
                                <td style={{ padding: '16px 20px', color: '#cbd5e1', borderRight: '1px solid rgba(71, 85, 105, 0.2)' }}>{row.flashLite}</td>
                                <td style={{ padding: '16px 20px', color: '#cbd5e1', borderRight: '1px solid rgba(71, 85, 105, 0.2)' }}>{row.flash3}</td>
                                <td style={{ padding: '16px 20px', color: '#cbd5e1', borderRight: '1px solid rgba(71, 85, 105, 0.2)' }}>{row.pro3}</td>
                                <td style={{ padding: '16px 20px', color: '#93c5fd', fontWeight: 'bold' }}>{row.pro31}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GeminiTierComparisonTable;
