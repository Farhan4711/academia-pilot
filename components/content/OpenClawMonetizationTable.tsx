'use client';
import React from 'react';

const OpenClawMonetizationTable: React.FC = () => {
    const models = [
        {
            name: 'Managed Hosting (BYOAK)',
            rev: '$2K–$40K MRR',
            cost: 'Low ($5–15/user)',
            margin: '75–85%',
            defensibility: 'Low',
            color: '#38bdf8'
        },
        {
            name: 'API-Pooled SaaS',
            rev: '$3K–$50K MRR',
            cost: 'Medium (Variable)',
            margin: '40–65%',
            defensibility: 'Medium',
            color: '#818cf8'
        },
        {
            name: 'Vertical SaaS',
            rev: '$5K–$100K+ MRR',
            cost: 'Low–Medium',
            margin: '70–85%',
            defensibility: 'High',
            color: '#6366f1'
        },
        {
            name: 'White-Label Platform',
            rev: '$10K–$200K+ MRR',
            cost: 'High (Infra)',
            margin: '60–75%',
            defensibility: 'Medium',
            color: '#8b5cf6'
        },
        {
            name: 'Consulting / Skills',
            rev: '$2K–$20K/mo',
            cost: 'Near Zero',
            margin: '90%+',
            defensibility: 'Medium',
            color: '#fbbf24'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            background: 'rgba(15, 23, 42, 0.4)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden'
        }}>
            <div style={{ padding: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '20px', fontWeight: '800' }}>Wrapper Monetization: Revenue & Cost Matrix</h3>
                <p style={{ margin: '8px 0 0', color: '#94a3b8', fontSize: '13px' }}>Comparing the top 5 business models in the agentic wrapper economy.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                            {['Business Model', 'MRR Potential', 'Unit Cost', 'Gross Margin', 'Defensibility'].map((h, i) => (
                                <th key={i} style={{
                                    padding: '20px',
                                    color: '#64748b',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    textAlign: i === 0 ? 'left' : 'center'
                                }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((model, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <td style={{ padding: '20px' }}>
                                    <div style={{ color: '#f1f5f9', fontWeight: '700', fontSize: '14px' }}>{model.name}</div>
                                </td>
                                <td style={{ padding: '20px', textAlign: 'center', color: model.color, fontWeight: '800', fontSize: '14px' }}>{model.rev}</td>
                                <td style={{ padding: '20px', textAlign: 'center', color: '#cbd5e1', fontSize: '13px' }}>{model.cost}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        background: `${model.color}15`,
                                        color: model.color,
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        border: `1px solid ${model.color}30`
                                    }}>
                                        {model.margin}
                                    </span>
                                </td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} style={{
                                                width: '6px',
                                                height: '16px',
                                                borderRadius: '2px',
                                                background: i <= (model.defensibility === 'High' ? 3 : model.defensibility === 'Medium' ? 2 : 1) ? model.color : 'rgba(255,255,255,0.05)'
                                            }} />
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenClawMonetizationTable;
