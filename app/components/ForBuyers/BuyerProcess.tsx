"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Enquiry",
    text: "Share your product, quantity, specification and destination requirements.",
  },
  {
    number: "02",
    title: "Review",
    text: "We assess the requirement and identify the appropriate sourcing pathway.",
  },
  {
    number: "03",
    title: "Verification",
    text: "Relevant product, quality, provenance and compliance considerations are reviewed.",
  },
  {
    number: "04",
    title: "Commercial Terms",
    text: "Key commercial expectations and transaction requirements are aligned.",
  },
  {
    number: "05",
    title: "Documentation",
    text: "Required documentation is coordinated according to the agreed transaction.",
  },
  {
    number: "06",
    title: "Execution",
    text: "The transaction progresses toward fulfilment and delivery according to agreed terms.",
  },
];

export default function BuyerProcess() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Section Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Transaction Process
              </span>
            </div>

            <h2 className="mt-7 max-w-2xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-[54px]">
              From enquiry
              <span className="block">
                to execution.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-[16px] leading-8 text-[#153B16]"
          >
            A clear transaction pathway helps both sides understand what
            happens next, while allowing requirements to be assessed at the
            appropriate stage.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-[#153B16]/15 lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-[#E5CC64]"
            />
          </div>

          <div className="grid gap-0 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="relative border-l border-[#153B16]/15 py-8 pl-7 first:border-l-0 lg:border-l-0 lg:px-5 lg:py-0 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Mobile Line */}
                {index !== processSteps.length - 1 && (
                  <span className="absolute bottom-0 left-[-1px] h-full w-px bg-[#E5CC64] lg:hidden" />
                )}

                {/* Number */}
                <div className="relative z-10 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E5CC64] bg-white text-[11px] font-semibold tracking-[0.1em] text-[#153B16]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-lg font-medium text-[#153B16]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[190px] text-[14px] leading-6 text-[#153B16]">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 border-t border-[#153B16]/10 pt-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/50">
              Structured from first contact to fulfilment
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/50">
              Requirements may vary by transaction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}