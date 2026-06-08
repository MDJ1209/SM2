'use client';

import { motion } from 'framer-motion';

export default function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Strategy",
      description: "Fusing cutting-edge academic research with our experience at leading firms to chart clear technical paths."
    },
    {
      number: "02",
      title: "Design",
      description: "Meticulous UI/UX systems rooted in structural grid methodologies, interaction theory, and design excellence."
    },
    {
      number: "03",
      title: "Development",
      description: "Enterprise-grade engineering utilizing high-performance web standards, built directly by talented student creators."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
    },
    exit: { 
      opacity: 0, 
      y: -40, 
      filter: 'blur(10px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section className="py-20 md:py-32 lg:py-48 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8">
        <motion.div 
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-24 lg:mb-32"
        >
          <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8">
            Our Capabilities
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl md:text-7xl max-w-4xl leading-tight text-white drop-shadow-lg">
            Bridging the gap between artistic vision and technical precision.
          </motion.h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24"
        >
          {capabilities.map((cap, i) => (
            <motion.div key={i} variants={itemVariants} className="group cursor-default">
              <span className="font-serif italic text-2xl block mb-12 text-white/30 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 origin-left">
                {cap.number}.
              </span>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">{cap.title}</h4>
              <p className="text-white/60 leading-relaxed font-light transition-colors duration-500 group-hover:text-white/90">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

