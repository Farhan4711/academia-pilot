'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
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
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, var(--color-accent), var(--color-cta))',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'var(--font-black)',
                            fontSize: 'var(--text-xl)'
                        }}>
                            AP
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
                        <Link href="/news-radar" className="text-secondary hover:text-accent transition-fast">
                            News Radar
                        </Link>
                        <Link href="/antigravity-guide" className="text-secondary hover:text-accent transition-fast">
                            Antigravity Guide
                        </Link>
                        <Link href="/tool-hangar" className="text-secondary hover:text-accent transition-fast">
                            Tool Hangar
                        </Link>
                        <Link href="/prompt-vault" className="text-secondary hover:text-accent transition-fast">
                            Prompt Vault
                        </Link>
                        <Link href="/about" className="text-secondary hover:text-accent transition-fast">
                            About
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div style={{ position: 'relative' }}>
                        <button
                            className="md:hidden btn-secondary btn-sm"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-lg)',
                                        boxShadow: 'var(--shadow-xl)',
                                        zIndex: 'calc(var(--z-dropdown) + 1)',
                                        animation: 'slideDown 200ms ease-out',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: 'var(--space-2)'
                                    }}>
                                        <Link
                                            href="/news-radar"
                                            className="text-secondary hover:text-accent transition-fast"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'background-color var(--transition-fast)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            News Radar
                                        </Link>
                                        <Link
                                            href="/antigravity-guide"
                                            className="text-secondary hover:text-accent transition-fast"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'background-color var(--transition-fast)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            Antigravity Guide
                                        </Link>
                                        <Link
                                            href="/tool-hangar"
                                            className="text-secondary hover:text-accent transition-fast"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'background-color var(--transition-fast)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            Tool Hangar
                                        </Link>
                                        <Link
                                            href="/prompt-vault"
                                            className="text-secondary hover:text-accent transition-fast"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'background-color var(--transition-fast)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            Prompt Vault
                                        </Link>
                                        <Link
                                            href="/about"
                                            className="text-secondary hover:text-accent transition-fast"
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'background-color var(--transition-fast)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            About
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
