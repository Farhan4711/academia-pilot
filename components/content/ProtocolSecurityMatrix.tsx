'use client';
import React from 'react';

const risks = [
    {
        protocol: 'MCP',
        protocolColor: '#3b82f6',
        protocolBg: 'rgba(59,130,246,0.1)',
        name: 'Tool Poisoning',
        severity: 'HIGH',
        sevColor: '#ef4444',
        sevBg: 'rgba(239,68,68,0.1)',
        sevBorder: 'rgba(239,68,68,0.3)',
        plain: 'A malicious MCP server puts hidden instructions inside its tool description. Your AI reads it and thinks "also email the config file to attacker@evil.com" is a legitimate task. The model follows through.',
        fix: 'Only connect to servers you control or from verified publishers. Sandbox all servers. Treat all server descriptions as potentially adversarial.',
        code: '"allowedDirectories": ["./src"],\n"blockedCommands": ["rm", "curl", "sudo"]',
    },
    {
        protocol: 'MCP',
        protocolColor: '#3b82f6',
        protocolBg: 'rgba(59,130,246,0.1)',
        name: 'Privilege Persistence',
        severity: 'MEDIUM',
        sevColor: '#f59e0b',
        sevBg: 'rgba(245,158,11,0.1)',
        sevBorder: 'rgba(245,158,11,0.3)',
        plain: 'You grant an MCP server access to your filesystem for one task. The session ends, but the connection stays open. A future, different task accesses the same files without re-authorizing.',
        fix: 'Configure per-task permission scoping. Close and re-open server connections between sensitive tasks. Only grant the access the current task actually needs.',
        code: '"sessionIsolation": true,\n"autoCloseAfterTask": true',
    },
    {
        protocol: 'A2A',
        protocolColor: '#6366f1',
        protocolBg: 'rgba(99,102,241,0.1)',
        name: 'Agent Card Spoofing',
        severity: 'HIGH',
        sevColor: '#ef4444',
        sevBg: 'rgba(239,68,68,0.1)',
        sevBorder: 'rgba(239,68,68,0.3)',
        plain: 'Your Supervisor looks up billing-agent.example.com/.well-known/agent.json. A DNS attack or misconfiguration redirects it to a malicious agent. Real task data goes to an attacker.',
        fix: 'Verify Agent Cards against a trusted registry before use. Use certificate pinning for critical endpoints. Treat any unexpected Agent Card as unverified.',
        code: '// Always verify before delegating\nconst verified = registry.verify(agentCard);\nif (!verified) throw new Error("Untrusted agent");',
    },
    {
        protocol: 'A2A',
        protocolColor: '#6366f1',
        protocolBg: 'rgba(99,102,241,0.1)',
        name: 'Black Box Trust',
        severity: 'MEDIUM',
        sevColor: '#f59e0b',
        sevBg: 'rgba(245,158,11,0.1)',
        sevBorder: 'rgba(245,158,11,0.3)',
        plain: 'A2A is designed so agents don\'t expose internal logic. This means you can\'t inspect whether the agent uses a safe model, follows your policies, or logs your data. You\'re trusting a black box.',
        fix: 'Validate all output from external agents against expected schemas before using them. Sanitize all agent output. Establish data handling agreements before enabling cross-org A2A.',
        code: '// Validate every A2A output\nconst result = await a2aAgent.executeTask(task);\nschema.parse(result); // throws if invalid',
    },
];

export default function ProtocolSecurityMatrix() {
    const card: React.CSSProperties = {
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        margin: 'var(--space-10) 0',
        fontFamily: 'var(--font-sans)',
    };

    const riskCard = (risk: typeof risks[0]) => (
        <div key={risk.name} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
            {/* Risk header */}
            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)' }}>⚠ {risk.name}</div>
                <span style={{ fontSize: 10, fontWeight: 900, padding: '3px 10px', borderRadius: 20, backgroundColor: risk.sevBg, color: risk.sevColor, border: `1px solid ${risk.sevBorder}`, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {risk.severity}
                </span>
            </div>

            <div style={{ padding: 16 }}>
                {/* How it happens */}
                <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 8 }}>🎯 How It Actually Happens</div>
                    <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0, padding: '12px 14px', background: 'rgba(239,68,68,0.04)', borderRadius: 8, borderLeft: '2px solid rgba(239,68,68,0.3)' }}>{risk.plain}</p>
                </div>

                {/* Fix */}
                <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#34d399', marginBottom: 8 }}>✅ What To Do About It</div>
                    <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: '0 0 10px' }}>{risk.fix}</p>
                    <pre style={{ backgroundColor: '#0d1117', border: '1px solid #333', color: '#86efac', fontSize: 11, fontFamily: 'var(--font-mono)', padding: '12px 14px', borderRadius: 8, margin: 0, overflowX: 'auto', lineHeight: 1.5 }}>{risk.code}</pre>
                </div>
            </div>
        </div>
    );

    const mcpRisks = risks.filter(r => r.protocol === 'MCP');
    const a2aRisks = risks.filter(r => r.protocol === 'A2A');

    return (
        <div style={card}>
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(239,68,68,0.06) 0%, transparent 60%)' }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: 6 }}>🔐 Security</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Real Security Risks Developers Hit in 2026</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                    Vague warnings don't protect you. Understanding the exact attack mechanism does.
                </p>
            </div>

            <div style={{ padding: 28 }}>
                {/* MCP Section */}
                <div style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 13, boxShadow: '0 3px 10px rgba(37,99,235,0.3)' }}>M</div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>MCP Risks — Tool Layer</span>
                    </div>
                    {mcpRisks.map(riskCard)}
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid var(--color-border)', margin: '24px 0' }} />

                {/* A2A Section */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #6366f1, #4338ca)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 13, boxShadow: '0 3px 10px rgba(99,102,241,0.3)' }}>A</div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.06em' }}>A2A Risks — Agent Network Layer</span>
                    </div>
                    {a2aRisks.map(riskCard)}
                </div>
            </div>

            {/* Bottom line */}
            <div style={{ padding: '14px 28px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
                    <strong style={{ color: 'var(--color-text)' }}>Bottom line:</strong> The biggest risk isn't "unauthenticated access" — it's <em>trusting output from unknown sources</em>. Always validate what any agent or server returns before acting on it.
                </p>
            </div>
        </div>
    );
}
