"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Active Developers", value: 50000, suffix: "+" },
    { label: "Requests per Second", value: 2000000, suffix: "" },
    { label: "Uptime Guaranteed", value: 99.99, suffix: "%", decimals: 2 },
    { label: "Global Locations", value: 34, suffix: "" },
];

export function Stats() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".stat-item");

        gsap.from(items, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Counter Animation
        items.forEach((item: any, index) => {
            const stat = stats[index];
            const numberEl = item.querySelector(".stat-value");

            const counter = { val: 0 };
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                val: stat.value,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                    if (numberEl) {
                        numberEl.innerText = counter.val.toLocaleString(undefined, {
                            minimumFractionDigits: stat.decimals || 0,
                            maximumFractionDigits: stat.decimals || 0,
                        }) + stat.suffix;
                    }
                }
            });
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-32 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item text-center">
                            <div className="stat-value text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2 font-display">
                                0
                            </div>
                            <div className="text-zinc-500 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
