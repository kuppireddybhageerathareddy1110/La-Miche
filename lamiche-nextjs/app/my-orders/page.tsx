"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Search,
  ArrowUpRight,
  Package
} from 'lucide-react';

export default function MyOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for previous orders
  const orders = [
    { 
      id: 'LM-982410', 
      date: 'Oct 24, 2024', 
      total: '₹1,100', 
      status: 'In Progress', 
      items: ['Country Sourdough x2', 'Croissant x3', 'Tarte au Citron x1'],
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200'
    },
    { 
      id: 'LM-981255', 
      date: 'Oct 15, 2024', 
      total: '₹840', 
      status: 'Delivered', 
      items: ['Pain au Chocolat x4', 'Baguette x2'],
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=200'
    },
    { 
      id: 'LM-979802', 
      date: 'Sep 28, 2024', 
      total: '₹1,420', 
      status: 'Delivered', 
      items: ['Chocolate Layer Cake x1', 'Macarons x12'],
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200'
    },
    { 
      id: 'LM-975541', 
      date: 'Aug 12, 2024', 
      total: '₹320', 
      status: 'Cancelled', 
      items: ['Brioche x2'],
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=200'
    }
  ];

  const filteredOrders = orders.filter(o => 
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-[fadeUp_0.4s_ease]">
            <h1 className="font-display text-[48px] font-extralight text-[#1A120B] leading-none mb-4">My <em className="italic text-[#BF5A2F]">Orders</em></h1>
            <p className="text-[14px] text-[#9A806A]">Keep track of your favorite artisan treats and past purchases.</p>
          </div>
          
          <div className="relative w-full md:w-64 animate-[fadeUp_0.5s_ease]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A806A]" size={16} />
            <input 
              type="text" 
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[rgba(26,18,11,0.08)] rounded-xl text-[13px] focus:outline-none focus:border-[#BF5A2F] transition-all"
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, idx) => (
              <div 
                key={order.id} 
                className="bg-white rounded-3xl border border-[rgba(26,18,11,0.06)] shadow-sm overflow-hidden hover:shadow-[0_12px_32px_rgba(26,18,11,0.04)] transition-all group animate-[fadeUp_0.4s_ease]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                   {/* Thumbnail */}
                   <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FAF5EC] rounded-2xl overflow-hidden flex-shrink-0 relative">
                      <img src={order.image} alt="Order" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   </div>

                   {/* Info */}
                   <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                         <div className="flex items-center gap-3">
                            <span className="text-[15px] font-bold text-[#1A120B]">{order.id}</span>
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                              order.status === 'Delivered' ? 'bg-green-50 text-green-600' :
                              order.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                              'bg-red-50 text-red-600'
                            }`}>
                              {order.status}
                            </span>
                         </div>
                         <span className="text-[13px] text-[#9A806A] font-medium">{order.date}</span>
                      </div>

                      <p className="text-[14px] text-[#6B5040] font-light leading-relaxed">
                        {order.items.join(', ')}
                      </p>

                      <div className="pt-3 flex items-center justify-between border-t border-[rgba(26,18,11,0.04)]">
                         <p className="text-[18px] font-display font-medium text-[#1A120B]">{order.total}</p>
                         
                         <div className="flex gap-2">
                           {order.status === 'In Progress' ? (
                              <Link href="/track-order" className="flex items-center gap-1.5 text-[12px] font-medium text-[#BF5A2F] hover:bg-[#FAF5EC] px-4 py-2 rounded-lg transition-colors">
                                 Track Now
                                 <Clock size={14} />
                              </Link>
                           ) : (
                              <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#9A806A] hover:text-[#1A120B] px-4 py-2 rounded-lg transition-colors">
                                 View Details
                                 <ArrowUpRight size={14} />
                              </button>
                           )}
                           <button className="bg-[#1A120B] text-white px-5 py-2 rounded-lg text-[12px] font-medium hover:bg-[#3D2B1F] transition-colors">
                              Re-order
                           </button>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-[rgba(26,18,11,0.1)]">
               <Package size={48} className="mx-auto text-[#D4C4B0] mb-4" />
               <p className="text-[18px] font-display text-[#1A120B]">No orders found</p>
               <p className="text-[13px] text-[#9A806A] mt-1">Try adjusting your search or explore our menu.</p>
            </div>
          )}
        </div>

        {/* Support Link */}
        <div className="bg-[#FAF5EC] rounded-2xl p-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#BF5A2F]">
                 <Clock size={20} />
              </div>
              <p className="text-[13px] text-[#6B5040]">Need help with a past order? Our bakers are here to help.</p>
           </div>
           <Link href="/" className="text-[12px] font-bold uppercase tracking-wider text-[#1A120B] hover:text-[#BF5A2F] transition-colors">
              Contact Support
           </Link>
        </div>

      </div>
    </div>
  );
}
