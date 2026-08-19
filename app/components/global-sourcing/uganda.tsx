"use client";

export default function UgandaPage() {
  return (
    <div className="min-h-screen bg-[#153B16] text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HERO SECTION */}
        <div className="border-b border-[#E5CC64]/30 pb-8">
          <span className="text-[#E5CC64] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-cinzel)]">
            Global Sourcing Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] mt-2 mb-4">
            Uganda Gold & Commodity Operations
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bathia Ocean Gold operates structured sourcing and trade pipelines in Uganda, facilitating ethical gold origination, mineral export, and direct trade operations.
          </p>
        </div>

        {/* CORE OPERATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Direct Mine Sourcing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ethical procurement directly from licensed regional mining cooperatives with full origin verification.
            </p>
          </div>

          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Refinement & Assay
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              In-country purity verification and secondary refining setup to adhere to LBMA international standards.
            </p>
          </div>

          <div className="bg-[#113012] border border-[#E5CC64]/20 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
              Customs & Export
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Streamlined export documentation, tax compliance, and fully insured air freight handling to global destinations.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-[#113012] to-[#1a4a1b] border border-[#E5CC64]/40 p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-cinzel)]">
              Inquire About Uganda Sourcing
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Contact our trade desk for export allocations and compliance verification.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-[#E5CC64] text-[#153B16] font-bold px-6 py-3 rounded text-xs uppercase tracking-wider font-[family-name:var(--font-cinzel)] hover:bg-[#f3e5ab] transition-colors whitespace-nowrap"
          >
            Contact Trade Desk
          </a>
        </div>

      </div>
    </div>
  );
}