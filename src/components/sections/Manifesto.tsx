'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="py-20 md:py-40 lg:py-64 text-center px-4 md:px-8 border-t border-white/10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -60, scale: 0.95, filter: 'blur(10px)' }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-12 block"
        >
          The DUDEE Philosophy
        </motion.span>
        <blockquote className="font-serif text-2xl md:text-5xl lg:text-6xl italic leading-tight mb-12 md:mb-16 text-white drop-shadow-xl">
          &quot;Order creates clarity, and clarity creates confidence. We strip away the redundant to reveal the essential.&quot;
        </blockquote>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] bg-white/40 mx-auto"
        ></motion.div>
      </motion.div>
    </section>
  );
}

