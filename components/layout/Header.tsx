'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsTicker from './NewsTicker';
import type { ContentItem } from '@/lib/content';

interface HeaderProps {
    newsItems?: ContentItem[];
}

export default function Header({ newsItems = [] }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b border-accent" style={{
            backgroundColor: 'var(--color-surface)',
            position: 'sticky',
            top: 0,
            zIndex: 'var(--z-sticky)'
        }}>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    zIndex: 'var(--z-tooltip)',
                    padding: 'var(--space-2) var(--space-4)',
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)'
                }}
                onFocus={(e) => {
                    e.currentTarget.style.left = 'var(--space-4)';
                    e.currentTarget.style.top = 'var(--space-4)';
                }}
                onBlur={(e) => {
                    e.currentTarget.style.left = '-9999px';
                }}
            >
                Skip to main content
            </a>
            <nav className="container" aria-label="Main navigation">
                <div className="flex items-center justify-between py-4">
                    {/* Left Side: Logo + Nav */}
                    <div className="flex items-center" style={{ gap: 'var(--space-8)' }}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                border: '1px solid var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src="/logo.png"
                                    alt="Academia Pilot Logo"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <span style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 'var(--font-bold)',
                                background: 'linear-gradient(135deg, var(--color-text-primary), var(--color-accent))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Academia Pilot
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center" style={{ gap: 'var(--space-6)' }}>
                            {['News Radar', 'Prompt Vault', 'Tool Hangar', 'AI Mastery Hub', 'About'].map((item) => {
                                const href = item === 'About' ? '/about/' : `/${item.toLowerCase().replace(/ /g, '-')}/`;
                                return (
                                    <Link key={item} href={href} className="nav-link">
                                        {item}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side: Search + Mobile Menu Button */}
                    <div className="flex items-center" style={{ gap: 'var(--space-4)' }}>
                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex items-center search-container group" style={{
                            position: 'relative',
                            width: '200px',
                            transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{
                                    width: '100%',
                                    padding: 'var(--space-2) var(--space-4)',
                                    paddingLeft: 'var(--space-10)', // Space for search icon on the left
                                    paddingRight: 'var(--space-12)', // Space for CMD+K badge on right
                                    borderRadius: 'var(--radius-md)', // More modern than rounded-full
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    color: 'var(--color-text-primary)',
                                    fontSize: 'var(--text-sm)',
                                    backdropFilter: 'blur(10px)',
                                    outline: 'none',
                                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(var(--color-accent-rgb), 0.15), 0 4px 12px rgba(0,0,0,0.5)';
                                    e.currentTarget.parentElement!.style.width = '300px';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.parentElement!.style.width = '200px';
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        const query = e.currentTarget.value.trim();
                                        if (query) {
                                            window.location.href = `/search?q=${encodeURIComponent(query)}`;
                                        }
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    if (document.activeElement !== e.currentTarget) {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (document.activeElement !== e.currentTarget) {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }
                                }}
                            />
                            {/* Left Search Icon */}
                            <svg
                                style={{
                                    position: 'absolute',
                                    left: 'var(--space-3)',
                                    color: 'var(--color-text-muted)',
                                    pointerEvents: 'none',
                                    transition: 'color 300ms ease'
                                }}
                                className="search-icon"
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>

                            {/* Right CMD+K Badge */}
                            <div style={{
                                position: 'absolute',
                                right: 'var(--space-2)',
                                pointerEvents: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2px'
                            }}>
                                <kbd style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'var(--color-text-muted)',
                                    padding: '2px 4px',
                                    borderRadius: '4px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>⌘</kbd>
                                <kbd style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'var(--color-text-muted)',
                                    padding: '2px 4px',
                                    borderRadius: '4px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>K</kbd>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div style={{ position: 'relative' }}>
                            <button
                                className="md:hidden btn-secondary btn-sm"
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                {mobileMenuOpen ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                )}
                            </button>

                            {/* Mobile Dropdown Menu */}
                            {mobileMenuOpen && (
                                <>
                                    {/* Backdrop overlay */}
                                    <div
                                        style={{
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            zIndex: 'var(--z-dropdown)',
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    />

                                    {/* Dropdown Card */}
                                    <div
                                        className="md:hidden"
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            right: 0,
                                            width: '250px',
                                            backgroundColor: 'var(--color-surface)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 'var(--radius-lg)',
                                            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                            zIndex: 'calc(var(--z-dropdown) + 1)',
                                            animation: 'slideDown 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 'var(--space-2)'
                                        }}>
                                            {['News', 'Prompt Vault', 'Tool Hangar', 'AI Mastery Hub', 'About'].map((item) => {
                                                const href = item === 'About' ? '/about/' : `/${item.toLowerCase().replace(/ /g, '-')}/`;
                                                return (
                                                    <Link
                                                        key={item}
                                                        href={href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        style={{
                                                            padding: 'var(--space-3) var(--space-4)',
                                                            borderRadius: 'var(--radius-md)',
                                                            color: 'var(--color-text-secondary)',
                                                            fontWeight: '500',
                                                            transition: 'all var(--transition-fast)'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                                            e.currentTarget.style.color = 'var(--color-text-primary)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                        }}
                                                    >
                                                        {item}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <NewsTicker items={newsItems} />
            <style jsx>{`
                .nav-link {
                    position: relative;
                    color: var(--color-text-secondary);
                    font-size: 0.95rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    padding: var(--space-1) 0;
                }
                .nav-link:hover {
                    color: var(--color-text-primary);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--color-accent);
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }
                .nav-link:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }

                .search-container:focus-within .search-icon {
                    color: var(--color-accent) !important;
                }
            `}</style>
        </header>
    );
}
