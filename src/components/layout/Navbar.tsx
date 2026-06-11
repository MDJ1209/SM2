'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-2 lg:py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white drop-shadow-sm z-50 flex items-center" data-purpose="logo" onClick={closeMenu}>
            <Image src="/projects/logo.png" alt="DUDEE" width={240} height={80} priority className="h-8 sm:h-10 md:h-12 w-auto object-contain scale-[1.8] sm:scale-[2] md:scale-[2.2] origin-left md:translate-y-1 lg:translate-y-1.5" />
          </Link>
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-widest font-semibold text-white/90">
            {menuLinks.map((link) => (
              <Link key={link.name} className="hover:text-white transition-colors duration-300" href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 text-[10px] uppercase tracking-widest cursor-pointer text-white/90 flex items-center gap-3 focus:outline-none bg-transparent border-0 min-w-[44px] min-h-[44px] justify-end"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <span className="font-semibold text-[10px] tracking-widest">{isOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="w-5 h-[14px] flex flex-col justify-between items-end relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1.5px] bg-white block rounded-full"
              />
              <motion.span
                animate={isOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="h-[1.5px] w-3 bg-white block rounded-full origin-right"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1.5px] bg-white block rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-4 md:px-8"
          >
            {/* Background design elements */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 max-w-md w-full"
            >
              {menuLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-serif text-4xl sm:text-5xl text-white/90 hover:text-white block hover:italic transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 mt-8 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">General Inquiries</span>
                <a href="mailto:dudeepartners@gmail.com" className="text-lg text-white/80 hover:text-white transition-colors font-light break-all">
                  dudeepartners@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
