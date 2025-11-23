"use client";

import { motion } from "framer-motion";
import { Copy, Image, EyeOff, FileText, Smartphone, Layers } from "lucide-react";

const features = [
    {
        icon: Copy,
        title: "Duplicates",
        description: "Exact copies gone in seconds. We identify identical photos so you don't have to.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Layers,
        title: "Similars",
        description: "Keep the best shot, delete the rest. Our AI finds the sharpest photo in a burst.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        icon: EyeOff,
        title: "Blurry",
        description: "Remove photos that didn't make the cut. Instantly detect out-of-focus shots.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        icon: FileText,
        title: "Texts",
        description: "Clean up old document photos and receipts you've already used.",
        color: "text-gray-400",
        bg: "bg-gray-500/10",
    },
    {
        icon: Smartphone,
        title: "Screenshots",
        description: "Auto-detect and clear old screenshots that are cluttering your gallery.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        icon: Image,
        title: "Others",
        description: "Identify large videos and other media taking up unnecessary space.",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Powerful Tools for a <span className="text-blue-500">Cleaner Gallery</span>
                    </h2>
                    <p className="text-[#8E8E93] max-w-2xl mx-auto">
                        Everything you need to organize your memories and reclaim your storage space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-[#1C1C1E] border border-[#2C2C2E] hover:border-blue-500/30 hover:bg-[#2C2C2E] transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-[#8E8E93] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
