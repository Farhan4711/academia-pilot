'use client';
import React, { useState } from 'react';

const ACPIntroDiagram: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'acp' | 'pre-acp'>('acp');

    return (
        <div style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid #27272a',
            color: '#e4e4e7'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--color-text-primary)',
                    fontSize: '24px',
                    fontWeight: '800',
                    margin: '0 0 16px 0'
                }}>
                    Architecture: Agent Client Protocol (ACP)
                </h3>
                
                <div style={{ display: 'inline-flex', background: '#18181b', borderRadius: '8px', padding: '4px', gap: '4px' }}>
                    <button 
                        onClick={() => setSelectedTab('acp')}
                        style={{
                            background: selectedTab === 'acp' ? '#3b82f6' : 'transparent',
                            color: selectedTab === 'acp' ? 'var(--color-text-primary)' : '#a1a1aa',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            fontFamily: "'Inter', sans-serif",
                            transition: 'all 0.2s'
                        }}
                    >
                        With ACP (Zed, JetBrains)
                    </button>
                    <button 
                        onClick={() => setSelectedTab('pre-acp')}
                        style={{
                            background: selectedTab === 'pre-acp' ? '#ef4444' : 'transparent',
                            color: selectedTab === 'pre-acp' ? 'var(--color-text-primary)' : '#a1a1aa',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            fontFamily: "'Inter', sans-serif",
                            transition: 'all 0.2s'
                        }}
                    >
                        Without ACP (Cursor)
                    </button>
                </div>
            </div>

            <div style={{ 
                background: '#18181b', 
                borderRadius: '12px', 
                padding: '40px 20px', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40px'
            }}>
                {selectedTab === 'acp' ? (
                    // ACP Workflow
                    <>
                        {/* Top Row: IDEs */}
                        <div style={{ display: 'flex', gap: '32px', width: '100%', justifyContent: 'center' }}>
                            <div style={{ background: '#27272a', padding: '16px 32px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>Zed IDE</div>
                            </div>
                            <div style={{ background: '#27272a', padding: '16px 32px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>JetBrains</div>
                            </div>
                            <div style={{ background: '#27272a', padding: '16px 32px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>Any ACP Client</div>
                            </div>
                        </div>

                        {/* Middle: Standard Protocol */}
                        <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '2px dashed #3b82f6', 
                            padding: '16px', 
                            borderRadius: '8px',
                            width: '80%',
                            textAlign: 'center',
                            position: 'relative',
                            color: '#93c5fd'
                        }}>
                            ↑ ↓ Standardized Agent Client Protocol (ACP) JSON-RPC
                        </div>

                        {/* Bottom Row: Agents */}
                        <div style={{ display: 'flex', gap: '32px', width: '100%', justifyContent: 'center' }}>
                            <div style={{ background: 'linear-gradient(to bottom right, #f43f5e, #be123c)', padding: '16px 32px', borderRadius: '8px', color: 'var(--color-text-primary)', textAlign: 'center', boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)' }}>
                                <div style={{ fontWeight: 'bold' }}>Kimi Code</div>
                                <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>Native Support</div>
                            </div>
                            <div style={{ background: '#27272a', padding: '16px 32px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: '#a1a1aa' }}>Goose CLI</div>
                            </div>
                            <div style={{ background: '#27272a', padding: '16px 32px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: '#a1a1aa' }}>Future Agents</div>
                            </div>
                        </div>

                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#a1a1aa', textAlign: 'center', maxWidth: '600px', margin: 0 }}>
                            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>The ACP Advantage:</span> Any new agent implementing ACP works immediately in any supporting IDE. Kimi Code arrived in JetBrains on day one without waiting for a custom plugin.
                        </p>
                    </>
                ) : (
                    // Non-ACP Workflow
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', alignItems: 'center' }}>
                            {/* Editor */}
                            <div style={{ background: '#27272a', padding: '24px 40px', borderRadius: '8px', border: '1px solid #3f3f46', textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', color: 'var(--color-text-primary)', fontSize: '18px' }}>Cursor IDE</div>
                                <div style={{ fontSize: '12px', color: '#a1a1aa', marginTop: '8px' }}>Proprietary Agent System</div>
                            </div>

                            {/* Lines / Wait */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ color: '#ef4444', fontSize: '12px', fontWeight: 'bold' }}>Custom Integration Required</div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ height: '2px', width: '60px', background: '#3f3f46', position: 'relative' }} />
                                    <div style={{ color: '#71717a', padding: '0 8px' }}>⏳</div>
                                    <div style={{ height: '2px', width: '60px', background: '#3f3f46', position: 'relative' }} />
                                </div>
                                <div style={{ color: '#71717a', fontSize: '11px' }}>(Botleneck)</div>
                            </div>

                            {/* Agent */}
                            <div style={{ background: '#f43f5e', padding: '24px', borderRadius: '8px', color: 'var(--color-text-primary)', textAlign: 'center', opacity: 0.5 }}>
                                <div style={{ fontWeight: 'bold' }}>Kimi Code CLI</div>
                                <div style={{ fontSize: '11px', marginTop: '4px' }}>Waiting for support</div>
                            </div>
                        </div>

                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#a1a1aa', textAlign: 'center', maxWidth: '600px', margin: 0 }}>
                            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>The Friction Point:</span> Without ACP, Cursor users must wait for the Cursor team to manually build integrations for new agents, or use clunky workarounds.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ACPIntroDiagram;
