'use client';
import React from 'react';

const OpenClawEcosystemComparison: React.FC = () => {
    const data = [
        { opt: 'Raw OpenClaw', strength: 'Zero license cost', weakness: '512+ CVEs; No multi-user', use: 'Technical experts' },
        { opt: 'Wrapper SaaS', strength: 'Lowest time-to-value', weakness: 'No product moat', use: 'Non-technical SMB' },
        { opt: 'Vertical OpenClaw', strength: 'Domain ROI; High margin', weakness: 'Deep knowledge needed', use: 'Industry specialists' },
        { opt: 'LangChain', strength: 'Max flexibility', weakness: 'High engineering cost', use: 'Custom enterprise R&D' },
        { opt: 'n8n', strength: '400+ generic tools', weakness: 'Stateless; No agent context', use: 'Deterministic automation' },
        { opt: 'AutoGPT', strength: 'Autonomous task loops', weakness: 'Low production reliability', use: 'Research / Testing' },
        { opt: 'Botpress', strength: 'Governance; Scale', weakness: 'No OS-level execution', use: 'Customer Support' }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            background: 'var(--color-surface)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            overflow: 'hidden'
        }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--color-border-light)' }}>
                <h3 style={{ margin: 0, color: '#f1f5f9', fontSize: '18px', fontWeight: '700' }}>Competitive Comparison: Ecosystem Options</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'rgba(56, 189, 248, 0.05)' }}>
                            {['Option', 'Strength', 'Weakness', 'Ideal Case'].map((h, i) => (
                                <th key={i} style={{ padding: '16px 20px', color: '#38bdf8', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
                                <td style={{ padding: '16px 20px', color: '#f8fafc', fontWeight: '700', fontSize: '13px' }}>{row.opt}</td>
                                <td style={{ padding: '16px 20px', color: '#34d399', fontSize: '13px' }}>{row.strength}</td>
                                <td style={{ padding: '16px 20px', color: '#f87171', fontSize: '13px' }}>{row.weakness}</td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-muted)', fontSize: '13px' }}>{row.use}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenClawEcosystemComparison;
