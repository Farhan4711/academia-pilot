'use client';
import React from 'react';
import LLMProsCons from './LLMProsCons';

export default function ClaudeAIProsCons() {
    return (
        <LLMProsCons
            pros={[
                'Largest context window among major consumer LLMs (200K+) — handles full codebases and lengthy documents without degradation',
                'Artifacts system creates a live, interactive workbench within the chat interface (code, React, SVG, diagrams)',
                'Superior instruction-following on complex, multi-constraint tasks — Claude follows nuanced instructions more reliably',
                'Claude Code is the most capable terminal-native agentic coding agent available (CLI, full codebase access)',
                'Extended Thinking produces visible, auditable reasoning chains for complex problem solving',
                'Projects enable persistent multi-session context without re-uploading — workflow continuity built in',
            ]}
            cons={[
                'No native image generation — requires third-party tools for visual content creation',
                'No native web search without explicit tool-use integration via the API',
                'No voice conversation mode — audio interaction not supported',
                'Claude Code requires a separate CLI setup — not GUI-native out of the box',
                'Max tier pricing ($200/month) required for 1M token context access (standard is 200K)',
                'No local deployment option — all processing goes through Anthropic\'s cloud infrastructure',
            ]}
        />
    );
}
