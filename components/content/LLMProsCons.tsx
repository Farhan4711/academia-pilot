'use client';
import React, { useState } from 'react';

interface LLMProsConsProps {
    pros: string[];
    cons: string[];
}

export default function LLMProsCons({ pros, cons }: LLMProsConsProps) {
    const [activeTab, setActiveTab] = useState<'pros' | 'cons'>('pros');

    return (
        <div style={{
            margin: 'var(--space-8) 0',
            background: 'linear-gradient(135deg, rgba(15,20,40,0.9) 0%, rgba(20,30,60,0.9) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 16px 48px -8px rgba(0,0,0,0.4)',
        }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {(['pros', 'cons'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            flex: 1,
                            padding: '16px',
                            background: activeTab === tab
                                ? (tab === 'pros' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)')
                                : 'transparent',
                            border: 'none',
                            borderBottom: activeTab === tab
                                ? `2px solid ${tab === 'pros' ? '#22c55e' : '#ef4444'}`
                                : '2px solid transparent',
                            color: activeTab === tab
                                ? (tab === 'pros' ? '#22c55e' : '#ef4444')
                                : 'var(--color-text-muted)',
                            fontWeight: '700',
                            fontSize: 'var(--text-sm)',
                            cursor: 'pointer',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <span style={{ fontSize: '16px' }}>{tab === 'pros' ? '✅' : '⚠️'}</span>
                        {tab === 'pros' ? `Pros (${pros.length})` : `Cons (${cons.length})`}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div style={{ padding: 'var(--space-6)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {(activeTab === 'pros' ? pros : cons).map((item, i) => (
                        <li
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '12px 16px',
                                background: activeTab === 'pros'
                                    ? 'rgba(34,197,94,0.05)'
                                    : 'rgba(239,68,68,0.05)',
                                borderRadius: '10px',
                                border: `1px solid ${activeTab === 'pros' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'}`,
                                transition: 'transform 0.15s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                        >
                            <span style={{
                                fontSize: '16px',
                                flexShrink: 0,
                                marginTop: '1px',
                                color: activeTab === 'pros' ? '#22c55e' : '#ef4444',
                            }}>
                                {activeTab === 'pros' ? '→' : '→'}
                            </span>
                            <span style={{ fontSize: '14px', color: 'rgba(203,213,225,0.85)', lineHeight: 1.5 }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
