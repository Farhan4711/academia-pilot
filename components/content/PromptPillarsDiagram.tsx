'use client';
import React from 'react';

const PromptPillarsDiagram: React.FC = () => {
    const pillars = [
        { title: '1. Role', desc: 'Who the AI is', icon: '🎭', color: '#8b5cf6' },
        { title: '2. Objective', desc: 'The specific output', icon: '🎯', color: '#ec4899' },
        { title: '3. Context', desc: 'What it cannot infer', icon: '🧠', color: '#3b82f6' },
        { title: '4. Structure', desc: 'How to present it', icon: '🏗️', color: '#10b981' },
        { title: '5. Optimization', desc: 'Tone, constraints, gaps', icon: '✨', color: '#f59e0b' }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h3 style={{
                color: '#c4b5fd',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '40px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>The 5 Pillars of the Perfect Prompt</h3>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                width: '100%'
            }}>
                {pillars.map((pillar, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: '1 1 180px',
                        maxWidth: '220px',
                        padding: '24px 16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderTop: `3px solid ${pillar.color}`,
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            fontSize: '32px',
                            marginBottom: '12px',
                            background: `rgba(${parseInt(pillar.color.slice(1, 3), 16)}, ${parseInt(pillar.color.slice(3, 5), 16)}, ${parseInt(pillar.color.slice(5, 7), 16)}, 0.1)`,
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%'
                        }}>
                            {pillar.icon}
                        </div>
                        <h4 style={{ color: '#e2e8f0', fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0', textAlign: 'center' }}>{pillar.title}</h4>
                        <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, textAlign: 'center', lineHeight: '1.4' }}>{pillar.desc}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '32px', padding: '16px 24px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', borderLeft: '4px solid #38bdf8' }}>
                <p style={{ color: '#bae6fd', fontSize: '14px', margin: 0, fontWeight: '500' }}>
                    <strong>The Rule:</strong> Missing any one of these pillars leaves output quality to chance. Master all five for professional-grade orchestration.
                </p>
            </div>
        </div>
    );
};

export default PromptPillarsDiagram;
