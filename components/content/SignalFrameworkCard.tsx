'use client';
import React, { useState } from 'react';

const SignalFrameworkCard: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const signals = [
        {
            letter: 'S',
            title: 'Sustainable Revenue',
            short: 'Revenue not dependent on bubble.',
            full: 'Survivors have revenue that does not depend on the bubble continuing. NVIDIA\'s GPU sales are driven by real demand from cloud providers and enterprises — not by speculative expansion. Application startups relying on pilot enterprise budgets are at high risk.',
            color: '#10b981'
        },
        {
            letter: 'I',
            title: 'Infrastructure Position',
            short: 'Physical & hard-to-displace assets.',
            full: 'The companies with physical infrastructure are harder to displace. Data center operators, chip manufacturers, and cloud providers have structural advantages. AI ideological overlays (like AI IDEs) have low marginal costs, meaning they survive funding compression better than API startups.',
            color: '#3b82f6'
        },
        {
            letter: 'G',
            title: 'Growth That\'s Real',
            short: 'Measured vs projected growth.',
            full: 'The distinction between measured growth and projected growth is the most important signal. Anthropic tripling revenue from 2025 to 2026 is measured growth. A startup projecting a 10× ARR jump based on enterprise adoption that has not materialized is projected growth.',
            color: '#8b5cf6'
        },
        {
            letter: 'N',
            title: 'Net Margin',
            short: 'Profit generation capability.',
            full: 'NVIDIA\'s 53% net margin is the clearest signal its valuation has a real earnings foundation. Negative margins funded by debt or circular investment have the weakest foundation. The correction will be sharpest where the gap between valuation and margin is widest.',
            color: '#f59e0b'
        },
        {
            letter: 'A',
            title: 'Audience Retention',
            short: 'High switching costs & habituation.',
            full: 'Products with high retention are harder to lose. A developer entirely migrated to Cursor or Claude Code has high switching costs. An enterprise AI contract for a failed ROI experiment has zero retention.',
            color: '#ec4899'
        },
        {
            letter: 'L',
            title: 'Long-Term Lock-In',
            short: 'Data, workflow & ecosystem.',
            full: 'Data, workflow, and ecosystem lock-in determine survival. GitHub Copilot, Supabase, and established cloud APIs have deep data integrations. Pure-play chat interfaces lack this structural protection and face extreme churn risk.',
            color: '#ef4444'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(16px)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span style={{ 
                    display: 'inline-block', 
                    padding: '6px 16px', 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    color: '#818cf8', 
                    borderRadius: '20px', 
                    fontSize: '14px', 
                    fontWeight: '700', 
                    marginBottom: '16px',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                }}>
                    Survival Framework
                </span>
                <h3 style={{
                    color: '#f8fafc',
                    fontSize: '28px',
                    fontWeight: '800',
                    margin: '0 0 12px 0'
                }}>
                    The SIGNAL Framework
                </h3>
                <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
                    How to identify which AI companies will survive a market correction based on dot-com survivor patterns.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
                {/* Letters Navigation */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    gap: '8px', 
                    overflowX: 'auto',
                    paddingBottom: '8px'
                }}>
                    {signals.map((signal, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                flex: 1,
                                padding: '16px 8px',
                                background: activeIndex === idx ? `${signal.color}20` : 'rgba(30, 41, 59, 0.5)',
                                border: `1px solid ${activeIndex === idx ? signal.color : 'rgba(71, 85, 105, 0.4)'}`,
                                borderRadius: '16px',
                                color: activeIndex === idx ? signal.color : '#64748b',
                                fontSize: '24px',
                                fontWeight: '900',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: activeIndex === idx ? 'translateY(-4px)' : 'none',
                                boxShadow: activeIndex === idx ? `0 10px 20px ${signal.color}20` : 'none',
                                minWidth: '60px'
                            }}
                            onMouseEnter={e => {
                                if(activeIndex !== idx) {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.borderColor = signal.color;
                                    e.currentTarget.style.color = signal.color;
                                }
                            }}
                            onMouseLeave={e => {
                                if(activeIndex !== idx) {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)';
                                    e.currentTarget.style.color = '#64748b';
                                }
                            }}
                        >
                            {signal.letter}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    border: `1px solid ${signals[activeIndex].color}40`,
                    borderRadius: '20px',
                    padding: '32px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    minHeight: '220px'
                }}>
                    {/* Background glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        background: signals[activeIndex].color,
                        filter: 'blur(80px)',
                        opacity: 0.15,
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    <h4 style={{ 
                        margin: 0, 
                        color: '#f8fafc', 
                        fontSize: '24px', 
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span style={{ color: signals[activeIndex].color }}>{signals[activeIndex].letter}.</span> 
                        {signals[activeIndex].title}
                    </h4>
                    
                    <div style={{ 
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: `${signals[activeIndex].color}15`,
                        color: signals[activeIndex].color,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        alignSelf: 'flex-start',
                        border: `1px solid ${signals[activeIndex].color}30`
                    }}>
                        {signals[activeIndex].short}
                    </div>

                    <p style={{ 
                        color: '#cbd5e1', 
                        fontSize: '16px', 
                        lineHeight: '1.7', 
                        margin: 0,
                        animation: 'fadeIn 0.5s ease',
                        position: 'relative',
                        zIndex: 1
                    }} key={activeIndex /* Force re-render for animation */}>
                        {signals[activeIndex].full}
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SignalFrameworkCard;
