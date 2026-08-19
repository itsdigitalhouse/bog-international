"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  FileText,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";

const tracePoints = [
  {
    label: "PROVENANCE",
    title: "Source",
    description:
      "Relevant origin and source information provides context around the material being supplied.",
    icon: MapPin,
  },
  {
    label: "QUALITY RECORD",
    title: "Material",
    description:
      "Supporting quality information creates a documented reference for the material and its characteristics.",
    icon: FileText,
  },
  {
    label: "VERIFICATION",
    title: "Assay",
    description:
      "Independent assay information adds measurable evidence to the quality record.",
    icon: ShieldCheck,
  },
  {
    label: "TRACEABILITY",
    title: "Shipment",
    description:
      "The supporting record remains connected as material moves through its commercial journey.",
    icon: Truck,
  },
];

export default function DocumentationTraceability() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          DECORATIVE GOLD EDGE
      ========================================================= */}
      <div className="absolute right-0 top-0 h-40 w-[3px] bg-[#E5CC64]" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#E5CC64]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Documentation & Traceability
              </span>
            </div>

            <h2 className="mt-8 max-w-2xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#153B16] sm:text-4xl lg:text-[54px]">
              What is verified should also be{" "}
              <span className="text-[#E5CC64]">
                traceable.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="max-w-xl text-base leading-8 text-black sm:text-lg">
              Quality information becomes more useful when it remains connected
              to the material throughout its journey. Documentation,
              provenance and traceability help create a clearer record from
              source through to shipment.
            </p>
          </motion.div>

        </div>

        {/* =======================================================
            LARGE TRACEABILITY VISUAL
        ======================================================= */}

        <div className="relative mt-20 lg:mt-28">

          {/* Large background word */}
          <div className="pointer-events-none absolute -top-16 left-0 hidden overflow-hidden lg:block">
            <span className="select-none text-[150px] font-semibold leading-none tracking-[-0.08em] text-[#153B16]/[0.035]">
              TRACE
            </span>
          </div>

          {/* Main trace line */}
          <div className="absolute left-[27px] top-0 bottom-0 hidden w-px bg-[#153B16]/15 lg:block" />

          {/* Animated gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-[27px] top-0 hidden h-full w-[2px] origin-top bg-[#E5CC64] lg:block"
          />

          <div className="space-y-0">

            {tracePoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="relative grid gap-8 border-t border-[#153B16]/10 py-10 lg:grid-cols-[110px_0.8fr_1.2fr] lg:gap-12 lg:py-12"
                >

                  {/* =================================================
                      NUMBER / MARKER
                  ================================================= */}

                  <div className="relative hidden lg:block">

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#153B16] bg-white"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#153B16]"
                      />
                    </motion.div>

                  </div>

                  {/* Mobile Icon */}
                  <div className="flex items-center gap-4 lg:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#153B16]">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#153B16]"
                      />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.3em] text-[#E5CC64]">
                      {point.label}
                    </span>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <div>
                    <span className="hidden text-[10px] font-semibold tracking-[0.3em] text-[#E5CC64] lg:block">
                      {point.label}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#153B16] sm:text-3xl">
                      {point.title}
                    </h3>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="flex items-start justify-between gap-8">
                    <p className="max-w-xl text-sm leading-7 text-black sm:text-base">
                      {point.description}
                    </p>

                    <ArrowDownRight
                      size={20}
                      strokeWidth={1.2}
                      className="mt-1 hidden shrink-0 text-[#E5CC64] sm:block"
                    />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            FINAL STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="mt-20 grid gap-8 bg-[#153B16] px-7 py-10 sm:px-10 lg:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-14 lg:py-12"
        >

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
              From Source to Shipment
            </span>

            <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              The record travels with the material.
            </h3>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-12">
            <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              By keeping provenance, quality information, assay evidence and
              shipment records connected, traceability provides a clearer
              foundation for transparent and accountable trade.
            </p>
          </div>

          {/* Gold bottom line */}
          <div className="absolute" />

        </motion.div>

      </div>
    </section>
  );
}