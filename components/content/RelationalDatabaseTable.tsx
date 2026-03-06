'use client';
import React from 'react';

type Row = { database: string; license: string; bestFor: string; feature: string; category: 'open' | 'proprietary' | 'public' };

const rows: Row[] = [
    { database: 'PostgreSQL', license: 'Open Source', bestFor: 'General purpose, AI/ML', feature: 'Advanced types, extensions, pgvector', category: 'open' },
    { database: 'MySQL', license: 'Open Source', bestFor: 'Web applications, WordPress', feature: 'Simplicity, wide hosting support', category: 'open' },
    { database: 'MariaDB', license: 'Open Source', bestFor: 'MySQL replacement', feature: 'Fully open (no Oracle), faster replication', category: 'open' },
    { database: 'Microsoft SQL Server', license: 'Proprietary', bestFor: 'Enterprise Windows stack', feature: 'BI integration, .NET ecosystem', category: 'proprietary' },
    { database: 'Oracle Database', license: 'Proprietary', bestFor: 'Large enterprise', feature: 'Mature tooling, enterprise support contracts', category: 'proprietary' },
    { database: 'SQLite', license: 'Public Domain', bestFor: 'Embedded, mobile, local', feature: 'Zero server, single file, ships in every phone', category: 'public' },
];

const categoryStyle: Record<string, { color: string; bg: string; border: string }> = {
    open: { color: '#34d399', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
    proprietary: { color: '#f87171', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)' },
    public: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
};

export default function RelationalDatabaseTable() {
    const card: React.CSSProperties = {
        backgroundColor: '#0f172a', // Match the dark theme surface
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        margin: 'var(--space-10) 0',
        fontFamily: "'Inter', system-ui, sans-serif",
    };

    const colHead = (icon: string, label: string) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        </div>
    );

    return (
        <div style={card}>
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(135deg, rgba(52,211,153,0.07) 0%, rgba(59,130,246,0.04) 100%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6ee7b7', marginBottom: 6 }}>📊 Relational Engines</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#f8fafc', margin: '0 0 6px' }}>Major SQL Databases (2026)</h3>
                <p style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>The absolute strongest choices for table-based, structured workloads.</p>
            </div>

            {/* Column headers */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 2.5fr', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.25)', padding: '12px 20px', gap: 16 }}>
                <div>{colHead('💾', 'Database')}</div>
                <div>{colHead('📜', 'License')}</div>
                <div>{colHead('🎯', 'Best For')}</div>
                <div>{colHead('✨', 'Key Feature')}</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => {
                const cat = categoryStyle[row.category];
                return (
                    <div key={i} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 2fr 2.5fr',
                        padding: '16px 20px',
                        gap: 16,
                        borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'
                    }}>
                        {/* Database Name */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ fontSize: 14, fontWeight: 800, color: '#f8fafc' }}>{row.database}</div>
                        </div>

                        {/* License Badge */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em',
                                padding: '4px 10px', borderRadius: 20,
                                background: cat.bg, color: cat.color, border: `1px solid ${cat.border}`
                            }}>
                                {row.license}
                            </span>
                        </div>

                        {/* Best For */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.5 }}>{row.bestFor}</div>
                        </div>

                        {/* Key Feature */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{row.feature}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
