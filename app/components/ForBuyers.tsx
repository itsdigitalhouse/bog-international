"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Search,
  Send,
  Globe2,
} from "lucide-react";

const buyerSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the commodity, specification, quantity and destination relevant to your requirement.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review & Verification",
    description:
      "We review the commercial requirement alongside the relevant documentation and transaction considerations.",
    icon: Search,
  },
  {
    number: "03",
    title: "Proceed With The Offer",
    description:
      "Once the requirement is understood, the enquiry can move toward the appropriate commercial discussion.",
    icon: Send,
  },
];

export default function ForBuyers() {
  return (
    <section
      id="buyers"
      className="relative overflow-hidden bg-white text-[#153B16]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full border border-[#E5CC64]/20" />

      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[280px] w-[280px] rounded-full border border-[#E5CC64]/15" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-[35%] bg-[#F3F3F3]/60" />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">


        {/* =======================================================
            TOP LABEL
        ======================================================== */}

        <div className="flex items-center justify-between border-b border-[#153B16]/10 pb-5">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#153B16]/50 sm:text-[10px]">
              For International Buyers
            </span>

          </div>

          <span className="hidden font-mono text-[8px] tracking-[0.3em] text-[#153B16]/20 sm:block">
            BOG / 06
          </span>

        </div>


        {/* =======================================================
            HERO CONTENT
        ======================================================== */}

        <div className="grid gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:pt-16">

          {/* LEFT */}

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#B79D32]">
              International Commodity Trade
            </span>

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[42px] md:text-[48px] lg:text-[56px]">

              Built for
              <br />

              <span className="text-[#B79D32]">
                International Buyers.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#153B16]/60 sm:text-base sm:leading-8">
              BOG connects qualified international demand with African-origin
              commodity supply through structured sourcing, trading and export
              coordination.
            </p>

          </div>


          {/* RIGHT — STATEMENT */}

          <div className="flex items-end lg:justify-end">

            <div className="max-w-sm border-l border-[#E5CC64] pl-6">

              <Globe2
                size={22}
                strokeWidth={1.2}
                className="mb-8 text-[#B79D32]"
              />

              <p className="font-[family-name:var(--font-cinzel)] text-xl font-medium leading-relaxed text-[#153B16] sm:text-2xl">
                African origin.
                <br />
                International reach.
                <br />
                Structured trade.
              </p>

            </div>

          </div>

        </div>


        {/* =======================================================
            BUYER JOURNEY
        ======================================================== */}

        <div className="mt-16 border-y border-[#153B16]/10">

          {buyerSteps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group grid gap-6 py-8 sm:grid-cols-[70px_260px_1fr_auto] sm:items-center sm:gap-8 ${
                  index !== buyerSteps.length - 1
                    ? "border-b border-[#153B16]/10"
                    : ""
                }`}
              >

                {/* NUMBER */}

                <span className="font-mono text-[9px] tracking-[0.25em] text-[#B79D32]">
                  {step.number}
                </span>


                {/* TITLE */}

                <div className="flex items-center gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#153B16]/10 transition-all duration-300 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64]">

                    <Icon
                      size={16}
                      strokeWidth={1.3}
                      className="text-[#153B16]"
                    />

                  </div>

                  <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-medium text-[#153B16] sm:text-xl">
                    {step.title}
                  </h3>

                </div>


                {/* DESCRIPTION */}

                <p className="max-w-xl text-sm leading-6 text-[#153B16]/50">
                  {step.description}
                </p>


                {/* STEP LINE */}

                <div className="hidden h-px w-10 bg-[#E5CC64] opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100 sm:block" />

              </div>
            );

          })}

        </div>


        {/* =======================================================
            BOTTOM COMMERCIAL MESSAGE
        ======================================================== */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#153B16]/35">
              Start A Commercial Enquiry
            </span>

            <h3 className="mt-3 max-w-2xl font-[family-name:var(--font-cinzel)] text-2xl font-medium leading-tight sm:text-3xl">

              Tell us what you
              <span className="text-[#B79D32]"> are looking for.</span>

            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#153B16]/50">
              Submit your requirement and provide the information needed for
              the next stage of the commercial discussion.
            </p>

          </div>


          {/* CTA */}

          <Link
            href="#offer"
            className="group inline-flex w-fit items-center gap-4 bg-[#153B16] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
          >

            Submit Your Requirement

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </Link>

        </div>


        {/* =======================================================
            FOOT LABEL
        ======================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-[#153B16]/10 pt-5">

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#153B16]/25">
            Sourcing • Trading • Export Coordination
          </span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-[#153B16]/20">
            06 / 07
          </span>

        </div>

      </div>


      {/* GOLD ACCENT */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/70" />

    </section>
  );
}