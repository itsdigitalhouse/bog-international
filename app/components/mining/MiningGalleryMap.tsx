"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic Import for React-Globe.gl to prevent SSR hydration errors
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const fieldImages = [
  {
    title: "Geological Survey",
    label: "FIELD INTELLIGENCE",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Active Extraction",
    label: "MINING OPERATIONS",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Field Logistics",
    label: "SECURE TRANSIT",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1400&auto=format&fit=crop",
  },
];

const operatingLocations = [
  {
    name: "Uganda",
    type: "FIELD OPERATIONS",
    lat: 1.3733,
    lng: 32.2903,
    size: 0.8,
  },
  {
    name: "Madagascar",
    type: "RESOURCE CORRIDOR",
    lat: -18.7669,
    lng: 46.8691,
    size: 0.8,
  },
];

// Connection arc between Uganda and Madagascar
const arcsData = [
  {
    startLat: 1.3733,
    startLng: 32.2903,
    endLat: -18.7669,
    endLng: 46.8691,
    color: ["#E5CC64", "#ffffff"],
  },
];

export default function MiningFieldIntelligence() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (globeRef.current) {
        // Focus globe specifically over East/Central Africa
        globeRef.current.pointOfView({ lat: -5, lng: 38, altitude: 1.8 }, 1000);

        // Enable subtle auto rotation
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.4;
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F3F3F3] text-[#153B16] border-b border-[#153B16]/10">
      
      {/* SECTION HEADER */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 pt-20 lg:pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-[#153B16] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-cinzel)] bg-[#E5CC64]/20 border border-[#E5CC64]/60 px-3.5 py-1.5">
              FIELD INTELLIGENCE & RESOURCE MAPPING
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#153B16] font-[family-name:var(--font-cinzel)] uppercase leading-[1.08] tracking-wide">
            Mapping Resources.
            <span className="block text-[#b09630] mt-1">
              Managing Field Operations.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-[#E5CC64] mx-auto mt-5 mb-5" />

          <p className="text-xs sm:text-sm md:text-base text-black font-light max-w-3xl mx-auto leading-relaxed">
            Our field intelligence framework connects geological assessment,
            concession verification and operational planning across selected
            African mineral corridors.
          </p>
        </div>
      </div>

      {/* MAIN INTELLIGENCE PANEL */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-14 lg:py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 border border-[#153B16]/15 bg-[#0b1d0b] shadow-2xl overflow-hidden">
          
          {/* 3D GLOBE CONTAINER */}
          <div className="lg:col-span-8 relative min-h-[550px] sm:min-h-[650px] lg:min-h-[720px] bg-[#0a180a] flex items-center justify-center overflow-hidden">
            
            {/* Dark Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.2] pointer-events-none z-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(229,204,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229,204,100,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* MAP HEADER */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 pointer-events-none">
              <div className="bg-[#153B16]/90 backdrop-blur-md text-white px-4 py-2.5 border-l-[3px] border-[#E5CC64] shadow-xl">
                <span className="block text-[8px] font-mono tracking-[0.22em] text-[#E5CC64] uppercase">
                  GLOBAL RESOURCE MAP
                </span>
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wide mt-0.5">
                  Interactive 3D Field Network
                </span>
              </div>
            </div>

            {/* LIVE STATUS */}
            <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 pointer-events-none">
              <div className="flex items-center gap-2 bg-[#153B16]/80 backdrop-blur-md border border-[#E5CC64]/30 px-3 py-2 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5CC64] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5CC64]" />
                </span>
                <span className="text-[8px] font-mono font-bold tracking-[0.15em] uppercase text-[#E5CC64]">
                  LIVE ROTATION ACTIVE
                </span>
              </div>
            </div>

            {/* REACT THREE GLOBE CANVAS */}
            <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
              <Globe
                ref={globeRef}
                backgroundColor="rgba(10, 24, 10, 1)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                atmosphereColor="#E5CC64"
                atmosphereAltitude={0.15}
                
                // HTML 3D Markers
                htmlElementsData={operatingLocations}
                htmlElement={(d: any) => {
                  const el = document.createElement("div");
                  el.innerHTML = `
                    <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
                      <div class="w-6 h-6 rounded-full bg-[#E5CC64]/30 animate-ping absolute inset-0"></div>
                      <div class="w-4 h-4 rounded-full bg-[#E5CC64] border-2 border-[#153B16] shadow-[0_0_15px_#E5CC64] relative z-10"></div>
                      <div class="absolute left-6 -top-2 bg-[#153B16] text-white border-l-2 border-[#E5CC64] px-2.5 py-1 shadow-2xl whitespace-nowrap">
                        <div class="text-[10px] font-bold uppercase tracking-wider">${d.name}</div>
                        <div class="text-[7px] text-[#E5CC64] font-mono tracking-widest uppercase">${d.type}</div>
                      </div>
                    </div>
                  `;
                  return el;
                }}

                // Arcs connecting regions
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={2000}
                arcStroke={1.2}
                arcAltitude={0.2}
              />
            </div>

            {/* MAP LEGEND */}
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-20 pointer-events-none">
              <div className="bg-[#153B16]/90 backdrop-blur-md border border-[#E5CC64]/30 px-4 py-3 shadow-lg text-white">
                <div className="flex items-center gap-3">
                  <span className="relative flex items-center justify-center w-3 h-3">
                    <span className="absolute w-3 h-3 rounded-full bg-[#E5CC64]/40 animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-[#E5CC64]" />
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#E5CC64]">
                    Drag to rotate / Scroll to zoom
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* INTELLIGENCE PANEL */}
          <div className="lg:col-span-4 bg-[#153B16] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[#E5CC64] text-[9px] font-mono font-bold tracking-[0.2em] uppercase">
                  FIELD NETWORK
                </span>
                <span className="flex items-center gap-2 text-[8px] font-mono text-gray-300 uppercase">
                  <span className="w-1.5 h-1.5 bg-[#E5CC64] rounded-full animate-pulse" />
                  Operational
                </span>
              </div>

              <h3 className="mt-7 text-xl sm:text-2xl font-bold font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                Strategic Resource
                <span className="block text-[#E5CC64]">Corridors</span>
              </h3>

              <p className="mt-5 text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                BOG's field intelligence framework connects geological assessment, concession verification and operational planning to support controlled mineral development and reliable commercial supply.
              </p>

              <div className="mt-8 space-y-3">
                {operatingLocations.map((location, index) => (
                  <div
                    key={location.name}
                    className="border border-white/10 bg-white/[0.035] p-4 hover:border-[#E5CC64]/60 hover:bg-white/[0.055] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[8px] font-mono tracking-[0.18em] text-[#E5CC64]">
                        REGION 0{index + 1}
                      </span>
                      <span className="text-[8px] font-mono text-gray-400">
                        {location.type}
                      </span>
                    </div>

                    <h4 className="font-bold font-[family-name:var(--font-cinzel)] uppercase text-sm">
                      {location.name}
                    </h4>

                    <p className="mt-1 text-[10px] text-gray-300 leading-relaxed">
                      {location.name === "Uganda"
                        ? "Mineral assessment, concession coordination and field development activities."
                        : "Strategic mineral sourcing and field intelligence across selected resource zones."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM STATS */}
            <div className="mt-8 pt-5 border-t border-white/10 grid grid-cols-2 gap-5">
              <div>
                <span className="block text-lg sm:text-xl font-bold font-mono text-[#E5CC64]">
                  02
                </span>
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">
                  Active Regions
                </span>
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold font-mono text-white">
                  FIELD
                </span>
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">
                  Intelligence Network
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FIELD OPERATIONS GALLERY */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 pb-20 lg:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#153B16]">
              OPERATIONAL EVIDENCE
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-cinzel)] uppercase leading-tight">
              Field Operations in Focus
            </h3>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-black leading-relaxed">
            Selected field imagery supporting our exploration, extraction and mineral logistics activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fieldImages.map((item, index) => (
            <div
              key={item.title}
              className="group relative h-[260px] sm:h-[300px] overflow-hidden bg-[#153B16]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153B16]/95 via-[#153B16]/20 to-transparent" />
              <span className="absolute top-5 left-5 text-[#E5CC64] text-xs font-mono font-bold">
                0{index + 1}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="text-[8px] font-mono tracking-[0.2em] text-[#E5CC64] uppercase">
                  {item.label}
                </span>
                <h4 className="mt-1 text-base sm:text-lg font-bold font-[family-name:var(--font-cinzel)] text-white uppercase">
                  {item.title}
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E5CC64] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}