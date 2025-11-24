"use client";

import Link from "next/link";
import { Sparkles, Download } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white fill-white" />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-black">CleanAI</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://apps.apple.com"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-gray-800 border border-transparent rounded-full transition-all shadow-sm"
                    >
                        <Download className="w-3.5 h-3.5" />
                        App Store
                    </Link>
                </div>
            </div>
        </nav>
    );
}
