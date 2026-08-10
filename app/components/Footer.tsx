import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#153B16] text-[#F3F3F3] border-t border-[#E5CC64]/20 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1: Brand Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 border-2 border-[#E5CC64] rounded-full flex items-center justify-center font-bold text-[#E5CC64]">
              BOG
            </div>
            <span className="font-bold text-lg tracking-wider text-[#F3F3F3]">
              BHATIA OCEAN GOLD
            </span>
          </div>
          <p className="text-xs text-emerald-200/80 leading-relaxed mb-4">
            International Mining, Minerals, Commodities Trading & Export Company connecting African resources with global markets.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-[#E5CC64] font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-emerald-100/80">
            <li><Link href="#about" className="hover:text-[#E5CC64]">About Us</Link></li>
            <li><Link href="#products" className="hover:text-[#E5CC64]">Gold Trading</Link></li>
            <li><Link href="#products" className="hover:text-[#E5CC64]">Copper Cathodes</Link></li>
            <li><Link href="#compliance" className="hover:text-[#E5CC64]">Quality & Assay</Link></li>
            <li><Link href="#compliance" className="hover:text-[#E5CC64]">Compliance & KYC</Link></li>
          </ul>
        </div>

        {/* Col 3: Product Portfolio */}
        <div>
          <h4 className="text-[#E5CC64] font-bold text-sm uppercase tracking-wider mb-4">Commodities</h4>
          <ul className="space-y-2 text-sm text-emerald-100/80">
            <li>Gold Bullion & Sourcing</li>
            <li>Grade-A Copper Cathodes</li>
            <li>African Minerals</li>
            <li>International B2B Supply</li>
          </ul>
        </div>

        {/* Col 4: Corporate Contact */}
        <div>
          <h4 className="text-[#E5CC64] font-bold text-sm uppercase tracking-wider mb-4">Official Contact</h4>
          <div className="space-y-2 text-sm text-emerald-100/80">
            <p><strong className="text-white">Email:</strong> info@bhatiaoceangold.com</p>
            <p><strong className="text-white">Operations:</strong> Uganda & International</p>
            <p><strong className="text-white">B2B Trade:</strong> Commercial Enquiries Only</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-emerald-900 text-center text-xs text-emerald-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Bhatia Ocean Gold International. All rights reserved.</p>
        <p className="text-emerald-400/80">Accurate & Verifiable Commodities Trading</p>
      </div>
    </footer>
  );
}