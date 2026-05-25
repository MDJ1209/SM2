'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  };

  return (
    <section className="py-20 md:py-32 lg:py-48 border-t border-white/10 relative z-10" id="about">
      <div className="max-w-[1800px] mx-auto px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Heading and Subtitle */}
          <div className="col-span-12 lg:col-span-5">
            <motion.span 
              variants={itemVariants} 
              className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8"
            >
              Who We Are
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-6xl text-white leading-tight"
            >
              Student grit. <br />
              <span className="italic font-normal">Professional</span> execution.
            </motion.h2>
          </div>

          {/* Right Column: Narrative and Statistics */}
          <div className="col-span-12 lg:col-span-7 lg:pl-16 mt-8 lg:mt-0 flex flex-col justify-between">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed font-serif italic">
                SM² is a premium freelance platform launched by a collective of talented student creators. Having engineered high-impact systems for industry-leading companies, we united to establish our own professional boutique—delivering custom web apps, bleeding-edge interactive platforms, and meticulously crafted digital products.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                We bridge the gap between fresh, state-of-the-art technological innovation and rigorous industry execution. For us, every line of code is an art form, and every digital system we design is built to exceed enterprise standards while keeping direct, overhead-free client communication.
              </p>
            </motion.div>

            {/* Micro-stats grid */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10"
            >
              <div className="group">
                <span className="font-serif text-3xl md:text-5xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">15+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Premium Creations</span>
              </div>
              <div className="group">
                <span className="font-serif text-3xl md:text-5xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Success Delivery</span>
              </div>
              <div className="group">
                <span className="font-serif text-3xl md:text-5xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">Talented</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Student Creators</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
