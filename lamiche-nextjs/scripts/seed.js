const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Manually load .env.local because standalone node doesn't do it automatically
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim();
      process.env[key.trim()] = value;
    }
  });
}

async function seed() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.log('No DATABASE_URL found. Skipping seed.');
    return;
  }

  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log('Connecting to CockroachDB...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        created_at TIMESTAMPTZ DEFAULT now()
      );
    `);
    console.log('Users table created or exists.');

    const adminHash = await bcrypt.hash('Admin@1234', 12);
    const userHash = await bcrypt.hash('User@1234', 12);

    await pool.query(`
      INSERT INTO users (name, email, password_hash, role)
      VALUES 
        ('Admin', 'admin@lamiche.com', $1, 'admin'),
        ('Guest User', 'user@lamiche.com', $2, 'user')
      ON CONFLICT (email) DO NOTHING;
    `, [adminHash, userHash]);
    console.log('Test users seeded successfully.');

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await pool.end();
  }
}

seed();
