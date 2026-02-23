'use client';
import React from 'react';

const EasternAIIDEComparison: React.FC = () => {
    const tools = [
        { name: 'Trae IDE (ByteDance)', models: 'DeepSeek-V3, AliQwen-3, Zhipu GLM-4.6, Doubao', strength: 'Aggressive global free tier, dual domestic/international model setups', limitation: 'Western regulatory exposure, removed Claude model (indicates volatility)' },
        { name: 'Tongyi Lingma (Alibaba)', models: 'Qianwen 3 Series (Qwen Coder)', strength: 'Deep Alibaba Cloud integration, MCP ModelScope marketplace support', limitation: 'Friction-prone with non-Alibaba cloud infrastructure, limited global adoption' },
        { name: 'CodeBuddy (Tencent)', models: 'DeepSeek-V3, HunYuan', strength: 'Plugin + IDE + CLI coverage, Figma-to-code generation, WeChat dev flow', limitation: 'Enterprise compliance docs for international markets remain thin' },
        { name: 'Baidu Comate', models: 'Wenxin / Ernie 4', strength: 'Industry-first multimodal + multi-agent environment (accepts diagrams/wireframes)', limitation: 'Less validated performance on standard international benchmarks vs DeepSeek' },
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, #18181b 0%, #450a0a 100%)',
            padding: '48px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(248, 113, 113, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
                <span style={{ fontSize: '28px' }}>🐉</span>
                <h3 style={{
                    color: '#fca5a5',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: '700',
                    margin: 0,
                    letterSpacing: '-0.02em'
                }}>The Eastern AI Toolkit Ecosystem</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {tools.map((tool, idx) => (
                    <div key={idx} style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(248, 113, 113, 0.2)',
                        borderRadius: '12px',
                        padding: '24px',
                        transition: 'transform 0.2s ease',
                        cursor: 'default',
                    }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                        <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{tool.name}</h4>
                        <div style={{ marginBottom: '16px' }}>
                            <span style={{ display: 'inline-block', background: 'rgba(248, 113, 113, 0.1)', color: '#fca5a5', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                                {tool.models}
                            </span>
                        </div>
                        <div style={{ marginBottom: '12px', fontSize: '14px' }}>
                            <strong style={{ color: '#4ade80', display: 'block', marginBottom: '4px' }}>Strategic Strength:</strong>
                            <span style={{ color: '#d1d5db', lineHeight: '1.5' }}>{tool.strength}</span>
                        </div>
                        <div style={{ fontSize: '14px' }}>
                            <strong style={{ color: '#f87171', display: 'block', marginBottom: '4px' }}>Primary Limitation:</strong>
                            <span style={{ color: '#d1d5db', lineHeight: '1.5' }}>{tool.limitation}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EasternAIIDEComparison;
