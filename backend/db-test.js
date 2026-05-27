import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pg;
const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;
console.log('Connecting with config:', { PG_USER, PG_HOST, PG_PORT, PG_DATABASE });
const pool = new Pool({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE
});
try {
  const res = await pool.query('SELECT NOW()');
  console.log('Success! Connection established at:', res.rows[0].now);
} catch (err) {
  console.error('Error connecting to database:', err.message);
} finally {
  await pool.end();
}
