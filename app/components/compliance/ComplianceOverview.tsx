"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Scale,
  UsersRound,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Globe2,
    title: "Responsible Sourcing",
    text: "Understanding the source and surrounding context is an important part of building a responsible mineral supply chain.",
  },
  {
    number: "02",
    icon: Scale,
    title: "Accountable Practice",
    text: "Clear standards and appropriate controls help support transparent and responsible commercial relationships.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Trusted Relationships",
    text: "Strong relationships are built through transparency, appropriate verification and a shared commitment to responsible trade.",
  },
];

export default function ComplianceOverview() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          DECORATIVE ACCENTS
      ========================================================= */}

      <div className="absolute right-0 top-0 h-28 w-[3px] bg-[#E5CC64]" />

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 h-[2px] bg-[#153B16]"
      />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          {/* Section marker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#153B16]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Our Approach
              </span>
            </div>

            <div className="mt-12 hidden lg:block">
              <span className="text-[120px] font-semibold leading-none tracking-[-0.08em] text-[#153B16]/[0.055]">
                02
              </span>
            </div>
          </motion.div>

          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#153B16] sm:text-4xl lg:text-[56px]">
              Responsible trade begins with{" "}
              <span className="text-[#E5CC64]">
                responsible practice.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black sm:text-lg">
              Compliance is integrated into the way we evaluate sources,
              establish commercial relationships and support mineral
              transactions. The objective is to create a clearer framework
              around responsibility, transparency and accountability.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            PRINCIPLES
        ======================================================= */}

        <div className="mt-20 border-t border-[#153B16]/15 lg:mt-28">

          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="grid gap-8 border-b border-[#153B16]/15 py-9 lg:grid-cols-[100px_0.8fr_1.2fr_auto] lg:items-center lg:gap-12 lg:py-10"
              >
                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.25em] text-[#153B16]/35">
                  {item.number}
                </span>

                {/* Title */}
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#153B16]/30">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#153B16]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#153B16] sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-black sm:text-base">
                  {item.text}
                </p>

                {/* Gold marker */}
                <motion.div
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.12,
                  }}
                  className="hidden h-8 w-8 items-center justify-center border border-[#E5CC64] lg:flex"
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#153B16]"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            CLOSING STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/45">
            Responsible sourcing • Transparency • Accountability
          </span>

          <p className="max-w-2xl text-sm leading-6 text-black/65 lg:text-right">
            These principles provide the foundation for the more specific
            compliance controls and governance practices that follow.
          </p>
        </motion.div>

      </div>
    </section>
  );
}