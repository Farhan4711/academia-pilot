'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TOCEntry {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string; // raw markdown content
}

function extractHeadings(markdown: string): TOCEntry[] {
    const lines = markdown.split('\n');
    const entries: TOCEntry[] = [];

    for (const line of lines) {
        const match = line.match(/^(#{2,4})\s+(.+)$/);
        if (match) {
            const level = match[1].length; // 2 = h2, 3 = h3, 4 = h4
            const text = match[2].trim().replace(/\*\*/g, '').replace(/`/g, '');
            // Generate the same slug as MarkdownRenderer anchors
            const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            entries.push({ id, text, level });
        }
    }
    return entries;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const headings = extractHeadings(content);

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            { rootMargin: '-10% 0% -80% 0%', threshold: 0 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [content]); // eslint-disable-line react-hooks/exhaustive-deps

    if (headings.length < 3) return null; // Skip TOC for very short articles

    return (
        <nav
            aria-label="Table of Contents"
            style={{
                margin: 'var(--space-8) 0',
                padding: 'var(--space-5)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
            }}
        >
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    color: 'var(--color-text-primary)'
                }}
            >
                <p style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                }}>
                    📋 Contents
                </p>
                {isExpanded ? <ChevronUp size={16} color="var(--color-text-muted)" /> : <ChevronDown size={16} color="var(--color-text-muted)" />}
            </button>

            {isExpanded && (
                <ol style={{ margin: 'var(--space-4) 0 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                    {headings.map(({ id, text, level }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setActiveId(id);
                                }}
                                style={{
                                    display: 'block',
                                    paddingLeft: level === 2 ? '0' : level === 3 ? 'var(--space-4)' : 'var(--space-8)',
                                    paddingTop: 'var(--space-1)',
                                    paddingBottom: 'var(--space-1)',
                                    fontSize: level === 2 ? 'var(--text-sm)' : 'var(--text-xs)',
                                    fontWeight: level === 2 ? '500' : '400',
                                    color: activeId === id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    borderLeft: activeId === id ? '2px solid var(--color-accent)' : '2px solid transparent',
                                    transition: 'color 150ms, border-color 150ms',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeId !== id) e.currentTarget.style.color = 'var(--color-text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    if (activeId !== id) e.currentTarget.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                {text}
                            </a>
                        </li>
                    ))}
                </ol>
            )}
        </nav>
    );
}
