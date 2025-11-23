"use client";

import Link from "next/link";
import { Sparkles, Download } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 group-hover:bg-blue-600/30 transition-all border border-blue-500/20">
                        <Sparkles className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">CleanAI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E8E93]">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://apps.apple.com"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] rounded-full transition-all"
                    >
                        <Download className="w-4 h-4" />
                        App Store
                    </Link>
                </div>
            </div>
        </nav>
    );
}
