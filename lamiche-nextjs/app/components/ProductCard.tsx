"use client";

import Image from "next/image";
import { Product } from "../lib/data";
import { useCart } from "../lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const badgeStyle: Record<string, string> = {
    bestseller: "bg-[#C8962A] text-white",
    new: "bg-[#BF5A2F] text-white",
    special: "bg-[#6B7C5A] text-white",
    sale: "bg-[#8A3D18] text-white",
    gf: "bg-[#4A7C59] text-white",
    vegan: "bg-[#5A6E3A] text-white",
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(26,18,11,0.06)] hover:shadow-[0_20px_60px_rgba(26,18,11,0.14)] hover:-translate-y-2 transition-all duration-400 cursor-pointer flex flex-col">
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-[#F5EFE6]">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm font-medium ${
              badgeStyle[product.badge] || "bg-[#9A806A] text-white"
            }`}
          >
            {product.badge === "gf" ? "Gluten-Free" : product.badge === "vegan" ? "Vegan" : product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] tracking-[0.16em] uppercase text-[#9A806A] mb-2 font-medium">
          {product.cat}
          {product.alt && <> &middot; <em className="not-italic opacity-70">{product.alt}</em></>}
        </span>
        <h3 className="font-display text-[21px] font-light text-[#1A120B] leading-tight mb-2">
          {product.name}
        </h3>
        <p className="text-[12px] leading-[1.65] text-[#9A806A] font-light mb-4 line-clamp-2 flex-1">
          {product.desc}
        </p>

        {/* Allergens */}
        {product.allergens.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.allergens.map((a) => (
              <span
                key={a}
                className="text-[9px] tracking-[0.08em] bg-[#FAF5EC] text-[#9A806A] border border-[rgba(26,18,11,0.08)] px-2 py-0.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[rgba(26,18,11,0.07)] mt-auto">
          <span className="font-display text-[22px] font-light text-[#BF5A2F]">
            ₹{product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="w-9 h-9 rounded-full border border-[rgba(26,18,11,0.15)] flex items-center justify-center text-[#1A120B] text-xl leading-none hover:bg-[#BF5A2F] hover:text-white hover:border-transparent hover:rotate-90 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
