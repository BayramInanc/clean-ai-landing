import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F7] border-t border-[#E5E5E5] py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0066FF] flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white fill-white" />
                    </div>
                    <span className="font-semibold text-black">CleanAI</span>
                </div>

                <div className="flex items-center gap-8 text-sm text-gray-500">
                    <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-black transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-black transition-colors">Contact</Link>
                </div>

                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} CleanAI Inc.
                </p>
            </div>
        </footer>
    );
}
