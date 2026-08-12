"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#153B16] text-white relative overflow-hidden border-t-2 border-[#E5CC64]">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#E5CC64_1px,transparent_1px),linear-gradient(to_bottom,#E5CC64_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-block mb-4">
          <span className="text-[#E5CC64] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-cinzel)] bg-[#E5CC64]/10 border border-[#E5CC64]/30 px-3.5 py-1">
            PARTNER WITH BOG INTERNATIONAL
          </span>
        </div>

        {/* Heading matching AboutHero style */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] uppercase leading-[0.95] tracking-wide mb-6">
          Ready to Initiate a Mineral Sourcing Contract?
        </h2>

        <div className="w-16 h-[2px] bg-[#E5CC64] mx-auto mb-6" />

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Connect directly with our commercial desk for institutional inquiries, contract specifications, and verified export allocations across Gold Doré, Copper Cathodes, and Bulk Minerals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#E5CC64] text-[#153B16] font-bold text-xs sm:text-sm uppercase tracking-widest font-[family-name:var(--font-cinzel)] hover:bg-[#d4ba53] transition-all shadow-lg hover:shadow-xl"
          >
            Submit Commercial Inquiry
          </Link>

          <a
            href="/bhatia-ocean-gold-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#E5CC64] text-[#E5CC64] font-bold text-xs sm:text-sm uppercase tracking-widest font-[family-name:var(--font-cinzel)] hover:bg-[#E5CC64]/10 transition-all"
          >
            Download Corporate Profile (PDF)
          </a>
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-12 pt-6 border-t border-white/10 text-[11px] font-mono text-gray-300 flex flex-wrap items-center justify-center gap-6">
          <span>• DIRECT MINING ALLOCATIONS</span>
          <span>• SGS ACCREDITED ASSAYS</span>
          <span>• BANK SECURED CONTRACTS</span>
        </div>

      </div>
    </section>
  );
}