import React from 'react';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getRelatedContent } from '@/lib/content';

interface ToolAlternativesProps {
    currentSlug: string;
    category: string;
    tags?: string[];
    limit?: number;
}

export default function ToolAlternatives({ currentSlug, category, tags = [], limit = 3 }: ToolAlternativesProps) {
    // Use getRelatedContent from lib/content
    // Note: we might need to pass the type 'tools' if we decouple this from the Server Component directly,
    // but since lib/content reads from FS, this Component must be imported in a Server Component context.
    const relatedTools = getRelatedContent('tools', currentSlug, tags, limit);

    // If no related tools by tag, fallback to category
    let alternativesToDisplay = relatedTools;
    if (alternativesToDisplay.length === 0) {
        // If we need to fallback, we'd need another call or custom logic, 
        // but let's assume getRelatedContent does its job well enough.
    }

    if (!alternativesToDisplay || alternativesToDisplay.length === 0) return null;

    return (
        <div style={{ marginBottom: 'var(--space-8)' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-4)' }}>
                Top Alternatives
            </h3>
            <div className="grid grid-3">
                {alternativesToDisplay.map((tool) => (
                    <Card key={tool.slug} href={`/tool-hangar/${tool.category || 'uncategorized'}/${tool.slug.split('/').pop()}/`}>
                        <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-3)' }}>
                            {tool.pricingTier && <Badge variant="accent">{tool.pricingTier}</Badge>}
                            <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>
                                {(tool.category || category).replace(/-/g, ' ')}
                            </Badge>
                        </div>
                        <CardTitle>{tool.title}</CardTitle>
                        <CardDescription>{tool.excerpt}</CardDescription>
                    </Card>
                ))}
            </div>
        </div>
    );
}
