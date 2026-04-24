// ═══════════════════════════════════════════════════════════════════
// La Miche — Database Client (CockroachDB / PostgreSQL compatible)
// ═══════════════════════════════════════════════════════════════════

import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 10,
    });
  }
  return pool;
}

// Initialize the users table if it doesn't exist
export async function initDb() {
  const db = getPool();
  if (!db) return;
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
}

export interface DbUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: 'user' | 'admin';
  created_at: string;
}

export async function getUserByEmail(email: string): Promise<DbUser | null> {
  const db = getPool();
  if (!db) return null;
  const result = await db.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [email]);
  return result.rows[0] || null;
}
