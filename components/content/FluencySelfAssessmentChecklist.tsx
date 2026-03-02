'use client';
import React, { useState } from 'react';

const checklistData = [
    {
        category: 'Directing',
        color: 'var(--color-accent)', // Blue
        bgLight: 'rgba(0, 112, 243, 0.04)',
        items: [
            'I defined the goal in terms of its downstream use — not just its surface description',
            'I established a professional persona appropriate to the perspective required',
            'I provided at least one concrete example of the desired output format or analytical approach',
            'I set explicit constraints on length, excluded content, required vocabulary, or structure',
            'I provided the relevant professional context: project state, prior decisions, non-negotiable constraints',
            'I specified the output format before generating, not after'
        ]
    },
    {
        category: 'Discerning',
        color: '#ef4444', // Red
        bgLight: 'rgba(239, 68, 68, 0.04)',
        items: [
            'I identified the specific factual claims that, if wrong, would materially damage the work — and verified those independently',
            'I assessed the output for hallucination risk based on domain type',
            'I reviewed the logical structure: do the conclusions follow from the stated premises?',
            'I evaluated whether the output reflects a specific analytical perspective or training-data consensus',
            'I assessed whether the tone and confidence level are defensible given the underlying evidence',
            'I asked: what did this output structurally omit that should have been included?'
        ]
    },
    {
        category: 'Developing',
        color: '#10b981', // Green
        bgLight: 'rgba(16, 185, 129, 0.04)',
        items: [
            'For analytical tasks, I requested the reasoning explicitly — not just the conclusion',
            'For complex deliverables, I used modular prompts for each component rather than attempting single-pass generation',
            'When providing feedback on an iteration, I specified the precise failure point rather than giving directional guidance only',
            'When an output was wrong, I investigated the reasoning before discarding and restarting',
            'For high-stakes work, I generated and compared multiple independent outputs',
            'I maintained session context deliberately — carrying forward relevant constraints and prior decisions'
        ]
    },
    {
        category: 'Delegating',
        color: '#8b5cf6', // Purple
        bgLight: 'rgba(139, 92, 246, 0.04)',
        items: [
            'I can accurately classify the tasks in my core workflow as AI-ready, requiring-review, or human-only',
            'I have identified at least one repeating process that I have systematically designed AI into, rather than using reactively',
            'I am using platform-level capabilities — persistent projects, context files, structured artifacts',
            'I have used AI for first-pass synthesis of a large document set, reserving analytical effort for interpretation and decision-making',
            'For brainstorming tasks, I structured the generation session rather than asking for "ideas" generically',
            'Every AI-assisted output I produce or approve carries explicit human accountability — I can explain and defend it independently'
        ]
    }
];

// Premium Custom Checkbox SVG
const CheckIcon = ({ active, accentColor }: { active: boolean, accentColor: string }) => (
    <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '6px',
        border: `2px solid ${active ? accentColor : 'var(--color-border)'}`,
        background: active ? accentColor : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        flexShrink: 0,
        boxShadow: active ? `0 0 10px ${accentColor}40` : 'none'
    }}>
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                opacity: active ? 1 : 0,
                transform: active ? 'scale(1)' : 'scale(0.5)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

