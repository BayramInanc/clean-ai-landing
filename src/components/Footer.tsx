import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                                <Sparkles className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">CleanAI</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering developers to write cleaner, safer, and faster code with the help of advanced Artificial Intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} CleanAI Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
