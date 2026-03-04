'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useCallback } from 'react';

interface MarkdownRendererProps {
    content: string;
}

const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')  // Remove all non-word chars
        .replace(/--+/g, '-');    // Replace multiple - with single -
};

function CopyableCodeBlock({ children }: { children: React.ReactNode }) {
    const [copied, setCopied] = useState(false);

    const getTextContent = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(getTextContent).join('');
        if (node && typeof node === 'object' && 'props' in node) {
            const el = node as { props: { children?: React.ReactNode } };
            return getTextContent(el.props.children);
        }
        return '';
    };


    const handleCopy = useCallback(() => {
        const text = getTextContent(children);
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }).catch(() => { });
        } else {
            // Fallback for older browsers
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [children]);

    return (
        <div style={{ position: 'relative', marginBottom: 'var(--space-6)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            {/* Header bar */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 14px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderBottom: '1px solid var(--color-border)',
            }}>
                <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                </div>
                <button
                    onClick={handleCopy}
                    style={{
                        background: copied ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.08)',
                        color: copied ? '#34d399' : 'var(--color-text-muted)',
                        border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'var(--color-border)'}`,
                        borderRadius: 'var(--radius-sm)',
                        padding: '3px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s',
                        fontFamily: 'var(--font-sans)',
                    }}
                    aria-label="Copy code to clipboard"
                >
                    {copied ? '✓ Copied' : '⎘ Copy'}
                </button>
            </div>
            <pre style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-4)',
                overflowX: 'auto',
                margin: 0,
                fontSize: '0.875em',
                lineHeight: '1.7',
            }}>
                {children}
            </pre>
        </div>
    );
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose" style={{
            fontSize: 'var(--text-lg)',
            lineHeight: '1.8',
            color: 'var(--color-text-secondary)',
            maxWidth: '100%'
        }}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h1 style={{
                            fontSize: 'var(--text-4xl)',
                            fontWeight: 'var(--font-bold)',
                            marginTop: 'var(--space-12)',
                            marginBottom: 'var(--space-6)',
                            color: 'var(--color-text-primary)'
                        }}>
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => {
                        const id = typeof children === 'string' ? slugify(children) : undefined;
                        return (
                            <h2
                                id={id}
                                style={{
                                    fontSize: 'var(--text-3xl)',
                                    fontWeight: 'var(--font-bold)',
                                    marginTop: 'var(--space-10)',
                                    marginBottom: 'var(--space-4)',
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                {children}
                            </h2>
                        );
                    },
                    h3: ({ children }) => {
                        const id = typeof children === 'string' ? slugify(children) : undefined;
                        return (
                            <h3
                                id={id}
                                style={{
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 'var(--font-semibold)',
                                    marginTop: 'var(--space-8)',
                                    marginBottom: 'var(--space-3)',
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                {children}
                            </h3>
                        );
                    },
                    p: ({ children }) => (
                        <p style={{
                            marginBottom: 'var(--space-6)',
                            lineHeight: '1.8'
                        }}>
                            {children}
                        </p>
                    ),
                    ul: ({ children }) => (
                        <ul style={{
                            marginBottom: 'var(--space-6)',
                            paddingLeft: 'var(--space-6)',
                            listStyleType: 'disc'
                        }}>
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol style={{
                            marginBottom: 'var(--space-6)',
                            paddingLeft: 'var(--space-6)',
                            listStyleType: 'decimal'
                        }}>
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li style={{
                            marginBottom: 'var(--space-2)',
                            lineHeight: '1.7'
                        }}>
                            {children}
                        </li>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote style={{
                            borderLeft: '4px solid var(--color-accent)',
                            paddingLeft: 'var(--space-4)',
                            marginLeft: 0,
                            marginBottom: 'var(--space-6)',
                            fontStyle: 'italic',
                            color: 'var(--color-text-muted)'
                        }}>
                            {children}
                        </blockquote>
                    ),
                    code: ({ children, className }) => {
                        const isInline = !className;
                        return isInline ? (
                            <code style={{
                                backgroundColor: 'var(--color-surface)',
                                padding: '2px 6px',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.9em',
                                fontFamily: 'monospace',
                                color: 'var(--color-accent)'
                            }}>
                                {children}
                            </code>
                        ) : (
                            <code style={{
                                display: 'block',
                                backgroundColor: 'var(--color-surface)',
                                padding: 'var(--space-4)',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'auto',
                                marginBottom: 'var(--space-6)',
                                fontFamily: 'monospace',
                                fontSize: '0.9em'
                            }}>
                                {children}
                            </code>
                        );
                    },
                    pre: ({ children }) => <CopyableCodeBlock>{children}</CopyableCodeBlock>,

                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-accent hover:underline"
                            style={{
                                textDecoration: 'none',
                                transition: 'all var(--transition-fast)'
                            }}
                        >
                            {children}
                        </a>
                    ),
                    table: ({ children }) => (
                        <div style={{ overflowX: 'auto', marginBottom: 'var(--space-6)' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                border: '1px solid var(--color-border)'
                            }}>
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead style={{
                            backgroundColor: 'var(--color-surface)',
                            borderBottom: '2px solid var(--color-border)'
                        }}>
                            {children}
                        </thead>
                    ),
                    th: ({ children }) => (
                        <th style={{
                            padding: 'var(--space-3)',
                            textAlign: 'left',
                            fontWeight: 'var(--font-semibold)',
                            color: 'var(--color-text-primary)'
                        }}>
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td style={{
                            padding: 'var(--space-3)',
                            borderBottom: '1px solid var(--color-border)'
                        }}>
                            {children}
                        </td>
                    ),
                    hr: () => (
                        <hr style={{
                            border: 'none',
                            borderTop: '1px solid var(--color-border)',
                            margin: 'var(--space-8) 0'
                        }} />
                    ),
                    strong: ({ children }) => (
                        <strong style={{
                            fontWeight: 'var(--font-semibold)',
                            color: 'var(--color-text-primary)'
                        }}>
                            {children}
                        </strong>
                    ),
                    em: ({ children }) => (
                        <em style={{ fontStyle: 'italic' }}>
                            {children}
                        </em>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
