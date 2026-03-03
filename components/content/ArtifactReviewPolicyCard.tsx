'use client';

import React from 'react';

export default function ArtifactReviewPolicyCard() {
    return (
        <div style={{
            margin: 'var(--space-8) 0',
            backgroundColor: 'var(--color-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header with Switch Visual */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--font-black)' }}>Artifact Review Policy</h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Found in Agent → Artifacts → Review Policy</p>
                </div>
                <div style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#EF4444',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    Critical Setting
                </div>
            </div>

            {/* Two Tier Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
                {/* Always Proceed */}
                <div style={{
                    padding: 'var(--space-4)',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(239, 68, 68, 0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#EF4444' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        <strong style={{ fontSize: 'var(--text-md)' }}>Always Proceed</strong>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
                        The agent generates a plan and <strong>immediately</strong> begins changes without waiting. This is how the "Fintech Deletion" happens.
                    </p>
                    <div style={{ marginTop: 'var(--space-3)', fontSize: '11px', color: '#EF4444', fontWeight: 'bold' }}>❌ HIGH RISK</div>
                </div>

                {/* Review Required */}
                <div style={{
                    padding: 'var(--space-4)',
                    backgroundColor: 'rgba(39, 201, 63, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px solid rgba(39, 201, 63, 0.3)',
                    transform: 'scale(1.02)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#27C93F' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <strong style={{ fontSize: 'var(--text-md)' }}>Review Required</strong>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary', margin: 0 }}>
                        Agent pauses after generating the <strong>Implementation Plan</strong>. It waits for your "Approve" comment before touching code.
                    </p>
                    <div style={{ marginTop: 'var(--space-3)', fontSize: '11px', color: '#27C93F', fontWeight: 'bold' }}>✅ RECOMMENDED</div>
                </div>
            </div>

            {/* Bottom Insight */}
            <div style={{
                backgroundColor: 'var(--color-primary)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                lineHeight: '1.5',
                borderLeft: '4px solid var(--color-accent)'
            }}>
                <strong>Implementation Plans</strong> contain precise file modifications. This is your "Trust Gate." Always require review for implementation, use "Always Proceed" only for simple task checklists.
            </div>
        </div>
    );
}
