"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDot,
  FileText,
  MapPin,
  PackageCheck,
} from "lucide-react";

const journey = [
  {
    number: "01",
    label: "ORIGIN",
    title: "Source",
    description:
      "Relevant origin information establishes where the material enters the documented supply chain.",
    icon: MapPin,
  },
  {
    number: "02",
    label: "RECORD",
    title: "Documentation",
    description:
      "Supporting records connect material information with the appropriate commercial and quality documentation.",
    icon: FileText,
  },
  {
    number: "03",
    label: "MOVEMENT",
    title: "Transfer",
    description:
      "The documented chain continues as material moves between relevant parties and stages of the transaction.",
    icon: PackageCheck,
  },
];

export default function ChainOfCustody() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          DECORATIVE ELEMENTS
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "130px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-0 h-[2px] bg-[#153B16]"
      />

      <div className="absolute right-0 top-0 h-40 w-[3px] bg-[#E5CC64]" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* Label / Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
                Chain of Custody
              </span>
            </div>

            <span className="mt-12 hidden text-[125px] font-semibold leading-none tracking-[-0.08em] text-[#153B16]/[0.055] lg:block">
              05
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#153B16] sm:text-4xl lg:text-[58px]">
              From origin to transaction,
              <br />
              <span className="text-[#E5CC64]">
                the record remains accountable.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black sm:text-lg">
              Traceability provides a clearer connection between the material,
              its origin, supporting documentation and the stages through
              which it moves. This helps preserve a more transparent record
              throughout the commercial journey.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            JOURNEY VISUAL
        ======================================================= */}

        <div className="relative mt-20 lg:mt-28">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[35px] hidden h-px bg-[#153B16]/15 lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-0 top-[35px] hidden h-[2px] w-full origin-left bg-[#E5CC64] lg:block"
          />

          <div className="grid gap-0 lg:grid-cols-3">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className={`relative pt-0 ${
                    index !== 0
                      ? "border-t border-[#153B16]/15 lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >

                  {/* Node */}
                  <div className="relative z-10 mb-10 flex items-center lg:mb-14 lg:justify-center">

                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#153B16] bg-[#F3F3F3]">
                      <Icon
                        size={23}
                        strokeWidth={1.35}
                        className="text-[#153B16]"
                      />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="px-0 lg:px-10">

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold tracking-[0.28em] text-[#E5CC64]">
                        {item.label}
                      </span>

                      <span className="text-[10px] text-[#153B16]/30">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#153B16] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-black sm:text-base">
                      {item.description}
                    </p>

                  </div>

                  {/* Mobile arrow */}
                  {index < journey.length - 1 && (
                    <div className="mt-8 flex lg:hidden">
                      <ArrowRight
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#E5CC64]"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            ACCOUNTABILITY STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#153B16]/15 pt-8 lg:mt-28"
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div className="flex items-center gap-3">
              <CircleDot
                size={17}
                strokeWidth={1.4}
                className="text-[#E5CC64]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]/50">
                Traceable Supply Chain
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-black lg:justify-self-end lg:text-right">
              Maintaining connected records supports greater clarity around
              provenance, movement and accountability as material progresses
              through the supply chain.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}