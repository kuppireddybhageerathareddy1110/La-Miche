"use client";

import { useState } from "react";
import { useCart } from "../lib/cart-context";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const { showToast } = useCart();

  const handleSubscribe = () => {
    if (email.includes("@") && email.includes(".")) {
      showToast("🎉 You're subscribed! Welcome to La Miche.");
      setEmail("");
    } else {
      showToast("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-24 bg-[#BF5A2F] relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span className="font-display text-[220px] font-extralight text-white/[0.04] whitespace-nowrap leading-none tracking-tighter">
          La Miche
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-[11px] tracking-[0.22em] uppercase text-white/60 font-medium block mb-4">
            Stay Connected
          </span>
          <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-white tracking-tight mb-5">
            Fresh news, every{" "}
            <em className="italic">morning.</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-white/65 mb-10 font-light">
            Subscribe for seasonal specials, new arrivals, behind-the-scenes baking
            stories, and priority pre-orders.
          </p>

          {/* Form */}
          <div className="flex gap-0 max-w-[460px] mx-auto rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="your@email.com"
              aria-label="Email address for newsletter"
              className="flex-1 bg-white/15 text-white placeholder-white/40 px-5 py-4 text-[13px] font-light outline-none border-none backdrop-blur-sm"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#1A120B] hover:bg-[#2A1D10] text-white px-7 py-4 text-[12px] tracking-[0.1em] uppercase font-medium transition-all duration-300 whitespace-nowrap hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              Subscribe
            </button>
          </div>

          <p className="text-[11px] text-white/35 mt-4 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
