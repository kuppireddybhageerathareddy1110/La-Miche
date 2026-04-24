"use client";

import { REGIONAL } from "../lib/data";

export default function Regional() {
  return (
    <section id="regional" className="py-28 bg-[#FAF5EC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#BF5A2F]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#BF5A2F] font-medium">
                World Heritage
              </span>
            </div>
            <h2 className="font-display text-[52px] lg:text-[64px] font-extralight leading-[0.95] text-[#1A120B] tracking-tight">
              Regional{" "}
              <em className="text-[#BF5A2F] italic block">Specialties</em>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.85] text-[#6B5040] font-light max-w-[400px]">
            Our menu stretches beyond the French border — from Indian naan baked
            in tandoors to Middle-Eastern baklava and Latin American conchas. A
            global passport on one counter.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {REGIONAL.map((r) => (
            <div
              key={r.region}
              className="group relative bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(26,18,11,0.06)] hover:shadow-[0_20px_50px_rgba(26,18,11,0.13)] hover:-translate-y-2 transition-all duration-400 flex flex-col cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#BF5A2F] to-[#C8962A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="p-6 flex flex-col flex-1">
                <div className="text-[38px] mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {r.icon}
                </div>
                <span className="text-[9px] tracking-[0.18em] uppercase text-[#BF5A2F] font-medium mb-1">
                  {r.region}
                </span>
                <h3 className="font-display text-[22px] font-light text-[#1A120B] leading-tight mb-4">
                  {r.title}
                </h3>
                <ul className="space-y-2 mt-auto">
                  {r.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[12px] text-[#6B5040] font-light"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#BF5A2F] flex-shrink-0 opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
