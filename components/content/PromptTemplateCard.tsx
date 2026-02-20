'use client';
import React, { useState } from 'react';

const PromptTemplateCard: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const promptTemplate = `ROLE:
You are [specific expert identity with relevant credentials and specialization].

OBJECTIVE:
[Exact deliverable] — [specific output type] that [achieves this specific goal] for [this specific audience].

AUDIENCE:
[Who will read/use this output. Their knowledge level, role, goals, and context.]

CONTEXT:
[Everything the model needs to reason correctly that it cannot infer:
- Background on the situation
- Constraints you are working within
- What has already been tried
- Any relevant data, frameworks, or examples]

REQUIREMENTS:
- [Specific requirement 1]
- [Specific requirement 2]
- [Specific requirement 3]

KEYWORDS / TERMINOLOGY:
[Specific terms, phrases, brand language, or technical vocabulary that must appear or must be avoided.]

FORMAT:
[Exact structural specification: markdown, JSON, table, numbered list, paragraphs, code blocks, etc.]

CONSTRAINTS:
- [What to exclude]
- [What not to assume]
- [Hard limits: length, scope, complexity level]

TONE:
[Specific tone description. Reference a comparable voice if possible.]`;

    const handleCopy = () => {
        navigator.clipboard.writeText(promptTemplate);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            margin: '48px 0',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            backgroundColor: '#0f172a'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                background: 'linear-gradient(90deg, rgba(2, 132, 199, 0.2), rgba(15, 23, 42, 1))',
                borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
                <h4 style={{ margin: 0, color: '#e0f2fe', fontSize: '16px', fontWeight: 'bold' }}>
                    <span style={{ marginRight: '8px' }}>📋</span> The Ultimate Prompt Blueprint
                </h4>
                <button
                    onClick={handleCopy}
                    style={{
                        background: copied ? '#10b981' : 'rgba(56, 189, 248, 0.2)',
                        color: copied ? '#fff' : '#38bdf8',
                        border: '1px solid',
                        borderColor: copied ? '#10b981' : 'rgba(56, 189, 248, 0.5)',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    {copied ? 'Copied to Clipboard!' : 'Copy Template'}
                </button>
            </div>

            <div style={{ padding: '24px', overflowX: 'auto' }}>
                <pre style={{
                    margin: 0,
                    fontFamily: "'Space Mono', 'Courier New', monospace",
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#94a3b8'
                }}>
                    <code>
                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>ROLE:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>You are [specific expert identity with relevant credentials and specialization].</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>OBJECTIVE:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Exact deliverable] — [specific output type] that [achieves this specific goal] for [this specific audience].</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>AUDIENCE:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Who will read/use this output. Their knowledge level, role, goals, and context.]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>CONTEXT:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Everything the model needs to reason correctly that it cannot infer:</span><br />
                        <span style={{ color: '#94a3b8' }}>- Background on the situation</span><br />
                        <span style={{ color: '#94a3b8' }}>- Constraints you are working within</span><br />
                        <span style={{ color: '#94a3b8' }}>- What has already been tried</span><br />
                        <span style={{ color: '#94a3b8' }}>- Any relevant data, frameworks, or examples]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>REQUIREMENTS:</span>
                        <br />
                        <span style={{ color: '#94a3b8' }}>- [Specific requirement 1]</span><br />
                        <span style={{ color: '#94a3b8' }}>- [Specific requirement 2]</span><br />
                        <span style={{ color: '#94a3b8' }}>- [Specific requirement 3]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>KEYWORDS / TERMINOLOGY:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Specific terms, phrases, brand language, or technical vocabulary that must appear or must be avoided.]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>FORMAT:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Exact structural specification: markdown, JSON, table, numbered list, paragraphs, code blocks, etc.]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>CONSTRAINTS:</span>
                        <br />
                        <span style={{ color: '#94a3b8' }}>- [What to exclude]</span><br />
                        <span style={{ color: '#94a3b8' }}>- [What not to assume]</span><br />
                        <span style={{ color: '#94a3b8' }}>- [Hard limits: length, scope, complexity level]</span>
                        <br /><br />

                        <span style={{ color: '#f472b6', fontWeight: 'bold' }}>TONE:</span>
                        <br />
                        <span style={{ color: '#e2e8f0' }}>[Specific tone description. Reference a comparable voice if possible.]</span>
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default PromptTemplateCard;
