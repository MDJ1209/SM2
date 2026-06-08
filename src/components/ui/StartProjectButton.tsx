'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function StartProjectButton() {
  const pathname = usePathname();

  // The button should not appear on the contact page
  const isContactPage = pathname === '/contact';

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link href="/contact" className="group block">
            <div className="relative flex items-center gap-3 bg-black/60 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white/90 backdrop-blur-md px-6 py-4 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Premium hover background effect */}
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              
              <span className="relative z-10 text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors duration-500">
                Start a Project
              </span>
              
              <motion.div 
                className="relative z-10 w-4 h-4 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-black/10 transition-colors duration-500"
                whileHover={{ rotate: 45 }}
              >
                <ArrowUpRight className="w-3 h-3 text-white group-hover:text-black transition-colors duration-500" />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
