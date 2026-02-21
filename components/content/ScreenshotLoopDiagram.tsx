'use client';
import React from 'react';

const ScreenshotLoopDiagram: React.FC = () => {
    return (
        <div style={{
            margin: '48px 0',
            background: '#0f172a',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {/* Step 1 */}
                <div style={{ width: '120px' }}>
                    <div style={{ fontSize: '40px' }}>🛠️</div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', marginTop: '10px' }}>1. BUILD</div>
                </div>

                <div style={{ color: 'rgba(59,130,246,0.3)', fontSize: '24px' }}>→</div>

                {/* Step 2 */}
                <div style={{ width: '120px' }}>
                    <div style={{ fontSize: '40px' }}>🌐</div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', marginTop: '10px' }}>2. RENDER</div>
                </div>

                <div style={{ color: 'rgba(59,130,246,0.3)', fontSize: '24px' }}>→</div>

                {/* Step 3 */}
                <div style={{ width: '120px' }}>
                    <div style={{ fontSize: '40px' }}>📸</div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', marginTop: '10px' }}>3. CAPTURE</div>
                </div>

                <div style={{ color: 'rgba(59,130,246,0.3)', fontSize: '24px' }}>→</div>

                {/* Step 4 */}
                <div style={{ width: '120px' }}>
                    <div style={{ fontSize: '40px' }}>🧠</div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', marginTop: '10px' }}>4. ANALYZE</div>
                </div>
            </div>

            <div style={{
                marginTop: '32px',
                padding: '16px',
                background: 'rgba(59,130,246,0.05)',
                borderRadius: '12px',
                border: '1px dashed rgba(59,130,246,0.3)',
                color: '#94a3b8',
                fontSize: '14px'
            }}>
                "The loop doesn't just fix code; it optimizes for **human perception** which is invisible to the LLM's raw text analysis."
            </div>
        </div>
    );
}

export default ScreenshotLoopDiagram;
