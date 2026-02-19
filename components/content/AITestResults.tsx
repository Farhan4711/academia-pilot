'use client';
import React from 'react';

const AITestResults: React.FC = () => {
    const tests = [
        {
            name: 'Coding',
            subtitle: 'TypeScript Debounce Function',
            emoji: '💻',
            scores: [
                { model: 'ChatGPT', score: 72, label: 'Functional, fast', color: '#10a37f' },
                { model: 'Claude', score: 97, label: 'Production-ready, fully typed', color: '#d4891a' },
                { model: 'Gemini', score: 61, label: 'Working, minor fixes needed', color: '#4285f4' },
            ],
            winner: 'Claude',
            winnerColor: '#d4891a',
        },
        {
            name: 'SEO Writing',
            subtitle: '600-word AI blog intro',
            emoji: '✍️',
            scores: [
                { model: 'ChatGPT', score: 94, label: 'Natural, publish-ready tone', color: '#10a37f' },
                { model: 'Claude', score: 85, label: 'Excellent structure, more formal', color: '#d4891a' },
                { model: 'Gemini', score: 70, label: 'Solid draft, needs editing', color: '#4285f4' },
            ],
            winner: 'ChatGPT',
            winnerColor: '#10a37f',
        },
        {
            name: 'Logical Reasoning',
            subtitle: '10-variable conditional problem',
            emoji: '🔢',
            scores: [
                { model: 'ChatGPT', score: 82, label: 'Correct, missed one edge case', color: '#10a37f' },
                { model: 'Claude', score: 98, label: 'Correct + identified 2 extra edge cases', color: '#d4891a' },
                { model: 'Gemini', score: 58, label: 'Partial, error in step 4', color: '#4285f4' },
            ],
            winner: 'Claude',
            winnerColor: '#d4891a',
        },
        {
            name: 'Research Synthesis',
            subtitle: '50-page paper summary',
            emoji: '📚',
            scores: [
                { model: 'ChatGPT', score: 70, label: 'Solid summary, shallower analysis', color: '#10a37f' },
                { model: 'Claude', score: 91, label: 'High accuracy + methodology critique', color: '#d4891a' },
                { model: 'Gemini', score: 92, label: 'Comprehensive, cited, web-enhanced', color: '#4285f4' },
            ],
            winner: 'Tied (Gemini + Claude)',
            winnerColor: '#8b5cf6',
        },
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)',
            borderRadius: '20px',
            padding: '40px 36px',
            margin: '48px 0',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.07)',
        }}>
            {/* Header */}
            <div style={{ marginBottom: '36px', textAlign: 'center' }}>
                <h3 style={{ color: '#f1f5f9', fontSize: '22px', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.3px' }}>
                    Head-to-Head Test Results
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                    4 standardized real-world tasks — identical prompts across all 3 models
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {tests.map((test, ti) => (
                    <div key={ti} style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                        {/* Test Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '28px' }}>{test.emoji}</span>
                            <div>
                                <div style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: '700' }}>Test {ti + 1}: {test.name}</div>
                                <div style={{ color: '#64748b', fontSize: '12px' }}>{test.subtitle}</div>
                            </div>
                        </div>

                        {/* Score Bars */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {test.scores.map((score, si) => (
                                <div key={si}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                        <span style={{ color: score.color, fontSize: '13px', fontWeight: '700' }}>{score.model}</span>
                                        <span style={{ color: '#64748b', fontSize: '12px' }}>{score.score}/100</span>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', height: '8px', overflow: 'hidden' }}>
                                        <div style={{
                                            width: `${score.score}%`,
                                            height: '100%',
                                            background: `linear-gradient(90deg, ${score.color}80, ${score.color})`,
                                            borderRadius: '8px',
                                            transition: 'width 1s ease',
                                        }} />
                                    </div>
                                    <div style={{ color: '#475569', fontSize: '11px', marginTop: '4px' }}>{score.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Winner Banner */}
                        <div style={{
                            marginTop: '20px',
                            padding: '10px 16px',
                            background: `${test.winnerColor}15`,
                            border: `1px solid ${test.winnerColor}40`,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            <span style={{ fontSize: '14px' }}>🏆</span>
                            <span style={{ color: test.winnerColor, fontSize: '13px', fontWeight: '700' }}>Winner: {test.winner}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AITestResults;
