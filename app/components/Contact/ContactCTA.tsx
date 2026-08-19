"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">

        {/* Gold Accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[2px] bg-[#E5CC64]"
        />

        {/* Main Content */}
        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
              Business Enquiries
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#153B16] sm:text-[40px] lg:text-[46px]">
              Looking for the right
              <span className="block">
                mineral supply partner?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#153B16]">
              Whether you are an established buyer, commercial partner or
              exploring a new sourcing opportunity, our team welcomes
              meaningful business enquiries.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              href="#enquiry"
              className="group inline-flex items-center gap-4 border-b border-[#153B16]/20 pb-3 text-sm font-medium text-[#153B16] transition-colors duration-300 hover:border-[#E5CC64]"
            >
              Send an Enquiry

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#153B16]/15 transition-all duration-300 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64]">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 border-t border-[#153B16]/10 pt-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/40">
              Bhatia Ocean Gold International
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/40">
              Uganda • Global Markets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}