"use client";

import React, { Component, ReactNode } from "react";

class GlobalErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Global Error Boundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20, textAlign: "center", background: "#111", color: "#fff", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2>Something went wrong</h2>
                    <p style={{ color: "red" }}>{this.state.error?.message}</p>
                    <button onClick={() => window.location.reload()} style={{ padding: "10px 20px", marginTop: 20, cursor: "pointer" }}>
                        Reload Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default GlobalErrorBoundary;
