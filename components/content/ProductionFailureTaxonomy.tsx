'use client';
import React from 'react';

const ProductionFailureTaxonomy: React.FC = () => {
    const failures = [
        {
            title: 'Exposed Databases With Default Configuration',
            severity: 'CRITICAL',
            severityColor: '#ef4444',
            description: 'Firebase or Supabase instances launched without security rules or RLS. AI generates connection code but omits authentication checks by default.',
            incident: 'Tea App (July 2025): 72,000 IDs and 1.1M messages exposed due to missing Firebase rules.'
        },
        {
            title: 'Hardcoded Credentials in Git History',
            severity: 'CRITICAL',
            severityColor: '#ef4444',
            description: 'Placeholder passwords and API keys replaced with real ones and committed. Automated exploiters scrape GitHub and use these within 4 minutes.',
            incident: 'Automated scanners hit exposed keys 24/7. Deleting the file locally does not remove history.'
        },
        {
            title: "Missing Authorization (BOLA)",
            severity: 'CRITICAL',
            severityColor: '#ef4444',
            description: 'Authentication works, but authorization fails. Any logged-in user can change parameters to view or modify another user’s data.',
            incident: 'Enrichlead (2025): Users accessing paid features and other users data simply by changing URL IDs.'
        },
        {
            title: 'AI Agents Destroying Production Data',
            severity: 'CATASTROPHIC',
            severityColor: '#991b1b',
            description: 'AI agents given broad permissions use production database URIs instead of staging, running destructive "cleanup" or refactoring sweeps.',
            incident: 'SaaStr, Replit, Kiro (2025): Dropped staging/production tables resulting in wide outages.'
        },
        {
            title: 'Slopsquatting — Hallucinated Packages',
            severity: 'HIGH',
            severityColor: '#f97316',
            description: 'AI models hallucinate a plausible npm/PyPI package name. Attackers register that name injecting malware into standard workflows.',
            incident: 'Attackers scan LLM output trends to register high-probability hallucinated utility names.'
        },
        {
            title: 'Development Env Prompt Injection',
            severity: 'HIGH',
            severityColor: '#f97316',
            description: 'Malicious instructions hidden in external repos or text files trigger MCP executions (like Anthropics or Cursors context servers) for remote code execution.',
            incident: 'CVE-2025-54135 (CurXecute) and CVE-2025-53109 (EscapeRoute).'
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '40px 24px',
            borderRadius: '16px',
            margin: '48px 0',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
            <h3 style={{
                color: '#f8fafc',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '800',
                marginBottom: '32px',
                letterSpacing: '-0.5px'
            }}>
                Vibe Coding Production Failure Taxonomy
            </h3>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px'
            }}>
                {failures.map((failure, idx) => (
                    <div key={idx} style={{
                        background: 'var(--color-surface)',
                        borderTop: `4px solid ${failure.severityColor}`,
                        borderRadius: '8px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h4 style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: '700', margin: 0, lineHeight: 1.4 }}>
                                {failure.title}
                            </h4>
                        </div>
                        <span style={{
                            display: 'inline-block',
                            background: `${failure.severityColor}20`,
                            color: failure.severityColor,
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '800',
                            letterSpacing: '1px',
                            width: 'fit-content'
                        }}>
                            SEVERITY: {failure.severity}
                        </span>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
                            {failure.description}
                        </p>
                        <div style={{
                            marginTop: 'auto',
                            paddingTop: '16px',
                            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontStyle: 'italic',
                            lineHeight: 1.5
                        }}>
                            <strong style={{ color: 'var(--color-border)', fontStyle: 'normal' }}>Documented Base: </strong>
                            {failure.incident}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductionFailureTaxonomy;
