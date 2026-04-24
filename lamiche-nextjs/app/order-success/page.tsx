"use client";

import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Home, 
  Calendar, 
  Clock 
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a random order number
    setOrderNumber(`LM-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#BF5A2F]/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C8962A]/5 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-[600px] w-full text-center space-y-10 animate-[fadeUp_0.6s_ease]">
        
        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_20px_50px_rgba(34,197,94,0.3)] animate-[addPop_0.5s_ease]">
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </div>
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#BF5A2F] text-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
             <ShoppingBag size={20} />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="font-display text-[48px] md:text-[64px] font-extralight text-[#1A120B] leading-tight mb-4">
            Merci <em className="italic text-[#BF5A2F]">Beaucoup</em>
          </h1>
          <p className="text-[18px] text-[#9A806A] font-light tracking-wide">
            Your artisan selection is being prepared with care.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-3xl border border-[rgba(26,18,11,0.08)] shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden">
           <div className="p-8 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-left">
                 <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#9A806A] font-bold mb-1">Order Number</p>
                    <p className="text-[20px] font-display font-medium text-[#1A120B]">{orderNumber}</p>
                 </div>
                 <div className="h-px w-full md:w-px md:h-12 bg-[rgba(26,18,11,0.08)]" />
                 <div className="text-center md:text-right">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#9A806A] font-bold mb-1">Estimated Arrival</p>
                    <p className="text-[20px] font-display font-medium text-[#BF5A2F]">Today, 7:15 PM</p>
                 </div>
              </div>

              <div className="pt-6 border-t border-[rgba(26,18,11,0.04)] grid grid-cols-2 gap-4 text-[13px]">
                 <div className="flex items-center gap-2 text-[#6B5040]">
                    <Calendar size={16} className="text-[#BF5A2F]" />
                    <span>October 24, 2024</span>
                 </div>
                 <div className="flex items-center gap-2 text-[#6B5040]">
                    <Clock size={16} className="text-[#BF5A2F]" />
                    <span>Instant Delivery</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-[#FAF5EC]/50 px-8 py-4 border-t border-[rgba(26,18,11,0.06)] flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[12px] font-medium text-[#4A7C59]">Order confirmed & notification sent to your email.</p>
           </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
           <Link href="/" className="w-full sm:w-auto bg-[#1A120B] text-white px-10 py-4 rounded-xl text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#3D2B1F] transition-all flex items-center justify-center gap-2 group">
             <Home size={18} />
             Return Home
             <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
           </Link>
           <Link href="/track-order" className="w-full sm:w-auto px-10 py-4 text-[13px] font-medium tracking-[0.1em] uppercase text-[#6B5040] hover:text-[#1A120B] transition-colors border border-[rgba(26,18,11,0.1)] rounded-xl hover:bg-white flex items-center justify-center no-underline">
             Track Order
           </Link>
        </div>

      </div>
    </div>
  );
}
