'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", href: "/" },
    { id: "about", href: "/#about" },
    { id: "services", href: "/#services" },
    { id: "portfolio", href: "/#portfolio" },
    { id: "contact", href: "/#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#1A1A1D] border-b border-[#3B1C32] shadow-2xl shadow-[#1A1A1D]/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ">
        <Link href="/" className="text-2xl font-bold text-white drop-shadow-2xl shadow-white/50">
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative group text-sm font-medium transition-all duration-300 hover:text-white/90 ${
                pathname === item.href ? "text-white" : "text-gray-300/70"
              }`}
            >
              {t(item.id)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6A1E55] to-[#A64D79] group-hover:w-full transition-all duration-300 origin-left"></span>
            </Link>
          ))}
          <div className="w-px h-5 bg-gray-700/50" />
          
        </div>

        <button 
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-6 h-6 text-gray-300" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1D] border-t border-[#3B1C32] backdrop-blur-xl shadow-2xl"
          >

            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-lg font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}

                >
                  {t(item.id)}
                </Link>
              ))}
              <div className="pt-4 space-y-2 text-sm">
                <Link href="/ar" className="block text-gray-300/80 hover:text-white">AR</Link>
                <Link href="/en" className="block text-gray-300/80 hover:text-white">EN</Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

