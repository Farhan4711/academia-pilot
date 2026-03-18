'use client';
import React from 'react';

const VelocityCollapseTimeline: React.FC = () => {
    const timeline = [
        {
            month: 'Months 1-2',
            title: 'The Productivity Illusion',
            color: '#34d399',
            metrics: ['Feature Velocity: 3-4x Higher', 'Refactoring Rate: < 10%'],
            description: 'Ship time drops from weeks to hours. Developers trust AI implicitly. The code looks clean, but the Cumulative Refactor Deficit (CRD) rises. Duplicate functions spread across files as context limits hide holistic architecture.',
            icon: '🚀'
        },
        {
            month: 'Month 3',
            title: 'The Spaghetti Point',
            color: '#f59e0b',
            metrics: ['Duplicate Code: 8x Higher', 'Code Churn: +44%'],
            description: 'Adding new features breaks existing ones. The AI agent loses its ability to safely mutate shared logic because the same function is copied variations heavily. Fixing bugs introduces regression. Feature velocity drops sharply.',
            icon: '🍝'
        },
        {
            month: 'Month 6',
            title: 'The Six-Month Wall',
            color: '#ef4444',
            metrics: ['Velocity: Approaching Zero', 'Mental Model: Lost'],
            description: 'The codebase becomes unmaintainable. Architectural tracking is completely lost, and "illusion of correctness" means diagnosis takes days. The developer is an operator, not an owner. A "rewrite vs fix" decision is enforced.',
            icon: '🧱'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'var(--color-surface)',
            padding: '48px 32px',
            borderRadius: '20px',
            margin: '48px 0',
            border: '1px solid rgba(99, 102, 241, 0.2)'
        }}>
            <h3 style={{
                color: 'var(--color-text-primary)',
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: '800',
                marginBottom: '40px'
            }}>
                The Velocity Collapse Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
                {/* Vertical connecting line */}
                <div style={{
                    position: 'absolute',
                    left: '28px',
                    top: '24px',
                    bottom: '24px',
                    width: '4px',
                    background: 'linear-gradient(to bottom, #34d399, #f59e0b, #ef4444)',
                    borderRadius: '2px',
                    zIndex: 1
                }} />

                {timeline.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {/* Timeline node */}
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            flexShrink: 0,
                            boxShadow: `0 0 20px ${item.color}60`,
                            border: '4px solid #111827'
                        }}>
                            {item.icon}
                        </div>

                        {/* Content box */}
                        <div style={{
                            background: 'rgba(31, 41, 55, 0.6)',
                            padding: '24px',
                            borderRadius: '12px',
                            flex: 1,
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                                <div>
                                    <span style={{ color: item.color, fontSize: '14px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        {item.month}
                                    </span>
                                    <h4 style={{ color: '#f9fafb', fontSize: '20px', fontWeight: '700', margin: '4px 0 0 0' }}>
                                        {item.title}
                                    </h4>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {item.metrics.map((metric, i) => (
                                        <span key={i} style={{
                                            background: 'rgba(0,0,0,0.3)',
                                            color: '#d1d5db',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            fontSize: '12px',
                                            fontWeight: '600'
                                        }}>
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VelocityCollapseTimeline;
