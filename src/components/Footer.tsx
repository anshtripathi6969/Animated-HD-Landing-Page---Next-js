import Link from "next/link";
import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-black pt-32 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-violet/10 blur-[120px] rounded-full mix-blend-screen opacity-30 pointer-events-none" />

            <div className="container mx-auto relative z-10 px-6">
                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to <span className="text-neon-cyan">Accelerate</span>?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-12">
                        Join thousands of developers building the next generation of web applications today.
                    </p>
                    <Link href="/login" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105">
                        Get Started Now <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16 translate-x-10">
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4 translate-x-4">
                    <div className="flex-1 flex items-center justify-start gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-neon-cyan to-neon-violet" />
                        <span className="text-white font-bold">NeonSaaS</span>
                    </div>

                    <div className="text-center text-sm text-zinc-500">
                        &copy; 2026 Ansh Tripathi Inc. All rights reserved.
                    </div>

                    <div className="flex-1 flex items-center justify-end gap-6">
                        <Link href="https://github.com/anshtripathi6969" className="text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                        <Link href="https://x.com/AnshTri65204980" className="text-zinc-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="https://linkedin.com/in/anshtripathi20/" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
