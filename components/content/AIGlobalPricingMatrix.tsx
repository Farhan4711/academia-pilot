'use client';
import React from 'react';

const AIGlobalPricingMatrix: React.FC = () => {
    const idePricing = [
        { name: 'Cursor', free: 'Limited completions', pro: '$20/mo (credit pool)', enterprise: '$40/user/mo + custom' },
        { name: 'Cursor Ultra', free: '—', pro: '$200/mo (20x credits)', enterprise: '—' },
        { name: 'Windsurf', free: '25 credits/mo', pro: '$15/mo', enterprise: 'Custom (200+ users)' },
        { name: 'Claude Code', free: 'Requires Anthropic Pro', pro: '$20–$200/mo (Anthropic tier)', enterprise: 'Via Anthropic' },
        { name: 'GitHub Copilot', free: '2,000 completions/mo', pro: '$10/user/mo', enterprise: '$19/user/mo' },
        { name: 'Trae & CodeBuddy', free: 'Generous / 50 daily Craft', pro: 'Low/free (strategic)', enterprise: 'Not public' }
    ];

    const builderPricing = [
        { name: 'Bolt.new', free: 'Token-limited', pro: '~$20/mo (10M tokens)', enterprise: 'Custom' },
        { name: 'Lovable', free: 'Credit-limited', pro: '~$25/mo (100 messages)', enterprise: 'Custom' },
        { name: 'Replit', free: 'Basic access', pro: '$25/mo (effort-based agent usage)', enterprise: 'Azure-partnered; custom' },
        { name: 'PlayCode', free: 'Free', pro: '$7/mo', enterprise: 'Not applicable' }
    ];

    return (
        <div style={{ fontFamily: "'Space Mono', monospace", margin: '48px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Agentic IDE Pricing */}
                <div style={{ background: '#020617', padding: '32px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                    <h3 style={{ color: '#3b82f6', marginBottom: '24px', fontSize: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                        Agentic IDE Economics
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {idePricing.map((item, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-light)' }}>
                                <strong style={{ color: '#f8fafc', fontSize: '15px' }}>{item.name}</strong>
                                <div>
                                    <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', marginBottom: '4px' }}>Free: {item.free}</div>
                                    <div style={{ color: '#4ade80', fontSize: '14px', fontWeight: 'bold' }}>Pro: {item.pro}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Browser Builder Pricing */}
                <div style={{ background: '#020617', padding: '32px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                    <h3 style={{ color: '#f43f5e', marginBottom: '24px', fontSize: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                        Browser Builder Economics
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {builderPricing.map((item, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-light)' }}>
                                <strong style={{ color: '#f8fafc', fontSize: '15px' }}>{item.name}</strong>
                                <div>
                                    <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', marginBottom: '4px' }}>Free: {item.free}</div>
                                    <div style={{ color: '#fb923c', fontSize: '14px', fontWeight: 'bold' }}>Pro: {item.pro}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '20px', borderRadius: '12px', marginTop: '24px', color: '#bfdbfe', fontSize: '14px', lineHeight: '1.6' }}>
                <strong style={{ color: '#60a5fa' }}>Economic Efficiency Analysis:</strong> The meaningful cost comparison is not subscription price — it is cost per shipped feature, adjusted for technical debt. Browser builders have lower nominal monthly costs but frequently require architectural rewrites at growth inflection points ($50K+ engineering costs). Agentic IDEs have nominal costs but produce extensible enterprise code.
            </div>
        </div>
    );
};

export default AIGlobalPricingMatrix;
