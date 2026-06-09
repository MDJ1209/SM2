'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Code, Smartphone, PenTool, Sparkles, Database, GraduationCap } from 'lucide-react';

const domains = [
  {
    id: 1,
    title: 'Website Development',
    icon: <Code className="w-6 h-6" />,
    items: [
      'Business websites',
      'Portfolio websites',
      'Landing pages',
      'College/project websites',
      'Startup MVP websites',
      'E-commerce websites',
      'Admin dashboards',
    ],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: <Smartphone className="w-6 h-6" />,
    items: [
      'Android apps',
      'Cross-platform apps',
      'Business apps',
      'Booking apps',
      'Delivery apps',
      'Student management apps',
      'Healthcare apps',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: <PenTool className="w-6 h-6" />,
    items: [
      'Figma UI design',
      'Wireframes',
      'Mobile UI',
      'Dashboard UI',
      'Redesign services',
    ],
  },
  {
    id: 4,
    title: 'AI Integration Services',
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      'AI chatbots',
      'GPT integrations',
      'AI customer support',
      'WhatsApp automation',
      'Email automation',
      'Form automation',
    ],
  },
  {
    id: 5,
    title: 'College/Student Project Development',
    icon: <GraduationCap className="w-6 h-6 text-[#d4af37]" />,
    items: [
      'Mini projects',
      'Major projects',
      'Java projects',
      'Python projects',
      'Web apps',
      'Documentation',
    ],
  }
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDetailDomain, setActiveDetailDomain] = useState<typeof domains[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setActiveDetailDomain(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="py-20 md:py-32 relative z-10 border-t border-white/10" id="services">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Domains of <span className="italic font-normal">Expertise</span>
          </h2>
        </motion.div>

        {/* Initial 3 Domains */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {domains.filter((d) => [1, 2, 5].includes(d.id)).map((domain, index) => {
            const isSpecial = domain.id === 5;

            const getBgIcon = (id: number) => {
              switch (id) {
                case 1:
                  return <Code className="w-full h-full" strokeWidth={1} />;
                case 2:
                  return <Smartphone className="w-full h-full" strokeWidth={1} />;
                case 5:
                  return <GraduationCap className="w-full h-full" strokeWidth={1} />;
                default:
                  return null;
              }
            };

            return (
              <motion.div
                key={domain.id}
                variants={itemVariants}
                className={`group relative p-[2px] rounded-[24px] transition-all duration-700 h-full shadow-lg overflow-hidden ${
                  isSpecial
                    ? 'shine-card-gold hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]'
                    : 'shine-card-silver hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)]'
                }`}
              >
                {/* Inner Card Content */}
                <div className="relative z-10 h-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-[22px] p-8 overflow-hidden flex flex-col justify-between min-h-[420px]">
                  
                  {/* Large Background SVG Watermark */}
                  <div className={`absolute -right-12 -bottom-12 w-64 h-64 transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 ${
                    isSpecial
                      ? 'text-[#d4af37]/[0.02] group-hover:text-[#d4af37]/[0.06]'
                      : 'text-white/[0.02] group-hover:text-white/[0.06]'
                  }`}>
                    {getBgIcon(domain.id)}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 shadow-sm transform group-hover:scale-110 group-hover:rotate-3 ${
                        isSpecial
                          ? 'bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37]/20 group-hover:text-[#d4af37]'
                          : 'bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10'
                      }`}>
                        {domain.icon}
                      </div>
                      {isSpecial && (
                        <span className="px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full text-[9px] uppercase tracking-widest font-semibold text-[#d4af37] animate-pulse">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-serif mb-6 transition-colors duration-500 ${
                      isSpecial
                        ? 'text-[#d4af37] group-hover:text-[#d4af37]/80'
                        : 'text-white group-hover:text-zinc-200'
                    }`}>
                      {domain.title}
                    </h3>
                    
                    <ul className="space-y-3 flex-grow">
                      {domain.items.map((item, idx) => (
                        <li key={idx} className="text-sm md:text-base text-white/60 font-light flex items-start gap-3">
                          <span className={`mt-1 block transition-colors ${
                            isSpecial
                              ? 'text-[#d4af37]/40 group-hover:text-[#d4af37]/80'
                              : 'text-white/20 group-hover:text-white/40'
                          }`}>―</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative overflow-hidden border border-white/20 rounded-full px-4 md:px-8 py-4 hover:border-white transition-all duration-500 text-white flex items-center gap-4 cursor-pointer bg-transparent"
          >
            <span className="relative z-10 text-sm tracking-widest uppercase font-medium group-hover:text-black transition-colors duration-500">
              View All Domains
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black" />
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </button>
        </motion.div>
      </div>

      {/* Full-Screen Modal via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex flex-col bg-[#050505]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-[#050505] border-none rounded-none p-6 md:p-12 overflow-hidden flex flex-col max-w-none"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors z-20"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8 flex-shrink-0">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4">
                    Full Spectrum
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-white">
                    All <span className="italic font-normal">Domains</span>
                  </h3>
                </div>

                {/* Grid of all domains in premium boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-8 custom-scrollbar">
                  {domains.map((domain) => {
                    const isSpecial = domain.id === 5;

                    return (
                      <motion.div
                        key={domain.id}
                        layout
                        onClick={() => setActiveDetailDomain(domain)}
                        className={`group flex flex-col bg-white/[0.02] rounded-2xl p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.04] border relative overflow-hidden cursor-pointer select-none ${isSpecial
                          ? 'border-[#d4af37]/30 hover:border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.03)] hover:shadow-[0_0_35px_rgba(212,175,55,0.08)]'
                          : 'border-white/10 hover:border-zinc-400/30 shadow-[0_0_30px_rgba(255,255,255,0.01)] hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]'
                          }`}
                      >
                        {/* Top Right Badge */}
                        <div className={`absolute top-0 right-0 px-4 py-1.5 border-b border-l rounded-bl-xl text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 ${isSpecial
                          ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]'
                          : 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300'
                          }`}>
                          {/* Animated Dot Indicator */}
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSpecial ? 'bg-[#d4af37]' : 'bg-zinc-400'
                              }`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${isSpecial ? 'bg-[#d4af37]' : 'bg-zinc-300'
                              }`}></span>
                          </span>
                          <span>{isSpecial ? 'Popular' : 'Core'}</span>
                        </div>

                        {/* Icon */}
                        <div className={`mb-6 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 ${isSpecial
                          ? 'bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37]/20'
                          : 'bg-white/5 text-zinc-300 group-hover:bg-white/10 group-hover:text-white'
                          }`}>
                          {domain.icon}
                        </div>

                        {/* Title */}
                        <h4 className={`text-xl md:text-2xl font-serif transition-colors duration-500 mb-4 ${isSpecial
                          ? 'text-[#d4af37] group-hover:text-[#d4af37]/80'
                          : 'text-zinc-100 group-hover:text-white'
                          }`}>
                          {domain.title}
                        </h4>

                        {/* Details Prompt Link */}
                        <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 opacity-50 group-hover:opacity-100">
                          <span className={isSpecial ? 'text-[#d4af37]' : 'text-zinc-300'}>Explore Domain</span>
                          <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isSpecial ? 'text-[#d4af37]' : 'text-zinc-300'
                            }`} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Focused Center Card Overlay */}
                <AnimatePresence>
                  {activeDetailDomain && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setActiveDetailDomain(null)}
                      className="fixed inset-0 z-[10000] bg-[#050505]"
                      style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
                    >
                      {/* Full-Screen Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full h-full bg-[#090909] p-6 md:p-10 flex flex-col overflow-hidden"
                      >
                        {/* Close Button */}
                        <button
                          onClick={() => setActiveDetailDomain(null)}
                          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors z-20"
                        >
                          <X className="w-5 h-5" />
                        </button>

                        {/* Badge */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`px-3 py-1 border rounded-full text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 ${activeDetailDomain.id === 5
                            ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]'
                            : 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300'
                            }`}>
                            <span className="relative flex h-2 w-2">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeDetailDomain.id === 5 ? 'bg-[#d4af37]' : 'bg-zinc-400'
                                }`}></span>
                              <span className={`relative inline-flex rounded-full h-2 w-2 ${activeDetailDomain.id === 5 ? 'bg-[#d4af37]' : 'bg-zinc-300'
                                }`}></span>
                            </span>
                            <span>{activeDetailDomain.id === 5 ? 'High Demand' : 'Core'}</span>
                          </div>
                        </div>

                        {/* Header Info */}
                        <div className="flex items-start gap-5 mb-8 border-b border-white/5 pb-6 flex-shrink-0">
                          <div className={`w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0 ${activeDetailDomain.id === 5
                            ? 'bg-[#d4af37]/10 text-[#d4af37]'
                            : 'bg-white/5 text-zinc-300'
                            }`}>
                            {activeDetailDomain.icon}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-1">Domain Details</span>
                            <h4 className={`text-2xl md:text-3xl font-serif ${activeDetailDomain.id === 5 ? 'text-[#d4af37]' : 'text-zinc-100'
                              }`}>
                              {activeDetailDomain.title}
                            </h4>
                          </div>
                        </div>

                        {/* Scrollable details */}
                        <div className="overflow-y-auto flex-grow pr-2 pb-6 custom-scrollbar">
                          <h5 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">Included Services</h5>
                          <ul className="space-y-4">
                            {activeDetailDomain.items.map((item, idx) => (
                              <motion.li
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={idx}
                                className="text-base text-white/70 font-light flex items-start gap-4 py-1.5"
                              >
                                <span className={`mt-2 block w-2 h-2 rounded-full flex-shrink-0 ${activeDetailDomain.id === 5 ? 'bg-[#d4af37]/75' : 'bg-zinc-500'
                                  }`} />
                                <span className="leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Footer action to close */}
                        <div className="border-t border-white/5 pt-6 flex justify-end flex-shrink-0">
                          <button
                            onClick={() => setActiveDetailDomain(null)}
                            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${activeDetailDomain.id === 5
                              ? 'bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/20'
                              : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            Close Window
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
