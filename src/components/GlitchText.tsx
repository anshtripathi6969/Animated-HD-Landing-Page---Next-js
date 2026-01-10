"use client";

import { useState } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
    return (
        <span className={`relative group inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-white opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1"
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2"
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-violet opacity-0 group-hover:opacity-100 group-hover:animate-glitch-3"
                aria-hidden="true"
            >
                {text}
            </span>
        </span>
    );
}
