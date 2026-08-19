"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Clear Requirements",
    text: "We first understand the product, quantity, specification and destination.",
  },
  {
    number: "02",
    title: "Verified Process",
    text: "Relevant quality, provenance and compliance requirements are considered.",
  },
  {
    number: "03",
    title: "Structured Execution",
    text: "Commercial expectations are aligned before the transaction progresses.",
  },
];

export default function BuyerApproach() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24 sm:py-28 lg:py-32">
      {/* Temporary Unsplash Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* 35% Image Visibility */}
      <div className="absolute inset-0 bg-[#F3F3F3]/[0.65]" />

      {/* Soft Green Tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/90 via-[#F3F3F3]/70 to-[#F3F3F3]/60" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Our Approach
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-[54px]">
              Built around clarity,
              <span className="block">
                not complexity.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#153B16]">
              Every buyer relationship starts with understanding the
              requirement and establishing the right framework for execution.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid border-y border-[#153B16]/15 lg:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative border-b border-[#153B16]/15 px-1 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#153B16]/50">
                  {item.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#E5CC64]" />
              </div>

              <h3 className="mt-7 text-xl font-medium text-[#153B16] sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#153B16]">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E5CC64] transition-all duration-500 group-hover:w-full lg:left-8 lg:right-8 lg:w-0" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/55">
            Buyer-first coordination
          </span>

          <Link
            href="/compliance"
            className="group inline-flex items-center gap-2 text-xs font-medium text-[#153B16]"
          >
            Our Compliance Framework

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}