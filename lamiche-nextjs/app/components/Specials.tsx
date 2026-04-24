"use client";

import Image from "next/image";
import { SPECIALS } from "../lib/data";

export default function Specials() {
  return (
    <section id="specials" className="py-28 bg-[#1A120B]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8962A]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#C8962A] font-medium">
                Limited Edition
              </span>
            </div>
            <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-white tracking-tight">
              Chef&apos;s{" "}
              <em className="text-[#C8962A] italic">Specials</em>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.75] text-white/50 max-w-[320px] font-light">
            A curated selection of seasonal recipes and limited-run creations from our head baker.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIALS.map((s, i) => (
            <div
              key={s.name}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 ? "aspect-[3/4] lg:aspect-auto lg:h-full min-h-[380px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/90 via-[#1A120B]/30 to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8962A] block mb-1.5 font-medium">
                    {s.cat}
                  </span>
                  <h3
                    className={`font-display font-extralight text-white leading-tight mb-2 ${
                      i === 0 ? "text-[34px]" : "text-[22px]"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <p className="text-[12px] text-white/60 font-light mb-3 leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="font-display text-[24px] font-extralight text-[#C8962A]">
                    {s.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
