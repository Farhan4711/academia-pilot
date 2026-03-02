'use client';
import React from 'react';

const OpenClawProductionComponents: React.FC = () => {
    const components = [
        {
            title: 'Component 1: UI Layer',
            desc: 'Browser-based control panel (Next.js/React) replacing CLI with form-driven configuration for channels, SOUL.md, and skills.',
            icon: '🖥️',
            color: '#38bdf8'
        },
        {
            title: 'Component 2: Auth System',
            desc: 'OAuth2/Auth0/Clerk implementation ensuring multi-tenant isolation. Prevents cross-tenant data access at the container level.',
            icon: '🔐',
            color: '#818cf8'
        },
        {
            title: 'Component 3: Billing Hub',
            desc: 'Stripe/Paddle integration mapping subscription tiers to instance provisioning. Handles usage limits and API quotas.',
            icon: '💳',
            color: '#6366f1'
        },
        {
            title: 'Component 4: Key Management',
            desc: 'BYOAK (Bring Your Own API Key) or pooled models. Manages model routing to maximize gross margin.',
            icon: '🔑',
            color: '#8b5cf6'
        },
        {
            title: 'Component 5: Deployment Auto',
            desc: 'Docker/K8s orchestration that provisions, scales, and terminates per-user agent instances in milliseconds.',
            icon: '🚀',
            color: '#c084fc'
        },
        {
            title: 'Component 6: Monitoring',
            desc: 'Real-time log streaming, token consumption tracking, and error alerting for every active agent instance.',
            icon: '📊',
            color: '#fbbf24'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            padding: '40px',
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
        }}>
            <h3 style={{ textAlign: 'center', color: '#f8fafc', fontSize: '22px', fontWeight: '800', marginBottom: '32px' }}>
                The 6 Components of a Production Wrapper
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {components.map((comp, idx) => (
                    <div key={idx} style={{
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '20px',
                        border: `1px solid ${comp.color}20`,
                        transition: 'transform 0.2s ease',
                        cursor: 'default'
                    }}>
                        <div style={{ fontSize: '24px', marginBottom: '16px' }}>{comp.icon}</div>
                        <h4 style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{comp.title}</h4>
                        <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{comp.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenClawProductionComponents;
