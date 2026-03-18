'use client';
import React from 'react';

const MicrosoftCourseDetailBreakdown: React.FC = () => {
    const courses = [
        {
            id: 1,
            title: 'Introduction to Machine Learning',
            metrics: { modules: 11, duration: '2.5 Hours', level: 'Beginner', exam: 'AI-900' },
            description: 'Covers the ML lifecycle: definition to deployment. Includes paradigms (Supervised, Unsupervised), Data Engineering pipelines, and Model Evaluation metrics.',
            color: '#38bdf8',
            tags: ['ML Lifecycle', 'Data Pipelines']
        },
        {
            id: 2,
            title: 'Python for Beginners',
            metrics: { modules: 10, duration: '5.5 Hours', level: 'Beginner', credential: 'Badge' },
            description: 'The primary language for AI. Essential environment setup, data types, control flow, functions, and file I/O operations.',
            color: '#818cf8',
            tags: ['Python 3', 'Core Logic']
        },
        {
            id: 3,
            title: 'Get Started with Azure Cosmos DB',
            metrics: { modules: 6, duration: '1 Hour', level: 'Intermediate', exam: 'DP-420' },
            description: 'Critical data layer for AI apps. Stores conversation history, vector embeddings, and agentic memory in a NoSQL environment.',
            color: '#c084fc',
            tags: ['NoSQL', 'Vector Storage']
        },
        {
            id: 4,
            title: 'Get Started with AI on Azure',
            metrics: { modules: 10, duration: '1 Hour', level: 'Beginner', exam: 'AI-900' },
            description: 'Maps the Azure AI landscape: Computer Vision, NLP, Speech, OpenAI Service, and the 6 Responsible AI principles.',
            color: '#f472b6',
            tags: ['Azure AI', 'Responsible AI']
        },
        {
            id: 5,
            title: 'Automate Tasks by Using GitHub',
            metrics: { modules: 7, duration: '1 Hour', level: 'Beginner', exam: 'GitHub Cert' },
            description: 'Industry-standard CI/CD platform. Essential for automating model fine-tuning pipelines and agentic deployment workflows.',
            color: '#fbbf24',
            tags: ['GitHub Actions', 'CI/CD']
        },
        {
            id: 6,
            title: 'Machine Learning for Beginners (12-Week)',
            metrics: { lessons: 26, duration: '12 Weeks', repos: 'GitHub', type: 'Curriculum' },
            description: 'Focuses on classic ML algorithms using Scikit-learn. Deliberately avoids deep learning to build mathematical intuition first.',
            color: '#2dd4bf',
            tags: ['Classic ML', 'Scikit-learn']
        },
        {
            id: 7,
            title: 'AI for Beginners (12-Week)',
            metrics: { lessons: 24, duration: '12 Weeks', repos: 'GitHub', type: 'Curriculum' },
            description: 'Covers Neural Networks, CV, and NLP. Includes 12 dedicated lessons on Agentic AI and multi-agent coordination.',
            color: '#6366f1',
            tags: ['Agentic AI', 'Neural Nets']
        },
        {
            id: 8,
            title: 'Data Science for Beginners (10-Week)',
            metrics: { lessons: 20, duration: '10 Weeks', repos: 'GitHub', type: 'Curriculum' },
            description: 'The practical bridge between Python and ML. Covers data collection, cleaning, visualization, and strategic ethics.',
            color: 'var(--color-text-muted)',
            tags: ['Data Cleaning', 'Visualization']
        }
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '60px 0',
            padding: '24px',
            background: 'var(--color-surface)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)'
        }}>
            <h3 style={{
                textAlign: 'center',
                color: '#f8fafc',
                fontSize: '24px',
                fontWeight: '800',
                marginBottom: '40px',
                letterSpacing: '-0.02em'
            }}>
                Deep Technical Breakdown: All 8 Courses
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px'
            }}>
                {courses.map((course) => (
                    <div key={course.id} style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '20px',
                        padding: '28px',
                        border: `1px solid ${course.color}20`,
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            fontSize: '11px',
                            fontWeight: '800',
                            color: course.color,
                            opacity: 0.6,
                            background: `${course.color}15`,
                            padding: '4px 10px',
                            borderRadius: '8px',
                            border: `1px solid ${course.color}30`
                        }}>
                            #{course.id}
                        </div>

                        <h4 style={{
                            color: '#f1f5f9',
                            fontSize: '18px',
                            fontWeight: '700',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            paddingRight: '40px'
                        }}>
                            {course.title}
                        </h4>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '12px',
                            marginBottom: '20px'
                        }}>
                            {Object.entries(course.metrics).map(([key, val]) => (
                                <div key={key} style={{
                                    background: 'rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.03)'
                                }}>
                                    <div style={{
                                        color: '#475569',
                                        fontSize: '10px',
                                        textTransform: 'uppercase',
                                        fontWeight: '800',
                                        marginBottom: '2px'
                                    }}>
                                        {key}
                                    </div>
                                    <div style={{
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '13px',
                                        fontWeight: '600'
                                    }}>
                                        {val}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '13.5px',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            flexGrow: 1
                        }}>
                            {course.description}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap'
                        }}>
                            {course.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '11px',
                                    color: '#64748b',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MicrosoftCourseDetailBreakdown;
