"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Fingerprint,
  SearchCheck,
  UserRoundCheck,
} from "lucide-react";

const controls = [
  {
    number: "01",
    title: "Identify",
    text: "Establishing the identity and relevant details of counterparties before entering into commercial relationships.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Verify",
    text: "Reviewing appropriate information to support confidence in the legitimacy and nature of the relationship.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Monitor",
    text: "Maintaining appropriate awareness throughout the relationship as circumstances and requirements evolve.",
    icon: UserRoundCheck,
  },
];

export default function KYCAML() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* =========================================================
          BRAND ACCENTS
      ========================================================= */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-0 h-[2px] bg-[#E5CC64]"
      />

      <div className="absolute right-0 top-0 h-32 w-[2px] bg-[#153B16]" />

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* =======================================================
            INTRO / EDITORIAL AREA
        ======================================================= */}

        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">

          {/* =====================================================
              LEFT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#153B16]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
                KYC & AML
              </span>
            </div>

            <h2 className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#153B16] sm:text-5xl lg:text-[62px]">
              Know who we{" "}
              <span className="text-[#E5CC64]">
                work with.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-black sm:text-lg">
              Responsible commercial relationships begin with appropriate
              identification and review. Our KYC and AML approach supports
              transparency by helping establish who we are engaging with and
              the nature of the relationship.
            </p>

            {/* Small principle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex items-center gap-4"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-[#E5CC64]">
                <Check
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#153B16]"
                />
              </span>

              <span className="text-xs font-medium text-black">
                Transparency starts with knowing the relationship.
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — INSTITUTIONAL RECORD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >

            {/* Outer gold frame */}
            <div className="absolute -right-4 -top-4 h-28 w-28 border-r border-t border-[#E5CC64]" />

            <div className="relative border border-[#153B16]/15 bg-[#F3F3F3]">

              {/* Record header */}
              <div className="flex items-center justify-between border-b border-[#153B16]/10 px-6 py-5 sm:px-8">

                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#153B16]/45">
                    Relationship Review
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#153B16]">
                    Counterparty Record
                  </h3>
                </div>

                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center border border-[#E5CC64] bg-white"
                >
                  <UserRoundCheck
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#153B16]"
                  />
                </motion.div>
              </div>

              {/* Record fields */}
              <div className="px-6 py-3 sm:px-8">

                <div className="border-b border-[#153B16]/10 py-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                    Identity
                  </span>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#153B16]">
                      Counterparty identification
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#153B16]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />
                      Reviewed
                    </span>
                  </div>
                </div>

                <div className="border-b border-[#153B16]/10 py-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                    Verification
                  </span>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#153B16]">
                      Supporting information
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#153B16]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />
                      Checked
                    </span>
                  </div>
                </div>

                <div className="py-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                    Screening
                  </span>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#153B16]">
                      Appropriate AML controls
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#153B16]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />
                      Applied
                    </span>
                  </div>
                </div>

              </div>

              {/* Record footer */}
              <div className="border-t border-[#153B16]/10 bg-white px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/40">
                    KYC / AML
                  </span>

                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#153B16]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#153B16]">
                      <Check
                        size={11}
                        strokeWidth={2}
                        className="text-white"
                      />
                    </span>

                    Control framework
                  </span>

                </div>
              </div>

            </div>

            {/* Decorative arrow */}
            <motion.div
              initial={{ opacity: 0, x: -8, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -bottom-5 -left-5 hidden h-11 w-11 items-center justify-center border border-[#153B16] bg-white lg:flex"
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="text-[#153B16]"
              />
            </motion.div>

          </motion.div>
        </div>

        {/* =======================================================
            THREE CONTROL PRINCIPLES
        ======================================================= */}

        <div className="mt-24 border-t border-[#153B16]/15 lg:mt-32">

          <div className="grid lg:grid-cols-3">

            {controls.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className={`group py-9 lg:px-8 lg:py-10 ${
                    index !== 0
                      ? "border-t border-[#153B16]/15 lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">

                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#153B16]/35">
                      {item.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#E5CC64] transition-transform duration-300 group-hover:scale-110"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#153B16]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-black">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}