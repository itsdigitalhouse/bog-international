"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ForBuyersCTA() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#E5CC64]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#153B16]">
              Buyer Enquiries
            </span>

            <span className="h-px w-10 bg-[#E5CC64]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-[52px]">
            Let&apos;s discuss your
            <span className="block">
              sourcing requirement.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[#153B16]">
            Share the details of what you are looking to source and our team
            can assess your requirement, understand the opportunity and guide
            you toward the appropriate next step.
          </p>
        </motion.div>

        {/* Enquiry Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 overflow-hidden border border-[#153B16]/15"
        >
          {/* Gold Top Line */}
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#E5CC64]" />

          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Panel Content */}
            <div className="px-7 py-9 sm:px-10 sm:py-11 lg:px-12">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/50">
                Include in your enquiry
              </span>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  "Product",
                  "Quantity",
                  "Specification",
                  "Destination",
                  "Timeline",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#E5CC64]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-[#153B16]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-[#153B16]/10 lg:border-l lg:border-t-0">
              <Link
                href="/request-offer"
                className="group flex min-h-[130px] items-center justify-center gap-4 bg-[#153B16] px-9 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#153B16]/95 lg:min-w-[230px]"
              >
                <span>
                  Request an Offer
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64] group-hover:text-[#153B16]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/40">
            Bhatia Ocean Gold International
          </span>

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/40">
            Uganda • Global Markets
          </span>
        </motion.div>
      </div>
    </section>
  );
}