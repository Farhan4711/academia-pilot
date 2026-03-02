'use client';
import React from 'react';

const OpenClawCostStructure: React.FC = () => {
    const tiers = [
        {
            level: 'Light',
            daily: '$2–$5/day',
            monthly: '$60–$150/mo',
            model: 'Claude Haiku',
            desc: 'Casual automation, personal task management, and infrequent messaging.',
            color: '#38bdf8'
        },
        {
            level: 'Moderate',
            daily: '$10–$25/day',
            monthly: '$300–$750/mo',
            model: 'GPT-4o mini',
            desc: 'Active business usage, high-volume lead sourcing, and persistent research.',
            color: '#818cf8',
            featured: true
        },
        {
            level: 'Heavy',
            daily: '$30–$75+/day',
            monthly: '$900–$2,250+/mo',
            model: 'Mix via OpenRouter',
            desc: 'Enterprise-grade agentic loops, continuous browser monitoring, and high-frequency tool calls.',
            color: '#6366f1'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            padding: '40px',
            background: 'rgba(15, 23, 42, 0.4)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ color: '#f8fafc', fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>
                    OpenClaw Unit Economics: LLM Cost Structure
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
                    Running autonomous agentic loops requires high-frequency token exchange. These tiers represent verified production averages.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {tiers.map((tier, idx) => (
                    <div key={idx} style={{
                        padding: '32px',
                        background: tier.featured ? 'rgba(56, 189, 248, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '24px',
                        border: `1px solid ${tier.featured ? tier.color + '40' : 'rgba(255, 255, 255, 0.05)'}`,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s ease',
                    }}>
                        {tier.featured && (
                            <div style={{
                                position: 'absolute',
                                top: '-12px',
                                right: '24px',
                                background: tier.color,
                                color: '#0f172a',
                                fontSize: '10px',
                                fontWeight: '900',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                textTransform: 'uppercase'
                            }}>
                                Most Common
                            </div>
                        )}

                        <div style={{ color: tier.color, fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                            {tier.level} Usage
                        </div>
                        <h4 style={{ color: '#f1f5f9', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>{tier.model}</h4>

                        <div style={{ marginBottom: '24px', flex: 1 }}>
                            <div style={{ color: '#f8fafc', fontSize: '24px', fontWeight: '800' }}>{tier.daily}</div>
                            <div style={{ color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Estimated: {tier.monthly}</div>
                        </div>

                        <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                            {tier.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '32px',
                padding: '16px',
                background: 'rgba(56, 189, 248, 0.05)',
                borderRadius: '12px',
                border: '1px dashed rgba(56, 189, 248, 0.2)',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>
                    <strong style={{ color: '#38bdf8' }}>Strategy Tip:</strong> Use <strong>OpenRouter</strong> with fallback routing to minimize costs during "Heavy" reasoning phases.
                </p>
            </div>
        </div>
    );
};

export default OpenClawCostStructure;
