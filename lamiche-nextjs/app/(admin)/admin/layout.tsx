import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/lib/auth';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut,
  ChevronRight,
  ClipboardList
} from 'lucide-react';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // Note: the middleware should handle this, but adding a double-check here
  if (!session || (session.user as any).role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-[#FAF5EC] flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-[rgba(26,18,11,0.08)] flex-shrink-0 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-[rgba(26,18,11,0.08)]">
           <Link href="/" className="inline-block font-display text-[26px] font-extralight tracking-[0.04em] text-[#1A120B] hover:opacity-80 transition-opacity">
            La <em className="italic text-[#BF5A2F]">Miche</em>
          </Link>
          <div className="mt-1 text-[11px] font-medium tracking-[0.1em] uppercase text-[#9A806A]">Admin Portal</div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-[#FAF5EC] text-[#BF5A2F] rounded-lg text-[13px] font-medium transition-colors group">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-[#6B5040] hover:bg-[#FAF5EC] hover:text-[#1A120B] rounded-lg text-[13px] font-medium transition-colors group">
            <ShoppingBag size={18} />
            Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-[#6B5040] hover:bg-[#FAF5EC] hover:text-[#1A120B] rounded-lg text-[13px] font-medium transition-colors group">
            <ClipboardList size={18} />
            Orders
          </Link>
           <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-[#6B5040] hover:bg-[#FAF5EC] hover:text-[#1A120B] rounded-lg text-[13px] font-medium transition-colors group">
            <Users size={18} />
            Team & Users
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-[#6B5040] hover:bg-[#FAF5EC] hover:text-[#1A120B] rounded-lg text-[13px] font-medium transition-colors group">
            <Settings size={18} />
            Portal Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-[rgba(26,18,11,0.08)]">
          <div className="flex items-center gap-3 px-4 py-3">
             <div className="w-8 h-8 rounded-full bg-[#BF5A2F] text-white flex items-center justify-center text-[12px] font-medium">
               A
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-[13px] font-medium text-[#1A120B] truncate">Admin</p>
               <Link href="/api/auth/signout" className="text-[11px] text-[#9A806A] hover:text-[#BF5A2F] transition-colors">Sign Out</Link>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
         {/* Mobile Header */}
         <div className="md:hidden bg-white p-4 border-b border-[rgba(26,18,11,0.08)] flex justify-between items-center">
            <Link href="/" className="font-display text-[22px] font-extralight tracking-[0.04em] text-[#1A120B]">
              La <em className="italic text-[#BF5A2F]">Miche</em>
            </Link>
             <Link href="/api/auth/signout" className="text-[12px] text-[#9A806A] hover:text-[#BF5A2F] border border-[rgba(26,18,11,0.1)] px-3 py-1.5 rounded-full">Sign Out</Link>
         </div>

        <div className="p-6 md:p-10 max-w-[1200px] mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
