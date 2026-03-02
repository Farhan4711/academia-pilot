'use client';
import React from 'react';

const LiteracyVsFluencyTable: React.FC = () => {
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
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)' }}>AI Literacy</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)' }}>AI Skills</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-accent)', background: 'rgba(0, 112, 243, 0.05)' }}>AI Fluency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { dim: 'Core definition', lit: 'Conceptual understanding of what AI is and how it works', skill: 'Practical ability to use specific AI tools for specific tasks', flue: 'Structured behavioral methodology for producing accountable, high-quality AI-assisted work consistently' },
                            { dim: 'Interaction model', lit: 'Passive — understands AI without necessarily using it', skill: 'Reactive — uses AI when tasks present themselves', flue: 'Proactive — designs AI into workflow architecture' },
                            { dim: 'Output evaluation', lit: 'Can identify obviously wrong outputs', skill: 'Reviews for task completion', flue: 'Applies systematic Discerning behaviors: fact-checking, gap analysis, reasoning review, bias detection' },
                            { dim: 'Prompt approach', lit: 'Understands that prompts matter', skill: 'Has developed personal prompt patterns', flue: 'Directs with explicit goal, persona, constraints, context, examples, and format specification' },
                            { dim: 'Iteration behavior', lit: 'Accepts first-pass output', skill: 'Makes directional revisions', flue: 'Applies recursive feedback with diagnostic precision' },
                            { dim: 'Workflow integration', lit: 'Uses AI reactively for individual tasks', skill: 'Has integrated AI into some recurring tasks', flue: 'Has designed AI into workflow systems with explicit accountability frameworks' },
                            { dim: 'Error accountability', lit: 'Depends on luck and obvious detection', skill: 'Catches flagrant errors', flue: 'Has verification protocols calibrated to task type and risk level' },
                            { dim: 'Organizational value', lit: 'Awareness — does not produce consistent quality uplift', skill: 'Efficiency — produces faster output, quality variable', flue: 'Capability — produces consistent quality with structural risk management' },
                            { dim: '2026 wage premium', lit: 'Minimal', skill: 'Moderate', flue: '56% above non-fluent counterparts' },
                            { dim: 'Scalability', lit: 'Not scalable', skill: 'Scales speed, not quality', flue: 'Scales both speed and quality through institutionalized standards' },
                            { dim: 'Who needs it', lit: 'Everyone', skill: 'Tool users', flue: 'All professionals in AI-integrated workflows' },
                            { dim: 'Development path', lit: 'Courses, reading, awareness programs', skill: 'Tool-specific training, prompt libraries', flue: 'Behavioral practice across all 4 dimensions with deliberate feedback' },
                        ].map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s ease' }} className="hover:bg-opacity-5 hover:bg-white text-secondary">
                                <td style={{ padding: 'var(--space-4)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>{row.dim}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>{row.lit}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>{row.skill}</td>
                                <td style={{ padding: 'var(--space-4)', color: 'var(--color-text-primary)', background: 'rgba(0, 112, 243, 0.02)', fontWeight: 'var(--font-medium)' }}>{row.flue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LiteracyVsFluencyTable;
