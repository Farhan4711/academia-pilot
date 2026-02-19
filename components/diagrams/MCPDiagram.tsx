'use client';
import React from 'react';

/**
 * MCP Architecture Diagram Component
 * 
 * Visualizes the Model Context Protocol architecture:
 * - Host Application (Claude Desktop, IDEs, etc)
 * - MCP Client (Protocol Handler)
 * - MCP Servers (Files, DB, REST)
 * - Data Sources (File System, Database, External APIs)
 * 
 * Uses "Midnight Aviation" design system classes.
 */
const MCPDiagram = () => {
    return (
        <div className="w-full my-12 font-sans select-none">

            {/* --- LEVEL 1: MCP HOST --- */}
            <div className="hud-border bg-surface/50 p-6 rounded-xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 text-xs font-mono text-accent uppercase tracking-widest border border-accent/30 rounded-full">
                    MCP HOST
                </div>
                <div className="text-center text-secondary text-sm mb-6 mt-2">
                    (Claude Desktop / Custom Application / Agent Runtime)
                </div>

                {/* --- LEVEL 2: MCP CLIENT --- */}
                <div className="card border-accent shadow-glow relative max-w-2xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-primary mb-1">MCP CLIENT</h3>
                        <p className="text-sm text-muted">(Protocol handler embedded in host app)</p>
                    </div>

                    {/* Connection Point: Bottom */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-surface border border-accent rounded-full flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* --- CONNECTOR: JSON-RPC PROTOCOL --- */}
            <div className="relative h-24 flex items-center justify-center">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-accent to-cta opacity-50"></div>

                {/* Protocol Label */}
                <div className="relative z-10 bg-primary px-4 py-1 border border-border rounded-full text-xs font-mono text-muted shadow-sm">
                    MCP Protocol (JSON-RPC 2.0)
                </div>

                {/* Horizontal Branching Line */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-border rounded-full hidden md:block max-w-4xl mx-auto"></div>
                {/* Mobile Vertical Extenders hidden on desktop */}
            </div>

            {/* --- LEVEL 3: MCP SERVERS (GRID) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">

                {/* Server Column 1: Files */}
                <div className="flex flex-col items-center">
                    {/* Desktop vertical connector from branch */}
                    <div className="h-8 w-0.5 bg-border mb-0 hidden md:block"></div>

                    <div className="card w-full text-center hover-glow bg-surface hover:-translate-y-1 transition-all duration-300">
                        <div className="mb-2 text-accent">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-primary">MCP Server</h4>
                        <p className="text-xs text-muted mb-4">(Files)</p>

                        {/* Connection to System */}
                        <div className="h-6 w-0.5 bg-border mx-auto"></div>

                        <div className="border border-border rounded p-2 bg-primary/50 text-sm text-secondary mt-2">
                            File System
                        </div>
                    </div>
                </div>

                {/* Server Column 2: Database */}
                <div className="flex flex-col items-center">
                    {/* Desktop vertical connector from branch */}
                    <div className="h-8 w-0.5 bg-border mb-0 hidden md:block"></div>

                    <div className="card w-full text-center hover-glow bg-surface hover:-translate-y-1 transition-all duration-300 border-accent/30">
                        <div className="mb-2 text-cta">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-primary">MCP Server</h4>
                        <p className="text-xs text-muted mb-4">(PostgreSQL / SQLite)</p>

                        {/* Connection to System */}
                        <div className="h-6 w-0.5 bg-border mx-auto"></div>

                        <div className="border border-border rounded p-2 bg-primary/50 text-sm text-secondary mt-2">
                            Database
                        </div>
                    </div>
                </div>

                {/* Server Column 3: REST API */}
                <div className="flex flex-col items-center">
                    {/* Desktop vertical connector from branch */}
                    <div className="h-8 w-0.5 bg-border mb-0 hidden md:block"></div>

                    <div className="card w-full text-center hover-glow bg-surface hover:-translate-y-1 transition-all duration-300">
                        <div className="mb-2 text-accent">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-primary">MCP Server</h4>
                        <p className="text-xs text-muted mb-4">(REST API)</p>

                        {/* Connection to System */}
                        <div className="h-6 w-0.5 bg-border mx-auto"></div>

                        <div className="border border-border rounded p-2 bg-primary/50 text-sm text-secondary mt-2">
                            External API / SaaS
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MCPDiagram;
