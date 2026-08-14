"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#153B16] border-t-2 border-[#E5CC64]">

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
          backgroundSize: "72px 72px",
        }}
      />

      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#E5CC64]/20" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-[#E5CC64]/20" />

      <div className="pointer-events-none absolute -left-32 bottom-[-220px] h-[420px] w-[420px] rounded-full border border-[#153B16]/5" />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        <div className="mx-auto max-w-6xl">

          {/* =================================================
              TOP LABEL
          ================================================== */}

          <div className="flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#E5CC64]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
              Partner With BOG International
            </span>

            <span className="h-px w-10 bg-[#E5CC64]" />

          </div>


          {/* =================================================
              HEADING
          ================================================== */}

          <div className="mt-8 text-center">

            <h2 className="mx-auto max-w-5xl text-[30px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-[#153B16] sm:text-[40px] lg:text-[52px]">

              Ready to Initiate a

              <br />

              <span className="font-normal text-[#E5CC64]">
                Mineral Sourcing Contract?
              </span>

            </h2>

            <div className="mx-auto mt-7 h-[2px] w-16 bg-[#E5CC64]" />

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div className="mx-auto mt-8 max-w-2xl text-center">

            <p className="text-sm leading-7 text-black sm:text-[15px]">
              Connect directly with our commercial desk for institutional
              inquiries, contract specifications, and verified export
              allocations across Gold Doré, Copper Cathodes, and Bulk
              Minerals.
            </p>

          </div>


          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* PRIMARY */}

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 bg-[#153B16] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E5CC64] transition-all duration-300 hover:bg-[#1d4a1e] sm:w-auto"
            >
              <span>
                Submit Commercial Inquiry
              </span>

              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>


            {/* SECONDARY */}

            <a
              href="/bhatia-ocean-gold-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 border border-[#153B16] bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#153B16] transition-all duration-300 hover:border-[#E5CC64] hover:bg-[#E5CC64]/10 sm:w-auto"
            >
              <span>
                Download Corporate Profile
              </span>

              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

          </div>


          {/* =================================================
              COMMERCIAL TRUST STRIP
          ================================================== */}

          <div className="mx-auto mt-14 max-w-5xl border-y border-[#153B16]/10 py-6">

            <div className="grid gap-5 sm:grid-cols-3 sm:divide-x sm:divide-[#153B16]/10">

              {/* ITEM 01 */}

              <div className="text-center sm:px-6 sm:first:pl-0">

                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16]">
                  Direct
                </span>

                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-black">
                  Mining Allocations
                </p>

              </div>


              {/* ITEM 02 */}

              <div className="text-center sm:px-6">

                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16]">
                  Verified
                </span>

                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-black">
                  Independent Assays
                </p>

              </div>


              {/* ITEM 03 */}

              <div className="text-center sm:px-6">

                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16]">
                  Secured
                </span>

                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-black">
                  Banking & Contracts
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              CLOSING STATEMENT
          ================================================== */}

          <div className="mt-8 text-center">

            <p className="text-[8px] uppercase tracking-[0.22em] text-black">
              Institutional Mineral Trade • Structured Commercial Engagement
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="h-px w-full bg-[#E5CC64]/70" />

    </section>
  );
}