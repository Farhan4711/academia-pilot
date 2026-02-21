'use client';
import React from 'react';

const VibeToProductionRoadmap: React.FC = () => {
    const steps = [
        { title: 'Strategy', task: 'DNA & Constraints', color: '#818cf8', icon: '🎯' },
        { title: 'Build', task: 'System-wide Creation', color: '#3b82f6', icon: '🏗️' },
        { title: 'Polish', task: 'Visual Iteration Loop', color: '#10b981', icon: '✨' },
        { title: 'Launch', task: 'Senior-grade Deploy', color: '#f59e0b', icon: '🚀' },
    ];

    return (
        <div style={{
            margin: '48px 0',
            padding: '32px',
            background: 'linear-gradient(90deg, rgba(30,58,138,0.1) 0%, rgba(15,23,42,0.6) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(59,130,246,0.2)',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2px',
                background: 'rgba(255,255,255,0.05)',
                padding: '2px',
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                {steps.map((step, i) => (
                    <div key={i} style={{
                        background: '#0f172a',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{step.icon}</div>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: step.color, textTransform: 'uppercase', letterSpacing: '1px' }}>{step.title}</div>
                        <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>{step.task}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VibeToProductionRoadmap;
