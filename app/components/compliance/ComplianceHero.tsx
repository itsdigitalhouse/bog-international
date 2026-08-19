"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

export default function ComplianceHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================================================
          TOP GOLD ACCENT
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "150px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-0 h-[3px] bg-[#E5CC64]"
      />

      <div className="mx-auto w-full px-6 pb-20 pt-24 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16 lg:pb-28 lg:pt-32 xl:px-20">

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#153B16]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16] sm:text-xs">
                Compliance & Governance
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#153B16] sm:text-5xl lg:text-[68px]">
              Trust built on{" "}
              <span className="relative inline-block">
                responsible
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#E5CC64]" />
              </span>{" "}
              standards.
            </h1>

            {/* Paragraph */}
            <p className="mt-9 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Our compliance framework is designed to support responsible
              sourcing, transparent relationships and accountable trade across
              the mineral supply chain.
            </p>

            {/* Supporting line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex items-start gap-4"
            >
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#153B16]">
                <CheckCircle2
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#153B16]"
                />
              </div>

              <p className="max-w-lg text-sm leading-6 text-black">
                Compliance is treated as part of the way we operate — not as a
                final checkpoint before a transaction.
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — COMPLIANCE RECORD VISUAL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >

            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -right-4 -top-4 h-28 w-28 border-r border-t border-[#E5CC64]"
            />

            <div className="relative bg-[#153B16] px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12">

              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/15 pb-7">

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                    Compliance Framework
                  </span>

                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Responsible Trade
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center border border-[#E5CC64]">
                  <ShieldCheck
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#E5CC64]"
                  />
                </div>
              </div>

              {/* Framework items */}
              <div className="mt-7 space-y-0">

                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <div className="flex items-center gap-3">
                    <FileCheck2
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#E5CC64]"
                    />

                    <span className="text-sm text-white/75">
                      Due Diligence
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Framework
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <div className="flex items-center gap-3">
                    <FileCheck2
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#E5CC64]"
                    />

                    <span className="text-sm text-white/75">
                      KYC & AML
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Controls
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <div className="flex items-center gap-3">
                    <FileCheck2
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#E5CC64]"
                    />

                    <span className="text-sm text-white/75">
                      Chain of Custody
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Traceability
                  </span>
                </div>

                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-3">
                    <FileCheck2
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#E5CC64]"
                    />

                    <span className="text-sm text-white/75">
                      Responsible Mining
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Standards
                  </span>
                </div>

              </div>

              {/* Bottom status */}
              <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-7">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Governance
                </span>

                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5CC64]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />
                  Accountable
                </span>
              </div>

              {/* Gold bottom edge */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E5CC64]" />
            </div>

            {/* Small decorative arrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-5 -left-5 hidden h-11 w-11 items-center justify-center border border-[#153B16] bg-white lg:flex"
            >
              <ArrowDownRight
                size={18}
                strokeWidth={1.5}
                className="text-[#153B16]"
              />
            </motion.div>

          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM INTRO BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-20 border-t border-[#153B16]/15 pt-7 lg:mt-24"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]/45">
              Transparency • Accountability • Responsibility
            </span>

            <span className="text-xs text-black/50">
              A framework for responsible commercial engagement.
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}