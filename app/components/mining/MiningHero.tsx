"use client";

export default function MiningHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-16 lg:py-20 bg-[#153B16] text-white border-b-2 border-[#E5CC64] overflow-hidden">
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      {/* Fine institutional dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none
        bg-[radial-gradient(#E5CC64_1px,transparent_1px)]
        [background-size:20px_20px]"
      />

      {/* Soft gold atmospheric glow */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#E5CC64]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Secondary field glow */}
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#2e4e20]/30 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto w-full">

        {/* =======================================================
            SECTION LABEL
        ======================================================= */}

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E5CC64]/10 border border-[#E5CC64]/40 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5CC64] animate-pulse" />

          <span
            className="
              text-[#E5CC64]
              text-[10px] sm:text-xs
              font-bold
              tracking-[0.2em]
              uppercase
              font-[family-name:var(--font-cinzel)]
            "
          >
            Field Extraction & Concession Management
          </span>
        </div>

        {/* =======================================================
            MAIN HEADING
        ======================================================= */}

        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cinzel)] uppercase mx-auto leading-[1.04]">
          <span className="block">
            Direct Mining & Exploration
          </span>

          <span className="block text-[#E5CC64]">
            Across African Mineral Corridors
          </span>
        </h1>

        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-[#E5CC64] mx-auto mt-6" />

        {/* =======================================================
            INTRODUCTION
        ======================================================= */}

        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
          Bhatia Ocean Gold International maintains active involvement in mineral
          concessions, technical surveying, heavy-machinery extraction, and secure
          field-to-port transit logistics.
        </p>

        {/* =======================================================
            OPERATIONAL HIGHLIGHTS
        ======================================================= */}

        <div
          className="
            mt-10
            pt-7
            border-t border-white/10
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            max-w-3xl
            mx-auto
            text-left
          "
        >
          {/* 01 */}
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span
              className="
                block
                text-base sm:text-lg
                font-bold
                font-mono
                text-[#E5CC64]
              "
            >
              Active
            </span>

            <span
              className="
                text-[10px] sm:text-xs
                text-gray-300
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Concessions
            </span>
          </div>

          {/* 02 */}
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span
              className="
                block
                text-base sm:text-lg
                font-bold
                font-mono
                text-white
              "
            >
              100%
            </span>

            <span
              className="
                text-[10px] sm:text-xs
                text-gray-300
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Title Verified
            </span>
          </div>

          {/* 03 */}
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span
              className="
                block
                text-base sm:text-lg
                font-bold
                font-mono
                text-[#E5CC64]
              "
            >
              Advanced
            </span>

            <span
              className="
                text-[10px] sm:text-xs
                text-gray-300
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Technical Surveys
            </span>
          </div>

          {/* 04 */}
          <div className="border-l-2 border-[#E5CC64] pl-4">
            <span
              className="
                block
                text-base sm:text-lg
                font-bold
                font-mono
                text-white
              "
            >
              Secure
            </span>

            <span
              className="
                text-[10px] sm:text-xs
                text-gray-300
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Chain of Custody
            </span>
          </div>
        </div>

        {/* =======================================================
            BOTTOM OPERATIONAL MARKER
        ======================================================= */}

        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[#E5CC64]/40" />

          <span
            className="
              text-[8px]
              sm:text-[9px]
              font-mono
              uppercase
              tracking-[0.25em]
              text-[#E5CC64]/70
            "
          >
            African Mineral Operations
          </span>

          <span className="w-8 h-px bg-[#E5CC64]/40" />
        </div>

      </div>
    </section>
  );
}