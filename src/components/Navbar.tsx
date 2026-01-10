"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlitchText } from "@/components/GlitchText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;

        // 1. Initial State: Hidden above view
        gsap.set(nav, { yPercent: -100, opacity: 0 });

        // 2. Entrance Animation
        gsap.to(nav, {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.5
        });

        // 3. Scroll Trigger for Hide/Show
        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                const scrolled = self.scroll() > 50;
                if (scrolled !== isScrolled) setIsScrolled(scrolled);

                // Hide on scroll down, show on scroll up
                // Only animate if we are past the initial entrance delay or simple check
                if (self.direction === -1) {
                    // Scrolling UP -> Show
                    gsap.to(nav, { yPercent: 0, opacity: 1, duration: 0.3, ease: "power2.out", overwrite: true });
                } else if (self.direction === 1 && self.scroll() > 100) {
                    // Scrolling DOWN and past top -> Hide
                    gsap.to(nav, { yPercent: -100, opacity: 0, duration: 0.3, ease: "power2.out", overwrite: true });
                }
            }
        });
    }, { scope: navRef });

    return (
        <nav
            ref={navRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div
                ref={containerRef}
                className={cn(
                    "container mx-auto transition-all duration-500 ease-out",
                    isScrolled ? "max-w-4xl px-2" : "max-w-7xl px-6"
                )}
            >
                <div className={cn(
                    "relative flex items-center justify-between px-6 transition-all duration-500",
                    isScrolled
                        ? "py-3 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[0_0_20px_-10px_rgba(0,243,255,0.15)] rounded-full"
                        : "py-2 bg-transparent border-transparent"
                )}>
                    {/* Glass Shine Effect for Scrolled State */}
                    {isScrolled && (
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                    )}

                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
                            <GlitchText text="NEONSAAS" />
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse group-hover:scale-150 transition-transform" />
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {["Features", "Product", "Pricing"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group overflow-hidden rounded-full hover:bg-white/5"
                            >
                                <span className="relative z-10">{item}</span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Login
                        </Link>
                        <button className="group relative px-5 py-2 rounded-full bg-white text-black text-sm font-bold tracking-tight transition-all hover:scale-105 active:scale-95 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-1">
                                Get Started <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
