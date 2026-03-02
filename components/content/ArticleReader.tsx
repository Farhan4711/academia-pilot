'use client';

import React, { useState, useEffect, useRef } from 'react';

// Utility to strip markdown and component tags
const stripMarkdown = (md: string) => {
    if (!md) return '';

    // 1. Remove custom component tags like :::COMPONENT:Name:::
    let text = md.replace(/:::COMPONENT:\w+:::/g, '');

    // 2. Remove markdown images ![alt](url)
    text = text.replace(/!\[.*?\]\(.*?\)/g, '');

    // 3. Remove markdown links but keep the text [text](url) -> text
    text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');

    // 4. Remove headings (##, ###, etc)
    text = text.replace(/^#+\s+/gm, '');

    // 5. Remove bold/italics (* and _)
    text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');
    text = text.replace(/(\*|_)(.*?)\1/g, '$2');

    // 6. Remove strikethrough
    text = text.replace(/~~(.*?)~~/g, '$1');

    // 7. Remove blockquotes
    text = text.replace(/^>\s+/gm, '');

    // 8. Remove inline code backticks
    text = text.replace(/`([^`]+)`/g, '$1');

    // 9. Remove multi-line code blocks
    text = text.replace(/```[\s\S]*?```/g, '');

    // 10. Clean up extra whitespace and newlines
    text = text.replace(/\n{3,}/g, '\n\n').trim();

    return text;
};

interface ArticleReaderProps {
    content: string;
    title: string;
}

export default function ArticleReader({ content, title }: ArticleReaderProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSupported, setIsSupported] = useState(true);
    const [rate, setRate] = useState(1);

    // Ref to hold the current utterance
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
            setIsSupported(false);
            return;
        }

        // Initialize voices on load to prevent empty array bug
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }

        // Cleanup on unmount
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    // Refs to manage chunking, DOM elements, and highlighting
    const queuedChunks = useRef<Array<{ text: string, element?: HTMLElement }>>([]);
    const currentChunkIndex = useRef<number>(0);

    const playNextChunk = () => {
        if (!window.speechSynthesis) return;

        if (currentChunkIndex.current >= queuedChunks.current.length) {
            setIsPlaying(false);
            setIsPaused(false);

            // Clean up finale highlight
            if (queuedChunks.current.length > 0) {
                const lastElement = queuedChunks.current[queuedChunks.current.length - 1].element;
                if (lastElement) {
                    lastElement.style.backgroundColor = '';
                    lastElement.style.color = '';
                    lastElement.style.transition = '';
                }
            }
            return;
        }

        const chunkData = queuedChunks.current[currentChunkIndex.current];
        const chunkText = chunkData.text;

        // Clean up previous highlight
        if (currentChunkIndex.current > 0) {
            const prevElement = queuedChunks.current[currentChunkIndex.current - 1].element;
            if (prevElement && prevElement !== chunkData.element) {
                prevElement.style.backgroundColor = '';
                prevElement.style.color = '';
            }
        }

        // Apply new highlight and scroll
        if (chunkData.element) {
            chunkData.element.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            chunkData.element.style.backgroundColor = 'rgba(250, 204, 21, 0.3)'; // Tailwind yellow-400 equivalent
            chunkData.element.style.color = 'var(--color-text-primary)';
            chunkData.element.style.borderRadius = '4px';

            // Scroll into view beautifully
            chunkData.element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        // Skip empty chunks defensively
        if (!chunkText || chunkText.trim().length === 0) {
            currentChunkIndex.current++;
            playNextChunk();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(chunkText);

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Google US English'))
            || voices.find(v => v.lang === 'en-US' && v.name.includes('Premium'))
            || voices.find(v => v.lang.startsWith('en-'));

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        // Force a slight reduction in rate if it's too fast, Chrome gets buggy
        utterance.rate = rate;
        utterance.pitch = 1;

        utterance.onend = () => {
            // Use setTimeout to prevent maximum call stack size exceeded / synchronization bugs in Chrome
            setTimeout(() => {
                currentChunkIndex.current++;
                playNextChunk();
            }, 10);
        };

        utterance.onerror = (e) => {
            if (e.error !== 'canceled' && e.error !== 'interrupted') {
                console.error("Speech synthesis error on chunk", currentChunkIndex.current, chunkText, e);
                // If it errors on a chunk, attempt to just skip it rather than crashing completely
                setTimeout(() => {
                    currentChunkIndex.current++;
                    playNextChunk();
                }, 10);
            }
        };

        utteranceRef.current = utterance;

        // Chrome bug: sometimes it needs a tiny delay before speaking the next chunk
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 10);
    };

    const handlePlayPause = () => {
        if (!window.speechSynthesis) return;

        if (isPlaying) {
            if (isPaused) {
                window.speechSynthesis.resume();
                setIsPaused(false);
            } else {
                window.speechSynthesis.pause();
                setIsPaused(true);
            }
        } else {
            // Start playing from scratch
            window.speechSynthesis.cancel(); // clear anything lingering

            // 1. We always read the title first (no DOM element to highlight specifically, or we could just skip highlighting the title)
            const chunks: Array<{ text: string, element?: HTMLElement }> = [
                { text: `${title}.` }
            ];

            // 2. Scan the DOM for readable elements within the <article> tag
            // querySelectorAll is safer than innerText because we want to map text -> element
            const articleEl = document.querySelector('article');
            if (articleEl) {
                // Find paragraphs, headings, and list items. Avoid SVG, script, style, buttons, etc.
                const elements = articleEl.querySelectorAll('p, h2, h3, h4, li, blockquote');

                elements.forEach((el) => {
                    const htmlElement = el as HTMLElement;

                    // Skip if hidden or empty
                    if (htmlElement.offsetParent === null) return;

                    // Skip elements inside special custom components
                    if (htmlElement.closest('.not-readable')) return;

                    const text = htmlElement.innerText || htmlElement.textContent || '';
                    const cleanText = stripMarkdown(text).trim();

                    if (cleanText.length > 0) {
                        // For very long paragraphs, it's safer to break them into sentences 
                        // so Chrome doesn't crash, but we still highlight the whole paragraph element.
                        const sentences = cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText];
                        sentences.forEach(s => {
                            if (s.trim().length > 0) {
                                chunks.push({
                                    text: s.trim(),
                                    element: htmlElement
                                });
                            }
                        });
                    }
                });
            } else {
                // Fallback to raw text if <article> isn't found
                const cleanText = stripMarkdown(content);
                const rawChunks = cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText];
                rawChunks.forEach(c => {
                    if (c.trim().length > 0) {
                        chunks.push({ text: c.trim() });
                    }
                });
            }

            queuedChunks.current = chunks;
            currentChunkIndex.current = 0;

            if (queuedChunks.current.length === 0) return;

            setIsPlaying(true);
            setIsPaused(false);

            playNextChunk();
        }
    };

    const handleStop = () => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        queuedChunks.current = [];
        currentChunkIndex.current = 0;
        setIsPlaying(false);
        setIsPaused(false);
    };

    const handleRateChange = (newRate: number) => {
        setRate(newRate);
        if (isPlaying && utteranceRef.current) {
            // Stop current, update rate next time
            window.speechSynthesis.cancel();
            // We do NOT reset currentChunkIndex so it resumes roughly where it was
            playNextChunk();
        }
    };

    if (!isSupported) {
        return null;
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            padding: 'var(--space-4) var(--space-6)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-8)',
            boxShadow: 'var(--shadow-sm)'
        }}>

            <button
                onClick={handlePlayPause}
                title={isPlaying ? (isPaused ? "Resume Reading" : "Pause Reading") : "Listen to Article"}
                style={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isPlaying && !isPaused ? (
                    // Pause Icon
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                ) : (
                    // Play Icon
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                )}
            </button>

            {isPlaying && (
                <button
                    onClick={handleStop}
                    title="Stop Reading"
                    style={{
                        background: 'transparent',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                </button>
            )}

            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: '2px'
                }}>
                    {isPlaying ? (isPaused ? "Paused" : "Reading Aloud...") : "Listen to this article"}
                </div>
                <div style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)'
                }}>
                    {isPlaying ? "Using native browser voice API" : `${Math.ceil(stripMarkdown(content).length / 1000)} min listen`}
                </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                {[1, 1.25, 1.5].map((speed) => (
                    <button
                        key={speed}
                        onClick={() => handleRateChange(speed)}
                        style={{
                            background: rate === speed ? 'var(--color-border)' : 'transparent',
                            color: rate === speed ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                            border: '1px solid',
                            borderColor: rate === speed ? 'var(--color-border)' : 'transparent',
                            borderRadius: 'var(--radius-full)',
                            padding: 'var(--space-1) var(--space-3)',
                            fontSize: 'var(--text-xs)',
                            cursor: 'pointer',
                            fontWeight: rate === speed ? 'var(--font-bold)' : 'normal',
                        }}
                    >
                        {speed}x
                    </button>
                ))}
            </div>

        </div>
    );
}
