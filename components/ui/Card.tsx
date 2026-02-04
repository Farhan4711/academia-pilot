'use client';

import { ReactNode, CSSProperties } from 'react';
import Link from 'next/link';

interface CardProps {
    children: ReactNode;
    href?: string;
    className?: string;
    variant?: 'default' | 'highlight';
}

export default function Card({ children, href, className = '', variant = 'default' }: CardProps) {
    const cardClass = `card ${className}`;

    const style = variant === 'highlight' ? {
        borderColor: 'var(--color-accent)',
        background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(0, 112, 243, 0.05) 100%)'
    } : {};

    if (href) {
        // Check if it's an external link
        const isExternal = href.startsWith('http') || href.startsWith('mailto:');

        if (isExternal) {
            return (
                <a href={href} className={cardClass} style={style} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }

        // Internal link - use Next.js Link for client-side navigation
        return (
            <Link href={href} className={cardClass} style={style}>
                {children}
            </Link>
        );
    }

    return (
        <div className={cardClass} style={style}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
    return <h3 className={`card-title ${className}`}>{children}</h3>;
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export function CardDescription({ children, className = '', style }: CardDescriptionProps) {
    return <p className={`card-description ${className}`} style={style}>{children}</p>;
}
