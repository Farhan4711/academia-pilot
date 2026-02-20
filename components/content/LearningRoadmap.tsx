'use client';
import React from 'react';

const LearningRoadmap: React.FC = () => {
    const phases = [
        {
            period: 'Months 1–2',
            title: 'Programming Foundations',
            color: '#818cf8',
            icon: '📚',
            skills: [
                'Python: variables, functions, loops, error handling',
                'Lists, dictionaries, file I/O, JSON',
                'HTTP requests and REST APIs',
                'Virtual environments and pip'
            ],
            resources: [
                'Python Crash Course (Eric Matthes)',
                'Automate the Boring Stuff (free)',
                'CS50 Python (Harvard, free on edX)'
            ],
            project: 'Command-line tool that calls a REST API (weather app or URL shortener)',
            milestone: 'Comfortable with Python, Git, APIs. One deployed project.'
        },
        {
            period: 'Months 3–4',
            title: 'AI Fundamentals',
            color: '#06b6d4',
            icon: '🧠',
            skills: [
                'AI vs ML vs Deep Learning (conceptual)',
                'How LLMs work (tokens, context, inference)',
                'Embeddings and vector representations',
                'NLP basics: tokenization, attention'
            ],
            resources: [
                '3Blue1Brown Neural Networks (YouTube, free)',
                'Andrew Ng ML Specialization (Coursera, audit free)',
                'Hugging Face NLP Course (free)'
            ],
            project: 'Experiment with ChatGPT, Claude, Gemini APIs — make first API call',
            milestone: 'Understand AI conceptually. Can read API documentation.'
        },
        {
            period: 'Months 5–8',
            title: 'Practical AI Skills',
            color: '#8b5cf6',
            icon: '⚡',
            skills: [
                'OpenAI & Claude API integration (text gen, embeddings)',
                'Prompt engineering: system messages, few-shot, CoT',
                'AI Agents: planning, execution, memory, tools',
                'Vector databases: Pinecone, Chroma',
                'RAG systems and AI system architecture'
            ],
            resources: [
                'OpenAI API Docs + Anthropic Cookbook',
                'LangChain Documentation & Tutorials',
                'Full Stack Deep Learning (YouTube, free)'
            ],
            project: 'Document Q&A (RAG) system + autonomous research agent',
            milestone: 'Can build production AI features from scratch in under a week.'
        },
        {
            period: 'Months 9–12',
            title: 'Build Real Projects & Portfolio',
            color: '#34d399',
            icon: '🚀',
            skills: [
                'AI-powered SaaS micro-tool (deployed, live)',
                'Multi-step AI agent system with memory',
                'Open-source contribution or custom AI tool',
                'Technical blog posts explaining projects'
            ],
            resources: [
                'Ship on Vercel / Railway / Replit',
                'Product Hunt, Hacker News for launches',
                'LangChain / Hugging Face for contributions'
            ],
            project: '3–4 portfolio projects with live demos + blog posts',
            milestone: 'Job-ready. Competitive for $80K–$120K junior AI roles.'
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
                    Self-Taught AI Developer Roadmap
                </h3>
                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '48px'
                }}>
                    Zero to job-ready in 12 months — no degree required
                </p>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '24px',
                        top: '20px',
                        bottom: '20px',
                        width: '3px',
                        background: 'linear-gradient(180deg, #818cf8 0%, #06b6d4 33%, #8b5cf6 66%, #34d399 100%)',
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
                                    animation: `slideIn 0.5s ease-out ${index * 0.12}s both`
                                }}
                            >
                                {/* Node */}
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

                                    {/* Two columns: Skills + Resources */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginBottom: '16px'
                                    }}>
                                        <div>
                                            <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                                What to Learn
                                            </div>
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
                                        <div>
                                            <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                                📖 Resources
                                            </div>
                                            {phase.resources.map((res, i) => (
                                                <div key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '8px',
                                                    marginBottom: '6px',
                                                    color: '#94a3b8',
                                                    fontSize: '12px',
                                                    lineHeight: '1.5'
                                                }}>
                                                    <span style={{ color: '#64748b', fontSize: '10px', marginTop: '5px', flexShrink: 0 }}>▸</span>
                                                    {res}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project + Milestone */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px'
                                    }}>
                                        <div style={{
                                            background: `${phase.color}08`,
                                            borderRadius: '8px',
                                            padding: '12px 14px',
                                            border: `1px solid ${phase.color}20`
                                        }}>
                                            <div style={{ color: phase.color, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                                🎯 Project
                                            </div>
                                            <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>{phase.project}</p>
                                        </div>
                                        <div style={{
                                            background: 'rgba(52, 211, 153, 0.06)',
                                            borderRadius: '8px',
                                            padding: '12px 14px',
                                            border: '1px solid rgba(52, 211, 153, 0.15)'
                                        }}>
                                            <div style={{ color: '#34d399', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                                ✅ Milestone
                                            </div>
                                            <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>{phase.milestone}</p>
                                        </div>
                                    </div>

                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0, left: 0, right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${phase.color}60, transparent)`
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}

export default LearningRoadmap;
