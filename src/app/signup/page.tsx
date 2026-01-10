"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function SignupPage() {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useGSAP(() => {
        gsap.from(".element-animate", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: container });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div ref={container} className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(189,0,255,0.1),_transparent_50%)]" />

            <Link href="/" className="absolute top-8 left-8 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 z-20">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="w-full max-w-md p-8 relative z-10">
                <div className="mb-8 text-center element-animate">
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-zinc-400">Join the future of development</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="element-animate group relative">
                        <input
                            type="text"
                            required
                            className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                            placeholder="Name"
                            id="name"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neon-violet peer-focus:bg-black peer-focus:px-1 pointer-events-none"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="element-animate group relative">
                        <input
                            type="email"
                            required
                            className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                            placeholder="Email"
                            id="email"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neon-violet peer-focus:bg-black peer-focus:px-1 pointer-events-none"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="element-animate group relative">
                        <input
                            type="password"
                            required
                            className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                            placeholder="Password"
                            id="password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-4 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neon-violet peer-focus:bg-black peer-focus:px-1 pointer-events-none"
                        >
                            Password
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="element-animate w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign Up"}
                    </button>
                </form>

                <div className="mt-8 text-center element-animate">
                    <p className="text-zinc-400 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-neon-violet hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
