"use client";

import { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Truck,
  CreditCard,
  ChevronDown
} from 'lucide-react';

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('All');

  const orders = [
    { id: '#LM-9821', customer: 'John Doe', items: '3x Sourdough', total: '$25.50', date: 'Oct 24, 2024', status: 'Delivered', payment: 'Paid' },
    { id: '#LM-9822', customer: 'Alice Smith', items: '1x Croissant Box', total: '$18.00', date: 'Oct 24, 2024', status: 'Processing', payment: 'Paid' },
    { id: '#LM-9823', customer: 'Robert Brown', items: '2x Baguette', total: '$9.00', date: 'Oct 23, 2024', status: 'Shipped', payment: 'Paid' },
    { id: '#LM-9824', customer: 'Emma Wilson', items: '5x Macarons', total: '$12.50', date: 'Oct 23, 2024', status: 'Cancelled', payment: 'Refunded' },
  ];

  const tabs = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="space-y-8 animate-[fadeUp_0.4s_ease]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-extralight text-[#1A120B]">Customer Orders</h1>
          <p className="text-[14px] text-[#9A806A] mt-1">Monitor and fulfill customer requests in real-time.</p>
        </div>
        <div className="flex items-center gap-2">
           <button className="px-4 py-2 bg-white border border-[rgba(26,18,11,0.08)] text-[#1A120B] text-[13px] font-medium rounded-xl hover:bg-[#FAF5EC] transition-all flex items-center gap-2 shadow-sm">
             Export Data
             <ChevronDown size={16} />
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'New Orders', value: '12', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Revenue Today', value: '$420', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'To Fulfill', value: '8', icon: Truck, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Successful', value: '142', icon: CheckCircle2, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm relative overflow-hidden group">
             <div className="relative z-10">
               <p className="text-[11px] uppercase tracking-[0.12em] text-[#9A806A] font-bold mb-3">{stat.label}</p>
               <div className="flex items-end justify-between">
                  <p className="text-[32px] font-display font-medium text-[#1A120B] leading-none">{stat.value}</p>
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <stat.icon size={20} />
                  </div>
               </div>
             </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[rgba(26,18,11,0.06)] w-fit">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-[13px] font-medium transition-all ${
              activeTab === tab ? 'bg-[#1A120B] text-white shadow-md' : 'text-[#9A806A] hover:bg-[#FAF5EC] hover:text-[#1A120B]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#FAF5EC]/50 border-b border-[rgba(26,18,11,0.06)]">
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Order ID</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Customer</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Items</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Total</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Status</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(26,18,11,0.04)]">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-[#FAF5EC]/30 transition-colors group">
                  <td className="px-6 py-4 text-[14px] font-semibold text-[#BF5A2F]">{o.id}</td>
                  <td className="px-6 py-4 text-[14px] font-medium text-[#1A120B]">{o.customer}</td>
                  <td className="px-6 py-4 text-[13px] text-[#9A806A]">{o.items}</td>
                  <td className="px-6 py-4 text-[14px] font-medium text-[#1A120B]">{o.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.05em] rounded-md flex items-center gap-1.5 w-fit ${
                      o.status === 'Delivered' ? 'bg-green-50 text-green-600' :
                      o.status === 'Processing' ? 'bg-blue-50 text-blue-600' :
                      o.status === 'Shipped' ? 'bg-purple-50 text-purple-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {o.status === 'Delivered' && <CheckCircle2 size={12} />}
                      {o.status === 'Processing' && <Clock size={12} />}
                      {o.status === 'Shipped' && <Truck size={12} />}
                      {o.status === 'Cancelled' && <XCircle size={12} />}
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#BF5A2F] hover:text-[#A34A22] ml-auto">
                      View Details
                      <ArrowUpRight size={14} />
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
