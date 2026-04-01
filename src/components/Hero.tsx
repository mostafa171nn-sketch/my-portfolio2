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
      {/* Solid Black Background */}
      <div className="absolute inset-0 bg-black/95" />
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
          className="text-6xl md:text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          HELLO
          <br />
          {t('title')}
        </motion.h1>

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 bg-primary-glass rounded-full text-lg font-semibold text-white hover:border-primary-700/80 transition-all duration-300 shadow-lg hover:shadow-primary-glow"
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
          <div className="w-24 h-0.5 bg-gradient-to-r mrr from-primary-700 to-primary-800 rounded-full shadow-primary-glow" />
          <span></span>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full shadow-primary-glow" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .particles {
          background-image: 
            radial-gradient(5px 2px at 20px 30px, #ebebeb, transparent),
            radial-gradient(2px 2px at 40px 70px, #e7e0e5, transparent),
            radial-gradient(1px 2px at 90px 40px, #f8f1f6, transparent),
            radial-gradient(1px 1px at 130px 80px, #f8f3f6, transparent),
            radial-gradient(4px 2px at 20px 120px, #ebe6e9, transparent),
            radial-gradient(2px 3px at 160px 20px, #bebabd, transparent);
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

