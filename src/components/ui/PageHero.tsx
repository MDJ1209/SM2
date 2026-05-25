'use client';

import { motion, Variants } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
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
    <section className="pt-48 pb-24 px-8 max-w-[1800px] mx-auto border-b border-neutral-100 mb-24">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
        <motion.h1 
          variants={item}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-[0.9] mb-12 break-words"
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={item}
          className="text-xl md:text-2xl text-neutral-500 font-light leading-snug"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
