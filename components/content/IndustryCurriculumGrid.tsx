'use client';
import React from 'react';

const tracks = [
    { name: 'Finance', icon: '📈', desc: 'DCF analysis, earnings calls, and compliance.' },
    { name: 'Healthcare', icon: '🏥', desc: 'Clinical research and admin automation.' },
    { name: 'HR', icon: '👥', desc: 'Talent lifecycle and employee communications.' },
    { name: 'Marketing', icon: '📣', desc: 'Content strategy and SEO-informed planning.' },
    { name: 'Sales', icon: '🤝', desc: 'Pipeline research and personalized outreach.' },
    { name: 'Nonprofits', icon: '🌱', desc: 'Impact reporting and mission-driven AI.' },
    { name: 'Life Sciences', icon: '🔬', desc: 'Regulatory preparation and scientist writing.' },
    { name: 'Engineering', icon: '⚙️', desc: 'Codebase mapping and multi-file agents.' }
];

const IndustryCurriculumGrid: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div className="grid grid-4" style={{ gap: 'var(--space-4)' }}>
                {tracks.map((track, i) => (
                    <div
                        key={i}
                        className="card transition"
                        style={{
                            padding: 'var(--space-4)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                            cursor: 'default'
                        }}
                    >
                        <div style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-1)' }}>{track.icon}</div>
                        <h5 style={{ margin: 0, fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)' }}>{track.name}</h5>
                        <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                            {track.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustryCurriculumGrid;
