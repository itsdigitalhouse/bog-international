"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <header className="bg-[#153B16] text-[#F3F3F3] border-b border-[#E5CC64]/20 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-9 h-9 border-2 border-[#E5CC64] rounded-full flex items-center justify-center font-bold text-[#E5CC64] text-xs">
            BOG
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs sm:text-sm tracking-wider text-white whitespace-nowrap">
              BHATIA OCEAN GOLD
            </span>
            <span className="text-[9px] text-[#E5CC64] tracking-widest uppercase font-sans font-normal">
              International
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-4 text-[11px] font-semibold uppercase tracking-wider">
          <Link href="/" className="hover:text-[#E5CC64] transition whitespace-nowrap">Home</Link>
          <Link href="/about" className="hover:text-[#E5CC64] transition whitespace-nowrap">About Us</Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#E5CC64] transition focus:outline-none uppercase py-2 whitespace-nowrap">
              Our Products <span>▾</span>
            </button>
            {productDropdown && (
              <div className="absolute top-full left-0 w-56 bg-[#153B16] border border-[#E5CC64]/30 rounded shadow-lg py-2 lowercase text-sm font-normal">
                <Link href="/gold" className="block px-4 py-2 hover:bg-[#E5CC64] hover:text-[#153B16] transition capitalize font-semibold">
                  Gold Trading & Export
                </Link>
                <Link href="/copper" className="block px-4 py-2 hover:bg-[#E5CC64] hover:text-[#153B16] transition capitalize font-semibold">
                  Copper & Cathodes
                </Link>
              </div>
            )}
          </div>

          <Link href="/mining" className="hover:text-[#E5CC64] transition whitespace-nowrap">Mining</Link>
          <Link href="/international-trading" className="hover:text-[#E5CC64] transition whitespace-nowrap">Intl Trading</Link>
          <Link href="/export-logistics" className="hover:text-[#E5CC64] transition whitespace-nowrap">Logistics</Link>
          <Link href="/quality-assay" className="hover:text-[#E5CC64] transition whitespace-nowrap">Quality & Assay</Link>
          <Link href="/compliance" className="hover:text-[#E5CC64] transition whitespace-nowrap">Compliance</Link>
          <Link href="/for-buyers" className="hover:text-[#E5CC64] transition text-[#E5CC64] whitespace-nowrap">For Buyers</Link>
        </nav>

        {/* Action CTA Button */}
        <div className="hidden xl:block shrink-0">
          <Link 
            href="/contact" 
            className="bg-[#E5CC64] text-[#153B16] font-bold text-xs uppercase px-4 py-2.5 rounded hover:bg-[#D4B74F] transition whitespace-nowrap inline-block text-center"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-[#E5CC64] focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#153B16] border-b border-[#E5CC64]/20 px-6 py-4 space-y-3 text-sm font-sans font-light">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">About Us</Link>
          <div className="pl-3 border-l border-[#E5CC64]/30 my-2 space-y-1">
            <span className="text-[10px] text-[#E5CC64] font-bold tracking-widest uppercase block">Our Products</span>
            <Link href="/gold" onClick={() => setIsOpen(false)} className="block py-1 text-xs hover:text-[#E5CC64]">Gold Trading & Export</Link>
            <Link href="/copper" onClick={() => setIsOpen(false)} className="block py-1 text-xs hover:text-[#E5CC64]">Copper & Copper Cathodes</Link>
          </div>
          <Link href="/mining" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">Mining & Development</Link>
          <Link href="/international-trading" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">International Trading</Link>
          <Link href="/export-logistics" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">Export & Logistics</Link>
          <Link href="/quality-assay" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">Quality & Assay</Link>
          <Link href="/compliance" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#E5CC64]">Compliance</Link>
          <Link href="/for-buyers" onClick={() => setIsOpen(false)} className="block py-1 text-[#E5CC64] font-semibold">For Buyers</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-center bg-[#E5CC64] text-[#153B16] font-bold rounded mt-2">Contact Us</Link>
        </div>
      )}
    </header>
  );
}