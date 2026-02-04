'use client';

import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function PromptVaultPage() {
    const [showGated, setShowGated] = useState(false);

    const publicPrompts = [
        {
            title: "The Vibe Coding Starter",
            description: "Perfect for your first Antigravity project",
            context: "Best for Claude 3.5 Sonnet or Antigravity",
            prompt: `You are an expert software architect. I want to build [DESCRIBE YOUR APP]. 

Please:
1. Propose a system architecture
2. Identify the key components
3. Suggest the tech stack
4. Outline the implementation steps

Be specific and practical. Focus on modern best practices.`
        },
        {
            title: "Research Assistant Prompt",
            description: "Analyze complex topics with citations",
            context: "Best for Perplexity Pro or ChatGPT with search",
            prompt: `Research [TOPIC] and provide:

1. A comprehensive overview (200 words)
2. Key findings with citations
3. Contrasting viewpoints
4. Practical implications
5. Recommended next steps

Use recent sources (2024-2026) and cite all claims.`
        },
        {
            title: "Content Repurposing Agent",
            description: "Turn one piece of content into 10",
            context: "Best for Claude 3.5 Sonnet or GPT-4",
            prompt: `I have this content: [PASTE CONTENT]

Repurpose it into:
1. 3 Twitter threads (5-7 tweets each)
2. 1 LinkedIn post (professional tone)
3. 1 email newsletter section
4. 5 short-form video scripts (60 seconds)
5. 3 blog post outlines

Maintain the core message but adapt tone and format for each platform.`
        }
    ];

    const gatedPrompts = [
        {
            title: "Agentic Swarm Orchestrator",
            description: "Coordinate multiple AI agents for complex tasks",
            premium: true
        },
        {
            title: "Multi-Agent Debate System",
            description: "Get better decisions through AI debate",
            premium: true
        },
        {
            title: "Autonomous Research Pipeline",
            description: "Fully automated research workflow",
            premium: true
        }
    ];

    const resources = [
        {
            slug: 'agency-blueprint',
            title: '🚀 Zero-Employee Agency Blueprint',
            description: 'Stop hiring, start spawning. Get the multi-agent swarm architecture that replaces a 5-person team.',
            category: 'Template',
            includes: ['Org Chart PDF', 'Agent Prompt Templates', 'Implementation Guide']
        },
        {
            slug: 'codex-mastery-pack',
            title: '🤖 OpenAI Codex Mastery Pack',
            description: 'The complete deployment hub: parallel thread configs, installation guide, and command cheat sheet.',
            category: 'Config',
            includes: ['Parallel Thread Config', 'Vibe Coding Cheat Sheet', 'Setup Guide']
        }
    ];

    return (
        <div>
            {/* Hero */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            The Prompt Vault
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-8)',
                            lineHeight: '1.6'
                        }}>
                            Battle-tested prompts, templates, and configs that save you 20+ hours per week.
                            Copy, paste, and get results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Public Prompts */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                        Free Prompts
                    </h2>

                    <div className="grid grid-2 gap-6">
                        {publicPrompts.map((item, index) => (
                            <div key={index} className="card">
                                <div style={{ marginBottom: 'var(--space-3)' }}>
                                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                                        {item.description}
                                    </p>
                                    <Badge variant="accent" style={{ fontSize: 'var(--text-xs)' }}>
                                        {item.context}
                                    </Badge>
                                </div>

                                <div style={{
                                    backgroundColor: 'var(--color-primary)',
                                    padding: 'var(--space-4)',
                                    borderRadius: 'var(--radius-md)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--space-3)',
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {item.prompt}
                                </div>

                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        navigator.clipboard.writeText(item.prompt);
                                        alert('Prompt copied to clipboard!');
                                    }}
                                >
                                    Copy Prompt
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gated Prompts */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)', textAlign: 'center' }}>
                        Premium Prompts
                    </h2>
                    <p className="text-center text-secondary" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
                        Advanced agentic workflows for complex tasks
                    </p>

                    <div className="grid grid-3 gap-6">
                        {gatedPrompts.map((item, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 77, 0, 0.05) 100%)',
                                    borderColor: 'var(--color-cta)',
                                    position: 'relative'
                                }}
                            >
                                <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant="cta">Premium</Badge>
                                    <div style={{ fontSize: 'var(--text-2xl)' }}>🔒</div>
                                </div>

                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
                        <Button variant="cta" size="lg" href="/#newsletter-signup">
                            Unlock Premium Prompts
                        </Button>
                        <p className="text-muted" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-3)' }}>
                            Join the Flight Crew to get access to all premium prompts
                        </p>
                    </div>
                </div>
            </section>

            {/* Templates & Configs Section */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)', textAlign: 'center' }}>
                        Templates & Configs
                    </h2>
                    <p className="text-center text-secondary" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
                        Free templates, configs, and blueprints to accelerate your agentic journey
                    </p>

                    <div className="grid grid-2 gap-6">
                        {resources.map((resource) => (
                            <div
                                key={resource.slug}
                                className="card hover-lift"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)',
                                    borderColor: 'var(--color-accent)'
                                }}
                            >
                                <div style={{ marginBottom: 'var(--space-3)' }}>
                                    <Badge variant="accent">{resource.category}</Badge>
                                </div>

                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)' }}>
                                    {resource.title}
                                </h3>
                                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                                    {resource.description}
                                </p>

                                {/* What's Included */}
                                <div style={{
                                    padding: 'var(--space-4)',
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    marginBottom: 'var(--space-4)'
                                }}>
                                    <p style={{
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 'var(--font-semibold)',
                                        color: 'var(--color-text-muted)',
                                        marginBottom: 'var(--space-2)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        What's Included
                                    </p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--space-2)'
                                    }}>
                                        {resource.includes.map((item, index) => (
                                            <li key={index} className="text-secondary" style={{
                                                fontSize: 'var(--text-sm)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 'var(--space-2)'
                                            }}>
                                                <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    variant="primary"
                                    onClick={() => alert('Resource download coming soon! Join the newsletter to get notified.')}
                                    style={{ width: '100%' }}
                                >
                                    Download Resource
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container container-md">
                    <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-6)', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                How do I save time with these prompts?
                            </h3>
                            <p className="text-secondary">
                                These prompts are optimized for specific tasks and AI models. Instead of trial-and-error, you get
                                proven templates that work immediately, saving 2-5 hours per task.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                Can I modify the prompts for my needs?
                            </h3>
                            <p className="text-secondary">
                                Absolutely! These prompts are templates. Replace the bracketed sections with your specific requirements
                                and adjust the tone or detail level as needed.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                                What makes premium prompts worth it?
                            </h3>
                            <p className="text-secondary">
                                Premium prompts orchestrate multiple AI agents for complex workflows like autonomous research,
                                multi-agent debates, and agentic swarms. They're designed for advanced users tackling sophisticated tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
