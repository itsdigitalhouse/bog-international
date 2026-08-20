"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Anchor, Handshake, Users, ShieldAlert } from "lucide-react";

// MINIMALIST SVG BADGE FLAGS
const UgandaFlag = () => (
  <svg className="h-3.5 w-5 rounded-sm shrink-0 border border-black/10 inline-block" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="100" fill="#000"/>
    <rect y="100" width="900" height="100" fill="#FCDC04"/>
    <rect y="200" width="900" height="100" fill="#D90000"/>
    <rect y="300" width="900" height="100" fill="#000"/>
    <rect y="400" width="900" height="100" fill="#FCDC04"/>
    <rect y="500" width="900" height="100" fill="#D90000"/>
    <circle cx="450" cy="300" r="80" fill="#FFF"/>
  </svg>
);

const MadagascarFlag = () => (
  <svg className="h-3.5 w-5 rounded-sm shrink-0 border border-black/10 inline-block" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="600" fill="#FFF"/>
    <rect x="300" width="600" height="300" fill="#FC3D32"/>
    <rect x="300" y="300" width="600" height="300" fill="#007E3A"/>
  </svg>
);

const operationsData = [
  {
    hubId: "HUB 01",
    country: "Uganda",
    flag: UgandaFlag,
    coords: "0.3476° N, 32.5825° E",
    collaborationType: "Primary Direct Operational Hub",
    collabBadge: "Direct Origin Operations",
    entity: "Bhatia Ocean Gold International",
    code: "BOG INTERNATIONAL",
    sector: "Minerals · Agriculture · Natural Products",
    description: "Bhatia Ocean Gold International is our primary East African sourcing and trade execution engine, connecting mineral deposits and agricultural trade hubs with global B2B markets.",
    gateway: "Port of Mombasa Export Gateway / Entebbe Air Logistics",
    commodities: ["Gold", "Copper", "Vanilla", "Coffee", "Grains", "Beans", "Agricultural Products"],
    originParam: "Uganda",
  },
  {
    hubId: "HUB 02",
    country: "Madagascar",
    flag: MadagascarFlag,
    coords: "18.8792° S, 47.5079° E",
    collaborationType: "Strategic Agricultural Partner",
    collabBadge: "BOG × BMS Spices Joint Network",
    entity: "Best Spices of Madagascar",
    code: "BMS SPICES",
    sector: "Spices & Food Commodities",
    description: "Best Spices of Madagascar manages high-value agricultural commodities and spices directly from island partners to global food processors and B2B importers.",
    gateway: "Port of Toamasina Maritime Logistics",
    commodities: ["Spices", "Vanilla", "Grains", "Beans", "Agricultural Products"],
    originParam: "Madagascar",
  },
  {
    hubId: "HUB 03",
    country: "Madagascar",
    flag: MadagascarFlag,
    coords: "18.8792° S, 47.5079° E",
    collaborationType: "Specialized Mining Infrastructure Partner",
    collabBadge: "BOG × ALDO Strategic Alliance",
    entity: "ALDO PARTNERS",
    code: "ALDO MINING DIVISION",
    sector: "Mining & Industrial Minerals",
    description: "Specialized Madagascar mining infrastructure focusing on industrial ores, precious stones, and strategic minerals.",
    gateway: "Port of Toamasina Strategic Bulk Gateway",
    commodities: ["Gold", "Chrome / Chromium", "Precious Stones", "Mining & Minerals"],
    originParam: "Madagascar-Mining",
  },
];

