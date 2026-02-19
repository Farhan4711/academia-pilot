'use client';
import React from 'react';

const AIFinalVerdict: React.FC = () => {
    const verdicts = [
        { category: 'Coding & Development', winner: 'Claude', winnerColor: '#d4891a', runnerUp: 'ChatGPT', runnerUpColor: '#10a37f', icon: '💻', winnerIcon: '🧠', runnerUpIcon: '🤖' },
        { category: 'Creative Writing & SEO', winner: 'ChatGPT', winnerColor: '#10a37f', runnerUp: 'Claude', runnerUpColor: '#d4891a', icon: '✍️', winnerIcon: '🤖', runnerUpIcon: '🧠' },
        { category: 'Research & Accuracy', winner: 'Claude', winnerColor: '#d4891a', runnerUp: 'Gemini', runnerUpColor: '#4285f4', icon: '🔬', winnerIcon: '🧠', runnerUpIcon: '✨' },
        { category: 'Multimodal Tasks', winner: 'Gemini', winnerColor: '#4285f4', runnerUp: 'ChatGPT', runnerUpColor: '#10a37f', icon: '🎥', winnerIcon: '✨', runnerUpIcon: '🤖' },
        { category: 'Google Workspace', winner: 'Gemini', winnerColor: '#4285f4', runnerUp: '—', runnerUpColor: '#475569', icon: '📁', winnerIcon: '✨', runnerUpIcon: '' },
        { category: 'Best Free Option', winner: 'Gemini', winnerColor: '#4285f4', runnerUp: 'ChatGPT', runnerUpColor: '#10a37f', icon: '🆓', winnerIcon: '✨', runnerUpIcon: '🤖' },
        { category: 'API Cost-Efficiency', winner: 'Gemini', winnerColor: '#4285f4', runnerUp: 'ChatGPT', runnerUpColor: '#10a37f', icon: '💰', winnerIcon: '✨', runnerUpIcon: '🤖' },
        { category: 'Long Document Processing', winner: 'Claude / Gemini', winnerColor: '#8b5cf6', runnerUp: '—', runnerUpColor: '#475569', icon: '📄', winnerIcon: '🤝', runnerUpIcon: '' },
        { category: 'Overall Versatility', winner: 'ChatGPT', winnerColor: '#10a37f', runnerUp: 'Claude', runnerUpColor: '#d4891a', icon: '⚡', winnerIcon: '🤖', runnerUpIcon: '🧠' },
    ];

    const tally = {
        ChatGPT: { count: 0, color: '#10a37f', icon: '🤖' },
        Claude: { count: 0, color: '#d4891a', icon: '🧠' },
        Gemini: { count: 0, color: '#4285f4', icon: '✨' },
    };
    verdicts.forEach(v => {
        if (v.winner.includes('ChatGPT')) tally.ChatGPT.count++;
        if (v.winner.includes('Claude')) tally.Claude.count++;
        if (v.winner.includes('Gemini')) tally.Gemini.count++;
    });

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px',
            overflow: 'hidden',
            margin: '48px 0',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.07)',
        }}>
            {/* Header */}
            <div style={{
                padding: '32px 36px 28px',
                background: 'rgba(0,0,0,0.25)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
                <h3 style={{ color: '#f1f5f9', fontSize: '22px', fontWeight: '800', margin: '0 0 6px', letterSpacing: '-0.3px' }}>
                    🏆 Final Verdict by Category (2026)
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                    Definitive rankings after rigorous real-world testing
                </p>
            </div>

            {/* Category Rows */}
            <div>
                {verdicts.map((v, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr 1fr',
                            borderBottom: i < verdicts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                            transition: 'background 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                        onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'}
                    >
                        {/* Category */}
                        <div style={{ padding: '16px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px' }}>{v.icon}</span>
                            <span style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '500' }}>{v.category}</span>
                        </div>
                        {/* Winner */}
                        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ fontSize: '16px' }}>{v.winnerIcon}</span>
                            <span style={{ color: v.winnerColor, fontSize: '14px', fontWeight: '700' }}>{v.winner}</span>
                        </div>
                        {/* Runner-Up */}
                        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                            {v.runnerUpIcon && <span style={{ fontSize: '14px' }}>{v.runnerUpIcon}</span>}
                            <span style={{ color: v.runnerUpColor, fontSize: '13px' }}>{v.runnerUp}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Column Labels */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                background: 'rgba(0,0,0,0.3)',
                borderTop: '2px solid rgba(255,255,255,0.06)',
            }}>
                <div style={{ padding: '12px 28px', color: '#475569', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Category</div>
                <div style={{ padding: '12px 20px', color: '#fbbf24', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                    🥇 Winner
                </div>
                <div style={{ padding: '12px 20px', color: '#94a3b8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                    🥈 Runner-Up
                </div>
            </div>

            {/* Tally Footer */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.2)',
            }}>
                {Object.entries(tally).map(([name, { count, color, icon }], i) => (
                    <div key={i} style={{
                        padding: '20px',
                        textAlign: 'center',
                        borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}>
                        <div style={{ fontSize: '24px', marginBottom: '6px' }}>{icon}</div>
                        <div style={{ color, fontSize: '15px', fontWeight: '800' }}>{name}</div>
                        <div style={{ color: '#475569', fontSize: '12px', marginTop: '4px' }}>{count} categor{count !== 1 ? 'ies' : 'y'} won</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIFinalVerdict;
