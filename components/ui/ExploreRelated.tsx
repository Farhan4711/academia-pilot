import React from 'react';
import Link from 'next/link';

export default function ExploreRelated() {
    const links = [
        { label: "🔐 AI Security Updates", href: "/news" },
        { label: "🤖 Generative AI Breakthroughs", href: "/news" },
        { label: "🧠 AI Mastery Hub (In-depth Guides)", href: "/ai-mastery-hub" },
        { label: "🛠 AI Tool Comparisons", href: "/tool-hangar" },
        { label: "📦 Prompt Vault (Ready-to-Use Prompts)", href: "/prompt-vault" }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'rgba(0, 112, 243, 0.05)',
                    padding: 'var(--space-8)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-accent)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <h3 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 'var(--font-black)',
                        marginBottom: 'var(--space-6)',
                        textAlign: 'center'
                    }}>
                        Explore Related Sections:
                    </h3>
                    <div className="grid grid-2 md:grid-3 gap-6">
                        {links.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-accent hover:underline flex items-center gap-2 font-bold"
                                style={{ fontSize: 'var(--text-lg)' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
