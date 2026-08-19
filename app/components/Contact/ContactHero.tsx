"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[68vh] overflow-hidden bg-[#F3F3F3]">
      {/* Temporary Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* 35% Image Visibility */}
      <div className="absolute inset-0 bg-[#F3F3F3]/[0.65]" />

      {/* Content Protection */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/95 via-[#F3F3F3]/75 to-[#F3F3F3]/50" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-6 pb-16 pt-28 sm:px-10 lg:px-12 lg:pb-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E5CC64]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#153B16]">
                Contact Us
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-[#153B16] sm:text-5xl lg:text-[58px]">
              Let&apos;s Start a
              <span className="block">
                Conversation
              </span>
            </h1>
          </motion.div>

          {/* Supporting Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="lg:border-l lg:border-[#153B16]/15 lg:pl-9"
          >
            <p className="max-w-md text-[16px] leading-8 text-[#153B16]">
              Whether you are looking to source minerals, explore a business
              opportunity or discuss an international trade requirement, our
              team is ready to hear from you.
            </p>

            <Link
              href="#enquiry"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#153B16]"
            >
              Send an Enquiry

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Meta */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#153B16]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/50">
            Bhatia Ocean Gold International
          </span>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5CC64]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#153B16]/50">
              Uganda • Global Markets
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-20 right-6 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#153B16]/50 [writing-mode:vertical-rl]">
            Explore
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1.5}
            className="text-[#E5CC64]"
          />
        </div>
      </motion.div>
    </section>
  );
}