'use client';
import React from 'react';

const AestheticDirectionsGrid: React.FC = () => {
    const directions = [
        { title: 'Neo-brutalist', desc: 'High contrast, geometric, sharp borders.', icon: '📐', color: '#818cf8' },
        { title: 'Refined Minimalist', desc: 'Negative space, subtle micro-interactions.', icon: '🌑', color: 'var(--color-text-muted)' },
        { title: 'Editorial', desc: 'Oversized typography, text-driven hierarchy.', icon: '📰', color: '#f59e0b' },
        { title: 'Industrial', desc: 'Grid overlays, technical data decoration.', icon: '🔧', color: '#10b981' },
    ];

    return (
        <div style={{
            margin: '40px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            fontFamily: "'Inter', sans-serif"
        }}>
            {directions.map((dir, i) => (
                <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>{dir.icon}</div>
                    <h4 style={{ color: dir.color, margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700' }}>{dir.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{dir.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default AestheticDirectionsGrid;
