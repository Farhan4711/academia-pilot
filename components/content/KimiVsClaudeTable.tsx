'use client';
import React, { useState } from 'react';

const KimiVsClaudeTable: React.FC = () => {
    // We categorize the data for easier reading on mobile
    const [activeCategory, setActiveCategory] = useState<'all' | 'performance' | 'cost' | 'ecosystem'>('all');

    const data = [
        { feature: 'Primary Model', kimi: 'Kimi K2.5 (1T MoE)', claude: 'Claude Opus 4.6', cursor: 'Multi-model (Sonnet, etc)', category: 'ecosystem' },
        { feature: 'SWE-bench Verified', kimi: '76.8%', claude: '80.9% (Leads)', cursor: 'Model-dependent', category: 'performance' },
        { feature: 'LiveCodeBench', kimi: '83–85% (Leads)', claude: '64%', cursor: 'Model-dependent', category: 'performance' },
        { feature: 'Agentic multi-step (HLE-Full)', kimi: '50.2% (Leads)', claude: '32%', cursor: 'N/A', category: 'performance' },
        { feature: 'Hallucination Rate (AA-Omni)', kimi: '-11 (Worse)', claude: '+10 (Better)', cursor: 'Model-dependent', category: 'performance' },
        { feature: 'Input Cost per 1M tokens', kimi: '$0.60', claude: '~$15.00', cursor: '$20/mo flat', category: 'cost' },
        { feature: 'Output Cost per 1M tokens', kimi: '$2.50 (Note: High Verbosity)', claude: '~$75.00', cursor: 'Included in flat rate', category: 'cost' },
        { feature: 'Context Window', kimi: '256K', claude: '200K (1M Beta Max)', cursor: '20K–100K approx', category: 'ecosystem' },
        { feature: 'Parallel Agents', kimi: '100 (Agent Swarm)', claude: '16 (Agent Teams)', cursor: '5–8', category: 'performance' },
        { feature: 'IDE Integration', kimi: 'ACP (Zed, JetBrains, VSCode ext)', claude: 'Terminal + Extensions', cursor: 'VS Code Fork (Native)', category: 'ecosystem' },
        { feature: 'Open Source', kimi: 'Yes (Apache 2.0 CLI)', claude: 'No', cursor: 'No', category: 'ecosystem' },
        { feature: 'Self-hostable', kimi: 'Yes (HuggingFace)', claude: 'No', cursor: 'No', category: 'ecosystem' },
        { feature: 'Windows Native', kimi: 'No (WSL2 Only)', claude: 'Yes', cursor: 'Yes', category: 'ecosystem' },
    ];

    const filteredData = activeCategory === 'all' ? data : data.filter(d => d.category === activeCategory);

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(to bottom, #09090b, #18181b)',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a',
            overflowX: 'auto'
        }}>
            <h3 style={{ color: 'var(--color-text-primary)', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
                Tool Landscape Summary
            </h3>
            <p style={{ color: '#a1a1aa', textAlign: 'center', marginBottom: '24px', fontSize: '14px' }}>
                Comparing Kimi Code CLI against Claude Code and Cursor.
            </p>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
                {[
                    { id: 'all', label: 'All Dimensions' },
                    { id: 'performance', label: 'Performance & Capability' },
                    { id: 'cost', label: 'Cost & Economics' },
                    { id: 'ecosystem', label: 'Ecosystem & Integration' }
                ].map(btn => (
                    <button
                        key={btn.id}
                        onClick={() => setActiveCategory(btn.id as any)}
                        style={{
                            background: activeCategory === btn.id ? '#3b82f6' : '#27272a',
                            color: activeCategory === btn.id ? 'var(--color-text-primary)' : '#d4d4d8',
                            border: '1px solid',
                            borderColor: activeCategory === btn.id ? '#60a5fa' : '#3f3f46',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s'
                        }}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div style={{ minWidth: '700px' }}>
                {/* Table Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr', gap: '16px', padding: '0 16px 16px 16px', borderBottom: '2px solid #3f3f46', color: '#a1a1aa', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <div>Dimension</div>
                    <div style={{ color: '#f43f5e' }}>Kimi Code</div>
                    <div style={{ color: '#d97757' }}>Claude Code</div>
                    <div>Cursor</div>
                </div>

                {/* Table Body */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {filteredData.map((row, idx) => (
                        <div key={idx} style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr', 
                            gap: '16px', 
                            padding: '16px', 
                            borderBottom: '1px solid #27272a',
                            background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                            alignItems: 'center',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'}
                        >
                            <div style={{ color: '#f4f4f5', fontWeight: '600', fontSize: '14px' }}>{row.feature}</div>
                            <div style={{ color: '#fed7aa', fontSize: '14px' }}>
                                {row.kimi.includes('Worse') ? <span style={{ color: '#ef4444' }}>{row.kimi}</span> :
                                 row.kimi.includes('Leads') || row.kimi.includes('Yes') ? <span style={{ color: '#4ade80' }}>{row.kimi}</span> :
                                 row.kimi}
                            </div>
                            <div style={{ color: '#d4d4d8', fontSize: '14px' }}>
                                {row.claude.includes('Leads') || row.claude.includes('Better') || row.claude.includes('Yes') && !row.feature.includes('Cost Window') ? <span style={{ color: '#4ade80' }}>{row.claude}</span> : 
                                 row.claude.includes('~') ? <span style={{ color: '#ef4444' }}>{row.claude}</span> :
                                 row.claude}
                            </div>
                            <div style={{ color: '#a1a1aa', fontSize: '13px' }}>{row.cursor}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KimiVsClaudeTable;
