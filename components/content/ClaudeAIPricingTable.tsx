'use client';
import React from 'react';
import LLMPricingTable from './LLMPricingTable';

export default function ClaudeAIPricingTable() {
    return (
        <LLMPricingTable
            toolName="Claude"
            tiers={[
                {
                    plan: 'Free',
                    price: '$0',
                    features: [
                        'Claude Sonnet 4.6 access',
                        'Artifacts system',
                        'File upload and analysis',
                        'Basic Projects access',
                    ],
                    limits: 'Dynamic daily usage caps',
                },
                {
                    plan: 'Pro',
                    price: '$20/mo',
                    features: [
                        'Full Sonnet + Opus access',
                        'Projects with persistent context',
                        'Extended Thinking mode',
                        'Priority access',
                        '5x free tier usage',
                    ],
                    limits: '5x free tier usage limits',
                    highlight: true,
                },
                {
                    plan: 'Max 5x',
                    price: '$100/mo',
                    features: [
                        '5x Pro usage limits',
                        'Priority queue access',
                        'All Pro features included',
                    ],
                    limits: '5x Pro limits',
                },
                {
                    plan: 'Max 20x',
                    price: '$200/mo',
                    features: [
                        '20x Pro limits',
                        '1M token context (beta)',
                        'Claude Code priority',
                        'Max throughput',
                    ],
                    limits: '20x Pro limits',
                },
            ]}
            apiNote="Haiku 4.5: $0.80/M input | Sonnet 4.6: $3/M input | Opus 4.6: $15/M input. Verify at console.anthropic.com"
        />
    );
}
