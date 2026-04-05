'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", message);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-12 lg:px-24 bg-primary-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="rr text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            {t("title") || "Get In Touch"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           <span className='nn'>Have</span> a project in mind <span className='nn'>?</span><br /> Let's bring it to <span className='nn'>life</span> together<span className='nn'>.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-primary-900/70 backdrop-blur-xl rounded-2xl border border-primary-800/50 hover:border-primary-700/70 transition-all duration-300 shadow-xl hover:shadow-primary-900/20">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-primary-900" />
                </div>

                <div>
                  <h3 className="rr font-semibold  mb-1">Email</h3>
                  <a href="mailto:mostafa171nn@gamil.com" className="text-gray-700 hover:text-primary-400 transition-colors text-sm font-medium">
                    mostafa171nn@gamil.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-primary-900/70 backdrop-blur-xl rounded-2xl border border-primary-800/50 hover:border-primary-700/70 transition-all duration-300 shadow-xl hover:shadow-primary-900/20">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-800 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-primary-900" />
                </div>

                <div>
                  <h3 className="rr font-semibold  mb-1">Phone</h3>
                  <a href="tel:+201111695090" className="text-gray-700 hover:text-primary-400 transition-colors text-sm font-medium">
                    01111695090
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary-900/80 backdrop-blur-xl p-8 rounded-2xl border border-primary-800/50 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="rr block text-gray-300 mb-2 font-medium">{t('name') || 'Name'}</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-primary-950/70 border border-primary-800/60 rounded-xl text-white placeholder-gray-500 focus:border-primary-700/80 focus:outline-none focus:ring-2 focus:ring-primary-700/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="rr block text-gray-300 mb-2 font-medium">{t('email') || 'Email'}</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-primary-950/70 border border-primary-800/60 rounded-xl text-white placeholder-gray-500 focus:border-primary-700/80 focus:outline-none focus:ring-2 focus:ring-primary-700/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="rr block text-gray-300 mb-2 font-medium">{t('message') || 'Message'}</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-950/70 border border-primary-800/60 rounded-xl text-white placeholder-gray-500 resize-vertical focus:border-primary-700/80 focus:outline-none focus:ring-2 focus:ring-primary-700/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{ color: '#BFA28C' }}
                className="w-full bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-4 px-8 rounded-xl font-bold text-xl hover:from-primary-700 hover:to-primary-900 transition-all duration-300 shadow-2xl hover:shadow-primary-700/50 backdrop-blur-sm border border-primary-700/50"
              >
                {t('submit') || 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
