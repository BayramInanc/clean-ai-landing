import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

import Proof from "@/components/Proof";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0066FF]/30">
      <Navbar />
      <Hero />
      <Features />
      <Proof />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">Galerinizi bugün özgürleştirin.</h2>
          <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Ücretsiz Başla
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
