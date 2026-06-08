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
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
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
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Heading and Subtitle */}
          <div className="col-span-12 lg:col-span-5">
            <motion.span
              variants={itemVariants}
              className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8 font-semibold"
            >
              Who We Are
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-6xl text-white leading-tight"
            >
              Talented student creators. <br />
              <span className="italic font-normal text-white/60">Built to perform.</span>
            </motion.h2>
          </div>

          {/* Right Column: Narrative and Statistics */}
          <div className="col-span-12 lg:col-span-7 lg:pl-16 mt-8 lg:mt-0 flex flex-col justify-between">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed font-serif italic">
                SM² is a freelance design and development platform powered by a group of talented and experienced  student creators from Vizag. We have built high-performance websites,  apps, and digital solutions for real clients, proving that student-led teams can deliver top-tier results.
              </p>
            </motion.div>

            {/* Micro-stats grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10"
            >
              <div className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 overflow-hidden">
                {/* Subtle light glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="font-serif text-3xl md:text-4xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">15+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Completed Projects</span>
              </div>
              <div className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 overflow-hidden">
                {/* Subtle light glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="font-serif text-3xl md:text-4xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Client Satisfaction</span>
              </div>
              <div className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 overflow-hidden">
                {/* Subtle light glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="font-serif text-3xl md:text-4xl text-white block mb-2 transition-transform duration-500 group-hover:translate-x-1">Vizag</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-semibold">Student Collective</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
