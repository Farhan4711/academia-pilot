import React from 'react';
import Badge from '@/components/ui/Badge';

interface ToolSnapshotProps {
    title: string;
    description: string;
    category?: string;
    publisher?: string;
    launchYear?: string;
    pricingTier?: string;
    apiAvailable?: boolean;
    openSource?: boolean;
    enterpriseReady?: boolean;
    localDeployment?: boolean;
}

export default function ToolSnapshot({
    title,
    description,
    category,
    publisher,
    launchYear,
    pricingTier,
    apiAvailable,
    openSource,
    enterpriseReady,
    localDeployment
}: ToolSnapshotProps) {
    return (
        <div style={{
            padding: 'var(--space-6)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-8)'
        }}>
            <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)' }}>
                        {title}
                    </h1>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                        {description}
                    </p>
                </div>

                <div className="flex flex-col gap-2" style={{ alignItems: 'flex-end' }}>
                    {category && <Badge variant="accent">{category.replace(/-/g, ' ')}</Badge>}
                    {pricingTier && <Badge variant="secondary">{pricingTier}</Badge>}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'var(--space-4)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'var(--space-4)'
            }}>
                {publisher && (
                    <div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Publisher</div>
                        <div style={{ fontWeight: 'var(--font-medium)' }}>{publisher}</div>
                    </div>
                )}
                {launchYear && (
                    <div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Launch Year</div>
                        <div style={{ fontWeight: 'var(--font-medium)' }}>{launchYear}</div>
                    </div>
                )}

                <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>API</div>
                    <div style={{ fontWeight: 'var(--font-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {apiAvailable ? <span style={{ color: 'var(--color-success)' }}>✓ Yes</span> : <span style={{ color: 'var(--color-text-secondary)' }}>✗ No</span>}
                    </div>
                </div>

                <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Open Source</div>
                    <div style={{ fontWeight: 'var(--font-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {openSource ? <span style={{ color: 'var(--color-success)' }}>✓ Yes</span> : <span style={{ color: 'var(--color-text-secondary)' }}>✗ No</span>}
                    </div>
                </div>

                <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Enterprise</div>
                    <div style={{ fontWeight: 'var(--font-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {enterpriseReady ? <span style={{ color: 'var(--color-success)' }}>✓ Yes</span> : <span style={{ color: 'var(--color-text-secondary)' }}>✗ No</span>}
                    </div>
                </div>

                <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Local Deployment</div>
                    <div style={{ fontWeight: 'var(--font-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {localDeployment ? <span style={{ color: 'var(--color-success)' }}>✓ Yes</span> : <span style={{ color: 'var(--color-text-secondary)' }}>✗ No</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
