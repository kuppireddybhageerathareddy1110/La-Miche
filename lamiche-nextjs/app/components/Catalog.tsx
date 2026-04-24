"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../lib/data";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <section id="catalog" className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-14 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#BF5A2F]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#BF5A2F] font-medium">
                Full Catalog
              </span>
            </div>
            <h2 className="font-display text-[52px] lg:text-[64px] font-extralight leading-[0.95] text-[#1A120B] tracking-tight">
              The Global{" "}
              <em className="text-[#BF5A2F] italic">Culinary Menu</em>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-full transition-all duration-300 border font-medium whitespace-nowrap ${
                  active === cat
                    ? "bg-[#BF5A2F] text-white border-[#BF5A2F] shadow-[0_6px_20px_rgba(191,90,47,0.3)]"
                    : "bg-transparent text-[#9A806A] border-[rgba(26,18,11,0.12)] hover:border-[#BF5A2F] hover:text-[#BF5A2F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-[12px] tracking-[0.1em] uppercase text-[#9A806A] mb-8 font-medium">
          Showing {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          {active !== "All" && <span className="text-[#BF5A2F]"> · {active}</span>}
        </p>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#9A806A]">
            <div className="text-5xl mb-4">🥐</div>
            <p className="font-display text-2xl font-light">Nothing here yet.</p>
            <p className="text-sm mt-2">Try a different category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
