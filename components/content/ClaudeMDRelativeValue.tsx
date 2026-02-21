'use client';
import React from 'react';

const ClaudeMDRelativeValue: React.FC = () => {
    return (
        <div style={{
            margin: '48px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Without CLAUDE.md */}
            <div style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '20px',
                    background: '#ef4444',
                    color: 'white',
                    padding: '2px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase'
                }}>Without CLAUDE.md</div>

                <div style={{ marginBottom: '16px', color: '#fca5a5', fontSize: '14px' }}>
                    <strong>User:</strong> Build a hero section.<br />
                    <strong>Claude:</strong> [Generates generic purple SaaS layout]<br />
                    <strong>User:</strong> No, navy. Asymmetric. Spacing is off.<br />
                    <strong>Claude:</strong> [Regenerates... styling breaks]<br />
                    <strong>User:</strong> Why is Tailwind v4 mixing in?<br />
                    <strong>Result:</strong> 40 mins of iteration & debugging.
                </div>

                <div style={{ height: '4px', background: 'rgba(239, 68, 68, 0.3)', borderRadius: '2px', width: '100%' }}>
                    <div style={{ height: '100%', background: '#ef4444', width: '90%', borderRadius: '2px' }} />
                </div>
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#ef4444', textAlign: 'right' }}>High Friction</div>
            </div>

            {/* With CLAUDE.md */}
            <div style={{
                background: 'rgba(16, 185, 129, 0.05)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '20px',
                    background: '#10b981',
                    color: 'white',
                    padding: '2px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase'
                }}>With CLAUDE.md</div>

                <div style={{ marginBottom: '16px', color: '#6ee7b7', fontSize: '14px' }}>
                    <strong>User:</strong> Build a hero section.<br />
                    <strong>Claude:</strong> [Reads DNA; applies navy, asymmetric, v3 syntax]<br />
                    <strong>User:</strong> Perfect. Now the features.<br />
                    <br />
                    <br />
                    <strong>Result:</strong> 2 mins to production-ready structure.
                </div>

                <div style={{ height: '4px', background: 'rgba(16, 185, 129, 0.3)', borderRadius: '2px', width: '100%' }}>
                    <div style={{ height: '100%', background: '#10b981', width: '10%', borderRadius: '2px' }} />
                </div>
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#10b981', textAlign: 'right' }}>Zero Friction</div>
            </div>
        </div>
    );
}

export default ClaudeMDRelativeValue;
