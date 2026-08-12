"use client";

export default function ExecutiveOverview() {
  return (
    <section className="relative py-20 lg:py-24 text-[#153B16] overflow-hidden bg-[#FFFFFF]">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2000&auto=format&fit=crop"
          alt="Mining and Gold Operations Background"
          className="w-full h-full object-cover opacity-10"
        />
        {/* Subtle Gradient to smooth out image edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Commercial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-[#153B16] text-[11px] font-bold uppercase tracking-[0.25em] font-mono bg-[#E5CC64]/20 border border-[#E5CC64]/60 px-3 py-1">
                COMMERCIAL POSITIONING
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-cinzel)] leading-[1.15] text-[#153B16] uppercase">
              Structured Commodity Trade & Field Coordination
            </h2>

            <div className="w-16 h-[3px] bg-[#E5CC64]" />

            <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Bhatia Ocean Gold International was established to address key operational risks in raw mineral sourcing. By eliminating multi-tier brokerage webs, BOG connects verified international buyers directly with direct concessions and government-licensed refining entities.
            </p>

            <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our team coordinates ground inspection, weight and purity assays, legal export licensing, and international shipping protocols (CIF / FOB). Every transaction is structured under standardized international commercial frameworks to ensure total clarity and accountability.
            </p>

            {/* Sub-cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 backdrop-blur-sm border-l-4 border-[#153B16] border-y border-r border-gray-200 hover:border-[#E5CC64] transition-colors shadow-sm">
                <h4 className="font-bold text-[#153B16] uppercase text-xs font-[family-name:var(--font-cinzel)] mb-1">
                  Direct Mine & Concession Access
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-normal">
                  Direct engagement with licensed mining zones across West and Central African mineral belts.
                </p>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm border-l-4 border-[#153B16] border-y border-r border-gray-200 hover:border-[#E5CC64] transition-colors shadow-sm">
                <h4 className="font-bold text-[#153B16] uppercase text-xs font-[family-name:var(--font-cinzel)] mb-1">
                  End-to-End Export Handling
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-normal">
                  Full management of customs documentation, transit security, and vaulting logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Principles Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#153B16] text-white p-6 sm:p-8 border-2 border-[#E5CC64] shadow-2xl relative z-10">
              <span className="text-[#E5CC64] text-[10px] font-mono font-bold tracking-[0.2em] block mb-1 uppercase">
                [ BOG STANDARDS ]
              </span>
              <h3 className="text-lg font-bold font-[family-name:var(--font-cinzel)] text-white mb-4 uppercase border-b border-[#E5CC64]/30 pb-3">
                Operating Principles
              </h3>

              <ul className="space-y-4 text-xs text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E5CC64] text-[#153B16] font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-medium uppercase text-[11px] font-[family-name:var(--font-cinzel)]">Traceability & Integrity</strong>
                    <span className="text-gray-300 leading-tight block mt-0.5">All commodities carry verifiable provenance documentation.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E5CC64] text-[#153B16] font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-medium uppercase text-[11px] font-[family-name:var(--font-cinzel)]">Assay Accuracy</strong>
                    <span className="text-gray-300 leading-tight block mt-0.5">Purity certifications conducted by accredited state laboratories.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E5CC64] text-[#153B16] font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-medium uppercase text-[11px] font-[family-name:var(--font-cinzel)]">Strict Compliance</strong>
                    <span className="text-gray-300 leading-tight block mt-0.5">Mandatory KYC/AML verification prior to contract execution.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Background Frame Accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#E5CC64]/40 -z-0 hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}