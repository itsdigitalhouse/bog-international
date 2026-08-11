"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  tagline: string;
  title: string;
  description: string;
  bgGradient: string;
  stats: { label: string; value: string }[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

const originalSlides: Slide[] = [
  {
    id: 1,
    tagline: "GLOBAL MINING & SOURCING",
    title: "Where We Operate & Mine Pure Minerals",
    description: "Bhatia Ocean Gold operates across prime mining concessions in Africa and Asia, executing responsible, high-purity gold and copper extraction under strict environmental compliance.",
    bgGradient: "from-[#0a1f0b] via-[#153B16] to-[#0d280e]",
    stats: [
      { label: "Active Concessions", value: "12+" },
      { label: "Eco Compliance", value: "100%" },
      { label: "Annual Capacity", value: "25+ MT" },
    ],
    primaryCta: { text: "Our Mining Sites", href: "/mining" },
    secondaryCta: { text: "Learn How We Operate", href: "/about" },
  },
  {
    id: 2,
    tagline: "ASSAY & REFINING EXCELLENCE",
    title: "How We Ensure 999.9 Fine Gold Purity",
    description: "From raw dorê bars to certified bullion, every batch undergoes double-stage fire assaying and spectro-analysis to meet international LBMA and OECD trade standards.",
    bgGradient: "from-[#1a180b] via-[#2a220c] to-[#153B16]",
    stats: [
      { label: "Gold Purity Standard", value: "999.9" },
      { label: "Assay Accuracy", value: "99.99%" },
      { label: "Certified Labs", value: "ISO Standard" },
    ],
    primaryCta: { text: "Quality & Assay Process", href: "/quality-assay" },
    secondaryCta: { text: "View Certifications", href: "/compliance" },
  },
  {
    id: 3,
    tagline: "SECURE GLOBAL TRADE & LOGISTICS",
    title: "How We Export & Deliver Worldwide",
    description: "We handle end-to-end international bullion logistics with armored transit, customs clearing, and direct vault-to-vault settlement for institutional buyers.",
    bgGradient: "from-[#0a1921] via-[#153B16] to-[#112a13]",
    stats: [
      { label: "Global Destinations", value: "40+ Countries" },
      { label: "Logistics Partner", value: "Brink's / Malca" },
      { label: "Trade Settlement", value: "T+0 / T+1" },
    ],
    primaryCta: { text: "For Buyers & Importers", href: "/for-buyers" },
    secondaryCta: { text: "Contact Trade Desk", href: "/contact" },
  },
];

// Duplicate first slide at the end for continuous forward loop
const slides = [...originalSlides, { ...originalSlides[0], id: 999 }];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Uninterrupted 3-second interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Handle instant jump when sliding reaches the end clone
  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  // Re-enable transition right after reset
  useEffect(() => {
    if (!isTransitioning && current === 0) {
      const request = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(request);
    }
  }, [isTransitioning, current]);

  const activeIndex = current % originalSlides.length;

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden bg-[#0d280e] text-white select-none">
      {/* Background Ambient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5CC64_1px,transparent_1px)] [background-size:32px_32px] opacity-10 z-10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#E5CC64]/10 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#153B16]/60 rounded-full blur-3xl pointer-events-none z-10" />

      {/* SLIDER TRACK */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex w-full h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={`${slide.id}-${index}`}
              className={`w-full shrink-0 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center bg-gradient-to-r ${slide.bgGradient}`}
            >
              <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full py-8 lg:py-10">
                <div className="max-w-4xl">
                  
                  {/* Tagline */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5CC64]/15 border border-[#E5CC64]/30 text-[#E5CC64] text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-3 sm:mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#E5CC64] animate-ping" />
                    {slide.tagline}
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-[family-name:var(--font-cinzel)] text-white leading-[1.2] mb-3 sm:mb-4">
                    {slide.title.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={
                          word.toLowerCase().includes("gold") ||
                          word.toLowerCase().includes("999.9") ||
                          word.toLowerCase().includes("pure")
                            ? "text-[#E5CC64]"
                            : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans mb-6 sm:mb-8">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
                    <Link
                      href={slide.primaryCta.href}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#E5CC64] text-[#153B16] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg hover:bg-[#f3dc7e] hover:shadow-[0_0_25px_rgba(229,204,100,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {slide.primaryCta.text}
                    </Link>

                    <Link
                      href={slide.secondaryCta.href}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 border border-[#E5CC64]/50 text-white hover:text-[#E5CC64] hover:border-[#E5CC64] hover:bg-[#E5CC64]/10 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded backdrop-blur-sm transition-all duration-300"
                    >
                      {slide.secondaryCta.text}
                    </Link>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-[#E5CC64]/20 pt-4 sm:pt-5 max-w-2xl">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-sm sm:text-lg md:text-2xl font-bold font-mono text-[#E5CC64] whitespace-nowrap">
                          {stat.value}
                        </span>
                        <span className="text-[9px] sm:text-xs text-gray-400 font-sans tracking-wide uppercase whitespace-nowrap">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-[#153B16]/70 px-4 py-1.5 rounded-full border border-[#E5CC64]/30 backdrop-blur-md">
        {originalSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrent(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              activeIndex === index
                ? "w-8 h-2 bg-[#E5CC64]"
                : "w-2 h-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}