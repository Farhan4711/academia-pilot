'use client';
import React from 'react';

const MicrosoftCredentialArchitecture: React.FC = () => {
    const tiers = [
        {
            title: 'Module Badges',
            mechanism: 'Complete a learning path',
            cost: 'Free',
            signal: 'Low — signals engagement',
            description: 'The gateway drug of Microsoft Learn. Useful for LinkedIn vanity but generally ignored by technical recruiters.',
            renewal: 'Never expires',
            icon: '🏅',
            color: 'var(--color-text-muted)'
        },
        {
            title: 'Applied Skills',
            mechanism: 'Complete a proctored lab',
            cost: 'Free (assessment)',
            signal: 'Medium — validates hands-on skill',
            description: 'The most underrated asset in 2026. Validates a specific scenario (e.g., "Configure Azure OpenAI Service") via a 2-hour proctored lab.',
            renewal: 'Annual',
            icon: '🧪',
            color: '#38bdf8'
        },
        {
            title: 'Microsoft Certifications',
            mechanism: 'Pass a proctored exam',
            cost: '$165 per exam',
            signal: 'High — globally recognized',
            description: 'The gold standard. Maps to specific job roles (AI Engineer, Data Scientist) and carries a globally verifiable credential ID.',
            renewal: 'Annual (free reassessment)',
            icon: '📜',
            color: '#fbbf24'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            padding: '32px',
            background: 'var(--color-surface)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
        }}>
            <h3 style={{ color: '#f8fafc', fontSize: '22px', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>
                Microsoft Learn Credential Architecture (2026)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {tiers.map((tier, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '60px 1fr 1fr',
                        alignItems: 'start',
                        gap: '24px',
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '16px',
                        border: `1px solid ${tier.color}20`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            fontSize: '32px',
                            display: 'flex',
                            justifyContent: 'center',
                            background: `${tier.color}15`,
                            width: '60px',
                            height: '60px',
                            borderRadius: '14px',
                            alignItems: 'center',
                            border: `1px solid ${tier.color}30`,
                            marginTop: '4px'
                        }}>
                            {tier.icon}
                        </div>

                        <div>
                            <div style={{ color: tier.color, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                                Tier {idx + 1}: {tier.title.split(' ')[tier.title.split(' ').length - 1]}
                            </div>
                            <div style={{ color: '#f1f5f9', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                                {tier.title}
                            </div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                                {tier.description}
                            </div>
                            <div style={{ color: '#64748b', fontSize: '12px', fontStyle: 'italic' }}>
                                <strong>Mechanism:</strong> {tier.mechanism}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: '#475569' }}>Cost:</span>
                                <span style={{ color: 'var(--color-text-secondary)', fontWeight: '600' }}>{tier.cost}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: '#475569' }}>Signal:</span>
                                <span style={{ color: tier.color, fontWeight: '700' }}>{tier.signal.split(' — ')[0]}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: '#475569' }}>Renewal:</span>
                                <span style={{ color: 'var(--color-text-secondary)' }}>{tier.renewal}</span>
                            </div>
                        </div>

                        {idx < tiers.length - 1 && (
                            <div style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px',
                                fontSize: '10px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: tiers[idx + 1].color,
                                opacity: 0.3
                            }}>
                                Next: {tiers[idx + 1].title} ↓
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(251, 191, 36, 0.05)',
                borderRadius: '12px',
                border: '1px dashed rgba(251, 191, 36, 0.2)',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '13px' }}>
                    <strong style={{ color: '#fbbf24' }}>Strategic Warning:</strong> Badges are engagement signals, not machine-verifiable certifications. Passing a proctored exam is the only way to earn a globally recognized professional credential.
                </p>
            </div>
        </div>
    );
};

export default MicrosoftCredentialArchitecture;
