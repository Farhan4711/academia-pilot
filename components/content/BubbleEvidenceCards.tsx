'use client';
import React, { useState } from 'react';

const BubbleEvidenceCards: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'for' | 'against'>('for');

    const evidenceFor = [
        {
            title: 'Extreme Valuations',
            icon: '📈',
            description: 'Case-Shiller P/E exceeded 40. Top 5 companies make up 30% of S&P 500.',
            detail: 'OpenAI raised at $157B, targeting $500B while spending $1.4T on infrastructure. Startups value user growth over revenue.'
        },
        {
            title: 'Zero Enterprise ROI',
            icon: '📉',
            description: '95% of organizations report getting zero return on GenAI investment.',
            detail: 'Despite $30-40B in enterprise investment, only 39% have implemented AI in production at scale.'
        },
        {
            title: 'Circular Financing',
            icon: '🔄',
            description: 'AI leaders use circular investment to boost valuations artificially.',
            detail: 'NVIDIA invests $100B in OpenAI, which OpenAI uses to buy more NVIDIA GPUs, inflating both companies.'
        },
        {
            title: 'Infrastructure Overbuild',
            icon: '🏗️',
            description: 'Building ahead of demand with $3 trillion projected by 2028.',
            detail: 'Meta, Alphabet, and Oracle need to raise $86B in 2026 alone just to fund data centers before realizing returns.'
        }
    ];

    const evidenceAgainst = [
        {
            title: 'Real Earnings Structure',
            icon: '💰',
            description: 'Unlike 1999, today’s tech leaders generate massive profits.',
            detail: 'NVIDIA boasts a 53% net margin. The S&P 500 expects a third straight year of double-digit earnings growth.'
        },
        {
            title: 'Genuine Demand Growth',
            icon: '🚀',
            description: 'Cloud providers are seeing real, expanding usage.',
            detail: 'OpenAI hits $13B revenue. Anthropic targets $9B run-rate. Revenue is scaling alongside investment.'
        },
        {
            title: 'Self-Funded Expansion',
            icon: '🏦',
            description: 'Infrastructure spending is powered by actual profits, not just debt.',
            detail: 'Mega-caps have fortress balance sheets. Risk is localized to startups, not systemic to the broader market.'
        },
        {
            title: 'Verifiable Productivity',
            icon: '⚡',
            description: 'AI is yielding real productivity gains in specific applications.',
            detail: 'While aggregate ROI is low, successful AI implementations generate massive workflow efficiencies.'
        }
    ];

    const activeData = activeTab === 'for' ? evidenceFor : evidenceAgainst;

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '48px 24px',
            borderRadius: '20px',
            margin: '48px 0',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                <h3 style={{
                    color: '#f8fafc',
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: '800',
                    marginBottom: '16px',
                    letterSpacing: '-0.5px'
                }}>
                    The AI Bubble Debate: Evidence at a Glance
                </h3>
                <p style={{
                    color: 'var(--color-text-muted)',
                    textAlign: 'center',
                    fontSize: '16px',
                    marginBottom: '32px',
                    maxWidth: '600px',
                    margin: '0 auto 32px'
                }}>
                    The conversation is confused because evidence genuinely points in two directions simultaneously.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
                    <button
                        onClick={() => setActiveTab('for')}
                        style={{
                            padding: '14px 28px',
                            background: activeTab === 'for' ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(185, 28, 28, 0.1))' : 'rgba(30, 41, 59, 0.5)',
                            border: activeTab === 'for' ? '2px solid rgba(239, 68, 68, 0.5)' : '2px solid rgba(71, 85, 105, 0.3)',
                            color: activeTab === 'for' ? '#fca5a5' : 'var(--color-text-muted)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '15px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        💥 The Bubble Case
                    </button>
                    <button
                        onClick={() => setActiveTab('against')}
                        style={{
                            padding: '14px 28px',
                            background: activeTab === 'against' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(4, 120, 87, 0.1))' : 'rgba(30, 41, 59, 0.5)',
                            border: activeTab === 'against' ? '2px solid rgba(16, 185, 129, 0.5)' : '2px solid rgba(71, 85, 105, 0.3)',
                            color: activeTab === 'against' ? '#6ee7b7' : 'var(--color-text-muted)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '15px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        🛡️ The Counter-Case
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {activeData.map((item, i) => (
                        <div key={i} style={{
                            background: 'var(--color-surface)',
                            border: `1px solid ${activeTab === 'for' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                            borderRadius: '16px',
                            padding: '24px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            animation: `fadeInUp 0.4s ease forwards ${i * 0.1}s`,
                            opacity: 0,
                            transform: 'translateY(20px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = `0 10px 30px ${activeTab === 'for' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)'}`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                            <h4 style={{ 
                                color: activeTab === 'for' ? '#fca5a5' : '#6ee7b7', 
                                fontSize: '18px', 
                                fontWeight: '700', 
                                marginBottom: '12px' 
                            }}>
                                {item.title}
                            </h4>
                            <p style={{ color: 'var(--color-border)', fontSize: '14px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.5' }}>
                                {item.description}
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default BubbleEvidenceCards;
