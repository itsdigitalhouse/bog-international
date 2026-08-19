"use client";

import { motion } from "framer-motion";

const qualityStages = [
  {
    number: "01",
    label: "SOURCE",
    title: "It begins with the material.",
    text: "Quality starts with understanding the material itself — its identity, characteristics, origin and supporting source information.",
  },
  {
    number: "02",
    label: "VERIFY",
    title: "Evidence establishes confidence.",
    text: "Independent assay and quality verification provide objective evidence of composition and declared specifications.",
  },
  {
    number: "03",
    label: "DOCUMENT",
    title: "The record completes the story.",
    text: "Relevant documentation, provenance records and traceability help maintain a clear record from source through to shipment.",
  },
];

export default function QualityOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      {/* Green vertical accent */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "180px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 w-px bg-[#153B16]"
      />

      {/* Gold accent */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "90px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-0 w-[3px] bg-[#E5CC64]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#E5CC64]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#153B16]">
                Our Quality Approach
              </span>
            </div>

            <div className="mt-8 hidden lg:block">
              <span className="text-[110px] font-semibold leading-none tracking-[-0.08em] text-[#153B16]/[0.06]">
                01
              </span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#153B16] sm:text-4xl lg:text-[52px]">
              Confidence begins long before a shipment leaves its source.
            </h2>

            <div className="mt-8 h-[2px] w-16 bg-[#E5CC64]" />

            <p className="mt-7 max-w-3xl text-base leading-8 text-black sm:text-lg">
              At BOG International, quality is approached as a process rather
              than a single inspection point. Material is assessed,
              independently verified and supported by documentation that helps
              establish what the buyer is receiving and where it comes from.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div className="relative mt-24 lg:mt-32">

          {/* Desktop Connecting Line */}
          <div className="absolute left-[7%] right-[7%] top-7 hidden h-px bg-[#153B16]/25 lg:block" />

          <div className="grid lg:grid-cols-3">

            {qualityStages.map((stage, index) => (
              <motion.article
                key={stage.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative px-0 lg:px-8"
              >
                {/* Mobile separator */}
                {index !== 0 && (
                  <div className="mb-12 mt-10 h-px w-full bg-[#153B16]/15 lg:hidden" />
                )}

                {/* Number */}
                <div className="relative z-10 flex items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#153B16",
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex h-14 w-14 cursor-default items-center justify-center rounded-full border-2 border-[#153B16] bg-white"
                  >
                    <span className="text-sm font-bold text-[#153B16] transition-colors duration-300">
                      {stage.number}
                    </span>
                  </motion.div>

                  {/* Gold dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.15,
                    }}
                    className="ml-3 h-2.5 w-2.5 rounded-full bg-[#E5CC64]"
                  />
                </div>

                {/* Stage content */}
                <div className="mt-8">
                  <span className="text-[10px] font-bold tracking-[0.32em] text-[#E5CC64]">
                    {stage.label}
                  </span>

                  <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-[#153B16]">
                    {stage.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] leading-7 text-black">
                    {stage.text}
                  </p>
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "48px" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                  }}
                  className="mt-7 h-[2px] bg-[#E5CC64]"
                />
              </motion.article>
            ))}

          </div>
        </div>

        {/* =====================================================
            CLOSING STORY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t-2 border-[#153B16] pt-7 lg:mt-32"
        >
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#E5CC64]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#153B16]">
                From Source to Shipment
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-black sm:text-base">
              Each stage adds another layer of evidence to the material,
              creating a clearer and more dependable foundation for
              international buyers and long-term commercial relationships.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}