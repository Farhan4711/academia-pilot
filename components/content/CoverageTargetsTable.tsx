'use client';
import React from 'react';

const CoverageTargetsTable: React.FC = () => {
    const targets = [
        {
            category: 'Authentication functions',
            lineCoverage: '100%',
            branchCoverage: '100%',
            reasoning: 'Any uncovered path is a potential bypass'
        },
        {
            category: 'Database access functions',
            lineCoverage: '100%',
            branchCoverage: '100% including error paths',
            reasoning: 'Uncovered error paths = silent failures'
        },
        {
            category: 'API route handlers',
            lineCoverage: '100% of methods',
            branchCoverage: 'All auth states (authed / unauthed / wrong user)',
            reasoning: 'BOLA lives in uncovered states'
        },
        {
            category: 'Business logic',
            lineCoverage: '80%',
            branchCoverage: '80% minimum',
            reasoning: 'Direct user-facing behavior'
        },
        {
            category: 'Utility functions',
            lineCoverage: '70%',
            branchCoverage: 'Edge cases for security inputs',
            reasoning: 'Injection vectors live here'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            background: 'var(--color-surface)',
            padding: '32px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            overflow: 'hidden'
        }}>
            <h3 style={{
                color: '#c4b5fd',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '24px',
                letterSpacing: '0.5px'
            }}>
                Coverage Targets: Vibe-Coded Production Systems
            </h3>

            <div style={{
                overflowX: 'auto',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.15)'
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '14px',
                    minWidth: '800px'
                }}>
                    <thead>
                        <tr style={{
                            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
                            borderBottom: '2px solid rgba(167, 139, 250, 0.3)'
                        }}>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: 'var(--color-border)', fontWeight: '600', width: '25%' }}>Code Category</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#38bdf8', fontWeight: '600', width: '15%' }}>Line Coverage</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: '#a78bfa', fontWeight: '600', width: '25%' }}>Branch Coverage</th>
                            <th style={{ padding: '16px 20px', textAlign: 'left', color: 'var(--color-text-secondary)', fontWeight: '600', width: '35%' }}>Why This Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {targets.map((row, index) => (
                            <tr key={index} style={{
                                background: index % 2 === 0 ? 'rgba(15, 23, 42, 0.4)' : 'rgba(30, 41, 59, 0.2)',
                                borderBottom: index < targets.length - 1 ? '1px solid rgba(71, 85, 105, 0.2)' : 'none',
                                transition: 'background 0.2s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'rgba(15, 23, 42, 0.4)' : 'rgba(30, 41, 59, 0.2)'}
                            >
                                <td style={{ padding: '16px 20px', color: '#f8fafc', fontWeight: '500' }}>
                                    {row.category}
                                </td>
                                <td style={{ padding: '16px 20px', color: '#bae6fd' }}>
                                    {row.lineCoverage}
                                </td>
                                <td style={{ padding: '16px 20px', color: '#ddd6fe' }}>
                                    {row.branchCoverage}
                                </td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-muted)', fontSize: '13px', fontStyle: 'italic' }}>
                                    {row.reasoning}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(244, 63, 94, 0.05)', borderLeft: '3px solid #fb7185', borderRadius: '4px' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', margin: 0 }}>
                    <strong style={{ color: '#fb7185' }}>The Coverage Trap:</strong> 80% overall test coverage frequently means 100% UI rendering coverage and 0% authentication coverage. Overall coverage is a vanity metric; coverage by code category is the meaningful security signal.
                </p>
            </div>
        </div>
    );
}

export default CoverageTargetsTable;
