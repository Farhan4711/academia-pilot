'use client';
import React from 'react';
import { TrendingUp, XOctagon, Beaker, PieChart } from 'lucide-react';

const AbandonmentStatsCards: React.FC = () => {
    const stats = [
        {
            value: "42%",
            label: "Initiative Abandonment",
            sub: "Up from 17% in 2024",
            source: "S&P Global Market Intelligence",
            icon: <XOctagon size={24} />,
            color: "#ef4444"
        },
        {
            value: "80%+",
            label: "Project Failure Rate",
            sub: "2x non-AI IT projects",
            source: "RAND Corporation Research",
            icon: <TrendingUp size={24} />,
            color: "#f59e0b"
        },
        {
            value: "95%",
            label: "Pilot ROI Failure",
            sub: "Failed to meet expected returns",
            source: "MIT Sloan Research",
            icon: <Beaker size={24} />,
            color: "#3b82f6"
        },
        {
            value: "40%+",
            label: "Project Cancellations",
            sub: "Predicted by end of 2027",
            source: "Gartner Research",
            icon: <PieChart size={24} />,
            color: "#8b5cf6"
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
        }}>
            {stats.map((stat, idx) => (
                <div key={idx} style={{
                    background: '#18181b',
                    padding: '24px',
                    borderRadius: '24px',
                    border: '1px solid #27272a',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'transform 0.2s ease-out',
                    cursor: 'default'
                }}>
                    <div style={{ 
                        padding: '12px', 
                        background: `${stat.color}15`, 
                        color: stat.color, 
                        borderRadius: '12px', 
                        width: 'fit-content' 
                    }}>
                        {stat.icon}
                    </div>
                    <div>
                        <div style={{ color: '#fafafa', fontSize: '32px', fontWeight: '900', marginBottom: '4px' }}>{stat.value}</div>
                        <div style={{ color: '#e4e4e7', fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>{stat.label}</div>
                        <div style={{ color: '#71717a', fontSize: '13px', lineHeight: '1.4' }}>{stat.sub}</div>
                    </div>
                    <div style={{ 
                        marginTop: 'auto', 
                        paddingTop: '16px', 
                        borderTop: '1px solid #27272a', 
                        fontSize: '11px', 
                        color: '#52525b', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Source: {stat.source}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AbandonmentStatsCards;
