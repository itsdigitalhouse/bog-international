"use client";

const governancePoints = [
  {
    number: "01",
    title: "OECD Due Diligence Framework",
    description:
      "Full compliance with OECD guidelines for mineral sourcing from conflict-affected and high-risk regions to guarantee ethical trade pathways.",
    tag: "Ethical Sourcing",
    code: "OECD-COMPLIANT",
  },
  {
    number: "02",
    title: "Rigorous KYC & AML Vetting",
    description:
      "Mandatory Know Your Customer (KYC) and Anti-Money Laundering (AML) verifications conducted for all global commercial counterparties prior to contract signing.",
    tag: "Legal Security",
    code: "AML-VERIFIED",
  },
  {
    number: "03",
    title: "Full Provenance & Chain of Custody",
    description:
      "Complete document tracking mapping raw commodities from licensed concessions through transit corridors straight to the final port of discharge.",
    tag: "Transparency",
    code: "ORIGIN-MAPPED",
  },
  {
    number: "04",
    title: "Independent Accredited Assay",
    description:
      "Purity certifications and chemical assays executed strictly by independent, state-recognized inspection authorities (SGS, Alex Stewart, Ministry Labs).",
    tag: "Quality Assurance",
    code: "SGS-VERIFIED",
  },
  {
    number: "05",
    title: "ESG & Responsible Mining Standards",
    description:
      "Enforcing strict environmental and social governance standards to prevent labor exploitation and promote safe environmental extraction practices.",
    tag: "Sustainability",
    code: "ESG-AUDITED",
  },
  {
    number: "06",
    title: "Institutional Banking & Escrow Protocols",
    description:
      "Transactions executed strictly through top-tier international banking institutions utilizing secure DLC, SBLC, and escrow settlement structures.",
    tag: "Financial Control",
    code: "BANK-SECURED",
  },
];

const trustStandards = [
  {
    value: "100%",
    label: "Traceable Supply Chains",
  },
  {
    value: "OECD",
    label: "Due Diligence Standards",
  },
  {
    value: "SGS / Ministry",
    label: "Independent Assays",
  },
  {
    value: "CIF / FOB",
    label: "International Trade Contracts",
  },
];

