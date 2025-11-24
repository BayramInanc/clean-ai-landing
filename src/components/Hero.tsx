"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Smartphone, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [scanProgress, setScanProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white bg-dot-pattern">
            {/* Gradient Fade for Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-6 leading-[1.1]">
                            iPhone galerinizde <br />
                            <span className="text-[#0066FF]">%40 yer açın</span>, anında.
                        </h1>

                        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                            Yapay zeka ile benzer fotoğrafları, ekran görüntülerini ve bulanık kareleri saniyeler içinde temizleyin.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="https://apps.apple.com"
                                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <span className="text-xl"></span> App Store'dan İndir
                            </Link>
                            <div className="flex items-center gap-4 px-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-[#0066FF]" />
                                    <span>On-Device</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-[#0066FF]" />
                                    <span>Gizli</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Minimalist Phone Mockup (Light Mode) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative hidden lg:flex justify-center"
                >
                    <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[4px] border-gray-800 shadow-2xl overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center border border-gray-800" />

                        {/* App Interface */}
                        <div className="w-full h-full bg-black pt-14 px-4 flex flex-col font-sans">

                            {/* Header */}
                            <div className="flex justify-between items-end mb-8 px-1">
                                <h2 className="text-2xl font-bold text-white tracking-tight">CleanAI</h2>
                            </div>

                            {/* Scanning Card */}
                            <div className="w-full bg-[#111] rounded-2xl p-6 mb-6 border border-[#222]">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Kazanılan Alan</span>
                                        <span className="text-3xl font-bold text-white">2.4 GB</span>
                                    </div>
                                </div>
                                <div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#0066FF] rounded-full"
                                        style={{ width: `${scanProgress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <span className="text-[10px] text-white/40">Taranıyor...</span>
                                    <span className="text-[10px] text-white/40">{scanProgress}%</span>
                                </div>
                            </div>

                            {/* Categories List */}
                            <div className="space-y-3">
                                {[
                                    { label: "Benzer Fotoğraflar", count: "142", color: "text-[#0066FF]" },
                                    { label: "Ekran Görüntüleri", count: "890", color: "text-white" },
                                    { label: "Bulanık Kareler", count: "45", color: "text-white" },
                                    { label: "Videolar", count: "12", color: "text-white" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-[#222]">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#0066FF]' : 'bg-[#333]'}`} />
                                            <span className="text-sm font-medium text-white">{item.label}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-white/40">{item.count}</span>
                                            <ChevronRight className="w-4 h-4 text-white/20" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Tab Bar Mockup */}
                            <div className="mt-auto pt-4 pb-1 flex justify-around items-center border-t border-[#222]">
                                <div className="w-6 h-6 rounded-full bg-[#0066FF]/20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#0066FF] rounded-full" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-[#222]" />
                                <div className="w-6 h-6 rounded-full bg-[#222]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
