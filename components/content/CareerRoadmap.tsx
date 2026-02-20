'use client';
import React from 'react';

const CareerRoadmap: React.FC = () => {
    const phases = [
        {
            period: 'Months 1–3',
            title: 'Programming Fundamentals + AI Basics',
            color: '#818cf8',
            icon: '📚',
            skills: [
                'Master Python or TypeScript',
                'HTTP, REST APIs, JSON, authentication',
                'Git, GitHub, Docker basics',
                'Build 2–3 CRUD applications'
            ],
            aiSkills: [
                'Complete Andrew Ng\'s ML course',
                'Understand LLMs conceptually',
                'Experiment with ChatGPT & Claude',
                'Read OpenAI & Anthropic API docs'
            ],
            project: 'Simple chatbot using OpenAI or Claude API with error handling'
        },
        {
            period: 'Months 4–6',
            title: 'AI API Integration + Prompt Engineering',
            color: '#6366f1',
            icon: '🔌',
            skills: [
                'Master OpenAI API: text gen, function calling, embeddings',
                'Learn Claude API: long-context, tool use',
                'Prompt engineering: system messages, few-shot, output formatting',
                'Vector databases: Pinecone or Chroma'
            ],
            aiSkills: [],
            project: 'RAG application: Document Q&A system, codebase search, or knowledge assistant'
        },
        {
            period: 'Months 7–9',
            title: 'Agentic AI + Advanced Workflows',
            color: '#8b5cf6',
            icon: '🤖',
            skills: [
                'Agent architectures: planning, execution, memory, feedback',
                'LangChain or LlamaIndex framework',
                'Tool calling and function chaining',
                'Multi-step autonomous workflows'
            ],
            aiSkills: [],
            project: 'AI agent that researches topics, generates code, or auto-reviews PRs'
        },
        {
            period: 'Months 10–12',
            title: 'AI System Design + Cloud Infrastructure',
            color: '#06b6d4',
            icon: '☁️',
            skills: [
                'Deploy to AWS (Lambda + Bedrock) or GCP (Cloud Run + Vertex)',
                'Serverless architecture for AI apps',
                'Managed vector databases',
                'Monitoring and cost alerts'
            ],
            aiSkills: [],
            project: 'Production-grade AI system with multi-model support and caching'
        },
        {
            period: 'Months 13–18',
            title: 'Specialization Track',
            color: '#10b981',
            icon: '🎯',
            skills: [
                'AI Agent Specialization — multi-agent systems',
                'AI Infrastructure — scalable deployments, model serving',
                'Domain-Specific AI — healthcare, finance, legal',
                'AI DevOps — AI-powered CI/CD, monitoring'
            ],
            aiSkills: [],
            project: 'Deep contribution to chosen specialization area'
        },
        {
            period: 'Months 19–24',
            title: 'Portfolio Refinement + Job Search',
            color: '#34d399',
            icon: '🚀',
            skills: [
                '1 complex AI agent system',
                '1 production-deployed AI app with real users',
                '1 open-source contribution to major AI tool',
                '1 technical blog post or video tutorial'
            ],
            aiSkills: [],
            project: 'Target AI-first startups, prepare for AI-specific technical interviews'
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
                background: 'radial-gradient(circle at 10% 20%, rgba(129, 140, 248, 0.06) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(52, 211, 153, 0.06) 0%, transparent 50%)',
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
                    AI Software Engineer Roadmap
                </h3>

                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '48px'
                }}>
                    12–24 month learning path from fundamentals to job-ready
                </p>

                {/* Timeline */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '24px',
                        top: '20px',
                        bottom: '20px',
                        width: '3px',
                        background: 'linear-gradient(180deg, #818cf8 0%, #6366f1 20%, #8b5cf6 40%, #06b6d4 55%, #10b981 75%, #34d399 100%)',
                        borderRadius: '2px',
                        opacity: 0.4
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {phases.map((phase, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    gap: '24px',
                                    alignItems: 'flex-start',
                                    animation: `slideInRight 0.5s ease-out ${index * 0.12}s both`
                                }}
                            >
                                {/* Timeline node */}
                                <div style={{
                                    flexShrink: 0,
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${phase.color}30, ${phase.color}10)`,
                                    border: `2px solid ${phase.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    boxShadow: `0 0 20px ${phase.color}30`,
                                    zIndex: 2
                                }}>
                                    {phase.icon}
                                </div>

                                {/* Card */}
                                <div
                                    style={{
                                        flex: 1,
                                        background: 'rgba(15, 23, 42, 0.6)',
                                        borderRadius: '16px',
                                        padding: '24px',
                                        border: `1px solid ${phase.color}25`,
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${phase.color}60`;
                                        e.currentTarget.style.boxShadow = `0 8px 32px ${phase.color}15`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${phase.color}25`;
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Period badge */}
                                    <div style={{
                                        display: 'inline-block',
                                        background: `${phase.color}20`,
                                        color: phase.color,
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        padding: '4px 14px',
                                        borderRadius: '20px',
                                        border: `1px solid ${phase.color}40`,
                                        marginBottom: '12px',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase'
                                    }}>
                                        {phase.period}
                                    </div>

                                    <h4 style={{
                                        color: '#f1f5f9',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        marginBottom: '16px',
                                        letterSpacing: '-0.3px'
                                    }}>
                                        {phase.title}
                                    </h4>

                                    {/* Skills grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: phase.aiSkills.length > 0 ? '1fr 1fr' : '1fr',
                                        gap: '16px',
                                        marginBottom: '16px'
                                    }}>
                                        <div>
                                            {phase.aiSkills.length > 0 && (
                                                <div style={{
                                                    color: '#94a3b8',
                                                    fontSize: '11px',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    marginBottom: '8px'
                                                }}>
                                                    Core Skills
                                                </div>
                                            )}
                                            {phase.skills.map((skill, i) => (
                                                <div key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '8px',
                                                    marginBottom: '6px',
                                                    color: '#cbd5e1',
                                                    fontSize: '13px',
                                                    lineHeight: '1.5'
                                                }}>
                                                    <span style={{ color: phase.color, fontSize: '10px', marginTop: '5px', flexShrink: 0 }}>●</span>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                        {phase.aiSkills.length > 0 && (
                                            <div>
                                                <div style={{
                                                    color: '#94a3b8',
                                                    fontSize: '11px',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    marginBottom: '8px'
                                                }}>
                                                    AI Skills
                                                </div>
                                                {phase.aiSkills.map((skill, i) => (
                                                    <div key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '8px',
                                                        marginBottom: '6px',
                                                        color: '#cbd5e1',
                                                        fontSize: '13px',
                                                        lineHeight: '1.5'
                                                    }}>
                                                        <span style={{ color: '#34d399', fontSize: '10px', marginTop: '5px', flexShrink: 0 }}>●</span>
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Project */}
                                    <div style={{
                                        background: `${phase.color}08`,
                                        borderRadius: '8px',
                                        padding: '12px 16px',
                                        border: `1px solid ${phase.color}20`
                                    }}>
                                        <div style={{
                                            color: phase.color,
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            marginBottom: '4px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            🎯 Project Goal
                                        </div>
                                        <p style={{
                                            color: '#94a3b8',
                                            fontSize: '13px',
                                            lineHeight: '1.5',
                                            margin: 0
                                        }}>
                                            {phase.project}
                                        </p>
                                    </div>

                                    {/* Bottom accent */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${phase.color}60, transparent)`,
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key insight */}
                <div style={{
                    marginTop: '40px',
                    padding: '20px 24px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '4px solid #818cf8',
                    borderRadius: '8px',
                    maxWidth: '900px',
                    margin: '40px auto 0'
                }}>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        <strong style={{ color: '#c4b5fd', fontSize: '15px' }}>Key Insight:</strong>{' '}
                        The roadmap is designed so each phase builds on the previous one. By Month 12, you&rsquo;ll have
                        the skills that 90% of bootcamp graduates <em>won&rsquo;t have until 2028</em>. Early adopters
                        capture disproportionate career value.
                    </p>
                </div>
            </div>

            <style>{`
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

export default CareerRoadmap;
