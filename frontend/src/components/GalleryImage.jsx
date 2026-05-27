import { useGalleryImage } from '../utils/galleryImages';

export default function GalleryImage({ imageKey, alt, className = '', onClick }) {
  const { src, loading } = useGalleryImage(imageKey);

  if (loading) {
    return (
      <div
        className={`bg-slate-200 dark:bg-dark-300 animate-pulse flex items-center justify-center ${className}`}
      >
        <span className="text-slate-500 text-sm">Loading...</span>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={`bg-slate-200 dark:bg-dark-300 flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <span className="text-4xl mb-2">📷</span>
        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{alt}</p>
        <p className="text-xs text-slate-500 mt-2 max-w-xs">
          Add photo to{' '}
          <code className="text-primary-500">frontend/public/images/gallery/</code>
          <br />
          (name file with &quot;{imageKey}&quot; or &quot;gift&quot; / &quot;cert&quot;)
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  );
}
