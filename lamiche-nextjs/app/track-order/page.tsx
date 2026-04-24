"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  MapPin, 
  Package, 
  Flame, 
  Truck, 
  CheckCircle2, 
  Phone,
  Clock,
  ExternalLink,
  Info
} from 'lucide-react';

export default function TrackOrderPage() {
  const [currentStep, setCurrentStep] = useState(1); // 0: Received, 1: Baking, 2: Shipped, 3: Delivered
  const [orderId, setOrderId] = useState('LM-982410');

  // Simulate progress for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) setCurrentStep(prev => prev + 1);
    }, 15000); // Progress every 15 seconds for the demo
    return () => clearTimeout(timer);
  }, [currentStep]);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const steps = [
    { title: 'Order Received', icon: CheckCircle2, desc: 'We have received your request and are validating ingredients.' },
    { title: 'In the Oven', icon: Flame, desc: 'Our bakers are hand-shaping and baking your artisan treats fresh.' },
    { title: 'Out for Delivery', icon: Truck, desc: 'Your order is on its way with our premium courier.' },
    { title: 'Delivered', icon: Package, desc: 'Bon appétit! Your order has been successfully delivered.' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-24 pb-12 px-6 relative overflow-x-hidden">
      {/* Details Drawer Overlay */}
      <div 
        onClick={() => setIsDetailsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[1000] transition-opacity duration-500 ${
          isDetailsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Details Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-[#FDFAF6] z-[1010] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] p-8 overflow-y-auto ${
          isDetailsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
           <h2 className="font-display text-[28px] font-light text-[#1A120B]">Order Details</h2>
           <button onClick={() => setIsDetailsOpen(false)} className="w-10 h-10 rounded-full border border-[rgba(26,18,11,0.1)] flex items-center justify-center text-[#9A806A] hover:bg-[#FAF5EC] transition-all">
             <ChevronLeft size={20} className="rotate-180" />
           </button>
        </div>

        <div className="space-y-8">
           {/* Item List */}
           <section className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A806A]">Itemized Breakdown</h4>
              <div className="space-y-4">
                 {[
                   { name: 'Country Sourdough', qty: 2, price: 560, cat: 'Artisan Bread' },
                   { name: 'Croissant au Beurre', qty: 3, price: 360, cat: 'Viennoiserie' },
                   { name: 'Tarte au Citron', qty: 1, price: 180, cat: 'Pâtisserie' },
                 ].map((item) => (
                   <div key={item.name} className="flex justify-between items-center group">
                      <div>
                        <p className="text-[14px] font-medium text-[#1A120B] group-hover:text-[#BF5A2F] transition-colors">{item.name}</p>
                        <p className="text-[12px] text-[#9A806A]">{item.qty} × {item.cat}</p>
                      </div>
                      <p className="text-[14px] font-medium text-[#1A120B]">₹{item.price}</p>
                   </div>
                 ))}
              </div>
           </section>

           {/* Payment Summary */}
           <section className="p-6 bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] space-y-3 shadow-sm">
              <div className="flex justify-between text-[13px]">
                 <span className="text-[#9A806A]">Subtotal</span>
                 <span className="text-[#1A120B]">₹1,100</span>
              </div>
              <div className="flex justify-between text-[13px]">
                 <span className="text-[#9A806A]">Delivery Fee</span>
                 <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="pt-3 border-t border-[rgba(26,18,11,0.04)] flex justify-between items-center">
                 <span className="text-[14px] font-bold text-[#1A120B]">Grand Total</span>
                 <span className="text-[24px] font-display font-light text-[#BF5A2F]">₹1,100</span>
              </div>
           </section>

           {/* Destination */}
           <section className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A806A]">Delivery To</h4>
              <div className="flex gap-4 p-4 bg-[#FAF5EC] rounded-xl border border-[rgba(26,18,11,0.06)]">
                 <MapPin className="text-[#BF5A2F] flex-shrink-0" size={20} />
                 <p className="text-[13px] text-[#6B5040] leading-relaxed">
                   <strong>Home Address</strong><br/>
                   42 Baker Street, Apartment 4C,<br/>
                   Basavanagudi, Bengaluru 560001
                 </p>
              </div>
           </section>

           {/* Order History */}
           <section className="space-y-4 pt-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A806A]">Order History</h4>
              <div className="space-y-6">
                 {[
                   { time: '07:15 PM', event: 'Order Picked Up', status: 'done' },
                   { time: '07:02 PM', event: 'Quality Check Passed', status: 'done' },
                   { time: '06:45 PM', event: 'Baking Commenced', status: 'done' },
                   { time: '06:30 PM', event: 'Order Confirmed', status: 'done' },
                 ].map((log) => (
                   <div key={log.time} className="flex gap-4 items-center">
                      <span className="text-[11px] font-medium text-[#9A806A] w-16">{log.time}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BF5A2F]" />
                      <span className="text-[13px] text-[#1A120B]">{log.event}</span>
                   </div>
                 ))}
              </div>
           </section>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto">
        
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#9A806A] hover:text-[#BF5A2F] mb-8 transition-colors">
          <ChevronLeft size={16} />
          Back to Bakery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Tracking Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl border border-[rgba(26,18,11,0.08)] shadow-[0_12px_40px_rgba(26,18,11,0.04)] overflow-hidden">
               {/* Order Status Header */}
               <div className="p-8 border-b border-[rgba(26,18,11,0.06)] bg-[#FAF5EC]/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#BF5A2F] font-bold">Real-time Status</span>
                        <h1 className="font-display text-[32px] font-light text-[#1A120B] mt-1">Tracking Order <span className="font-medium">{orderId}</span></h1>
                     </div>
                     <div className="px-4 py-2 bg-white border border-[rgba(26,18,11,0.08)] rounded-xl flex items-center gap-3">
                        <Clock className="text-[#BF5A2F]" size={20} />
                        <div>
                           <p className="text-[10px] uppercase text-[#9A806A] font-bold leading-none mb-1">Estimated Arrival</p>
                           <p className="text-[15px] font-medium text-[#1A120B]">45 - 50 Minutes</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Timeline */}
               <div className="p-8 md:p-12">
                  <div className="relative space-y-12">
                     {/* Vertical Line */}
                     <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[rgba(26,18,11,0.06)]" />
                     
                     {/* Active Line Progress */}
                     <div 
                        className="absolute left-[19px] top-2 w-0.5 bg-[#BF5A2F] transition-all duration-1000" 
                        style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
                     />

                     {steps.map((step, idx) => (
                        <div key={step.title} className="flex gap-6 relative z-10 group">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                              idx <= currentStep 
                                 ? 'bg-[#BF5A2F] border-[#BF5A2F] text-white shadow-[0_0_20px_rgba(191,90,47,0.3)]' 
                                 : 'bg-white border-[rgba(26,18,11,0.1)] text-[#D4C4B0]'
                           }`}>
                              <step.icon size={20} className={idx === currentStep ? 'animate-pulse' : ''} />
                           </div>
                           <div className="flex-1 pt-1">
                              <h3 className={`text-[16px] font-medium transition-colors ${idx <= currentStep ? 'text-[#1A120B]' : 'text-[#9A806A]'}`}>
                                 {step.title}
                              </h3>
                              <p className="text-[13px] text-[#9A806A] mt-1 font-light leading-relaxed max-w-md">
                                 {step.desc}
                              </p>
                              {idx === 1 && currentStep === 1 && (
                                <div className="mt-4 p-4 bg-[#FAF5EC] rounded-xl border border-[rgba(26,18,11,0.06)] flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#BF5A2F]">
                                      <Flame size={16} />
                                   </div>
                                   <p className="text-[12px] font-medium text-[#6B5040]">Your Breads are currently at 240°C in the stone oven.</p>
                                </div>
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Support Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-[rgba(26,18,11,0.06)] flex items-center gap-4 group hover:border-[#BF5A2F]/30 transition-all">
                  <div className="w-12 h-12 bg-[#FAF5EC] rounded-xl flex items-center justify-center text-[#BF5A2F] group-hover:scale-110 transition-transform">
                     <Phone size={20} />
                  </div>
                  <div>
                     <p className="text-[13px] font-medium text-[#1A120B]">Contact Courier</p>
                     <p className="text-[12px] text-[#9A806A]">Rohan M. (+91 98XXX XXXX)</p>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-[rgba(26,18,11,0.06)] flex items-center gap-4 group hover:border-[#BF5A2F]/30 transition-all">
                  <div className="w-12 h-12 bg-[#FAF5EC] rounded-xl flex items-center justify-center text-[#BF5A2F] group-hover:scale-110 transition-transform">
                     <Info size={20} />
                  </div>
                  <div>
                     <p className="text-[13px] font-medium text-[#1A120B]">Order Help</p>
                     <p className="text-[12px] text-[#9A806A]">Support is available 24/7</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
             {/* Map Placeholder */}
             <div className="bg-white rounded-3xl border border-[rgba(26,18,11,0.08)] shadow-sm overflow-hidden h-[300px] relative group">
                <div className="absolute inset-0 bg-[#FAF5EC] flex flex-col items-center justify-center p-8 text-center">
                   <MapPin size={48} className="text-[#BF5A2F] mb-4 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                   <p className="text-[14px] font-medium text-[#1A120B]">Live Map Tracking</p>
                   <p className="text-[12px] text-[#9A806A] mt-1">Map is initializing based on your courier's GPS signal...</p>
                </div>
                {/* Mock Overlay UI */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 text-[11px] font-medium text-[#1A120B] flex items-center justify-between">
                   <span>Distance: 2.4 km</span>
                   <span className="text-[#BF5A2F]">Live</span>
                </div>
             </div>

             {/* Order Destination */}
             <div className="bg-white p-8 rounded-3xl border border-[rgba(26,18,11,0.08)] shadow-sm space-y-6">
                <h3 className="font-display text-[18px] font-light text-[#1A120B]">Delivery Destination</h3>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#FAF5EC] flex items-center justify-center text-[#BF5A2F] flex-shrink-0">
                      <MapPin size={18} />
                   </div>
                   <div>
                      <p className="text-[14px] font-medium text-[#1A120B]">Home Address</p>
                      <p className="text-[12px] text-[#9A806A] mt-1 leading-relaxed">
                         42 Baker Street, Apartment 4C,<br/>
                         Bengaluru, Karnataka 560001
                      </p>
                   </div>
                </div>
                <button 
                  onClick={() => setIsDetailsOpen(true)}
                  className="w-full py-3 bg-[#FAF5EC] hover:bg-[#F3EAD8] text-[#6B5040] text-[12px] font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                   View Full Details
                   <ExternalLink size={14} />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
