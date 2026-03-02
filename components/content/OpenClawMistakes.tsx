'use client';
import React from 'react';

const OpenClawMistakes: React.FC = () => {
    const mistakes = [
        {
            title: 'Generic Focus',
            desc: 'Building a "one-click deploy" for everyone. You are competing with $5 VPS providers. Verticalize or die.',
            icon: '🚫'
        },
        {
            title: 'Unrestricted Skills',
            desc: 'Allowing users to install arbitrary ClawHub skills. You are importing potential malware into your platform.',
            icon: '⚠️'
        },
        {
            title: 'Ignoring Token Costs',
            desc: 'Using pooled keys without per-user tracking. Heavy users will eat your entire margin in days.',
            icon: '💸'
        },
        {
            title: 'No Fork Strategy',
            desc: 'Relying on the upstream canonical repo without pinning a version. One breaking update kills your service.',
            icon: '🔗'
        },
        {
            title: 'Underpricing Complexity',
            desc: 'Pricing below $29/mo with $15/mo infra costs. Your unit economics cannot support security and support.',
            icon: '📉'
        },
        {
            title: 'Overbuilding UI',
            desc: 'Adding analytics and mobile apps before validating that customers are paying and staying.',
            icon: '🏗️'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            padding: '40px',
            background: 'rgba(239, 68, 68, 0.03)',
            borderRadius: '28px',
            border: '1px solid rgba(239, 68, 68, 0.1)',
        }}>
            <h3 style={{ textAlign: 'center', color: '#f87171', fontSize: '20px', fontWeight: '800', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Critical Strategy: 6 Mistakes Builders Make
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {mistakes.map((m, idx) => (
                    <div key={idx} style={{
                        padding: '24px',
                        background: 'rgba(15, 23, 42, 0.3)',
                        borderRadius: '20px',
                        border: '1px solid rgba(239, 68, 68, 0.15)',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'start'
                    }}>
                        <div style={{ fontSize: '20px', marginTop: '4px' }}>{m.icon}</div>
                        <div>
                            <h4 style={{ color: '#fca5a5', fontSize: '15px', fontWeight: '700', marginBottom: '6px' }}>{m.title}</h4>
                            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenClawMistakes;
