"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsTyping(true);

        try {
            // 1. Local Retrieval (Client-side RAG via search index)
            let context = '';
            try {
                const indexRes = await fetch('/search-index.json');
                if (indexRes.ok) {
                    const searchData = await indexRes.json();
                    // Extremely basic text matching for RAG
                    const docs = searchData.filter((doc: any) =>
                        doc.title.toLowerCase().includes(userMessage.toLowerCase()) ||
                        (doc.description && doc.description.toLowerCase().includes(userMessage.toLowerCase()))
                    );
                    if (docs.length > 0) {
                        context = "Context retrieved from site:\n" + docs.slice(0, 3).map((d: any) => `- ${d.title}: https://academiapilot.com${d.url}`).join('\n');
                    }
                }
            } catch (err) {
                console.warn("Search index not available for local RAG");
            }

            // 2. Gateway call
            const gatewayUrl = process.env.NEXT_PUBLIC_AI_GATEWAY_URL;

            if (!gatewayUrl) {
                // Fallback if no endpoint is configured
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: "I'm the Academia Pilot AI Assistant. 🚀 Currently running in offline mode because the NEXT_PUBLIC_AI_GATEWAY_URL is not configured.\n\n" + (context ? "Here is what I found locally:\n\n" + context : "I couldn't find specific articles for that on the site.")
                    }]);
                    setIsTyping(false);
                }, 800);
                return;
            }

            // Actual fetch (assuming a standard OpenAI-like or simplified deployed worker endpoint)
            const res = await fetch(gatewayUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: `You are the Academia Pilot AI Assistant. Help the user navigate the site. ${context}` },
                        ...messages,
                        { role: 'user', content: userMessage }
                    ]
                })
            });

            if (!res.ok) throw new Error('Gateway Error');
            const data = await res.json();

            setMessages(prev => [...prev, { role: 'assistant', content: data.reply || data.choices?.[0]?.message?.content || "Sorry, I received an invalid response." }]);

        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error connecting to the AI Gateway. Please try again later." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                aria-label="Toggle AI Assistant"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">✈️</span>
                            <h3 className="font-semibold text-lg">Pilot AI</h3>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500 mt-10">
                                <p className="text-sm">Hi! How can I help you navigate the agentic frontier today?</p>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-4 py-2 text-sm shadow-sm ${msg.role === 'user'
                                        ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-none'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={endOfMessagesRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        <form onSubmit={handleSubmit} className="flex gap-2 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 text-sm text-gray-900"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="absolute right-2 top-1.5 p-1.5 text-indigo-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition-colors"
                                aria-label="Send message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
