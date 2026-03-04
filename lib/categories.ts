export interface CategoryMetadata {
    title: string;
    seoDescription: string;
    introTitle: string;
    introContent: string;
    internalLinks: { label: string; href: string }[];
}

export const categoryRegistry: Record<string, CategoryMetadata> = {
    "news": {
        title: "AI News Radar: Global Updates & Insights",
        seoDescription: "Global AI news, product launches, security updates, policy shifts, and industry analysis. Stay ahead of artificial intelligence trends in 2026 and beyond.",
        introTitle: "AI News Radar: Global Artificial Intelligence Updates & Industry Insights",
        introContent: `Welcome to the AI News Radar, your trusted source for the latest developments in artificial intelligence, machine learning, generative AI, cybersecurity, and emerging AI technologies.

Artificial intelligence is evolving at an unprecedented pace. From breakthrough model releases and enterprise deployments to AI regulation, ethical debates, and global security risks — the landscape changes weekly. This section delivers structured, high-context AI news designed not just to inform, but to help you understand why it matters.

Unlike surface-level tech reporting, our coverage goes deeper. Every article includes critical insights on business impact and future outlook.

Whether you're a founder, developer, policymaker, educator, or AI enthusiast, this hub keeps you informed about critical updates shaping the global AI ecosystem.`,
        internalLinks: [
            { label: "🔐 AI Security Updates", href: "/news/ai-security/" },
            { label: "🤖 Generative AI Breakthroughs", href: "/news/generative-ai/" },
            { label: "🧠 AI Mastery Hub (In-depth Guides)", href: "/ai-mastery-hub/" },
            { label: "🛠 AI Tool Comparisons", href: "/tool-hangar/" },
            { label: "📦 Prompt Vault (Ready-to-Use Prompts)", href: "/prompt-vault/" }
        ]
    },
    "ai-security": { // Keeping for /news/ai-security backward compatibility
        title: "AI Security News: Threats & Vulnerabilities",
        seoDescription: "Latest AI security news, vulnerability reports, threat analysis, and best practices. Stay informed on AI risks and defenses worldwide in 2026.",
        introTitle: "AI Security News: Stay Ahead of Threats & Vulnerabilities",
        introContent: `The AI Security section delivers timely, in-depth coverage of cybersecurity, risk management, and threat intelligence in artificial intelligence systems. As AI adoption grows globally, security concerns—from model manipulation to data breaches—become increasingly critical. This hub is your go-to resource for understanding and mitigating these risks.

Here, we analyze model vulnerabilities, data privacy, and security incidents. Our goal is to provide actionable insights that help professionals protect systems, ensure compliance, and maintain trust in AI technologies.`,
        internalLinks: [
            { label: "🔹 Explore AI Mastery Hub → Security Guides", href: "/ai-mastery-hub/ai-security/" },
            { label: "🔹 Latest News on Generative AI Security", href: "/news/generative-ai/" },
            { label: "🔹 Prompt Vault → AI Security Prompts", href: "/prompt-vault/security/" },
            { label: "🔹 Tool Hangar → Security & Monitoring Tools", href: "/tool-hangar/security/" }
        ]
    },
    "generative-ai": {
        title: "Generative AI News: Models & Breakthroughs",
        seoDescription: "Breaking news and insights on generative AI, including GPT, Claude, DALL·E, and AI creative applications. Stay updated with 2026 trends.",
        introTitle: "Generative AI News: Models, Breakthroughs & Applications",
        introContent: `The Generative AI section tracks the latest innovations in AI that create text, images, audio, video, and other content. With models like GPT, Claude, DALL·E, and Stable Diffusion transforming industries, staying informed is essential for developers, marketers, researchers, and creatives worldwide.

Our coverage includes launches, benchmarks, and real-world applications. Each article goes beyond headlines to explain why these developments matter and what opportunities they bring.`,
        internalLinks: [
            { label: "🔹 Explore AI Mastery Hub → Generative AI Guides", href: "/ai-mastery-hub/generative-ai/" },
            { label: "🔹 Prompt Vault → Creative AI Prompts", href: "/prompt-vault/creative/" },
            { label: "🔹 Tool Hangar → Generative AI Tools", href: "/tool-hangar/generative-ai/" },
            { label: "🔹 News Radar → AI Security Updates", href: "/news/ai-security/" }
        ]
    },
    "prompt-vault": {
        title: "AI Prompt Vault: Templates for Every Task",
        seoDescription: "Discover AI prompt templates for productivity, research, coding, and creative work. Boost results with ready-to-use prompts for ChatGPT, Claude, and more.",
        introTitle: "AI Prompt Vault: Ready-to-Use Templates for Every Task",
        introContent: `The Prompt Vault is your ultimate collection of AI prompts, templates, and frameworks designed to save you time, enhance productivity, and unlock the full potential of AI systems. Whether you are a developer, researcher, marketer, or educator, these prompts help you generate high-quality outputs without guesswork.

Our collection covers:
- Coding and software development
- Research and analysis
- Creative writing and content creation
- Marketing and business strategies
- AI automation and workflow optimization

Each prompt is carefully structured for specific use cases and includes instructions for customization, best practices, and advanced variations. Instead of spending hours trial-and-error testing, you can copy, paste, and get results immediately.

The Prompt Vault also integrates internal resources:
- AI Mastery Hub guides for context and examples
- Tool Hangar references to compatible AI tools
- News Radar insights on new model updates

This makes it a one-stop hub for both beginners and experts looking to leverage AI efficiently.`,
        internalLinks: [
            { label: "🔹 Explore AI Mastery Hub → Prompt Engineering Guides", href: "/ai-mastery-hub/prompt-engineering/" },
            { label: "🔹 Tool Hangar → Best AI Tools for Prompts", href: "/tool-hangar/" },
            { label: "🔹 News Radar → Latest AI Developments", href: "/news/" },
            { label: "🔹 Related Prompt Categories → Education, Marketing, Coding", href: "/prompt-vault/" }
        ]
    },
    "education": {
        title: "AI Prompts for Education & Research",
        seoDescription: "AI prompts for education, learning, and research. Templates for students, teachers, and academic projects to generate high-quality outputs in minutes.",
        introTitle: "AI Prompts for Education & Research",
        introContent: `The Education Prompt section offers ready-to-use AI prompts designed for students, teachers, and researchers. These templates simplify complex learning tasks, help generate summaries, analyze topics, and create study materials efficiently.

Key features include:
- Essay writing and content summarization
- Research analysis with citations
- Study guides, quizzes, and flashcards
- Language learning and translation assistance
- Classroom and e-learning applications

Every prompt includes instructions, examples, and customization tips. By using these templates, educators and students save time while improving output quality and clarity.

These educational prompts integrate seamlessly with AI Mastery Hub guides and Prompt Vault workflow templates, giving users a full-stack AI learning and application experience.`,
        internalLinks: [
            { label: "🔹 AI Mastery Hub → Educational AI Guides", href: "/ai-mastery-hub/" },
            { label: "🔹 Prompt Vault → Other Educational Prompts", href: "/prompt-vault/" },
            { label: "🔹 Tool Hangar → AI Tools for Learning", href: "/tool-hangar/" },
            { label: "🔹 News Radar → AI in Education Updates", href: "/news/" }
        ]
    },
    "marketing": {
        title: "AI Prompts for Marketing & Business",
        seoDescription: "AI marketing prompts for content creation, social media, ads, and campaigns. Templates to improve productivity, engagement, and ROI for marketers.",
        introTitle: "AI Prompts for Marketing & Business",
        introContent: `The Marketing Prompt section provides AI templates specifically designed for marketers, content creators, and business strategists. These prompts help create ad copies, social media campaigns, email newsletters, and other marketing content faster and more effectively.

Key features include:
- Social media content templates (Twitter, LinkedIn, Instagram)
- Ad copy and campaign generation
- Email newsletters and automation
- SEO content ideas and blog outlines
- Brand messaging and tone customization

Each prompt is ready-to-use with instructions, examples, and advanced variations for maximum ROI. These prompts save time, increase engagement, and maintain brand voice consistency across channels.

They are fully integrated with AI Mastery Hub guides and Tool Hangar comparisons, helping users select the right AI tools for marketing applications.`,
        internalLinks: [
            { label: "🔹 AI Mastery Hub → Marketing AI Guides", href: "/ai-mastery-hub/" },
            { label: "🔹 Prompt Vault → Other Marketing Prompts", href: "/prompt-vault/" },
            { label: "🔹 Tool Hangar → Best AI Marketing Tools", href: "/tool-hangar/" },
            { label: "🔹 News Radar → AI Marketing & Ads Trends", href: "/news/" }
        ]
    },

    "writing-tools": {
        title: "AI Writing Tools: Boost Productivity & Creativity",
        seoDescription: "Best AI writing tools for content creation, copywriting, emails, and blogs. Compare features, pricing, and integrations to boost productivity in 2026.",
        introTitle: "AI Writing Tools: Boost Productivity & Creativity",
        introContent: `The Writing Tools section features AI-powered solutions for writers, marketers, and content creators. These tools help automate copywriting, create high-quality articles, craft email campaigns, generate social media posts, and more.

Each tool review includes:
- Core features and strengths
- Pricing and subscription plans
- Ease of use and integrations
- Best use cases and audience fit
- Pros and cons for quick assessment

We also provide practical guides on combining these writing tools with Prompt Vault templates and workflows from AI Mastery Hub, allowing you to create professional-grade content efficiently.

Stay informed on updates and newly released writing AI platforms to make data-driven decisions for content creation and marketing campaigns.`,
        internalLinks: [
            { label: "🔹 Prompt Vault → Writing Prompts Templates", href: "/prompt-vault/" },
            { label: "🔹 AI Mastery Hub → Content Creation Guides", href: "/ai-mastery-hub/" },
            { label: "🔹 Tool Hangar → Image Tools, Marketing Tools", href: "/tool-hangar/" },
            { label: "🔹 News Radar → Writing AI Product Updates", href: "/news/" }
        ]
    },
    "image-tools": {
        title: "AI Image Tools: Create, Edit & Innovate",
        seoDescription: "AI image generation and editing tools for designers, marketers, and creators. Compare features, quality, and pricing to find the best 2026 solution.",
        introTitle: "AI Image Tools: Create, Edit & Innovate",
        introContent: `The Image Tools section showcases AI-powered platforms for creating, editing, and enhancing visuals. Whether you are a designer, marketer, or content creator, these tools help produce images faster, smarter, and more creatively.

Key features covered:
- AI image generation (DALL·E, MidJourney, Stable Diffusion)
- Editing and enhancement features
- Customization and style options
- Pricing, subscriptions, and free tier availability
- Pros, cons, and real-world use cases

Each tool review explains how it integrates with Prompt Vault creative prompts and guides from AI Mastery Hub, helping users combine AI creativity with practical workflows.

Stay updated on the newest AI image tools and trends to remain competitive and innovative in 2026.`,
        internalLinks: [
            { label: "🔹 Prompt Vault → Creative AI Prompts", href: "/prompt-vault/" },
            { label: "🔹 AI Mastery Hub → Generative AI Guides", href: "/ai-mastery-hub/" },
            { label: "🔹 Tool Hangar → Writing Tools, Productivity Tools", href: "/tool-hangar/" },
            { label: "🔹 News Radar → Image AI Updates", href: "/news/" }
        ]
    },
    "ai-mastery-hub": {
        title: "AI Mastery Hub: Advanced Guides & Workflows",
        seoDescription: "Deep-dive AI guides, tutorials, and workflows. Learn prompt engineering, AI security, and advanced applications for developers, marketers, and researchers.",
        introTitle: "AI Mastery Hub: Advanced Guides, Tutorials & Workflows",
        introContent: `The AI Mastery Hub is your ultimate resource for mastering artificial intelligence. This hub is designed for developers, researchers, marketers, and AI enthusiasts who want to move beyond basic usage and unlock advanced skills, techniques, and strategies.

Here you’ll find:
- Prompt engineering tutorials: Learn how to craft, optimize, and scale AI prompts for maximum results.
- AI security guides: Understand vulnerabilities, safe deployment, and ethical best practices.
- Advanced workflows: Agentic AI, multi-model orchestration, automation pipelines, and tool integration.
- Industry applications: AI in business, education, marketing, and research.
- Case studies and templates: Learn from real-world projects and replicate workflows for your needs.

Each guide is designed to be actionable, practical, and up-to-date with the latest AI models and techniques. By combining these guides with Prompt Vault templates and Tool Hangar insights, you can build professional-grade AI workflows and solutions efficiently.

Whether you want to improve productivity, secure AI applications, or explore cutting-edge generative AI capabilities, the AI Mastery Hub equips you with the knowledge and tools to succeed in 2026 and beyond.`,
        internalLinks: [
            { label: "🔹 Prompt Vault → Related Prompts", href: "/prompt-vault/" },
            { label: "🔹 Tool Hangar → Relevant Tools", href: "/tool-hangar/" },
            { label: "🔹 News Radar → AI Trends & Updates", href: "/news/" },
            { label: "🔹 AI Mastery Hub → Subcategories: Prompt Engineering, AI Security", href: "/ai-mastery-hub/" }
        ]
    },
    "prompt-engineering": {
        title: "Prompt Engineering: Design Effective AI Prompts",
        seoDescription: "Learn prompt engineering for AI models. Guides, tutorials, and templates for ChatGPT, Claude, and generative AI to improve accuracy and output quality.",
        introTitle: "Prompt Engineering: Design Effective AI Prompts",
        introContent: `The Prompt Engineering section teaches you how to craft AI prompts that generate accurate, reliable, and creative outputs. With the rise of models like ChatGPT, Claude, and other generative AI, understanding prompt design is now a critical skill for developers, content creators, and researchers.

This hub covers:
- Basics of prompt structure and wording
- Advanced techniques for multi-turn conversations
- Strategies for reducing AI hallucinations and errors
- Templates and workflows from Prompt Vault for practical use
- Case studies showing prompt optimization in real projects

Each guide is actionable, with examples and variations to help you customize prompts for your workflow. By mastering prompt engineering, you can maximize output quality, save time, and harness the full potential of AI models for creative, educational, and business applications.`,
        internalLinks: [
            { label: "🔹 Prompt Vault → Ready-to-Use Prompts", href: "/prompt-vault/" },
            { label: "🔹 Tool Hangar → AI Tools for Prompt Testing", href: "/tool-hangar/" },
            { label: "🔹 AI Mastery Hub → AI Security Guides", href: "/ai-mastery-hub/ai-security/" },
            { label: "🔹 News Radar → AI Model Updates", href: "/news/" }
        ]
    },
    "ai-chatbots-llms": {
        title: "AI Chatbots & LLMs: Complete 2026 Guide",
        seoDescription: "The most complete guide to AI chatbots and LLMs in 2026. Compare ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, and more — features, pricing, architecture, and use cases.",
        introTitle: "AI Chatbots & Large Language Models — The Definitive 2026 Guide",
        introContent: `AI chatbots and large language models are the foundational layer of the 2026 AI ecosystem. Every major AI workflow — coding, writing, research, analysis, and automation — runs on top of one or more LLMs. This category covers the conversational AI interfaces that knowledge workers, developers, founders, and researchers interact with daily.

The distinction that matters most in 2026: these are no longer simple Q&A tools. The leading platforms combine reasoning, web search, code execution, image generation, document analysis, and autonomous agent behavior in a single interface. The right tool depends on your use case, context window requirements, model architecture, privacy posture, and workflow integration needs.

**At a Glance:**
- **ChatGPT** — Best for: broad professional use, multimodal tasks, research synthesis
- **Claude** — Best for: long documents, precise coding, instruction fidelity  
- **Gemini** — Best for: Google Workspace users, video/audio analysis
- **Grok** — Best for: real-time X/social data, trend analysis
- **Microsoft Copilot** — Best for: Microsoft 365 enterprise teams
- **Perplexity** — Best for: cited research, current events queries
- **Meta AI / Llama** — Best for: open-source, local deployment, privacy-critical apps
- **DeepSeek** — Best for: cost-sensitive API applications, coding at scale`,
        internalLinks: [
            { label: "🤖 ChatGPT — GPT-5 Review", href: "/tool-hangar/ai-chatbots-llms/chatgpt/" },
            { label: "🧠 Claude — 200K Context Review", href: "/tool-hangar/ai-chatbots-llms/claude/" },
            { label: "♊ Gemini — Google AI Review", href: "/tool-hangar/ai-chatbots-llms/gemini/" },
            { label: "🔍 Perplexity — AI Search Review", href: "/tool-hangar/ai-chatbots-llms/perplexity/" },
            { label: "🛠 Explore AI Coding Tools", href: "/tool-hangar/ai-coding-dev-tools/" },
            { label: "📰 AI News Radar", href: "/news/" }
        ]
    },
    "ai-coding-dev-tools": {
        title: "AI Coding & Dev Tools: The Complete 2026 Guide",
        seoDescription: "The definitive 2026 guide to 14 AI coding tools — Claude Code, Cursor, Windsurf, GitHub Copilot, Replit, Bolt.new, Lovable, Codeium, and more.",
        introTitle: "AI Coding & Dev Tools — The Complete 2026 Guide",
        introContent: `The AI coding ecosystem divides into four layers: Agentic IDEs that operate on local codebases with multi-file agent execution; Browser Builders that generate and deploy full-stack apps from natural language; Code Completion tools that augment specific workflow stages; and Local Runtimes that run models entirely on-device.

Every tool in this category lives in one primary layer. Most professional stacks combine 2–3 layers. The decision is not which single tool to use — it is which combination of layers your workflow requires.

**The Four-Layer Taxonomy:**
- **Agentic IDEs:** (e.g., Cursor, Windsurf, Claude Code) — Multi-file autonomous coding on local repositories.
- **Browser Builders:** (e.g., Replit, Bolt.new, Lovable) — Zero-setup app generation and deployment from a browser.
- **Specialist Agents:** (e.g., Codex, Devin, Codeium) — Targeted capabilities like async tasks or code completion.
- **Local Runtimes:** (e.g., Ollama, LM Studio) — On-device model execution without cloud API costs.`,
        internalLinks: [
            { label: "💻 Cursor IDE Review", href: "/tool-hangar/ai-coding-dev-tools/cursor/" },
            { label: "🚀 Windsurf IDE Review", href: "/tool-hangar/ai-coding-dev-tools/windsurf/" },
            { label: "🛠 Claude Code Terminal Agent", href: "/tool-hangar/ai-coding-dev-tools/claude-code/" },
            { label: "🌐 Bolt.new Full-Stack Builder", href: "/tool-hangar/ai-coding-dev-tools/bolt-new/" },
            { label: "🤖 Explore AI Chatbots & LLMs", href: "/tool-hangar/ai-chatbots-llms/" },
            { label: "🧠 AI Mastery Hub", href: "/ai-mastery-hub/" }
        ]
    },
    "hub-ai-security": { // Differentiating from news-ai-security
        title: "AI Security: Protect Models, Data & Infrastructure",
        seoDescription: "Comprehensive AI security guides. Learn best practices, risk mitigation, and safe deployment of AI models for enterprises, developers, and researchers.",
        introTitle: "AI Security: Protect Models, Data & Infrastructure",
        introContent: `The AI Security section is dedicated to teaching best practices for securing AI systems. From protecting sensitive data to safe model deployment, this hub helps developers, enterprises, and researchers minimize risk while maximizing AI potential.

Key topics include:
- AI model vulnerabilities and mitigation
- Data privacy and regulatory compliance
- Secure integration of AI tools into workflows
- Threat analysis and real-world incident reviews
- Ethical considerations and responsible AI deployment

Each guide provides actionable insights, templates, and step-by-step instructions to implement security measures in your AI projects. By combining this knowledge with Prompt Vault workflows and Tool Hangar integrations, users can safely deploy AI solutions while maintaining trust and compliance.`,
        internalLinks: [
            { label: "🔹 Prompt Vault → Security-Related Prompts", href: "/prompt-vault/" },
            { label: "🔹 Tool Hangar → Security & Monitoring Tools", href: "/tool-hangar/" },
            { label: "🔹 AI Mastery Hub → Prompt Engineering Guides", href: "/ai-mastery-hub/prompt-engineering/" },
            { label: "🔹 News Radar → AI Security Updates", href: "/news/ai-security/" }
        ]
    },
    "tool-hangar": {
        title: "The Tool Hangar: Vetted AI Tools & Rankings",
        seoDescription: "The ultimate directory for the agentic era. Vetted AI models, IDEs, and research tools that power 10x workflows.",
        introTitle: "The Tool Hangar: Expert-Vetted AI Tools & Ranking Engine",
        introContent: `Welcome to the Tool Hangar, the definitive directory for the agentic era. 
We discover, test, and rank the most powerful AI models, IDEs, and autonomous agents. 
Every tool listed here is vetted for performance, security, and real-world workflow integration. 
Explore our curated selection to find the perfect engine for your next project.`,
        internalLinks: [
            { label: "🤖 AI Chatbots & LLMs", href: "/tool-hangar/ai-chatbots-llms/" },
            { label: "💻 AI Coding & Dev Tools", href: "/tool-hangar/ai-coding-dev-tools/" },
            { label: "🔍 AI Search & Research", href: "/tool-hangar/search-research/" },
            { label: "🧠 AI Mastery Hub", href: "/ai-mastery-hub/" }
        ]
    }
};


export function getCategoryMetadata(category: string): CategoryMetadata | undefined {
    return categoryRegistry[category];
}
