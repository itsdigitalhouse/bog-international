"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  SearchCheck,
  Globe2,
} from "lucide-react";

const compliancePillars = [
  {
    number: "01",
    title: "KYC / KYB",
    description:
      "Structured verification of customers, counterparties and business relationships.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "AML / CFT",
    description:
      "Compliance-focused procedures supporting responsible international business transactions.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Source & Ownership",
    description:
      "Verification of commodity source, ownership and relevant supporting documentation.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Export & Regulatory",
    description:
      "Relevant export, regulatory and transaction documentation throughout the supply process.",
    icon: Globe2,
  },
];

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="relative overflow-hidden bg-[#F3F3F3] text-[#153B16]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#153B16 1px, transparent 1px),
              linear-gradient(90deg, #153B16 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full border border-[#E5CC64]/30" />

      <div className="pointer-events-none absolute -right-20 top-20 h-[300px] w-[300px] rounded-full border border-[#E5CC64]/20" />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">


        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="flex items-center justify-between border-b border-[#153B16]/15 pb-5">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#E5CC64] sm:w-14" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black sm:text-[10px]">
              Compliance & Responsible Sourcing
            </span>

          </div>

          <span className="hidden font-mono text-[8px] tracking-[0.3em] text-[#153B16]/25 sm:block">
            BOG / 05
          </span>

        </div>


        {/* =======================================================
            INTRODUCTION
        ======================================================== */}

        <div className="grid gap-8 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#153B16]/40">
              International Business Framework
            </span>

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-cinzel)] text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[42px] md:text-[46px] lg:text-[52px]">

              Responsible trade
              <br />

              <span className="text-[#B79D32]">
                starts with clarity.
              </span>

            </h2>

          </div>


          <div className="lg:pb-1">

            {/* Updated to Solid Black */}
            <p className="max-w-xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              BOG's compliance framework supports proper international
              business procedures through verification, documentation,
              regulatory awareness and responsible sourcing.
            </p>

          </div>

        </div>


        {/* =======================================================
            FRAMEWORK VISUAL
        ======================================================== */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">


          {/* =====================================================
              LEFT — CORE PRINCIPLE
          ====================================================== */}

          <div className="relative min-h-[430px] overflow-hidden bg-[#153B16] p-8 text-[#F3F3F3] sm:p-10">

            {/* Decorative circles */}

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#E5CC64]/20" />

            <div className="absolute -right-10 top-10 h-36 w-36 rounded-full border border-[#E5CC64]/15" />

            <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-[#E5CC64]" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              <div className="flex items-center justify-between">

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E5CC64]">
                  Core Principle
                </span>

                <ShieldCheck
                  size={21}
                  strokeWidth={1.3}
                  className="text-[#E5CC64]"
                />

              </div>


              <div className="mt-20">

                <h3 className="max-w-md font-[family-name:var(--font-cinzel)] text-2xl font-medium leading-tight sm:text-3xl">

                  Responsible sourcing
                  <br />

                  <span className="text-[#E5CC64]">
                    through transparency.
                  </span>

                </h3>

                {/* Dark card text updated to White */}
                <p className="mt-5 max-w-md text-sm leading-7 text-white">
                  Source verification, ownership verification and appropriate
                  documentation form part of BOG's approach to responsible
                  international commodity trade.
                </p>

              </div>


              <div className="mt-12 flex items-center gap-3 border-t border-[#E5CC64]/20 pt-5">

                <div className="flex h-8 w-8 items-center justify-center border border-[#E5CC64]/30">

                  <FileCheck2
                    size={14}
                    strokeWidth={1.4}
                    className="text-[#E5CC64]"
                  />

                </div>

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3]/80">
                  Documentation-led approach
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — REGULATORY PILLARS
          ====================================================== */}

          <div className="border-t border-[#153B16]/15">

            {compliancePillars.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-[#153B16]/15 py-7 sm:grid-cols-[55px_190px_1fr] sm:items-center sm:gap-7"
                >

                  {/* Number */}

                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#B79D32]">
                    {item.number}
                  </span>


                  {/* Icon + Heading */}

                  <div className="flex items-center gap-3">

                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#B79D32] transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-medium text-[#153B16] sm:text-xl">
                      {item.title}
                    </h3>

                  </div>


                  {/* Description (Updated to Black) */}

                  <p className="max-w-xl text-sm leading-6 text-black">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>


        {/* =======================================================
            PRINCIPLES STRIP
        ======================================================== */}

        <div className="mt-10 border-y border-[#153B16]/15">

          <div className="grid sm:grid-cols-3">

            <div className="border-b border-[#153B16]/15 px-5 py-6 sm:border-b-0 sm:border-r">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
                Principle 01
              </span>

              <h4 className="mt-2 text-sm font-semibold">
                Transparency
              </h4>

              {/* Updated to Solid Black */}
              <p className="mt-2 text-xs leading-5 text-black">
                Clear information and appropriate documentation support
                professional business relationships.
              </p>

            </div>


            <div className="border-b border-[#153B16]/15 px-5 py-6 sm:border-b-0 sm:border-r">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
                Principle 02
              </span>

              <h4 className="mt-2 text-sm font-semibold">
                Verification
              </h4>

              {/* Updated to Solid Black */}
              <p className="mt-2 text-xs leading-5 text-black">
                Source, ownership and counterparty information are considered
                within the compliance process.
              </p>

            </div>


            <div className="px-5 py-6">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
                Principle 03
              </span>

              <h4 className="mt-2 text-sm font-semibold">
                Responsibility
              </h4>

              {/* Updated to Solid Black */}
              <p className="mt-2 text-xs leading-5 text-black">
                Responsible sourcing and regulatory awareness remain central
                to international commodity activity.
              </p>

            </div>

          </div>

        </div>


        {/* =======================================================
            CTA
        ======================================================== */}

        <div className="mt-10 flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#153B16]/40">
              Compliance Framework
            </span>

            {/* Updated to Solid Black */}
            <p className="mt-2 text-sm text-black">
              Explore our approach to compliance and responsible sourcing.
            </p>

          </div>


          <Link
            href="/compliance"
            className="group inline-flex w-fit items-center gap-3 bg-[#153B16] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-all duration-300 hover:bg-[#E5CC64] hover:text-[#153B16]"
          >
            Explore Compliance

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </Link>

        </div>


        {/* =======================================================
            FOOT LABEL
        ======================================================== */}

        <div className="mt-8 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#153B16]/25">
            Responsible Sourcing • Compliance • Documentation
          </span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-[#153B16]/25">
            05 / 06
          </span>

        </div>

      </div>


      {/* =========================================================
          GOLD ACCENT
      ========================================================== */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#E5CC64]/60" />

    </section>
  );
}