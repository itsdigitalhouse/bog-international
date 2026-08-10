import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function InternationalTradingPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#153B16]">
      <Navbar />

      <section className="bg-[#153B16] text-[#F3F3F3] py-20 px-6 md:px-12 lg:px-20 border-b border-[#E5CC64]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#E5CC64] text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#E5CC64]/40 px-3 py-1 rounded">
            Global Trade Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            INTERNATIONAL COMMODITIES TRADING
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            Connecting African commodity supply with global international demand through structured B2B trade frameworks.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Africa → Global Markets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Bhatia Ocean Gold International facilitates commercial transactions between verified African origin suppliers and institutional international buyers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Structured Contracts</h3>
            <p className="text-sm text-gray-600">Standardized B2B commodity contracts designed for secure international trade.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Direct Sourcing</h3>
            <p className="text-sm text-gray-600">Direct integration with primary extraction and aggregation hubs across Africa.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Buyer Safeguards</h3>
            <p className="text-sm text-gray-600">Verified origin documentation, independent testing, and secure logistics handling.</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/for-buyers"
            className="inline-block bg-[#E5CC64] text-[#153B16] font-bold py-4 px-8 rounded hover:bg-[#D4B74F] transition text-sm"
          >
            SUBMIT BUYER REQUIREMENT
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}