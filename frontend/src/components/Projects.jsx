import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { projects as staticProjects } from '../data/portfolioData';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export default function Projects() {
  const [projects, setProjects] = useState(staticProjects);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) setProjects(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="projects" className="section-container bg-slate-100/50 dark:bg-dark-400/30">
      <SectionHeading title="Featured Projects" subtitle="Showcasing my best work and collaborative projects" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id || project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group overflow-hidden p-0 hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/1e293b/f97316?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 to-transparent" />
              {project.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold shadow-glow">
                  {project.badge}
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary text-sm py-2.5 justify-center"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-sm py-2.5 justify-center"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
