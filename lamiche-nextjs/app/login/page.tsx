'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFAF6] px-6 py-20">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_32px_rgba(26,18,11,0.06)] border border-[rgba(26,18,11,0.08)]">
        
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block font-display text-[32px] font-extralight tracking-[0.04em] text-[#1A120B] mb-4 hover:opacity-80 transition-opacity">
            La <em className="italic text-[#BF5A2F]">Miche</em>
          </Link>
          <h1 className="text-[18px] font-medium text-[#1A120B] mb-2">Welcome Back</h1>
          <p className="text-[14px] text-[#9A806A] font-light">Sign in to manage your orders or access the admin dashboard.</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-[#FFF5F2] border border-[#F0B090] text-[#BF5A2F] text-[13px] rounded-lg text-center animate-[fadeUp_0.3s_ease]">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[12px] font-medium text-[#1A120B] tracking-[0.08em] uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF5EC] border border-[rgba(26,18,11,0.1)] rounded-xl text-[14px] text-[#1A120B] placeholder-[#9A806A] focus:outline-none focus:border-[#BF5A2F] focus:ring-1 focus:ring-[#BF5A2F] transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium text-[#1A120B] tracking-[0.08em] uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF5EC] border border-[rgba(26,18,11,0.1)] rounded-xl text-[14px] text-[#1A120B] placeholder-[#9A806A] focus:outline-none focus:border-[#BF5A2F] focus:ring-1 focus:ring-[#BF5A2F] transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A120B] hover:bg-[#3D2B1F] text-white py-4 rounded-xl text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-300 disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Test Credentials Info */}
        <div className="mt-8 pt-6 border-t border-[rgba(26,18,11,0.08)]">
          <p className="text-[12px] text-[#9A806A] font-medium uppercase tracking-[0.08em] mb-4 text-center">Test Credentials</p>
          <div className="space-y-3">
            <button 
              type="button"
              onClick={() => { setEmail('admin@lamiche.com'); setPassword('Admin@1234'); }}
              className="w-full text-left p-3 rounded-lg border border-[rgba(26,18,11,0.08)] hover:border-[#BF5A2F] hover:bg-[#FAF5EC] transition-all group"
            >
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-medium text-[#1A120B]">Admin User</span>
                <span className="text-[11px] text-[#BF5A2F] opacity-0 group-hover:opacity-100 transition-opacity">Click to fill</span>
              </div>
              <span className="text-[12px] text-[#9A806A] block mt-1">admin@lamiche.com</span>
            </button>
            <button 
              type="button"
              onClick={() => { setEmail('user@lamiche.com'); setPassword('User@1234'); }}
              className="w-full text-left p-3 rounded-lg border border-[rgba(26,18,11,0.08)] hover:border-[#BF5A2F] hover:bg-[#FAF5EC] transition-all group"
            >
               <div className="flex justify-between items-center">
                <span className="text-[13px] font-medium text-[#1A120B]">Standard User</span>
                <span className="text-[11px] text-[#BF5A2F] opacity-0 group-hover:opacity-100 transition-opacity">Click to fill</span>
              </div>
              <span className="text-[12px] text-[#9A806A] block mt-1">user@lamiche.com</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-[13px] text-[#9A806A] hover:text-[#BF5A2F] transition-colors font-light">
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
