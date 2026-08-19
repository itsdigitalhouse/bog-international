"use client";

import React from "react";

// Conceptual Data - Replace with actual figures if available
const productionStats = [
  {
    title: "Licensed Concession Area",
    value: "65,000+",
    unit: "Hectares",
    icon: (
      <svg className="w-7 h-7 text-[#E5CC64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Proven Gold Reserve Estimates",
    value: "1.2M",
    unit: "Oz (conceptual)",
    icon: (
      <svg className="w-7 h-7 text-[#E5CC64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Monthly Ore Processing Capacity",
    value: "25,000",
    unit: "Metric Tons",
    icon: (
      <svg className="w-7 h-7 text-[#E5CC64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 01-2.828 0l-14.142-14.143a2 2 0 010-2.828l2.828-2.828a2 2 0 012.828 0l14.143 14.142a2 2 0 010 2.828l-2.828 2.828z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11l4.553 2.276A1 1 0 0120 14.17V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4.83a1 1 0 01.553-.894L15 11z" />
      </svg>
    ),
  },
  {
    title: "Operational Compliance Rate",
    value: "100%",
    unit: "Verified",
    icon: (
      <svg className="w-7 h-7 text-[#E5CC64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function MiningProductionStats() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F3F3] text-[#153B16] border-t border-[#153B16]/10">
      
      {/* Background Decor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(21,59,22,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,59,22,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">

        {/* =========================================================
            HEADER SECTION (CENTER ALIGNED)
        ========================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20 overflow-visible">

          <div className="inline-flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#B09630] font-[family-name:var(--font-cinzel)]">
              Operational Scale
            </span>
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
          </div>

          <h2 className="font-[family-name:var(--font-cinzel)] font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Production &amp;
            <span className="block text-[#B09630] mt-1">
              Asset Estimates
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#E5CC64] to-transparent my-7" />

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light text-center">
            Key operational metrics outlining Bhatia Ocean Gold International's mineral concession footprint, resource base estimates, and heavy equipment processing capabilities across verified corridors.
          </p>

        </div>

        {/* =========================================================
            STATS GRID - 4 COLUMN
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          
          {productionStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 xl:p-10 border border-[#153B16]/10 flex flex-col items-center text-center rounded-sm transition-all duration-300 hover:border-[#E5CC64] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153B16]/5"
            >
              {/* Dynamic bottom line gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E5CC64]/20 via-[#E5CC64] to-[#E5CC64]/20 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full border border-[#E5CC64]/50 flex items-center justify-center mb-8 bg-[#153B16]/5 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Statistical Value */}
              <span className="block text-5xl xl:text-6xl font-bold font-mono text-[#153B16] tracking-tight mb-2">
                {stat.value}
              </span>

              {/* Unit & Label */}
              <span className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B09630] uppercase mb-5">
                {stat.unit}
              </span>

              {/* Description/Label */}
              <h4 className="mt-auto pt-6 border-t border-[#153B16]/[0.08] text-sm xl:text-base font-semibold text-[#153B16] font-[family-name:var(--font-manrope)] tracking-wide leading-snug">
                {stat.title}
              </h4>
            </div>
          ))}

        </div>

        {/* =========================================================
            BOTTOM DISCLAIMER/STATEMENT
        ========================================================== */}
        <div className="mt-12 lg:mt-16 bg-[#153B16] text-white/90 relative overflow-hidden rounded-sm shadow-xl p-8 lg:p-10">
          
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(229,204,100,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(229,204,100,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h5 className="font-[family-name:var(--font-cinzel)] text-lg font-bold uppercase tracking-wide text-[#E5CC64]">
                Compliance &amp; Resource Reporting
              </h5>
              <p className="mt-2 text-xs xl:text-sm text-white/60 max-w-3xl leading-relaxed font-light">
                All production estimates, concession sizes, and resource base figures are derived from verified geological surveys, government mining licenses, and documented internal feasibility studies. Bhatia Ocean Gold remains committed to transparent operational reporting and strictly adheres to international resource classification standards.
              </p>
            </div>
            
            {/* Optional CTA/Status */}
            <div className="flex-shrink-0 flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-3">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-white uppercase">
                Status: Current
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}