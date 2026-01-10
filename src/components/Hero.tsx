"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [scrambleText, setScrambleText] = useState("Build the Future");

    // Hacker Scramble Effect
    useGSAP(() => {
        const targetText = "Build the Future";

        const scramble = () => {
            let iterations = 0;
            const interval = setInterval(() => {
                setScrambleText(targetText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return targetText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join(""));

                if (iterations >= targetText.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3; // Speed
            }, 30);
        };

        // Initial delay to wait for Preloader (4s)
        const startTimeout = setTimeout(() => {
            scramble(); // First run

            // Start the 10s loop
            const loopInterval = setInterval(scramble, 10000);

            // Cleanup function for the interval
            return () => clearInterval(loopInterval);
        }, 3500); // 3.5s to sync perfectly with 3.8s boot

        // Cleanup function for the timeout
        return () => clearTimeout(startTimeout);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial Entrance
        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2
        })
            .from(".hero-sub", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8")
            .from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.6");

        // Scroll Parallax Effect
        gsap.to(".hero-bg-glow", {
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
            y: 400,
            opacity: 0.2,
        });

        gsap.to(".hero-content", {
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom 40%",
                scrub: 1,
            },
            y: 200,
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />
            <div className="hero-bg-glow absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-violet/20 blur-[120px] rounded-full mix-blend-screen opacity-50 z-0 pointer-events-none" />
            <div className="hero-bg-glow absolute bottom-0 right-0 w-[800px] h-[600px] bg-neon-cyan/10 blur-[100px] rounded-full mix-blend-screen opacity-30 z-0 pointer-events-none" />

            <div className="hero-content container mx-auto relative z-10 px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                    <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">v2.0 is now live</span>
                </div>

                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
                    <span className="font-mono">{scrambleText}</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">of Software.</span>
                </h1>

                <p className="hero-sub max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                    The next generation platform for building high-performance web applications.
                    Experience speed, scale, and security like never before.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton>
                        <button className="hero-btn px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors">
                            Start Building
                        </button>
                    </MagneticButton>
                    <MagneticButton>
                        <button className="hero-btn px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                            View Demo
                        </button>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
