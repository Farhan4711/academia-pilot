'use client';
import React from 'react';

const ArenaModeBattleGroups: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
                <div className="hud-panel" style={{ padding: 'var(--space-6)', textAlign: 'center', backgroundColor: 'var(--color-surface)', borderTop: '4px solid #3b82f6' }}>
                    <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>🚀</div>
                    <h4 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-xl)' }}>Fast Group</h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                        Optimized for speed.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', fontSize: 'var(--text-sm)' }}>
                        <li><strong>1.</strong> SWE 1.5</li>
                        <li><strong>2.</strong> Haiku 4.5</li>
                        <li><strong>3.</strong> Gemini 3 Flash Low</li>
                    </ul>
                </div>

                <div className="hud-panel" style={{ padding: 'var(--space-6)', textAlign: 'center', backgroundColor: 'var(--color-surface)', borderTop: '4px solid #8b5cf6' }}>
                    <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>⚖️</div>
                    <h4 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-xl)' }}>Hybrid Group</h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                        Mix of frontier & fast.
                    </p>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        Ideal for balancing speed and profound intelligence.
                    </div>
                </div>

                <div className="hud-panel" style={{ padding: 'var(--space-6)', textAlign: 'center', backgroundColor: 'var(--color-surface)', borderTop: '4px solid #f59e0b' }}>
                    <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>👑</div>
                    <h4 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-xl)' }}>Frontier Group</h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                        Premium intelligence.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', fontSize: 'var(--text-sm)' }}>
                        <li><strong>1.</strong> Opus 4.6</li>
                        <li><strong>2.</strong> Opus 4.5</li>
                        <li><strong>3.</strong> Sonnet 4.5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ArenaModeBattleGroups;
