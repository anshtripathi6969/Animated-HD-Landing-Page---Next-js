"use client";

import { useEffect, useRef } from "react";

export function SpotlightGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            container.style.setProperty("--x", `${clientX}px`);
            container.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                backgroundSize: "50px 50px",
                backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                maskImage: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 20%)",
                WebkitMaskImage: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 20%)",
            } as React.CSSProperties}
        />
    );
}
