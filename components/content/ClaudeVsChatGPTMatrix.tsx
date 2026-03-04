'use client';
import React from 'react';

const dimensions = [
    { label: 'Flagship Model', chatgpt: 'GPT-5', claude: 'Claude Opus 4.6 / Sonnet 4.6', winner: 'tie' },
    { label: 'Context Window', chatgpt: '128K tokens', claude: '200K (up to 1M on Max)', winner: 'claude' },
    { label: 'Memory', chatgpt: 'Persistent (opt-in)', claude: 'Recently added (free tier)', winner: 'chatgpt' },
    { label: 'Image Generation', chatgpt: 'DALL-E 3 (native)', claude: 'Not native', winner: 'chatgpt' },
    { label: 'Voice Mode', chatgpt: 'Advanced Voice Mode', claude: 'Available via app', winner: 'chatgpt' },
    { label: 'Web Search', chatgpt: 'Yes — native', claude: 'Yes — via tools', winner: 'tie' },
    { label: 'Code Agent', chatgpt: 'Codex (cloud, Pro)', claude: 'Claude Code (terminal, Max)', winner: 'tie' },
    { label: 'Document Analysis', chatgpt: 'File uploads', claude: '200K context advantage', winner: 'claude' },
    { label: 'Privacy Policy', chatgpt: 'Training data (default)', claude: 'Stricter data handling', winner: 'claude' },
    { label: 'Military Partnerships', chatgpt: '✓ Pentagon deal', claude: '✗ Refused Pentagon deal', winner: 'claude' },
    { label: 'Free Tier', chatgpt: 'Limited GPT-5', claude: 'Limited Sonnet 4.6', winner: 'tie' },
    { label: 'Paid Plans', chatgpt: 'Plus $20 / Pro $200', claude: 'Pro $20 / Max $100–$200', winner: 'tie' },
    { label: 'Weekly Active Users', chatgpt: '900M', claude: '~30M monthly', winner: 'chatgpt' },
    { label: 'Philosophy', chatgpt: 'Broad commercial deployment', claude: 'Safety-first, constitutional AI', winner: 'claude' },
];

function WinnerDot({ winner }: { winner: string }) {
    if (winner === 'tie') return <span style={{ fontSize: 9, color: 'var(--color-text-muted)' }}>—</span>;
    const color = winner === 'claude' ? '#7c3aed' : '#10b981';
    return <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />;
}

export default function ClaudeVsChatGPTMatrix() {
    const card: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        margin: 'var(--space-10) 0',
        fontFamily: 'var(--font-sans)',
    };

    return (
        <div style={card}>
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(16,185,129,0.05) 100%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a78bfa', marginBottom: 6 }}>⚔️ Head-to-Head</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Claude vs ChatGPT — Feature Matrix (2026)</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>14 dimensions compared. Neither is universally superior — the right choice depends on your specific workflow.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                            <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '22%' }}>Dimension</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', width: '32%' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>🟢 ChatGPT</span>
                            </th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7c3aed', width: '32%' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>🟣 Claude</span>
                            </th>
                            <th style={{ padding: '12px 12px', textAlign: 'center', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '9%' }}>Edge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dimensions.map((d, i) => (
                            <tr key={d.label} style={{
                                borderBottom: i < dimensions.length - 1 ? '1px solid var(--color-border)' : 'none',
                                background: d.winner === 'claude' ? 'rgba(124,58,237,0.03)' : d.winner === 'chatgpt' ? 'rgba(16,185,129,0.03)' : 'transparent',
                            }}>
                                <td style={{ padding: '10px 20px', fontSize: 12, fontWeight: 600, color: 'var(--color-text)' }}>{d.label}</td>
                                <td style={{ padding: '10px 16px', fontSize: 12, color: 'var(--color-text-muted)' }}>{d.chatgpt}</td>
                                <td style={{ padding: '10px 16px', fontSize: 12, color: 'var(--color-text-muted)' }}>{d.claude}</td>
                                <td style={{ padding: '10px 12px', textAlign: 'center' }}><WinnerDot winner={d.winner} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ padding: '14px 28px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-text-muted)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} /> ChatGPT advantage
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-text-muted)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#7c3aed' }} /> Claude advantage
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-text-muted)' }}>
                    — Equivalent
                </span>
            </div>
        </div>
    );
}
