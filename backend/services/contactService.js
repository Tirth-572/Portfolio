import { getPool, isDbConnected } from '../config/db.js';

export const saveContact = async ({ name, email, message }) => {
  if (!isDbConnected()) return null;

  const result = await getPool().query(
    `INSERT INTO contacts (name, email, message)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, message, created_at`,
    [name.trim(), email.trim().toLowerCase(), message.trim()]
  );

  return result.rows[0];
};

export const getContacts = async (limit = 50) => {
  if (!isDbConnected()) return [];

  const result = await getPool().query(
    `SELECT id, name, email, message, created_at
     FROM contacts
     ORDER BY created_at DESC
     LIMIT $1`,
    [limit]
  );

  return result.rows;
};
