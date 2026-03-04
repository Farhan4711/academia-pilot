'use client';
import React from 'react';
import LLMProsCons from './LLMProsCons';

export default function GeminiAIProsCons() {
    return (
        <LLMProsCons
            pros={[
                'Deepest Google Workspace integration available — entire Google data environment accessible (Gmail, Drive, Docs, Meet)',
                'Native video and audio understanding is a unique multimodal capability unmatched by other major LLMs',
                '2M token context window — the longest commercially available, ideal for massive document retrieval',
                'Google Search grounding provides the most accurate real-time factual anchoring of any major assistant',
                'Strong price-to-capability ratio on the Vertex AI API for developers',
                'NotebookLM integration for source-grounded Q&A prevents hallucinations on uploaded documents',
            ]}
            cons={[
                'Context quality degrades at extreme lengths — not equivalent to Claude\'s 200K for sustained deep reasoning',
                'Outside the Google ecosystem, integration value is significantly reduced — ecosystem-locked advantage',
                'Voice experience is less refined than ChatGPT\'s Advanced Voice Mode',
                'Google data privacy concerns for enterprise users outside Google\'s infrastructure',
                'Code generation is strong but Claude Code and Cursor are purpose-built and better for core developer workflows',
            ]}
        />
    );
}
