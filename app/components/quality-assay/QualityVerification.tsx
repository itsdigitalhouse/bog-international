"use client";

import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

export default function QualityVerification() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          TOP ACCENT
      ========================================================= */}
      <div className="absolute left-0 top-0 h-1 w-32 bg-[#E5CC64]" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            MAIN STORY
        ======================================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* =====================================================
              LEFT — EDITORIAL CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#153B16]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Quality Verification
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 max-w-xl text-3xl font-semibold leading-[1.07] tracking-[-0.035em] text-[#153B16] sm:text-4xl lg:text-[52px]">
              Evidence becomes confidence when it can be{" "}
              <span className="text-[#E5CC64]">
                verified and traced.
              </span>
            </h2>

            {/* Gold divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 h-[2px] bg-[#E5CC64]"
            />

            {/* Paragraph */}
            <p className="mt-7 max-w-lg text-base leading-8 text-black sm:text-lg">
              An assay result provides measurable evidence, but confidence
              comes from the wider record surrounding that result. Provenance,
              supporting quality information and traceability help connect the
              verified material to its commercial journey.
            </p>

            {/* Supporting statement */}
            <div className="mt-10 border-l-2 border-[#153B16] pl-5">
              <p className="text-sm font-medium leading-7 text-black">
                The objective is simple: make the quality information behind
                the material clearer, more traceable and easier to evaluate.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — VERIFICATION RECORD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative"
          >

            {/* Decorative gold frame */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-[#E5CC64]"
            />

            {/* Decorative green frame */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-[#153B16]/30" />

            {/* =================================================
                DOCUMENT
            ================================================= */}

            <div className="relative bg-[#153B16] p-6 sm:p-8 lg:p-10">

              {/* Document top */}
              <div className="flex items-start justify-between border-b border-white/15 pb-7">

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                    Quality Record
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Verification Summary
                  </h3>
                </div>

                {/* Verification mark */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    delay: 0.45,
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5CC64]"
                >
                  <ShieldCheck
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#E5CC64]"
                  />
                </motion.div>
              </div>

              {/* Document content */}
              <div className="mt-8">

                {/* Material */}
                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Material
                  </span>

                  <span className="text-sm font-medium text-white">
                    Verified Material
                  </span>
                </div>

                {/* Provenance */}
                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Provenance
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    Documented
                    <Check
                      size={15}
                      className="text-[#E5CC64]"
                    />
                  </span>
                </div>

                {/* Assay */}
                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Assay
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    Independently Tested
                    <Check
                      size={15}
                      className="text-[#E5CC64]"
                    />
                  </span>
                </div>

                {/* Traceability */}
                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Traceability
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    Supported
                    <Check
                      size={15}
                      className="text-[#E5CC64]"
                    />
                  </span>
                </div>

              </div>

              {/* =================================================
                  DOCUMENT FOOTER
              ================================================= */}

              <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">
                  <FileCheck2
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#E5CC64]"
                  />

                  <span className="text-xs text-white/55">
                    Supporting quality information
                  </span>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5CC64]">
                  BOG International
                </span>

              </div>

              {/* Gold bottom edge */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E5CC64]" />
            </div>

          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM STORY — CONNECTING THE RECORD
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 border-t border-[#153B16]/15 pt-8 lg:mt-28"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-[#153B16]">
                <ChevronRight
                  size={17}
                  className="text-[#E5CC64]"
                />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                From Evidence to Confidence
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-black sm:text-base">
              By connecting assay results with provenance, supporting records
              and traceability, quality information becomes part of a clearer
              and more accountable commercial process.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}