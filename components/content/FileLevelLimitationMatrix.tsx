'use client';
import React from 'react';

const FileLevelLimitationMatrix: React.FC = () => {
    const comparisons = [
        {
            capability: 'Context Scope',
            fileLevel: 'Current file, explicit imports',
            repoLevel: 'Full codebase: all files, modules, and services'
        },
        {
            capability: 'Historical Awareness',
            fileLevel: 'None — stateless per session',
            repoLevel: 'Commit graph, PR history, blame annotations'
        },
        {
            capability: 'Dependency Awareness',
            fileLevel: 'Direct imports only',
            repoLevel: 'Full transitive dependency graph'
        },
        {
            capability: 'Refactor Depth',
            fileLevel: 'Single file or small selection',
            repoLevel: 'Cross-module, cross-service, repository-wide'
        },
        {
            capability: 'Impact Analysis',
            fileLevel: 'Cannot assess downstream effects',
            repoLevel: 'Predicts affected components before change'
        },
        {
            capability: 'Architectural Reasoning',
            fileLevel: 'Pattern completion within file',
            repoLevel: 'System-level structure and convention detection'
        },
        {
            capability: 'PR Analysis',
            fileLevel: 'Reviews diff in isolation',
            repoLevel: 'Correlates change with historical patterns and downstream risk'
        },
        {
            capability: 'Onboarding Support',
            fileLevel: 'Explains current function',
            repoLevel: 'Explains system architecture and decision rationale'
        },
        {
            capability: 'Best Use Case',
            fileLevel: 'Boilerplate, inline completion',
            repoLevel: 'Refactoring, debugging, architecture decisions, code review'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            overflow: 'hidden'
        }}>
            <h3 style={{
                color: '#a78bfa',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(167, 139, 250, 0.3)'
            }}>
                The File-Level Limitation Matrix
            </h3>

            <div style={{
                overflowX: 'auto',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
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
                            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%)',
                            borderBottom: '2px solid rgba(167, 139, 250, 0.3)'
                        }}>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#c4b5fd',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '25%'
                            }}>
                                Capability
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#fca5a5',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '37.5%'
                            }}>
                                File-Level AI
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#38bdf8',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '37.5%'
                            }}>
                                Repository Intelligence
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisons.map((row, index) => (
                            <tr key={index} style={{
                                background: index % 2 === 0
                                    ? 'rgba(15, 23, 42, 0.5)'
                                    : 'rgba(30, 41, 59, 0.3)',
                                borderBottom: '1px solid rgba(71, 85, 105, 0.2)',
                                transition: 'background 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = index % 2 === 0
                                        ? 'rgba(15, 23, 42, 0.5)'
                                        : 'rgba(30, 41, 59, 0.3)';
                                }}>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#e2e8f0',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    borderRight: '1px solid rgba(71, 85, 105, 0.2)'
                                }}>
                                    {row.capability}
                                </td>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#f87171',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    borderRight: '1px solid rgba(71, 85, 105, 0.2)'
                                }}>
                                    {row.fileLevel}
                                </td>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#7dd3fc',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    position: 'relative',
                                    fontWeight: '500'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '3px',
                                        background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
                                        opacity: 0.5
                                    }} />
                                    {row.repoLevel}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(56, 189, 248, 0.05)',
                borderLeft: '3px solid #38bdf8',
                borderRadius: '4px'
            }}>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic'
                }}>
                    <strong style={{ color: '#38bdf8' }}>Key Insight:</strong> The table illustrates why the two categories serve different problems, not different quality levels. For inline autocomplete of known patterns, file-level AI is fast and sufficient. For any task that requires understanding how a change propagates, repository intelligence is the prerequisite.
                </p>
            </div>
        </div>
    );
}

export default FileLevelLimitationMatrix;
