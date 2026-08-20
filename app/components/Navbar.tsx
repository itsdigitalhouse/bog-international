"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PriceItem {
  name: string;
  price: string;
  unit: string;
  change: string;
  isUp: boolean;
  status: "up" | "down" | "neutral";
}

const initialPrices: PriceItem[] = [
  {
    name: "GOLD",
    price: "129,476.80",
    unit: "/kg",
    change: "+0.15%",
    isUp: true,
    status: "neutral",
  },
  {
    name: "SILVER",
    price: "1,293.25",
    unit: "/kg",
    change: "-0.08%",
    isUp: false,
    status: "neutral",
  },
  {
    name: "PLATINUM",
    price: "31,516.31",
    unit: "/kg",
    change: "+0.04%",
    isUp: true,
    status: "neutral",
  },
  {
    name: "COPPER",
    price: "9.41",
    unit: "/kg",
    change: "+0.12%",
    isUp: true,
    status: "neutral",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [sourcingDropdown, setSourcingDropdown] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSourcingOpen, setMobileSourcingOpen] = useState(false);
  const [prices, setPrices] = useState<PriceItem[]>(initialPrices);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  /* =========================================================
     SCROLL DETECTOR
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     LIVE PRICE SIMULATION
  ========================================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prevPrices) =>
        prevPrices.map((item) => {
          const isUp = Math.random() > 0.45;
          const percentageChange = (Math.random() * 0.2).toFixed(2);
          const factor = isUp ? 1 : -1;

          const currentNumeric = parseFloat(
            item.price.replace(/,/g, "")
          );

          const delta =
            currentNumeric *
            (parseFloat(percentageChange) / 100) *
            factor;

          const newPrice = (currentNumeric + delta).toFixed(2);

          return {
            ...item,
            price: Number(newPrice).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            }),
            change: `${isUp ? "+" : "-"}${percentageChange}%`,
            isUp,
            status: isUp ? "up" : "down",
          };
        })
      );

      setTimeout(() => {
        setPrices((latestPrices) =>
          latestPrices.map((price) => ({
            ...price,
            status: "neutral",
          }))
        );
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#153B16] shadow-xl transition-all duration-500 ease-in-out">

      {/* =====================================================
          1. TOP INFORMATION BAR
      ===================================================== */}

      <div
        className={`bg-[#153B16] text-gray-300 text-[10px] sm:text-[11px] border-b border-[#E5CC64]/20 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 opacity-0 border-transparent -translate-y-2 pointer-events-none"
            : "max-h-12 py-1.5 opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center justify-center gap-5 sm:gap-10 lg:gap-14 font-sans tracking-wide overflow-x-auto whitespace-nowrap px-4 sm:px-8 text-center">

          <span className="flex items-center gap-2 text-xs text-[#E5CC64]">
            <span className="font-semibold text-white">INC NO:</span>
            80034544766608
          </span>

          <span className="text-[#E5CC64]/40">|</span>

          <span className="flex items-center gap-2 text-xs text-[#E5CC64]">
            <span className="font-semibold text-white">MDL NO:</span>
            20260736
          </span>

          <span className="text-[#E5CC64]/40">|</span>

          <span className="flex items-center gap-2 text-xs text-[#E5CC64]">
            <span className="font-semibold text-white">TRADE LICENSE:</span>
            2605291534
          </span>

          {/* <span className="hidden md:inline text-[#E5CC64]/40">
            |
          </span>

          <div className="hidden md:flex items-center gap-1.5 text-[10px] text-[#E5CC64] font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Entity
          </div> */}
        </div>
      </div>

      {/* =====================================================
          2. MAIN NAVBAR
      ===================================================== */}

      <div className="bg-transparent text-[#F3F3F3] border-b border-[#E5CC64]/15">

        <div
          className={`max-w-[1536px] mx-auto px-4 md:px-6 flex items-center justify-center transition-all duration-500 ease-in-out ${
            isScrolled
              ? "h-[80px] sm:h-[90px]"
              : "h-[95px] sm:h-[110px]"
          }`}
        >

          {/* =================================================
              LEFT MENU
          ================================================= */}

          <nav className="hidden xl:flex flex-1 items-center justify-end gap-3 2xl:gap-4 pr-3 text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wider font-[family-name:var(--font-cinzel)]">

            {/* HOME */}
            <Link
              href="/"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Home

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/about")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              About Us

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/about")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* MINING */}
            <Link
              href="/mining"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/mining")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Mining

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/mining")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* PRODUCTS */}
            <div
              className="relative group"
              onMouseEnter={() => setProductDropdown(true)}
              onMouseLeave={() => setProductDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 py-1 whitespace-nowrap uppercase transition-colors duration-200 focus:outline-none ${
                  isActive("/products/gold") ||
                  isActive("/products/copper")
                    ? "text-[#E5CC64]"
                    : "text-white hover:text-[#E5CC64]"
                }`}
              >
                Our Products

                <span className="text-[8px] text-[#E5CC64]">
                  ▾
                </span>
              </button>

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/products/gold") ||
                  isActive("/products/copper")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {productDropdown && (
                <div className="absolute top-full left-0 w-56 bg-[#153B16] border border-[#E5CC64]/30 py-2 text-[12px] tracking-wider font-sans normal-case shadow-2xl z-50">

                  <Link
                    href="/products/gold"
                    className={`block px-4 py-2 transition-colors hover:bg-[#E5CC64] hover:text-[#153B16] ${
                      isActive("/products/gold")
                        ? "text-[#E5CC64]"
                        : "text-gray-200"
                    }`}
                  >
                    Gold Trading & Export
                  </Link>

                  <Link
                    href="/products/copper"
                    className={`block px-4 py-2 transition-colors hover:bg-[#E5CC64] hover:text-[#153B16] ${
                      isActive("/products/copper")
                        ? "text-[#E5CC64]"
                        : "text-gray-200"
                    }`}
                  >
                    Copper & Cathodes
                  </Link>
                </div>
              )}
            </div>

            {/* GLOBAL SOURCING */}
            <div
              className="relative group"
              onMouseEnter={() => setSourcingDropdown(true)}
              onMouseLeave={() => setSourcingDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 py-1 whitespace-nowrap uppercase transition-colors duration-200 focus:outline-none ${
                  isActive("/global-sourcing/uganda") ||
                  isActive("/global-sourcing/madagascar")
                    ? "text-[#E5CC64]"
                    : "text-white hover:text-[#E5CC64]"
                }`}
              >
                Global Sourcing

                <span className="text-[8px] text-[#E5CC64]">
                  ▾
                </span>
              </button>

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/global-sourcing/uganda") ||
                  isActive("/global-sourcing/madagascar")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {sourcingDropdown && (
                <div className="absolute top-full left-0 w-48 bg-[#153B16] border border-[#E5CC64]/30 py-2 text-[12px] tracking-wider font-sans normal-case shadow-2xl z-50">

                  <Link
                    href="/global-sourcing/uganda"
                    className={`block px-4 py-2 transition-colors hover:bg-[#E5CC64] hover:text-[#153B16] ${
                      isActive("/global-sourcing/uganda")
                        ? "text-[#E5CC64]"
                        : "text-gray-200"
                    }`}
                  >
                    Uganda
                  </Link>

                  <Link
                    href="/global-sourcing/madagascar"
                    className={`block px-4 py-2 transition-colors hover:bg-[#E5CC64] hover:text-[#153B16] ${
                      isActive("/global-sourcing/madagascar")
                        ? "text-[#E5CC64]"
                        : "text-gray-200"
                    }`}
                  >
                    Madagascar
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* =================================================
              CENTER LOGO
          ================================================= */}

          <Link
            href="/"
            className="flex items-center justify-center shrink-0 mx-2"
          >
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                isScrolled
                  ? "w-32 h-22 sm:w-40 sm:h-28 scale-105"
                  : "w-36 h-28 sm:w-48 sm:h-32"
              }`}
            >
              <Image
                src="/LOGO.png"
                alt="Bhatia Ocean Gold International Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* =================================================
              RIGHT MENU
          ================================================= */}

          <nav className="hidden xl:flex flex-1 items-center justify-start gap-3 2xl:gap-4 pl-3 text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wider font-[family-name:var(--font-cinzel)]">

            {/* LOGISTICS */}
            <Link
              href="/export-logistics"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/export-logistics")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Logistics

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/export-logistics")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* QUALITY */}
            <Link
              href="/quality-assay"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/quality-assay")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Quality & Assay

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/quality-assay")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* COMPLIANCE */}
            <Link
              href="/compliance"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/compliance")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Compliance

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/compliance")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* FOR BUYERS */}
            <Link
              href="/for-buyers"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/for-buyers")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              For Buyers

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/for-buyers")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`group relative py-1 whitespace-nowrap transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Contact Us

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ${
                  isActive("/contact")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </nav>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-[#E5CC64] focus:outline-none p-2 border border-[#E5CC64]/30 bg-[#153B16]"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h-16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* =================================================
            MOBILE DRAWER
        ================================================= */}

        {isOpen && (
          <div className="xl:hidden bg-[#153B16] border-t border-[#E5CC64]/20 px-6 py-6 space-y-4 text-xs font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-wider max-h-[85vh] overflow-y-auto">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/about")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/mining"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/mining")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Mining & Development
            </Link>

            {/* MOBILE PRODUCTS */}

            <div>
              <button
                onClick={() =>
                  setMobileProductOpen(!mobileProductOpen)
                }
                className={`w-full flex items-center justify-between py-1 text-left uppercase font-bold focus:outline-none ${
                  isActive("/products/gold") ||
                  isActive("/products/copper")
                    ? "text-[#E5CC64]"
                    : "text-white hover:text-[#E5CC64]"
                }`}
              >
                <span>Our Products</span>

                <span className="text-[#E5CC64] text-sm ml-2 font-mono">
                  {mobileProductOpen ? "−" : "+"}
                </span>
              </button>

              {mobileProductOpen && (
                <div className="pl-4 border-l border-[#E5CC64]/40 my-2 space-y-2 font-sans normal-case">

                  <Link
                    href="/products/gold"
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 text-xs ${
                      isActive("/products/gold")
                        ? "text-[#E5CC64]"
                        : "text-gray-300 hover:text-[#E5CC64]"
                    }`}
                  >
                    Gold Trading & Export
                  </Link>

                  <Link
                    href="/products/copper"
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 text-xs ${
                      isActive("/products/copper")
                        ? "text-[#E5CC64]"
                        : "text-gray-300 hover:text-[#E5CC64]"
                    }`}
                  >
                    Copper & Copper Cathodes
                  </Link>
                </div>
              )}
            </div>

            {/* MOBILE GLOBAL SOURCING */}

            <div>
              <button
                onClick={() =>
                  setMobileSourcingOpen(!mobileSourcingOpen)
                }
                className={`w-full flex items-center justify-between py-1 text-left uppercase font-bold focus:outline-none ${
                  isActive("/global-sourcing/uganda") ||
                  isActive("/global-sourcing/madagascar")
                    ? "text-[#E5CC64]"
                    : "text-white hover:text-[#E5CC64]"
                }`}
              >
                <span>Global Sourcing</span>

                <span className="text-[#E5CC64] text-sm ml-2 font-mono">
                  {mobileSourcingOpen ? "−" : "+"}
                </span>
              </button>

              {mobileSourcingOpen && (
                <div className="pl-4 border-l border-[#E5CC64]/40 my-2 space-y-2 font-sans normal-case">

                  <Link
                    href="/global-sourcing/uganda"
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 text-xs ${
                      isActive("/global-sourcing/uganda")
                        ? "text-[#E5CC64]"
                        : "text-gray-300 hover:text-[#E5CC64]"
                    }`}
                  >
                    Uganda
                  </Link>

                  <Link
                    href="/global-sourcing/madagascar"
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 text-xs ${
                      isActive("/global-sourcing/madagascar")
                        ? "text-[#E5CC64]"
                        : "text-gray-300 hover:text-[#E5CC64]"
                    }`}
                  >
                    Madagascar
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/export-logistics"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/export-logistics")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Export & Logistics
            </Link>

            <Link
              href="/quality-assay"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/quality-assay")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Quality & Assay
            </Link>

            <Link
              href="/compliance"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/compliance")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Compliance
            </Link>

            <Link
              href="/for-buyers"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/for-buyers")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              For Buyers
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                isActive("/contact")
                  ? "text-[#E5CC64]"
                  : "text-white hover:text-[#E5CC64]"
              }`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* =====================================================
          3. LIVE PRICE TICKER
      ===================================================== */}

      <div
        className={`bg-[#153B16] text-[#f1f1f1] text-[10px] sm:text-[11px] border-t border-[#E5CC64]/20 font-mono transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 opacity-0 border-transparent translate-y-2 pointer-events-none"
            : "max-h-12 py-1.5 opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center gap-2 px-2 sm:px-4">

          <div className="flex items-center gap-1.5 shrink-0 bg-[#E5CC64]/15 px-2 py-0.5 rounded border border-[#E5CC64]/50 z-10">

            <span className="w-2 h-2 rounded-full bg-[#E5CC64] animate-pulse" />

            <span className="text-[9px] font-bold text-[#E5CC64] tracking-widest font-sans uppercase whitespace-nowrap">
              LIVE RATES
            </span>
          </div>

          <div className="flex-1 overflow-hidden">

            <div className="flex items-center justify-center gap-3 sm:gap-8 min-w-max w-full">

              {prices.map((item) => {

                const flashBg =
                  item.status === "up"
                    ? "bg-emerald-500/20 border-emerald-400/40"
                    : item.status === "down"
                    ? "bg-rose-500/20 border-rose-400/40"
                    : "bg-transparent border-transparent";

                return (
                  <div
                    key={item.name}
                    className={`flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded border transition-colors duration-300 ${flashBg}`}
                  >

                    <span className="font-semibold text-gray-300 text-[10px] tracking-wider">
                      {item.name}:
                    </span>

                    <span className="font-bold text-[#F3E5AB]">
                      ${item.price}
                    </span>

                    <span
                      className={`text-[10px] font-bold flex items-center gap-0.5 ${
                        item.isUp
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      <span>
                        {item.isUp ? "▲" : "▼"}
                      </span>

                      {item.change}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden xl:flex items-center text-[9px] text-gray-300 shrink-0 font-sans tracking-widest uppercase ml-auto">
            LBMA DIRECT FEEDS
          </div>
        </div>
      </div>
    </header>
  );
}