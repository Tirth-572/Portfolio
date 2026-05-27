-- Run this in pgAdmin 4 Query Tool (optional — app auto-creates tables on startup)
-- 1. Create database: tirth_portfolio
-- 2. Connect to it, then run:

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);

-- View all contact messages:
-- SELECT * FROM contacts ORDER BY created_at DESC;
