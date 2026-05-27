import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import GalleryImage from './GalleryImage';
import { useGalleryImage } from '../utils/galleryImages';
import { gallery } from '../data/portfolioData';

function GalleryModalImage({ imageKey, alt, title }) {
  const { src, loading } = useGalleryImage(imageKey);

  if (loading) {
    return <div className="w-full h-96 bg-dark-400 animate-pulse rounded-2xl" />;
  }

  return (
    <>
      <img
        src={src || ''}
        alt={alt}
        className="w-full rounded-2xl shadow-2xl max-h-[85vh] object-contain bg-dark-400"
      />
      <p className="text-center text-white mt-4 font-medium">{title}</p>
    </>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="section-container bg-slate-100/50 dark:bg-dark-400/30">
      <SectionHeading title="Gallery" subtitle="Certificates, awards, and memorable moments" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3]"
            onClick={() => setSelected(item)}
          >
            <GalleryImage
              imageKey={item.key}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="px-4 py-2 rounded-full glass text-white text-sm font-medium">Click to preview</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary-500 transition-colors"
                aria-label="Close"
              >
                <HiX className="w-8 h-8" />
              </button>
              <GalleryModalImage imageKey={selected.key} alt={selected.alt} title={selected.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
