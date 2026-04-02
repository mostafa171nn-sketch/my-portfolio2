 'use client';

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen py-32 px-6 relative bg-secondary">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
className="text-5xl md:text-7xl font-black text-center mb-24 text-[#F3E4C9] drop-shadow-2xl shadow-[#F3E4C9]/30 tracking-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t("title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed mb-8 text-gray-700 max-w-lg">
              {t("bio1")}
            </p>
            <p className="text-xl leading-relaxed mb-12 text-gray-700 max-w-lg">
              {t("bio2")}
            </p>
            
            <div className="flex gap-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-primary-950/80 backdrop-blur-sm border border-primary-800/50 hover:bg-primary-950/90 transition-all duration-300 shadow-lg hover:shadow-primary-700/30"
              >
                <div className="text-4xl mb-2 text-[#F3E4C9]">20+</div>

                <div className="text-gray-700 text-sm uppercase tracking-wider">{t("stats.projectsLabel")}</div>

              </motion.div>
              
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-primary-950/80 backdrop-blur-sm border border-primary-800/50 hover:bg-primary-950/90 transition-all duration-300 shadow-lg hover:shadow-primary-700/30"
              >
                <div className="text-4xl mb-2 text-[#F3E4C9]">2+</div>

                <div className="text-gray-700 text-sm uppercase tracking-wider">{t("stats.experienceLabel")}</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-950/90 to-primary-900 rounded-3xl p-8 backdrop-blur-xl border border-primary-800/40 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-dark opacity-20" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="w-48 h-48 bg-gradient-to-r from-[#6A1E55]/60 to-[#A64D79]/60 rounded-2xl flex items-center justify-center mb-6 shadow-2xl border border-[#A64D79]/50 backdrop-blur-sm">
                  <Image src="/imags/sasa.jpeg" alt="Profile" width={192} height={192} className="rounded-2xl object-cover shadow-inner" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-2xl shadow-white/20">front-end developer</h3>
                  <p className="text-gray-300 drop-shadow-xl text-lg">React | Next.js | Tailwind</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .bg-grid-dark {
          background-image: 
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}

