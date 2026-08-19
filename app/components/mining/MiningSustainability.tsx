"use client";

const sustainabilityPillars = [
  {
    number: "01",
    label: "ENVIRONMENT",
    title: "Responsible Resource Development",
    description:
      "Mining activities are structured around controlled extraction, responsible resource use, and operational practices designed to reduce unnecessary environmental impact.",
    points: [
      "Controlled extraction practices",
      "Responsible resource management",
      "Environmental risk awareness",
    ],
  },
  {
    number: "02",
    label: "SOCIAL",
    title: "Local Economic Participation",
    description:
      "BOG's field operations are designed to support local participation through responsible engagement, operational employment, and structured mineral development.",
    points: [
      "Local workforce participation",
      "Community engagement",
      "Responsible field operations",
    ],
  },
  {
    number: "03",
    label: "GOVERNANCE",
    title: "Compliance & Accountability",
    description:
      "Every stage of mineral development is aligned with documented procedures, verified concessions, responsible sourcing principles, and transparent operational controls.",
    points: [
      "Verified concession framework",
      "Responsible sourcing controls",
      "Operational accountability",
    ],
  },
];

export default function MiningSustainability() {
  return (
    <section 
      aria-label="Sustainability and ESG Framework"
      className="relative w-full overflow-hidden bg-[#F8F9FA] text-[#153B16] border-t border-[#153B16]/10"
    >
      {/* =========================================================
          SUBTLE BACKGROUND GRID & GLOWS
      ========================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(21,59,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,59,22,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#E5CC64]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[450px] rounded-full bg-[#153B16]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">

        {/* =========================================================
            HEADER SECTION (CENTER ALIGNED)
        ========================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">

          <div className="inline-flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#B09630] font-[family-name:var(--font-cinzel)]">
              Responsible Mining Framework
            </span>
            <span className="w-8 h-[2px] bg-[#E5CC64]" />
          </div>

          <h2 className="font-[family-name:var(--font-cinzel)] font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Sustainability
            <span className="block text-[#B09630] mt-1">
              &amp; ESG
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#E5CC64] to-transparent my-6" />

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light text-center">
            Bhatia Ocean Gold International approaches mineral development
            through responsible operational controls, local participation,
            environmental awareness, and transparent governance across the
            mining value chain.
          </p>

        </div>

        {/* =========================================================
            ESG PRINCIPLES (CARDS)
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">

          {sustainabilityPillars.map((item) => (
            <article
              key={item.number}
              className="group relative bg-white border border-[#153B16]/10 p-7 sm:p-9 xl:p-11 min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#E5CC64]/80 hover:shadow-2xl hover:shadow-[#153B16]/10 rounded-sm"
            >
              {/* Dynamic top line gradient */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E5CC64]/40 via-[#E5CC64] to-[#E5CC64]/40 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Number + Label */}
                <div className="flex items-center justify-between pb-5 border-b border-[#153B16]/10">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#B09630] font-bold uppercase">
                    {item.label}
                  </span>

                  <span className="text-xs font-mono font-bold text-[#153B16]/30 group-hover:text-[#153B16]/80 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="pt-6">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl xl:text-2xl font-bold uppercase leading-snug group-hover:text-[#B09630] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm xl:text-base text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Points List */}
              <div className="pt-8 space-y-3.5">
                {item.points.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5CC64] group-hover/item:scale-125 transition-transform" />

                    <div className="flex-1 flex items-center justify-between gap-4 border-b border-[#153B16]/[0.08] pb-2.5">
                      <span className="text-[11px] sm:text-xs xl:text-sm text-[#153B16] font-medium tracking-wide">
                        {point}
                      </span>

                      <span className="text-[9px] font-mono text-gray-400 font-semibold">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

        </div>

        {/* =========================================================
            RESPONSIBLE MINING STATEMENT (BANNER)
        ========================================================== */}
        <div className="mt-12 lg:mt-16 bg-[#153B16] text-white relative overflow-hidden rounded-sm shadow-xl">

          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(229,204,100,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(229,204,100,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          {/* Decorative glowing circles */}
          <div className="absolute -right-28 -top-28 w-96 h-96 rounded-full border border-[#E5CC64]/20 pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full border border-[#E5CC64]/20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#E5CC64]" />
                <span className="text-[9px] font-mono tracking-[0.28em] text-[#E5CC64] uppercase font-semibold">
                  Operational Commitment
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold uppercase leading-tight">
                Responsible Development.
                <span className="text-[#E5CC64]"> Controlled Operations.</span>
              </h3>

              <p className="mt-3.5 text-xs sm:text-sm xl:text-base text-white/70 max-w-3xl leading-relaxed font-light">
                Our approach integrates environmental awareness, social
                responsibility, compliance controls, and operational
                accountability into the mineral development process.
              </p>
            </div>

            <div className="flex lg:flex-col gap-6 lg:gap-4 lg:min-w-[180px] pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10">

              <div>
                <span className="block text-xl xl:text-2xl font-bold font-mono text-[#E5CC64]">
                  ESG
                </span>
                <span className="block text-[8px] xl:text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mt-0.5">
                  Framework
                </span>
              </div>

              <div className="hidden lg:block w-full h-px bg-white/10" />

              <div>
                <span className="block text-xl xl:text-2xl font-bold font-mono text-white">
                  B2B
                </span>
                <span className="block text-[8px] xl:text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mt-0.5">
                  Responsible Supply
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================
            BOTTOM MICRO STATS
        ========================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#153B16]/10 mt-12 pt-8 gap-y-6 gap-x-6 text-center">

          <div>
            <span className="block text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase">
              Environmental
            </span>
            <span className="block mt-1 text-xs sm:text-sm xl:text-base font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wide">
              RESPONSIBLE EXTRACTION
            </span>
          </div>

          <div>
            <span className="block text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase">
              Social
            </span>
            <span className="block mt-1 text-xs sm:text-sm xl:text-base font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wide">
              LOCAL PARTICIPATION
            </span>
          </div>

          <div>
            <span className="block text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase">
              Governance
            </span>
            <span className="block mt-1 text-xs sm:text-sm xl:text-base font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wide">
              OPERATIONAL CONTROL
            </span>
          </div>

          <div>
            <span className="block text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase">
              Supply
            </span>
            <span className="block mt-1 text-xs sm:text-sm xl:text-base font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] tracking-wide">
              RESPONSIBLE SOURCING
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}