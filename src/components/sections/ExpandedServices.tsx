'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Code, Smartphone, PenTool, Sparkles, GraduationCap } from 'lucide-react';

const domains = [
  {
    id: 1,
    title: 'Website Development',
    tagline: 'High-performance, responsive web architectures engineered for modern speed, design, and SEO.',
    icon: <Code className="w-6 h-6" />,
    items: [
      'Business & Corporate sites',
      'Portfolio & Creative showcases',
      'High-converting landing pages',
      'College / Academic websites',
      'Startup MVP platforms',
      'E-commerce integrations',
      'Interactive admin dashboards',
    ],
    workflow: [
      { step: '01', title: 'Scope & Architecture', desc: 'Analyzing target audience, scoping requirements, and mapping site structure.' },
      { step: '02', title: 'Figma UI/UX Blueprint', desc: 'Crafting layout wireframes and high-fidelity mockups for design approval.' },
      { step: '03', title: 'Pixel-Perfect Dev', desc: 'Writing clean, accessible frontends using Next.js/React and optimized styling.' },
      { step: '04', title: 'API & State Integration', desc: 'Connecting databases, payment gates, headless CMSs, and business logic.' },
      { step: '05', title: 'Performance & Release', desc: 'Vitals tuning, metadata audit, search console setup, and Vercel launch.' },
    ],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    tagline: 'Stunning cross-platform mobile apps built with fluid transitions and native execution speed.',
    icon: <Smartphone className="w-6 h-6" />,
    items: [
      'Android applications',
      'iOS integrations',
      'Cross-platform layouts',
      'On-demand booking systems',
      'Real-time tracking apps',
      'Student portal applications',
      'E-Health tracking apps',
    ],
    workflow: [
      { step: '01', title: 'Process Mapping', desc: 'Fleshing out user stories, API contracts, and security schemas.' },
      { step: '02', title: 'Mobile UI/UX Design', desc: 'Designing screen workflows and prototype flows tailored for touch screens.' },
      { step: '03', title: 'Flutter / Native Engine', desc: 'Developing the application using shared codebase frameworks with native output.' },
      { step: '04', title: 'Cloud Systems Sync', desc: 'Hooking up Auth, cloud storage, real-time push alerts, and Stripe/Razorpay.' },
      { step: '05', title: 'Stores Launch & QA', desc: 'Exhaustive builds verification on device simulators and Play Store release.' },
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    tagline: 'Bespoke design systems and wireframes that keep users engaged and elevate brand value.',
    icon: <PenTool className="w-6 h-6" />,
    items: [
      'Figma design systems',
      'Low/High-fidelity wireframes',
      'Mobile viewport mapping',
      'Dashboard & Web app UI',
      'Modern product redesigns',
      'Visual asset generation',
    ],
    workflow: [
      { step: '01', title: 'UX Auditing', desc: 'Conducting competitive research, audience profiling, and information design.' },
      { step: '02', title: 'Low-fi Wireframes', desc: 'Drafting structure blocks to map information grid before styling details.' },
      { step: '03', title: 'UI Kit Creation', desc: 'Creating unified style systems (typography, dark-themes, premium colors).' },
      { step: '04', title: 'High-fi Mockups', desc: 'Creating full-color screens with gorgeous visual depth in Figma.' },
      { step: '05', title: 'Prototyping & Hand-off', desc: 'Assembling clickable prototypes and providing clean design tokens to devs.' },
    ],
  },
  {
    id: 4,
    title: 'AI Integration Services',
    tagline: 'Modernizing standard products with generative AI systems and automated pipeline agents.',
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      'Smart customer chatbots',
      'OpenAI API integrations',
      'Generative copy systems',
      'WhatsApp bot automations',
      'Email auto-replies',
      'No-code workflow pipelines',
    ],
    workflow: [
      { step: '01', title: 'Pipeline Discovery', desc: 'Evaluating business systems to spot manual stages ready for automation.' },
      { step: '02', title: 'LLM & Prompts Tuning', desc: 'Testing prompts and grounding them using Vector Databases (RAG).' },
      { step: '03', title: 'Agent Development', desc: 'Coding backend handlers, workflow engines, and system interfaces.' },
      { step: '04', title: 'Interface Hookup', desc: 'Linking models into chat screens, WhatsApp targets, or webhook relays.' },
      { step: '05', title: 'Cost & Usage telemetry', desc: 'Monitoring tokens consumption, logging requests, and caching calls.' },
    ],
  },
  {
    id: 5,
    title: 'College Project Development',
    tagline: 'Premium, fully documented academic builds with stable backends and presentation assets.',
    icon: <GraduationCap className="w-6 h-6 text-[#d4af37]" />,
    items: [
      'Academic mini projects',
      'Major research projects',
      'Java & OOP codebases',
      'Python & ML solutions',
      'Modern web apps (MERN)',
      'Black-book documentation',
      'PPT & Synopsis reports',
    ],
    workflow: [
      { step: '01', title: 'Syllabus Review', desc: 'Matching technical guidelines, examiner requirements, and marking metrics.' },
      { step: '02', title: 'Stack & Schema Set', desc: 'Selecting appropriate frameworks and building database relationships.' },
      { step: '03', title: 'Development & Build', desc: 'Developing the frontend UI, authentication, and core business queries.' },
      { step: '04', title: 'Sandbox Dry Run', desc: 'Installing and testing code on your machine to ensure zero demo errors.' },
      { step: '05', title: 'Documentation Bundle', desc: 'Packaging full system documentation, PPT files, and setup instructions.' },
    ],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

// Sub-component for individual domain cards
function ServiceCard({
  domain,
  isSpecial,
  onClick,
}: {
  domain: typeof domains[0];
  isSpecial: boolean;
  onClick: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'services' | 'workflow'>('services');

  const getBgIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Code className="w-full h-full" strokeWidth={1} />;
      case 2:
        return <Smartphone className="w-full h-full" strokeWidth={1} />;
      case 3:
        return <PenTool className="w-full h-full" strokeWidth={1} />;
      case 4:
        return <Sparkles className="w-full h-full" strokeWidth={1} />;
      case 5:
        return <GraduationCap className="w-full h-full" strokeWidth={1} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`group relative p-[1.5px] rounded-[24px] transition-all duration-700 h-full shadow-lg cursor-pointer ${
        isSpecial
          ? 'bg-gradient-to-br from-[#d4af37]/45 via-[#d4af37]/15 to-transparent hover:from-[#d4af37]/65 hover:via-[#d4af37]/25 hover:to-[#d4af37]/15 hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]'
          : 'bg-gradient-to-br from-white/20 via-white/5 to-transparent hover:from-white/40 hover:via-white/10 hover:to-white/5 hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)]'
      }`}
    >
      {/* Inner Card Content */}
      <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-[22.5px] p-8 overflow-hidden flex flex-col justify-between min-h-[580px]">
        
        {/* Large Background SVG Watermark */}
        <div className={`absolute -right-12 -bottom-12 w-64 h-64 transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 ${
          isSpecial
            ? 'text-[#d4af37]/[0.02] group-hover:text-[#d4af37]/[0.06]'
            : 'text-white/[0.02] group-hover:text-white/[0.06]'
        }`}>
          {getBgIcon(domain.id)}
        </div>

        <div className="relative z-10 flex flex-col h-full flex-grow">
          {/* Header row: Icon & Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 shadow-sm transform group-hover:scale-110 group-hover:rotate-3 ${
              isSpecial
                ? 'bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37]/20'
                : 'bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10'
            }`}>
              {domain.icon}
            </div>
            <span className={`px-3 py-1 border rounded-full text-[9px] uppercase tracking-widest font-semibold ${
              isSpecial
                ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]'
                : 'bg-white/5 border-white/10 text-white/50'
            }`}>
              {isSpecial ? 'POPULAR' : 'CORE'}
            </span>
          </div>
          
          {/* Title & Tagline */}
          <h3 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${
            isSpecial
              ? 'text-[#d4af37] group-hover:text-[#d4af37]/80'
              : 'text-white group-hover:text-zinc-200'
          }`}>
            {domain.title}
          </h3>
          <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light mb-6">
            {domain.tagline}
          </p>

          {/* Premium Tab Switcher */}
          <div className={`flex p-1 rounded-full border mb-6 relative ${
            isSpecial ? 'bg-[#d4af37]/5 border-[#d4af37]/10' : 'bg-white/[0.03] border-white/5'
          }`}>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('services'); }}
              className={`flex-1 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 relative z-10 ${
                activeTab === 'services'
                  ? 'text-black font-bold'
                  : (isSpecial ? 'text-[#d4af37]/60 hover:text-[#d4af37]' : 'text-white/60 hover:text-white')
              }`}
            >
              {activeTab === 'services' && (
                <motion.div
                  layoutId={`active-tab-bg-expanded-${domain.id}`}
                  className={`absolute inset-0 rounded-full z-[-1] ${isSpecial ? 'bg-[#d4af37]' : 'bg-white'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Services
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('workflow'); }}
              className={`flex-1 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 relative z-10 ${
                activeTab === 'workflow'
                  ? 'text-black font-bold'
                  : (isSpecial ? 'text-[#d4af37]/60 hover:text-[#d4af37]' : 'text-white/60 hover:text-white')
              }`}
            >
              {activeTab === 'workflow' && (
                <motion.div
                  layoutId={`active-tab-bg-expanded-${domain.id}`}
                  className={`absolute inset-0 rounded-full z-[-1] ${isSpecial ? 'bg-[#d4af37]' : 'bg-white'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Workflow
            </button>
          </div>
          
          {/* Tab Content Box */}
          <div className="flex-grow flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {activeTab === 'services' ? (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <ul className="space-y-3">
                    {domain.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-white/70 font-light flex items-start gap-3 transition-colors duration-500 group-hover:text-white/95">
                        <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-500 ${
                          isSpecial
                            ? 'bg-[#d4af37]/45 group-hover:bg-[#d4af37]'
                            : 'bg-white/20 group-hover:bg-white/60'
                        }`} />
                        <span className="transform group-hover:translate-x-0.5 transition-transform duration-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="workflow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-grow flex flex-col justify-between"
                >
                  <div className="relative pl-6 space-y-4 my-1">
                    {/* Vertical timeline line */}
                    <div className={`absolute left-[3px] top-1 bottom-1 w-[2px] ${
                      isSpecial
                        ? 'bg-gradient-to-b from-[#d4af37]/45 via-[#d4af37]/15 to-transparent'
                        : 'bg-gradient-to-b from-white/20 via-white/5 to-transparent'
                    }`} />
                    
                    {domain.workflow.map((step, idx) => (
                      <div key={idx} className="relative group/step">
                        {/* Bullet node centered at 4px */}
                        <div className={`absolute left-0 top-[5px] w-2 h-2 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isSpecial
                            ? 'bg-[#0a0a0a] border-[#d4af37]/50 group-hover/step:border-[#d4af37] group-hover/step:scale-125'
                            : 'bg-[#0a0a0a] border-white/25 group-hover/step:border-white group-hover/step:scale-125'
                        }`} />
                        <div>
                          <span className={`text-[9px] uppercase tracking-widest font-semibold block mb-0.5 ${
                            isSpecial ? 'text-[#d4af37]/80' : 'text-white/60'
                          }`}>
                            Step {step.step} • {step.title}
                          </span>
                          <p className="text-[11px] text-white/45 leading-relaxed font-light group-hover/step:text-white/75 transition-colors duration-300">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Footer action indicator */}
        <div className="relative z-10 mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          <span className={isSpecial ? 'text-[#d4af37]' : 'text-zinc-300'}>Explore Domain Detail</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${isSpecial ? 'text-[#d4af37]' : 'text-zinc-300'}`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExpandedServices() {
  const [activeDetailDomain, setActiveDetailDomain] = useState<typeof domains[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeDetailDomain) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeDetailDomain]);

  return (
    <section className="py-20 md:py-32 relative z-10" id="expanded-services">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {domains.map((domain) => {
            const isSpecial = domain.id === 5;

            return (
              <ServiceCard
                key={domain.id}
                domain={domain}
                isSpecial={isSpecial}
                onClick={() => setActiveDetailDomain(domain)}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Modal Overlay via Portal — escapes framer-motion transform context */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeDetailDomain && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailDomain(null)}
              className="fixed inset-0 z-[9999] bg-[#0a0a0a]"
              style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
            >
              {/* Full-Screen Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full bg-[#0a0a0a] p-6 md:p-12 flex flex-col overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveDetailDomain(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header Info */}
                <div className="flex items-start gap-6 mb-10 border-b border-white/10 pb-8 flex-shrink-0">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0 ${
                    activeDetailDomain.id === 5
                      ? 'bg-[#d4af37]/10 text-[#d4af37]'
                      : 'bg-white/10 text-white'
                  }`}>
                    {activeDetailDomain.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold border ${
                        activeDetailDomain.id === 5
                          ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]'
                          : 'bg-white/5 border-white/10 text-white/60'
                      }`}>
                        {activeDetailDomain.id === 5 ? 'High Demand' : 'Core Expertise'}
                      </span>
                    </div>
                    <h4 className={`text-2xl md:text-3xl font-serif mt-1.5 ${
                      activeDetailDomain.id === 5 ? 'text-[#d4af37]' : 'text-white'
                    }`}>
                      {activeDetailDomain.title}
                    </h4>
                  </div>
                </div>

                {/* Two-Column Details Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 overflow-y-auto flex-1 min-h-0 pr-2 pb-6 custom-scrollbar">
                  {/* Left Column: Scope & Offerings */}
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-3">Scope of Work</span>
                      <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                        {activeDetailDomain.tagline}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-4">Core Deliverables</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeDetailDomain.items.map((item, idx) => (
                          <li
                            key={idx}
                            className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors duration-300 hover:bg-white/[0.02] ${
                              activeDetailDomain.id === 5
                                ? 'border-[#d4af37]/10 hover:border-[#d4af37]/35 text-white/80'
                                : 'border-white/5 hover:border-white/20 text-white/80'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              activeDetailDomain.id === 5 ? 'bg-[#d4af37]' : 'bg-white/60'
                            }`} />
                            <span className="text-xs md:text-sm font-light leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Elegant Call to Action Box */}
                    <div className={`p-6 rounded-2xl border ${
                      activeDetailDomain.id === 5
                        ? 'bg-[#d4af37]/5 border-[#d4af37]/10'
                        : 'bg-white/[0.02] border-white/5'
                    }`}>
                      <h6 className={`text-sm font-medium mb-1 ${activeDetailDomain.id === 5 ? 'text-[#d4af37]' : 'text-white'}`}>
                        Ready to build this?
                      </h6>
                      <p className="text-xs text-white/40 mb-4 font-light leading-relaxed">
                        Let's team up to turn these services into a functional, custom release.
                      </p>
                      <a
                        href="/contact"
                        onClick={() => {
                          setActiveDetailDomain(null);
                        }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 ${
                          activeDetailDomain.id === 5
                            ? 'bg-[#d4af37] text-black hover:bg-[#d4af37]/90'
                            : 'bg-white text-black hover:bg-zinc-200'
                        }`}
                      >
                        <span>Initiate Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Process Timeline */}
                  <div className="border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-6">Execution Roadmap</span>
                    
                    <div className="relative space-y-6 pl-8">
                      {/* Visual glowing timeline path */}
                      <div className={`absolute left-[7px] top-2 bottom-2 w-[2px] ${
                        activeDetailDomain.id === 5
                          ? 'bg-gradient-to-b from-[#d4af37] via-[#d4af37]/20 to-transparent'
                          : 'bg-gradient-to-b from-white/30 via-white/5 to-transparent'
                      }`} />

                      {activeDetailDomain.workflow.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="relative group/modal-step"
                        >
                          {/* Timeline node */}
                          <div className={`absolute left-0 top-[2px] w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            activeDetailDomain.id === 5
                              ? 'bg-[#050505] border-[#d4af37] text-[#d4af37]'
                              : 'bg-[#050505] border-white/40 text-white'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${activeDetailDomain.id === 5 ? 'bg-[#d4af37]' : 'bg-white'}`} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${
                                activeDetailDomain.id === 5
                                  ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]'
                                  : 'bg-white/5 border-white/10 text-white/80'
                              }`}>
                                Step {step.step}
                              </span>
                              <h5 className="text-sm font-medium text-white group-hover/modal-step:text-white/95 transition-colors duration-300">
                                {step.title}
                              </h5>
                            </div>
                            <p className="text-xs text-white/45 leading-relaxed font-light group-hover/modal-step:text-white/70 transition-colors duration-300">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer close option */}
                <div className="border-t border-white/5 pt-6 flex justify-end flex-shrink-0 mt-4">
                  <button
                    onClick={() => setActiveDetailDomain(null)}
                    className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                      activeDetailDomain.id === 5
                        ? 'bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/20'
                        : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Close Overlay
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
