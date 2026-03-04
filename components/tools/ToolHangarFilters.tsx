'use client';

import React from 'react';
import Button from '@/components/ui/Button';

interface ToolHangarFiltersProps {
    query: string;
    // Props kept for API compatibility with page.tsx but unused in UI
    activeCategory?: string;
    activePricing?: string;
    categories?: string[];
    pricingTiers?: string[];
}

export default function ToolHangarFilters({
    query
}: ToolHangarFiltersProps) {
    return (
        <form className="flex justify-center" action="/tool-hangar" method="GET">
            {/* Redesigned Search Bar: Half-width, Centered, No Filters */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-2) var(--space-2) var(--space-6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 15px -1px rgba(0, 0, 0, 0.2) inset, 0 2px 4px 0 rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)',
                width: '100%',
                maxWidth: '600px' /* Centered half-width on desktop */
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    name="q"
                    defaultValue={query}
                    placeholder="Search tools, capabilities..."
                    style={{
                        flexGrow: 1,
                        border: 'none',
                        background: 'transparent',
                        padding: 'var(--space-3) var(--space-4)',
                        fontSize: 'var(--text-md)',
                        outline: 'none',
                        color: 'var(--color-text-primary)'
                    }}
                />
                <Button type="submit" variant="primary" style={{
                    borderRadius: 'var(--radius-full)',
                    padding: 'var(--space-2.5) var(--space-6)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-bold)',
                    background: 'var(--color-accent)',
                    border: 'none'
                }}>
                    Search
                </Button>
            </div>
        </form>
    );
}
