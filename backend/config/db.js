import pg from 'pg';

const { Pool } = pg;

let pool = null;

const buildConnectionString = () => {
  const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;
  if (!PG_USER || !PG_DATABASE) return null;
  const password = PG_PASSWORD ? encodeURIComponent(PG_PASSWORD) : '';
  const host = PG_HOST || 'localhost';
  const port = PG_PORT || '5432';
  return `postgresql://${PG_USER}:${password}@${host}:${port}/${PG_DATABASE}`;
};

export const getPool = () => pool;

export const isDbConnected = () => Boolean(pool);

const initSchema = async (db) => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);
  `);
};

const connectDB = async () => {
  const connectionString = process.env.DATABASE_URL || buildConnectionString();

  if (!connectionString) {
    console.warn(
      'PostgreSQL not configured. Set DATABASE_URL or PG_* variables in backend/.env'
    );
    return;
  }

  try {
    pool = new Pool({
      connectionString,
      ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
    });

    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();

    await initSchema(pool);
    console.log('PostgreSQL connected successfully');
    console.log(`Database: ${process.env.PG_DATABASE || 'from DATABASE_URL'}`);
  } catch (error) {
    console.error('PostgreSQL connection error:', error.message);
    console.warn('Check: PostgreSQL is running, database exists, and credentials in .env are correct.');
    pool = null;
  }
};

export default connectDB;
