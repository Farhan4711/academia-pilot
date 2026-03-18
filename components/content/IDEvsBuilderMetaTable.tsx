'use client';
import React from 'react';

const IDEvsBuilderMetaTable: React.FC = () => {
    const data = [
        { feature: 'Setup Complexity', ide: 'Moderate to high (local install, API keys, configuration)', builder: 'Near-zero (browser login, immediate access)' },
        { feature: 'Autonomy Level', ide: 'High — agent plans, edits, executes, and iterates across full codebase', builder: 'Medium — agent generates and iterates within platform sandbox' },
        { feature: 'Codebase Depth', ide: 'Full — indexes entire repository, maintains cross-file context', builder: 'Limited — context bounded by platform session and token window' },
        { feature: 'Enterprise Readiness', ide: 'High — local execution, data residency control, audit log capability', builder: 'Low to medium — most lack on-prem options; Replit is the exception with SOC 2' },
        { feature: 'Security & Privacy', ide: 'Strong — code stays local or on private infrastructure', builder: 'Variable — code processed on shared cloud infrastructure' },
        { feature: 'Scaling Capability', ide: 'Production-grade — integrates with any cloud infrastructure', builder: 'Prototype-to-medium scale — platform hosting hits limits at production traffic' },
        { feature: 'CI/CD Integration', ide: 'Native — connects to GitHub Actions, Jenkins, custom pipelines', builder: 'Limited — basic Git export; Lovable has two-way GitHub sync' },
        { feature: 'Model Flexibility', ide: 'Full — Cursor supports Claude, GPT-5, Gemini; Claude Code uses Claude natively', builder: 'Constrained — platform chooses underlying models' },
        { feature: 'Best For', ide: 'Professional teams, enterprise development, complex multi-file codebases', builder: 'Rapid prototyping, non-technical founders, MVP validation, demos' }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
            <h3 style={{
                color: '#7dd3fc',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                letterSpacing: '-0.02em'
            }}>Architecture Side-by-Side: IDEs vs Builders</h3>

            <div style={{ overflowX: 'auto', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px', fontSize: '15px' }}>
                    <thead>
                        <tr style={{ background: 'rgba(56, 189, 248, 0.1)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)' }}>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#e0f2fe', width: '20%' }}>Feature Dimension</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#38bdf8', width: '40%' }}>Agentic IDEs</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: '#f472b6', width: '40%' }}>Browser-Based Builders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-border-light)', backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '16px', color: 'var(--color-text-secondary)', fontWeight: '600' }}>{row.feature}</td>
                                <td style={{ padding: '16px', color: '#bae6fd', borderLeft: '1px solid rgba(255,255,255,0.05)', lineHeight: '1.5' }}>{row.ide}</td>
                                <td style={{ padding: '16px', color: '#fbcfe8', borderLeft: '1px solid rgba(255,255,255,0.05)', lineHeight: '1.5' }}>{row.builder}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IDEvsBuilderMetaTable;
