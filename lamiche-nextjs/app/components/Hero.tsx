"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1800&auto=format&fit=crop"
          alt="Artisan sourdough breads fresh from the oven"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B]/80 via-[#1A120B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-[76px] max-w-[1440px] mx-auto w-full">
        <div className="max-w-[680px] py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-[fadeUp_0.7s_0.1s_both_ease]">
            <div className="w-10 h-px bg-[#BF5A2F]" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#F0B090] font-medium">
              Artisan Bakery · Est. 1987
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[100px] font-extralight leading-[0.92] tracking-tight text-white mb-8 animate-[fadeUp_0.7s_0.2s_both_ease]">
            Baked{" "}
            <em className="text-[#F0B090] italic block">with love,</em>
            eaten{" "}
            <em className="text-[#F0B090] italic">with joy.</em>
          </h1>

          {/* Desc */}
          <p className="text-[16px] leading-[1.8] text-white/65 max-w-[440px] mb-12 font-light animate-[fadeUp_0.7s_0.35s_both_ease]">
            From wild-yeast sourdoughs to butter-laminated viennoiserie — every
            item crafted at 4&nbsp;am from heritage-milled grain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-[fadeUp_0.7s_0.45s_both_ease]">
            <Link
              href="#catalog"
              className="inline-flex items-center gap-2.5 bg-[#BF5A2F] hover:bg-[#A34A22] text-white text-[13px] font-medium tracking-[0.08em] uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(191,90,47,0.4)]"
            >
              Explore Menu <ArrowRight size={15} />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2.5 border border-white/30 text-white text-[13px] font-medium tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-white/15 animate-[fadeUp_0.7s_0.55s_both_ease]">
            {[
              { n: "37+", label: "Years Baking" },
              { n: "80+", label: "Daily Items" },
              { n: "12K+", label: "Happy Regulars" },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-display text-[42px] font-extralight text-[#F0B090] block leading-none">
                  {s.n}
                </span>
                <span className="text-[11px] tracking-[0.12em] uppercase text-white/45 mt-2 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating image cards (right side, desktop only) */}
      <div className="hidden xl:flex flex-col gap-4 absolute right-16 top-1/2 -translate-y-1/2 z-10 animate-[fadeUp_0.8s_0.6s_both_ease]">
        {[
          { src: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=300&auto=format&fit=crop", alt: "Fresh pastries" },
          { src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&auto=format&fit=crop", alt: "Colorful macarons" },
        ].map((img, i) => (
          <div
            key={i}
            className="w-[220px] h-[160px] relative rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10"
            style={{ transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)" }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-[fadeUp_0.7s_0.8s_both_ease]">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-[scrollPulse_1.5s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
