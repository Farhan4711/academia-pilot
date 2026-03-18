'use client';
import React from 'react';

const BubbleTimeline: React.FC = () => {
    const events = [
        { date: 'Nov 2022', title: 'The ChatGPT Ignition', desc: 'ChatGPT public launch accelerates AI investment wave from trend to frenzy.', color: '#3b82f6' },
        { date: '2023', title: 'Valuation Explosion', desc: 'OpenAI raises at $86B. End-user growth replaces revenue as primary valuation driver.', color: '#8b5cf6' },
        { date: '2024', title: 'Infrastructure Arms Race', desc: 'Big Tech collectively commits $200B+ to AI data center build-outs.', color: '#ec4899' },
        { date: 'Jan 2025', title: 'The DeepSeek Shock', desc: 'Cheap frontier AI proves achievable. NVIDIA shares drop 17% in a single day.', color: '#ef4444' },
        { date: 'Mid-2025', title: 'ROI Reality Check', desc: 'MIT reports 95% of enterprise GenAI generating zero return.', color: '#f59e0b' },
        { date: 'Sep 2025', title: 'The Oracle Warning', desc: 'Oracle loses $80B in market cap following a major AI capex bond sale.', color: '#eab308' },
        { date: 'Late 2025', title: 'Concentration Peaks', desc: 'Top 5 companies make up 30% of S&P 500 — highest concentration in 50 years.', color: '#10b981' },
        { date: 'Jan 2026', title: 'MIT Sloan Call', desc: 'MIT officially names AI Bubble the #1 enterprise issue for 2026.', color: '#0ea5e9' },
        { date: 'Feb-Mar 2026', title: 'Layoff Wave Accelerates', desc: '30,000+ employees impacted by AI-attributed restructuring across industries.', color: '#6366f1' },
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(to bottom, #0f172a, #020617)',
            padding: '48px 24px',
            borderRadius: '20px',
            margin: '48px 0',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative'
        }}>
            <h3 style={{
                color: 'var(--color-text-primary)',
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '40px'
            }}>How the AI Bubble Built</h3>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '20px',
                    bottom: '20px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #3b82f6, #6366f1)',
                    opacity: 0.3
                }} />

                {events.map((evt, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '24px',
                        marginBottom: '32px',
                        position: 'relative'
                    }}>
                        <div style={{
                            minWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: evt.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 0 20px ${evt.color}60`,
                            zIndex: 2,
                            border: '4px solid #0f172a'
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-text-primary)' }} />
                        </div>
                        
                        <div style={{
                            background: 'var(--color-surface)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '20px',
                            borderRadius: '12px',
                            flex: 1,
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                            <div style={{ color: evt.color, fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>
                                {evt.date}
                            </div>
                            <h4 style={{ color: 'var(--color-text-primary)', fontSize: '18px', margin: '0 0 8px 0' }}>{evt.title}</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{evt.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BubbleTimeline;
