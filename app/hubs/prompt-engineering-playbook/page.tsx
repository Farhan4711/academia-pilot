import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Prompt Engineering Playbook 2026',
    description: 'Master prompt engineering for Claude 3.5, GPT-4.5, and Gemini 1.5. Advanced frameworks, templates, and strategies.',
};

export default function PromptEngineeringHub() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    The 2026 Prompt Engineering <span className="text-indigo-600">Playbook</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Move beyond basic questions. Learn the advanced frameworks required to orchestrate complex reasoning in modern LLMs.
                </p>
            </div>

            <div className="prose prose-lg prose-indigo max-w-none">
                <p>
                    "Prompting" is no longer just typing questions into a chat box. In 2026, it is deterministic systems engineering. This hub aggregates the most effective frameworks we've tested across major foundation models.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 border-b pb-2">1. The State of Foundation Models</h2>
                <p>Different models require drastically different prompting strategies. You must understand their underlying architectures and RLHF tunings.</p>

                <div className="grid md:grid-cols-3 gap-4 not-prose mb-8">
                    <Link href="/news-radar/why-users-leaving-chatgpt-for-claude-ethics-outage-ai-race-2026" className="block p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        <h3 className="font-bold text-gray-900 mb-1">Claude vs ChatGPT</h3>
                        <p className="text-sm text-gray-600">Why Claude is winning the reasoning war.</p>
                    </Link>
                    <Link href="/news-radar/gemini-models-complete-guide-2026" className="block p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        <h3 className="font-bold text-gray-900 mb-1">Google Gemini</h3>
                        <p className="text-sm text-gray-600">Mastering the 1M+ token context window.</p>
                    </Link>
                    <Link href="/news-radar/chatgpt-vs-claude-vs-gemini-2026" className="block p-4 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition-all">
                        <h3 className="font-bold text-indigo-900 mb-1">The Grand Comparison</h3>
                        <p className="text-sm text-indigo-700">Detailed benchmarks for 2026 models.</p>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">2. Advanced Frameworks</h2>
                <ul className="space-y-4">
                    <li>
                        <strong>Chain of Density (CoD):</strong> Creating highly information-dense summaries.
                    </li>
                    <li>
                        <strong>System 2 Attention:</strong> Forcing models to disregard biased context before answering.
                    </li>
                    <li>
                        <strong>Self-Refinement:</strong> Multi-turn loops where the model criticizes its own output.
                    </li>
                    <li>
                        <Link href="/news-radar/prompt-engineering-guide-2026" className="font-semibold text-indigo-600 hover:underline">
                            Read the Full 2026 Prompt Manifesto &rarr;
                        </Link>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">3. The Prompt Vault</h2>
                <p>Stop writing from scratch. We maintain a database of production-ready prompts for coding, research, writing, and business analytics.</p>

                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl text-center not-prose">
                    <p className="text-gray-600 mb-4">Access 50+ optimized, copy-paste ready system prompts.</p>
                    <Link href="/prompt-vault" className="inline-block bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium py-2 px-6 rounded-lg transition-all shadow-sm">
                        Enter The Vault
                    </Link>
                </div>
            </div>
        </div>
    );
}
