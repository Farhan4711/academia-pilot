import { ReactNode, CSSProperties } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'accent' | 'cta' | 'success' | 'secondary';
    className?: string;
    style?: CSSProperties;
}

export default function Badge({ children, variant = 'accent', className = '', style }: BadgeProps) {
    const badgeClass = `badge badge-${variant} ${className}`.trim();

    return (
        <span className={badgeClass} style={style}>
            {children}
        </span>
    );
}
