"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ForBuyersHero() {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-[#F3F3F3]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/for-buyers/mining-buyer.jpg')",
        }}
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-[#F3F3F3]/[0.88]" />

      {/* Soft Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/95 via-[#F3F3F3]/80 to-[#F3F3F3]/45" />

      {/* Decorative Gold Line */}
      <div className="absolute right-0 top-0 hidden h-full w-[1px] bg-[#E5CC64]/50 lg:block" />

      <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                For Buyers
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#153B16] sm:text-[44px] lg:text-[48px]">
                <span className="block">Connecting Global Buyers</span>
                <span className="block">With Verified Mineral</span>
                <span className="block">Supply</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#153B16]/70 sm:text-lg">
              Bhatia Ocean Gold International works with qualified buyers
              seeking reliable access to gold, copper and selected minerals,
              supported by structured sourcing, verification and documentation.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/request-offer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#153B16] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#153B16]/90"
              >
                Request an Offer

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-full border border-[#153B16]/20 px-7 py-4 text-sm font-medium text-[#153B16] transition-all duration-300 hover:border-[#E5CC64] hover:bg-[#E5CC64]/10"
              >
                Explore Products

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative lg:pl-10"
          >
            <div className="border-l-2 border-[#E5CC64] pl-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#153B16]">
                Buyer Focus
              </span>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#153B16]/65">
                From initial enquiry to transaction execution, our approach is
                built around clear requirements, appropriate verification and
                transparent coordination.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#153B16]/10 pt-6">
                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#153B16]/45">
                    Supply
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[#153B16]">
                    Selected Minerals
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#153B16]/45">
                    Markets
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[#153B16]">
                    International
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Meta */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#153B16]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/45">
            Bhatia Ocean Gold International
          </span>

          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/45 sm:block">
            Uganda • Global Markets
          </span>
        </div>
      </div>
    </section>
  );
}