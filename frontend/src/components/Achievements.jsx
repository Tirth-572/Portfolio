import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import GalleryImage from './GalleryImage';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <SectionHeading title="Achievements" subtitle="Milestones and recognitions in my developer journey" />

      {achievements.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto mb-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏆</span>
              <h3 className="font-display font-bold text-2xl gradient-text">{achievement.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{achievement.description}</p>
            <p className="text-primary-500 font-medium italic mb-8">{achievement.note}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievement.images.map((img) => (
                <motion.div
                  key={img.key}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <GalleryImage
                    imageKey={img.key}
                    alt={img.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                    <span className="text-white font-medium">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
