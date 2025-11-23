"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Scan Your Gallery",
        description: "Grant access to your photos. We scan locally on your device—no uploads, ever.",
    },
    {
        step: "02",
        title: "Select What to Keep",
        description: "Review our smart suggestions. We pre-select the best photos, but you have the final say.",
    },
    {
        step: "03",
        title: "Clean in One Tap",
        description: "Remove all unwanted duplicates and clutter instantly. Undo anytime if you change your mind.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-[#8E8E93]">Your gallery, organized in three simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />

                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            <div className="w-24 h-24 mx-auto bg-[#1C1C1E] border-4 border-blue-500/20 rounded-full flex items-center justify-center text-3xl font-bold text-blue-500 mb-6 relative z-10 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-[#8E8E93]">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
