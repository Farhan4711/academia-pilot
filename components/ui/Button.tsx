'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'cta' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    target,
    rel,
    className = '',
    ...props
}: ButtonProps) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = size !== 'md' ? `btn-${size}` : '';
    const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    if (href) {
        // Check if it's an external link or anchor link
        const isExternal = href.startsWith('http') || href.startsWith('mailto:');
        const isAnchor = href.startsWith('#');

        if (isExternal) {
            return (
                <a
                    href={href}
                    className={combinedClass}
                    target={target || "_blank"}
                    rel={rel || "noopener noreferrer"}
                >
                    {children}
                </a>
            );
        }

        if (isAnchor) {
            return (
                <a href={href} className={combinedClass} target={target} rel={rel}>
                    {children}
                </a>
            );
        }

        // Internal link - use Next.js Link for client-side navigation
        return (
            <Link href={href} className={combinedClass} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClass} {...props}>
            {children}
        </button>
    );
}
