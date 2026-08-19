"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const principles = [
  "Responsible sourcing",
  "Due diligence",
  "KYC & AML",
  "Traceability",
];

export default function ComplianceCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-40">
      {/* =========================================================
          BRAND ACCENTS
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "150px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute left-0 top-0 h-[2px] bg-[#E5CC64]"
      />

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute right-0 top-0 w-[2px] bg-[#153B16]"
      />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            MAIN STATEMENT
        ======================================================= */}

        <div className="grid gap-14 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-24">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#153B16]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
                Compliance
              </span>
            </div>

            <h2 className="mt-9 max-w-5xl text-4xl font-semibold leading-[1.01] tracking-[-0.05em] text-[#153B16] sm:text-5xl lg:text-[70px]">
              Transparency creates{" "}
              <span className="text-[#E5CC64]">
                confidence.
              </span>
            </h2>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <p className="text-base leading-8 text-black sm:text-lg">
              Responsible standards, appropriate controls and transparent
              documentation provide a stronger foundation for long-term
              commercial relationships.
            </p>
          </motion.div>

        </div>

        {/* =======================================================
            GOLD STATEMENT LINE
        ======================================================= */}

        <div className="mt-14 flex items-center gap-4 lg:mt-16">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] bg-[#153B16]"
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="h-2 w-2 rounded-full bg-[#E5CC64]"
          />

        </div>

        {/* =======================================================
            PRINCIPLES + CTA
        ======================================================= */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]/40">
              Built around
            </span>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">

              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center border border-[#E5CC64]">
                    <Check
                      size={12}
                      strokeWidth={1.8}
                      className="text-[#153B16]"
                    />
                  </span>

                  <span className="text-xs font-medium text-black">
                    {principle}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 border border-[#153B16] px-7 py-4 text-sm font-semibold text-[#153B16] transition-all duration-300 hover:bg-[#153B16] hover:text-white sm:px-8 sm:py-5"
            >
              <span>Discuss Compliance Requirements</span>

              <span className="flex h-8 w-8 items-center justify-center border border-[#153B16]/25 transition-all duration-300 group-hover:border-white/30">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM CLOSING LINE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-24 border-t border-[#153B16]/15 pt-7 lg:mt-32"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]/40">
              Responsible Trade
            </span>

            <span className="text-xs text-black/45 sm:text-right">
              Transparency • Accountability • Responsibility
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}