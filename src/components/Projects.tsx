 'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      id: 1,
      titleKey: '1.title',
      descKey: '1.desc',
      image: '/imags/zahra.png',
      url: t.raw('1.url') as string
    },
    {
      id: 2,
      titleKey: '2.title',
      descKey: '2.desc',
      image: '/imags/my dream academy.png',
      url: t.raw('2.url') as string
    },
    {
      id: 3,
      titleKey: '3.title',
      descKey: '3.desc',
      image: '/imags/e-commerc app.png',
      url: t.raw('3.url') as string
    },
    {
      id: 4,
      titleKey: '4.title',
      descKey: '4.desc',
      image: '/imags/admin dashboard.png',
      url: t.raw('4.url') as string
    },
    {
      id: 5,
      titleKey: '5.title',
      descKey: '5.desc',
      image: '/imags/fun food.png',
      url: t.raw('5.url') as string
    },
    {
      id: 6,
      titleKey: '6.title',
      descKey: '6.desc',
      image: '/imags/dashboard.png',
      url: t.raw('6.url') as string
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-32 px-6 bg-[#6A1E55] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-black text-center mb-24 text-white drop-shadow-2xl shadow-white/30 text-6xl tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-[#3B1C32]/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/60 hover:bg-[#3B1C32]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={t.raw(project.titleKey) as string}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {t.raw(project.titleKey) as string}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {t.raw(project.descKey) as string}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30 group/link"
                >
                  Live Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

