'use client';
import React from 'react';

const MicrosoftCourseROI: React.FC = () => {
    const data = [
        { outcome: '4 Module Badges', time: '11 hrs', cost: '0', value: 'LinkedIn signal', verify: 'No', color: '#94a3b8' },
        { outcome: 'AI-900 Cert', time: '11 hrs + prep', cost: '$165', value: 'Entry-level credentials', verify: 'Yes', color: '#38bdf8' },
        { outcome: 'AI-102 Cert', time: '60+ hrs + prep', cost: '$165', value: 'Professional AI Engineer', verify: 'Yes', color: '#6366f1' },
        { outcome: 'Full Stack (Total)', time: '100-130 hrs', cost: '$495', value: 'Full Azure AI Credential', verify: 'Yes', color: '#fbbf24' }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.6)'
        }}>
            <h3 style={{ margin: 0, color: '#f1f5f9', fontSize: '22px', fontWeight: '800', textAlign: 'center' }}>Career ROI & Investment Model</h3>
            <p style={{ margin: '8px 0 32px', color: '#64748b', fontSize: '14px', textAlign: 'center' }}>Conversion from zero-cost training to global credential value.</p>

            <div style={{ display: 'grid', gap: '16px' }}>
                {data.map((item, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 2fr',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '20px 24px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        border: idx === data.length - 1 ? `2px solid ${item.color}40` : '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'transform 0.2s ease'
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{ color: item.color, fontWeight: '800', fontSize: '15px' }}>{item.outcome}</div>

                        <div style={{ fontSize: '13px' }}>
                            <div style={{ color: '#475569', textTransform: 'uppercase', fontSize: '10px', fontWeight: '800', marginBottom: '4px' }}>Time</div>
                            <div style={{ color: '#f1f5f9' }}>{item.time}</div>
                        </div>

                        <div style={{ fontSize: '13px' }}>
                            <div style={{ color: '#475569', textTransform: 'uppercase', fontSize: '10px', fontWeight: '800', marginBottom: '4px' }}>Cash</div>
                            <div style={{ color: item.cost === '0' ? '#4ade80' : '#f1f5f9', fontWeight: item.cost !== '0' ? '700' : '400' }}>
                                {item.cost === '0' ? 'FREE' : item.cost}
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '600' }}>{item.value}</div>
                            <div style={{ fontSize: '11px', color: item.verify === 'Yes' ? '#4ade80' : '#f43f5e', marginTop: '4px' }}>
                                {item.verify === 'Yes' ? '✓ Verified ID' : '✕ Unverified Signal'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '32px',
                background: 'rgba(56, 189, 248, 0.05)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid rgba(56, 189, 248, 0.1)'
            }}>
                <div style={{ fontSize: '32px' }}>💡</div>
                <div style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.6' }}>
                    <strong style={{ color: '#38bdf8' }}>Strategy Note:</strong> The $165 exam fee converts 11 hours of "free" learning into a machine-verifiable asset. Combined with the AI-102, this creates a credential stack competitive with a computer science degree for applied AI roles.
                </div>
            </div>
        </div>
    );
};

export default MicrosoftCourseROI;
