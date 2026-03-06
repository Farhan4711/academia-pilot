'use client';
import React from 'react';

interface ProductMode {
    title: string;
    interface: string;
    target: string;
    description: string;
    icon: string;
    color: string;
}

const modes: ProductMode[] = [
    {
        title: 'Claude.ai Chat',
        interface: 'Web + Mobile',
        target: 'Everyone',
        description: 'Conversation, analysis, writing, Q&A, and document review.',
        icon: '💬',
        color: 'var(--color-accent)'
    },
    {
        title: 'Claude Cowork',
        interface: 'Desktop App',
        target: 'Non-technical Pros',
        description: 'Autonomous file tasks, cross-app workflows, and plugin automation.',
        icon: '💼',
        color: '#34d399' // Emerald
    },
    {
        title: 'Claude in Chrome',
        interface: 'Browser Extension',
        target: 'Researchers & Analysts',
        description: 'AI-powered browsing, page analysis, and form automation.',
        icon: '🌐',
        color: '#60a5fa' // Azure
    },
    {
        title: 'Claude Code',
        interface: 'Terminal (CLI)',
        target: 'Developers',
        description: 'Codebase understanding, multi-file editing, and autonomous coding.',
        icon: '💻',
        color: 'var(--color-cta)'
    }
];

const ClaudeProductStack: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                {modes.map((mode, i) => (
                    <div
                        key={i}
                        className="hud-border transition"
                        style={{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-surface)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)',
                            borderLeft: `4px solid ${mode.color}`,
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <span style={{ fontSize: 'var(--text-3xl)' }}>{mode.icon}</span>
                            <span
                                style={{
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 'var(--font-bold)',
                                    textTransform: 'uppercase',
                                    color: mode.color,
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    padding: '2px 8px',
                                    borderRadius: 'var(--radius-sm)'
                                }}
                            >
                                {mode.interface}
                            </span>
                        </div>
                        <div>
                            <h4 style={{ margin: 0, color: 'var(--color-text-primary)' }}>{mode.title}</h4>
                            <p
                                style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-text-muted)',
                                    margin: '4px 0 0',
                                    fontWeight: 'var(--font-semibold)'
                                }}
                            >
                                For: {mode.target}
                            </p>
                        </div>
                        <p className="card-description" style={{ margin: 0 }}>
                            {mode.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClaudeProductStack;
