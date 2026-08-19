"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const trustPoints = [
  {
    number: "01",
    title: "Quality & Assay",
    text: "Product quality is supported through appropriate assay and verification processes.",
    href: "/quality-assay",
  },
  {
    number: "02",
    title: "Provenance",
    text: "Clear origin and traceability considerations form part of the transaction framework.",
    href: "/compliance",
  },
  {
    number: "03",
    title: "Compliance",
    text: "KYC, AML and relevant documentation requirements are considered throughout the process.",
    href: "/compliance",
  },
  {
    number: "04",
    title: "Documentation",
    text: "Transaction documentation is coordinated according to the agreed commercial structure.",
    href: "/compliance",
  },
];

export default function BuyerTrust() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Buyer Confidence
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#153B16] sm:text-[40px] lg:text-[46px]">
                Confidence built through
                <span className="block">
                    verification and transparency.
                </span>
            </h2>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#153B16]">
              A structured transaction requires more than product availability.
              Quality, provenance, compliance and documentation all contribute
              to buyer confidence.
            </p>
          </motion.div>
        </div>

        {/* Trust Grid */}
        <div className="mt-20 grid border-y border-[#153B16]/15 md:grid-cols-2">
          {trustPoints.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className={`group relative p-7 sm:p-9 lg:p-11 ${
                index % 2 === 0
                  ? "md:border-r md:border-[#153B16]/15"
                  : ""
              } ${
                index < 2
                  ? "md:border-b md:border-[#153B16]/15"
                  : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#E5CC64]">
                  {item.number}
                </span>

                <Link
                  href={item.href}
                  aria-label={`Explore ${item.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#153B16]/15 text-[#153B16] transition-all duration-300 group-hover:border-[#E5CC64] group-hover:bg-[#E5CC64]"
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] text-[#153B16]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#153B16]">
                {item.text}
              </p>

              {/* Gold Accent */}
              <div className="mt-8 h-px w-8 bg-[#E5CC64] transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="max-w-md text-[9px] font-semibold uppercase tracking-[0.2em] text-[#153B16]/50">
            Explore the frameworks supporting quality and responsible
            transactions.
          </span>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/quality-assay"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#153B16]"
            >
              Quality & Assay

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/compliance"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#153B16]"
            >
              Compliance

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}