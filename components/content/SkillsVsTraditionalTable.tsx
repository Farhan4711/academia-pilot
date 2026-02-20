'use client';
import React from 'react';

const SkillsVsTraditionalTable: React.FC = () => {
    const comparisons = [
        {
            dimension: 'Primary Coding',
            traditional: 'Manual implementation of all features',
            ai: 'AI-augmented coding with human review'
        },
        {
            dimension: 'Debugging',
            traditional: 'Manual breakpoints and log analysis',
            ai: 'AI-assisted root cause analysis + traditional methods'
        },
        {
            dimension: 'Testing',
            traditional: 'Manually write all tests',
            ai: 'AI-generated tests + human-written edge cases'
        },
        {
            dimension: 'Deployment',
            traditional: 'Manual pipeline configuration',
            ai: 'AI-optimized CI/CD with auto-scaling'
        },
        {
            dimension: 'API Integration',
            traditional: 'REST/GraphQL to traditional services',
            ai: 'LLM APIs + traditional APIs'
        },
        {
            dimension: 'Data Storage',
            traditional: 'SQL/NoSQL databases',
            ai: 'Relational + Vector databases for semantic search'
        },
        {
            dimension: 'Tool Usage',
            traditional: 'Static tools (IDE, Git, Docker)',
            ai: 'Agentic tools (AI pair programmers, autonomous agents)'
        },
        {
            dimension: 'Architecture Focus',
            traditional: 'Scalability, performance, reliability',
            ai: '+ Context management, prompt design, cost optimization'
        },
        {
            dimension: 'Career Trajectory',
            traditional: 'Junior → Mid → Senior → Staff → Principal',
            ai: 'Compressed: AI-capable juniors perform at mid-level speed'
        },
        {
            dimension: 'Salary (Entry-Level)',
            traditional: '$70K–$90K',
            ai: '$95K–$125K'
        },
        {
            dimension: 'Job Market Demand',
            traditional: 'Stable but competitive',
            ai: 'High demand, low supply (2026)'
        },
        {
            dimension: 'Key Differentiator',
            traditional: 'Clean code, system design',
            ai: '+ Prompt engineering, agent orchestration'
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
                marginBottom: '8px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(129, 140, 248, 0.3)'
            }}>
                Traditional vs AI Software Engineer
            </h3>
            <p style={{
                color: '#94a3b8',
                textAlign: 'center',
                fontSize: '14px',
                marginBottom: '32px',
                opacity: 0.8
            }}>
                12 dimensions that define the new engineering standard
            </p>

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
                                width: '22%'
                            }}>
                                Skill Area
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#fbbf24',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '39%'
                            }}>
                                🖥️ Traditional SWE
                            </th>
                            <th style={{
                                padding: '16px 20px',
                                textAlign: 'left',
                                color: '#34d399',
                                fontWeight: '600',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '39%'
                            }}>
                                🤖 AI Software Engineer
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
                                    {row.ai}
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
                    <strong style={{ color: '#818cf8' }}>The Honest Truth:</strong>{' '}
                    By 2028, &ldquo;AI Software Engineer&rdquo; will just be called &ldquo;Software Engineer.&rdquo;
                    The distinction only exists in 2026 because most developers haven&rsquo;t adapted yet.
                    Those who adapt early capture the salary premium and career acceleration.
                </p>
            </div>
        </div>
    );
}

export default SkillsVsTraditionalTable;
