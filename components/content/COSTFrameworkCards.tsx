'use client';
import React, { useState } from 'react';

const COSTFrameworkCards: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(0);

    const framework = [
        {
            letter: 'C',
            title: 'Capability Gap',
            color: '#8b5cf6',
            summary: 'How much theoretical capability do I sacrifice?',
            points: [
                'Strongest open-source model for competitive programming (+20 pts).',
                'Trails Claude Opus on hardest production bugs (-4 pts SWE-bench).',
                'Highest native visual/OCR performance.',
                'Caution: AA-Omniscience score (-11) indicates higher hallucination risk on factual APIs.'
            ]
        },
        {
            letter: 'O',
            title: 'Ownership Advantage',
            color: '#10b981',
            summary: 'What do I own that I didn\'t with closed source?',
            points: [
                'Apache 2.0 CLI license — fork, modify, or repackage without royalty.',
                'Modified MIT model weights — commercially free under 100M MAU.',
                'Data Sovereignty: First viable on-prem self-hosting option for enterprise.',
                'Provider flexibility: CLI works with Claude or OpenAI APIs too.'
            ]
        },
        {
            letter: 'S',
            title: 'Scale Economics',
            color: '#f59e0b',
            summary: 'What are the real-world operational costs?',
            points: [
                'On paper: 10× cheaper input ($0.60/M) and 30× cheaper output ($2.50/M).',
                'In reality: The Verbosity Penalty means K2.5 generates 6× more output tokens per task.',
                'Effective task cost: Still ~5-8× cheaper than Claude Opus overall.',
                'Massive savings for parallel Agent Swarm tasks ($50 instead of $500 code audits).'
            ]
        },
        {
            letter: 'T',
            title: 'Toolchain Fit',
            color: '#3b82f6',
            summary: 'How does it integrate with my existing workflows?',
            points: [
                'JetBrains / Zed: Excellent native integration via ACP.',
                'VS Code: Official native extension available.',
                'Cursor: High friction. ACP not supported natively, requires hacky workarounds.',
                'Platform: Native on Mac/Linux. Requires WSL2 on Windows (no native .exe yet).'
            ]
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: '#0f172a',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #1e293b'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span style={{ 
                    display: 'inline-block', 
                    padding: '6px 16px', 
                    background: 'rgba(56, 189, 248, 0.1)', 
                    color: '#38bdf8', 
                    borderRadius: '20px', 
                    fontSize: '14px', 
                    fontWeight: '700', 
                    marginBottom: '16px'
                }}>
                    Evaluation Methodology
                </span>
                <h3 style={{
                    color: '#f8fafc',
                    fontSize: '28px',
                    fontWeight: '800',
                    margin: '0 0 12px 0'
                }}>
                    The COST Framework
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                    How to evaluate open-source AI tooling: Capability Gap, Ownership Advantage, Scale Economics, and Toolchain Fit.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
                {framework.map((item, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                        style={{
                            background: activeCard === idx ? 'rgba(30, 41, 59, 0.8)' : 'rgba(15, 23, 42, 0.5)',
                            border: `1px solid ${activeCard === idx ? item.color : '#1e293b'}`,
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Card Header */}
                        <div style={{ 
                            padding: '20px 24px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            background: activeCard === idx ? `${item.color}10` : 'transparent'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: item.color,
                                    color: 'var(--color-text-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px',
                                    fontWeight: '900',
                                    boxShadow: activeCard === idx ? `0 0 15px ${item.color}60` : 'none'
                                }}>
                                    {item.letter}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: activeCard === idx ? 'var(--color-text-primary)' : 'var(--color-border)', fontSize: '18px', fontWeight: '700' }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-muted)', fontSize: '14px' }}>
                                        {item.summary}
                                    </p>
                                </div>
                            </div>
                            <div style={{ 
                                color: item.color, 
                                fontSize: '24px',
                                transform: activeCard === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s'
                            }}>
                                ↓
                            </div>
                        </div>

                        {/* Expandable Content */}
                        <div style={{
                            maxHeight: activeCard === idx ? '500px' : '0px',
                            opacity: activeCard === idx ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            padding: activeCard === idx ? '0 24px 24px 80px' : '0 24px 0 80px'
                        }}>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} style={{ 
                                        color: 'var(--color-text-secondary)', 
                                        fontSize: '15px', 
                                        lineHeight: 1.5,
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{ color: item.color, marginTop: '2px' }}>✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default COSTFrameworkCards;
