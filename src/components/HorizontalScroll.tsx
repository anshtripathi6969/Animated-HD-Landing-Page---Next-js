"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmapItems = [
    { year: "Q1 2024", title: "Project Inception", desc: "Initial concept and core architecture design." },
    { year: "Q2 2024", title: "Alpha Release", desc: "Closed beta for selected enterprise partners." },
    { year: "Q3 2024", title: "Global Scale", desc: "Expanding edge network to 200+ regions." },
    { year: "Q4 2024", title: "AI Integration", desc: "Launching predictive analytics engine." },
    { year: "Q1 2025", title: "Ecosystem", desc: "Public API and Marketplace launch." },
];

export function HorizontalScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const pin = gsap.fromTo(sectionRef.current,
            {
                translateX: 0
            },
            {
                translateX: "-300vw", // Move horizontally
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                }
            }
        );

        return () => {
            pin.kill();
        };

    }, { scope: triggerRef });

    return (
        <section ref={triggerRef} className="relative overflow-hidden bg-black">
            <div ref={sectionRef} className="flex h-screen w-[400vw] flex-row relative">

                {/* Intro Block */}
                <div className="w-screen h-full flex flex-col justify-center px-20 border-r border-white/5">
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
                        Our <span className="text-neon-violet">Journey</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-xl">
                        Explore the milestones that define our path to revolutionizing the web.
                        Scroll down to move forward in time.
                    </p>
                </div>

                {/* Roadmap Cards */}
                {roadmapItems.map((item, index) => (
                    <div key={index} className="w-screen h-full flex flex-col justify-center px-20 border-r border-white/5 relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="text-9xl font-bold text-white/5 absolute top-20 left-10 select-none">
                            0{index + 1}
                        </span>

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan mb-6">
                                {item.year}
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-6">{item.title}</h3>
                            <p className="text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
