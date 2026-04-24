"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#FAF5EC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
                  alt="Baker shaping bread dough by hand"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop"
                  alt="Freshly baked baguettes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 bg-[#1A120B] text-white px-6 py-4 rounded-lg text-center z-10 shadow-2xl border border-white/10">
              <span className="font-display text-[36px] font-extralight text-[#F0B090] block leading-none">37</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/60 block mt-1">Years<br/>Baking</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#BF5A2F]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#BF5A2F] font-medium">
                Our Heritage
              </span>
            </div>
            <h2 className="font-display text-[52px] lg:text-[64px] font-extralight leading-[0.95] text-[#1A120B] mb-8 tracking-tight">
              Born from a{" "}
              <em className="text-[#BF5A2F] italic">passion</em>{" "}
              for exceptional bread.
            </h2>
            <p className="text-[15px] leading-[1.9] text-[#6B5040] mb-6 font-light">
              La Miche was founded in 1987 by Marguerite Roy, who trained in Lyon under celebrated
              baker Jean-Pierre Viallet. Arriving in Bengaluru with a hand-written book of starters
              and formulas, she opened a single oven at Gandhi Bazaar that has since grown into the
              city&apos;s most beloved boulangerie.
            </p>
            <p className="text-[15px] leading-[1.9] text-[#6B5040] mb-10 font-light">
              Every loaf begins with our 37-year-old active sourdough culture. We blend heritage
              grain flours from small farmers in Maharashtra, shaping each item by hand before the
              city wakes — always in service of flavour, never speed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[rgba(26,18,11,0.1)]">
              {[
                { n: "100%", label: "Natural Leavening" },
                { n: "4 am", label: "Daily Start" },
                { n: "Zero", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-[38px] font-extralight text-[#BF5A2F] block leading-none">
                    {stat.n}
                  </span>
                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#9A806A] mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
