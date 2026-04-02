'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-12 lg:px-24 bg-primary-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-2xl shadow-primary/30 text-6xl tracking-tight"
        >
          {t('title') || 'Services'}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="group bg-surface/60 backdrop-blur-xl p-8 rounded-2xl border border-muted/40 hover:border-primary/60 hover:bg-surface/70 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">{t('1.title') || 'Web Development'}</h3>
            <p className="text-gray-700 leading-relaxed">{t('1.desc') || 'Professional web development using latest technologies'}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-surface/60 backdrop-blur-xl p-8 rounded-2xl border border-muted/40 hover:border-primary/60 hover:bg-surface/70 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2h12a1 1 0 100-2H3zM3 7a1 1 0 000 2h12a1 1 0 100-2H3zM3 11a1 1 0 000 2h12a1 1 0 100-2H3zM3 15a1 1 0 000 2h12a1 1 0 100-2H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">{t('2.title') || 'UI/UX Design'}</h3>
            <p className="text-gray-700 leading-relaxed">{t('2.desc') || 'Beautiful user interfaces focused on user experience'}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-surface/60 backdrop-blur-xl p-8 rounded-2xl border border-muted/40 hover:border-primary/60 hover:bg-surface/70 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">{t('3.title') || 'Responsive Design'}</h3>
            <p className="text-gray-700 leading-relaxed">{t('3.desc') || 'Perfect on all devices from phones to large screens'}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
