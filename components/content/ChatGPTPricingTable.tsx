'use client';
import React from 'react';
import LLMPricingTable from './LLMPricingTable';

export default function ChatGPTPricingTable() {
    return (
        <LLMPricingTable
            toolName="ChatGPT"
            tiers={[
                {
                    plan: 'Free',
                    price: '$0',
                    features: [
                        'Limited GPT-5 access',
                        'DALL-E image generation',
                        'Web search included',
                        'Basic voice mode',
                    ],
                    limits: 'Dynamic daily caps on GPT-5',
                },
                {
                    plan: 'Plus',
                    price: '$20/mo',
                    features: [
                        'Full GPT-5 access',
                        'Deep Research (10/mo)',
                        'Image generation',
                        'Memory across sessions',
                        'Advanced Voice Mode',
                    ],
                    limits: '80 messages / 3 hrs on GPT-5',
                    highlight: true,
                },
                {
                    plan: 'Pro',
                    price: '$200/mo',
                    features: [
                        'Unlimited GPT-5 + o3 Pro',
                        'Operator browser agent',
                        'Codex autonomous coding',
                        'Deep Research (120/mo)',
                    ],
                    limits: 'Near-unlimited usage',
                },
                {
                    plan: 'Team',
                    price: '$30/user/mo',
                    features: [
                        'Plus features',
                        'Shared workspace',
                        'Admin console',
                        'No training on your data',
                    ],
                    limits: 'Shared team limits',
                },
            ]}
            apiNote="GPT-5: ~$2.50/M input tokens, ~$10/M output tokens. Verify at platform.openai.com"
        />
    );
}
