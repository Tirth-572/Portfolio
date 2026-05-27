import { motion } from 'framer-motion';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { personalInfo, education, languages, courseInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading title="About Me" subtitle="Get to know more about my journey and background" />

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card"
        >
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{personalInfo.about}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500">
              <HiMail className="w-5 h-5 text-primary-500" />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <HiLocationMarker className="w-5 h-5 text-primary-500" />
              {personalInfo.location}
            </span>
          </div>

          <div className="mt-6 flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-primary-500/30 transition-all hover:-translate-y-1">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-primary-500/30 transition-all hover:-translate-y-1">
              <FaLinkedin className="w-6 h-6 text-blue-500" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card"
        >
          <h3 className="font-display font-semibold text-lg mb-4 gradient-text">Languages Known</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 font-medium text-sm hover:bg-primary-500/20 transition-colors"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card group"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-2xl shrink-0">
              🎓
            </div>
            <div>
              <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Bachelor Degree</span>
              <h3 className="font-display font-bold text-xl mt-1">{education.degree}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{education.university}</p>
              <p className="text-sm text-slate-500 mt-1">{education.period}</p>
              <a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary-500 hover:text-primary-400 text-sm font-medium"
              >
                Visit University →
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-start gap-4 relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-glow">
              SC
            </div>
            <div>
              <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Course</span>
              <h3 className="font-display font-bold text-xl mt-1">{courseInfo.course}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{courseInfo.institute}</p>
              <p className="text-sm text-primary-500 font-medium mt-1">Duration: {courseInfo.duration}</p>
              <a
                href={courseInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary-500 hover:text-primary-400 text-sm font-medium"
              >
                Visit Institute →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
