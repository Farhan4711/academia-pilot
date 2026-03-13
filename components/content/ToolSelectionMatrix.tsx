'use client';
import React, { useState } from 'react';
import { ShieldCheck, Zap, Terminal, Globe, Code2, Rocket } from 'lucide-react';

const ToolSelectionMatrix: React.FC = () => {
    const tools = [
        {
            name: "Lovable",
            type: "Web SaaS Dashboard",
            comfort: "Zero / Beginner",
            why: "Full-stack with native Supabase + GitHub. No terminal. Code ownership via automatic commits.",
            recommended: true,
            icon: <ShieldCheck className="text-emerald-400" size={24} />
        },
        {
            name: "Replit Agent 3",
            type: "Complex Full-Stack",
            comfort: "Intermediate",
            why: "30+ integrations (Stripe, Figma). 200-min autonomous sessions. Full cloud IDE power.",
            recommended: false,
            icon: <Terminal className="text-blue-400" size={24} />
        },
        {
            name: "Bolt.new",
            type: "Fast Prototypes",
            comfort: "Beginner / Can read code",
            why: "8-10 minute scaffold. Impressive design. Best for investor demos and validation.",
            recommended: false,
            icon: <Zap className="text-amber-400" size={24} />
        },
        {
            name: "v0 by Vercel",
            type: "Design-Critical Next.js",
            comfort: "Beginner / Vercel users",
            why: "Beautiful UI components. Smoothest Vercel deployment flow. Ideal for UI-first products.",
            recommended: false,
            icon: <Globe className="text-purple-400" size={24} />
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{
                    color: '#fafafa',
                    fontSize: '24px',
                    fontWeight: '800',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.025em'
                }}>
                    2026 Founder's Tool Selection Matrix
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
                    Choosing the right builder for your SaaS type and technical comfort level.
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 12px' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '12px 16px', color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>Builder</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>SaaS Type</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>Comfort Level</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>The "Why"</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool, idx) => (
                            <tr key={idx} style={{ 
                                background: tool.recommended ? 'rgba(16, 185, 129, 0.03)' : '#18181b', 
                                border: '1px solid #27272a'
                            }}>
                                <td style={{ padding: '20px 16px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', border: '1px solid #27272a', borderRight: 'none' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        {tool.icon}
                                        <div>
                                            <div style={{ color: '#fafafa', fontSize: '15px', fontWeight: '700' }}>{tool.name}</div>
                                            {tool.recommended && <span style={{ color: '#10b981', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase' }}>Recommended Default</span>}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 16px', color: '#e4e4e7', fontSize: '14px', borderTop: '1px solid #27272a', borderBottom: '1px solid #27272a' }}>{tool.type}</td>
                                <td style={{ padding: '20px 16px', borderTop: '1px solid #27272a', borderBottom: '1px solid #27272a' }}>
                                    <span style={{ 
                                        padding: '4px 8px', 
                                        background: '#27272a', 
                                        borderRadius: '4px', 
                                        color: '#a1a1aa', 
                                        fontSize: '12px', 
                                        fontWeight: '600' 
                                    }}>
                                        {tool.comfort}
                                    </span>
                                </td>
                                <td style={{ padding: '20px 16px', color: '#a1a1aa', fontSize: '13px', lineHeight: '1.5', borderTopRightRadius: '12px', borderBottomRightRadius: '12px', border: '1px solid #27272a', borderLeft: 'none' }}>{tool.why}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ 
                marginTop: '32px', 
                padding: '16px', 
                background: 'rgba(59, 130, 246, 0.05)', 
                borderRadius: '12px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                display: 'flex',
                gap: '12px',
                alignItems: 'start'
            }}>
                <div style={{ color: '#3b82f6', marginTop: '2px' }}><Rocket size={18} /></div>
                <p style={{ color: '#93c5fd', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
                    <strong>Founder Strategy:</strong> Start with Lovable for core logic and GitHub connection. Use Bolt.new if you need to build a high-fidelity visual prototype for investors in under 10 minutes.
                </p>
            </div>
        </div>
    );
};

export default ToolSelectionMatrix;
