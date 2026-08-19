"use client";

import React from "react";

export default function MiningConcessionCTA() {
  return (
    <section 
      aria-label="Mining Concession & Partnership Inquiry"
      className="relative w-full overflow-hidden bg-white text-[#153B16] border-t border-[#153B16]/10"
    >
      {/* =========================================================
          BACKGROUND DECORATIONS & AMBIENT GLOWS
      ========================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(21,59,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,59,22,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#E5CC64]/15 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#153B16]/5 blur-[150px] pointer-events-none" />

      {/* Outer framing borders */}
      <div className="absolute top-4 inset-x-6 sm:inset-x-12 h-px bg-gradient-to-r from-transparent via-[#153B16]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 inset-x-6 sm:inset-x-12 h-px bg-gradient-to-r from-transparent via-[#153B16]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24 lg:py-32">

        {/* =========================================================
            CENTERED CONTENT & HEADER
        ========================================================== */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">

          {/* Sub-label with gold accent bars */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-6">
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#B09630] font-[family-name:var(--font-cinzel)]">
              Partner With Bhatia Ocean Gold
            </span>
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
          </div>

          {/* Main Headline - Explicit Single Line Flow for Phrase */}
          <h2 className="font-[family-name:var(--font-cinzel)] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-[#153B16]">
            <span className="inline-block">Secure Concession Rights &amp;&nbsp;</span>
            <span className="text-[#B09630] whitespace-nowrap inline-block">B2B Supply Agreements</span>
          </h2>

          {/* Center Gradient Line */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#E5CC64] to-transparent my-8" />

          {/* Descriptive Paragraph */}
          <p className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed font-light max-w-3xl text-center mb-12">
            Connect with our mineral development division to discuss direct resource allocation, operational concessions, refined bullion procurement, and long-term joint venture frameworks.
          </p>

          {/* =========================================================
              ACTION BUTTONS
          ========================================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            
            {/* Primary Dark Green CTA */}
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#153B16] text-[#E5CC64] font-bold px-8 py-4 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase rounded-sm shadow-xl hover:bg-[#102e11] hover:shadow-[#153B16]/20 hover:scale-[1.02] transition-all duration-300 group"
            >
              <span>Initiate Inquiry</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Secondary Outline CTA */}
            <a
              href="/compliance"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-[#153B16]/30 text-[#153B16] font-semibold px-8 py-4 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase rounded-sm hover:border-[#153B16] hover:bg-[#153B16]/5 transition-all duration-300"
            >
              <span>Review Documentation</span>
            </a>

          </div>

          {/* =========================================================
              TRUST / VERIFICATION MICRO FOOTER
          ========================================================== */}
          <div className="mt-16 pt-10 border-t border-[#153B16]/10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <span className="block text-[9px] font-mono tracking-[0.2em] text-[#B09630] uppercase font-semibold">
                Direct Procurement
              </span>
              <span className="block text-xs text-gray-600 mt-1 font-light">
                Verified B2B Channels
              </span>
            </div>

            <div className="sm:border-x sm:border-[#153B16]/10 px-2">
              <span className="block text-[9px] font-mono tracking-[0.2em] text-[#B09630] uppercase font-semibold">
                Concession Access
              </span>
              <span className="block text-xs text-gray-600 mt-1 font-light">
                Licensing Frameworks
              </span>
            </div>

            <div>
              <span className="block text-[9px] font-mono tracking-[0.2em] text-[#B09630] uppercase font-semibold">
                Global Operations
              </span>
              <span className="block text-xs text-gray-600 mt-1 font-light">
                Compliant Logistics
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}