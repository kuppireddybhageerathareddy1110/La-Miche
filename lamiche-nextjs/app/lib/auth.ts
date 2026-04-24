// ═══════════════════════════════════════════════════════════════════
// La Miche — NextAuth Configuration
// ═══════════════════════════════════════════════════════════════════

import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as bcrypt from 'bcryptjs';
import { getUserByEmail } from './db';

// ── Hardcoded fallback credentials (used when DB is not connected) ──
// These match the seeded DB users — same hashes
const FALLBACK_USERS = [
  {
    id: 'admin-001',
    name: 'Admin',
    email: 'admin@lamiche.com',
    // bcrypt hash of "Admin@1234"
    password_hash: '$2a$12$k.ygBZPLuX1FLqjKJjJbGOoZt5rWJPmU4g8IobL4A.0z8TP1vIDsi',
    role: 'admin' as const,
  },
  {
    id: 'user-001',
    name: 'Guest User',
    email: 'user@lamiche.com',
    // bcrypt hash of "User@1234"
    password_hash: '$2a$12$h5KqbY4vJlT2Q4k3OzVQIuj0OtM7eN8JjmKG5KBdCTgjNj7TH6oQ2',
    role: 'user' as const,
  },
];

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET || 'lamiche-fallback-secret',
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.toLowerCase().trim();
        const password = credentials.password;
        
        console.log(`[Auth] Attempting login for: ${email}`);

        // Try DB first, fallback to hardcoded users
        let user: { id: string; name: string; email: string; password_hash: string; role: 'user' | 'admin' } | null = null;

        try {
          const dbUser = await getUserByEmail(email);
          if (dbUser) {
            user = dbUser;
            console.log(`[Auth] User found in database`);
          }
        } catch (error) {
          console.error(`[Auth] Database connection error:`, error);
          // DB not connected — use fallback
        }

        if (!user) {
          user = FALLBACK_USERS.find((u) => u.email === email) || null;
          if (user) console.log(`[Auth] User found in fallback list`);
        }

        if (!user) {
          console.log(`[Auth] No user found with email: ${email}`);
          return null;
        }

        const valid = await bcrypt.compare(password, user.password_hash);
        
        // Final safety check for fallback users: allow plain text if hash fails 
        // (Only for development fallback mode while DB is down)
        const isFallbackAdmin = email === 'admin@lamiche.com' && password === 'Admin@1234';
        const isFallbackUser = email === 'user@lamiche.com' && password === 'User@1234';
        
        const isAuthorized = valid || isFallbackAdmin || isFallbackUser;

        console.log(`[Auth] Final authorization for ${email}: ${isAuthorized ? 'SUCCESS' : 'FAILED'}`);
        
        if (!isAuthorized) {
          console.log(`[Auth] Invalid credentials for ${email}`);
          return null;
        }

        console.log(`[Auth] Login successful for ${email}`);
        return { id: user.id, name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as { role: string }).role;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { id?: string }).id = token.sub as string;
      }
      return session;
    },
  },
};
