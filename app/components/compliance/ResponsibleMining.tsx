"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Leaf,
  Scale,
  Users,
} from "lucide-react";

const responsibilityAreas = [
  {
    number: "01",
    title: "Environmental Responsibility",
    text: "Responsible mineral activity requires awareness of environmental risks and appropriate consideration of how sourcing and operations may affect surrounding environments.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "People & Communities",
    text: "Responsible practice considers the people, communities and wider social context connected to mineral supply chains.",
    icon: Users,
  },
  {
    number: "03",
    title: "Governance & Accountability",
    text: "Clear governance, documented processes and responsible business conduct support greater accountability across commercial relationships.",
    icon: Scale,
  },
];

export default function ResponsibleMining() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      {/* =========================================================
          TOP ACCENTS
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "150px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="absolute left-0 top-0 h-[2px] bg-[#E5CC64]"
      />

      <div className="absolute right-0 top-0 h-32 w-[2px] bg-[#153B16]" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            MAIN EDITORIAL INTRO
        ======================================================= */}

        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">

          {/* =====================================================
              LARGE STATEMENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#153B16]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
                Responsible Mining
              </span>
            </div>

            <h2 className="mt-9 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#153B16] sm:text-5xl lg:text-[70px]">
              Value from minerals.
              <br />
              <span className="text-[#E5CC64]">
                Responsibility at every level.
              </span>
            </h2>
          </motion.div>

          {/* =====================================================
              SIDE COPY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="border-l-2 border-[#E5CC64] pl-6">
              <p className="text-base leading-8 text-black sm:text-lg">
                Responsible mining is not defined by extraction alone. It
                requires consideration of environmental, social and governance
                factors that influence the integrity and long-term value of
                the mineral supply chain.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Globe2
                size={17}
                strokeWidth={1.4}
                className="text-[#153B16]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/50">
                Responsible Supply Chain
              </span>
            </div>
          </motion.div>

        </div>

        {/* =======================================================
            LARGE VISUAL FIELD
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative mt-20 min-h-[230px] overflow-hidden bg-[#153B16] sm:min-h-[280px] lg:mt-28 lg:min-h-[330px]"
        >
          {/* Large background word */}
          <div className="pointer-events-none absolute -bottom-10 left-5 select-none sm:left-10 lg:left-14">
            <span className="text-[100px] font-semibold leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[150px] lg:text-[190px]">
              RESPONSIBLE
            </span>
          </div>

          {/* Gold vertical accent */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-8 top-0 w-[2px] origin-top bg-[#E5CC64] sm:left-12 lg:left-16"
          />

          {/* Center message */}
          <div className="relative flex h-full min-h-[230px] items-center px-12 py-12 sm:min-h-[280px] sm:px-20 lg:min-h-[330px] lg:px-28">

            <div className="max-w-4xl">

              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]"
              >
                Beyond Compliance
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-5 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl"
              >
                Responsible practice strengthens the connection between
                mineral value, commercial integrity and long-term impact.
              </motion.p>

            </div>

          </div>

          {/* Corner mark */}
          <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center border border-[#E5CC64] sm:bottom-10 sm:right-10">
            <ArrowUpRight
              size={17}
              strokeWidth={1.4}
              className="text-[#E5CC64]"
            />
          </div>
        </motion.div>

        {/* =======================================================
            RESPONSIBILITY AREAS
        ======================================================= */}

        <div className="mt-20 border-t border-[#153B16]/15 lg:mt-28">

          <div className="grid lg:grid-cols-3">

            {responsibilityAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className={`group py-10 lg:px-9 lg:py-12 ${
                    index !== 0
                      ? "border-t border-[#153B16]/15 lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >

                  {/* Number + icon */}
                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-semibold tracking-[0.28em] text-[#153B16]/35">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-[#E5CC64] transition-transform duration-300 group-hover:rotate-3">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#153B16]"
                      />
                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="mt-9 max-w-sm text-xl font-semibold leading-tight tracking-[-0.025em] text-[#153B16] sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-sm text-sm leading-7 text-black sm:text-base">
                    {item.text}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "38px" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="mt-7 h-[2px] bg-[#E5CC64]"
                  />

                </motion.article>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            FINAL NOTE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#153B16]/15 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/45">
            Environment • People • Governance
          </span>

          <p className="max-w-xl text-sm leading-6 text-black/60 sm:text-right">
            A responsible approach helps create stronger foundations for
            sustainable mineral trade and long-term commercial relationships.
          </p>
        </motion.div>

      </div>
    </section>
  );
}