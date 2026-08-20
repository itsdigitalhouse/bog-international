"use client";

import Link from "next/link";

export default function HeroVideoSection() {
  const stats = [
    { label: "PRIMARY ORIGIN", value: "EAST AFRICA" },
    { label: "EXPORT COMPLIANCE", value: "LBMA / OECD" },
    { label: "CORE TRADE", value: "GOLD & AGRO" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0D1F0E] text-white min-h-[620px] lg:min-h-[700px] flex items-center justify-center border-b border-[#E5CC64]/20 selection:bg-[#E5CC64] selection:text-[#153B16]">
      {/* =========================================================
          BACKGROUND VIDEO & GRADIENT OVERLAYS
      ========================================================== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover scale-105"
      >
        <source src="/assets/video-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Multi-layered Vignette for High Visual Contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B1A0C]/95 via-[#0B1A0C]/70 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B1A0C] via-transparent to-[#0B1A0C]/50" />

      {/* =========================================================
          CONTENT GRID (ASYMMETRIC INSTITUTIONAL LAYOUT)
      ========================================================== */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* LEFT COLUMN: BRAND & HERO CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Live Operations Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#153B16]/80 border border-[#E5CC64]/30 backdrop-blur-md px-3.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E5CC64] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                GLOBAL COMMODITY & MINING TERMINAL
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              Bathia Ocean Gold <br />
              <span className="text-[#E5CC64]">International.</span>
            </h1>

            {/* Subtitles & Operational Scope */}
            <div className="space-y-3 max-w-2xl border-l-2 border-[#E5CC64] pl-4 sm:pl-6">
              <p className="text-xs sm:text-base font-bold uppercase tracking-[0.14em] text-white/95">
                Connecting African Resources with Global Markets
              </p>
              <p className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-white/75">
                Mining &bull; Precious Metals &bull; Minerals &bull; Agro Export Logistics
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 bg-[#153B16] hover:bg-[#E5CC64] text-white hover:text-[#153B16] border border-[#E5CC64]/40 px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl group"
              >
                <span>Our Company</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>

              <Link
                href="/request-offer"
                className="inline-flex items-center justify-center gap-3 bg-[#E5CC64] hover:bg-white text-[#153B16] px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl group"
              >
                <span>Request Offer</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: GLASSMETRICS PANEL */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#153B16]/40 border border-white/15 backdrop-blur-md p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5CC64]">
                  TRADE PARAMETERS
                </span>
                <span className="text-[9px] font-mono text-white/50">SECURE LOGISTICS</span>
              </div>

              <div className="space-y-4">
                {stats.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-white tracking-widest">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-[9px] font-mono text-white/60 uppercase block leading-relaxed">
                  Direct mine-gate consolidation and verified third-party laboratory assaying.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}