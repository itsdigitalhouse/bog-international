"use client";

import Link from "next/link";

export default function MiningCTA() {
  return (
    <section className="py-20 bg-[#FFFFFF] text-[#153B16] border-t-2 border-[#153B16]/10 text-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-cinzel)] uppercase mb-4">
          Inquire About Our Mining Concessions
        </h2>
        
        <div className="w-12 h-[2px] bg-[#E5CC64] mx-auto mb-6" />

        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Partner with Bhatia Ocean Gold International for transparent, compliant, and direct resource allocations from verified African mineral reserves.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#153B16] text-[#E5CC64] font-bold text-xs sm:text-sm uppercase tracking-widest font-[family-name:var(--font-cinzel)] hover:bg-[#2e4e20] transition-all shadow-lg border border-[#E5CC64]"
        >
          Contact Commercial Desk
        </Link>

      </div>
    </section>
  );
}