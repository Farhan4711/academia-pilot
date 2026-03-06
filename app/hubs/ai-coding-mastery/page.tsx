import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Coding Mastery Hub 2026',
    description: 'The ultimate guide to mastering AI coding in 2026. Explore GitHub Copilot, Cursor, Devin, and agentic workflows.',
};

export default function AICodingHub() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    The 2026 AI Coding <span className="text-indigo-600">Mastery Hub</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Your comprehensive learning path from traditional IDEs to fully autonomous agentic workflows.
                </p>
            </div>

            <div className="prose prose-lg prose-indigo max-w-none">
                <p>
                    Software engineering is undergoing its most radical transformation since the invention of the compiler. In 2026, the shift from syntax memorization to architectural "vibe coding" is complete. This hub is designed to help you navigate the agentic frontier.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 border-b pb-2">Step 1: Understand the Shift (The Why)</h2>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                    <Link href="/news/ai-learning/self-taught-ai-developer-no-cs-degree-2026" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">The End of the CS Degree?</h3>
                        <p className="text-gray-600 text-sm">How self-taught developers are using AI to bypass traditional credentialing.</p>
                    </Link>
                    <Link href="/news/analysis/agentic-ai-end-of-traditional-ides" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">RIP Traditional IDEs</h3>
                        <p className="text-gray-600 text-sm">Why text editors are becoming obsolete in the face of agentic builders.</p>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">Step 2: Equip Your Toolbelt (The What)</h2>
                <p>
                    You don't need to know every tool, just the right ones. Dive into our Tool Hangar for comprehensive reviews.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                    <Link href="/tool-hangar/ai-coding-dev-tools/cursor" className="block p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-all">
                        <h3 className="font-bold text-indigo-900 text-lg mb-2">Cursor IDE</h3>
                        <p className="text-indigo-700 text-sm">The gold standard for AI-assisted coding in a VS Code fork.</p>
                    </Link>
                    <Link href="/tool-hangar/ai-coding-dev-tools/devin" className="block p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-all">
                        <h3 className="font-bold text-indigo-900 text-lg mb-2">Devin</h3>
                        <p className="text-indigo-700 text-sm">The first autonomous AI software engineer.</p>
                    </Link>
                </div>
                <p>
                    <Link href="/tool-hangar" className="text-indigo-600 font-semibold hover:underline">View the full Tool Hangar &rarr;</Link>
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">Step 3: Master the Workflows (The How)</h2>
                <ul className="space-y-4">
                    <li>
                        <Link href="/news-radar/github-agent-hq-multi-agent-platform-architecture-2026" className="font-semibold text-indigo-600 hover:underline">
                            GitHub Agent HQ Architecture
                        </Link>
                        - Learn how enterprise teams are orchestrating multiple agents.
                    </li>
                    <li>
                        <Link href="/news-radar/google-antigravity-browser-physics-developer-guide-2026" className="font-semibold text-indigo-600 hover:underline">
                            Google Antigravity Developer Guide
                        </Link>
                        - Go deep into implementing physics in the DOM using Matter.js and AI.
                    </li>
                    <li>
                        <Link href="/prompt-vault" className="font-semibold text-indigo-600 hover:underline">
                            The Prompt Vault
                        </Link>
                        - Steal our highly-optimized prompts for Next.js, Python, and database architecture.
                    </li>
                </ul>

            </div>

            <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to accelerate your learning?</h3>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">Join the 50,000+ developers receiving our weekly technical teardowns of the latest AI coding patterns.</p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30">
                    Subscribe to The Pilot
                </button>
            </div>
        </div>
    );
}
