'use client';
import React, { useState } from 'react';

const WorkflowComparison: React.FC = () => {
    const [activeWorkflow, setActiveWorkflow] = useState('both'); // 'traditional', 'agentic', or 'both'

    const traditionalSteps = [
        {
            stage: 'Idea & Planning',
            icon: '💡',
            description: 'Developer reads requirements, sketches architecture, mentally plans implementation',
            involvement: '100% Human',
            color: '#fbbf24'
        },
        {
            stage: 'Coding',
            icon: '⌨️',
            description: 'Developer opens IDE, writes code incrementally. Uses autocomplete but makes every decision',
            involvement: '100% Human',
            color: '#f59e0b'
        },
        {
            stage: 'Debugging',
            icon: '🐛',
            description: 'Developer runs code, sets breakpoints, inspects variables, identifies root cause, fixes',
            involvement: '100% Human',
            color: '#f97316'
        },
        {
            stage: 'Testing',
            icon: '✅',
            description: 'Developer writes unit tests manually, runs test suite, reviews failures, fixes code',
            involvement: '100% Human',
            color: '#fb923c'
        },
        {
            stage: 'Code Review',
            icon: '👀',
            description: 'Developer submits PR, human reviewer reads code, suggests changes, developer implements',
            involvement: '100% Human',
            color: '#fdba74'
        },
        {
            stage: 'Deployment',
            icon: '🚀',
            description: 'Developer merges PR, manually triggers CI/CD, monitors deployment, investigates failures',
            involvement: '100% Human',
            color: '#fed7aa'
        }
    ];

    const agenticSteps = [
        {
            stage: 'Goal Definition',
            icon: '🎯',
            description: 'Developer provides high-level goal: "Implement OAuth 2.0 with JWT and rate limiting"',
            involvement: '10% Human',
            color: '#34d399'
        },
        {
            stage: 'Autonomous Planning',
            icon: '🧠',
            description: 'AI decomposes into subtasks: schema, endpoints, JWT logic, rate limiter, tests',
            involvement: '0% Human',
            color: '#10b981'
        },
        {
            stage: 'Autonomous Coding',
            icon: '🤖',
            description: 'AI writes entire feature across backend, database, middleware, config — no human approval between files',
            involvement: '0% Human',
            color: '#059669'
        },
        {
            stage: 'Auto Testing & Debug',
            icon: '🔄',
            description: 'AI runs code, encounters errors, reads logs, fixes bugs, reruns until all tests pass',
            involvement: '0% Human',
            color: '#047857'
        },
        {
            stage: 'Human Review',
            icon: '👁️',
            description: 'Developer reviews completed feature, requests one change, AI implements autonomously',
            involvement: '15% Human',
            color: '#065f46'
        },
        {
            stage: 'Auto Deployment',
            icon: '✨',
            description: 'Developer approves. AI updates infra config, triggers pipeline, monitors health checks',
            involvement: '5% Human',
            color: '#064e3b'
        }
    ];

    const showTraditional = activeWorkflow === 'both' || activeWorkflow === 'traditional';
    const showAgentic = activeWorkflow === 'both' || activeWorkflow === 'agentic';

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
            {/* Animated background gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
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
                    Developer Workflow Transformation
                </h3>

                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '32px'
                }}>
                    Compare how the same feature is built in both paradigms
                </p>

                {/* View toggle */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '40px',
                    flexWrap: 'wrap'
                }}>
                    {['traditional', 'agentic', 'both'].map(view => (
                        <button
                            key={view}
                            onClick={() => setActiveWorkflow(view)}
                            style={{
                                padding: '12px 24px',
                                borderRadius: '8px',
                                border: activeWorkflow === view
                                    ? '2px solid rgba(99, 102, 241, 0.6)'
                                    : '2px solid rgba(71, 85, 105, 0.3)',
                                background: activeWorkflow === view
                                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%)'
                                    : 'rgba(30, 41, 59, 0.5)',
                                color: activeWorkflow === view ? '#c4b5fd' : '#94a3b8',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'capitalize',
                                backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeWorkflow !== view) {
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                    e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeWorkflow !== view) {
                                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                                    e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                                }
                            }}
                        >
                            {view === 'both' ? '⚡ Compare Both' : view === 'traditional' ? '🖥️ Traditional IDE' : '🤖 Agentic AI'}
                        </button>
                    ))}
                </div>

                {/* Workflow comparison grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: activeWorkflow === 'both' ? 'repeat(auto-fit, minmax(400px, 1fr))' : '1fr',
                    gap: '32px',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {/* Traditional Workflow */}
                    {showTraditional && (
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(249, 115, 22, 0.05) 100%)',
                            borderRadius: '16px',
                            padding: '32px 24px',
                            border: '2px solid rgba(251, 191, 36, 0.2)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '28px',
                                paddingBottom: '16px',
                                borderBottom: '2px solid rgba(251, 191, 36, 0.2)'
                            }}>
                                <span style={{ fontSize: '32px' }}>🖥️</span>
                                <div>
                                    <h4 style={{
                                        color: '#fbbf24',
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        margin: 0,
                                        letterSpacing: '-0.3px'
                                    }}>
                                        Traditional IDE Workflow
                                    </h4>
                                    <p style={{
                                        color: '#fcd34d',
                                        fontSize: '13px',
                                        margin: '4px 0 0 0',
                                        opacity: 0.8
                                    }}>
                                        Human-executed with AI assistance
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {traditionalSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: 'rgba(15, 23, 42, 0.6)',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            border: '1px solid rgba(251, 191, 36, 0.15)',
                                            position: 'relative',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateX(8px)';
                                            e.currentTarget.style.boxShadow = `0 8px 24px ${step.color}20`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {/* Step number */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '16px',
                                            background: step.color,
                                            color: '#0f172a',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            Step {index + 1}
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '16px',
                                            marginTop: '8px'
                                        }}>
                                            <span style={{ fontSize: '28px', lineHeight: 1 }}>{step.icon}</span>
                                            <div style={{ flex: 1 }}>
                                                <h5 style={{
                                                    color: '#fbbf24',
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    marginBottom: '8px'
                                                }}>
                                                    {step.stage}
                                                </h5>
                                                <p style={{
                                                    color: '#cbd5e1',
                                                    fontSize: '14px',
                                                    lineHeight: '1.6',
                                                    marginBottom: '12px'
                                                }}>
                                                    {step.description}
                                                </p>
                                                <div style={{
                                                    display: 'inline-block',
                                                    background: 'rgba(251, 191, 36, 0.15)',
                                                    color: '#fcd34d',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    padding: '4px 10px',
                                                    borderRadius: '6px',
                                                    border: '1px solid rgba(251, 191, 36, 0.3)'
                                                }}>
                                                    {step.involvement}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                marginTop: '24px',
                                padding: '16px',
                                background: 'rgba(251, 191, 36, 0.1)',
                                borderRadius: '8px',
                                border: '1px solid rgba(251, 191, 36, 0.2)'
                            }}>
                                <p style={{
                                    color: '#fcd34d',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    margin: 0,
                                    textAlign: 'center'
                                }}>
                                    Total Human Involvement: <span style={{ fontSize: '18px', fontWeight: '700' }}>100%</span> at every stage
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Agentic Workflow */}
                    {showAgentic && (
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.08) 0%, rgba(16, 185, 129, 0.05) 100%)',
                            borderRadius: '16px',
                            padding: '32px 24px',
                            border: '2px solid rgba(52, 211, 153, 0.2)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '28px',
                                paddingBottom: '16px',
                                borderBottom: '2px solid rgba(52, 211, 153, 0.2)'
                            }}>
                                <span style={{ fontSize: '32px' }}>🤖</span>
                                <div>
                                    <h4 style={{
                                        color: '#34d399',
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        margin: 0,
                                        letterSpacing: '-0.3px'
                                    }}>
                                        Agentic AI Workflow
                                    </h4>
                                    <p style={{
                                        color: '#6ee7b7',
                                        fontSize: '13px',
                                        margin: '4px 0 0 0',
                                        opacity: 0.8
                                    }}>
                                        AI-executed with human oversight
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {agenticSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: 'rgba(15, 23, 42, 0.6)',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            border: '1px solid rgba(52, 211, 153, 0.15)',
                                            position: 'relative',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateX(-8px)';
                                            e.currentTarget.style.boxShadow = `0 8px 24px ${step.color}20`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {/* Step number */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '16px',
                                            background: step.color,
                                            color: '#0f172a',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            Step {index + 1}
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '16px',
                                            marginTop: '8px'
                                        }}>
                                            <span style={{ fontSize: '28px', lineHeight: 1 }}>{step.icon}</span>
                                            <div style={{ flex: 1 }}>
                                                <h5 style={{
                                                    color: '#34d399',
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    marginBottom: '8px'
                                                }}>
                                                    {step.stage}
                                                </h5>
                                                <p style={{
                                                    color: '#cbd5e1',
                                                    fontSize: '14px',
                                                    lineHeight: '1.6',
                                                    marginBottom: '12px'
                                                }}>
                                                    {step.description}
                                                </p>
                                                <div style={{
                                                    display: 'inline-block',
                                                    background: step.involvement.includes('0%')
                                                        ? 'rgba(16, 185, 129, 0.15)'
                                                        : 'rgba(52, 211, 153, 0.2)',
                                                    color: step.involvement.includes('0%') ? '#6ee7b7' : '#34d399',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    padding: '4px 10px',
                                                    borderRadius: '6px',
                                                    border: `1px solid ${step.involvement.includes('0%') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(52, 211, 153, 0.3)'}`
                                                }}>
                                                    {step.involvement}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                marginTop: '24px',
                                padding: '16px',
                                background: 'rgba(52, 211, 153, 0.1)',
                                borderRadius: '8px',
                                border: '1px solid rgba(52, 211, 153, 0.2)'
                            }}>
                                <p style={{
                                    color: '#6ee7b7',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    margin: 0,
                                    textAlign: 'center'
                                }}>
                                    Total Human Involvement: <span style={{ fontSize: '18px', fontWeight: '700' }}>~30%</span> (goal setting, review, approval)
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Key transformation insight */}
                <div style={{
                    marginTop: '40px',
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                    borderRadius: '16px',
                    border: '2px solid rgba(99, 102, 241, 0.2)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h4 style={{
                        color: '#c4b5fd',
                        fontSize: '18px',
                        fontWeight: '700',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span style={{ fontSize: '24px' }}>⚡</span>
                        The Workflow Transformation
                    </h4>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        The IDE workflow is <strong style={{ color: '#fbbf24' }}>human-executed with AI assistance</strong>.
                        The agentic workflow is <strong style={{ color: '#34d399' }}>AI-executed with human oversight</strong>.
                        This is not an incremental productivity gain — it's a <strong style={{ color: '#c4b5fd' }}>role inversion</strong>.
                        The developer's job shifts from <em>implementing</em> to <em>directing</em>, from <em>executing</em> to <em>reviewing</em>,
                        from <em>writing code</em> to <em>ensuring AI-generated code meets strategic and architectural standards</em>.
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
}

export default WorkflowComparison;
