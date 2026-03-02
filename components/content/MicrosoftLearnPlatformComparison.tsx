'use client';
import React from 'react';

const MicrosoftLearnPlatformComparison: React.FC = () => {
    const platforms = [
        { name: 'Microsoft Learn', focus: 'Azure-aligned', free: 'Full paths', cert: 'Direct', voucher: 'Virtual Training Days', best: 'Azure ecosystem' },
        { name: 'Google Cloud Boost', focus: 'GCP-aligned', free: 'Structured paths', cert: 'Direct', voucher: 'Cloud Hero', best: 'GCP developers' },
        { name: 'AWS Skill Builder', focus: 'AWS-aligned', free: 'Limited tier', cert: 'Direct', voucher: 'Limited', best: 'AWS developers' },
        { name: 'Coursera', focus: 'Vendor-neutral', free: 'Audit only', cert: 'Partial', voucher: 'Rarely', best: 'Brand seekers' },
        { name: 'Hugging Face', focus: 'LLMs/Open Source', free: 'Documentation', cert: 'None', voucher: 'N/A', best: 'AI practitioners' }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            background: '#0f172a',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '20px', fontWeight: '800' }}>Platform Comparison Matrix</h3>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13px' }}>How Microsoft Learn stacks up against the 2026 technical education leaders.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <th style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Platform</th>
                            <th style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Focus Area</th>
                            <th style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Free Tier</th>
                            <th style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Voucher Path</th>
                            <th style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platforms.map((p, idx) => (
                            <tr key={idx} style={{
                                borderBottom: idx === platforms.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                                background: p.name === 'Microsoft Learn' ? 'rgba(56, 189, 248, 0.05)' : 'transparent'
                            }}>
                                <td style={{ padding: '16px 20px', color: p.name === 'Microsoft Learn' ? '#38bdf8' : '#f1f5f9', fontWeight: '700', fontSize: '14px' }}>{p.name}</td>
                                <td style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '13px' }}>{p.focus}</td>
                                <td style={{ padding: '16px 20px', color: '#cbd5e1', fontSize: '13px', fontWeight: '600' }}>{p.free}</td>
                                <td style={{ padding: '16px 20px', color: '#cbd5e1', fontSize: '13px' }}>{p.voucher}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '12px',
                                        color: '#94a3b8',
                                        fontSize: '11px',
                                        fontWeight: '600'
                                    }}>
                                        {p.best}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MicrosoftLearnPlatformComparison;
