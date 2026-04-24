"use client";

import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../lib/cart-context";
import Link from "next/link";

export default function CartSidebar() {
  const { state, toggleCart, changeQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const { isOpen, items } = state;


  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 z-[900] bg-black/50 backdrop-blur-[2px] transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[100vw] sm:w-[440px] z-[950] bg-[#FDFAF6] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.2)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(26,18,11,0.08)]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#BF5A2F]" />
            <h2 className="font-display text-[22px] font-light text-[#1A120B]">
              Your Basket
            </h2>
            {totalItems > 0 && (
              <span className="bg-[#BF5A2F] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={toggleCart}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(26,18,11,0.1)] text-[#9A806A] hover:bg-[#FAF5EC] hover:text-[#1A120B] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={48} className="text-[#D4C4B0] mb-4" />
              <p className="font-display text-[24px] font-light text-[#1A120B] mb-2">Your basket is empty</p>
              <p className="text-[13px] text-[#9A806A] font-light">
                Add something delicious from our menu.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 bg-white rounded-xl p-4 shadow-[0_1px_8px_rgba(26,18,11,0.05)]">
                  {/* Thumb */}
                  <div className="w-[72px] h-[72px] relative rounded-lg overflow-hidden flex-shrink-0 bg-[#FAF5EC]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-[16px] font-light text-[#1A120B] leading-tight truncate">
                        {product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-[#D4C4B0] hover:text-[#BF5A2F] transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#9A806A] font-light mt-0.5 mb-3">{product.cat}</p>
                    <div className="flex items-center justify-between">
                      {/* Qty */}
                      <div className="flex items-center gap-2 border border-[rgba(26,18,11,0.1)] rounded-full px-1 py-0.5">
                        <button
                          onClick={() => changeQuantity(product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[#FAF5EC] text-[#6B5040] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-[13px] font-medium text-[#1A120B] w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => changeQuantity(product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[#FAF5EC] text-[#6B5040] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-display text-[18px] font-light text-[#BF5A2F]">
                        ₹{(product.price * quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[rgba(26,18,11,0.08)] px-6 py-5 bg-white">
            {/* Delivery notice */}
            {totalPrice < 600 && (
              <p className="text-[12px] text-[#9A806A] font-light mb-4 text-center">
                Add ₹{(600 - totalPrice).toLocaleString("en-IN")} more for free delivery
              </p>
            )}
            {totalPrice >= 600 && (
              <p className="text-[12px] text-[#4A7C59] font-medium mb-4 text-center">
                ✓ Free delivery unlocked!
              </p>
            )}

            {/* Total */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[13px] uppercase tracking-[0.1em] text-[#9A806A] font-medium">Total</span>
              <span className="font-display text-[28px] font-light text-[#1A120B]">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <Link 
              href="/checkout"
              onClick={toggleCart}
              className="w-full bg-[#BF5A2F] hover:bg-[#A34A22] text-white py-4 rounded-lg text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:shadow-[0_12px_32px_rgba(191,90,47,0.4)] mb-3 flex items-center justify-center no-underline"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-[12px] text-[#9A806A] hover:text-[#BF5A2F] transition-colors font-light tracking-wide"
            >
              Clear basket
            </button>
          </div>
        )}
      </div>
    </>
  );
}
