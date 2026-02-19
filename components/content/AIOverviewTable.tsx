'use client';
import React, { useState } from 'react';

const AIOverviewTable: React.FC = () => {
    const [hoveredCol, setHoveredCol] = useState<number | null>(null);

    const models = [
        {
            name: 'ChatGPT',
            model: 'GPT-5.2',
            developer: 'OpenAI',
            color: '#10a37f',
            glow: '#10a37f30',
            icon: '🤖',
            context: '400K tokens',
            coding: 4,
            multimodal: 'Text, images',
            webSearch: 'With tools',
            strengths: ['Versatility', 'Memory', 'Creative writing'],
            weaknesses: ['Smaller context', 'Can hallucinate'],
            bestFor: 'General use, brainstorming, content',
            freeTier: true,
            paidPlan: 'Plus $20/mo · Pro $200/mo',
        },
        {
            name: 'Claude',
            model: 'Opus 4.5 / Sonnet 4.5',
            developer: 'Anthropic',
            color: '#d4891a',
            glow: '#d4891a30',
            icon: '🧠',
            context: '200K–1M tokens',
            coding: 5,
            multimodal: 'Text, images, documents',
            webSearch: 'Yes',
            strengths: ['Coding accuracy', 'Long-context reasoning', 'Honesty'],
            weaknesses: ['Higher API cost', 'No native video'],
            bestFor: 'Developers, research, technical writing',
            freeTier: true,
            paidPlan: 'Pro $20/mo · Max $100–200/mo',
        },
        {
            name: 'Gemini',
            model: '3 Pro',
            developer: 'Google DeepMind',
            color: '#4285f4',
            glow: '#4285f430',
            icon: '✨',
            context: '1M+ tokens',
            coding: 3,
            multimodal: 'Text, images, video, audio',
            webSearch: 'Native Google Search',
            strengths: ['Multimodal', 'Google integration', 'Speed'],
            weaknesses: ['Inconsistent creative tasks', 'Logical edge cases'],
            bestFor: 'Google users, students, multimedia tasks',
            freeTier: true,
            paidPlan: 'AI Pro $19.99/mo · Ultra $249.99/mo',
        },
    ];

    const rows = [
        { label: 'Developer', key: 'developer' },
        { label: 'Latest Model', key: 'model' },
        { label: 'Context Window', key: 'context' },
        { label: 'Web Search', key: 'webSearch' },
        { label: 'Multimodal', key: 'multimodal' },
        { label: 'Best For', key: 'bestFor' },
        { label: 'Paid Plan', key: 'paidPlan' },
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.08)',
            margin: '48px 0',
        }}>
            {/* Header */}
            <div style={{
                padding: '28px 32px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.2)',
            }}>
                <h3 style={{ color: '#f1f5f9', fontSize: '20px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                    ChatGPT vs Claude vs Gemini — 2026 Comparison
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '6px 0 0' }}>
                    Head-to-head across capabilities, context, pricing, and use cases
                </p>
            </div>

            {/* Column Headers */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '160px repeat(3, 1fr)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
                <div style={{ padding: '20px 24px', color: '#475569', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Dimension
                </div>
                {models.map((m, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredCol(i)}
                        onMouseLeave={() => setHoveredCol(null)}
                        style={{
                            padding: '20px 24px',
                            textAlign: 'center',
                            cursor: 'default',
                            background: hoveredCol === i ? `${m.glow}` : 'transparent',
                            transition: 'background 0.3s ease',
                            borderLeft: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        <div style={{ fontSize: '28px', marginBottom: '8px' }}>{m.icon}</div>
                        <div style={{ color: m.color, fontSize: '18px', fontWeight: '800', letterSpacing: '-0.3px' }}>{m.name}</div>
                        <div style={{ color: '#475569', fontSize: '12px', marginTop: '4px' }}>{m.developer}</div>
                    </div>
                ))}
            </div>

            {/* Coding Stars Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 1fr)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ padding: '16px 24px', color: '#94a3b8', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                    Coding Ability
                </div>
                {models.map((m, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredCol(i)}
                        onMouseLeave={() => setHoveredCol(null)}
                        style={{
                            padding: '16px 24px',
                            textAlign: 'center',
                            background: hoveredCol === i ? `${m.glow}` : i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                            transition: 'background 0.3s ease',
                            borderLeft: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        <span style={{ color: '#fbbf24', fontSize: '16px', letterSpacing: '2px' }}>
                            {'★'.repeat(m.coding)}{'☆'.repeat(5 - m.coding)}
                        </span>
                    </div>
                ))}
            </div>

            {/* Data Rows */}
            {rows.map((row, ri) => (
                <div
                    key={ri}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '160px repeat(3, 1fr)',
                        borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    }}>
                    <div style={{ padding: '14px 24px', color: '#94a3b8', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                        {row.label}
                    </div>
                    {models.map((m, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredCol(i)}
                            onMouseLeave={() => setHoveredCol(null)}
                            style={{
                                padding: '14px 24px',
                                color: '#cbd5e1',
                                fontSize: '13px',
                                lineHeight: '1.5',
                                textAlign: 'center',
                                background: hoveredCol === i ? `${m.glow}` : ri % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                                transition: 'background 0.3s ease',
                                borderLeft: '1px solid rgba(255,255,255,0.06)',
                            }}>
                            {(m as any)[row.key]}
                        </div>
                    ))}
                </div>
            ))}

            {/* Strengths */}
            <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.15)' }}>
                <div style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'flex-start', paddingTop: '24px' }}>
                    Key Strengths
                </div>
                {models.map((m, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredCol(i)}
                        onMouseLeave={() => setHoveredCol(null)}
                        style={{
                            padding: '20px 24px',
                            background: hoveredCol === i ? `${m.glow}` : 'transparent',
                            transition: 'background 0.3s ease',
                            borderLeft: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        {m.strengths.map((s, si) => (
                            <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ color: m.color, fontSize: '14px' }}>✓</span>
                                <span style={{ color: '#94a3b8', fontSize: '13px' }}>{s}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Free Tier Footer */}
            <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ padding: '16px 24px', color: '#94a3b8', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                    Free Tier
                </div>
                {models.map((m, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredCol(i)}
                        onMouseLeave={() => setHoveredCol(null)}
                        style={{
                            padding: '16px 24px',
                            textAlign: 'center',
                            background: hoveredCol === i ? `${m.glow}` : 'transparent',
                            transition: 'background 0.3s ease',
                            borderLeft: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        <span style={{
                            display: 'inline-block',
                            background: '#16a34a20',
                            color: '#4ade80',
                            fontSize: '12px',
                            fontWeight: '700',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            border: '1px solid #4ade8040',
                        }}>✓ Available</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIOverviewTable;