export default function GlobalCollaborationsMatrix() {
  return (
    <section
      id="global-operations"
      className="relative w-full bg-[#F3F3F3] text-[#153B16] selection:bg-[#E5CC64] selection:text-[#153B16]"
    >
      <div className="h-px w-full bg-[#E5CC64]" />

      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        
        {/* SECTION HEADER WITH COLLABORATION FOCUS */}
        <div className="flex flex-col justify-between gap-6 pb-12 border-b border-[#153B16]/15 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#E5CC64]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#153B16]/70 flex items-center gap-1.5">
                <Handshake size={13} className="text-[#E5CC64]" /> Institutional Alliances & Sourcing Network
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl font-semibold leading-tight text-[#153B16] sm:text-4xl lg:text-[42px]">
              Uganda & Madagascar <br className="hidden sm:inline" />
              <span className="font-normal text-[#E5CC64]">Collaborative Trade Network</span>
            </h2>
          </div>

          <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-black/90">
            Bhatia Ocean Gold International operates a unified international sourcing network across East Africa and the Indian Ocean in direct collaboration with strategic regional entities, offering institutional buyers direct access to verified origins.
          </p>
        </div>

        {/* COLLABORATIVE MATRIX TABLE */}
        <div className="mt-12 overflow-x-auto border border-[#153B16]/15 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[960px]">
            {/* TABLE HEADER */}
            <thead>
              <tr className="bg-[#153B16] text-white text-[9px] font-mono uppercase tracking-[0.2em] border-b border-[#E5CC64]">
                <th className="py-4 px-6 font-bold w-[18%]">Origin & Regional Hub</th>
                <th className="py-4 px-6 font-bold w-[28%]">Operating Entity & Alliance</th>
                <th className="py-4 px-6 font-bold w-[22%]">Shared Logistics Gateway</th>
                <th className="py-4 px-6 font-bold w-[22%]">Sourced Commodities</th>
                <th className="py-4 px-6 font-bold text-right w-[10%]">Sourcing Contract</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-[#153B16]/10 text-xs">
              {operationsData.map((item, index) => {
                const FlagComponent = item.flag;
                return (
                  <tr
                    key={index}
                    className="hover:bg-[#F3F3F3]/60 transition-colors group"
                  >
                    {/* ORIGIN & REGIONAL HUB */}
                    <td className="py-6 px-6 align-top">
                      <div className="flex items-center gap-2">
                        <FlagComponent />
                        <span className="font-[family-name:var(--font-cinzel)] font-bold text-base text-[#153B16]">
                          {item.country}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#153B16]/60">
                        <MapPin size={11} className="text-[#E5CC64]" />
                        <span>{item.coords}</span>
                      </div>
                      <span className="inline-block mt-3 bg-[#153B16]/5 text-[#153B16] text-[8px] font-mono font-bold px-2 py-0.5 border border-[#153B16]/10 uppercase tracking-widest">
                        {item.hubId}
                      </span>
                    </td>

                    {/* OPERATING ENTITY & COLLABORATION BADGE */}
                    <td className="py-6 px-6 align-top">
                      {/* COLLABORATION BADGE */}
                      <div className="inline-flex items-center gap-1.5 mb-2 bg-[#153B16]/5 text-[#153B16] px-2.5 py-1 border border-[#153B16]/15 text-[8px] font-mono font-bold uppercase tracking-wider">
                        <Users size={11} className="text-[#E5CC64]" />
                        <span>{item.collabBadge}</span>
                      </div>

                      <h3 className="font-semibold text-base text-[#153B16] group-hover:text-[#E5CC64] transition-colors mt-1">
                        {item.entity}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] font-mono font-bold text-[#E5CC64] tracking-wider uppercase">
                          {item.code}
                        </span>
                        <span className="text-[8px] text-[#153B16]/40">|</span>
                        <span className="text-[9px] font-mono text-[#153B16]/70 italic">
                          {item.collaborationType}
                        </span>
                      </div>

                      <p className="text-[11px] text-black/85 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>
                    </td>

                    {/* SHARED LOGISTICS GATEWAY */}
                    <td className="py-6 px-6 align-top">
                      <div className="flex items-start gap-2 bg-[#F3F3F3] p-3 border border-[#153B16]/10">
                        <Anchor size={13} className="text-[#E5CC64] shrink-0 mt-0.5" />
                        <span className="text-[10px] font-mono font-bold text-[#153B16]/90 leading-tight">
                          {item.gateway}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 text-[9px] font-mono text-[#153B16]/70">
                        <ShieldCheck size={13} className="text-[#E5CC64]" />
                        <span>Direct Origin Synergy Contract</span>
                      </div>
                    </td>

                    {/* COMMODITIES SOURCED */}
                    <td className="py-6 px-6 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {item.commodities.map((prod) => (
                          <span
                            key={prod}
                            className="bg-[#F3F3F3] text-[#153B16] px-2.5 py-1 border border-[#153B16]/15 text-[8px] font-bold uppercase tracking-wider"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* SOURCING CONTRACT ACTION */}
                    <td className="py-6 px-6 align-top text-right">
                      <Link
                        href={`/request-offer?origin=${item.originParam}`}
                        className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#153B16] hover:text-[#E5CC64] transition-colors whitespace-nowrap pt-1"
                      >
                        Inquire <ArrowRight size={11} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* BOTTOM COLLABORATIVE SYNERGY BANNER */}
        <div className="mt-12 bg-[#153B16] px-8 py-10 sm:px-12 lg:p-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b-2 border-[#E5CC64]">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-none shrink-0 hidden sm:block">
              <Handshake size={24} className="text-[#E5CC64]" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5CC64]">
                Strategic Trade Synergy
              </span>
              <h3 className="font-[family-name:var(--font-cinzel)] mt-1.5 text-2xl font-semibold sm:text-3xl">
                Integrated B2B Sourcing Across Africa & The Indian Ocean
              </h3>
            </div>
          </div>

          <Link
            href="/request-offer"
            className="inline-flex items-center gap-3 bg-[#E5CC64] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#153B16] transition-all hover:bg-white shrink-0"
          >
            Inquire Strategic Alliance <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}