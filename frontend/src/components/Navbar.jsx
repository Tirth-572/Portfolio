import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling down 50px
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentIdx = 0;
      
      navLinks.forEach((link, index) => {
        const element = document.getElementById(link.to);
        if (element && element.offsetTop <= scrollPosition) {
          currentIdx = index;
        }
      });
      
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentIdx = navLinks.length - 1;
      }

      setActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleLinks = navLinks.slice(0, activeIndex + 1);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
        >
          <div className="flex items-center justify-center w-full pointer-events-auto">
            {/* Center Dynamic Pill */}
            <motion.div 
              layout
              className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-full shadow-lg p-1.5 flex items-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <AnimatePresence mode="popLayout">
                {visibleLinks.map((link, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={link.to}
                      layout
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="relative flex items-center shrink-0"
                    >
                      <Link
                        to={link.to}
                        smooth
                        duration={500}
                        offset={-80}
                        className={`relative z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold cursor-pointer transition-colors block ${
                          isActive ? 'text-primary-700' : 'text-slate-500 hover:text-primary-600'
                        }`}
                      >
                        <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activePill"
                            className="absolute inset-0 bg-primary-100/50 border border-primary-200 rounded-full shadow-[0_0_10px_rgba(113,201,206,0.3)]"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
