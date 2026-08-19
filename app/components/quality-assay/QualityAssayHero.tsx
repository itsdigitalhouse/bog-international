"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";

export default function QualityAssayHero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#F3F3F3] lg:min-h-[580px]">
      {/* =========================================================
          BACKGROUND IMAGE
          Temporary Unsplash Asset
          Later replace with local BOG asset
      ========================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-[#F3F3F3]/65" />

        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/95 via-[#F3F3F3]/75 to-[#F3F3F3]/30" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Quality & Assay
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-6xl xl:text-[68px]"
            >
              Verified Quality.
              <br />

              <span className="text-[#E5CC64]">
                Assured Value.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-2xl text-base leading-7 text-[#153B16]/75 sm:text-lg sm:leading-8"
            >
              Every mineral shipment is supported by independent assay,
              documented provenance, and rigorous quality controls — giving
              buyers confidence in the material, its origin, and its declared
              specifications.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                "Independent Assay",
                "Verified Provenance",
                "Documented Quality",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#153B16]">
                    <ShieldCheck
                      size={15}
                      strokeWidth={2}
                      className="text-[#E5CC64]"
                    />
                  </span>

                  <span className="text-sm font-medium text-[#153B16]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — QUALITY VERIFICATION CARD
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-[390px]">

              {/* Decorative corner */}
              <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#E5CC64]/80" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#153B16]/10 bg-white/90 p-7 shadow-[0_25px_80px_rgba(21,59,22,0.12)] backdrop-blur-md">

                {/* Card Header */}
                <div className="flex items-start justify-between border-b border-[#153B16]/10 pb-6">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/50">
                      Quality Control
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#153B16]">
                      Assay Verification
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#153B16]">
                    <ShieldCheck
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#E5CC64]"
                    />
                  </div>
                </div>

                {/* Verification Items */}
                <div className="space-y-6 py-7">

                  {/* Material */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-xs text-[#153B16]/55">
                        Material
                      </span>

                      <span className="text-xs font-semibold text-[#153B16]">
                        Mineral Sample
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#F3F3F3]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full rounded-full bg-[#E5CC64]"
                      />
                    </div>
                  </div>

                  {/* Verification */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-xs text-[#153B16]/55">
                        Verification
                      </span>

                      <span className="text-xs font-semibold text-[#153B16]">
                        Independent
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#F3F3F3]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "96%" }}
                        transition={{ duration: 1, delay: 0.85 }}
                        className="h-full rounded-full bg-[#153B16]"
                      />
                    </div>
                  </div>

                  {/* Documentation */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-xs text-[#153B16]/55">
                        Documentation
                      </span>

                      <span className="text-xs font-semibold text-[#153B16]">
                        Traceable
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#F3F3F3]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full rounded-full bg-[#E5CC64]"
                      />
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between border-t border-[#153B16]/10 pt-5">

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#153B16]/45">
                    BOG International
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />

                    <span className="text-xs font-semibold text-[#153B16]">
                      Verified
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#153B16]/50">
          Explore
        </span>

        <ArrowDown
          size={14}
          strokeWidth={1.5}
          className="text-[#E5CC64]"
        />
      </motion.div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#153B16] via-[#E5CC64] to-transparent" />
    </section>
  );
}