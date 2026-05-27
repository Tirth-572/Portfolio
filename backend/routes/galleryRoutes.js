import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALLERY_DIR = path.join(__dirname, '../../frontend/public/images/gallery');

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|bmp|heic)$/i;

router.get('/', (req, res) => {
  try {
    if (!fs.existsSync(GALLERY_DIR)) {
      fs.mkdirSync(GALLERY_DIR, { recursive: true });
      return res.json({ images: [], folder: GALLERY_DIR });
    }

    const files = fs
      .readdirSync(GALLERY_DIR)
      .filter((f) => IMAGE_EXT.test(f))
      .map((filename) => ({
        filename,
        url: `/images/gallery/${encodeURIComponent(filename)}`,
        name: filename.replace(/\.[^.]+$/, '').toLowerCase(),
      }));

    res.json({ images: files, count: files.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
