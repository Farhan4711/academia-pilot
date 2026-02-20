'use client';
import React from 'react';

const CareerPathsGrid: React.FC = () => {
    const paths = [
        {
            title: 'AI Integration Engineer',
            icon: '🔌',
            color: '#06b6d4',
            what: 'Integrate AI APIs into existing products',
            skills: ['API integration', 'Prompt engineering', 'System design'],
            salary: '$85K–$110K',
            where: 'SaaS companies, agencies, consulting firms',
            why: 'Requires practical engineering skills, not research background. High demand in 2026.'
        },
        {
            title: 'Prompt Engineer',
            icon: '✍️',
            color: '#a855f7',
            what: 'Design prompts, build AI-powered features, optimize AI performance',
            skills: ['Prompt engineering', 'AI APIs', 'Frontend development'],
            salary: '$75K–$105K',
            where: 'Marketing agencies, content platforms, productivity tools',
            why: 'Newer role with lower barriers to entry. Portfolio demonstrates capability directly.'
        },
        {
            title: 'AI Automation Specialist',
            icon: '⚙️',
            color: '#10b981',
            what: 'Build AI agents that automate business processes',
            skills: ['Agents', 'LangChain', 'Workflow design', 'AI APIs'],
            salary: '$80K–$115K',
            where: 'Operations teams, logistics, customer service platforms',
            why: 'Businesses desperately need automation. Demonstrable ROI makes hiring decisions easier.'
        },
        {
            title: 'AI SaaS Builder',
            icon: '🚀',
            color: '#f59e0b',
            what: 'Build and sell micro-SaaS products powered by AI',
            skills: ['Full-stack dev', 'AI integration', 'Marketing'],
            salary: '$0–$200K+',
            where: 'You are the company — indie hacker route',
            why: 'Low barrier to entry. Ship fast, iterate, find product-market fit.'
        },
        {
            title: 'AI Freelancer',
            icon: '💼',
            color: '#ef4444',
            what: 'Build custom AI solutions for clients',
            skills: ['Client communication', 'Scoping', 'AI integration', 'Deployment'],
            salary: '$60–$150/hr',
            where: 'Upwork, Contra, direct outreach, referrals',
            why: 'Companies need AI help but can\'t afford full-time engineers. Freelancers fill the gap.'
        },
        {
            title: 'Junior AI Developer',
            icon: '👨‍💻',
            color: '#818cf8',
            what: 'Join an AI-first company as a junior engineer',
            skills: ['Python', 'AI APIs', 'System design', 'Team collaboration'],
            salary: '$90K–$120K',
            where: 'AI startups, tech companies with AI teams',
            why: 'Startups value demonstrated ability over credentials. Portfolio + cultural fit = job offer.'
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
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(129, 140, 248, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(52, 211, 153, 0.05) 0%, transparent 50%)',
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
                    Career Paths for Self-Taught AI Developers
                </h3>
                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '40px'
                }}>
                    6 realistic, accessible paths — no CS degree required
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '20px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {paths.map((path, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(15, 23, 42, 0.7)',
                                borderRadius: '16px',
                                padding: '24px',
                                border: `1px solid ${path.color}25`,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${path.color}60`;
                                e.currentTarget.style.boxShadow = `0 12px 40px ${path.color}15`;
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${path.color}25`;
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '28px' }}>{path.icon}</span>
                                    <h4 style={{ color: path.color, fontSize: '17px', fontWeight: '700', margin: 0 }}>{path.title}</h4>
                                </div>
                                <div style={{
                                    background: `${path.color}15`,
                                    color: path.color,
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    padding: '4px 14px',
                                    borderRadius: '20px',
                                    border: `1px solid ${path.color}30`,
                                    fontFamily: "'Space Mono', monospace",
                                    whiteSpace: 'nowrap'
                                }}>
                                    {path.salary}
                                </div>
                            </div>

                            {/* What you do */}
                            <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                                {path.what}
                            </p>

                            {/* Skills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                                {path.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(71, 85, 105, 0.3)',
                                        color: '#94a3b8',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        padding: '3px 10px',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(71, 85, 105, 0.3)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Where */}
                            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                                <strong style={{ color: '#94a3b8' }}>Where:</strong> {path.where}
                            </div>

                            {/* Why accessible */}
                            <div style={{
                                background: `${path.color}08`,
                                borderRadius: '8px',
                                padding: '10px 14px',
                                borderLeft: `3px solid ${path.color}50`
                            }}>
                                <div style={{ color: path.color, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                                    Why It&apos;s Accessible
                                </div>
                                <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>{path.why}</p>
                            </div>

                            <div style={{
                                position: 'absolute',
                                bottom: 0, left: 0, right: 0, height: '2px',
                                background: `linear-gradient(90deg, transparent, ${path.color}60, transparent)`
                            }} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default CareerPathsGrid;
