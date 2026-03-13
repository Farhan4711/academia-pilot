'use client';
import React from 'react';

const WAVEFramework: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div className="hud-panel" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}>
                <h3 style={{ margin: '0 0 var(--space-6)', textAlign: 'center', color: 'var(--color-accent)', fontSize: 'var(--text-2xl)' }}>WAVE Analysis Framework</h3>
                <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <div style={{ padding: 'var(--space-5)', background: 'var(--color-background)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #3b82f6' }}>
                        <h4 style={{ margin: '0 0 var(--space-2)', color: '#3b82f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>W — Workflow Impact</span>
                            <span style={{ fontSize: 'var(--text-xs)', padding: '2px 6px', background: 'rgba(59,130,246,0.1)', borderRadius: '4px' }}>High</span>
                        </h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Does it change how developers work? (Arena Mode, Parallel agents alter fundamental workflows).</p>
                    </div>
                    <div style={{ padding: 'var(--space-5)', background: 'var(--color-background)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #10b981' }}>
                        <h4 style={{ margin: '0 0 var(--space-2)', color: '#10b981', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>A — Architecture Foundation</span>
                            <span style={{ fontSize: 'var(--text-xs)', padding: '2px 6px', background: 'rgba(16,185,129,0.1)', borderRadius: '4px' }}>High</span>
                        </h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Is it built on a scalable foundation? (SWE-grep, Git worktrees are deep architectural bets).</p>
                    </div>
                    <div style={{ padding: 'var(--space-5)', background: 'var(--color-background)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #f59e0b' }}>
                        <h4 style={{ margin: '0 0 var(--space-2)', color: '#f59e0b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>V — Value Delivered per Dollar</span>
                            <span style={{ fontSize: 'var(--text-xs)', padding: '2px 6px', background: 'rgba(245,158,11,0.1)', borderRadius: '4px' }}>Very High</span>
                        </h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>SWE-1.5 Free at $0 is the most compelling value delivery in the industry right now.</p>
                    </div>
                    <div style={{ padding: 'var(--space-5)', background: 'var(--color-background)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #8b5cf6' }}>
                        <h4 style={{ margin: '0 0 var(--space-2)', color: '#8b5cf6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>E — Ecosystem Integration</span>
                            <span style={{ fontSize: 'var(--text-xs)', padding: '2px 6px', background: 'rgba(139,92,246,0.1)', borderRadius: '4px' }}>High</span>
                        </h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>JetBrains support, MDM policies, and Hooks expand the ecosystem meaningfully.</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', color: 'white', fontWeight: 'bold', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-lg)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    Total WAVE Score: 4/4 High — the strongest AI IDE release of Q4 2025.
                </div>
            </div>
        </div>
    );
};

export default WAVEFramework;
