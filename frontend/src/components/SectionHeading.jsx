import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="section-title">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
