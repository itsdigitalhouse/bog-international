import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            ABOUT BHATIA OCEAN GOLD
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            An International Mining, Minerals, Commodities Trading & Export Company connecting African resources with global markets.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bhatia Ocean Gold International (BOG) is an international commodities company connecting African resources with global markets through responsible sourcing, commodity trading, export coordination, and international B2B supply.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-center font-bold">
            <div className="p-4 bg-gray-50 rounded">Mining</div>
            <div className="p-4 bg-gray-50 rounded">Gold & Bullion</div>
            <div className="p-4 bg-gray-50 rounded">Copper Cathodes</div>
            <div className="p-4 bg-gray-50 rounded">Global B2B Trade</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}