"use client";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-14 lg:py-18 bg-[#153B16] text-white border-b-2 border-[#E5CC64] overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E5CC64_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5CC64]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto w-full">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E5CC64]/10 border border-[#E5CC64]/40 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5CC64] animate-pulse" />
          <span className="text-[#E5CC64] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase font-[family-name:var(--font-cinzel)]">
            Corporate Overview & Institutional Reach
          </span>
        </div>

        {/* Heading with Ultra-Tight Line Height */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] uppercase mx-auto">
          <span className="block">
            Bridging African Resources with
          </span>

          <span className="block mt-3 sm:mt-4 text-[#E5CC64]">
            Global Industrial Markets
          </span>
        </h1>

        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
          Bhatia Ocean Gold International (BOG) operates as a structured B2B commodity trading, export management, and mining development enterprise—delivering direct access to verified Gold, Copper Cathodes, and Industrial Minerals.
        </p>

        {/* Quick Highlights Bar */}
        <div className="mt-10 pt-7 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto text-left">
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span className="block text-base sm:text-lg font-bold font-mono text-[#E5CC64]">100%</span>
            <span className="text-[10px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider">Verified Origin</span>
          </div>
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span className="block text-base sm:text-lg font-bold font-mono text-white">OECD</span>
            <span className="text-[10px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider">Compliant Sourcing</span>
          </div>
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span className="block text-base sm:text-lg font-bold font-mono text-[#E5CC64]">Grade-A</span>
            <span className="text-[10px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider">Refinery Assays</span>
          </div>
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span className="block text-base sm:text-lg font-bold font-mono text-white">B2B Bulk</span>
            <span className="text-[10px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider">Global Logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
}