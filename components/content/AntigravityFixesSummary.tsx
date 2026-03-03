'use client';

import React from 'react';

export default function AntigravityFixesSummary() {
    const fixes = [
        { hack: '1. .gravity config', solves: 'Agent deletes critical code', implementation: 'Create .gravity in project root', priority: 'CRITICAL' },
        { hack: '2. Terminal Allow List', solves: 'Dangerous shell commands', implementation: 'Set policy to Off + Whitelist', priority: 'CRITICAL' },
        { hack: '3. Context Triage', solves: 'Agent "forgets" files (Lobotomy)', implementation: 'Model rotation + Checkpoints', priority: 'HIGH' },
        { hack: '4. Artifact Policy', solves: 'Silent errors/Incorrect code', implementation: 'Set Implementation to "Review Required"', priority: 'HIGH' },
        { hack: '5. MCP Servers', solves: 'Hallucinations & Invented APIs', implementation: 'Connect FireCrawl, Supabase, GitHub', priority: 'MEDIUM' }
    ];

    return (
        <div style={{
            margin: 'var(--space-8) 0',
            overflowX: 'auto',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
        }}>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--text-sm)',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                        <th style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>Hack</th>
                        <th style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>Problem Solved</th>
                        <th style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>Implementation</th>
                        <th style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {fixes.map((fix, idx) => (
                        <tr key={idx} style={{
                            borderBottom: idx === fixes.length - 1 ? 'none' : '1px solid var(--color-border)',
                            backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
                        }}>
                            <td style={{ padding: 'var(--space-4)', fontWeight: 'bold', color: 'var(--color-accent)' }}>{fix.hack}</td>
                            <td style={{ padding: 'var(--space-4)' }}>{fix.solves}</td>
                            <td style={{ padding: 'var(--space-4)', fontSize: '12px' }}><code>{fix.implementation}</code></td>
                            <td style={{ padding: 'var(--space-4)' }}>
                                <span style={{
                                    fontSize: '10px',
                                    fontWeight: 'bold',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    backgroundColor: fix.priority === 'CRITICAL' ? 'rgba(239, 68, 68, 0.1)' : (fix.priority === 'HIGH' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)'),
                                    color: fix.priority === 'CRITICAL' ? '#EF4444' : (fix.priority === 'HIGH' ? '#F59E0B' : '#10B981'),
                                    border: `1px solid ${fix.priority === 'CRITICAL' ? 'rgba(239, 68, 68, 0.3)' : (fix.priority === 'HIGH' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)')}`
                                }}>
                                    {fix.priority}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
