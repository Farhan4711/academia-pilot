'use client';
import React from 'react';

const MicrosoftLearningPathDiagram: React.FC = () => {
    const months = [
        {
            month: 'Month 1',
            title: 'Foundations',
            course: 'Python for Beginners',
            details: 'Master syntax, environment setup, and data structures.',
            icon: '🐍',
            color: '#818cf8'
        },
        {
            month: 'Month 2',
            title: 'The AI Entry',
            course: 'Azure AI Fundamentals',
            details: 'Course 1 + 4. Concepts of ML and Azure AI ecosystem.',
            icon: '🧠',
            color: '#6366f1'
        },
        {
            month: 'Month 3',
            title: 'Data Mastery',
            course: 'Data Science for Beginners',
            details: 'Cleaning, visualization, and transformation.',
            icon: '📊',
            color: '#8b5cf6'
        },
        {
            month: 'Month 4',
            title: 'Deepening ML',
            course: 'ML for Beginners (12-Wk)',
            details: 'Classic ML algorithms and Scikit-learn.',
            icon: '🤖',
            color: '#06b6d4'
        },
        {
            month: 'Month 5',
            title: 'Scalable Infra',
            course: 'Cosmos DB + GitHub Actions',
            details: 'NoSQL data layer and CI/CD automation.',
            icon: '☁️',
            color: '#10b981'
        },
        {
            month: 'Month 6',
            title: 'Neural Era',
            course: 'AI for Beginners (12-Wk)',
            details: 'Deep Learning, NLP, and Computer Vision.',
            icon: '🚀',
            color: '#34d399'
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '60px 0',
            position: 'relative',
        }}>
            <h3 style={{ textAlign: 'center', color: '#f1f5f9', fontSize: '24px', fontWeight: '800', marginBottom: '40px' }}>
                Zero to AI Developer: 6-Month Roadmap
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                padding: '10px'
            }}>
                {months.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'rgba(15, 23, 42, 0.4)',
                            borderRadius: '20px',
                            padding: '30px',
                            border: `1px solid ${item.color}20`,
                            backdropFilter: 'blur(10px)',
                            position: 'relative',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'default'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = `${item.color}60`;
                            e.currentTarget.style.boxShadow = `0 12px 40px ${item.color}15`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = `${item.color}20`;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '25px',
                            fontSize: '40px',
                            opacity: 0.15,
                            pointerEvents: 'none'
                        }}>
                            {item.icon}
                        </div>

                        <div style={{
                            display: 'inline-block',
                            background: `${item.color}20`,
                            color: item.color,
                            fontSize: '11px',
                            fontWeight: '800',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            marginBottom: '16px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            border: `1px solid ${item.color}30`
                        }}>
                            {item.month}
                        </div>

                        <h4 style={{ color: '#f8fafc', fontSize: '18px', fontWeight: '700', marginBottom: '8px', margin: '0 0 12px' }}>
                            {item.title}
                        </h4>

                        <div style={{
                            color: item.color,
                            fontSize: '13px',
                            fontWeight: '700',
                            marginBottom: '10px'
                        }}>
                            {item.course}
                        </div>

                        <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                            {item.details}
                        </p>

                        <div style={{
                            marginTop: '20px',
                            height: '4px',
                            width: '40px',
                            borderRadius: '2px',
                            background: `linear-gradient(90deg, ${item.color}, transparent)`
                        }} />
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '40px',
                textAlign: 'center',
                padding: '24px',
                background: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '16px',
                border: '1px dashed rgba(255, 255, 255, 0.1)'
            }}>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
                    <span style={{ color: '#34d399', fontWeight: '700' }}>Final Goal:</span> Sit the <strong>AI-900: Azure AI Fundamentals</strong> exam and start building with LLMs in production.
                </p>
            </div>
        </div>
    );
};

export default MicrosoftLearningPathDiagram;
