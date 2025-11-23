import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to reclaim your storage?</h2>
          <p className="text-xl text-[#8E8E93] mb-10 max-w-2xl mx-auto">
            Join thousands of users who trust CleanAI to keep their galleries organized and clutter-free.
          </p>
          <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto">
            <span className="text-xl"></span> Download on App Store
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
