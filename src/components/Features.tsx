"use client";

import { useRef, MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Laptop, Zap, Globe, Shield, Activity, Share2, Database, Users, Smartphone } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Instant Deploy",
        description: "Deploy your projects worldwide in seconds with our global edge network.",
        icon: <Zap className="w-6 h-6 text-neon-cyan" />,
    },
    {
        title: "Bank-Grade Security",
        description: "Enterprise-level protection for your data with automated compliance.",
        icon: <Shield className="w-6 h-6 text-neon-violet" />,
    },
    {
        title: "Global Scale",
        description: "Scale from one user to millions without changing a single line of code.",
        icon: <Globe className="w-6 h-6 text-neon-blue" />,
    },
    {
        title: "Real-time Database",
        description: "Sync data across all users instantly with our edge-first database.",
        icon: <Database className="w-6 h-6 text-neon-cyan" />,
    },
    {
        title: "Team Collaboration",
        description: "Built for teams to build faster together with real-time comments.",
        icon: <Users className="w-6 h-6 text-neon-violet" />,
    },
    {
        title: "Mobile First",
        description: "Optimized for every device, ensuring a seamless experience everywhere.",
        icon: <Smartphone className="w-6 h-6 text-neon-blue" />,
    },
];

function FeatureCard({ item, index }: { item: typeof features[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !containerRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight update
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);

        // Tilt effect
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(cardRef.current, {
            rx: rotateX,
            ry: rotateY,
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        gsap.to(cardRef.current, {
            rx: 0,
            ry: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <div className="perspective-1000 h-full">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full transition-transform duration-200"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    ref={containerRef}
                    className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                >
                    {/* Spotlight Gradient */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
                        }}
                    />

                    {/* Animated Border Gradient on Hover */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent translate-y-px opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10"
                    />

                    <div className="relative z-10">
                        {/* Icon Container with Glow */}
                        <div className="relative w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-neon-cyan/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                {item.icon}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Features() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".feature-card-wrapper");

        // Staggered Entrance
        gsap.from(cards, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Parallax Scroll Effect for columns
        // We assume a 3-column grid. Let's make the middle column move slightly differently or use odd/even logic if flattened.
        // Since it's a grid, we can target them by index.

        cards.forEach((card: any, i) => {
            const speed = i % 2 === 0 ? 1 : 1.2; // Different speeds

            gsap.to(card, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: speed
                },
                y: (i % 2 === 0 ? -50 : -100), // Move up at different rates
                ease: "none"
            });
        });

    }, { scope: container });

    return (
        <section id="features" ref={container} className="relative py-32 bg-black">
            <div className="container mx-auto relative z-10 px-6">
                <div className="text-center max-w-2xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        <GlitchText text="Engineered" /> for <span className="text-neon-cyan"><GlitchText text="Scale" /></span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Everything you need to build production-grade applications with speed and confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                    {features.map((item, index) => (
                        <div key={index} className={`feature-card-wrapper ${index === 1 || index === 4 ? "lg:translate-y-12" : ""}`}>
                            <FeatureCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
