'use client';
import React from 'react';

/**
 * MCP Security Boundary Diagram
 * 
 * Visualizes concentric security layers:
 * 1. Enterprise Network Perimeter (Outermost)
 * 2. AI Application Boundary (Host + Client)
 * 3. Tool Execution Sandbox (MCP Server)
 * 
 * Styled with "Midnight Aviation" design system.
 */
const MCPSecurityDiagram = () => {
    return (
        <div className="w-full my-12 font-sans select-none flex justify-center">

            {/* LAYER 1: Enterprise Network Perimeter */}
            <div className="w-full max-w-4xl border-2 border-dashed border-border/50 rounded-3xl p-8 relative bg-surface/10">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary px-3 text-xs font-mono text-muted uppercase tracking-widest border border-border rounded-full">
                    Layer 1: Enterprise Network Perimeter
                </div>

                {/* Controls Label */}
                <div className="absolute top-4 right-8 text-xs text-muted/70 flex gap-2">
                    <span className="bg-surface/50 px-2 py-0.5 rounded border border-border/30">Network Policies</span>
                    <span className="bg-surface/50 px-2 py-0.5 rounded border border-border/30">Firewalls</span>
                </div>

                {/* LAYER 2: AI Application Boundary */}
                <div className="hud-border bg-surface p-8 mt-6 rounded-2xl relative shadow-lg">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full shadow-glow">
                        Layer 2: AI Application Boundary
                    </div>

                    <div className="text-center mb-8 mt-2">
                        <h3 className="text-lg font-bold text-primary">MCP Host & Client</h3>
                        <p className="text-sm text-muted">Authentication & Capability Negotiation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

                        {/* LAYER 3A: Tool Sandbox 1 */}
                        <div className="card border-cta/50 bg-primary/30 relative overflow-hidden group hover:border-cta transition-colors">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <svg className="w-12 h-12 text-cta/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>
                            <div className="relative z-10">
                                <div className="text-xs font-mono text-cta mb-2 uppercase tracking-wide">Layer 3: Sandbox</div>
                                <h4 className="font-bold text-white mb-1">MCP Server (CRM)</h4>
                                <p className="text-xs text-muted mb-3">Scoped to Sales Rep</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] bg-cta/10 text-cta px-1.5 py-0.5 rounded border border-cta/20">Least Privilege</span>
                                    <span className="text-[10px] bg-cta/10 text-cta px-1.5 py-0.5 rounded border border-cta/20">Process Isolation</span>
                                </div>
                            </div>
                        </div>

                        {/* LAYER 3B: Tool Sandbox 2 */}
                        <div className="card border-cta/50 bg-primary/30 relative overflow-hidden group hover:border-cta transition-colors">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <svg className="w-12 h-12 text-cta/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>
                            <div className="relative z-10">
                                <div className="text-xs font-mono text-cta mb-2 uppercase tracking-wide">Layer 3: Sandbox</div>
                                <h4 className="font-bold text-white mb-1">MCP Server (DB)</h4>
                                <p className="text-xs text-muted mb-3">Read-Only Access</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] bg-cta/10 text-cta px-1.5 py-0.5 rounded border border-cta/20">Audit Logging</span>
                                    <span className="text-[10px] bg-cta/10 text-cta px-1.5 py-0.5 rounded border border-cta/20">No Credential Leak</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MCPSecurityDiagram;
