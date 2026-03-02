'use client';
import React from 'react';

const OpenClawArchitectureDiagram: React.FC = () => {
    const layers = [
        {
            title: 'Layer 1: The Gateway',
            subtitle: 'WebSocket Control Plane (Port 18789)',
            desc: 'The single entry/exit point. Manages sessions, routing, and connection persistence between channels and agents.',
            icon: '🔌',
            primary: '#38bdf8'
        },
        {
            title: 'Layer 2: Channel Integrations',
            subtitle: 'Messaging Native Hub',
            desc: 'Connectors for WhatsApp, Telegram, Slack, iMessage, and more. Routes incoming messages to the Gateway.',
            icon: '📱',
            primary: '#818cf8'
        },
        {
            title: 'Layer 3: Context Assembly',
            subtitle: 'Identity & Memory Layer',
            desc: 'Packages SOUL.md (Persona), MEMORY.md (Facts), and session JSON history into a prompt-ready context.',
            icon: '🧠',
            primary: '#6366f1'
        },
        {
            title: 'Layer 4: The Agentic Loop',
            subtitle: 'ReAct Reasoning Engine',
            desc: 'Autonomous loop: Reason → Act. Calls tools, processes results, and decides whether to continue or respond.',
            icon: '🔄',
            primary: '#8b5cf6'
        },
        {
            title: 'Layer 5: Proactive Execution',
            subtitle: 'Cron-Triggered Tasks',
            desc: 'Scheduled wake-ups for the agent to monitor feeds, check calendars, and execute tasks without user input.',
            icon: '⏰',
            primary: '#c084fc'
        },
        {
            title: 'Layer 6: ClawHub Skills',
            subtitle: 'Tool & Skill Catalog',
            desc: '100+ preconfigured tools for shell execution, file system access, browser automation, and API calls.',
            icon: '🛠️',
            primary: '#fbbf24'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '60px 0',
            padding: '40px',
            background: 'rgba(15, 23, 42, 0.4)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{
                textAlign: 'center',
                color: '#f8fafc',
                fontSize: '24px',
                fontWeight: '800',
                marginBottom: '48px',
                letterSpacing: '-0.02em'
            }}>
                OpenClaw Pipeline: 6-Layer Architecture
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                {/* Connector Line */}
                <div style={{
                    position: 'absolute',
                    top: '40px',
                    bottom: '40px',
                    left: '30px',
                    width: '2px',
                    background: 'linear-gradient(180deg, #38bdf8 0%, #fbbf24 100%)',
                    opacity: 0.2,
                    zIndex: 0
                }} />

                {layers.map((layer, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'start',
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '20px',
                        border: `1px solid ${layer.primary}15`,
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '16px',
                            background: `${layer.primary}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            border: `1px solid ${layer.primary}30`,
                            flexShrink: 0
                        }}>
                            {layer.icon}
                        </div>

                        <div>
                            <div style={{
                                color: layer.primary,
                                fontSize: '11px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '4px'
                            }}>
                                {layer.subtitle}
                            </div>
                            <h4 style={{
                                color: '#f1f5f9',
                                fontSize: '18px',
                                fontWeight: '700',
                                marginBottom: '8px'
                            }}>
                                {layer.title}
                            </h4>
                            <p style={{
                                color: '#94a3b8',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                {layer.desc}
                            </p>
                        </div>

                        {idx < layers.length - 1 && (
                            <div style={{
                                position: 'absolute',
                                bottom: '-15px',
                                left: '26px',
                                color: layers[idx + 1].primary,
                                fontSize: '18px',
                                opacity: 0.3
                            }}>
                                ↓
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '40px',
                padding: '20px',
                background: 'rgba(56, 189, 248, 0.05)',
                borderRadius: '16px',
                border: '1px dashed rgba(56, 189, 248, 0.2)',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>
                    <strong style={{ color: '#38bdf8' }}>Technical Insight:</strong> The integration of <strong>MEMORY.md</strong> and <strong>SOUL.md</strong> at Layer 3 allows for persistent identity across multiple messaging channels simultaneously.
                </p>
            </div>
        </div>
    );
};

export default OpenClawArchitectureDiagram;
