'use client';
import React from 'react';

const KimiBenchmarksChart: React.FC = () => {
    const benchmarks = [
        { name: 'LiveCodeBench', kimi: 84, claude: 64, kimiWins: true, desc: 'Competitive programming & algorithms' },
        { name: 'HLE-Full (Tools)', kimi: 50.2, claude: 32, kimiWins: true, desc: 'Agentic multi-step tool use' },
        { name: 'SWE-bench Verified', kimi: 76.8, claude: 80.9, kimiWins: false, desc: 'Real-world GitHub issue resolution' },
        { name: 'Terminal-Bench 2.0', kimi: 50.8, claude: 59.3, kimiWins: false, desc: 'Terminal command execution tasks' }
    ];

    // For AA-Omniscience which spans negative to positive, we handle it separately
    const hallucinationData = { name: 'AA-Omniscience', kimi: -11, claude: 10, desc: 'Knowledge index (correct minus incorrect answers)' };

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{
                    color: '#f4f4f5',
                    fontSize: '28px',
                    fontWeight: '800',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.5px'
                }}>
                    The Honest Benchmark Picture
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                    Kimi K2.5 leads decisively in competitive programming and tools, but trails Claude in complex real-world bug fixes and terminal operations.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
                
                {/* Legend */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(to right, #ec4899, #f43f5e)' }} />
                        <span style={{ color: '#f4f4f5', fontSize: '14px', fontWeight: '600' }}>Kimi K2.5</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(to right, #d4d4d8, #a1a1aa)' }} />
                        <span style={{ color: '#d4d4d8', fontSize: '14px', fontWeight: '500' }}>Claude Opus 4.5</span>
                    </div>
                </div>

                {benchmarks.map((bm, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div>
                                <h4 style={{ color: '#f4f4f5', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>{bm.name}</h4>
                                <span style={{ color: '#71717a', fontSize: '13px' }}>{bm.desc}</span>
                            </div>
                            <div style={{ 
                                color: bm.kimiWins ? '#fb7185' : '#a1a1aa', 
                                fontSize: '13px', 
                                fontWeight: '600',
                                padding: '4px 8px',
                                background: bm.kimiWins ? 'rgba(244, 63, 94, 0.1)' : 'rgba(161, 161, 170, 0.1)',
                                borderRadius: '6px'
                            }}>
                                {bm.kimiWins ? 'K2.5 Leads' : 'Claude Leads'}
                            </div>
                        </div>

                        {/* Chart Bars */}
                        <div style={{ height: '56px', position: 'relative', marginTop: '8px' }}>
                            {/* Kimi Bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '24px',
                                width: `${bm.kimi}%`,
                                background: 'linear-gradient(to right, #ec4899, #f43f5e)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                paddingRight: '12px',
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                transition: 'width 1s ease-out'
                            }}>
                                {bm.kimi}%
                            </div>
                            
                            {/* Claude Bar */}
                            <div style={{
                                position: 'absolute',
                                top: '32px',
                                left: 0,
                                height: '24px',
                                width: `${bm.claude}%`,
                                background: 'linear-gradient(to right, #52525b, #71717a)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                paddingRight: '12px',
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: '600',
                                transition: 'width 1s ease-out'
                            }}>
                                {bm.claude}%
                            </div>
                        </div>
                    </div>
                ))}

                {/* Hallucination Callout */}
                <div style={{ 
                    marginTop: '24px', 
                    padding: '24px', 
                    background: 'rgba(39, 39, 42, 0.5)', 
                    border: '1px solid rgba(244, 63, 94, 0.3)', 
                    borderRadius: '16px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f43f5e' }} />
                    <h4 style={{ color: '#f4f4f5', fontSize: '16px', fontWeight: '700', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        ⚠️ The Hallucination Caveat (AA-Omniscience)
                    </h4>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div style={{ color: '#f43f5e', fontSize: '32px', fontWeight: '900' }}>{hallucinationData.kimi}</div>
                            <div style={{ color: '#a1a1aa', fontSize: '12px', fontWeight: '600' }}>Kimi K2.5</div>
                        </div>
                        <div style={{ color: '#52525b', fontSize: '24px' }}>VS</div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div style={{ color: '#10b981', fontSize: '32px', fontWeight: '900' }}>+{hallucinationData.claude}</div>
                            <div style={{ color: '#a1a1aa', fontSize: '12px', fontWeight: '600' }}>Claude Opus 4.5</div>
                        </div>
                    </div>
                    
                    <p style={{ color: '#d4d4d8', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                        Kimi K2.5 scores in the negatives on the knowledge index, meaning it produces more confidently incorrect answers than correct ones when recalling factual information (like API signatures). This is a critical gap for production code generation compared to Claude.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default KimiBenchmarksChart;
