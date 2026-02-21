'use client';
import React from 'react';

const ComponentUpgradeShowcase: React.FC = () => {
    return (
        <div style={{
            margin: '40px 0',
            fontFamily: "'Inter', sans-serif"
        }}>
            <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '20px' }}>Ex: The CTA Button Upgrade</h4>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
            }}>
                {/* Basic */}
                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '16px', textTransform: 'uppercase' }}>Basic Prompt Output</div>
                    <button style={{
                        padding: '10px 20px',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px'
                    }}>Click Here</button>
                    <div style={{ marginTop: '16px', fontSize: '12px', color: '#64748b' }}>Flat, generic, low interactive signal.</div>
                </div>

                {/* Upgraded */}
                <div style={{ padding: '24px', background: 'rgba(59,130,246,0.05)', borderRadius: '12px', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <div style={{ fontSize: '12px', color: '#60a5fa', marginBottom: '16px', textTransform: 'uppercase' }}>Upgraded Spec Output</div>
                    <button style={{
                        padding: '14px 32px',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Get Started <span style={{ transition: 'transform 0.2s' }}>→</span>
                    </button>
                    <div style={{ marginTop: '16px', fontSize: '12px', color: '#94a3b8' }}>High contrast, elevation depth, and micro-copy signals.</div>
                </div>
            </div>
        </div>
    );
}

export default ComponentUpgradeShowcase;
