'use client';
import React from 'react';

const MicrosoftCoursesComparison: React.FC = () => {
    const courses = [
        { id: 1, name: 'Intro to Machine Learning', modules: 11, duration: '2.5 hrs', level: 'Beginner', credential: 'Badge', color: '#38bdf8' },
        { id: 2, name: 'Python for Beginners', modules: 10, duration: '5.5 hrs', level: 'Beginner', credential: 'Badge', color: '#818cf8' },
        { id: 3, name: 'Azure Cosmos DB', modules: 6, duration: '1 hr', level: 'Intermediate', credential: 'Badge', color: '#c084fc' },
        { id: 4, name: 'AI on Azure', modules: 10, duration: '1 hr', level: 'Beginner', credential: '10 XP', color: '#f472b6' },
        { id: 5, name: 'GitHub Actions Automation', modules: 7, duration: '1 hr', level: 'Beginner', credential: 'Badge', color: '#fbbf24' },
        { id: 6, name: 'ML for Beginners (12-Week)', modules: '26 L', duration: '12 wks', level: 'Begg-Int', credential: 'GitHub Badge', color: '#2dd4bf' },
        { id: 7, name: 'AI for Beginners (12-Week)', modules: '24 L', duration: '12 wks', level: 'Intermediate', credential: 'GitHub Badge', color: '#6366f1' },
        { id: 8, name: 'Data Science for Beginners', modules: '20 L', duration: '10 wks', level: 'Beginner', credential: 'Completion Badge', color: 'var(--color-text-muted)' },
    ];

    return (
        <div className="not-readable" style={{
            fontFamily: "'Inter', sans-serif",
            margin: '40px 0',
            background: 'var(--color-surface)',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
            <div style={{
                padding: '24px 30px',
                borderBottom: '1px solid var(--color-border-light)',
                background: 'rgba(255, 255, 255, 0.02)'
            }}>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '20px', fontWeight: '700' }}>At-a-Glance Comparison: All 8 Courses (2026)</h3>
                <p style={{ margin: '4px 0 0', color: 'var(--color-text-muted)', fontSize: '13px' }}>Compare duration, difficulty, and rewards for the top 8 free tracks.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                            {['#', 'Course Name', 'Mods', 'Duration', 'Level', 'Credential'].map((h, i) => (
                                <th key={i} style={{ padding: '16px 20px', color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, idx) => (
                            <tr key={course.id} style={{
                                borderBottom: idx === courses.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                    e.currentTarget.style.transform = 'scale(1.002)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <td style={{ padding: '16px 20px', color: '#475569', fontSize: '13px', fontWeight: '600' }}>{course.id}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <div style={{ color: '#f1f5f9', fontSize: '14px', fontWeight: '600' }}>{course.name}</div>
                                </td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-secondary)', fontSize: '13px' }}>{course.modules}</td>
                                <td style={{ padding: '16px 20px', color: 'var(--color-text-secondary)', fontSize: '13px' }}>{course.duration}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        background: course.level.includes('Beginner') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                                        color: course.level.includes('Beginner') ? '#4ade80' : '#c084fc',
                                        fontSize: '11px',
                                        fontWeight: '700'
                                    }}>
                                        {course.level}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: course.color, fontSize: '13px', fontWeight: '700' }}>
                                        <span style={{ fontSize: '16px' }}>{course.credential.includes('Badge') ? '🏅' : '⚡'}</span>
                                        {course.credential}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ padding: '20px 30px', background: 'rgba(56, 189, 248, 0.03)', borderTop: '1px solid rgba(56, 189, 248, 0.1)' }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    <strong style={{ color: '#38bdf8' }}>Key Insight:</strong> Python is the "Master Key" for this matrix. While Course 2 has the longest duration among the short tracks, completion makes Course 6, 7, and 8 significantly more accessible.
                </p>
            </div>
        </div>
    );
};

export default MicrosoftCoursesComparison;
