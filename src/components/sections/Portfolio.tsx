'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo, Variants } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  filterTag: string;
  span: string;
  aspect: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Medbud",
    category: "Healthcare & Wellness Platform",
    year: "2024",
    image: "/projects/medbud.png",
    description: "A premium clinical wellness portal connecting patients with specialized medical advisors and real-time prescription tracking.",
    tags: ["Clinical WebGL", "Patient Portal", "Next.js"],
    filterTag: "Health & SaaS",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/5]",
    link: "https://medbud-ss-oy23.vercel.app/",
  },
  {
    title: "Hotel Ocean Blue",
    category: "Luxury Resort Reservation",
    year: "2025",
    image: "/projects/hotel-ocean-blue.png",
    description: "Bespoke digital booking system and property guide for an ultra-luxury Maldives oceanfront resort, showcasing immersive WebGL experiences.",
    tags: ["Spatial WebGL", "Real-Time Booking", "GSAP Animations"],
    filterTag: "Luxury & Spatial",
    span: "col-span-12 md:col-span-4 md:col-start-9 md:mt-32",
    aspect: "aspect-[3/4]",
    link: "https://ocean-blue-ashen.vercel.app/",
  },
  {
    title: "Amaravati Conventions",
    category: "Spatial Architecture Platform",
    year: "2024",
    image: "/projects/amaravati.png",
    description: "A digital identity and interactive spatial seat-planning application for India's premier architectural exhibition center.",
    tags: ["3D Seat Planner", "Responsive Grid", "PostgreSQL"],
    filterTag: "Luxury & Spatial",
    span: "col-span-12 md:col-span-5 md:mt-[-8%]",
    aspect: "aspect-[4/3]",
    link: "https://mdj1209.github.io/XSCADE-Amaravathi_Conventions/",
  },
  {
    title: "Pollocks School",
    category: "EdTech & Academic Workspace",
    year: "2023",
    image: "/projects/pollocks.png",
    description: "A state-of-the-art interactive learning management platform and dashboard designed for a prestigious international academy.",
    tags: ["LMS Ecosystem", "Interactive Stats", "Framer Motion"],
    filterTag: "Platforms & EdTech",
    span: "col-span-12 md:col-span-6 md:col-start-7",
    aspect: "aspect-video",
    link: "https://pollocks-nu.vercel.app/",
  },
  {
    title: "Easy-Variants",
    category: "SaaS & Merchant Tooling",
    year: "2025",
    image: "/projects/easy-variants.png",
    description: "An advanced visual product variant builder SaaS that allows merchants to easily scale e-commerce options with zero-lag performance.",
    tags: ["Visual Node Editor", "E-commerce Engine", "Shopify API"],
    filterTag: "Health & SaaS",
    span: "col-span-12 md:col-span-6 md:mt-12",
    aspect: "aspect-square",
    link: "https://easy-variants-3mla.vercel.app/",
  },
  {
    title: "Loyal-Daddy",
    category: "Streetwear Fashion Hub",
    year: "2024",
    image: "/projects/loyal-daddy.png",
    description: "An exclusive, editorial streetwear lookbook and gamified customer loyalty platform blending fashion drops with community rewards.",
    tags: ["Creative Direction", "Loyalty Gamification", "Tailwind v4"],
    filterTag: "Luxury & Spatial",
    span: "col-span-12 md:col-span-5 md:col-start-8 md:mt-[-12%]",
    aspect: "aspect-[3/4]",
    link: "https://loyal-dad-six.vercel.app/",
  },
  {
    title: "The Painted Muse",
    category: "Cultural Arts Platform",
    year: "2026",
    image: "/projects/The-Painted-muse.png",
    description: "A cultural platform connecting artists and users to discover state-wise art forms, purchase original artworks, and participate in interactive workshops.",
    tags: ["Art Marketplace", "Workshops", "Cultural Discovery"],
    filterTag: "Platforms & EdTech",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/3]",
    link: "https://the-painted-muse.onrender.com/",
  }
];

