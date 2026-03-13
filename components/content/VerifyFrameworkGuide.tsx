'use client';
import React, { useState } from 'react';
import { ShieldCheck, Search, Scale, FileText, Lock, Users } from 'lucide-react';

const VerifyFrameworkGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const principles = [
        {
            letter: "V",
            title: "Validate Task Fit",
            subtitle: "Compound Accuracy Pre-Screen",
            desc: "Calculate the expected workflow success rate using the compound accuracy formula. If the expected success rate is below 60%, the workflow must be redesigned with human checkpoints.",
            icon: <Search size={32} />,
            color: "#3b82f6"
        },
        {
            letter: "E",
            title: "Enumerate Action Scope",
            subtitle: "Define Permissions, Not Intents",
            desc: "Create an explicit technical list of what the agent's credentials permit it to do. Use the green/yellow/red action classification to govern execution authority.",
            icon: <Scale size={32} />,
            color: "#10b981"
        },
        {
            letter: "R",
            title: "Red-Light the Irreversible",
            subtitle: "Production Separation",
            desc: "Architecturally separate production credentials. High-impact or irreversible tasks require synchronous human approval—no exceptions for AI proposals.",
            icon: <ShieldCheck size={32} />,
            color: "#ef4444"
        },
        {
            letter: "I",
            title: "Instrument Every Action",
            subtitle: "Audit-Log Architecture",
            desc: "Log every tool call with immutable, independently accessible audit logs. Assume imperfect detection and design for manual review of high-risk sessions.",
            icon: <FileText size={32} />,
            color: "#8b5cf6"
        },
        {
            letter: "F",
            title: "Fence the Sensitive",
            subtitle: "Data Access Minimization",
            desc: "Grant agents only the minimum data required for their specific task, not broad system access. Implement field-level access controls to mitigate misalignment risks.",
            icon: <Lock size={32} />,
            color: "#f59e0b"
        },
        {
            letter: "Y",
            title: "Yield to Humans",
            subtitle: "Judgment Escalation",
            desc: "Define explicit escalation paths for ambiguity or low-confidence states. Agents must escalate rather than improvising on high-stakes judgment calls.",
            icon: <Users size={32} />,
            color: "#ec4899"
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '48px 32px',
            borderRadius: '32px',
            margin: '48px 0',
            border: '1px solid #27272a',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h3 style={{ color: '#fafafa', fontSize: '32px', fontWeight: '900', margin: '0 0 12px 0', letterSpacing: '-0.05em' }}>
                    The VERIFY Governance Framework
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                    A technical decision tool built from failure evidence rather than vendor success cases.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', alignItems: 'start' }}>
                {/* Vertical Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {principles.map((p, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                border: '2px solid',
                                borderColor: activeTab === idx ? p.color : '#27272a',
                                background: activeTab === idx ? `${p.color}20` : 'transparent',
                                color: activeTab === idx ? p.color : '#52525b',
                                fontSize: '24px',
                                fontWeight: '900',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {p.letter}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{ 
                    background: '#18181b', 
                    borderRadius: '24px', 
                    padding: '40px', 
                    border: '1px solid #27272a',
                    minHeight: '340px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        right: 0, 
                        padding: '40px', 
                        color: `${principles[activeTab].color}15`,
                        pointerEvents: 'none'
                    }}>
                        {principles[activeTab].icon}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                        <span style={{ 
                            fontSize: '12px', 
                            fontWeight: '800', 
                            textTransform: 'uppercase', 
                            padding: '4px 8px', 
                            background: `${principles[activeTab].color}20`, 
                            color: principles[activeTab].color,
                            borderRadius: '4px',
                            letterSpacing: '0.1em'
                        }}>
                            Phase {activeTab + 1}
                        </span>
                    </div>
                    
                    <h4 style={{ color: '#fafafa', fontSize: '28px', fontWeight: '900', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
                        {principles[activeTab].title}
                    </h4>
                    <p style={{ color: principles[activeTab].color, fontSize: '16px', fontWeight: '700', marginBottom: '24px' }}>
                        {principles[activeTab].subtitle}
                    </p>
                    
                    <div style={{ color: '#d4d4d8', fontSize: '18px', lineHeight: '1.6', maxWidth: '500px' }}>
                        {principles[activeTab].desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyFrameworkGuide;
