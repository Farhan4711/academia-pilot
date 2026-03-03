'use client';

import React from 'react';

export default function MCPServerCards() {
    const servers = [
        {
            title: 'FireCrawl MCP',
            useCase: 'Live Documentation',
            description: 'Scrapes current API docs on-the-fly. Prevents hallucinating retired endpoints or obsolete syntax.',
            icon: '🔥',
            color: '#FF4D4D'
        },
        {
            title: 'Supabase MCP',
            useCase: 'Real-time Schema',
            description: 'Reads your actual database structure. Agent cannot invent table names or column types that don\'t exist.',
            icon: '⚡',
            color: '#3ECF8E'
        },
        {
            title: 'GitHub MCP',
            useCase: 'Issue Context',
            description: 'Fetches full issue history, PR comments, and linked commits. Stops agents from solving the wrong problem.',
            icon: '🐙',
            color: '#A371F7'
        },
        {
            title: 'Browser MCP',
            useCase: 'Visual Debugging',
            description: 'Allows agents to "see" the running app via screenshots and recordings. Fixes UI regressions globally.',
            icon: '🌐',
            color: '#4285F4'
        }
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-6)',
            margin: 'var(--space-8) 0'
        }}>
            {servers.map((server, idx) => (
                <div key={idx} style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 20px -5px rgba(0,0,0,0.2)',
                    cursor: 'default'
                }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px -10px rgba(0,0,0,0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px -5px rgba(0,0,0,0.2)';
                    }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: `${server.color}15`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        border: `1px solid ${server.color}30`
                    }}>
                        {server.icon}
                    </div>

                    <div>
                        <div style={{ fontSize: '10px', color: server.color, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '2px' }}>
                            {server.useCase}
                        </div>
                        <h4 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'bold' }}>{server.title}</h4>
                    </div>

                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                        {server.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
