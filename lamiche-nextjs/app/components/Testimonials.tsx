"use client";

import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#FAF5EC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#BF5A2F]" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#BF5A2F] font-medium">
              Our Customers
            </span>
            <div className="w-8 h-px bg-[#BF5A2F]" />
          </div>
          <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-[#1A120B] tracking-tight">
            What our{" "}
            <em className="text-[#BF5A2F] italic">regulars say</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-xl p-8 shadow-[0_2px_16px_rgba(26,18,11,0.06)] hover:shadow-[0_20px_50px_rgba(26,18,11,0.12)] hover:-translate-y-1.5 transition-all duration-400 relative flex flex-col"
            >
              {/* Big quote mark */}
              <div className="font-display text-[80px] font-light text-[#BF5A2F] leading-none absolute top-4 right-6 opacity-15 select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#C8962A] text-[14px]">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] leading-[1.85] text-[#4A3A2A] font-light italic flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-[rgba(26,18,11,0.07)]">
                <div className="w-10 h-10 rounded-full bg-[#BF5A2F] flex items-center justify-center text-white text-[13px] font-medium tracking-wide flex-shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#1A120B] tracking-wide">{t.author}</div>
                  <div className="text-[11px] text-[#9A806A] font-light mt-0.5">{t.since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
