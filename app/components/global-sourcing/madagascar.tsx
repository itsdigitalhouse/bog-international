"use client";

export default function MadagascarPage() {
  return (
    <div className="min-h-screen bg-[#153B16] text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HERO SECTION */}
        <div className="border-b border-[#E5CC64]/30 pb-8">
          <span className="text-[#E5CC64] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-cinzel)]">
            Global Operations & Sourcing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] mt-2 mb-4">
            Madagascar Mining & Mineral Sourcing
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bathia Ocean Gold establishes direct, compliant, and transparent mineral sourcing pipelines across Madagascar, connecting global buyers with premium-grade natural resources.
          </p>
        </div>

        {/* CORE OPERATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Mineral Sourcing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ethically sourced minerals and gemstones handled under strict regulatory compliance and local partnerships.
            </p>
          </div>

          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Quality Assay & Control
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rigorous purity testing and international standard assay certifications prior to export processing.
            </p>
          </div>

          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Secure Logistics
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              End-to-end secure chain of custody, customs clearance, and insured global freight management.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-[#113012] to-[#1a4a1b] border border-[#E5CC64]/40 p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-cinzel)]">
              Looking for Sourcing Partnerships in Madagascar?
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Connect with our procurement desk to check current mineral availability and export procedures.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-[#E5CC64] text-[#153B16] font-bold px-6 py-3 rounded text-xs uppercase tracking-wider font-[family-name:var(--font-cinzel)] hover:bg-[#f3e5ab] transition-colors whitespace-nowrap"
          >
            Request Offer
          </a>
        </div>

      </div>
    </div>
  );
}