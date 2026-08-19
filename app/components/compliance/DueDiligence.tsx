"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileSearch,
  Globe2,
  Scale,
  ShieldAlert,
} from "lucide-react";

const diligenceSteps = [
  {
    number: "01",
    label: "SOURCE",
    title: "Understand the origin",
    text: "Relevant information about the source and origin of material provides the starting point for responsible due diligence.",
    icon: Globe2,
  },
  {
    number: "02",
    label: "ASSESS",
    title: "Identify relevant risks",
    text: "Potential sourcing, regulatory and commercial risks are considered as part of the wider evaluation process.",
    icon: ShieldAlert,
  },
  {
    number: "03",
    label: "VERIFY",
    title: "Review the evidence",
    text: "Available information and supporting documentation are reviewed to help establish a clearer picture of the material and relationship.",
    icon: FileSearch,
  },
  {
    number: "04",
    label: "RESPOND",
    title: "Apply appropriate controls",
    text: "Where relevant, appropriate controls and ongoing review help maintain responsible practices throughout the relationship.",
    icon: Scale,
  },
];

export default function DueDiligence() {
  return (
    <section className="relative overflow-hidden bg-[#153B16] py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          DECORATIVE GOLD ACCENTS
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "140px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="absolute left-0 top-0 h-[3px] bg-[#E5CC64]"
      />

      <div className="absolute right-0 top-0 h-48 w-[2px] bg-[#E5CC64]/70" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E5CC64]">
                Due Diligence
              </span>
            </div>

            <div className="mt-12 hidden lg:block">
              <span className="text-[130px] font-semibold leading-none tracking-[-0.08em] text-white/[0.035]">
                03
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-[58px]">
              Know the source.
              <br />
              <span className="text-[#E5CC64]">
                Understand the risk.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Responsible sourcing begins with understanding the origin of
              material, the parties involved and the risks that may exist
              across the supply chain. Our due diligence approach provides a
              structured basis for that assessment.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            FRAMEWORK
        ======================================================= */}

        <div className="relative mt-20 lg:mt-28">

          {/* Vertical gold evidence line */}
          <div className="absolute left-[27px] top-0 bottom-0 hidden w-px bg-white/10 lg:block" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] top-0 hidden h-full w-[2px] origin-top bg-[#E5CC64] lg:block"
          />

          <div className="space-y-0">

            {diligenceSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="relative grid gap-8 border-t border-white/10 py-10 lg:grid-cols-[100px_0.75fr_1.25fr] lg:items-center lg:gap-12 lg:py-12"
                >

                  {/* =================================================
                      MARKER
                  ================================================= */}

                  <div className="hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#E5CC64] bg-[#153B16]"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#E5CC64]"
                      />
                    </motion.div>
                  </div>

                  {/* Mobile marker */}
                  <div className="flex items-center gap-4 lg:hidden">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5CC64]">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#E5CC64]"
                      />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.3em] text-[#E5CC64]">
                      {step.label}
                    </span>
                  </div>

                  {/* =================================================
                      STEP TITLE
                  ================================================= */}

                  <div>
                    <span className="hidden text-[10px] font-semibold tracking-[0.3em] text-[#E5CC64] lg:block">
                      {step.label}
                    </span>

                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-sm font-medium text-white/30">
                        {step.number}
                      </span>

                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="flex items-start justify-between gap-8">
                    <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                      {step.text}
                    </p>

                    <ArrowRight
                      size={19}
                      strokeWidth={1.3}
                      className="mt-1 hidden shrink-0 text-[#E5CC64] sm:block"
                    />
                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            FRAMEWORK NOTE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/10 pt-8 lg:mt-20"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-[#E5CC64]">
                <Check
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#E5CC64]"
                />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                Structured Due Diligence
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/45 lg:text-right">
              Our approach is informed by recognised responsible sourcing
              principles, including the OECD Due Diligence framework.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}