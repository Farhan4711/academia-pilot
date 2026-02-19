'use client';
import React from 'react';

/**
 * MCP Multi-Server Orchestration Diagram
 * 
 * Visualizes a single MCP Client connected to 5 independent servers:
 * File System, CRM, Analytics, Code Execution, Web Search.
 * 
 * Styled with "Midnight Aviation" design system.
 */
const MCPOrchestrationDiagram = () => {
    const servers = [
        { name: "File System", icon: "📁", status: "active" },
        { name: "CRM Server", icon: "👥", status: "active" },
        { name: "Analytics", icon: "📊", status: "active" },
        { name: "Code Exec", icon: "💻", status: "active" },
        { name: "Web Search", icon: "🌐", status: "connecting" },
    ];

    return (
        <div className="w-full my-12 font-sans select-none">

            {/* Central Node: MCP Client */}
            <div className="flex justify-center mb-12 relative z-20">
                <div className="hud-border bg-surface px-8 py-4 rounded-xl shadow-glow text-center min-w-[200px]">
                    <div className="text-xs font-mono text-accent mb-1 uppercase tracking-wider">Orchestrator</div>
                    <h3 className="text-lg font-bold text-white">MCP Client</h3>
                    <p className="text-xs text-muted">Single Interface / Multi-Scope</p>
                </div>
            </div>

            {/* Connection Lines Container */}
            <div className="relative h-12 -mt-12 mb-4 overflow-hidden">
                {/* We use pseudo-elements or specific borders for connections in a simpler way below */}
            </div>

            {/* Servers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">

                {/* Horizontal Connector Line (Desktop) */}
                <div className="absolute -top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent hidden md:block"></div>

                {servers.map((server, index) => (
                    <div key={index} className="flex flex-col items-center group relative">

                        {/* Vertical Connector Line */}
                        <div className={`h-8 w-[2px] bg-border group-hover:bg-accent transition-colors mb-0 hidden md:block ${index === 2 ? 'h-12 -mt-4' : ''}`}></div>

                        {/* Server Node */}
                        <div className={`
              card w-full text-center p-4 transition-all duration-300 hover:-translate-y-1
              ${server.status === 'active' ? 'border-border hover:border-accent' : 'border-border/50 opacity-70 border-dashed'}
            `}>
                            <div className="text-2xl mb-2">{server.icon}</div>
                            <h4 className="font-bold text-sm text-primary whitespace-nowrap">{server.name}</h4>

                            {/* Status Dot */}
                            <div className="flex items-center justify-center gap-1 mt-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${server.status === 'active' ? 'bg-success shadow-[0_0_5px_rgba(72,187,120,0.5)]' : 'bg-warning animate-pulse'}`}></div>
                                <span className="text-[10px] text-muted capitalize">{server.status}</span>
                            </div>
                        </div>

                        {/* Mobile-only connector hint */}
                        <div className="md:hidden absolute -top-4 left-1/2 w-0.5 h-4 bg-border"></div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 text-sm text-muted max-w-2xl mx-auto italic">
                "A single AI session can orchestrate across multiple servers with independent permission scopes per server."
            </div>
        </div>
    );
};

export default MCPOrchestrationDiagram;
