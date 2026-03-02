'use client';

import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface CustomSelectProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string, label: string }[];
    placeholder: string;
    label: string;
}

function CustomSelect({ name, value, onChange, options, placeholder, label }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div ref={dropdownRef} className="relative min-w-[240px]">
            {/* Hidden Input for Form Submission */}
            <input type="hidden" name={name} value={value} />

            {/* Custom Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 border rounded-full ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                style={{
                    color: 'var(--color-text-primary)',
                    boxShadow: isOpen ? '0 0 0 2px rgba(255, 255, 255, 0.05)' : 'none',
                    backdropFilter: 'blur(8px)'
                }}
            >
                <div className="flex flex-col gap-[2px]">
                    <span style={{ fontSize: '10px', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)' }}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)', color: 'var(--color-text-secondary)' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            {/* Custom Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-0 w-full mt-2 overflow-y-auto transform origin-top transition-all duration-200"
                    style={{
                        top: '100%',
                        backgroundColor: 'rgba(15, 20, 30, 0.95)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8)',
                        zIndex: 100,
                        maxHeight: '340px',
                        padding: 'var(--space-2)'
                    }}
                >
                    <div
                        onClick={() => { onChange(''); setIsOpen(false); }}
                        className={`px-4 py-3 rounded-md cursor-pointer text-sm transition-all duration-150 ${value === '' ? 'bg-white/10 text-white font-bold' : 'text-gray-400 font-medium hover:bg-white/10 hover:text-white'}`}
                    >
                        {placeholder}
                    </div>
                    {options.map(opt => (
                        <div
                            key={opt.value}
                            onClick={() => { onChange(opt.value); setIsOpen(false); }}
                            className={`px-4 py-3 mt-1 rounded-md cursor-pointer text-sm transition-all duration-150 ${value === opt.value ? 'bg-white/10 text-white font-bold' : 'text-gray-400 font-medium hover:bg-white/10 hover:text-white'}`}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const CATEGORY_OPTIONS = [
    { value: 'ai-chatbots-llms', label: 'AI Chatbots & LLMs' },
    { value: 'ai-coding-dev-tools', label: 'AI Coding & Dev Tools' },
    { value: 'ai-image-generation', label: 'AI Image Generation' },
    { value: 'ai-video', label: 'AI Video' },
    { value: 'ai-audio-music', label: 'AI Audio & Music' },
    { value: 'ai-writing-content', label: 'AI Writing & Content' },
    { value: 'ai-search-research', label: 'AI Search & Research' },
    { value: 'ai-productivity-automation', label: 'AI Productivity & Automation' },
    { value: 'ai-design-presentations', label: 'AI Design & Presentations' },
    { value: 'local-open-source', label: 'Local & Open Source' },
];

interface ToolHangarFiltersProps {
    query: string;
    activeCategory: string;
    activePricing: string;
    categories: string[];
    pricingTiers: string[];
}

export default function ToolHangarFilters({
    query,
    activeCategory,
    activePricing,
    pricingTiers
}: ToolHangarFiltersProps) {
    const [cat, setCat] = useState(activeCategory);
    const [price, setPrice] = useState(activePricing);

    const pricingOptions = pricingTiers.map(tier => ({ value: tier, label: tier }));
    if (!pricingOptions.find(o => o.value === 'freemium')) {
        pricingOptions.push({ value: 'freemium', label: 'Freemium' });
    }

    return (
        <form className="flex flex-col gap-6" action="/tool-hangar" method="GET">
            {/* Massive Premium Search Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-2) var(--space-2) var(--space-6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 15px -1px rgba(0, 0, 0, 0.2) inset, 0 2px 4px 0 rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
            }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    name="q"
                    defaultValue={query}
                    placeholder="Search by tool name, capability, or use case..."
                    style={{
                        flexGrow: 1,
                        border: 'none',
                        background: 'transparent',
                        padding: 'var(--space-3) var(--space-4)',
                        fontSize: 'var(--text-lg)',
                        outline: 'none',
                        color: 'var(--color-text-primary)'
                    }}
                />
                <Button type="submit" variant="primary" style={{ borderRadius: 'var(--radius-full)', padding: 'var(--space-3) var(--space-8)', fontSize: 'var(--text-md)', fontWeight: 'var(--font-bold)', boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)' }}>
                    Search
                </Button>
            </div>

            {/* Sleek Custom Filters Row */}
            <div className="flex flex-wrap items-center justify-center gap-5" style={{ padding: '0 var(--space-4)' }}>
                <CustomSelect
                    name="category"
                    value={cat}
                    onChange={setCat}
                    options={CATEGORY_OPTIONS}
                    label="Category"
                    placeholder="Select..."
                />

                <CustomSelect
                    name="pricing"
                    value={price}
                    onChange={setPrice}
                    options={pricingOptions}
                    label="Pricing"
                    placeholder="Select..."
                />

                {(query || activeCategory || activePricing) && (
                    <Link href="/tool-hangar" className="flex items-center gap-[6px] text-sm text-gray-400 hover:text-white transition-colors duration-200" style={{
                        textDecoration: 'none',
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        Clear Filters
                    </Link>
                )}
            </div>
        </form>
    );
}
