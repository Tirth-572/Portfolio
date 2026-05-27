import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-slate-100/50 dark:bg-dark-400/30">
      <SectionHeading title="Experience Timeline" subtitle="My educational and professional journey" />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600/30 md:-translate-x-1/2" />

        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative flex items-center gap-8 mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-500 md:-translate-x-1/2 z-10 shadow-glow" />
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="glass-card">
                <span className="text-xs font-semibold text-primary-500 uppercase">
                  {item.type === 'training' ? '🏫 Training' : item.type?.toLowerCase() === 'internship' ? '💼 Internship' : '🎓 Education'}
                </span>
                <h3 className="font-display font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-primary-500 text-sm font-medium">{item.company}</p>
                <p className="text-slate-500 text-sm mt-1">{item.period}</p>
                <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
