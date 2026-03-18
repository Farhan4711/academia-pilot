'use client';
import React from 'react';

const tools = [
  { name: 'Claude Code', bg: '#ea580c', icon: '🤖' },
  { name: 'Cursor IDE', bg: '#2563eb', icon: '⚡' },
  { name: 'Antigravity', bg: '#7c3aed', icon: '🚀' },
];
const services = [
  { name: 'GitHub', bg: '#374151', icon: '🐙' },
  { name: 'Postgres', bg: '#0369a1', icon: '🐘' },
  { name: 'Slack', bg: '#be185d', icon: '💬' },
  { name: 'Notion', bg: '#525252', icon: '📄' },
];

export default function NxMIntegrationVisual() {
  const card: React.CSSProperties = {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-xl)',
    margin: 'var(--space-10) 0',
    fontFamily: 'var(--font-sans)',
  };
  const header: React.CSSProperties = {
    padding: '20px 28px',
    borderBottom: '1px solid var(--color-border)',
    background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%)',
  };
  const pill = (bg: string): React.CSSProperties => ({
    backgroundColor: bg, color: 'var(--color-text-primary)', fontSize: 11, fontWeight: 700,
    padding: '6px 12px', borderRadius: 20, whiteSpace: 'nowrap',
    display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0,
  });

  return (
    <div style={card}>
      {/* Header */}
      <div style={header}>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: 6 }}>📐 Core Concept</div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 6px' }}>Why MCP Exists: The N×M Integration Problem</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
          Before MCP, every AI tool needed its own custom connector to every service. That explosion of connectors is what MCP eliminates.
        </p>
      </div>

      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* BEFORE */}
        <div style={{ padding: 28, borderRight: '1px solid var(--color-border)' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px #ef4444' }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Before MCP — Chaos</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>
            3 tools × 4 services = <strong style={{ color: '#f87171' }}>12 custom integrations</strong>. Each is unique, each can break separately.
          </p>

          {/* Visual mesh */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tools.map(tool => (
              <div key={tool.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ ...pill(tool.bg), minWidth: 110 }}><span>{tool.icon}</span>{tool.name}</div>
                <div style={{ flex: 1, display: 'flex', gap: 4 }}>
                  {services.map(svc => (
                    <div key={svc.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <div style={{ width: '100%', borderTop: '1.5px dashed rgba(239,68,68,0.5)' }} />
                      <div style={{ backgroundColor: svc.bg, color: 'var(--color-text-primary)', fontSize: 9, fontWeight: 700, padding: '3px 4px', borderRadius: 6, textAlign: 'center', width: '100%' }}>{svc.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Result box */}
          <div style={{ marginTop: 20, background: 'rgba(127,29,29,0.15)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#f87171' }}>3 × 4 = <span style={{ fontSize: 28 }}>12</span></div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#f87171', marginTop: 2 }}>Custom Integrations</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 6, lineHeight: 1.4 }}>GitHub API changes? Fix it 3 times.</div>
          </div>
        </div>

        {/* AFTER */}
        <div style={{ padding: 28 }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.06em' }}>After MCP — Standard</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>
            3 + 4 = <strong style={{ color: '#34d399' }}>7 integrations total.</strong> Each service writes a server once. Each tool writes a client once.
          </p>

          {/* Hub Visual */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Tools row */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {tools.map(t => (
                <div key={t.name} style={pill(t.bg)}><span>{t.icon}</span>{t.name}</div>
              ))}
            </div>

            {/* Connector lines down */}
            <div style={{ display: 'flex', gap: 40, margin: '4px 0' }}>
              {[0, 1, 2].map(i => <div key={i} style={{ width: 1, height: 22, background: 'linear-gradient(to bottom, rgba(59,130,246,0.2), rgba(99,102,241,0.7))' }} />)}
            </div>

            {/* MCP Hub */}
            <div style={{
              background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)',
              borderRadius: 14, padding: '14px 32px', textAlign: 'center',
              boxShadow: '0 0 30px rgba(67,56,202,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              border: '1px solid rgba(99,102,241,0.5)', position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative shine */}
              <div style={{ position: 'absolute', top: 0, left: '30%', right: '30%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
              <div style={{ color: 'var(--color-text-primary)', fontWeight: 900, fontSize: 18, letterSpacing: 1 }}>⬡ MCP Protocol</div>
              <div style={{ color: '#c7d2fe', fontSize: 10, fontWeight: 600, marginTop: 2, letterSpacing: 2, textTransform: 'uppercase' }}>Standard Interface Layer</div>
            </div>

            {/* Connector lines down */}
            <div style={{ display: 'flex', gap: 20, margin: '4px 0' }}>
              {[0, 1, 2, 3].map(i => <div key={i} style={{ width: 1, height: 22, background: 'linear-gradient(to bottom, rgba(99,102,241,0.7), rgba(59,130,246,0.2))' }} />)}
            </div>

            {/* Services row */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
              {services.map(s => (
                <div key={s.name} style={pill(s.bg)}><span>{s.icon}</span>{s.name}</div>
              ))}
            </div>
          </div>

          {/* Result card */}
          <div style={{ marginTop: 20, background: 'rgba(6,78,59,0.15)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#34d399' }}>3 + 4 = <span style={{ fontSize: 28 }}>7</span></div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#34d399', marginTop: 2 }}>Integrations Total</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 6, lineHeight: 1.4 }}>GitHub API changes? Fix MCP server once. Done forever.</div>
          </div>
        </div>
      </div>

      {/* Takeaway banner */}
      <div style={{ padding: '14px 28px', background: 'rgba(37,99,235,0.06)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <p style={{ fontSize: 14, color: 'var(--color-text)', margin: 0 }}>
          <span style={{ color: '#60a5fa', fontWeight: 800 }}>The MCP Principle: </span>
          <span style={{ color: 'var(--color-text-muted)' }}>Build <em>one</em> server per service, <em>one</em> client per tool. The protocol connects them all automatically.</span>
        </p>
      </div>
    </div>
  );
}
