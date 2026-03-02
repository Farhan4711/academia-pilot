'use client';
import React from 'react';

const FluencyDimensionsGrid: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-8) 0' }}>
            {/* 2x2 Matrix */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(100px, auto) 1fr 1fr',
                gridTemplateRows: 'auto 1fr 1fr',
                gap: '4px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>

                {/* Top Header Row (Cognitive Mode) */}
                <div></div> {/* Empty top-left corner */}
                <div style={{ textAlign: 'center', padding: 'var(--space-2)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Generative</div>
                <div style={{ textAlign: 'center', padding: 'var(--space-2)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Evaluative</div>

                {/* Middle Row (Upstream) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-2)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Upstream<br /><span style={{ fontSize: '10px', fontWeight: 'normal' }}>(Input side)</span>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 112, 243, 0.1) 0%, rgba(0, 112, 243, 0.02) 100%)',
                    border: '1px solid rgba(0, 112, 243, 0.3)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-accent)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xl)' }}>Directing</h3>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                        Define the mission, persona, and context.<br /><strong>Goal:</strong> Create the conditions for useful output.
                    </p>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.02) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{ margin: '0 0 var(--space-2) 0', color: '#ef4444', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xl)' }}>Discerning</h3>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                        Evaluate output before it proceeds.<br /><strong>Goal:</strong> Fact-check, detect bias, and find gaps.
                    </p>
                </div>

                {/* Bottom Row (Downstream) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-2)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Downstream<br /><span style={{ fontSize: '10px', fontWeight: 'normal' }}>(Output side)</span>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.02) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{ margin: '0 0 var(--space-2) 0', color: '#10b981', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xl)' }}>Developing</h3>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                        Iterate toward final quality.<br /><strong>Goal:</strong> Recursive feedback and interactive debugging.
                    </p>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.02) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{ margin: '0 0 var(--space-2) 0', color: '#8b5cf6', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xl)' }}>Delegating</h3>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                        Integrate into workflow systems.<br /><strong>Goal:</strong> Process automation and human accountability.
                    </p>
                </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-6)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                <em>An interlocking 4-step process spanning generative/evaluative cognition and upstream/downstream workflows.</em>
            </div>
        </div>
    );
};

export default FluencyDimensionsGrid;
