'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  filterTag: string;
}

const projects: Project[] = [
  {
    title: "Medbud",
    category: "Healthcare & Wellness Platform",
    year: "2024",
    image: "/projects/medbud.png",
    description: "A premium clinical wellness portal connecting patients with specialized medical advisors and real-time prescription tracking. Built with clinical-grade security and advanced WebGL interactions.",
    tags: ["Clinical WebGL", "Patient Portal", "Next.js"],
    filterTag: "Health & SaaS",
  },
  {
    title: "Hotel Ocean Blue",
    category: "Luxury Resort Reservation",
    year: "2025",
    image: "/projects/hotel-ocean-blue.png",
    description: "Bespoke digital booking system and property guide for an ultra-luxury Maldives oceanfront resort, showcasing immersive WebGL experiences.",
    tags: ["Spatial WebGL", "Real-Time Booking", "GSAP Animations"],
    filterTag: "Luxury & Spatial",
  },
  {
    title: "Amaravati Conventions",
    category: "Spatial Architecture Platform",
    year: "2024",
    image: "/projects/amaravati.png",
    description: "A digital identity and interactive spatial seat-planning application for India's premier architectural exhibition center.",
    tags: ["3D Seat Planner", "Responsive Grid", "PostgreSQL"],
    filterTag: "Luxury & Spatial",
  },
  {
    title: "Pollocks School",
    category: "EdTech & Academic Workspace",
    year: "2023",
    image: "/projects/pollocks.png",
    description: "A state-of-the-art interactive learning management platform and dashboard designed for a prestigious international academy.",
    tags: ["LMS Ecosystem", "Interactive Stats", "Framer Motion"],
    filterTag: "Platforms & EdTech",
  },
  {
    title: "Easy-Variants",
    category: "SaaS & Merchant Tooling",
    year: "2025",
    image: "/projects/easy-variants.png",
    description: "An advanced visual product variant builder SaaS that allows merchants to easily scale e-commerce options with zero-lag performance.",
    tags: ["Visual Node Editor", "E-commerce Engine", "Shopify API"],
    filterTag: "Health & SaaS",
  },
  {
    title: "Loyal-Daddy",
    category: "Streetwear Fashion Hub",
    year: "2024",
    image: "/projects/loyal-daddy.png",
    description: "An exclusive, editorial streetwear lookbook and gamified customer loyalty platform blending fashion drops with community rewards.",
    tags: ["Creative Direction", "Loyalty Gamification", "Tailwind v4"],
    filterTag: "Luxury & Spatial",
  }
];

const categories = ["All", "Luxury & Spatial", "Health & SaaS", "Platforms & EdTech"];

export default function ExpandedPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.filterTag === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="px-8 py-20 md:py-32 max-w-[1800px] mx-auto" id="expanded-work">
      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-20 md:mb-32">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className="relative text-xs md:text-sm uppercase tracking-widest font-semibold cursor-pointer pb-2 transition-colors duration-300 bg-transparent border-0"
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

      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-32 md:space-y-48"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-3/5 group relative cursor-pointer">
                  <div className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 border border-white/20 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                    <span className="text-[10px] tracking-widest text-white/30 font-serif italic">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs uppercase tracking-wider px-4 py-2 bg-white/5 text-white/80 rounded-sm border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#explore"
                    className="group/btn inline-flex items-center gap-4 text-xs uppercase tracking-widest font-semibold text-white transition-colors duration-300 w-max"
                  >
                    Explore Case Study
                    <span className="w-10 h-[1px] bg-white/30 group-hover/btn:w-16 group-hover/btn:bg-white transition-all duration-500 relative flex items-center">
                      <ArrowUpRight className="w-4 h-4 absolute -right-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-all duration-500" />
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center text-white/40 font-serif italic text-2xl">
            No projects found in this category.
          </div>
        )}
      </motion.div>
    </section>
  );
}
