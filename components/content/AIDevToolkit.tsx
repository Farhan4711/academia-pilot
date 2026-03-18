'use client';
import React from 'react';

const AIDevToolkit: React.FC = () => {
    const categories = [
        {
            title: 'Programming & Development',
            items: [
                { name: 'Python', subtitle: 'The AI Language', color: '#3776ab', icon: '🐍', desc: 'Universal AI language. 90% of tools, libraries and frameworks use Python.' },
                { name: 'VS Code', subtitle: 'Recommended IDE', color: '#007acc', icon: '💻', desc: 'Free, extensible, excellent AI extensions (Copilot, Cursor integration).' },
                { name: 'Git & GitHub', subtitle: 'Version Control', color: '#f05032', icon: '📂', desc: 'Non-negotiable. Commits, branches, pull requests, README writing.' },
            ]
        },
        {
            title: 'AI Platforms & APIs',
            items: [
                { name: 'ChatGPT / OpenAI', subtitle: 'GPT-5.2 API', color: '#10a37f', icon: '💬', desc: 'Most widely deployed. Text gen, embeddings, function calling, fine-tuning.' },
                { name: 'Claude (Anthropic)', subtitle: 'Long-Context AI', color: '#d4891a', icon: '🧠', desc: 'Best for long docs, coding, analysis. 200K–1M token context window.' },
                { name: 'Gemini (Google)', subtitle: 'Multimodal AI', color: '#4285f4', icon: '✨', desc: 'Best for multimodal (text + images + video). Native Google integration.' },
            ]
        },
        {
            title: 'AI Frameworks & Tools',
            items: [
                { name: 'LangChain', subtitle: 'LLM App Framework', color: '#2dd4bf', icon: '🔗', desc: 'Industry standard. Chains, agents, memory, vector stores, tools.' },
                { name: 'Hugging Face', subtitle: 'Model Hub', color: '#ff6f00', icon: '🤗', desc: 'Thousands of pre-trained models and datasets. Inference API ready.' },
                { name: 'Vector Databases', subtitle: 'Pinecone · Chroma', color: '#8b5cf6', icon: '🗄️', desc: 'Core infrastructure for RAG and semantic search applications.' },
            ]
        },
        {
            title: 'AI-Assisted Dev Tools',
            items: [
                { name: 'GitHub Copilot', subtitle: 'AI Pair Programmer', color: '#6e40c9', icon: '🤖', desc: '$10/mo. AI autocomplete, test gen, code explanation in your IDE.' },
                { name: 'Cursor', subtitle: 'AI-Native Editor', color: '#00b4d8', icon: '⚡', desc: 'Fastest-growing dev tool. Codebase chat, multi-file AI edits.' },
                { name: 'Replit', subtitle: 'Cloud IDE + Deploy', color: '#f26207', icon: '🔧', desc: 'Cloud IDE with AI assistance. Great for prototyping and learning.' },
            ]
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'var(--color-surface)',
            padding: '48px 24px',
            borderRadius: '20px',
            margin: '48px 0',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)',
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
                    The Self-Taught AI Developer Toolkit
                </h3>
                <p style={{
                    color: '#a78bfa',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginBottom: '48px',
                    opacity: 0.8
                }}>
                    12 essential tools across 4 categories — all free or affordable
                </p>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} style={{ marginBottom: catIndex < categories.length - 1 ? '36px' : '0' }}>
                            <h4 style={{
                                color: '#e0e7ff',
                                fontSize: '16px',
                                fontWeight: '700',
                                marginBottom: '16px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                paddingBottom: '8px',
                                borderBottom: '1px solid rgba(139, 92, 246, 0.2)'
                            }}>
                                {category.title}
                            </h4>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '16px'
                            }}>
                                {category.items.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        style={{
                                            background: 'var(--color-surface)',
                                            border: `1px solid ${tool.color}35`,
                                            borderRadius: '14px',
                                            padding: '20px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            animation: `fadeIn 0.5s ease-out ${(catIndex * 3 + index) * 0.06}s both`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.borderColor = tool.color;
                                            e.currentTarget.style.boxShadow = `0 12px 32px ${tool.color}25`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = `${tool.color}35`;
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                            <span style={{ fontSize: '28px' }}>{tool.icon}</span>
                                            <div>
                                                <div style={{ color: tool.color, fontSize: '15px', fontWeight: '700' }}>{tool.name}</div>
                                                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{tool.subtitle}</div>
                                            </div>
                                        </div>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>{tool.desc}</p>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0, left: 0, right: 0, height: '2px',
                                            background: `linear-gradient(90deg, ${tool.color}00, ${tool.color}80, ${tool.color}00)`,
                                            opacity: 0.5
                                        }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '32px',
                    padding: '18px 24px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '4px solid #818cf8',
                    borderRadius: '8px'
                }}>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                        <strong style={{ color: '#c4b5fd' }}>Total Cost to Start:</strong>{' '}
                        $0–$10/month. Python, VS Code, Git, LangChain, Hugging Face, and all AI API free tiers
                        are sufficient for your first 6 months of learning. No expensive hardware needed.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default AIDevToolkit;
