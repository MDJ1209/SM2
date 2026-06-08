'use client';

import { motion, Variants } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  theme?: 'light' | 'dark';
}

export default function PageHero({ title, subtitle, theme = 'light' }: PageHeroProps) {
  const isDark = theme === 'dark';

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className={`pt-48 pb-24 px-8 max-w-[1800px] mx-auto border-b mb-24 relative z-10 ${isDark ? 'border-white/10' : 'border-neutral-100'}`}>
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
        <motion.h1 
          variants={item}
          className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-[0.9] mb-12 break-words ${isDark ? 'text-white' : 'text-black'}`}
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={item}
          className={`text-xl md:text-2xl font-light leading-snug ${isDark ? 'text-white/60' : 'text-neutral-500'}`}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
