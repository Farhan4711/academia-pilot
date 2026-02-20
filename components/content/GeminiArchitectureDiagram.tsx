'use client';
import React from 'react';

const GeminiArchitectureDiagram: React.FC = () => {
    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
            <h3 style={{
                color: '#38bdf8',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '40px',
                textTransform: 'uppercase'
            }}>Gemini Concept Architecture</h3>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                {/* Input node */}
                <div style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#e2e8f0',
                    border: '1px dashed rgba(255,255,255,0.3)',
                    textAlign: 'center'
                }}>
                    User Input<br />
                    <span style={{ fontSize: '12px', opacity: 0.7 }}>(Text / Image / Audio / Video / Code)</span>
                </div>

                <div style={{ height: '30px', width: '2px', background: '#38bdf8' }}></div>

                {/* Multimodal Encoder */}
                <div style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(90deg, #0284c7, #2563eb)',
                    color: '#fff',
                    textAlign: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    Unified Multimodal Encoder<br />
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>(Shared Embedding Space, MoE)</span>
                </div>

                <div style={{ height: '30px', width: '2px', background: '#38bdf8' }}></div>

                {/* Reasoning Core */}
                <div style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(90deg, #7c3aed, #9333ea)',
                    color: '#fff',
                    textAlign: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    Reasoning Core<br />
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>(Deep Think / Chain-of-Thought)</span>
                </div>

                <div style={{ display: 'flex', width: '200px', justifyContent: 'space-between', marginTop: '10px' }}>
                    <div style={{ height: '30px', width: '2px', background: '#38bdf8', transform: 'rotate(-45deg)' }}></div>
                    <div style={{ height: '30px', width: '2px', background: '#38bdf8', transform: 'rotate(45deg)' }}></div>
                </div>

                {/* Output branches */}
                <div style={{ display: 'flex', gap: '24px', width: '100%', maxWidth: '500px', justifyContent: 'center' }}>
                    <div style={{
                        flex: 1,
                        padding: '16px',
                        borderRadius: '8px',
                        background: 'rgba(52, 211, 153, 0.2)',
                        color: '#a7f3d0',
                        border: '1px solid rgba(52, 211, 153, 0.4)',
                        textAlign: 'center'
                    }}>
                        Direct Response Generation
                    </div>

                    <div style={{
                        flex: 1,
                        padding: '16px',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.2)',
                        color: '#fde68a',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        textAlign: 'center'
                    }}>
                        Tool Calling Loop<br />
                        <span style={{ fontSize: '12px', opacity: 0.8 }}>(Search, Code, MCP, APIs)</span>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '200px', justifyContent: 'space-between', marginTop: '10px' }}>
                    <div style={{ height: '30px', width: '2px', background: '#38bdf8', transform: 'rotate(45deg)' }}></div>
                    <div style={{ height: '30px', width: '2px', background: '#38bdf8', transform: 'rotate(-45deg)' }}></div>
                </div>

                {/* Final Output */}
                <div style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#e2e8f0',
                    border: '1px dashed rgba(255,255,255,0.3)',
                    textAlign: 'center'
                }}>
                    Structured Output<br />
                    <span style={{ fontSize: '12px', opacity: 0.7 }}>(Text / Code / JSON / Images)</span>
                </div>
            </div>
        </div>
    );
};

export default GeminiArchitectureDiagram;
