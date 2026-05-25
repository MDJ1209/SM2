'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We were amazed by the speed, talent, and professional execution of this collective of student creators. SM² completely revolutionized our medical workflow into a gorgeous, HIPAA-compliant work of art.",
    author: "Dr. Clara Vance",
    role: "Chief Executive",
    project: "Medbud Health Portal",
  },
  {
    quote: "The WebGL reservation experience built by SM²'s freelance collective drove our luxury room bookings up by 140% in three months. Unparalleled attention to detail, academic-grade innovation, and absolute precision.",
    author: "Jean-Luc Dubois",
    role: "General Manager",
    project: "Ocean Blue Resorts",
  },
  {
    quote: "Elite streetwear demands elite digital spaces. Working with SM²'s talented student creators was a revelation—they bypassed the typical agency layers to deliver an immersive loyalty platform that perfectly represents our culture.",
    author: "Kaleb Cross",
    role: "Creative Director",
    project: "Loyal-Daddy Apparel",
  },
  {
    quote: "Absolute engineering wizardry. Bypassing bloated corporate agencies and working directly with the student creators at SM² allowed us to scale 10,000+ variants on Shopify with zero lag.",
    author: "Aisha Rahman",
    role: "Chief Technology Officer",
    project: "Easy-Variants SaaS",
  },
  {
    quote: "The spatial 3D hall planning system is an architectural masterpiece. This team of student creators took a highly complex venue layout and made it incredibly intuitive for our event planners.",
    author: "Pranav Rao",
    role: "Managing Director",
    project: "Amaravati Conventions",
  }
];

export default function Validation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const interval = isMobile ? 2000 : 8000;
    timerRef.current = setInterval(() => {
      handleNext();
    }, interval);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isMobile]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Animation variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "30%" : "-30%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.45, ease: "easeOut" },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-30%" : "30%",
      opacity: 0,
      transition: {
        x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.45, ease: "easeIn" },
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 lg:py-48 px-8 border-t border-white/10 relative overflow-hidden" id="validation">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Heading */}
        <div className="col-span-12 lg:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6 md:mb-8">
            Validation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white leading-tight">
            Endorsed by <br />
            <span className="italic font-normal">visionary</span> leaders.
          </h2>
          
          {/* Custom Controls (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4 mt-16">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Carousel Wrapper */}
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-between min-h-[300px] lg:min-h-[380px] lg:pl-16">
          <div className="relative overflow-hidden w-full flex-1">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-white/[0.03] absolute -top-4 -left-4 pointer-events-none" />

            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing select-none py-4"
              >
                {/* Main Quote */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-serif font-light mb-12 leading-relaxed text-white/95 tracking-wide">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>

                {/* Author Details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-8 gap-4">
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-white/30 border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.02]">
                      {testimonials[activeIndex].project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Anchors & Autoplay Progress */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-row justify-between items-center flex-wrap gap-6">
            <div className="flex flex-wrap gap-4 md:gap-6">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className="group flex flex-col items-start cursor-pointer pb-2 bg-transparent border-0"
                >
                  <span 
                    className="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300"
                    style={{ color: activeIndex === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.3)' }}
                  >
                    {t.author.split(' ').pop()}
                  </span>
                  
                  {/* Subtle active state bar with animated width */}
                  <div className="w-full mt-2 h-[2px] bg-white/10 relative overflow-hidden rounded-full min-w-[40px]">
                    {activeIndex === idx && (
                      <motion.div 
                        key={`${activeIndex}-${isMobile}`}
                        layoutId="activeBar"
                        className="absolute inset-y-0 left-0 bg-white" 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: isMobile ? 2 : 8, ease: "linear" }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile-only Chevron controls */}
            <div className="flex lg:hidden items-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 cursor-pointer bg-transparent"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 cursor-pointer bg-transparent"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

