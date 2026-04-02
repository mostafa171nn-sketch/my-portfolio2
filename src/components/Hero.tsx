'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  useEffect(() => {
    const text = "I am a front end developer";
    let index = 0;
    const timer = setInterval(() => {
      index++;
      if (index > text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Solid Beige Background */}
      <div className="absolute inset-0 bg-primary-900/95" />
      <div className="absolute top-0 left-0 w-full h-full particles opacity-20" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left max-w-4xl mx-auto px-6 ml-12"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] font-bold leading-tight mb-8 text-primary-900 drop-shadow-2xl shadow-primary-900/50"
        >
          HELLO
        </motion.h1>
        <motion.div className="text-[1.8rem] md:text-[5.5rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold leading-tight text-primary-900 drop-shadow-xl shadow-primary-900/30">
          I am a 
          <br className="md:hidden" />
          <span className="block md:inline"> front-end </span> 
          <br className="md:hidden lg:inline-block" />
          developer
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 ml-auto mr-30 items-center mb-20 mt-8 w-fit"
        >
          <Link 
            href="#contact"
            className="group relative px-12 py-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-primary-glow hover:shadow-2xl"
          >
            <span className="relative z-10">{t('cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-3" />
          </Link>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 bg-primary-glass rounded-full text-lg font-semibold text-primary-900 hover:border-primary-700/80 transition-all duration-300 shadow-lg hover:shadow-primary-glow"
          >
            View Work
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-2 justify-center text-sm text-primary-400/80"
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full shadow-primary-glow" />
          <span></span>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full shadow-primary-glow" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .particles {
          background-image: 
            radial-gradient(5px 2px at 20px 30px, #000000, transparent),
            radial-gradient(4px 2px at 40px 70px, #000000, transparent),
            radial-gradient(3px 2px at 90px 40px, #000000, transparent),
            radial-gradient(4px 2px at 130px 80px, #0c0c0c, transparent),
            radial-gradient(4px 3px at 20px 120px, #050505, transparent),
            radial-gradient(2px 3px at 160px 20px, #000000, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}

