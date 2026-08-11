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
  { name: "GOLD", price: "129,476.80", unit: "/kg", change: "+0.15%", isUp: true, status: "neutral" },
  { name: "SILVER", price: "1,293.25", unit: "/kg", change: "-0.08%", isUp: false, status: "neutral" },
  { name: "PLATINUM", price: "31,516.31", unit: "/kg", change: "+0.04%", isUp: true, status: "neutral" },
  { name: "COPPER", price: "9.41", unit: "/kg", change: "+0.12%", isUp: true, status: "neutral" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [prices, setPrices] = useState<PriceItem[]>(initialPrices);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Dynamic Up/Down Price Fluctuation Interval with Visual Highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prevPrices) =>
        prevPrices.map((item) => {
          const isUp = Math.random() > 0.45;
          const percentageChange = (Math.random() * 0.2).toFixed(2);
          const factor = isUp ? 1 : -1;
          
          const currentNumeric = parseFloat(item.price.replace(/,/g, ""));
          const delta = (currentNumeric * (parseFloat(percentageChange) / 100)) * factor;
          const newPrice = (currentNumeric + delta).toFixed(2);

          return {
            ...item,
            price: Number(newPrice).toLocaleString("en-US", { minimumFractionDigits: 2 }),
            change: `${isUp ? '+' : '-'}${percentageChange}%`,
            isUp: isUp,
            status: isUp ? "up" : "down",
          };
        })
      );

      // Flash Effect Reset after 1 second
      setTimeout(() => {
        setPrices((latestPrices) =>
          latestPrices.map((p) => ({ ...p, status: "neutral" }))
        );
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-[#153B16]/85 backdrop-blur-md shadow-[0_10px_30px_rgba(21,59,22,0.45)]" 
          : "bg-[#153B16] shadow-2xl"
      }`}
    >
      {/* 1. TOP LICENSING INFORMATION BAR */}
      <div className="border-b border-[#E5CC64]/20 py-1.5 px-3 sm:px-4 text-center font-sans bg-transparent">
        <div className="max-w-[1536px] mx-auto text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-gray-200 tracking-wider uppercase flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
          <span className="whitespace-nowrap">
            INC NO: <strong className="text-[#E5CC64] font-mono">80034544766608</strong>
          </span>
          <span className="text-[#E5CC64]/40 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">
            MDL NO: <strong className="text-[#E5CC64] font-mono">20260736</strong>
          </span>
          <span className="text-[#E5CC64]/40 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">
            TRADE LICENSE: <strong className="text-[#E5CC64] font-mono">2605291534</strong>
          </span>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="bg-transparent text-[#F3F3F3] border-b border-[#E5CC64]/15 py-2">
        <div className="max-w-[1536px] mx-auto px-4 md:px-6 flex items-center justify-between min-h-[70px] md:min-h-[90px]">
          
          {/* DESKTOP LEFT MENU */}
          <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wide font-[family-name:var(--font-cinzel)] w-1/2 justify-end pr-6">
            <Link 
              href="/" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/about" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/about') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductDropdown(true)}
              onMouseLeave={() => setProductDropdown(false)}
            >
              <button className={`flex items-center gap-1 transition focus:outline-none uppercase whitespace-nowrap py-1 ${
                isActive('/gold') || isActive('/copper') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}>
                Our Products <span className="text-[9px] text-[#E5CC64]">▾</span>
              </button>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/gold') || isActive('/copper') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
              
              {productDropdown && (
                <div className="absolute top-full left-0 w-60 bg-[#153B16]/95 backdrop-blur-md border border-[#E5CC64]/30 rounded-none py-2 text-xs tracking-wider font-sans normal-case shadow-2xl z-50">
                  <Link 
                    href="/gold" 
                    className={`block px-4 py-2 hover:bg-[#E5CC64] hover:text-[#153B16] transition-colors duration-150 capitalize font-medium ${
                      isActive('/gold') ? 'text-[#E5CC64]' : 'text-gray-200'
                    }`}
                  >
                    Gold Trading & Export
                  </Link>
                  <Link 
                    href="/copper" 
                    className={`block px-4 py-2 hover:bg-[#E5CC64] hover:text-[#153B16] transition-colors duration-150 capitalize font-medium ${
                      isActive('/copper') ? 'text-[#E5CC64]' : 'text-gray-200'
                    }`}
                  >
                    Copper & Cathodes
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/mining" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/mining') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Mining
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/mining') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/international-trading" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/international-trading') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Initial Trading
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/international-trading') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          </nav>

          {/* CENTERED LOGO */}
          <Link href="/" className="flex items-center justify-center shrink-0 mx-2">
            <div className="relative w-20 h-16 sm:w-28 sm:h-24 flex items-center justify-center py-1">
              <Image
                src="/LOGO.png"
                alt="Bhatia Ocean Gold International Logo"
                width={112}
                height={96}
                className={`object-contain transition-all duration-300 ${isScrolled ? 'drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]' : ''}`}
                priority
              />
            </div>
          </Link>

          {/* DESKTOP RIGHT MENU */}
          <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wide font-[family-name:var(--font-cinzel)] w-1/2 justify-start pl-6">
            <Link 
              href="/export-logistics" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/export-logistics') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Logistics
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/export-logistics') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/quality-assay" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/quality-assay') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Quality & Assay
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/quality-assay') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/compliance" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/compliance') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Compliance
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/compliance') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/for-buyers" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/for-buyers') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              For Buyers
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/for-buyers') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link 
              href="/contact" 
              className={`group relative py-1 transition-colors duration-200 whitespace-nowrap ${
                isActive('/contact') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'
              }`}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E5CC64] transition-all duration-300 ease-in-out ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-[#E5CC64] focus:outline-none p-2 border border-[#E5CC64]/30 bg-[#153B16] ml-auto"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE DRAWER MENU */}
        {isOpen && (
          <div className="xl:hidden bg-[#153B16]/95 backdrop-blur-md border-t border-[#E5CC64]/20 px-6 py-6 space-y-4 text-sm font-bold font-[family-name:var(--font-cinzel)] uppercase tracking-wider">
            <Link href="/" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/about') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>About Us</Link>
            
            <div className="pl-4 border-l border-[#E5CC64]/40 my-3 space-y-2 font-sans normal-case">
              <span className="text-xs text-[#E5CC64] font-bold tracking-widest uppercase block font-[family-name:var(--font-cinzel)]">Our Products</span>
              <Link href="/gold" onClick={() => setIsOpen(false)} className={`block py-1 text-xs ${isActive('/gold') ? 'text-[#E5CC64]' : 'text-gray-300 hover:text-[#E5CC64]'}`}>Gold Trading & Export</Link>
              <Link href="/copper" onClick={() => setIsOpen(false)} className={`block py-1 text-xs ${isActive('/copper') ? 'text-[#E5CC64]' : 'text-gray-300 hover:text-[#E5CC64]'}`}>Copper & Copper Cathodes</Link>
            </div>

            <Link href="/mining" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/mining') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Mining & Development</Link>
            <Link href="/international-trading" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/international-trading') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Initial Trading</Link>
            <Link href="/export-logistics" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/export-logistics') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Export & Logistics</Link>
            <Link href="/quality-assay" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/quality-assay') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Quality & Assay</Link>
            <Link href="/compliance" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/compliance') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Compliance</Link>
            <Link href="/for-buyers" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/for-buyers') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>For Buyers</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive('/contact') ? 'text-[#E5CC64]' : 'text-white hover:text-[#E5CC64]'}`}>Contact Us</Link>
          </div>
        )}
      </div>

      {/* 3. DYNAMIC FULLY RESPONSIVE LIVE COMMODITY TICKER BAR */}
      <div 
        className={`text-[#f1f1f1] text-[10px] sm:text-[11px] border-b border-[#E5CC64]/25 py-1.5 px-2 sm:px-4 font-mono tracking-wider transition-colors duration-500 ${
          isScrolled ? "bg-[#1E4D1F]/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Live Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 bg-[#E5CC64]/15 px-1.5 sm:px-2.5 py-0.5 rounded border border-[#E5CC64]/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5CC64] animate-pulse"></span>
            <span className="text-[8px] sm:text-[9px] font-bold text-[#E5CC64] tracking-widest font-sans uppercase whitespace-nowrap">
              LIVE RATES
            </span>
          </div>

          {/* Price Container with Dynamic Canvas Responsiveness & Flash Indicators */}
          <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth w-full px-1">
            {prices.map((item) => {
              // Flashing background highlight logic
              const flashBg = 
                item.status === "up" 
                  ? "bg-emerald-500/20 border-emerald-400/40" 
                  : item.status === "down" 
                  ? "bg-rose-500/20 border-rose-400/40" 
                  : "bg-transparent border-transparent";

              return (
                <div 
                  key={item.name} 
                  className={`flex items-center gap-1 sm:gap-1.5 shrink-0 px-2 py-0.5 rounded border transition-all duration-500 ${flashBg}`}
                >
                  <span className="font-semibold text-gray-300 text-[9px] sm:text-[10px] tracking-wider">
                    {item.name} <span className="hidden xs:inline">{item.unit}:</span>
                  </span>
                  
                  <span className="font-bold text-[#F3E5AB]">
                    ${item.price}
                  </span>

                  <span 
                    className={`text-[9px] sm:text-[10px] font-bold transition-all duration-300 flex items-center gap-0.5 ${
                      item.isUp ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    <span className="inline-block animate-bounce" style={{ animationDuration: "1s" }}>
                      {item.isUp ? '▲' : '▼'}
                    </span> 
                    {item.change}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Market Feed Tag */}
          <div className="hidden xl:flex items-center text-[9px] text-gray-300 shrink-0 font-sans tracking-widest uppercase">
            LBMA DIRECT FEEDS
          </div>
        </div>
      </div>
    </header>
  );
}