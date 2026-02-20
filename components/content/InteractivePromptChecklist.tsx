'use client';
import React, { useState } from 'react';

const InteractivePromptChecklist: React.FC = () => {
    const defaultChecks = [
        { category: "ROLE", id: 1, text: "Have I defined a specific expert identity, not just a generic title?", checked: false },
        { category: "ROLE", id: 2, text: "Does the role include relevant credentials and specialization?", checked: false },
        { category: "OBJECTIVE", id: 3, text: "Is the deliverable specific (not just a topic)?", checked: false },
        { category: "OBJECTIVE", id: 4, text: "Have I stated who it is for and what it should achieve?", checked: false },
        { category: "CONTEXT", id: 5, text: "Have I provided all background the model cannot infer?", checked: false },
        { category: "CONTEXT", id: 6, text: "Have I specified the audience and their knowledge level?", checked: false },
        { category: "CONTEXT", id: 7, text: "Have I noted any constraints I am working within?", checked: false },
        { category: "STRUCTURE", id: 8, text: "Have I specified the output format explicitly?", checked: false },
        { category: "STRUCTURE", id: 9, text: "Have I included length targets or structural requirements?", checked: false },
        { category: "QUALITY LAYER", id: 10, text: "Have I specified tone precisely?", checked: false },
        { category: "QUALITY LAYER", id: 11, text: "Have I included keywords or terms that must appear?", checked: false },
        { category: "QUALITY LAYER", id: 12, text: "Have I added negative constraints (what to exclude or avoid)?", checked: false },
        { category: "ITERATION", id: 13, text: "For consistency-critical outputs, have I provided 2–3 examples?", checked: false },
        { category: "ITERATION", id: 14, text: "Am I treating this as a first draft, not a final output?", checked: false },
    ];

    const [checklist, setChecklist] = useState(defaultChecks);

    const toggleCheck = (id: number) => {
        setChecklist(checklist.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const progress = Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100);

    // Group by category
    const categories = Array.from(new Set(checklist.map(item => item.category)));

    return (
        <div style={{
            margin: '48px 0',
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{ padding: '24px 32px', background: 'rgba(14, 165, 233, 0.1)', borderBottom: '1px solid rgba(14, 165, 233, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '20px', fontWeight: 'bold' }}>Pre-Flight Prompt Checklist</h3>
                    <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '14px' }}>Run through these 14 checks before submitting any high-stakes prompt.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '100px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${progress}%`, height: '100%', background: progress === 100 ? '#10b981' : '#38bdf8', transition: 'width 0.3s ease, background 0.3s ease' }}></div>
                    </div>
                    <span style={{ color: progress === 100 ? '#10b981' : '#e2e8f0', fontWeight: 'bold', fontSize: '14px' }}>{progress}%</span>
                </div>
            </div>

            <div style={{ padding: '32px' }}>
                {categories.map(category => (
                    <div key={category} style={{ marginBottom: '32px' }}>
                        <h4 style={{ color: '#7dd3fc', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                            {category}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {checklist.filter(item => item.category === category).map(item => (
                                <label key={item.id} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    cursor: 'pointer',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    background: item.checked ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                                    border: '1px solid',
                                    borderColor: item.checked ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                                    onMouseEnter={(e) => { if (!item.checked) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                                    onMouseLeave={(e) => { if (!item.checked) e.currentTarget.style.background = 'transparent'; }}
                                >
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '6px',
                                        border: '2px solid',
                                        borderColor: item.checked ? '#10b981' : '#64748b',
                                        background: item.checked ? '#10b981' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '2px',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        {item.checked && (
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 9L13 1" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleCheck(item.id)}
                                        style={{ display: 'none' }}
                                    />
                                    <span style={{
                                        color: item.checked ? '#94a3b8' : '#e2e8f0',
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        textDecoration: item.checked ? 'line-through' : 'none',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        {item.text}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {progress === 100 && (
                    <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', color: '#6ee7b7', textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                        All systems go. You are ready to orchestrate. 🚀
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractivePromptChecklist;