const categories = ["All", "Luxury & Spatial", "Health & SaaS", "Platforms & EdTech"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.filterTag === activeFilter);

  // Reset slide index on filter change
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  // Slideshow Handlers
  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setSlideDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Autoplay Timer (1.5s for immersive mobile browsing)
  useEffect(() => {
    if (!isMobile || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 1500);
    return () => clearInterval(timer);
  }, [isMobile, filteredProjects.length, currentSlide]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(10px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
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
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.45, ease: "easeIn" },
      },
    }),
  };

  return (
    <section className="px-4 md:px-8 py-20 md:py-32 max-w-[1800px] mx-auto border-t border-white/10" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pt-8 md:pt-16 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6 md:mb-8">
            Real-World Builds
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl max-w-4xl leading-tight text-white">
            Legacy of Our Premium Creations.
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-white/10 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="relative text-[10px] uppercase tracking-widest font-semibold cursor-pointer pb-2 transition-colors duration-300 bg-transparent border-0"
              style={{ color: activeFilter === category ? '#ffffff' : 'rgba(255, 255, 255, 0.4)' }}
            >
              {category}
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive View Switch */}
      {isMobile ? (
        /* Mobile Slideshow View */
        <div className="relative overflow-hidden w-full select-none" data-purpose="mobile-slideshow">
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col w-full">
              {/* Slideshow Card container */}
              <div className="relative overflow-hidden w-full aspect-[4/5] bg-neutral-900/50 border border-white/5 rounded-sm">
                <AnimatePresence initial={false} custom={slideDirection}>
                  <motion.div
                    key={currentSlide}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full flex flex-col justify-end"
                  >
                    <Image
                      src={filteredProjects[currentSlide].image}
                      alt={filteredProjects[currentSlide].title}
                      fill
                      className="object-cover pointer-events-none"
                    />

                    {/* Semi-transparent dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                    {/* Inline top category indicator */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[8px] uppercase tracking-widest px-2.5 py-1 bg-black/60 text-white/95 rounded-full border border-white/15 backdrop-blur-md font-medium">
                        {filteredProjects[currentSlide].category}
                      </span>
                    </div>

                    {/* Overlay content at bottom of image */}
                    <div className="relative z-10 p-6 space-y-3">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-serif text-2xl text-white">
                          {filteredProjects[currentSlide].title}
                        </h3>
                        <span className="font-serif italic text-white/50 text-xs">
                          {filteredProjects[currentSlide].year}
                        </span>
                      </div>
                      <p className="text-white/80 text-xs font-light font-sans max-w-sm line-clamp-3">
                        {filteredProjects[currentSlide].description}
                      </p>

                      <a
                        href={filteredProjects[currentSlide].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-white/90 pt-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Indicator Dots / Bars */}
              <div className="flex gap-2 mt-6">
                {filteredProjects.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-[2px] flex-1 bg-white/15 rounded-full overflow-hidden relative cursor-pointer"
                    onClick={() => {
                      setSlideDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                  >
                    {currentSlide === idx && (
                      <motion.div
                        key={currentSlide}
                        className="absolute inset-y-0 left-0 bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Slider Manual Navigation Controls */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40">
                  {currentSlide + 1} / {filteredProjects.length}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="group relative overflow-hidden w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black transition-all duration-300 bg-transparent focus:outline-none cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="relative z-10 w-4 h-4 transition-colors duration-300 group-hover:text-black" />
                    <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-[0.16,1,0.3,1]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="group relative overflow-hidden w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black transition-all duration-300 bg-transparent focus:outline-none cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="relative z-10 w-4 h-4 transition-colors duration-300 group-hover:text-black" />
                    <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-[0.16,1,0.3,1]" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-white/40 font-serif italic text-lg">
              No projects found in this category.
            </div>
          )}
        </div>
      ) : (
        /* Desktop Masonry/Grid View */
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const originalIndex = projects.findIndex(p => p.title === project.title);
              const isHovered = hoveredIndex === originalIndex;

              return (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer w-full"
                  data-purpose="project-card"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    {/* Image Container with Zoom & Hover Info Panels */}
                    <div className="image-zoom-container bg-neutral-900/50 mb-8 relative overflow-hidden transition-all duration-700 border border-white/5 rounded-sm aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Elegant Glassmorphism Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-[3px] p-8 flex flex-col justify-between z-10"
                      >
                        {/* Top part: tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] uppercase tracking-widest px-2.5 py-1 bg-white/10 text-white/95 rounded-full border border-white/10 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom part: description & action button */}
                        <div className="space-y-4">
                          <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light font-sans max-w-sm">
                            {project.description}
                          </p>
                          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-white border-b border-white/30 pb-1 group/btn hover:border-white transition-colors duration-300">
                            Explore Case Study
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Metadata Row */}
                    <div className="flex justify-between items-baseline border-t border-white/20 pt-4 relative overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:translate-x-1">
                        <h3 className="font-serif text-2xl text-white flex items-center gap-2">
                          {project.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
                          {project.category}
                        </p>
                      </div>
                      <span className="font-serif italic text-white/40 text-sm transition-colors duration-500 group-hover:text-white/85">
                        {project.year}
                      </span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
