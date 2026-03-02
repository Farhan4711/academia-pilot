'use client';
import React from 'react';

const behaviors = [
    // Directing
    { id: 1, dim: 'Directing', name: 'Define goal in terms of use', purpose: 'Output serves actual downstream purpose', risk: 'Correct answer to the wrong question' },
    { id: 2, dim: 'Directing', name: 'Establish professional persona', purpose: 'Contextually appropriate perspective', risk: 'Generic, undifferentiated output' },
    { id: 3, dim: 'Directing', name: 'Provide few-shot examples', purpose: 'Reduces interpretive variance', risk: 'High format and approach variance' },
    { id: 4, dim: 'Directing', name: 'Set explicit constraints', purpose: 'Immediately usable output', risk: 'Post-generation editing overhead' },
    { id: 5, dim: 'Directing', name: 'Scope professional context', purpose: 'Response calibrated to real situation', risk: 'Generic response to a specific problem' },
    { id: 6, dim: 'Directing', name: 'Specify output format', purpose: 'Eliminates reformatting step', risk: 'Structural mismatch with intended use' },
    // Discerning
    { id: 7, dim: 'Discerning', name: 'Fact-check with triage discipline', purpose: 'Prevents material errors in final work', risk: 'Inaccuracies enter professional output' },
    { id: 8, dim: 'Discerning', name: 'Detect hallucinations by domain', purpose: 'Catches plausible invented details', risk: 'Invented citations, misattributed data' },
    { id: 9, dim: 'Discerning', name: 'Identify reasoning flaws', purpose: 'Catches invalid logical structure', risk: 'Flawed conclusions in analytical prose' },
    { id: 10, dim: 'Discerning', name: 'Detect perspective bias', purpose: 'Identifies skewed analytical framing', risk: 'Training consensus mistaken for analysis' },
    { id: 11, dim: 'Discerning', name: 'Evaluate tone and confidence level', purpose: 'Calibrates persuasive register', risk: 'Over- or under-stated certainty' },
    { id: 12, dim: 'Discerning', name: 'Conduct gap analysis', purpose: 'Reveals what was structurally omitted', risk: 'Incomplete analysis treated as complete' },
    // Developing
    { id: 13, dim: 'Developing', name: 'Request chain-of-thought reasoning', purpose: 'Makes logic visible and evaluable', risk: 'Hidden reasoning errors' },
    { id: 14, dim: 'Developing', name: 'Apply modular prompting', purpose: 'Depth across complex deliverables', risk: 'Shallow output across all components' },
    { id: 15, dim: 'Developing', name: 'Apply recursive feedback', purpose: 'Precision improvement over iterations', risk: 'Vague drift without diagnostic correction' },
    { id: 16, dim: 'Developing', name: 'Investigate failures interactively', purpose: 'Efficient, targeted correction', risk: 'Repeated restarts without learning' },
    { id: 17, dim: 'Developing', name: 'Cross-reference multiple outputs', purpose: 'Confidence calibration for high-stakes work', risk: 'False certainty from single output' },
    { id: 18, dim: 'Developing', name: 'Manage session context actively', purpose: 'Consistency across extended projects', risk: 'Context drift; contradictory outputs' },
    // Delegating
    { id: 19, dim: 'Delegating', name: 'Classify tasks: AI-ready vs human-only', purpose: 'Appropriate allocation of effort', risk: 'Over- or under-delegation' },
    { id: 20, dim: 'Delegating', name: 'Design process automation', purpose: 'Compounding efficiency gains', risk: 'Ad hoc usage; missed systematic leverage' },
    { id: 21, dim: 'Delegating', name: 'Utilize platform-level capabilities', purpose: 'Persistent context and workflow depth', risk: 'Rebuilding context repeatedly' },
    { id: 22, dim: 'Delegating', name: 'Synthesize knowledge at scale', purpose: 'First-pass analysis of large document sets', risk: 'Manual aggregation displacing analytical work' },
    { id: 23, dim: 'Delegating', name: 'Architect collaborative brainstorming', purpose: 'Structured divergent generation', risk: 'Generic options without design' },
    { id: 24, dim: 'Delegating', name: 'Anchor human accountability', purpose: 'Non-delegable professional responsibility', risk: 'Accountability diffusion in AI-assisted work' },
];

const getDimColor = (dim: string) => {
    switch (dim) {
        case 'Directing': return 'var(--color-accent)';
        case 'Discerning': return '#ef4444'; // Red
        case 'Developing': return '#10b981'; // Green
        case 'Delegating': return '#8b5cf6'; // Purple
        default: return 'var(--color-primary)';
    }
};

const FluencyBehaviorsMatrix: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-8) 0' }}>
            <div style={{
                overflowX: 'auto',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                background: 'var(--color-surface)'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
                    <thead>
                        <tr style={{ background: 'var(--color-surface-hover)' }}>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>#</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Dimension</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Behavior</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)' }}>Primary Purpose</th>
                            <th style={{ padding: 'var(--space-4)', borderBottom: '2px solid var(--color-border)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-secondary)' }}>Risk If Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {behaviors.map((b) => (
                            <tr key={b.id} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s ease' }} className="hover:bg-opacity-5 hover:bg-white">
                                <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-secondary)' }}>{b.id}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        fontSize: '11px',
                                        fontWeight: 'var(--font-bold)',
                                        color: getDimColor(b.dim),
                                        backgroundColor: `${getDimColor(b.dim)}15`,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {b.dim}
                                    </span>
                                </td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>{b.name}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-secondary)' }}>{b.purpose}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '2px 6px',
                                        borderRadius: '4px',
                                        fontSize: '11px',
                                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                        color: '#ef4444',
                                        border: '1px solid rgba(239, 68, 68, 0.2)'
                                    }}>
                                        {b.risk}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FluencyBehaviorsMatrix;