const FluencySelfAssessmentChecklist: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const handleToggle = (itemStr: string) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(itemStr)) {
            newChecked.delete(itemStr);
        } else {
            newChecked.add(itemStr);
        }
        setCheckedItems(newChecked);
    };

    const totalScore = checkedItems.size;

    let maturityStage = 'Beginner';
    let priorityAction = 'Build Discerning immediately — start with fact-checking triage and gap analysis';
    let stageColor = 'var(--color-text-secondary)';

    if (totalScore >= 21) {
        maturityStage = 'Strategic';
        priorityAction = 'Build team-level standards; codify verification protocols; measure organizational maturity';
        stageColor = '#8b5cf6'; // Purple
    } else if (totalScore >= 16) {
        maturityStage = 'Fluent';
        priorityAction = 'Design AI into repeating workflows; establish accountability frameworks';
        stageColor = '#10b981'; // Green
    } else if (totalScore >= 9) {
        maturityStage = 'Developing';
        priorityAction = 'Systematize Directing; build modular prompting discipline in Developing';
        stageColor = 'var(--color-accent)'; // Blue
    }

    // Determine the progress percentage
    const progressPercent = Math.min((totalScore / 24) * 100, 100);

    return (
        <div style={{ margin: 'var(--space-8) 0', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>

            {/* Premium Interactive Scoreboard */}
            <div style={{
                marginBottom: 'var(--space-10)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                background: 'linear-gradient(145deg, var(--color-surface) 0%, rgba(0, 0, 0, 0.01) 100%)',
                boxShadow: '0 12px 24px -10px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)',
                position: 'sticky',
                top: 'var(--space-4)',
                zIndex: 10,
                backdropFilter: 'blur(12px)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: totalScore > 0 ? stageColor : 'var(--color-border)', transition: 'background-color 0.4s' }} />
                            <h3 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', letterSpacing: '-0.02em' }}>Your Fluency Score</h3>
                        </div>
                        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                            Click the behaviors you successfully applied. Your maturity stage will calculate automatically.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--space-2)' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                            <span style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-black)', lineHeight: 1, color: totalScore > 0 ? stageColor : 'var(--color-text-muted)', transition: 'color 0.4s' }}>
                                {totalScore}
                            </span>
                            <span style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-muted)', fontWeight: 'var(--font-medium)' }}>/24</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                        height: '100%',
                        width: `${progressPercent}%`,
                        backgroundColor: totalScore > 0 ? stageColor : 'transparent',
                        borderRadius: '3px',
                        transition: 'width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.4s'
                    }} />
                </div>

                {/* Dynamic Stage Reveal */}
                <div style={{
                    marginTop: 'var(--space-2)',
                    paddingTop: 'var(--space-5)',
                    borderTop: '1px solid var(--color-border)',
                    height: totalScore > 0 ? 'auto' : '0px',
                    opacity: totalScore > 0 ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)'
                }}>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                        <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontWeight: 'var(--font-bold)' }}>Current Stage</span>
                        <span style={{
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: 'var(--font-bold)',
                            color: stageColor,
                            backgroundColor: `${stageColor}15`,
                            border: `1px solid ${stageColor}30`,
                            transition: 'all 0.4s'
                        }}>
                            {maturityStage}
                        </span>
                    </div>
                    <div>
                        <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontWeight: 'var(--font-bold)', display: 'block', marginBottom: '4px' }}>Priority Action</span>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 'var(--font-medium)' }}>
                            {priorityAction}
                        </p>
                    </div>
                </div>
            </div>

            {/* Checklist Sections - Premium Cards */}
            <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
                {checklistData.map((section, sIdx) => (
                    <div key={sIdx} style={{
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-surface)',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        {/* Section Header */}
                        <div style={{
                            background: section.bgLight,
                            padding: 'var(--space-5) var(--space-6)',
                            borderBottom: '1px solid var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)'
                        }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: section.color }} />
                            <h4 style={{ margin: 0, color: 'var(--color-text-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', letterSpacing: '-0.01em' }}>
                                {section.category}
                            </h4>
                        </div>

                        {/* Interactive Rows */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {section.items.map((item, iIdx) => {
                                const isActive = checkedItems.has(item);
                                return (
                                    <div
                                        key={iIdx}
                                        onClick={() => handleToggle(item)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 'var(--space-4)',
                                            padding: 'var(--space-4) var(--space-6)',
                                            borderBottom: iIdx < section.items.length - 1 ? '1px solid var(--color-border)' : 'none',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.2s, padding-left 0.2s',
                                            backgroundColor: isActive ? 'rgba(0,0,0,0.01)' : 'transparent',
                                            position: 'relative',
                                        }}
                                        className="checklist-row-hover"
                                        onMouseEnter={(e) => {
                                            if (!isActive) e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = isActive ? 'rgba(0,0,0,0.01)' : 'transparent';
                                        }}
                                    >
                                        {/* Left Accent line on active */}
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '3px',
                                            backgroundColor: section.color,
                                            opacity: isActive ? 1 : 0,
                                            transition: 'opacity 0.2s'
                                        }} />

                                        <div style={{ marginTop: '2px' }}>
                                            <CheckIcon active={isActive} accentColor={section.color} />
                                        </div>
                                        <span style={{
                                            fontSize: 'var(--text-md)',
                                            color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                            fontWeight: isActive ? 'var(--font-medium)' : 'normal',
                                            lineHeight: 1.5,
                                            transition: 'color 0.2s'
                                        }}>
                                            {item}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FluencySelfAssessmentChecklist;
