import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const ASSET_GLOB = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const ALIASES = {
  certificate: ['certificate', 'cert', 'hackathoncert', 'runnerup', 'awardcert'],
  gifts: ['gifts', 'gift', 'award', 'awards', 'prize', 'prizes', 'trophy', 'medal'],
};

function matchFromAssets(key) {
  const aliases = ALIASES[key] || [key];
  for (const [filePath, url] of Object.entries(ASSET_GLOB)) {
    const base = normalize(filePath.split('/').pop().replace(/\.[^.]+$/, ''));
    if (aliases.some((a) => base.includes(normalize(a)) || normalize(a).includes(base))) {
      return url;
    }
  }
  return null;
}

function matchFromApiList(key, images) {
  const aliases = ALIASES[key] || [key];
  for (const img of images) {
    const base = normalize(img.name);
    if (aliases.some((a) => base.includes(normalize(a)) || normalize(a).includes(base))) {
      return img.url;
    }
  }
  return null;
}

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

export function getPublicFallbackUrls(key) {
  return EXTENSIONS.map((ext) => `/images/gallery/${key}.${ext}`);
}

let cachedApiImages = null;

export async function fetchGalleryImages() {
  if (cachedApiImages) return cachedApiImages;
  try {
    const { data } = await axios.get(`${API_URL}/gallery`);
    cachedApiImages = data.images || [];
    return cachedApiImages;
  } catch {
    return [];
  }
}

export function resolveGalleryUrl(key, apiImages = []) {
  return matchFromAssets(key) || matchFromApiList(key, apiImages) || null;
}

export function useGalleryImage(key) {
  const [src, setSrc] = useState(() => matchFromAssets(key));
  const [loading, setLoading] = useState(!matchFromAssets(key));

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const asset = matchFromAssets(key);
      if (asset) {
        setSrc(asset);
        setLoading(false);
        return;
      }

      const apiImages = await fetchGalleryImages();
      const fromApi = resolveGalleryUrl(key, apiImages);
      if (fromApi && !cancelled) {
        setSrc(fromApi);
        setLoading(false);
        return;
      }

      const fallbacks = getPublicFallbackUrls(key);
      for (const url of fallbacks) {
        const ok = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (ok && !cancelled) {
          setSrc(url);
          setLoading(false);
          return;
        }
      }

      if (!cancelled) {
        setSrc(null);
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [key]);

  return { src, loading };
}
