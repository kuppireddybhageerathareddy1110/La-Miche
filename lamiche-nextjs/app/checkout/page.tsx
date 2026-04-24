"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Smartphone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '@/app/lib/cart-context';

export default function CheckoutPage() {
  const router = useRouter();
  const { state, totalPrice, clearCart } = useCart();
  const { items } = state;
  const [isProcessing, setIsProcessing] = useState(false);
  
  const deliveryFee = totalPrice >= 600 ? 0 : 40;
  const grandTotal = totalPrice + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push('/order-success');
    }, 2500);
  };

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen bg-[#FDFAF6] flex flex-col items-center justify-center p-6 text-center animate-[fadeUp_0.4s_ease]">
        <div className="w-20 h-20 bg-[#FAF5EC] rounded-full flex items-center justify-center text-[#BF5A2F] mb-6">
          <Truck size={32} />
        </div>
        <h1 className="font-display text-[32px] font-light text-[#1A120B] mb-2">Your basket is empty</h1>
        <p className="text-[#9A806A] mb-8 max-w-md">Looks like you haven't added any artisan treats to your basket yet.</p>
        <Link href="/" className="bg-[#1A120B] text-white px-8 py-3 rounded-full text-[13px] font-medium tracking-wider hover:bg-[#3D2B1F] transition-all">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-24 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#9A806A] hover:text-[#BF5A2F] mb-8 transition-colors">
          <ChevronLeft size={16} />
          Back to Bakery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-10 animate-[fadeUp_0.4s_ease]">
            <div>
              <h1 className="font-display text-[42px] font-extralight text-[#1A120B] leading-none mb-4">Checkout</h1>
              <p className="text-[14px] text-[#9A806A]">Almost there! Please provide your delivery and payment details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Delivery Section */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[rgba(26,18,11,0.08)] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1A120B] text-white flex items-center justify-center text-[13px] font-bold">1</div>
                  <h2 className="text-[18px] font-medium text-[#1A120B]">Delivery Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#9A806A] font-bold">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-[rgba(26,18,11,0.1)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F] transition-colors" placeholder="e.g. John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#9A806A] font-bold">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-white border border-[rgba(26,18,11,0.1)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F] transition-colors" placeholder="e.g. +91 98765 43210" />
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#9A806A] font-bold">Delivery Address</label>
                    <textarea required rows={3} className="w-full px-4 py-3 bg-white border border-[rgba(26,18,11,0.1)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F] transition-colors" placeholder="Apt, Street, Area..."></textarea>
                  </div>
                </div>
              </section>

              {/* Payment Section */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[rgba(26,18,11,0.08)] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1A120B] text-white flex items-center justify-center text-[13px] font-bold">2</div>
                  <h2 className="text-[18px] font-medium text-[#1A120B]">Payment Method</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'card', label: 'Credit Card', icon: CreditCard },
                    { id: 'upi', label: 'UPI Pay', icon: Smartphone },
                    { id: 'cod', label: 'Cash / COD', icon: MapPin },
                  ].map((method) => (
                    <label key={method.id} className="relative cursor-pointer group">
                      <input type="radio" name="payment" value={method.id} className="peer sr-only" defaultChecked={method.id === 'card'} />
                      <div className="p-4 border border-[rgba(26,18,11,0.1)] rounded-2xl bg-white text-center transition-all group-hover:border-[#BF5A2F]/50 peer-checked:border-[#BF5A2F] peer-checked:bg-[#BF5A2F]/5">
                        <method.icon size={24} className="mx-auto mb-2 text-[#9A806A] peer-checked:text-[#BF5A2F]" />
                        <span className="text-[13px] font-medium text-[#1A120B]">{method.label}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm">
                   <div className="flex items-center gap-3 text-[#4A7C59]">
                     <ShieldCheck size={18} />
                     <p className="text-[12px] font-medium">Your transaction is secured with 256-bit SSL encryption.</p>
                   </div>
                </div>
              </section>

              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl text-[14px] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                  isProcessing 
                    ? 'bg-[#9A806A] cursor-wait' 
                    : 'bg-[#BF5A2F] hover:bg-[#A34A22] text-white'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Order...
                  </>
                ) : (
                  <>
                    Place Order — ₹{grandTotal.toLocaleString('en-IN')}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar / Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 h-fit">
             <div className="bg-white rounded-3xl border border-[rgba(26,18,11,0.08)] shadow-[0_12px_40px_rgba(26,18,11,0.04)] overflow-hidden">
                <div className="px-8 py-6 border-b border-[rgba(26,18,11,0.08)] bg-[#FAF5EC]/50">
                  <h3 className="font-display text-[20px] font-light text-[#1A120B]">Order Summary</h3>
                </div>
                
                <div className="px-8 py-6 space-y-5 max-h-[400px] overflow-y-auto">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-4">
                       <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-[#FAF5EC] flex-shrink-0">
                         <Image src={product.image} alt={product.name} fill className="object-cover" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start gap-2">
                           <p className="text-[14px] font-medium text-[#1A120B] truncate">{product.name}</p>
                           <p className="text-[14px] font-medium text-[#1A120B]">₹{(product.price * quantity).toLocaleString('en-IN')}</p>
                         </div>
                         <p className="text-[12px] text-[#9A806A] mt-1">{quantity} × ₹{product.price}</p>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="px-8 py-8 bg-[#FAF5EC]/50 border-t border-[rgba(26,18,11,0.08)] space-y-3">
                   <div className="flex justify-between text-[14px]">
                      <span className="text-[#9A806A]">Subtotal</span>
                      <span className="text-[#1A120B] font-medium">₹{totalPrice.toLocaleString('en-IN')}</span>
                   </div>
                   <div className="flex justify-between text-[14px]">
                      <span className="text-[#9A806A]">Delivery Fee</span>
                      <span className={`${deliveryFee === 0 ? 'text-green-600' : 'text-[#1A120B]'} font-medium`}>
                        {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                      </span>
                   </div>
                   <div className="pt-4 mt-2 border-t border-[rgba(26,18,11,0.08)] flex justify-between items-end">
                      <div>
                        <span className="text-[12px] uppercase tracking-widest text-[#9A806A] font-bold">Total Amount</span>
                        <p className="text-[32px] font-display font-light text-[#1A120B] leading-none mt-1">₹{grandTotal.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-[#9A806A] mb-1">Estimated delivery</span>
                        <span className="text-[12px] font-medium text-[#BF5A2F]">45 - 60 mins</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Guarantees */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} />
                   </div>
                   <p className="text-[11px] font-medium text-[#1A120B] leading-tight">Freshly baked <br/>on order</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={20} />
                   </div>
                   <p className="text-[11px] font-medium text-[#1A120B] leading-tight">Secure <br/>Packaging</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
