'use client';

import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(15px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -40, filter: 'blur(10px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black">
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) contrast(1.15) saturate(0.85)' }}
        >
          <source src="/home-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays for depth & text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
      </div>

      {/* ── Content ── */}
      <main className="relative z-10 pt-24 sm:pt-32 lg:pt-28 pb-16 md:pb-16 px-4 md:px-8 max-w-[1800px] mx-auto w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 lg:col-span-10">
            <motion.div variants={container} initial="hidden" animate="show" exit="exit" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              <motion.h1
                variants={item}
                className="text-5xl sm:text-5xl md:text-7xl lg:text-[8rem] leading-[1.05] sm:leading-[0.95] md:leading-[0.9] font-serif tracking-tight sm:tracking-tighter text-white drop-shadow-[0_4px_60px_rgba(0,0,0,0.4)]"
                data-purpose="hero-title"
              >
                WE DESIGN <br /> <span className="italic font-normal">&amp;</span> BUILD <br /> PREMIUM
              </motion.h1>
              <div className="grid grid-cols-12 mt-4 sm:mt-5 md:mt-4">
                <div className="col-span-12 md:col-start-2 md:col-span-11 lg:col-start-3 lg:col-span-10">
                  <motion.div 
                    variants={item} 
                    className="text-5xl sm:text-5xl md:text-7xl lg:text-[8rem] leading-[1.05] sm:leading-[0.95] md:leading-[0.9] font-serif tracking-tight sm:tracking-tighter text-white drop-shadow-[0_4px_60px_rgba(0,0,0,0.4)]"
                  >
                    DIGITAL CREATIONS
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 mt-12 sm:mt-16 md:mt-12 items-start md:items-end w-full">
          <div className="col-span-12 md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-sm leading-relaxed text-neutral-300 max-w-[320px] md:max-w-xs font-light"
            >
              DUDEE is a premier freelance platform and elite collective of talented college student creators from Vizag, India. We build premium, high-performance digital systems for global brands—bringing meticulous engineering and design to every interaction.
            </motion.p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 text-left md:text-right mt-4 md:mt-0">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex flex-col items-start md:items-end"
              href="#work"
            >
              <span className="text-[10px] uppercase tracking-widest mb-4 md:group-hover:pr-4 transition-all duration-500 text-white/80">Scroll to Explore</span>
              <div className="w-12 h-[1px] bg-white/60 group-hover:w-20 transition-all duration-500"></div>
            </motion.a>
          </div>
        </div>
      </main>
    </section>
  );
}
