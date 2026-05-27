import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function GitHubContributions() {
  const username = personalInfo.github.split('/').pop();

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaGithub className="w-8 h-8" />
          <h2 className="font-display text-2xl font-bold gradient-text">GitHub Activity</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Check out my open source contributions and project repositories on GitHub.
        </p>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8"
        >
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`${username} GitHub contribution chart`}
            className="w-full max-w-2xl mx-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <FaGithub className="w-5 h-5" />
          View GitHub Profile
        </a>
      </motion.div>
    </section>
  );
}
