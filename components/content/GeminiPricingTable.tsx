'use client';
import React from 'react';

const GeminiPricingTable: React.FC = () => {
    const pricingData = [
        { model: 'Gemini 2.5 Flash-Lite', input: '$0.10', output: '$0.40', context: '1M', status: 'GA' },
        { model: 'Gemini 2.5 Flash', input: '$0.30', output: '$2.50', context: '1M', status: 'GA' },
        { model: 'Gemini 2.5 Pro', input: '$1.25', output: '$10.00', context: '1M', status: 'GA' },
        { model: 'Gemini 3 Flash', input: '$0.50', output: '$3.00', context: '1M', status: 'Preview' },
        { model: 'Gemini 3 Pro', input: '$2.00', output: '$12.00', context: '1M', status: 'Preview' },
        { model: 'Gemini 3.1 Pro', input: '$2.00', output: '$12.00', context: '1M', status: 'Preview' },
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            padding: '40px 24px',
            borderRadius: '16px',
            margin: '40px 0',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
            <h3 style={{
                color: '#c4b5fd',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '24px',
                textTransform: 'uppercase'
            }}>Current Pricing Tables (Feb 2026)</h3>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff' }}>Model</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff' }}>Input / 1M tokens</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff' }}>Output / 1M tokens</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff' }}>Context</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingData.map((row, i) => (
                            <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)' }}>
                                <td style={{ padding: '12px 16px', color: '#e2e8f0', fontWeight: 'bold' }}>{row.model}</td>
                                <td style={{ padding: '12px 16px', color: '#34d399' }}>{row.input}</td>
                                <td style={{ padding: '12px 16px', color: '#f87171' }}>{row.output}</td>
                                <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>{row.context}</td>
                                <td style={{ padding: '12px 16px', color: row.status === 'GA' ? '#34d399' : '#fbbf24' }}>{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GeminiPricingTable;
