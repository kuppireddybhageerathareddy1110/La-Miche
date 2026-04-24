"use client";

import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink,
  ChevronRight,
  Package,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import { PRODUCTS } from '@/app/lib/data';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Group products by category for the UI
  const allProducts = PRODUCTS.map(p => ({ ...p, category: p.cat }));

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.cat)))];

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-[fadeUp_0.4s_ease]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-extralight text-[#1A120B]">Store Catalog</h1>
          <p className="text-[14px] text-[#9A806A] mt-1">Manage your items, prices, and availability.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#BF5A2F] hover:bg-[#A34A22] text-white px-6 py-3 rounded-xl text-[13px] font-medium tracking-[0.05em] transition-all duration-300 shadow-[0_8px_24px_rgba(191,90,47,0.2)]">
          <Plus size={18} />
          Add New Item
        </button>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Total Items', value: allProducts.length, icon: Package, color: 'text-[#BF5A2F]', bg: 'bg-[#BF5A2F]/5' },
          { label: 'Active Categories', value: Object.keys(PRODUCTS).length, icon: Filter, color: 'text-[#6B5040]', bg: 'bg-[#6B5040]/5' },
          { label: 'Average Price', value: '$8.50', icon: TrendingUp, color: 'text-[#C8962A]', bg: 'bg-[#C8962A]/5' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
              <stat.icon size={22} />
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#9A806A] font-medium">{stat.label}</p>
              <p className="text-[20px] font-display font-medium text-[#1A120B] mt-0.5">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A806A]" size={18} />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F] transition-all"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-[#1A120B] text-white shadow-md' 
                  : 'bg-[#FAF5EC] text-[#6B5040] hover:bg-[#F3EAD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#FAF5EC] border-b border-[rgba(26,18,11,0.06)]">
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Item</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Category</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Price</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A]">Stock Status</th>
                <th className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A806A] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(26,18,11,0.04)]">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-[#FAF5EC]/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[rgba(26,18,11,0.06)] flex-shrink-0">
                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#1A120B]">{p.name}</p>
                        <p className="text-[12px] text-[#9A806A] font-light truncate max-w-[200px]">{p.desc}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-[#F3EAD8] text-[#6B5040] text-[10px] font-medium uppercase tracking-[0.05em] rounded-md">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[14px] font-medium text-[#1A120B]">{p.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[12px] text-[#1A120B]">In Stock</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-[#9A806A] hover:text-[#BF5A2F] hover:bg-[#BF5A2F]/5 rounded-lg transition-all" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-[#9A806A] hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all" title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 text-[#9A806A] hover:text-[#1A120B] hover:bg-[#1A120B]/5 rounded-lg transition-all" title="View in Store">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-[#FAF5EC] rounded-full flex items-center justify-center mx-auto mb-4 text-[#9A806A]">
              <Search size={24} />
            </div>
            <p className="text-[#1A120B] font-medium">No items found</p>
            <p className="text-[#9A806A] text-[13px] mt-1">Try adjusting your search or filter.</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        <div className="px-6 py-4 bg-[#FAF5EC] border-t border-[rgba(26,18,11,0.06)] flex items-center justify-between">
          <p className="text-[12px] text-[#9A806A]">Showing {filteredProducts.length} items</p>
          <div className="flex items-center gap-4">
            <button disabled className="text-[12px] font-medium text-[#9A806A] opacity-50 cursor-not-allowed">Previous</button>
            <div className="flex gap-1">
              {[1].map(n => (
                <button key={n} className="w-8 h-8 rounded-lg bg-[#1A120B] text-white text-[12px] flex items-center justify-center shadow-sm">{n}</button>
              ))}
            </div>
            <button disabled className="text-[12px] font-medium text-[#9A806A] opacity-50 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

      {/* Database Warning */}
      <div className="bg-[#FFF5F2] border border-[#F0B090] rounded-2xl p-6 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#BF5A2F]/10 flex items-center justify-center text-[#BF5A2F] flex-shrink-0">
          <AlertCircle size={20} />
        </div>
        <div>
          <h4 className="text-[14px] font-semibold text-[#1A120B]">Database Connection Required</h4>
          <p className="text-[13px] text-[#6B5040] mt-1 leading-relaxed">
            Currently, these changes are stored locally in your session because your CockroachDB cluster is offline. 
            Once the cluster is restored, these updates will sync automatically to the cloud.
          </p>
        </div>
      </div>
    </div>
  );
}