export default function CorporateGovernance() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F3F3] text-[#153B16]">

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="h-px w-full bg-[#E5CC64]" />


      {/* =====================================================
          SUBTLE BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #153B16 1px, transparent 1px),
            linear-gradient(to bottom, #153B16 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="relative w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* LEFT LABEL */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-[#E5CC64]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/45">
                Regulatory & Compliance Framework
              </span>

            </div>

            <p className="mt-5 max-w-xs text-[10px] uppercase leading-5 tracking-[0.15em] text-black">
              Governance structures designed to support transparent,
              documented and responsible international commodity trade.
            </p>

          </div>


          {/* RIGHT HEADING */}

          <div className="lg:pl-8">

            <h2 className="max-w-4xl text-[30px] font-semibold uppercase leading-[1.03] tracking-[-0.025em] sm:text-[38px] lg:text-[46px]">
              <span className="whitespace-nowrap text-[#153B16]">
                Corporate Governance
              </span>

              <br />

              <span className="font-normal text-[#E5CC64]">
                & Compliance
              </span>
            </h2>

          </div>

        </div>


        {/* =================================================
            INTRODUCTION
        ================================================== */}

        <div className="mt-12 border-y border-[#153B16]/10 py-7">

          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">

            <p className="max-w-3xl text-sm leading-7 text-black sm:text-[15px]">
              Operating in international raw mineral trade requires absolute
              legal clarity, verified origin tracking, and strict risk
              management. Bhatia Ocean Gold International enforces
              non-negotiable regulatory standards to ensure secure, seamless
              transactions for global buyers.
            </p>

            <div className="flex items-center gap-3 lg:justify-end">

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/30">
                Governance
              </span>

              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/30">
                Verification
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            GOVERNANCE FRAMEWORK
        ================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">

          {/* =================================================
              LEFT — GOVERNANCE MANDATE
          ================================================== */}

          <div className="relative">

            {/* Offset frame */}

            <div className="absolute -bottom-2 -right-2 h-full w-full border border-[#E5CC64]/70" />


            <div className="relative flex min-h-full flex-col justify-between bg-[#153B16] p-7 text-white sm:p-9 lg:p-10">

              {/* HEADER */}

              <div>

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#E5CC64]">
                    Governance Mandate
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />

                </div>


                {/* TITLE */}

                <h3 className="mt-7 max-w-sm text-2xl font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-[#F3F3F3] sm:text-3xl">

                  Zero Tolerance Policy

                  <br />

                  <span className="font-normal text-[#E5CC64]">
                    For Unverified Supply
                  </span>

                </h3>


                {/* DESCRIPTION */}

                <p className="mt-6 text-sm leading-7 text-white/55">
                  BOG strictly rejects unverified secondary brokers and
                  non-compliant concessions. Every consignment undergoes
                  mandatory government ministry cross-checks, legal export
                  licensing, and independent laboratory testing before
                  movement protocols commence.
                </p>

              </div>


              {/* VERIFICATION STATUS */}

              <div className="mt-10 border-t border-white/10 pt-6">

                <div className="space-y-4">

                  <div className="flex items-center justify-between gap-4">

                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Legal Export Clearances
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#E5CC64]">
                      100% Certified
                    </span>

                  </div>


                  <div className="flex items-center justify-between gap-4">

                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      AML Protocol Status
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#E5CC64]">
                      Strict Enforcement
                    </span>

                  </div>


                  <div className="flex items-center justify-between gap-4">

                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Assay Protocol
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#E5CC64]">
                      State Laboratory
                    </span>

                  </div>

                </div>

              </div>


              {/* FOOTER */}

              <div className="mt-8 border-t border-white/10 pt-5">

                <div className="flex items-center justify-between">

                  <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-white/30">
                    Banking & Trade Legal Standard
                  </span>

                  <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#E5CC64]">
                    Fully Audited
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — COMPLIANCE FRAMEWORK
          ================================================== */}

          <div className="border-t border-[#153B16]/10">

            {governancePoints.map((item, index) => (
              <div
                key={item.number}
                className="group relative border-b border-[#153B16]/10 py-6 transition-all duration-300 sm:py-7"
              >

                {/* Gold hover line */}

                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E5CC64] transition-transform duration-400 group-hover:scale-y-100" />


                <div className="grid gap-5 sm:grid-cols-[55px_1fr_1fr] sm:items-start sm:gap-7">

                  {/* NUMBER */}

                  <div className="flex items-center gap-2">

                    <span className="text-[9px] font-bold tracking-[0.18em] text-[#E5CC64]">
                      {item.number}
                    </span>

                  </div>


                  {/* TITLE */}

                  <div>

                    <div className="mb-2 flex items-center gap-3">

                      <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#153B16]/35">
                        {item.tag}
                      </span>

                    </div>

                    <h4 className="max-w-sm text-sm font-semibold uppercase leading-[1.25] tracking-[0.02em] text-[#153B16] transition-colors duration-300 group-hover:text-[#153B16] sm:text-[15px]">
                      {item.title}
                    </h4>

                  </div>


                  {/* DESCRIPTION */}

                  <div>

                    <p className="text-xs leading-6 text-black sm:text-[13px]">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-[#153B16]/10 pt-3">

                      <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#153B16]/30">
                        Status: Verified
                      </span>

                      <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#153B16]/45 transition-colors group-hover:text-[#E5CC64]">
                        [{item.code}]
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =================================================
            TRUST / FRAMEWORK BAR
        ================================================== */}

        <div className="mt-14 border border-[#153B16]/10 bg-white">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            {trustStandards.map((item, index) => (
              <div
                key={item.label}
                className={`px-6 py-7 text-center sm:px-7 ${
                  index !== trustStandards.length - 1
                    ? "border-b border-[#153B16]/10 sm:border-r lg:border-b-0"
                    : ""
                }`}
              >

                <span className="block text-lg font-semibold tracking-wide text-[#153B16] sm:text-xl">
                  {item.value}
                </span>

                <span className="mt-2 block text-[7px] font-semibold uppercase leading-4 tracking-[0.16em] text-[#153B16]/40">
                  {item.label}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM FRAMEWORK NOTE
        ================================================== */}

        <div className="mt-8 flex flex-col gap-4 border-t border-[#153B16]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/35">
              Regulatory Framework
            </span>

          </div>

          <p className="max-w-xl text-[9px] uppercase leading-5 tracking-[0.1em] text-black sm:text-right">
            Compliance, verification and documentation remain integral to
            BOG&apos;s international commercial process.
          </p>

        </div>

      </div>


      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="h-px w-full bg-[#E5CC64]/70" />

    </section>
  );
}