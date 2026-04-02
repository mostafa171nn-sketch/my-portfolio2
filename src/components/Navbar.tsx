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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface/90 border-b border-muted shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary drop-shadow-md">
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative group text-sm font-medium transition-all duration-300 hover:text-primary-700 ${pathname === item.href ? "text-primary" : "text-muted"}`}
            >
              {t(item.id)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 origin-left"></span>
            </Link>
          ))}
          <div className="w-px h-5 bg-border/50" />
        </div>

        <button 
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-6 h-6 text-muted" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 border-t border-muted backdrop-blur-xl"
          >
            <div className="px-6 py-8 space-y-4 text-center mx-auto max-w-sm">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-lg font-medium text-primary hover:text-primary-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.id)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

