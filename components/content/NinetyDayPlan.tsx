'use client';
import React, { useState } from 'react';

const NinetyDayPlan: React.FC = () => {
    const [activeMonth, setActiveMonth] = useState(0);

    const months = [
        {
            title: 'Month 1',
            subtitle: 'Programming Foundations',
            color: '#818cf8',
            icon: '📚',
            weeks: [
                {
                    label: 'Week 1–2: Python Basics',
                    tasks: [
                        'Install Python & VS Code',
                        'Complete Python Crash Course chapters 1–8',
                        'Practice: variables, functions, loops, lists, dicts',
                        'Daily practice: 1–2 hours'
                    ]
                },
                {
                    label: 'Week 3: APIs & GitHub',
                    tasks: [
                        'Learn Git basics — init, commit, push',
                        'Create GitHub account, push first repo',
                        'Build a command-line weather app using an API',
                        'Write a clear README with setup instructions'
                    ]
                },
                {
                    label: 'Week 4: First Real Project',
                    tasks: [
                        'Build a URL shortener or to-do API',
                        'Deploy to Replit or Railway',
                        'Write clear README',
                        'Share on Twitter/LinkedIn'
                    ]
                }
            ],
            outcome: 'Comfortable with Python, Git, APIs. Have one deployed project.'
        },
        {
            title: 'Month 2',
            subtitle: 'AI Fundamentals & First AI Project',
            color: '#8b5cf6',
            icon: '🧠',
            weeks: [
                {
                    label: 'Week 1: Conceptual AI Learning',
                    tasks: [
                        'Watch 3Blue1Brown neural network series',
                        'Read OpenAI API documentation',
                        'Experiment with ChatGPT & Claude web UIs',
                        'Take notes on how prompts affect outputs'
                    ]
                },
                {
                    label: 'Week 2: AI API Integration',
                    tasks: [
                        'Sign up for OpenAI API (free credits)',
                        'Make your first API call (text generation)',
                        'Build a simple chatbot (CLI or web)',
                        'Handle errors and rate limits'
                    ]
                },
                {
                    label: 'Week 3: Prompt Engineering',
                    tasks: [
                        'Learn structured prompting techniques',
                        'Experiment with system messages, few-shot',
                        'Build a prompt that generates JSON reliably',
                        'Document your prompt engineering process'
                    ]
                },
                {
                    label: 'Week 4: First AI Portfolio Project',
                    tasks: [
                        'Build a document summarizer or Q&A bot',
                        'Deploy publicly (Vercel, Replit, Streamlit)',
                        'Write a blog post explaining how you built it',
                        'Share on social media'
                    ]
                }
            ],
            outcome: 'Understand AI APIs, built first AI app, published publicly.'
        },
        {
            title: 'Month 3',
            subtitle: 'Advanced Skills & Portfolio Building',
            color: '#34d399',
            icon: '🚀',
            weeks: [
                {
                    label: 'Week 1: LangChain Basics',
                    tasks: [
                        'Complete LangChain quickstart tutorial',
                        'Understand chains, prompts, and agents',
                        'Build a simple RAG system (document Q&A)',
                        'Connect to a vector database'
                    ]
                },
                {
                    label: 'Week 2: Vector Databases',
                    tasks: [
                        'Sign up for Pinecone (free tier)',
                        'Learn embeddings and semantic search',
                        'Add vector search to your RAG project',
                        'Test with real documents'
                    ]
                },
                {
                    label: 'Week 3: Second Portfolio Project',
                    tasks: [
                        'Build an AI agent (multi-step tasks)',
                        'Example: research agent, email automation',
                        'Deploy publicly with live demo',
                        'Add clear documentation'
                    ]
                },
                {
                    label: 'Week 4: Portfolio Polish & Job Prep',
                    tasks: [
                        'Clean up GitHub profile, pin best 3–4 projects',
                        'Write README files for all projects',
                        'Write 1–2 technical blog posts',
                        'Start applying to AI roles or freelance'
                    ]
                }
            ],
            outcome: '2–3 solid portfolio projects, active GitHub, ready for entry-level roles or freelance.'
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
                background: 'radial-gradient(circle at 50% 0%, rgba(129, 140, 248, 0.06) 0%, transparent 50%)',
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
                    90-Day Action Plan
                </h3>
                <p style={{
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '32px'
                }}>
                    Start today — week-by-week breakdown
                </p>

                {/* Tab toggles */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '32px'
                }}>
                    {months.map((month, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveMonth(index)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '12px',
                                border: `2px solid ${activeMonth === index ? month.color : 'rgba(71, 85, 105, 0.3)'}`,
                                background: activeMonth === index ? `${month.color}15` : 'rgba(15, 23, 42, 0.5)',
                                color: activeMonth === index ? month.color : '#64748b',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <span style={{ fontSize: '18px' }}>{month.icon}</span>
                            <span>{month.title}</span>
                        </button>
                    ))}
                </div>

                {/* Active month content */}
                {months.map((month, monthIndex) => (
                    monthIndex === activeMonth && (
                        <div key={monthIndex} style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            animation: 'fadeIn 0.4s ease-out'
                        }}>
                            {/* Month header */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '28px'
                            }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: `${month.color}15`,
                                    color: month.color,
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    padding: '6px 18px',
                                    borderRadius: '20px',
                                    border: `1px solid ${month.color}30`,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {month.subtitle}
                                </div>
                            </div>

                            {/* Weeks */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {month.weeks.map((week, weekIndex) => (
                                    <div
                                        key={weekIndex}
                                        style={{
                                            background: 'rgba(15, 23, 42, 0.6)',
                                            borderRadius: '14px',
                                            padding: '20px 24px',
                                            border: `1px solid ${month.color}20`,
                                            transition: 'all 0.3s ease',
                                            animation: `slideUp 0.4s ease-out ${weekIndex * 0.1}s both`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = `${month.color}50`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = `${month.color}20`;
                                        }}
                                    >
                                        <h5 style={{
                                            color: month.color,
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            marginBottom: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}>
                                            <span style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '6px',
                                                background: `${month.color}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '12px',
                                                fontWeight: '800',
                                                flexShrink: 0
                                            }}>
                                                {weekIndex + 1}
                                            </span>
                                            {week.label}
                                        </h5>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
                                            {week.tasks.map((task, i) => (
                                                <div key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '8px',
                                                    color: '#cbd5e1',
                                                    fontSize: '13px',
                                                    lineHeight: '1.5'
                                                }}>
                                                    <span style={{
                                                        color: month.color,
                                                        fontSize: '14px',
                                                        marginTop: '1px',
                                                        flexShrink: 0,
                                                        opacity: 0.6
                                                    }}>☐</span>
                                                    {task}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Outcome */}
                            <div style={{
                                marginTop: '24px',
                                padding: '16px 20px',
                                background: `${month.color}08`,
                                borderRadius: '12px',
                                border: `1px solid ${month.color}20`,
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    color: month.color,
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '6px'
                                }}>
                                    ✅ {month.title} Outcome
                                </div>
                                <p style={{
                                    color: '#e2e8f0',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    margin: 0
                                }}>
                                    {month.outcome}
                                </p>
                            </div>
                        </div>
                    )
                ))}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default NinetyDayPlan;
