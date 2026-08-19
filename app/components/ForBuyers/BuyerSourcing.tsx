"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sourcingCategories = [
  {
    number: "01",
    title: "Gold",
    description:
      "Gold sourcing for qualified buyers with requirements evaluated around product specifications, quantity, destination and transaction structure.",
    href: "/products",
  },
  {
    number: "02",
    title: "Copper & Copper Cathodes",
    description:
      "Copper and copper cathodes supplied according to defined quality requirements, commercial specifications and buyer needs.",
    href: "/products",
  },
  {
    number: "03",
    title: "Other Minerals & Commodities",
    description:
      "Selected minerals and commodities sourced according to availability, specifications, destination and agreed commercial requirements.",
    href: "/products",
  },
];

export default function BuyerSourcing() {
  return (
    <section className="bg-[#F3F3F3] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                What Buyers Can Source
              </span>
            </div>

            <p className="mt-7 max-w-xs text-[15px] leading-7 text-[#153B16]">
              Access to selected precious metals, industrial minerals and
              commodities through a structured sourcing process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-[54px]">
              Selected resources for
              <span className="block">
                international buyers.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#153B16]">
              Our sourcing capabilities are focused on commodities where
              product requirements, quality considerations and transaction
              expectations can be clearly established.
            </p>
          </motion.div>
        </div>

        {/* Sourcing List */}
        <div className="mt-16 border-t border-[#153B16]/15">
          {sourcingCategories.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-[#153B16]/15 py-9 lg:py-10"
            >
              <div className="grid gap-7 lg:grid-cols-[80px_0.9fr_1.2fr_auto] lg:items-center lg:gap-10">

                {/* Number */}
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#153B16]/40">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#153B16] sm:text-3xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-[15px] leading-7 text-[#153B16]">
                  {item.description}
                </p>

                {/* Link */}
                <Link
                  href={item.href}
                  aria-label={`Explore ${item.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#153B16]/20 text-[#153B16] transition-all duration-300 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64]"
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Hover Accent */}
              <div className="mt-8 h-px w-0 bg-[#E5CC64] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/40">
            Product availability varies by specification and requirement
          </span>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#153B16]"
          >
            View All Products

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}