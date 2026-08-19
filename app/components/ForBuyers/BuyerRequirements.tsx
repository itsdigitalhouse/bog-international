"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const requirements = [
  {
    number: "01",
    title: "Product",
    text: "What mineral or commodity are you looking to source?",
  },
  {
    number: "02",
    title: "Quantity",
    text: "What volume or order size do you require?",
  },
  {
    number: "03",
    title: "Specification",
    text: "What grade, purity or quality requirements apply?",
  },
  {
    number: "04",
    title: "Destination",
    text: "Where will the material ultimately be delivered?",
  },
  {
    number: "05",
    title: "Timeline",
    text: "What delivery or transaction timeframe are you targeting?",
  },
];

export default function BuyerRequirements() {
  return (
    <section className="relative overflow-hidden bg-[#153B16] py-24 sm:py-28 lg:py-32">
      {/* Subtle Gold Detail */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full border border-[#E5CC64]/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                Buyer Requirements
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[54px]">
              Tell us what
              <span className="block">
                you need.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-[16px] leading-8 text-white">
              The clearer the initial requirement, the better we can understand
              the opportunity and determine the appropriate next step.
            </p>

            <Link
              href="/request-offer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#E5CC64] px-6 py-3.5 text-sm font-medium text-[#153B16] transition-all duration-300 hover:bg-[#E5CC64]/90"
            >
              Submit Your Requirement

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Right Requirements */}
          <div className="border-t border-white/15">
            {requirements.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[60px_170px_1fr] sm:items-center"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E5CC64]">
                  {item.number}
                </span>

                <h3 className="text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-white">
                  {item.text}
                </p>

                <div className="hidden h-px w-0 bg-[#E5CC64] transition-all duration-500 group-hover:w-12 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-white/10 pt-6"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
            Requirements may vary according to product and transaction
          </span>
        </motion.div>
      </div>
    </section>
  );
}