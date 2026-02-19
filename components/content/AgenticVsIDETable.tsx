'use client';
import React from 'react';

const AgenticVsIDETable: React.FC = () => {
    const comparisons = [
        {
            dimension: 'Control Model',
            traditional: 'Human-driven, tool responds to commands',
            agentic: 'AI-driven, autonomous goal pursuit'
        },
        {
            dimension: 'Task Execution',
            traditional: 'Manual trigger by developer',
            agentic: 'Autonomous execution with feedback loops'
        },
        {
            dimension: 'Code Generation',
            traditional: 'Autocomplete, snippet insertion',
            agentic: 'Full module/feature generation'
        },
        {
            dimension: 'Debugging',
            traditional: 'Human sets breakpoints, inspects state',
            agentic: 'AI reads error logs, iterates code until fixed'
        },
        {
            dimension: 'Testing',
            traditional: 'Human writes tests, manually runs suite',
            agentic: 'AI generates tests, auto-runs, self-corrects failures'
        },
        {
            dimension: 'Refactoring',
            traditional: 'Human-initiated, IDE suggests changes',
            agentic: 'AI analyzes codebase, proposes & implements refactors'
        },
        {
            dimension: 'Deployment',
            traditional: 'Human triggers CI/CD pipeline',
            agentic: 'AI-managed deployment with rollback logic'
        },
        {
            dimension: 'Learning',
            traditional: 'Static tool, no adaptation',
            agentic: 'Learns from codebase patterns, previous errors'
        },
        {
            dimension: 'Multi-File Operations',
            traditional: 'Sequential, single-focus editing',
            agentic: 'Parallel editing across dozens of files'
        },
        {
            dimension: 'Execution Environment',
            traditional: 'Local developer machine',
            agentic: 'Cloud-based containerized execution'
        },
        {
            dimension: 'Collaboration',
            traditional: 'Developer ↔ Developer',
            agentic: 'AI Agent ↔ AI Agent (with human oversight)'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Space Mono', 'Courier New', monospace",
            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            overflow: 'hidden'
        }}>
            <h3 style={{
                color: '#818cf8',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '32px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(129, 140, 248, 0.3)'
            }}>
                Architectural Comparison
            </h3>

            <div style={{
                overflowX: 'auto',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(99, 102, 241, 0.15)'
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '14px',
                    minWidth: '800px'
                }}>
                    <thead>
                        <tr style={{
                            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
                            borderBottom: '2px solid rgba(129, 140, 248, 0.3)'
                        }}>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#a5b4fc',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '25%'
                            }}>
                                Dimension
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#fbbf24',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '37.5%'
                            }}>
                                Traditional IDE
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#34d399',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '37.5%'
                            }}>
                                Agentic AI System
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
                                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = index % 2 === 0
                                        ? 'rgba(15, 23, 42, 0.5)'
                                        : 'rgba(30, 41, 59, 0.3)';
                                }}>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#e0e7ff',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    borderRight: '1px solid rgba(71, 85, 105, 0.2)'
                                }}>
                                    {row.dimension}
                                </td>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#cbd5e1',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    borderRight: '1px solid rgba(71, 85, 105, 0.2)'
                                }}>
                                    {row.traditional}
                                </td>
                                <td style={{
                                    padding: '16px 20px',
                                    color: '#cbd5e1',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '3px',
                                        background: 'linear-gradient(180deg, #34d399 0%, #10b981 100%)',
                                        opacity: 0.5
                                    }} />
                                    {row.agentic}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(99, 102, 241, 0.05)',
                borderLeft: '3px solid #818cf8',
                borderRadius: '4px'
            }}>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic'
                }}>
                    <strong style={{ color: '#818cf8' }}>Key Insight:</strong> The comparison reveals a fundamental architectural divergence.
                    Traditional IDEs optimize for human control and manual execution, while agentic systems
                    prioritize autonomous operation with human oversight.
                </p>
            </div>
        </div>
    );
}

export default AgenticVsIDETable;
