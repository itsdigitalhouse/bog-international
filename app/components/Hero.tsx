"use client";

import Link from "next/link";

export default function HeroVideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/assets/video-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />

      {/* =========================================================
          CONTENT OVERLAY (CENTERED & BALANCED)
      ========================================================== */}
      <div className="relative z-10 w-full px-4 py-8 sm:px-6 sm:py-10 text-center flex flex-col items-center justify-center">
        
        {/* Eyebrow Text */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white mb-1.5 drop-shadow-md">
          Welcome to
        </p>

        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-cinzel)] text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-black uppercase tracking-tight text-white leading-[1.1] drop-shadow-lg max-w-4xl mx-auto">
          BATHIA OCEAN GOLD <br className="hidden sm:inline" />
          <span>INTERNATIONAL</span>
        </h1>

        {/* Subtitle Line 1 */}
        <p className="mt-3 text-xs sm:text-base md:text-lg font-bold uppercase tracking-[0.14em] text-white/95 max-w-2xl mx-auto drop-shadow-md">
          Connecting African Resources with Global Markets
        </p>

        {/* Subtitle Line 2 */}
        <p className="mt-2.5 text-[10px] sm:text-xs md:text-xs font-extrabold uppercase tracking-[0.1em] text-white/90 max-w-3xl mx-auto">
          Mining • Minerals • Commodities • International Trading & Export
        </p>

        {/* =========================================================
            RECTANGULAR BUTTONS
        ========================================================== */}
        <div className="mt-6 flex w-full flex-col gap-3.5 sm:flex-row sm:justify-center sm:items-center sm:max-w-md">
          {/* Primary Button */}
          <Link
            href="/products"
            className="group inline-flex w-full items-center justify-center gap-2 bg-[#153B16] hover:bg-white text-white hover:text-black px-6 py-3 rounded-none text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-lg sm:flex-1"
          >
            <span>Our Company</span>
            <span className="text-[#e5cc64] text-xs sm:text-sm font-normal group-hover:text-black transition-colors">↗</span>
          </Link>

          {/* Secondary Button */}
          <Link
            href="/request-offer"
            className="group inline-flex w-full items-center justify-center gap-2 bg-[#e5cc64] hover:bg-black text-black hover:text-white px-6 py-3 rounded-none text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-lg sm:flex-1"
          >
            <span>Request Offer</span>
            <span className="text-black group-hover:text-white text-xs sm:text-sm font-normal transition-colors">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}