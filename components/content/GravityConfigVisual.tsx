'use client';

import React from 'react';

export default function GravityConfigVisual() {
    const configData = {
        "protected_modules": [
            "src/auth/",
            "src/security/",
            "src/payments/",
            "src/compliance/",
            "src/middleware/auth*",
            "migrations/",
            ".env*"
        ],
        "agent_restrictions": {
            "shadow_refactoring": false,
            "auto_dependency_updates": false,
            "delete_on_redundancy": false,
            "revert_human_edits": false
        },
        "require_confirmation_for": [
            "any_deletion",
            "schema_changes",
            "dependency_removal",
            "file_rename"
        ]
    };

    return (
        <div style={{
            margin: 'var(--space-8) 0',
            backgroundColor: '#1E1E1E',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid #333',
            boxShadow: 'var(--shadow-xl)',
            fontFamily: 'var(--font-mono)',
            position: 'relative'
        }}>
            {/* Window Header */}
            <div style={{
                backgroundColor: '#2D2D2D',
                padding: 'var(--space-2) var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid #333'
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                </div>
                <div style={{
                    color: '#999',
                    fontSize: '12px',
                    marginLeft: 'auto',
                    fontWeight: 500
                }}>.gravity</div>
            </div>

            {/* Code Content */}
            <div style={{ padding: 'var(--space-6)', overflowX: 'auto' }}>
                <pre style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                    <code style={{ color: '#D4D4D4' }}>
                        <span style={{ color: '#9CDCFE' }}>{"{"}</span>
                        {"\n  "}
                        <span style={{ color: '#9CDCFE' }}>"protected_modules"</span>
                        <span style={{ color: '#D4D4D4' }}>: [</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"src/auth/"</span><span style={{ color: '#D4D4D4' }}>,</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"src/security/"</span><span style={{ color: '#D4D4D4' }}>,</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"src/payments/"</span><span style={{ color: '#D4D4D4' }}>,</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"src/compliance/"</span>
                        {"\n  ],"}
                        {"\n  "}
                        <span style={{ color: '#9CDCFE' }}>"agent_restrictions"</span>
                        <span style={{ color: '#D4D4D4' }}>: {"{"}</span>
                        {"\n    "}
                        <span style={{ color: '#9CDCFE' }}>"shadow_refactoring"</span><span style={{ color: '#D4D4D4' }}>: </span><span style={{ color: '#569CD6' }}>false</span><span style={{ color: '#D4D4D4' }}>,</span>
                        {"\n    "}
                        <span style={{ color: '#9CDCFE' }}>"delete_on_redundancy"</span><span style={{ color: '#D4D4D4' }}>: </span><span style={{ color: '#569CD6' }}>false</span>
                        {"\n  },"}
                        {"\n  "}
                        <span style={{ color: '#9CDCFE' }}>"require_confirmation_for"</span>
                        <span style={{ color: '#D4D4D4' }}>: [</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"any_deletion"</span><span style={{ color: '#D4D4D4' }}>,</span>
                        {"\n    "}
                        <span style={{ color: '#CE9178' }}>"schema_changes"</span>
                        {"\n  ]"}
                        {"\n"}
                        <span style={{ color: '#9CDCFE' }}>{"}"}</span>
                    </code>
                </pre>
            </div>

            {/* Label Overlay */}
            <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(39, 201, 63, 0.1)',
                color: '#27C93F',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 'bold',
                border: '1px solid rgba(39, 201, 63, 0.2)',
                textTransform: 'uppercase'
            }}>
                Recommended Safety Config
            </div>
        </div>
    );
}
