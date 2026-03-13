'use client';
import React from 'react';

const AgentSuccessBenchmark: React.FC = () => {
    const data = [
        { model: 'Claude 3.5 Sonnet', success: 24.0, partial: 34.4, color: 'linear-gradient(to right, #f97316, #ea580c)' },
        { model: 'Gemini 2.0 Flash', success: 11.4, partial: 0, color: 'linear-gradient(to right, #3b82f6, #2563eb)' },
        { model: 'GPT-4o', success: 8.6, partial: 0, color: 'linear-gradient(to right, #10b981, #059669)' },
        { model: 'Amazon Nova', success: 1.7, partial: 0, color: 'linear-gradient(to right, #f59e0b, #d97706)' },
        { model: 'Qwen2-72B', success: 1.1, partial: 4.2, color: 'linear-gradient(to right, #8b5cf6, #7c3aed)' }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{
                    color: '#fafafa',
                    fontSize: '24px',
                    fontWeight: '800',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.025em'
                }}>
                    TheAgentCompany Benchmark (CMU/Salesforce)
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
                    Success rates for AI agents on routine enterprise tasks in a fully simulated corporate environment.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '700px', margin: '0 auto' }}>
                {data.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#e4e4e7', fontSize: '15px', fontWeight: '600' }}>{item.model}</span>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span style={{ color: '#fafafa', fontSize: '14px', fontWeight: '700' }}>{item.success}% Success</span>
                                {item.partial > 0 && (
                                    <span style={{ color: '#71717a', fontSize: '12px' }}>({item.partial}% w/ Partial)</span>
                                )}
                            </div>
                        </div>
                        <div style={{ 
                            height: '12px', 
                            width: '100%', 
                            background: '#27272a', 
                            borderRadius: '6px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Partial Credit Bar */}
                            {item.partial > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: `${item.partial}%`,
                                    background: '#3f3f46',
                                    borderRadius: '6px',
                                    transition: 'width 1s ease-out'
                                }} />
                            )}
                            {/* Full Success Bar */}
                            <div style={{
                                position: 'absolute',
                                height: '100%',
                                width: `${item.success}%`,
                                background: item.color,
                                borderRadius: '6px',
                                transition: 'width 1s ease-out',
                                zIndex: 1
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ 
                marginTop: '40px', 
                padding: '16px', 
                background: 'rgba(24, 24, 27, 0.5)', 
                borderRadius: '12px',
                border: '1px solid #27272a',
                fontSize: '13px',
                color: '#71717a',
                textAlign: 'center'
            }}>
                Source: Carnegie Mellon University School of Computer Science / Salesforce Research, 2025.
            </div>
        </div>
    );
};

export default AgentSuccessBenchmark;
