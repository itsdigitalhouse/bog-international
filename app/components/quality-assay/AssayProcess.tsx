"use client";

import { motion } from "framer-motion";

const assayStages = [
  {
    number: "01",
    title: "Sample",
    description:
      "Representative material provides the basis for meaningful assessment and laboratory analysis.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Independent testing examines the material to establish measurable characteristics and composition.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Results are considered against declared specifications and supporting quality information.",
  },
];

export default function AssayProcess() {
  return (
    <section className="relative overflow-hidden bg-[#153B16] text-white">
      {/* =========================================================
          DECORATIVE TECHNICAL ELEMENTS
      ========================================================= */}

      {/* Gold vertical measurement line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-[8%] top-0 hidden h-48 w-px origin-top bg-[#E5CC64] lg:block"
      />

      {/* Subtle technical circle */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#E5CC64]/10 lg:block" />

      <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[#E5CC64]/10 lg:block" />

      {/* Small gold point */}
      <div className="pointer-events-none absolute right-[18%] top-[28%] hidden h-2 w-2 rounded-full bg-[#E5CC64] lg:block" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative w-full px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-20">

        {/* =======================================================
            INTRO / MAIN STORY
        ======================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* Left — Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#E5CC64]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                Assay & Verification
              </span>
            </div>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/55">
              Independent analysis creates measurable evidence behind the
              material being supplied.
            </p>
          </motion.div>

          {/* Right — Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[56px]">
              From material to{" "}
              <span className="text-[#E5CC64]">
                measurable evidence.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Independent assay provides objective evidence of material
              composition and declared specifications, giving buyers a clearer
              basis for evaluation and commercial decision-making.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            TECHNICAL ASSAY VISUAL
        ======================================================= */}

        <div className="relative mt-20 lg:mt-28">

          {/* Horizontal gold line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-[#E5CC64]/30 lg:block" />

          <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

            {/* ===================================================
                LEFT — ASSAY MARKER
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative max-w-md border-l border-[#E5CC64]/40 pl-6 sm:pl-8">

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                  Quality Evidence
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  The material is tested.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Testing moves the conversation from assumption to measurable
                  information — creating a stronger basis for evaluating
                  material quality.
                </p>

                {/* Gold marker */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "64px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-7 h-[2px] bg-[#E5CC64]"
                />
              </div>
            </motion.div>

            {/* ===================================================
                CENTER — ASSAY SYMBOL
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto flex h-32 w-32 items-center justify-center"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#E5CC64]/30" />

              {/* Inner ring */}
              <div className="absolute inset-4 rounded-full border border-[#E5CC64]/60" />

              {/* Core */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#E5CC64]">
                <span className="h-3 w-3 rounded-full bg-[#153B16]" />
              </div>

              {/* Crosshair */}
              <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#E5CC64]/60" />
              <span className="absolute bottom-0 left-1/2 h-4 w-px -translate-x-1/2 bg-[#E5CC64]/60" />
              <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E5CC64]/60" />
              <span className="absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E5CC64]/60" />
            </motion.div>

            {/* ===================================================
                RIGHT — EVIDENCE
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative lg:text-right"
            >
              <div className="ml-auto max-w-md border-r border-[#E5CC64]/40 pr-6 sm:pr-8">

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                  Verified Information
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  The results tell the story.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Analytical results provide measurable information that can
                  be considered alongside declared specifications and quality
                  documentation.
                </p>

                {/* Gold marker */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "64px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="mt-7 ml-auto h-[2px] bg-[#E5CC64]"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* =======================================================
            ASSAY STAGES
        ======================================================= */}

        <div className="mt-24 border-t border-white/10 lg:mt-32">

          <div className="grid lg:grid-cols-3">

            {assayStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className={`
                  relative py-9
                  lg:px-8 lg:py-10
                  ${
                    index !== 0
                      ? "border-t border-white/10 lg:border-l lg:border-t-0"
                      : ""
                  }
                `}
              >

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#E5CC64]">
                    {stage.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />
                </div>

                <h4 className="mt-5 text-xl font-semibold capitalize text-white">
                  {stage.title}
                </h4>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                  {stage.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

        {/* =======================================================
            CLOSING STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 border-t border-[#E5CC64]/30 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
            Evidence before expectation
          </span>

          <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-right">
            Assay transforms material characteristics into documented evidence
            that supports informed commercial decisions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}