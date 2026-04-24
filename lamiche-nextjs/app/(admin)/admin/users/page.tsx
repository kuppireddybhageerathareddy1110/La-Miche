"use client";

import { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  Mail, 
  Shield, 
  MoreHorizontal, 
  Edit, 
  Trash, 
  ShieldCheck,
  Calendar,
  Lock
} from 'lucide-react';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock users for the dashboard
  const users = [
    { id: 1, name: 'Admin', email: 'admin@lamiche.com', role: 'admin', joined: '2023-10-15', status: 'Active' },
    { id: 2, name: 'Guest User', email: 'user@lamiche.com', role: 'user', joined: '2024-01-20', status: 'Active' },
    { id: 3, name: 'Sarah Baker', email: 'sarah@lamiche.com', role: 'staff', joined: '2024-02-10', status: 'Away' },
    { id: 4, name: 'Marco Ross', email: 'marco@lamiche.com', role: 'user', joined: '2024-03-05', status: 'Active' },
  ];

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-[fadeUp_0.4s_ease]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-extralight text-[#1A120B]">Team & Profiles</h1>
          <p className="text-[14px] text-[#9A806A] mt-1">Manage administrative access and customer accounts.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#1A120B] hover:bg-[#3D2B1F] text-white px-6 py-3 rounded-xl text-[13px] font-medium tracking-[0.05em] transition-all duration-300 shadow-lg">
          <UserPlus size={18} />
          Invite Member
        </button>
      </div>

      {/* Grid for User Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '1,284', color: 'bg-blue-50 text-blue-600' },
          { label: 'Administrators', value: '3', color: 'bg-purple-50 text-purple-600' },
          { label: 'New This Month', value: '+42', color: 'bg-green-50 text-green-600' },
          { label: 'Pending Invitations', value: '1', color: 'bg-orange-50 text-orange-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#9A806A] font-bold mb-2">{stat.label}</p>
            <p className="text-[28px] font-display font-medium text-[#1A120B]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[rgba(26,18,11,0.06)] flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A806A]" size={18} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F] transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-[#6B5040] hover:bg-[#FAF5EC] rounded-lg transition-colors">
               <Mail size={16} />
               Broadcast Email
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#FAF5EC]/50 border-b border-[rgba(26,18,11,0.06)]">
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Name</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Role</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Joined Date</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Status</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A] text-right">Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(26,18,11,0.04)]">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-[#FAF5EC]/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#F3EAD8] text-[#BF5A2F] flex items-center justify-center font-medium text-[13px]">
                        {u.name[0]}
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#1A120B]">{u.name}</p>
                        <p className="text-[12px] text-[#9A806A] font-light">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {u.role === 'admin' ? (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1A120B] text-white text-[10px] font-medium uppercase tracking-[0.05em] rounded-md">
                          <ShieldCheck size={12} />
                          Admin
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF5EC] text-[#6B5040] text-[10px] font-medium uppercase tracking-[0.05em] rounded-md">
                          {u.role === 'staff' ? <Shield size={12} /> : <Lock size={12} />}
                          {u.role}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#9A806A] text-[13px]">
                      <Calendar size={14} />
                      {u.joined}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${u.status === 'Active' ? 'bg-green-500' : 'bg-orange-400'}`} />
                    <span className="text-[13px] text-[#1A120B]">{u.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-[#9A806A] hover:text-[#1A120B] hover:bg-[#FAF5EC] rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
