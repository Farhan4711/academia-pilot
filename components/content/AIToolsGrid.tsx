'use client';
import React from 'react';

const AIToolsGrid: React.FC = () => {
    const tools = [
        {
            name: 'GitHub Copilot',
            subtitle: 'AI Pair Programmer',
            color: '#6e40c9',
            icon: '🤖',
            description: 'AI autocomplete, test generation, code explanation, and refactoring — universal in tech companies.',
            learn: 'Using Copilot in VS Code/IntelliJ for daily workflow'
        },
        {
            name: 'ChatGPT / GPT-5.2',
            subtitle: 'General-Purpose AI',
            color: '#10a37f',
            icon: '💬',
            description: 'Most widely deployed AI model. Function calling, structured output, and embeddings API.',
            learn: 'Prompt engineering, function calling, embeddings'
        },
        {
            name: 'Claude (Anthropic)',
            subtitle: 'Advanced Coding AI',
            color: '#d4891a',
            icon: '🧠',
            description: 'Superior long-context processing (200K–1M tokens), Claude Code for terminal-based development.',
            learn: 'Claude API, Projects, Claude Code agent'
        },
        {
            name: 'Cursor',
            subtitle: 'AI-Native Code Editor',
            color: '#00b4d8',
            icon: '⚡',
            description: 'Fastest-growing dev tool in 2026. Codebase chat, multi-file edits, AI-powered debugging.',
            learn: 'Codebase chat, inline AI commands, multi-file edits'
        },
        {
            name: 'Replit AI',
            subtitle: 'Cloud IDE + Deployment',
            color: '#f26207',
            icon: '🔧',
            description: 'Full-stack AI code generation with instant cloud deployment. Common in hackathons.',
            learn: 'Rapid prototyping, deploying to Replit edge network'
        },
        {
            name: 'LangChain',
            subtitle: 'LLM App Framework',
            color: '#2dd4bf',
            icon: '🔗',
            description: 'Industry standard for production AI apps. Chains, agents, memory, document loaders.',
            learn: 'Chains, agents, memory systems, vector stores'
        },
        {
            name: 'Vector DBs',
            subtitle: 'Pinecone · Chroma · Weaviate',
            color: '#8b5cf6',
            icon: '🗄️',
            description: 'Core infrastructure for RAG systems and AI-powered semantic search.',
            learn: 'Embedding generation, vector indexing, similarity search'
        },
        {
            name: 'W&B / MLflow',
            subtitle: 'Experiment Tracking',
            color: '#ef4444',
            icon: '📊',
            description: 'Model performance logging, hyperparameter tracking, and experiment comparison.',
            learn: 'Logging performance, tracking experiments, model versioning'
        }
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
                    AI Tools Every Junior Developer Must Master
                </h3>

                <p style={{
                    color: '#a78bfa',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '48px',
                    opacity: 0.8
                }}>
                    8 Essential Tools for the 2026 AI Engineering Toolkit
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {tools.map((tool, index) => (
                        <div
                            key={tool.name}
                            style={{
                                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(49, 46, 129, 0.6) 100%)',
                                border: `2px solid ${tool.color}40`,
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
                                e.currentTarget.style.borderColor = tool.color;
                                e.currentTarget.style.boxShadow = `0 20px 40px ${tool.color}30, 0 0 0 1px ${tool.color}40`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = `${tool.color}40`;
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
                                background: `linear-gradient(135deg, transparent 50%, ${tool.color}15 50%)`,
                                borderBottomLeftRadius: '100%'
                            }} />

                            {/* Icon */}
                            <div style={{
                                fontSize: '36px',
                                marginBottom: '16px',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                            }}>
                                {tool.icon}
                            </div>

                            {/* Title */}
                            <h4 style={{
                                color: tool.color,
                                fontSize: '18px',
                                fontWeight: '700',
                                marginBottom: '6px',
                                letterSpacing: '-0.3px'
                            }}>
                                {tool.name}
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
                                {tool.subtitle}
                            </div>

                            {/* Description */}
                            <p style={{
                                color: '#cbd5e1',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                marginBottom: '16px'
                            }}>
                                {tool.description}
                            </p>

                            {/* What to learn tag */}
                            <div style={{
                                display: 'inline-block',
                                background: `${tool.color}15`,
                                color: tool.color,
                                fontSize: '12px',
                                fontWeight: '600',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                border: `1px solid ${tool.color}30`
                            }}>
                                📖 {tool.learn}
                            </div>

                            {/* Bottom accent line */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${tool.color}00 0%, ${tool.color} 50%, ${tool.color}00 100%)`,
                                opacity: 0.6
                            }} />
                        </div>
                    ))}
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
                        <strong style={{ color: '#c4b5fd', fontSize: '15px' }}>Portfolio Tip:</strong>{' '}
                        A GitHub repo showing a production-ready AI application built with <strong style={{ color: '#d4891a' }}>Claude API</strong> +{' '}
                        <strong style={{ color: '#2dd4bf' }}>LangChain</strong> + <strong style={{ color: '#8b5cf6' }}>Pinecone</strong> is
                        vastly more valuable than a generic to-do list app.
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

export default AIToolsGrid;
