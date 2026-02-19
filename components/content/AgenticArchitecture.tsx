'use client';
import React from 'react';

const AgenticArchitecture: React.FC = () => {
    const components = [
        {
            id: 'developer',
            title: 'Developer Interface',
            subtitle: 'Natural Language Goals',
            color: '#818cf8',
            icon: '👤',
            description: 'High-level goal specification'
        },
        {
            id: 'planning',
            title: 'Planning Module',
            subtitle: 'Goal Decomposition',
            color: '#f59e0b',
            icon: '🎯',
            description: 'Decomposes goals into subtasks and orders by dependency'
        },
        {
            id: 'llm',
            title: 'LLM Core',
            subtitle: 'Reasoning Engine',
            color: '#8b5cf6',
            icon: '🧠',
            description: 'Generates code, analyzes errors, plans next actions'
        },
        {
            id: 'memory',
            title: 'Memory Layer',
            subtitle: 'Context Persistence',
            color: '#06b6d4',
            icon: '💾',
            description: 'Episodic, semantic, and working memory'
        },
        {
            id: 'tools',
            title: 'Tool Integration',
            subtitle: 'System Access',
            color: '#10b981',
            icon: '🔧',
            description: 'File system, shell, Git, cloud APIs, databases'
        },
        {
            id: 'execution',
            title: 'Execution Environment',
            subtitle: 'Sandboxed Container',
            color: '#ec4899',
            icon: '🐳',
            description: 'Runs code, captures output, returns feedback'
        },
        {
            id: 'feedback',
            title: 'Feedback Controller',
            subtitle: 'Iterative Loop',
            color: '#f97316',
            icon: '🔄',
            description: 'Parse results, determine next action, iterate'
        },
        {
            id: 'security',
            title: 'Security Boundary',
            subtitle: 'Protection Layer',
            color: '#ef4444',
            icon: '🛡️',
            description: 'Resource limits, approval gates, data masking'
        }
    ];

    const connections = [
        { from: 'developer', to: 'planning' },
        { from: 'planning', to: 'llm' },
        { from: 'llm', to: 'memory' },
        { from: 'llm', to: 'tools' },
        { from: 'tools', to: 'execution' },
        { from: 'execution', to: 'feedback' },
        { from: 'feedback', to: 'llm' },
        { from: 'feedback', to: 'security' }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
            padding: '48px 24px',
            borderRadius: '20px',
            margin: '48px 0',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background grid pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
        `,
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                    color: '#c4b5fd',
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '-0.5px',
                    textShadow: '0 0 30px rgba(196, 181, 253, 0.4)'
                }}>
                    Technical Architecture of Agentic Coding Systems
                </h3>

                <p style={{
                    color: '#a78bfa',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '48px',
                    opacity: 0.8
                }}>
                    7-Component Autonomous Development System
                </p>

                {/* Architecture diagram */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {components.map((component, index) => (
                        <div
                            key={component.id}
                            style={{
                                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(49, 46, 129, 0.6) 100%)',
                                border: `2px solid ${component.color}40`,
                                borderRadius: '16px',
                                padding: '24px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                e.currentTarget.style.borderColor = component.color;
                                e.currentTarget.style.boxShadow = `0 20px 40px ${component.color}30, 0 0 0 1px ${component.color}40`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = `${component.color}40`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Corner accent */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '80px',
                                height: '80px',
                                background: `linear-gradient(135deg, transparent 50%, ${component.color}15 50%)`,
                                borderBottomLeftRadius: '100%'
                            }} />

                            {/* Icon */}
                            <div style={{
                                fontSize: '36px',
                                marginBottom: '16px',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                            }}>
                                {component.icon}
                            </div>

                            {/* Title */}
                            <h4 style={{
                                color: component.color,
                                fontSize: '18px',
                                fontWeight: '700',
                                marginBottom: '6px',
                                letterSpacing: '-0.3px'
                            }}>
                                {component.title}
                            </h4>

                            {/* Subtitle */}
                            <div style={{
                                color: '#94a3b8',
                                fontSize: '13px',
                                fontWeight: '600',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                opacity: 0.7
                            }}>
                                {component.subtitle}
                            </div>

                            {/* Description */}
                            <p style={{
                                color: '#cbd5e1',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                {component.description}
                            </p>

                            {/* Bottom accent line */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${component.color}00 0%, ${component.color} 50%, ${component.color}00 100%)`,
                                opacity: 0.6
                            }} />
                        </div>
                    ))}
                </div>

                {/* Flow description */}
                <div style={{
                    marginTop: '48px',
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h4 style={{
                        color: '#c4b5fd',
                        fontSize: '16px',
                        fontWeight: '700',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ fontSize: '20px' }}>🔄</span>
                        Autonomous Execution Flow
                    </h4>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px',
                        color: '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.7'
                    }}>
                        <div>
                            <strong style={{ color: '#818cf8' }}>1. Goal Input</strong><br />
                            Developer provides high-level specification
                        </div>
                        <div>
                            <strong style={{ color: '#f59e0b' }}>2. Planning</strong><br />
                            System decomposes into executable subtasks
                        </div>
                        <div>
                            <strong style={{ color: '#8b5cf6' }}>3. Generation</strong><br />
                            LLM writes code using context & memory
                        </div>
                        <div>
                            <strong style={{ color: '#10b981' }}>4. Execution</strong><br />
                            Code runs in sandboxed environment
                        </div>
                        <div>
                            <strong style={{ color: '#f97316' }}>5. Feedback</strong><br />
                            Results analyzed, errors corrected
                        </div>
                        <div>
                            <strong style={{ color: '#ef4444' }}>6. Security Check</strong><br />
                            Validation before deployment
                        </div>
                    </div>
                </div>

                {/* Key insight */}
                <div style={{
                    marginTop: '32px',
                    padding: '20px 24px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '4px solid #818cf8',
                    borderRadius: '8px'
                }}>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        <strong style={{ color: '#c4b5fd', fontSize: '15px' }}>Architectural Insight:</strong>{' '}
                        Notice what's missing from this architecture — there is no "IDE component."
                        The agent operates at a lower level, directly manipulating files and executing commands.
                        An IDE optimized for human interaction would add latency and friction to this autonomous feedback loop.
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}

export default AgenticArchitecture;
