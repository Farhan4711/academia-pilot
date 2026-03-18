'use client';
import React from 'react';

const ClaudeSelectionLogic: React.FC = () => {
    const cellStyle: React.CSSProperties = {
        padding: 'var(--space-4) var(--space-6)',
        borderBottom: '1px solid var(--color-border)',
        borderRight: '1px solid var(--color-border)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-secondary)'
    };

    const headerStyle: React.CSSProperties = {
        ...cellStyle,
        fontWeight: 'var(--font-bold)',
        color: 'var(--color-text-primary)',
        backgroundColor: 'rgba(255,255,255,0.02)'
    };

    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div style={{
                border: '1px solid var(--color-accent)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-glow)'
            }}>
                <div style={{
                    padding: 'var(--space-3) var(--space-6)',
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-black)',
                    fontSize: 'var(--text-xs)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>
                    Decision Matrix: Sonnet 4.6 vs Opus 4.6
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 3fr' }}>
                    {/* Header */}
                    <div style={headerStyle}>Task Type</div>
                    <div style={headerStyle}>Standard (Sonnet 4.6)</div>
                    <div style={headerStyle}>Advanced (Opus 4.6)</div>

                    {/* Row 1 */}
                    <div style={cellStyle}><strong>Coding</strong></div>
                    <div style={cellStyle}>Bug fixes, features, unit tests.</div>
                    <div style={cellStyle}><span style={{ color: 'var(--color-accent)' }}>Large-scale refactors ({'>'}10K lines)</span>.</div>

                    {/* Row 2 */}
                    <div style={cellStyle}><strong>Reasoning</strong></div>
                    <div style={cellStyle}>Daily professional work & analysis.</div>
                    <div style={cellStyle}><span style={{ color: 'var(--color-accent)' }}>Complex research and science</span>.</div>

                    {/* Row 3 */}
                    <div style={cellStyle}><strong>Agentic</strong></div>
                    <div style={cellStyle}>Computer use & GUI automation.</div>
                    <div style={cellStyle}><span style={{ color: 'var(--color-accent)' }}>Multi-agent coordination</span>.</div>

                    {/* Final Row */}
                    <div style={{ ...cellStyle, borderBottom: 'none' }}><strong>Context</strong></div>
                    <div style={{ ...cellStyle, borderBottom: 'none' }}>Standard technical documents.</div>
                    <div style={{ ...cellStyle, borderBottom: 'none', borderRight: 'none' }}><span style={{ color: 'var(--color-accent)' }}>1M token window (Maximum retention)</span>.</div>
                </div>
            </div>
            <p style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                textAlign: 'center',
                marginTop: 'var(--space-3)',
                fontStyle: 'italic'
            }}>
                One rule: Default to Sonnet 4.6 for everything; escalate to Opus only when reasoning depth hits a ceiling.
            </p>
        </div>
    );
};

export default ClaudeSelectionLogic;
