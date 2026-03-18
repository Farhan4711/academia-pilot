'use client';
import React, { useState } from 'react';

const DeveloperActionChecklist: React.FC = () => {
    const categories = [
        { id: 'developers', title: 'Individual Developers', icon: '💻', color: '#3b82f6' },
        { id: 'founders', title: 'Founders & Leaders', icon: '🚀', color: '#8b5cf6' },
        { id: 'investors', title: 'Investors', icon: '📈', color: '#10b981' }
    ];

    const [activeCategory, setActiveCategory] = useState('developers');
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const actions = {
        developers: [
            { id: 'dev-1', text: 'Diversify tool dependency across multiple providers (Claude, GPT, Windsurf, Cursor).' },
            { id: 'dev-2', text: 'Build production AI portfolio work (measurable deployed features), not demo apps.' },
            { id: 'dev-3', text: 'Develop AI-specific debugging capability to diagnose failures of AI-generated code.' },
            { id: 'dev-4', text: 'Elevate your AIQ score to top quartile proficiency in your domain.' },
            { id: 'dev-5', text: 'Track expanding roles: AI governance, integration, production ML.' }
        ],
        founders: [
            { id: 'found-1', text: 'Validate enterprise AI ROI within 90 days of deployment or pause scaling.' },
            { id: 'found-2', text: 'Build abstraction layers for API-only AI dependencies to allow quick switching.' },
            { id: 'found-3', text: 'Ensure product generates verifiable user value independent of "AI hype".' },
            { id: 'found-4', text: 'Do not attribute layoffs to AI if underlying cause is cost/runway pressure.' },
            { id: 'found-5', text: 'Stay solvent enough to survive an 18-month AI investment compression cycle.' }
        ],
        investors: [
            { id: 'inv-1', text: 'Apply the full SIGNAL framework to every AI startup investment thesis.' },
            { id: 'inv-2', text: 'Weight infrastructure plays (semiconductors, data centers) over pure application layers.' },
            { id: 'inv-3', text: 'Beware startups valued at >50x ARR relying solely on enterprise "experiments".' }
        ]
    };

    const toggleCheck = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const activeList = actions[activeCategory as keyof typeof actions];
    const completedCount = activeList.filter(item => checkedItems[item.id]).length;
    const progressPercent = (completedCount / activeList.length) * 100;
    const activeColor = categories.find(c => c.id === activeCategory)?.color || '#3b82f6';

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'var(--color-surface)',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: `1px solid ${activeColor}40`,
            boxShadow: `0 20px 40px -10px ${activeColor}30`,
            transition: 'all 0.5s ease'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--color-text-primary)', fontSize: '28px', fontWeight: '800', margin: '0 0 12px 0' }}>Concrete Action Plan</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0 }}>Not predictions. Actionable next steps for the 2026 market.</p>
                </div>

                {/* Category Selector */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                background: activeCategory === cat.id ? `${cat.color}20` : 'rgba(30, 41, 59, 0.5)',
                                border: `1px solid ${activeCategory === cat.id ? cat.color : 'rgba(71, 85, 105, 0.3)'}`,
                                color: activeCategory === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                transform: activeCategory === cat.id ? 'scale(1.05)' : 'none'
                            }}
                        >
                            <span>{cat.icon}</span>
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Progress Bar */}
                <div style={{ background: 'var(--color-surface)', borderRadius: '12px', padding: '16px 20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', fontWeight: '600' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Category Progress</span>
                        <span style={{ color: activeColor }}>{completedCount} of {activeList.length} Completed</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ 
                            height: '100%', 
                            background: activeColor, 
                            width: `${progressPercent}%`,
                            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px'
                        }} />
                    </div>
                </div>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {activeList.map((item, idx) => (
                        <div 
                            key={item.id}
                            onClick={() => toggleCheck(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                                padding: '20px',
                                background: checkedItems[item.id] ? `${activeColor}10` : 'rgba(30, 41, 59, 0.6)',
                                border: `1px solid ${checkedItems[item.id] ? activeColor : 'rgba(71, 85, 105, 0.2)'}`,
                                borderRadius: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                animation: `slideUp 0.3s ease forwards ${idx * 0.05}s`,
                                opacity: 0,
                                transform: 'translateY(10px)'
                            }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '6px',
                                border: `2px solid ${checkedItems[item.id] ? activeColor : '#64748b'}`,
                                background: checkedItems[item.id] ? activeColor : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                                transition: 'all 0.2s'
                            }}>
                                {checkedItems[item.id] && <span style={{ color: 'var(--color-text-primary)', fontSize: '14px', fontWeight: 'bold' }}>✓</span>}
                            </div>
                            <span style={{ 
                                color: checkedItems[item.id] ? 'var(--color-text-secondary)' : '#f8fafc',
                                fontSize: '16px',
                                lineHeight: '1.5',
                                textDecoration: checkedItems[item.id] ? 'line-through' : 'none',
                                opacity: checkedItems[item.id] ? 0.6 : 1,
                                transition: 'all 0.2s'
                            }}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes slideUp {
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default DeveloperActionChecklist;
