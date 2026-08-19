"use client";

const pillars = [
  {
    number: "01",
    title: "Mining & Exploration Field Operations",
    description:
      "Direct involvement in mineral concessions, technical assessment, mine development, and raw extraction across primary African mineral corridors.",
  },
  {
    number: "02",
    title: "Gold Dorè & Bullion Procurement",
    description:
      "Responsible sourcing of gold doré bars and unrefined gold bullion, coordinated with government-certified assayers and international refiners.",
  },
  {
    number: "03",
    title: "Copper Cathodes & Industrial Minerals",
    description:
      "Bulk commercial supply of Grade-A Copper Cathodes (99.99%) and industrial grade copper derivatives for global manufacturing buyers.",
  },
  {
    number: "04",
    title: "Export Logistics & Customs Execution",
    description:
      "Complete handling of export taxes, customs clearance, secure transit security, vaulting, and international air/sea cargo movement.",
  },
  {
    number: "05",
    title: "Quality Control & Independent Assay",
    description:
      "Rigorous purity and mass verification in coordination with accredited inspection authorities (SGS/Alex Stewart/Ministry Labs).",
  },
  {
    number: "06",
    title: "International Compliance & Governance",
    description:
      "Adherence to OECD due diligence guidelines for conflict-free supply chains, transparent banking protocols, and international trade law.",
  },
];

export default function CorePillars() {
  return (
    <section className="relative w-full overflow-hidden bg-[#153B16] text-[#F3F3F3]">

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5CC64 1px, transparent 1px),
            linear-gradient(to bottom, #E5CC64 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large atmospheric circle */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#E5CC64]/10" />

      <div className="pointer-events-none absolute -right-20 top-40 h-[280px] w-[280px] rounded-full border border-[#E5CC64]/10" />

      {/* =====================================================
          TOP BORDER
      ====================================================== */}

      <div className="relative h-px w-full bg-[#E5CC64]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          {/* LEFT LABEL */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-[#E5CC64]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                Operational Pillars
              </span>

            </div>

            <p className="mt-5 max-w-xs text-[10px] uppercase leading-5 tracking-[0.16em] text-white/80">
              End-to-end commercial capabilities across sourcing, verification,
              logistics and international trade.
            </p>

          </div>


          {/* RIGHT HEADING */}

          <div className="lg:pl-8">

            <h2 className="max-w-4xl text-[34px] font-semibold uppercase leading-[1.08] tracking-[-0.025em] sm:text-[42px] lg:text-[52px]">

              <span className="text-[#F3F3F3]">
                Core Commercial
              </span>

              <br />

              <span className="font-normal text-[#E5CC64]">
                Capabilities
              </span>

            </h2>

          </div>

        </div>


        {/* =================================================
            INTRO PARAGRAPH
        ================================================== */}

        <div className="mt-12 grid border-t border-white/10 pt-8 lg:grid-cols-[1fr_0.65fr] lg:gap-20">

          <p className="max-w-3xl text-sm leading-7 text-white/90 sm:text-[15px]">
            Bhatia Ocean Gold International maintains end-to-end operational
            control over the mineral supply chain. By managing extraction
            protocols, field inspection, assay accuracy, and customs logistics
            directly, we eliminate operational risk and ensure seamless
            delivery for global industrial institutions.
          </p>

          <div className="hidden lg:block">

            <div className="flex items-center justify-end gap-3 text-[8px] uppercase tracking-[0.22em] text-white/60">

              <span>Source</span>

              <span className="h-px w-12 bg-[#E5CC64]/40" />

              <span>Field</span>

              <span className="h-px w-12 bg-[#E5CC64]/40" />

              <span>Market</span>

            </div>

          </div>

        </div>


        {/* =================================================
            PILLARS
        ================================================== */}

        <div className="mt-14 border-t border-white/10">

          {pillars.map((item) => (
            <div
              key={item.number}
              className="group relative border-b border-white/10"
            >

              {/* Hover background */}

              <div className="absolute inset-0 origin-left scale-x-0 bg-[#1B421D] transition-transform duration-500 ease-out group-hover:scale-x-100" />


              {/* Gold active line */}

              <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E5CC64] transition-transform duration-500 group-hover:scale-y-100" />


              {/* ROW */}

              <div className="relative grid gap-5 px-1 py-7 sm:px-3 sm:py-8 lg:grid-cols-[90px_0.9fr_1.25fr_70px] lg:items-center lg:gap-8">

                {/* NUMBER */}

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E5CC64]">
                    {item.number}
                  </span>

                  <span className="hidden h-px w-8 bg-[#E5CC64]/30 lg:block" />

                </div>


                {/* TITLE */}

                <div>

                  <h3 className="max-w-md text-sm font-semibold uppercase leading-[1.25] tracking-[0.025em] text-[#F3F3F3] transition-colors duration-300 group-hover:text-[#E5CC64] sm:text-base lg:text-[17px]">
                    {item.title}
                  </h3>

                </div>


                {/* DESCRIPTION */}

                <div>

                  <p className="max-w-xl text-xs leading-6 text-white/80 transition-colors duration-300 group-hover:text-white sm:text-[13px]">
                    {item.description}
                  </p>

                </div>


                {/* WATERMARK */}

                <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 lg:block">

                  <span className="select-none text-[62px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] transition-all duration-500 group-hover:text-[#E5CC64]/10">
                    {item.number}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

          <div>

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E5CC64]">
              01
            </span>

            <p className="mt-2 text-xs uppercase tracking-[0.08em] text-white/80">
              Mineral Sourcing
            </p>

          </div>


          <div className="sm:border-l sm:border-white/10 sm:pl-8">

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E5CC64]">
              02
            </span>

            <p className="mt-2 text-xs uppercase tracking-[0.08em] text-white/80">
              Commercial Execution
            </p>

          </div>


          <div className="sm:border-l sm:border-white/10 sm:pl-8">

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E5CC64]">
              03
            </span>

            <p className="mt-2 text-xs uppercase tracking-[0.08em] text-white/80">
              International Delivery
            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BORDER
      ====================================================== */}

      <div className="relative h-px w-full bg-[#E5CC64]/70" />

    </section>
  );
}