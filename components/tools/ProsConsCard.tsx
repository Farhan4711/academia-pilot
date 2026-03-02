import React from 'react';

interface ProsConsCardProps {
    pros: string[];
    cons: string[];
}

export default function ProsConsCard({ pros, cons }: ProsConsCardProps) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
        }}>
            {/* Pros Container */}
            <div style={{
                padding: 'var(--space-6)',
                backgroundColor: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: 'var(--radius-lg)'
            }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-bold)',
                    marginBottom: 'var(--space-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    color: 'var(--color-success)'
                }}>
                    <span style={{ fontSize: '1.2em' }}>👍</span> Pros
                </h3>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)'
                }}>
                    {pros.map((pro, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-2)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            <span style={{ color: 'var(--color-success)', marginTop: '2px' }}>✓</span>
                            <span>{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cons Container */}
            <div style={{
                padding: 'var(--space-6)',
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 'var(--radius-lg)'
            }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-bold)',
                    marginBottom: 'var(--space-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    color: '#ef4444' // red-500
                }}>
                    <span style={{ fontSize: '1.2em' }}>👎</span> Cons
                </h3>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)'
                }}>
                    {cons.map((con, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-2)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            <span style={{ color: '#ef4444', marginTop: '2px' }}>✗</span>
                            <span>{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
