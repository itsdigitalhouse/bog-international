"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function QualityAssayCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-40">
      {/* =========================================================
          SUBTLE BRAND ACCENTS
      ========================================================= */}

      {/* Left gold line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "120px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 w-[2px] bg-[#E5CC64]"
      />

      {/* Right green line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute right-0 top-0 w-[2px] bg-[#153B16]"
      />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            MAIN CTA
        ======================================================= */}

        <div className="relative mx-auto max-w-6xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#E5CC64]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
              Quality & Assay
            </span>

            <span className="h-px w-10 bg-[#E5CC64]" />
          </motion.div>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-9 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#153B16] sm:text-5xl lg:text-[68px]"
          >
            Confidence is stronger
            <br className="hidden sm:block" />
            when it is backed by{" "}
            <span className="relative inline-block text-[#E5CC64]">
              evidence.
            </span>
          </motion.h2>

          {/* =====================================================
              ANIMATED DIVIDER
          ===================================================== */}

          <div className="mx-auto mt-10 flex items-center justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="h-[2px] bg-[#153B16]"
            />

            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.7,
              }}
              className="mx-3 h-2 w-2 rounded-full bg-[#E5CC64]"
            />

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="h-[2px] bg-[#153B16]"
            />
          </div>

          {/* =====================================================
              SUPPORTING COPY
          ===================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-9 max-w-2xl text-base leading-8 text-black sm:text-lg"
          >
            Independent assay, quality verification, documentation and
            traceability provide a clearer foundation for informed commercial
            engagement.
          </motion.p>

          {/* =====================================================
              CTA BUTTON
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 border border-[#153B16] bg-[#153B16] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#153B16] sm:px-8 sm:py-5"
            >
              <span>Discuss Your Requirements</span>

              <span className="flex h-8 w-8 items-center justify-center border border-white/30 transition-all duration-300 group-hover:border-[#153B16]/30">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM PRINCIPLES
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-24 max-w-6xl border-t border-[#153B16]/15 pt-7 lg:mt-32"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/45">
              BOG International
            </span>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/50">
                Independent Assay
              </span>

              <span className="h-1 w-1 rounded-full bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/50">
                Verification
              </span>

              <span className="h-1 w-1 rounded-full bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/50">
                Traceability
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}