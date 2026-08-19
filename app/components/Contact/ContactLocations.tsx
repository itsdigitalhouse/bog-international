"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactLocations() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        <div className="grid overflow-hidden bg-[#153B16] lg:grid-cols-[1fr_1fr]">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[360px] lg:min-h-[560px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=85')",
              }}
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-[#153B16]/35" />

            {/* Image Label */}
            <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white">
                Our Base
              </span>

              <div className="mt-2 h-px w-10 bg-[#E5CC64]" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E5CC64]">
                Uganda & Global Markets
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[44px]">
              Rooted in Uganda.
              <span className="block text-[#E5CC64]">
                Connected globally.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-[16px] leading-8 text-white">
              Bhatia Ocean Gold International operates from Uganda with a
              focus on connecting mineral supply with qualified buyers and
              commercial partners across international markets.
            </p>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white">
              Our location provides a foundation for regional sourcing while
              our buyer relationships extend beyond local markets.
            </p>

            {/* Location Detail */}
            <div className="mt-9 border-t border-white/15 pt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E5CC64]">
                    Operating Base
                  </span>

                  <p className="mt-2 text-sm font-medium text-white">
                    Uganda
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E5CC64]">
                    Market Focus
                  </span>

                  <p className="mt-2 text-sm font-medium text-white">
                    International Buyers
                  </p>
                </div>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/about"
              className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white transition-colors duration-300 hover:border-[#E5CC64]"
            >
              Learn About BOG International

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}