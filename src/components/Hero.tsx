"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Star, CheckCircle2, ChevronRight, MoreHorizontal, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const SHIMMER_TEXTS = [
    "Scanning for duplicates...",
    "Identifying blurry photos...",
    "Finding similar shots...",
    "Cleaning up screenshots...",
    "Optimizing storage space..."
];

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % SHIMMER_TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10 opacity-40" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1E]/80 backdrop-blur-md border border-[#2C2C2E] mb-8 overflow-hidden relative group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 relative z-10" />
                        <div className="relative z-10 min-w-[180px] h-[20px] overflow-hidden flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs font-medium text-blue-100 block absolute w-full text-left"
                                >
                                    {SHIMMER_TEXTS[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        The Smartest Way to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                            Clean Your Gallery.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#8E8E93] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        Instantly remove duplicates, blur, and clutter. Reclaim gigabytes of storage while keeping your memories safe and organized.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <Link
                            href="https://apps.apple.com"
                            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] flex items-center gap-3"
                        >
                            <Download className="w-5 h-5" />
                            Download on App Store
                        </Link>

                        <div className="flex items-center gap-2 text-sm text-[#8E8E93] px-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-[#1C1C1E] border-2 border-black flex items-center justify-center text-xs">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    </div>
                                ))}
                            </div>
                            <span>4.9/5 Rating</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-[#8E8E93]"
                    >
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 100% On-Device Privacy</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> No Internet Required</div>
                    </motion.div>
                </div>

                {/* CSS Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 40, rotateY: -20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <div className="relative w-[340px] h-[680px] mx-auto bg-black rounded-[3.5rem] border-[8px] border-[#1C1C1E] shadow-2xl overflow-hidden ring-1 ring-white/10">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1C1C1E]"></div>
                        </div>

                        {/* Screen Content */}
                        <div className="w-full h-full bg-black relative pt-14 px-5 pb-8 flex flex-col">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-sm font-medium text-[#8E8E93]">Analyzing for blurry photos.</div>
                                <div className="w-8 h-8 rounded-full bg-[#1C1C1E] flex items-center justify-center">
                                    <MoreHorizontal className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* List Items */}
                            <div className="space-y-4">
                                {[
                                    { label: "Duplicates", count: "1.671", gradient: "from-blue-600 to-blue-400" },
                                    { label: "Similars", count: "1.671", gradient: "from-purple-600 to-purple-400" },
                                    { label: "Blurry", count: "1.671", gradient: "from-orange-600 to-orange-400" },
                                    { label: "Texts", count: "920", gradient: "from-gray-600 to-gray-400" },
                                    { label: "Screenshots", count: "3.245", gradient: "from-indigo-600 to-indigo-400" },
                                    { label: "Others", count: "17.115", gradient: "from-green-600 to-green-400" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/5 flex items-center justify-center relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                {i === 0 && <div className="absolute inset-0 bg-blue-500/30 blur-md"></div>}
                                            </div>
                                            <span className="text-lg font-medium text-white">{item.label}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">{item.count}</span>
                                            <ChevronRight className="w-5 h-5 text-[#3A3A3C]" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Action */}
                            <div className="mt-auto">
                                <div className="w-full py-3 bg-[#1C1C1E] rounded-full flex items-center justify-between px-5 border border-[#2C2C2E]">
                                    <span className="text-white font-medium">Clean All</span>
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-32 -right-8 p-4 rounded-2xl bg-[#1C1C1E]/90 backdrop-blur-md border border-[#2C2C2E] shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium text-white">Space Saved</span>
                        </div>
                        <div className="text-2xl font-bold text-white mt-1">+4.2 GB</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
