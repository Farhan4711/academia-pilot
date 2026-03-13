'use client';
import React, { useState } from 'react';

const CompoundAccuracyVisualizer: React.FC = () => {
    const [accuracy, setAccuracy] = useState(0.85);
    
    const steps = [1, 5, 10, 15, 20, 25, 30];
    const calculateSuccess = (steps: number) => (Math.pow(accuracy, steps) * 100).toFixed(1);

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a',
            color: '#fafafa'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 8px 0' }}>The Compound Accuracy Problem</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Probability of total success drops exponentially with every added step.</p>
            </div>

            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '24px',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <div style={{ width: '100%', padding: '20px', background: '#27272a', borderRadius: '16px', textAlign: 'center' }}>
                    <label style={{ display: 'block', marginBottom: '16px', fontSize: '14px', fontWeight: '600', color: '#e4e4e7' }}>
                        Per-Step Accuracy: <span style={{ color: '#3b82f6', fontSize: '18px' }}>{(accuracy * 100).toFixed(0)}%</span>
                    </label>
                    <input 
                        type="range" 
                        min="0.70" 
                        max="0.99" 
                        step="0.01" 
                        value={accuracy} 
                        onChange={(e) => setAccuracy(parseFloat(e.target.value))}
                        style={{ width: '100%', cursor: 'pointer' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: '#71717a' }}>
                        <span>70% (Standard)</span>
                        <span>99% (Frontier Goal)</span>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {steps.map(s => {
                        const success = parseFloat(calculateSuccess(s));
                        return (
                            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '80px', fontSize: '13px', color: '#a1a1aa', fontWeight: '500' }}>{s} Steps</div>
                                <div style={{ flex: 1, height: '8px', background: '#111', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ 
                                        height: '100%', 
                                        width: `${success}%`, 
                                        background: success > 50 ? '#10b981' : success > 20 ? '#f59e0b' : '#ef4444',
                                        transition: 'width 0.3s ease-out'
                                    }} />
                                </div>
                                <div style={{ width: '60px', textAlign: 'right', fontSize: '13px', fontWeight: '700', color: success > 10 ? '#fafafa' : '#ef4444' }}>
                                    {success}%
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ 
                    marginTop: '20px', 
                    fontSize: '13px', 
                    color: '#71717a', 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: '1.5'
                }}>
                    "A 20-step workflow at 85% per-step accuracy succeeds only 4% of the time. This is the structural barrier to autonomous enterprise deployment."
                </div>
            </div>
        </div>
    );
};

export default CompoundAccuracyVisualizer;
