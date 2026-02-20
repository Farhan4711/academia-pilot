'use client';
import React, { useState } from 'react';

const BeforeAfterPromptComparison: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const examples = [
        {
            title: "Blog Writing",
            weak: "Write a blog post about AI for small businesses.",
            strong: `ROLE: You are a B2B content strategist who has published 300+ articles for SaaS companies targeting SMB owners.

OBJECTIVE: Write a 1,100-word blog post that helps non-technical small business owners understand why NOW is the right time to adopt AI tools — and which category of tool to start with.

AUDIENCE: Business owners with 5–50 employees, non-technical, skeptical of hype, focused on ROI and time savings. They have heard about AI but haven't acted yet.

FORMAT: H2 subheadings, short paragraphs (3 sentences max), one practical example per section, closing CTA to download a free AI tool evaluation checklist.

TONE: Direct and encouraging. No jargon. No hype. Like a trusted advisor, not a salesperson.

CONSTRAINTS: Do not mention specific AI model names. Do not use the word "revolutionary." Assume reader has tried zero AI tools so far.`
        },
        {
            title: "Coding",
            weak: "Write me a login function.",
            strong: `ROLE: You are a senior Python backend engineer with deep expertise in FastAPI and security-first API design.

OBJECTIVE: Write a JWT-based user authentication function for a FastAPI application using async/await patterns.

REQUIREMENTS:
- Password hashing with bcrypt
- JWT token generation with 24-hour expiry
- Refresh token support
- Proper HTTP exception handling with status codes 401 and 422
- Input validation via Pydantic

FORMAT: Clean, commented code with a usage example at the end. Separate the auth utilities from the route handler.

CONSTRAINTS: No external authentication libraries (Auth0, Firebase, etc.). Must work with PostgreSQL via SQLAlchemy async. Follow PEP 8.`
        },
        {
            title: "Business Strategy",
            weak: "Help me grow my SaaS business.",
            strong: `ROLE: You are a SaaS growth advisor who has taken three B2B companies from $1M to $10M ARR.

OBJECTIVE: Create a 90-day growth plan for a B2B project management SaaS with the following profile: $280K ARR, 40 paying customers (avg contract $7K/year), 8% monthly churn, primary acquisition channel is LinkedIn outbound, CAC = $1,400, LTV = $8,200.

The plan must focus on churn reduction first, then expansion revenue from existing accounts, then new acquisition.

FORMAT: Three phases (30/60/90 days), each with 3 specific initiatives, success metrics, and owner (founder/sales/product/marketing).

CONSTRAINTS: Budget is under $5K/month. Team is 4 people. No VC funding — must be capital-efficient. Do not suggest paid advertising.`
        },
        {
            title: "Resume Writing",
            weak: "Improve my resume.",
            strong: `ROLE: You are an executive recruiter who has placed 150+ senior engineers at Series B–D startups and has reviewed 5,000+ technical resumes.

OBJECTIVE: Rewrite the following software engineer resume for a Senior Backend Engineer role at a growth-stage fintech startup. Target: a hiring manager who reviews 80 resumes per week and decides in 8 seconds whether to continue reading.

REQUIREMENTS:
- Lead each bullet with a strong action verb
- Quantify every achievement that can be quantified
- Ruthlessly cut anything not relevant to backend engineering in fintech
- Add a 3-line professional summary optimized for ATS and human readers simultaneously

CONSTRAINTS: Do not add experience that isn't on the current resume. Keep to 1 page. No soft skills in the skills section — technical skills and tools only.

[PASTE RESUME HERE]`
        },
        {
            title: "AI Automation",
            weak: "How can I use AI to automate my business?",
            strong: `ROLE: You are an AI automation consultant who builds workflow automation for professional service firms using LLMs, APIs, and no-code/low-code tools.

OBJECTIVE: Design an automation roadmap for a 12-person accounting firm that manually processes client onboarding, monthly bookkeeping review, and quarterly report generation.

CONTEXT: Current tools are QuickBooks, Google Workspace, and Calendly. Team has no developers. Budget is $800/month for tools. Owner's goal is to handle 40% more clients without hiring.

REQUIREMENTS:
- Prioritize by impact/effort ratio
- Phase 1 (month 1–2): quick wins under $200/month
- Phase 2 (month 3–4): deeper automations under $600/month
- Each automation must specify: trigger, process, output, tool, estimated time saved per week

FORMAT: Table format for Phase 1 and Phase 2, then a narrative section on implementation risk and what to watch for.`
        },
        {
            title: "Product Planning",
            weak: "Help me plan a new SaaS product.",
            strong: `ROLE: You are a product strategist who has launched four B2B SaaS products, two of which reached $1M ARR within 18 months.

OBJECTIVE: Create a 60-day pre-launch product plan for an AI-powered contract review tool targeting freelance designers, developers, and consultants (not legal professionals).

CONTEXT: The target user is a solo professional who signs 8–20 contracts per year, has no legal training, and currently either skips reviewing contracts or spends 2+ hours per contract manually. The core value proposition is: "Know what you're signing in 5 minutes."

REQUIREMENTS:
- Define the 3 features for the MVP (must-have only)
- Define the 3 features for V1.1 (next 30 days post-launch)
- Define pricing: free tier logic, paid tier logic, and the conversion trigger
- Define the 5-step go-to-market plan for the first 100 users

CONSTRAINTS: Solo founder, no funding, technical (can code), 20 hours per week available. No enterprise sales. Target is self-serve, product-led growth.`
        }
    ];

    return (
        <div style={{
            margin: '48px 0',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            background: '#0a0f1d'
        }}>
            <div style={{ padding: '24px', background: 'linear-gradient(90deg, #1e1b4b, #0a0f1d)', borderBottom: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h3 style={{ margin: 0, color: '#c4b5fd', fontSize: '20px', fontWeight: 'bold' }}>Before & After: The Impact of Engineering</h3>
                <p style={{ margin: '8px 0 0 0', color: '#94a3b8', fontSize: '14px' }}>Select a use case to see the difference between chatting and orchestrating.</p>
            </div>

            <div style={{ display: 'flex', overflowX: 'auto', padding: '16px', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {examples.map((ex, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            whiteSpace: 'nowrap',
                            fontSize: '13px',
                            fontWeight: '600',
                            border: '1px solid',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            backgroundColor: activeTab === idx ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                            borderColor: activeTab === idx ? '#8b5cf6' : 'rgba(255,255,255,0.1)',
                            color: activeTab === idx ? '#c4b5fd' : '#94a3b8'
                        }}
                    >
                        {ex.title}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px' }}>
                <div style={{ flex: 1, background: 'rgba(239, 68, 68, 0.05)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px' }}>❌</span>
                        <h4 style={{ margin: 0, color: '#fca5a5', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Weak Prompt (Chatting)</h4>
                    </div>
                    <p style={{ margin: 0, color: '#e2e8f0', fontSize: '15px', fontStyle: 'italic', lineHeight: '1.6' }}>"{examples[activeTab].weak}"</p>
                    <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontSize: '13px', color: '#94a3b8' }}>
                        <strong>Output:</strong> Generic, shallow, templates that require heavy editing. Fails to meet specific business needs.
                    </div>
                </div>

                <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px' }}>✅</span>
                        <h4 style={{ margin: 0, color: '#6ee7b7', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineered Prompt (Orchestrating)</h4>
                    </div>
                    <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
                        {examples[activeTab].strong}
                    </pre>
                    <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontSize: '13px', color: '#94a3b8' }}>
                        <strong>Output:</strong> Specific, audience-calibrated, highly actionable, and production-ready with minimal editing.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterPromptComparison;
