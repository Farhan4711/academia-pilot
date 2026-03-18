'use client';
import React from 'react';

const OpenClawTechComparison: React.FC = () => {
    const data = [
        { tech: 'OpenClaw', model: 'Messaging-native', scope: 'Local OS + APIs', state: 'Persistent (MEMORY.md)', color: '#38bdf8' },
        { tech: 'LangChain', model: 'Programmatic API', scope: 'Cloud-first', state: 'Optional (External DB)', color: '#818cf8' },
        { tech: 'n8n / Make', model: 'Visual Workflow', scope: 'Trigger-based', state: 'Stateless per run', color: '#6366f1' },
        { tech: 'AutoGPT', model: 'Web UI / CLI', scope: 'Goal-directed', state: 'Task files, no identity', color: '#8b5cf6' },
        { tech: 'Botpress', model: 'Chat Flow Builder', scope: 'Hosted Runtime', state: 'Database session', color: '#c084fc' },
        { tech: 'ChatGPT', model: 'Web / App', scope: 'Cloud Only', state: 'Cloud memory', color: 'var(--color-text-muted)' }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            background: 'var(--color-surface)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
            <div style={{ padding: '32px', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--color-border-light)' }}>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '20px', fontWeight: '800' }}>Platform Comparison: Interaction & State</h3>
                <p style={{ margin: '8px 0 0', color: 'var(--color-text-muted)', fontSize: '13px' }}>How OpenClaw differs from traditional AI frameworks and workflow tools.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                            {['Technology', 'Interaction Model', 'Execution Scope', 'State Persistence'].map((h, i) => (
                                <th key={i} style={{ padding: '20px', color: '#64748b', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} style={{
                                borderBottom: idx === data.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.2s ease'
                            }}>
                                <td style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, boxShadow: `0 0 10px ${row.color}` }} />
                                        <span style={{ color: '#f1f5f9', fontWeight: '700', fontSize: '14px' }}>{row.tech}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px', color: 'var(--color-text-secondary)', fontSize: '13px' }}>{row.model}</td>
                                <td style={{ padding: '20px', color: 'var(--color-text-secondary)', fontSize: '13px' }}>{row.scope}</td>
                                <td style={{ padding: '20px' }}>
                                    <span style={{
                                        color: row.tech === 'OpenClaw' ? row.color : '#64748b',
                                        fontSize: '13px',
                                        fontWeight: row.tech === 'OpenClaw' ? '700' : '400'
                                    }}>
                                        {row.state}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenClawTechComparison;
