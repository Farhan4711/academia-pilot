'use client';
import React from 'react';

const OpenClawRiskMatrix: React.FC = () => {
    const risks = [
        { factor: 'Platform Dependency', level: 'High', details: 'Product depends on OpenClaw codebase stability & foundation governance.', color: '#ef4444' },
        { factor: 'Security Liability', level: 'Critical', details: '512+ CVEs documented; malicious skills circulating in ClawHub.', color: '#f97316' },
        { factor: 'API Cost Volatility', level: 'Medium', details: 'Margins compressed by upstream LLM price changes (OpenAI/Anthropic).', color: '#fbbf24' },
        { factor: 'Competition Speed', level: 'High', details: 'Low barrier to entry; generic wrappers commoditize into $5 VPS offerings.', color: '#ef4444' },
        { factor: 'Regulatory Exposure', level: 'Medium', details: 'AI agent data handling & autonomous decisions falling under EU/US AI Acts.', color: '#fbbf24' },
        { factor: 'Niche Defensibility', level: 'Variable', details: 'Managed hosting is low; Vertical SaaS with proprietary skills is high.', color: '#38bdf8' }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            padding: '40px',
            background: 'rgba(15, 23, 42, 0.4)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
        }}>
            <h3 style={{ textAlign: 'center', color: '#f8fafc', fontSize: '20px', fontWeight: '800', marginBottom: '32px' }}>
                OpenClaw Economy: Risk vs Reward Analysis
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {risks.map((risk, idx) => (
                    <div key={idx} style={{
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '20px',
                        border: `1px solid ${risk.color}20`,
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: `${risk.color}15`,
                            color: risk.color,
                            fontSize: '10px',
                            fontWeight: '800',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            border: `1px solid ${risk.color}30`,
                            textTransform: 'uppercase'
                        }}>
                            {risk.level}
                        </div>

                        <div style={{ color: '#f1f5f9', fontWeight: '700', fontSize: '15px', marginBottom: '12px' }}>
                            {risk.factor}
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                            {risk.details}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '32px',
                padding: '16px',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
            }}>
                <div style={{ fontSize: '24px' }}>⚠️</div>
                <p style={{ margin: 0, color: '#f87171', fontSize: '13px', fontWeight: '600' }}>
                    <strong>Strategic Warning:</strong> Generic managed-hosting wrappers are expected to fully commoditize by Q4 2026. Vertical specialization is the only path to durable MRR.
                </p>
            </div>
        </div>
    );
};

export default OpenClawRiskMatrix;
