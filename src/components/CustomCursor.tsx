"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
    const cursor = useRef<HTMLDivElement>(null);
    const follower = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(cursor.current, "x", { duration: 0.1, ease: "power3" });
        const yTo = gsap.quickTo(cursor.current, "y", { duration: 0.1, ease: "power3" });

        // Follower trailing with lag
        const xToFollower = gsap.quickTo(follower.current, "x", { duration: 0.6, ease: "power3" });
        const yToFollower = gsap.quickTo(follower.current, "y", { duration: 0.6, ease: "power3" });

        window.addEventListener("mousemove", (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);
        });

        // Hover effects
        const handleMouseEnter = () => {
            gsap.to(cursor.current, { scale: 0, duration: 0.2 });
            gsap.to(follower.current, { scale: 3, opacity: 0.5, backgroundColor: "#00f3ff", mixBlendMode: "difference", duration: 0.2 });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor.current, { scale: 1, duration: 0.2 });
            gsap.to(follower.current, { scale: 1, opacity: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.2 });
        };

        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

    }, []);

    return (
        <>
            <div ref={cursor} className="fixed top-0 left-0 w-3 h-3 bg-neon-cyan rounded-full pointer-events-none z-[9999] opacity-0 md:opacity-100 -translate-x-1/2 -translate-y-1/2" />
            <div ref={follower} className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] opacity-0 md:opacity-100 -translate-x-1/2 -translate-y-1/2 transition-colors" />
        </>
    );
}
