'use client';
import React from 'react';

const WindsurfVsCursorComparison: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0', overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)' }}>
            <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', backgroundColor: 'var(--color-surface)', margin: 0 }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', backgroundColor: 'rgba(0,0,0,0.04)' }}>
                        <th style={{ padding: 'var(--space-4)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dimension</th>
                        <th style={{ padding: 'var(--space-4)', color: 'var(--color-accent)', fontSize: 'var(--text-md)' }}>Windsurf (Wave 13)</th>
                        <th style={{ padding: 'var(--space-4)', fontSize: 'var(--text-md)' }}>Cursor 2.0</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['Primary Model', 'SWE-1.5 (free, near-frontier)', 'Multi-model: Claude Sonnet, GPT-5, Gemini 3'],
                        ['Agent Mode', 'Cascade (Write mode)', 'Composer Agent'],
                        ['Parallel Agents', '5 via Git worktrees', '8 via cloud VMs'],
                        ['Context Retrieval', 'Fast Context (SWE-grep, 20× faster)', 'Turbopuffer semantic indexing + PR history'],
                        ['Model Comparison', 'Arena Mode (blind, 3 battle groups)', 'No equivalent'],
                        ['Plan Mode', 'Yes — Cascade structured planning', 'Yes — editable Markdown plans'],
                        ['Pro Tier', '$15/month (500 flow credits)', '$20/month (500 fast requests, $20 credits)'],
                        ['JetBrains Support', 'Yes', 'No'],
                        ['Enterprise Security', 'SOC 2 Type II, FedRAMP High', 'SOC 2'],
                        ['Autocomplete Speed', 'Fast (Tab + Supercomplete)', 'Fastest (Supermaven, sub-200ms)'],
                        ['Cognition/Devin path', 'Yes — roadmap integration', 'No']
                    ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)' }}>
                            <td style={{ padding: 'var(--space-3) var(--space-4)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)' }}>{row[0]}</td>
                            <td style={{ padding: 'var(--space-3) var(--space-4)', fontSize: 'var(--text-sm)' }}>{row[1]}</td>
                            <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>{row[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WindsurfVsCursorComparison;
