'use client';
import React from 'react';
import LLMProsCons from './LLMProsCons';

export default function ChatGPTProsCons() {
    return (
        <LLMProsCons
            pros={[
                'Largest model ecosystem with the broadest capability range — text, image, voice, code, data analysis in one platform',
                'Deep Research produces the most comprehensive AI-generated research reports currently available (30+ min synthesis)',
                'Custom GPTs provide powerful no-code specialization — 3M+ available in the GPT Store',
                'Advanced Voice Mode is the best conversational AI voice experience currently available',
                'Operator enables real autonomous browser task execution (forms, bookings, web tasks)',
                'Code Interpreter executes Python in a sandboxed environment — no setup required',
            ]}
            cons={[
                'Free tier limits are meaningful — heavy professional use requires Plus ($20/mo) at minimum',
                'Data analysis is sandboxed and not suitable for sensitive data without Enterprise',
                'Context window (128K) is smaller than Claude\'s 200K for very long document work',
                'Pro tier at $200/month is expensive for users who primarily need base model access',
                'No local deployment option — all data processed through OpenAI\'s cloud infrastructure',
            ]}
        />
    );
}
