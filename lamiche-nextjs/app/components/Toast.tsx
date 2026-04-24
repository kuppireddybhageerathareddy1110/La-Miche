"use client";

import { useCart } from "../lib/cart-context";

export default function Toast() {
  const { state } = useCart();
  const { message, visible } = state.toast;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[1000] flex items-center gap-3 bg-[#1A120B] text-white px-5 py-3.5 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.35)] text-[13px] font-light transition-all duration-400 max-w-[320px] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="text-[#F0B090] text-[16px]">✓</span>
      <span className="leading-relaxed">{message}</span>
    </div>
  );
}
