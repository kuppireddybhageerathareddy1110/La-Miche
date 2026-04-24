"use client";

import { PROCESS_STEPS } from "../lib/data";

const ICONS: Record<string, JSX.Element> = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  ),
};

export default function Process() {
  return (
    <section className="py-28 bg-[#1A120B]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C8962A]" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#C8962A] font-medium">
              Our Method
            </span>
            <div className="w-8 h-px bg-[#C8962A]" />
          </div>
          <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-white tracking-tight">
            From Grain to{" "}
            <em className="text-[#C8962A] italic">Table</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px bg-gradient-to-r from-[#C8962A]/20 via-[#C8962A]/60 to-[#C8962A]/20 z-0" />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              className="group relative flex flex-col items-center text-center z-10"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon circle */}
              <div className="w-[72px] h-[72px] rounded-full border border-[rgba(200,150,42,0.3)] flex items-center justify-center mb-6 text-[#C8962A] bg-[#1A120B] group-hover:bg-[#C8962A] group-hover:text-[#1A120B] group-hover:border-[#C8962A] transition-all duration-400 shadow-[0_0_0_8px_rgba(200,150,42,0.06)]">
                {ICONS[step.icon]}
              </div>

              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8962A] font-medium mb-3 block">
                {step.n}
              </span>
              <h3 className="font-display text-[24px] font-light text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.8] text-white/45 font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
