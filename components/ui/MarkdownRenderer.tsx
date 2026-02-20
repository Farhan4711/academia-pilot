'use client';

import ReactMarkdown from 'react-markdown';

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

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose" style={{
            fontSize: 'var(--text-lg)',
            lineHeight: '1.8',
            color: 'var(--color-text-secondary)',
            maxWidth: '100%'
        }}>
            <ReactMarkdown
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
                    pre: ({ children }) => (
                        <pre style={{
                            backgroundColor: 'var(--color-surface)',
                            padding: 'var(--space-4)',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'auto',
                            marginBottom: 'var(--space-6)'
                        }}>
                            {children}
                        </pre>
                    ),
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
