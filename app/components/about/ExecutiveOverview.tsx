"use client";

const operatingPrinciples = [
  {
    number: "01",
    title: "Traceability & Integrity",
    description:
      "All commodities carry verifiable provenance documentation.",
  },
  {
    number: "02",
    title: "Assay Accuracy",
    description:
      "Purity certifications are conducted through accredited laboratory processes.",
  },
  {
    number: "03",
    title: "Strict Compliance",
    description:
      "Mandatory KYC/AML verification is applied prior to contract execution.",
  },
];

const operatingCapabilities = [
  {
    number: "01",
    title: "Direct Mine & Concession Access",
    description:
      "Direct engagement with licensed mining zones and verified sourcing channels.",
  },
  {
    number: "02",
    title: "End-to-End Export Handling",
    description:
      "Coordination of customs documentation, transit security and export logistics.",
  },
];

export default function ExecutiveOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F3F3] text-[#153B16]">
      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="h-px w-full bg-[#E5CC64]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">

          {/* LEFT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#E5CC64]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Commercial Positioning
              </span>

            </div>


            <h2 className="max-w-4xl text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[36px] lg:text-[46px]">

              <span className="text-[#153B16]">
                Structured Commodity Trade
              </span>

              <br />

              <span className="font-normal text-[#E5CC64]">
                & Field Coordination
              </span>

            </h2>

          </div>


          {/* RIGHT */}

          <div className="lg:pl-8">

            <p className="max-w-xl text-sm leading-7 text-black sm:text-[15px]">
              Bhatia Ocean Gold International was established to address key
              operational risks in raw mineral sourcing. By reducing
              unnecessary intermediary layers, BOG connects international
              buyers with verified sourcing and refining channels.
            </p>

          </div>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* =================================================
              LEFT — OPERATIONAL APPROACH
          ================================================== */}

          <div>

            <div className="max-w-3xl">

              <p className="text-sm leading-7 text-black sm:text-[15px]">
                Our team coordinates ground inspection, weight and purity
                assays, legal export licensing, and international shipping
                protocols including CIF and FOB structures. Every transaction
                is organized around defined commercial and documentation
                requirements to support clarity and accountability.
              </p>

            </div>


            {/* CAPABILITY ROWS */}

            <div className="mt-10 border-t border-[#153B16]/10">

              {operatingCapabilities.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-[#153B16]/10 py-6 sm:grid-cols-[60px_0.8fr_1.2fr] sm:items-center"
                >

                  {/* NUMBER */}

                  <div className="text-[9px] font-semibold tracking-[0.2em] text-[#E5CC64]">
                    {item.number}
                  </div>


                  {/* TITLE */}

                  <div>

                    <h3 className="text-sm font-semibold uppercase tracking-[0.04em] text-[#153B16]">
                      {item.title}
                    </h3>

                  </div>


                  {/* DESCRIPTION */}

                  <div>

                    <p className="text-xs leading-6 text-black/80">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* =================================================
              RIGHT — OPERATING PRINCIPLES
          ================================================== */}

          <div className="relative">

            {/* subtle frame */}

            <div className="absolute -right-2 -top-2 h-full w-full border border-[#E5CC64]/50" />


            <div className="relative bg-[#153B16] px-7 py-8 sm:px-9 sm:py-10">

              {/* LABEL */}

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div>

                  <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                    BOG Standards
                  </span>

                  <h3 className="mt-3 text-xl font-semibold uppercase tracking-wide text-[#F3F3F3] sm:text-2xl">
                    Operating Principles
                  </h3>

                </div>


                <span className="text-[9px] font-semibold tracking-[0.2em] text-white/20">
                  03
                </span>

              </div>


              {/* PRINCIPLES */}

              <div className="mt-2">

                {operatingPrinciples.map((item, index) => (
                  <div
                    key={item.number}
                    className={`py-6 ${
                      index !== operatingPrinciples.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >

                    <div className="flex items-start gap-4">

                      {/* NUMBER */}

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#E5CC64]/60 text-[8px] font-bold text-[#E5CC64]">
                        {item.number}
                      </div>


                      {/* CONTENT */}

                      <div>

                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F3F3F3]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text-white/70">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM POSITIONING STRIP
        ====================================================== */}

        <div className="mt-16 border-y border-[#153B16]/10 py-6">

          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-[#153B16]/10">

            <div className="sm:px-6 sm:first:pl-0">

              <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-black/50">
                Approach
              </span>

              <p className="mt-2 text-sm font-semibold text-[#153B16]">
                Structured Trade
              </p>

            </div>


            <div className="sm:px-6">

              <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-black/50">
                Coordination
              </span>

              <p className="mt-2 text-sm font-semibold text-[#153B16]">
                Field To Export
              </p>

            </div>


            <div className="sm:px-6">

              <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-black/50">
                Framework
              </span>

              <p className="mt-2 text-sm font-semibold text-[#153B16]">
                International B2B
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}