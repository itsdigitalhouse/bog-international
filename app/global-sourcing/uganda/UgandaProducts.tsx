"use client";

import React, { useState } from "react";

interface CategoryItem {
  id: string;
  number: string;
  title: string;
  group: "MINERALS & NATURAL RESOURCES" | "AGRICULTURAL & NATURAL PRODUCTS";
  groupCategoryTag: string;
  description: string;
  linkHref?: string;
  ctaText?: string;
}

export default function UgandaProducts() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: CategoryItem[] = [
    // GROUP 01: MINERALS & NATURAL RESOURCES
    {
      id: "gold",
      number: "01",
      title: "GOLD",
      group: "MINERALS & NATURAL RESOURCES",
      groupCategoryTag: "Minerals & Natural Resources",
      description:
        "Gold sourcing opportunities through the Uganda operation, subject to origin, availability, quality, specifications and applicable requirements.",
      linkHref: "/mining/gold",
      ctaText: "Explore Gold Sourcing",
    },
    {
      id: "copper",
      number: "02",
      title: "COPPER",
      group: "MINERALS & NATURAL RESOURCES",
      groupCategoryTag: "Minerals & Natural Resources",
      description:
        "Copper and related mineral sourcing opportunities from Uganda, subject to product specifications, availability and commercial requirements.",
      linkHref: "/mining/copper",
      ctaText: "View Copper Sourcing",
    },

    // GROUP 02: AGRICULTURAL & NATURAL PRODUCTS
    {
      id: "vanilla",
      number: "03",
      title: "VANILLA",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Agricultural & Natural Products",
      description:
        "Uganda-origin vanilla and related agricultural sourcing opportunities, subject to availability and required specifications.",
      ctaText: "Inquire About Vanilla",
    },
    {
      id: "coffee",
      number: "04",
      title: "COFFEE",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Agricultural & Natural Products",
      description:
        "Coffee sourcing opportunities from Uganda for international buyers, subject to origin, quality, quantity and specifications.",
      linkHref: "/our-products/coffee",
      ctaText: "Explore Coffee Sourcing",
    },
    {
      id: "grains",
      number: "05",
      title: "GRAINS",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Agricultural & Natural Products",
      description:
        "Selected grain commodities sourced according to buyer requirements and available supply.",
      ctaText: "Inquire About Grains",
    },
    {
      id: "beans",
      number: "06",
      title: "BEANS",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Agricultural & Natural Products",
      description:
        "Bean and related agricultural commodities available according to sourcing requirements and market availability.",
      ctaText: "Inquire About Beans",
    },
    {
      id: "agricultural-products",
      number: "07",
      title: "AGRICULTURAL PRODUCTS",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Agricultural & Natural Products",
      description:
        "Additional agricultural commodities sourced according to buyer requirements, availability and applicable specifications.",
      ctaText: "Request Agro Information",
    },
    {
      id: "other-commodities",
      number: "08",
      title: "OTHER NATURAL-RESOURCE & AGRICULTURAL COMMODITIES",
      group: "AGRICULTURAL & NATURAL PRODUCTS",
      groupCategoryTag: "Natural Resources & Agriculture",
      description:
        "Additional sourcing opportunities may be considered based on availability, origin, specifications and applicable commercial requirements.",
      ctaText: "Submit Custom Requirement",
    },
  ];

  const mineralCategories = categories.filter(
    (c) => c.group === "MINERALS & NATURAL RESOURCES"
  );
  const agroCategories = categories.filter(
    (c) => c.group === "AGRICULTURAL & NATURAL PRODUCTS"
  );

  return (
    <section
      id="uganda-products"
      className="bg-[#F3F3F3] text-[#153B16] relative border-b border-[#153B16]/10 overflow-hidden py-16 lg:py-24"
    >
      {/* Editorial Structural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="max-w-[1400px] h-full mx-auto grid grid-cols-12 px-6 sm:px-12 border-x border-[#153B16]/10">
          <div className="col-span-12 lg:col-span-4 border-r border-[#153B16]/10 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* EYEBROW & SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#153B16]/15 pb-4 mb-12 text-[11px] uppercase tracking-[0.25em] font-[family-name:var(--font-cinzel)] text-[#153B16]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E5CC64] inline-block"></span>
            <span className="font-bold text-[#153B16]">
              03 — UGANDA SOURCING CATEGORIES
            </span>
          </div>
          <span className="hidden sm:inline tracking-[0.2em] text-[#153B16]/60">
            COMMODITY CATALOGUE
          </span>
        </div>

        {/* MAIN EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Title Single Line Format */}
          <div className="lg:col-span-4 lg:sticky lg:top-12 space-y-6 pr-0 lg:pr-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#153B16]/60 font-[family-name:var(--font-cinzel)] block mb-1">
                BHATIA OCEAN GOLD (BOG INTERNATIONAL)
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#153B16] font-[family-name:var(--font-cinzel)] leading-tight uppercase">
                <span className="relative inline-block pb-1">
                  What We Source
                  <span className="absolute bottom-0 left-0 w-16 h-[2.5px] bg-[#E5CC64]"></span>
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#153B16]/80 leading-relaxed font-sans max-w-sm">
              Our Uganda-based operation covers mineral, agricultural and other
              natural-resource commodities, with sourcing opportunities
              determined by product availability, specifications, quality,
              quantity and logistics.
            </p>

            {/* Contextual Supporting Image */}
            <div className="pt-2 hidden lg:block">
              <div className="relative w-full h-[200px] border border-[#153B16]/20 bg-[#153B16] overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Uganda Trade & Sourcing Landscape"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153B16] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[9px] uppercase tracking-widest text-[#E5CC64] font-[family-name:var(--font-cinzel)]">
                  <span>COMMODITY INDEX</span>
                  <span>01 — 08</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Structured Institutional Category List */}
          <div className="lg:col-span-8 space-y-12">
            {/* GROUP 01: MINERALS & NATURAL RESOURCES */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-[#153B16] pb-2">
                <span className="w-2.5 h-2.5 bg-[#E5CC64]"></span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#153B16] font-[family-name:var(--font-cinzel)]">
                  GROUP 01 — MINERALS & NATURAL RESOURCES
                </h3>
              </div>

              <div className="divide-y divide-[#153B16]/15 border-b border-[#153B16]/15">
                {mineralCategories.map((cat) => (
                  <CategoryRow
                    key={cat.id}
                    category={cat}
                    isActive={activeCategory === cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                  />
                ))}
              </div>
            </div>

            {/* GROUP 02: AGRICULTURAL & NATURAL PRODUCTS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-[#153B16] pb-2">
                <span className="w-2.5 h-2.5 bg-[#E5CC64]"></span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#153B16] font-[family-name:var(--font-cinzel)]">
                  GROUP 02 — AGRICULTURAL & NATURAL PRODUCTS
                </h3>
              </div>

              <div className="divide-y divide-[#153B16]/15 border-b border-[#153B16]/15">
                {agroCategories.map((cat) => (
                  <CategoryRow
                    key={cat.id}
                    category={cat}
                    isActive={activeCategory === cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                  />
                ))}
              </div>
            </div>

            {/* PRODUCT AVAILABILITY NOTE */}
            <div className="bg-[#153B16]/5 border-l-2 border-[#E5CC64] p-4 text-[11px] text-[#153B16]/80 font-sans leading-relaxed">
              <span className="font-bold text-[#153B16] uppercase font-[family-name:var(--font-cinzel)] tracking-wider block mb-0.5">
                COMMERCIAL STATEMENT ON AVAILABILITY:
              </span>
              Product availability, origin, quality, specifications, quantity,
              pricing and logistics may vary according to the specific sourcing
              requirement.
            </div>
          </div>
        </div>

        {/* SECTION FOOTER / INQUIRY CTA TRANSITION */}
        <div className="mt-16 pt-8 border-t border-[#153B16]/20 bg-white border border-[#153B16]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5CC64] bg-[#153B16] px-2 py-0.5 font-[family-name:var(--font-cinzel)]">
              CUSTOM SOURCING ASSESSMENT
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#153B16] font-[family-name:var(--font-cinzel)]">
              Looking for a specific product from Uganda?
            </h4>
            <p className="text-xs text-[#153B16]/75 font-sans">
              Tell us your product requirements and our team can assess the
              appropriate sourcing opportunity.
            </p>
          </div>

          <a
            href="#sourcing-inquiry"
            className="group relative inline-flex items-center justify-center bg-[#153B16] text-[#F3F3F3] font-bold px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:bg-[#1f5221] shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              REQUEST A SOURCING INQUIRY
              <span className="w-1.5 h-1.5 bg-[#E5CC64] transition-transform duration-300 group-hover:scale-150"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* SUB-COMPONENT: Individual Category Row */
function CategoryRow({
  category,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  category: CategoryItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`py-5 sm:py-6 transition-all duration-300 relative group ${
        isActive ? "bg-white/60 px-4 -mx-4" : ""
      }`}
    >
      {/* Left Active Gold Line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#E5CC64] transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        {/* Number & Title */}
        <div className="md:col-span-5 flex items-baseline gap-4">
          <span className="text-xs font-mono font-bold text-[#E5CC64] transition-transform duration-300 group-hover:translate-x-1">
            {category.number}
          </span>
          <div>
            <h4 className="text-lg sm:text-xl font-black font-[family-name:var(--font-cinzel)] tracking-wider text-[#153B16] transition-colors duration-300">
              {category.title}
            </h4>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#153B16]/50 font-bold font-[family-name:var(--font-cinzel)] block mt-0.5">
              {category.groupCategoryTag}
            </span>
          </div>
        </div>

        {/* Description & Action Link */}
        <div className="md:col-span-7 space-y-2.5">
          <p className="text-xs sm:text-sm text-[#153B16]/80 font-sans leading-relaxed">
            {category.description}
          </p>

          {/* Action Link / Anchor */}
          <div className="pt-1">
            {category.linkHref ? (
              <a
                href={category.linkHref}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-[#153B16] hover:text-[#153B16]/70 transition-colors"
              >
                <span>{category.ctaText}</span>
                <span className="text-[#E5CC64] font-bold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <a
                href="#sourcing-inquiry"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-cinzel)] text-[#153B16]/70 hover:text-[#153B16] transition-colors"
              >
                <span>{category.ctaText}</span>
                <span className="text-[#E5CC64] font-bold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}