"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationDebugger() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log(`[NAV] Route changed to: ${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`);
    }, [pathname, searchParams]);

    useEffect(() => {
        // 1. Log all clicks on links
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target) {
                console.log(`[NAV] Clicked link: ${target.getAttribute('href')}`, target);
            }
        };

        // 2. Catch unhandled promise rejections (often ChunkLoadErrors)
        const handleRejection = (e: PromiseRejectionEvent) => {
            console.error("[NAV-ERROR] Unhandled Promise Rejection:", e.reason);
            if (e.reason?.name === 'ChunkLoadError' || e.reason?.message?.includes('Loading chunk')) {
                console.error("[NAV-CRITICAL] Chunk loading failed! This usually means a deployment mismatch or caching issue.");
            }
        };

        // 3. Catch global errors
        const handleError = (e: ErrorEvent) => {
            console.error("[NAV-ERROR] Global Error:", e.error);
        };

        window.addEventListener('click', handleClick, true); // Capture phase to see clicks even if they're stopped
        window.addEventListener('unhandledrejection', handleRejection);
        window.addEventListener('error', handleError);

        console.log("[NAV] Navigation Debugger Initialized");

        return () => {
            window.removeEventListener('click', handleClick, true);
            window.removeEventListener('unhandledrejection', handleRejection);
            window.removeEventListener('error', handleError);
        };
    }, []);

    return null;
}
