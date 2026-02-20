'use client';
import React from 'react';

const SalaryComparisonChart: React.FC = () => {
    const salaryRanges = [
        { label: 'Startups', range: '$95K–$115K', equity: '+ 0.1%–0.5% equity', min: 95, max: 115, color: '#34d399' },
        { label: 'Mid-Size Tech', range: '$110K–$130K', equity: '', min: 110, max: 130, color: '#06b6d4' },
        { label: 'FAANG / Big Tech', range: '$120K–$150K', equity: '+ stock & bonus', min: 120, max: 150, color: '#818cf8' },
        { label: 'Remote-First', range: '$100K–$125K', equity: '', min: 100, max: 125, color: '#8b5cf6' },
    ];

    const traditionalPath = [
        { title: 'Junior', years: 'Years 0–2', salary: '$70K–$90K', color: '#fbbf24' },
        { title: 'Mid-Level', years: 'Years 3–5', salary: '$110K–$140K', color: '#f59e0b' },
        { title: 'Senior', years: 'Years 6–8', salary: '$150K–$200K', color: '#f97316' },
    ];

    const aiPath = [
        { title: 'Junior AI Eng.', years: 'Years 0–1.5', salary: '$95K–$125K', color: '#34d399' },
        { title: 'Mid-Level AI', years: 'Years 2–3.5', salary: '$130K–$170K', color: '#10b981' },
        { title: 'Senior AI Eng.', years: 'Years 4–6', salary: '$180K–$250K', color: '#059669' },
    ];

    const stats = [
        { value: '180%', label: 'YoY Job Posting Growth', icon: '📈' },
        { value: '35%', label: 'Faster Time-to-Fill', icon: '⚡' },
        { value: '67%', label: 'Companies Struggling to Hire', icon: '🔍' },
    ];

    const maxSalary = 160;

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
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(52, 211, 153, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(129, 140, 248, 0.05) 0%, transparent 50%)',
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
                    Career Opportunities & Salary Outlook 2026
                </h3>
                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '40px'
                }}>
                    Entry-level AI Software Engineer compensation by company type
                </p>

                {/* Stats strip */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '40px',
                    maxWidth: '700px',
                    margin: '0 auto 40px'
                }}>
                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            padding: '20px 16px',
                            background: 'rgba(99, 102, 241, 0.06)',
                            borderRadius: '12px',
                            border: '1px solid rgba(99, 102, 241, 0.15)'
                        }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                            <div style={{
                                color: '#818cf8',
                                fontSize: '28px',
                                fontWeight: '800',
                                letterSpacing: '-1px',
                                marginBottom: '4px'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                color: '#64748b',
                                fontSize: '12px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Salary bar chart */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto 48px',
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '16px',
                    padding: '28px',
                    border: '1px solid rgba(71, 85, 105, 0.2)'
                }}>
                    <h4 style={{
                        color: '#34d399',
                        fontSize: '16px',
                        fontWeight: '700',
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        💰 Entry-Level Salary Ranges (United States, 2026)
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {salaryRanges.map((item, index) => (
                            <div key={index}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px'
                                }}>
                                    <span style={{
                                        color: '#e2e8f0',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>
                                        {item.label}
                                    </span>
                                    <span style={{
                                        color: item.color,
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        fontFamily: "'Space Mono', monospace"
                                    }}>
                                        {item.range} {item.equity && <span style={{ color: '#94a3b8', fontWeight: '400', fontSize: '12px' }}>{item.equity}</span>}
                                    </span>
                                </div>
                                {/* Bar */}
                                <div style={{
                                    position: 'relative',
                                    height: '28px',
                                    background: 'rgba(30, 41, 59, 0.6)',
                                    borderRadius: '6px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: `${(item.min / maxSalary) * 100}%`,
                                        width: `${((item.max - item.min) / maxSalary) * 100}%`,
                                        height: '100%',
                                        background: `linear-gradient(90deg, ${item.color}40, ${item.color}80)`,
                                        borderRadius: '6px',
                                        border: `1px solid ${item.color}60`,
                                        animation: `growBar 0.8s ease-out ${index * 0.15}s both`
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scale */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '12px',
                        paddingTop: '8px',
                        borderTop: '1px solid rgba(71, 85, 105, 0.2)'
                    }}>
                        {['$0', '$40K', '$80K', '$120K', '$160K'].map((label, i) => (
                            <span key={i} style={{
                                color: '#475569',
                                fontSize: '11px',
                                fontFamily: "'Space Mono', monospace"
                            }}>
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Career progression comparison */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h4 style={{
                        color: '#c4b5fd',
                        fontSize: '16px',
                        fontWeight: '700',
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textAlign: 'center'
                    }}>
                        ⚡ Career Progression: Traditional vs AI Path
                    </h4>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px'
                    }}>
                        {/* Traditional Path */}
                        <div style={{
                            background: 'rgba(251, 191, 36, 0.06)',
                            borderRadius: '16px',
                            padding: '24px',
                            border: '1px solid rgba(251, 191, 36, 0.2)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '20px',
                                paddingBottom: '12px',
                                borderBottom: '1px solid rgba(251, 191, 36, 0.15)'
                            }}>
                                <span style={{ fontSize: '20px' }}>🖥️</span>
                                <h5 style={{
                                    color: '#fbbf24',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    margin: 0
                                }}>
                                    Traditional Path
                                </h5>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {traditionalPath.map((step, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(15, 23, 42, 0.5)',
                                        borderRadius: '10px',
                                        padding: '14px 16px',
                                        borderLeft: `3px solid ${step.color}`
                                    }}>
                                        <div style={{
                                            color: step.color,
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            marginBottom: '4px'
                                        }}>
                                            {step.title}
                                        </div>
                                        <div style={{
                                            color: '#94a3b8',
                                            fontSize: '12px',
                                            marginBottom: '4px'
                                        }}>
                                            {step.years}
                                        </div>
                                        <div style={{
                                            color: '#cbd5e1',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            fontFamily: "'Space Mono', monospace"
                                        }}>
                                            {step.salary}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Path */}
                        <div style={{
                            background: 'rgba(52, 211, 153, 0.06)',
                            borderRadius: '16px',
                            padding: '24px',
                            border: '1px solid rgba(52, 211, 153, 0.2)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '20px',
                                paddingBottom: '12px',
                                borderBottom: '1px solid rgba(52, 211, 153, 0.15)'
                            }}>
                                <span style={{ fontSize: '20px' }}>🤖</span>
                                <h5 style={{
                                    color: '#34d399',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    margin: 0
                                }}>
                                    AI Engineer Path
                                </h5>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {aiPath.map((step, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(15, 23, 42, 0.5)',
                                        borderRadius: '10px',
                                        padding: '14px 16px',
                                        borderLeft: `3px solid ${step.color}`
                                    }}>
                                        <div style={{
                                            color: step.color,
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            marginBottom: '4px'
                                        }}>
                                            {step.title}
                                        </div>
                                        <div style={{
                                            color: '#94a3b8',
                                            fontSize: '12px',
                                            marginBottom: '4px'
                                        }}>
                                            {step.years}
                                        </div>
                                        <div style={{
                                            color: '#cbd5e1',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            fontFamily: "'Space Mono', monospace"
                                        }}>
                                            {step.salary}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key insight */}
                <div style={{
                    marginTop: '32px',
                    padding: '20px 24px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '4px solid #818cf8',
                    borderRadius: '8px',
                    maxWidth: '800px',
                    margin: '32px auto 0'
                }}>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        <strong style={{ color: '#c4b5fd', fontSize: '15px' }}>Compressed Timeline:</strong>{' '}
                        The AI path reaches Senior in <strong style={{ color: '#34d399' }}>4–6 years</strong> vs.{' '}
                        <strong style={{ color: '#fbbf24' }}>6–8 years</strong> on the traditional path — a{' '}
                        <strong style={{ color: '#818cf8' }}>30–40% acceleration</strong> driven by the productivity
                        multiplier of AI tools and agent orchestration skills.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes growBar {
                    from {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                    to {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
            `}</style>
        </div>
    );
}

export default SalaryComparisonChart;
