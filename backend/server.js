import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB, { getPool, isDbConnected } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import achievementRoutes from './routes/achievementRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

await connectDB();

app.get('/api/health', async (req, res) => {
  let database = 'disconnected';

  if (isDbConnected()) {
    try {
      await getPool().query('SELECT 1');
      database = 'connected';
    } catch {
      database = 'error';
    }
  }

  res.json({
    status: 'ok',
    message: 'Portfolio API is running',
    database: `postgresql (${database})`,
  });
});

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/gallery', galleryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
