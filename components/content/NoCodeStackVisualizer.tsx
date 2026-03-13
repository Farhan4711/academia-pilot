'use client';
import React, { useState } from 'react';
import { Layers, Database, CreditCard, Github, Cloud, Info } from 'lucide-react';

const NoCodeStackVisualizer: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState(0);

    const stack = [
        {
            layer: "Production Deployment",
            tool: "Vercel",
            desc: "The public face of your app. Handles global availability, SSL (security padlock), and custom domains.",
            icon: <Cloud size={24} />,
            color: "#000000",
            textColor: "#ffffff"
        },
        {
            layer: "Code Ownership",
            tool: "GitHub",
            desc: "Your insurance policy. Every change is committed here automatically so you own the intellectual property.",
            icon: <Github size={24} />,
            color: "#24292f",
            textColor: "#ffffff"
        },
        {
            layer: "Payments & Billing",
            tool: "Stripe",
            desc: "The revenue engine. Manages subscriptions, checkouts, and recurring billing without custom code.",
            icon: <CreditCard size={24} />,
            color: "#635bff",
            textColor: "#ffffff"
        },
        {
            layer: "Database & Auth",
            tool: "Supabase",
            desc: "The brain. Stores user data, manages logins, and enforces security through Row Level Security.",
            icon: <Database size={24} />,
            color: "#3ecf8e",
            textColor: "#000000"
        },
        {
            layer: "AI Builder Interface",
            tool: "Lovable / Replit",
            desc: "The generation layer. Translates your natural language prompts into technical code for all other layers.",
            icon: <Layers size={24} />,
            color: "#ec4899",
            textColor: "#ffffff"
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ color: '#fafafa', fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0' }}> The Complete Production Stack</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Click each layer to see why it's critical to your SaaS infrastructure.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                {/* 3D Stack Visualization */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', perspective: '1000px' }}>
                    {stack.map((item, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setActiveLayer(idx)}
                            style={{
                                background: item.color,
                                color: item.textColor,
                                padding: '16px 24px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transform: `rotateX(25deg) translateY(${activeLayer === idx ? '-10px' : '0'}) scale(${activeLayer === idx ? '1.05' : '1'})`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                boxShadow: activeLayer === idx ? `0 20px 25px -5px ${item.color}40` : '0 4px 6px -1px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                opacity: activeLayer === idx ? 1 : 0.7
                            }}
                        >
                            <div style={{ opacity: 0.8 }}>{item.icon}</div>
                            <div style={{ flex: 1, fontWeight: '800', fontSize: '15px' }}>{item.tool}</div>
                            <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', opacity: 0.6 }}>{item.layer}</div>
                        </div>
                    ))}
                </div>

                {/* Layer Details Section */}
                <div style={{ background: '#18181b', padding: '32px', borderRadius: '24px', border: '1px solid #27272a', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ padding: '8px', background: `${stack[activeLayer].color}20`, color: stack[activeLayer].color, borderRadius: '8px' }}>
                            {stack[activeLayer].icon}
                        </div>
                        <h4 style={{ color: '#fafafa', fontSize: '20px', fontWeight: '800', margin: 0 }}>{stack[activeLayer].tool}</h4>
                    </div>
                    <div style={{ color: stack[activeLayer].color, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                        {stack[activeLayer].layer}
                    </div>
                    <p style={{ color: '#d4d4d8', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                        {stack[activeLayer].desc}
                    </p>
                    
                    <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '10px' }}>
                        <div style={{ color: '#71717a' }}><Info size={16} /></div>
                        <p style={{ color: '#a1a1aa', fontSize: '12px', margin: 0, fontStyle: 'italic' }}>
                            "Deferred setup of this layer is the #1 reason non-technical founders face the 'Technical Cliff' at launch."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoCodeStackVisualizer;
