'use client';
import React from 'react';

const SuccessStoriesCards: React.FC = () => {
    const stories = [
        {
            icon: '💼',
            before: 'Finance (Banking)',
            after: 'AI Integration Engineer',
            color: '#06b6d4',
            duration: '8 months self-study',
            path: 'Python → AI APIs → LangChain',
            project: 'AI document analyzer for contract review',
            outcome: '$105K at legal tech startup',
            degree: 'Finance degree'
        },
        {
            icon: '🎨',
            before: 'Graphic Designer',
            after: 'Prompt Engineer',
            color: '#a855f7',
            duration: '6 months focused study',
            path: 'Prompt engineering + AI art tools',
            project: '12 AI-powered design tools + technical blog',
            outcome: '$80/hr freelance + $3K MRR micro-SaaS',
            degree: 'Fine arts degree'
        },
        {
            icon: '🎓',
            before: 'Bootcamp Graduate',
            after: 'Junior AI Developer',
            color: '#10b981',
            duration: '4 months post-bootcamp',
            path: 'OpenAI API → Agents → RAG',
            project: 'AI customer support system (500+ GitHub stars)',
            outcome: '$95K + equity at YC startup',
            degree: '12-week coding bootcamp'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '48px 24px',
            borderRadius: '20px',
            margin: '48px 0',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                    color: '#e2e8f0',
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '-0.5px'
                }}>
                    Real Self-Taught Success Stories
                </h3>
                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '40px'
                }}>
                    No CS degree. No connections. Just strategic learning + real projects.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(15, 23, 42, 0.7)',
                                borderRadius: '16px',
                                padding: '28px',
                                border: `1px solid ${story.color}30`,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${story.color}70`;
                                e.currentTarget.style.boxShadow = `0 16px 48px ${story.color}20`;
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${story.color}30`;
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Top badge */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '20px'
                            }}>
                                <span style={{ fontSize: '32px' }}>{story.icon}</span>
                                <div style={{
                                    background: `${story.color}15`,
                                    color: story.color,
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    border: `1px solid ${story.color}30`,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {story.duration}
                                </div>
                            </div>

                            {/* Transition arrow */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '20px',
                                padding: '12px 16px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '10px'
                            }}>
                                <div style={{
                                    color: '#94a3b8',
                                    fontSize: '13px',
                                    fontWeight: '500'
                                }}>
                                    {story.before}
                                </div>
                                <div style={{
                                    color: story.color,
                                    fontSize: '18px',
                                    flexShrink: 0
                                }}>→</div>
                                <div style={{
                                    color: story.color,
                                    fontSize: '13px',
                                    fontWeight: '700'
                                }}>
                                    {story.after}
                                </div>
                            </div>

                            {/* Background */}
                            <div style={{ marginBottom: '12px' }}>
                                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                    Background
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '13px' }}>{story.degree}</div>
                            </div>

                            {/* Learning path */}
                            <div style={{ marginBottom: '12px' }}>
                                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                    Learning Path
                                </div>
                                <div style={{ color: '#cbd5e1', fontSize: '13px' }}>{story.path}</div>
                            </div>

                            {/* First project */}
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                    Breakout Project
                                </div>
                                <div style={{ color: '#cbd5e1', fontSize: '13px' }}>{story.project}</div>
                            </div>

                            {/* Outcome */}
                            <div style={{
                                background: `${story.color}10`,
                                borderRadius: '10px',
                                padding: '12px 16px',
                                border: `1px solid ${story.color}25`
                            }}>
                                <div style={{ color: story.color, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                    💰 Outcome
                                </div>
                                <div style={{
                                    color: '#f1f5f9',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    fontFamily: "'Space Mono', monospace"
                                }}>
                                    {story.outcome}
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, transparent, ${story.color}80, transparent)`
                            }} />
                        </div>
                    ))}
                </div>

                {/* Key insight */}
                <div style={{
                    marginTop: '32px',
                    padding: '18px 24px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '4px solid #818cf8',
                    borderRadius: '8px',
                    maxWidth: '1100px',
                    margin: '32px auto 0'
                }}>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        <strong style={{ color: '#c4b5fd' }}>The Pattern:</strong>{' '}
                        Strategic learning + real projects + public portfolio = job offers, <em>regardless of degree</em>.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default SuccessStoriesCards;
