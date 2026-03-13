'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, XCircle } from 'lucide-react';

const AgentCapabilityMatrix: React.FC = () => {
    const reliable = [
        { task: "FAQ Triage & Deflection", reason: "Narrow domain, fixed rules", icon: <ShieldCheck size={18} /> },
        { task: "IT Ticket Categorization", reason: "Pattern matching taxonomy", icon: <ShieldCheck size={18} /> },
        { task: "Single-step Data Extraction", reason: "One source, defined schema", icon: <ShieldCheck size={18} /> },
        { task: "Code Review Assistance", reason: "Augmentation, not replacement", icon: <ShieldCheck size={18} /> }
    ];

    const unreliable = [
        { task: "Multi-system Orchestration", reason: "Compound error risk", icon: <XCircle size={18} /> },
        { task: "Financial Transaction Approval", reason: "Action authority + judgment", icon: <XCircle size={18} /> },
        { task: "End-to-End Resolution", reason: "Dynamic state navigation", icon: <XCircle size={18} /> },
        { task: "Security Incident Response", reason: "Adversarial environment", icon: <XCircle size={18} /> }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            margin: '48px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
        }}>
            {/* Reliable Section */}
            <div style={{
                background: 'rgba(16, 185, 129, 0.03)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '24px',
                padding: '32px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: '#10b981' }}>
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h4 style={{ color: '#fafafa', fontSize: '18px', fontWeight: '800', margin: 0 }}>Reliable Patterns</h4>
                        <p style={{ color: '#10b981', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Deployment-Ready</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {reliable.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'start', gap: '12px', padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <div style={{ color: '#10b981', marginTop: '2px' }}>{item.icon}</div>
                            <div>
                                <div style={{ color: '#e4e4e7', fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{item.task}</div>
                                <div style={{ color: '#a1a1aa', fontSize: '12px' }}>{item.reason}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Unreliable Section */}
            <div style={{
                background: 'rgba(239, 68, 68, 0.03)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '24px',
                padding: '32px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ padding: '10px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', color: '#ef4444' }}>
                        <AlertTriangle size={24} />
                    </div>
                    <div>
                        <h4 style={{ color: '#fafafa', fontSize: '18px', fontWeight: '800', margin: 0 }}>Unreliable Patterns</h4>
                        <p style={{ color: '#ef4444', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>High Risk / Defer</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {unreliable.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'start', gap: '12px', padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <div style={{ color: '#ef4444', marginTop: '2px' }}>{item.icon}</div>
                            <div>
                                <div style={{ color: '#e4e4e7', fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{item.task}</div>
                                <div style={{ color: '#a1a1aa', fontSize: '12px' }}>{item.reason}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgentCapabilityMatrix;
