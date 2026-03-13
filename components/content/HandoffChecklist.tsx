'use client';
import React, { useState } from 'react';
import { ClipboardCheck, ArrowRight, UserPlus, AlertTriangle, FileText, Key, CheckSquare } from 'lucide-react';

const HandoffChecklist: React.FC = () => {
    const signals = [
        { icon: <AlertTriangle size={16} />, text: "Spaghetti Point: Adding features breaks existing ones." },
        { icon: <UserPlus size={16} />, text: "Enterprise users require formal compliance (SOC 2 / HIPAA)." },
        { icon: <ArrowRight size={16} />, text: "Growth is blocked by a custom integration AI cannot build." }
    ];

    const tasks = [
        { label: "Connect GitHub", desc: "Handover a repo, not a platform login.", icon: <ClipboardCheck size={18} /> },
        { label: "Grant Dashboard Access", desc: "Supabase, Stripe, and Vercel admin roles.", icon: <Key size={18} /> },
        { label: "AI README Generation", desc: "Prompt the builder to explain the architecture.", icon: <FileText size={18} /> }
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
                <h3 style={{ color: '#fafafa', fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0' }}>The Engineering Handoff</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>How to bridge the gap between AI generation and professional scaling.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {/* Left: Signals */}
                <div>
                    <h4 style={{ color: '#ef4444', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Hire Signals
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {signals.map((signal, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'start', padding: '16px', background: 'rgba(239, 68, 68, 0.03)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                                <div style={{ color: '#ef4444', marginTop: '2px' }}>{signal.icon}</div>
                                <p style={{ color: '#fca5a5', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>{signal.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Requirements */}
                <div>
                    <h4 style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        The Handoff Bundle
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {tasks.map((task, idx) => (
                            <div key={idx} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '16px', 
                                padding: '20px', 
                                background: '#18181b', 
                                borderRadius: '16px', 
                                border: '1px solid #27272a'
                            }}>
                                <div style={{ color: '#3b82f6' }}>{task.icon}</div>
                                <div>
                                    <div style={{ color: '#fafafa', fontSize: '15px', fontWeight: '700' }}>{task.label}</div>
                                    <div style={{ color: '#71717a', fontSize: '12px' }}>{task.desc}</div>
                                </div>
                                <div style={{ marginLeft: 'auto', color: '#10b981' }}><CheckSquare size={18} /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ 
                marginTop: '40px', 
                padding: '24px', 
                background: 'rgba(59, 130, 246, 0.05)', 
                borderRadius: '16px', 
                border: '1px solid rgba(59, 130, 246, 0.1)',
                textAlign: 'center'
            }}>
                <p style={{ color: '#93c5fd', fontSize: '14px', margin: 0, fontWeight: '500' }}>
                    <strong>Founder Mindset:</strong> The engineer is not a replacement for your AI tools; they are the architect who refactors the AI-generated foundation for 1,000x scale.
                </p>
            </div>
        </div>
    );
};

export default HandoffChecklist;
