"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "../lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#FAF5EC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#BF5A2F]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#BF5A2F] font-medium">
                Gallery
              </span>
            </div>
            <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-[#1A120B] tracking-tight">
              From our{" "}
              <em className="text-[#BF5A2F] italic">kitchen</em>
            </h2>
          </div>
          <p className="text-[14px] text-[#9A806A] font-light max-w-[280px] leading-[1.75]">
            A glimpse into the craft that goes into every item we bake.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[2/3]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1A120B]/0 group-hover:bg-[#1A120B]/50 transition-all duration-400 flex items-center justify-center">
                  <span className="text-white text-[36px] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transition-transform">
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/lamiche.bakery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.12em] uppercase text-[#BF5A2F] border border-[#BF5A2F] px-7 py-3.5 rounded-sm hover:bg-[#BF5A2F] hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow @lamiche.bakery on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
