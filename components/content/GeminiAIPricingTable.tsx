'use client';
import React from 'react';
import LLMPricingTable from './LLMPricingTable';

export default function GeminiAIPricingTable() {
    return (
        <LLMPricingTable
            toolName="Gemini"
            tiers={[
                {
                    plan: 'Free',
                    price: '$0',
                    features: [
                        'Gemini 2.0 Flash',
                        'Basic image generation',
                        'Web search grounding',
                        'Google app integration',
                    ],
                    limits: 'Usage limits on Pro features',
                },
                {
                    plan: 'Advanced',
                    price: '$20/mo',
                    features: [
                        'Gemini 2.5 Pro + 2M context',
                        'Deep Research mode',
                        'Veo 3 video generation',
                        'Imagen 3 image generation',
                        'Priority performance',
                    ],
                    limits: 'Higher daily usage limits',
                    highlight: true,
                },
                {
                    plan: 'Workspace + Gemini',
                    price: 'From $20/user/mo',
                    features: [
                        'Gemini in Gmail, Docs,   Sheets',
                        'Google Meet AI summaries',
                        'Drive document synthesis',
                        'Full Workspace AI layer',
                    ],
                    limits: 'Included with Workspace plan',
                },
            ]}
            apiNote="Gemini 2.5 Pro: ~$1.25/M input tokens under 200K, $2.50/M above. Verify at ai.google.dev"
        />
    );
}
