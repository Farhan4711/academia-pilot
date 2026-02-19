'use client';
import React from 'react';

/**
 * MCP vs OpenAI Function Calling Comparison Table
 * 
 * A responsive comparison table highlighting the differences between 
 * the Model Context Protocol (MCP) and OpenAI's proprietary Function Calling.
 * 
 * Styled with "Midnight Aviation" design system.
 */
const MCPVsOpenAI = () => {
    const data = [
        {
            dimension: "Architecture level",
            mcp: "Full protocol specification (discovery + execution + lifecycle)",
            openai: "Inference-time capability (schema + call generation)"
        },
        {
            dimension: "Tool discovery",
            mcp: "Dynamic — servers expose capabilities at runtime",
            openai: "Static — functions must be defined in each API request"
        },
        {
            dimension: "Vendor neutrality",
            mcp: "Open standard; works with any MCP-compatible model",
            openai: "OpenAI-specific format; requires translation for other models"
        },
        {
            dimension: "Security model",
            mcp: "Structured permission boundaries, server-level scoping",
            openai: "Application-level; no standardized permission primitive"
        },
        {
            dimension: "Transport layer",
            mcp: "Defined (stdio, HTTP/SSE)",
            openai: "Not specified; handled by application"
        },
        {
            dimension: "Server ecosystem",
            mcp: "Growing open ecosystem of pre-built MCP servers",
            openai: "No analogous server ecosystem"
        },
        {
            dimension: "Stateful sessions",
            mcp: "Supported — persistent connections with capability negotiation",
            openai: "Stateless — capabilities re-declared each request"
        },
        {
            dimension: "Observability",
            mcp: "Protocol-level audit trail",
            openai: "Application-dependent"
        },
        {
            dimension: "Enterprise readiness",
            mcp: "Designed for enterprise security and compliance",
            openai: "Requires significant custom infrastructure"
        },
        {
            dimension: "Multi-tool orchestration",
            mcp: "Native — multiple servers, independent scopes",
            openai: "Requires application-layer orchestration"
        },
        {
            dimension: "Error handling",
            mcp: "Standardized error response format",
            openai: "Model-dependent interpretation"
        },
        {
            dimension: "Scalability",
            mcp: "Horizontally scalable server architecture",
            openai: "Limited by request-level definition overhead"
        }
    ];

    return (
        <div className="w-full my-12 font-sans overflow-hidden">
            <div className="hud-border bg-surface/30 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-surface border-b border-accent/20">
                                <th className="p-4 text-sm font-bold text-primary uppercase tracking-wider w-1/4">
                                    Dimension
                                </th>
                                <th className="p-4 text-sm font-bold text-accent uppercase tracking-wider w-1/3 bg-accent/5">
                                    MCP (Model Context Protocol)
                                </th>
                                <th className="p-4 text-sm font-bold text-secondary uppercase tracking-wider w-1/3">
                                    OpenAI Function Calling
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`
                    transition-colors hover:bg-surface/50
                    ${index % 2 === 0 ? 'bg-transparent' : 'bg-surface/20'}
                  `}
                                >
                                    <td className="p-4 text-sm font-semibold text-primary/90 border-r border-border/50">
                                        {row.dimension}
                                    </td>
                                    <td className="p-4 text-sm text-accent/90 bg-accent/[0.02] border-r border-border/50 font-medium">
                                        {row.mcp}
                                    </td>
                                    <td className="p-4 text-sm text-secondary">
                                        {row.openai}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile hint */}
            <div className="md:hidden text-center text-xs text-muted mt-2 italic">
                Scroll horizontally to view full comparison
            </div>
        </div>
    );
};

export default MCPVsOpenAI;
