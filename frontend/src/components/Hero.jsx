import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.titles, 100, 50, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-dark-500" />
      <ParticleBackground />

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-500 font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-primary-500" />
              Hello, I&apos;m
            </motion.p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-slate-900 dark:text-white">{personalInfo.name}</span>
            </h1>

            <div className="h-12 sm:h-14 mb-6">
              <span className="text-2xl sm:text-3xl font-semibold gradient-text">
                {typedText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              Building modern, scalable web applications with React.js, Node.js &amp; cloud databases.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <HiDownload className="w-5 h-5" />
                Download Resume
              </a>
              <Link to="projects" smooth duration={500} offset={-80} className="btn-outline cursor-pointer">
                View Projects
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link to="contact" smooth duration={500} offset={-80} className="btn-outline cursor-pointer">
                Contact Me
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors w-fit"
              >
                <FaGithub className="w-5 h-5" />
                github.com/Tirth-572
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors w-fit"
              >
                <FaLinkedin className="w-5 h-5 text-[#0a66c2]" />
                linkedin.com/in/tirth-vadariya-53351637a
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-[400px] sm:h-[400px]">
              {/* Outer Glowing Orbs */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/35 to-orange-600/20 blur-3xl animate-pulse-slow" />
              
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Rotating Dashed Outer SVG border */}
                <svg viewBox="0 0 400 400" className="absolute w-full h-full animate-spin-slow pointer-events-none" fill="none">
                  <circle cx="200" cy="200" r="190" stroke="url(#grad)" strokeWidth="2.5" strokeDasharray="12 12" />
                  <circle cx="200" cy="200" r="176" stroke="url(#grad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Main Profile Image in Round Shape */}
                <div className="w-[84%] h-[84%] rounded-full p-2 bg-gradient-to-br from-primary-500/20 to-orange-500/10 backdrop-blur-md border border-white/20 dark:border-slate-800/50 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/80 dark:border-slate-900/80 shadow-inner">
                    <img 
                      src={personalInfo.avatar} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-center scale-[1.05] hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Tiny Floating decorative elements */}
                <span className="absolute top-[10%] right-[10%] w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-75" />
                <span className="absolute top-[10%] right-[10%] w-4 h-4 bg-orange-500 rounded-full" />
                <span className="absolute bottom-[15%] left-[8%] w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
