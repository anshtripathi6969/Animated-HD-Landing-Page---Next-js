"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, BarChart3, Globe, Shield, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ProductDemo() {
    const container = useRef<HTMLDivElement>(null);
    const dashboardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        // Initial reveal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
            }
        });

        tl.fromTo(dashboardRef.current,
            {
                rotateX: 40,
                y: 200,
                opacity: 0,
                scale: 0.8,
            },
            {
                rotateX: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                ease: "power2.out"
            }
        );

        // Inner Elements Scrub
        const charts = gsap.utils.toArray(".demo-chart-bar");
        gsap.from(charts, {
            scrollTrigger: {
                trigger: dashboardRef.current,
                start: "top 60%",
                scrub: 2
            },
            height: 0,
            stagger: 0.05,
            ease: "power1.inOut"
        });

    }, { scope: container });

    return (
        <section ref={container} id="product" className="relative py-32 bg-black perspective-1000 min-h-[150vh]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-blue/20 blur-[150px] rounded-full mix-blend-screen opacity-20 pointer-events-none mb-32" />

            <div className="container mx-auto relative z-10 px-6 sticky top-32">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                        <span className="text-xs font-medium text-neon-blue tracking-wide uppercase">Live Preview</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Powerful Analytics at Your Fingertips
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Monitor infrastructure, track user engagement, and optimize performance in real-time.
                    </p>
                </div>

                {/* Dashboard Mockup */}
                <div ref={dashboardRef} className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-neon-blue/10 transform-gpu z-20">
                    {/* Top Bar */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="h-6 w-64 rounded bg-white/5 border border-white/5" />
                        <div className="flex gap-2">
                            <div className="h-6 w-6 rounded-full bg-white/10" />
                            <div className="h-6 w-6 rounded-full bg-neon-violet/20" />
                        </div>
                    </div>

                    <div className="flex h-[500px]">
                        {/* Sidebar */}
                        <div className="w-64 border-r border-white/10 bg-white/5 p-4 hidden md:flex flex-col gap-2">
                            <div className="h-8 w-full rounded bg-white/10 mb-4" />
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-8 w-full rounded bg-transparent hover:bg-white/5 flex items-center gap-3 px-2 transition-colors cursor-pointer">
                                    <div className="w-4 h-4 rounded bg-white/20" />
                                    <div className="h-2 w-20 rounded bg-white/10" />
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                            {/* Stats Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { label: "Active Users", value: "24.5k", change: "+12%", icon: <Users size={16} /> },
                                    { label: "Revenue", value: "$102.4k", change: "+8.2%", icon: <Activity size={16} /> },
                                    { label: "Uptime", value: "99.99%", change: "+0.01%", icon: <Zap size={16} /> }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 rounded-lg border border-white/10 bg-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-zinc-400">{stat.label}</span>
                                            <div className="text-zinc-500">{stat.icon}</div>
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-neon-cyan mt-1">{stat.change}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart Area */}
                            <div className="flex-1 rounded-lg border border-white/10 bg-white/5 relative flex items-end justify-between px-4 pb-4 pt-12 gap-2">
                                {/* Fake Bars */}
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="demo-chart-bar w-full bg-gradient-to-t from-neon-blue/20 to-neon-cyan/20 rounded-t-sm hover:from-neon-blue/50 hover:to-neon-cyan/50 transition-colors"
                                        style={{ height: `${30 + ((i * 37) % 50)}%` }}
                                    />
                                ))}

                                {/* Decorative Line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
