'use client';
import React from 'react';

const FluencyMaturityModel: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-8) 0' }}>
            <div style={{
                overflowX: 'auto',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                background: 'var(--color-surface)'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
                    <thead>
                        <tr style={{ background: 'var(--color-surface-hover)' }}>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Dimension</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)' }}>Stage 1: Beginner</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)' }}>Stage 2: Fluent</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-accent)', background: 'rgba(0, 112, 243, 0.05)' }}>Stage 3: Strategic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { dim: 'Directing', b: 'Vague goal-ambiguous prompts, no constraints or context', f: 'All 6 directing behaviors applied consistently', s: 'Organizational prompt standards; project-level context systems' },
                            { dim: 'Discerning', b: 'Reviews for obvious errors only', f: 'Systematic evaluation: facts, logic, bias, gaps, tone', s: 'Codified verification protocols by task type; team-level review design' },
                            { dim: 'Developing', b: 'One-shot prompting; restart on failure', f: 'Modular, iterative, diagnostic refinement; context managed', s: 'Iterative loops institutionalized into team workflows' },
                            { dim: 'Delegating', b: 'Reactive, ad hoc usage', f: 'Systematic integration with accountability anchors', s: 'Organizational workflow architecture; governance and measurement' },
                            { dim: 'Output risk', b: 'High — polished errors common', f: 'Low — systematic review catches most issues', s: 'Minimal — governance manages residual risk structurally' },
                            { dim: 'Organizational impact', b: 'Speed increase; quality variable', f: 'Consistent individual quality', s: 'Team-level AI capability; scalable and governed' },
                            { dim: 'Primary risk', b: 'Polished output trap', f: 'Novel task types without calibrated pattern recognition', s: 'Governance gaps as AI capabilities and use cases evolve' },
                            { dim: 'Development priority', b: 'Build Discerning habits immediately', f: 'Expand Delegating architecture', s: 'Build governance, standards, and measurement systems' },
                        ].map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s ease' }} className="hover:bg-opacity-5 hover:bg-white text-secondary">
                                <td style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>{row.dim}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>{row.b}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>{row.f}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-primary)', background: 'rgba(0, 112, 243, 0.02)', fontWeight: 'var(--font-medium)' }}>{row.s}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FluencyMaturityModel;
