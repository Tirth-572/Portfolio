import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SkillIcon } from '../utils/skillIcons';
import { skills } from '../data/portfolioData';

const categories = [
  { key: 'frontend', label: 'Frontend Skills', icon: '🎨' },
  { key: 'backend', label: 'Backend Skills', icon: '⚙️' },
  { key: 'database', label: 'Database Skills', icon: '🗄️' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
];

function SkillBar({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg glass transition-transform duration-300 ${hovered ? 'scale-110 -translate-y-0.5' : ''}`}
          >
            <SkillIcon icon={skill.icon} size={22} />
          </div>
          <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-primary-500">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-dark-300 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 ${
            hovered ? 'shadow-glow' : ''
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="section-container">
      <SectionHeading title="Skills & Technologies" subtitle="Technologies I work with to build amazing applications" />

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeCategory === cat.key
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow'
                : 'glass hover:border-primary-500/30'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto glass-card"
      >
        <h3 className="font-display font-semibold text-xl mb-8 gradient-text">
          {categories.find((c) => c.key === activeCategory)?.label}
        </h3>
        <div className="space-y-6">
          {skills[activeCategory].map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
