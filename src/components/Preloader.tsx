"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
    const container = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Counter Animation
        const counterObj = { value: 0 };
        tl.to(counterObj, {
            value: 100,
            duration: 2.5,
            ease: "power2.inOut",
            onUpdate: () => {
                setCount(Math.floor(counterObj.value));
            }
        })
            .to(".loader-text", {
                opacity: 0,
                duration: 0.5,
                y: -50,
                stagger: 0.1
            })
            .to(container.current, {
                scaleY: 0,
                transformOrigin: "top",
                duration: 1,
                ease: "power4.inOut"
            }, "-=0.2");

    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="loader-text flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-neon-cyan animate-pulse" />
                <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase">System Booting</span>
            </div>

            <div ref={counterRef} className="loader-text text-9xl font-bold text-white font-mono tracking-tighter">
                {count}%
            </div>

            <div className="loader-text absolute bottom-10 left-10 text-xs text-zinc-500 font-mono">
                INITIALIZING CORE MODULES...
            </div>
        </div>
    );
}
