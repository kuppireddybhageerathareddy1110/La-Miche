"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/app/lib/cart-context";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    const handle = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const links = [
    { label: "Menu", href: "#catalog" },
    { label: "Specials", href: "#specials" },
    { label: "World Breads", href: "#regional" },
    { label: "Story", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-400 ${
        solid
          ? "bg-[#FDFAF6]/[0.96] backdrop-blur-2xl shadow-[0_1px_0_rgba(26,18,11,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-[76px] max-w-[1440px] mx-auto">
        <Link
          href="#"
          className={`font-display text-[26px] font-extralight tracking-[0.04em] no-underline transition-colors duration-300 ${
            solid ? "text-[#1A120B]" : "text-white"
          }`}
        >
          La <em className={`italic ${solid ? "text-[#BF5A2F]" : "text-[#F0B090]"}`}>Miche</em>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`text-[12px] font-normal tracking-[0.12em] uppercase no-underline transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  solid
                    ? "text-[#9A806A] hover:text-[#BF5A2F] after:bg-[#BF5A2F]"
                    : "text-white/70 hover:text-white after:bg-[#F0B090]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className={`flex items-center gap-2 px-5 py-[9px] rounded-full text-[12px] font-normal tracking-[0.08em] cursor-pointer transition-all duration-300 border relative ${
              solid
                ? "border-[rgba(26,18,11,0.1)] text-[#3D2B1F] bg-transparent hover:bg-[#FAF5EC] hover:border-[#BF5A2F]"
                : "border-white/30 text-white/85 bg-white/[0.08] backdrop-blur-lg hover:bg-white/[0.18] hover:border-white/60"
            }`}
          >
            <ShoppingBag size={16} />
            Basket
            {totalItems > 0 && (
              <span className="bg-[#BF5A2F] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center absolute -top-2 -right-2 animate-[addPop_0.4s_ease]">
                {totalItems}
              </span>
            )}
          </button>

          {/* User Menu */}
          <div className="relative hidden md:block">
            {session ? (
              <div>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className={`flex items-center justify-center w-[36px] h-[36px] rounded-full text-[12px] font-normal tracking-[0.08em] cursor-pointer transition-all duration-300 border ${
                    solid
                      ? "border-[rgba(26,18,11,0.1)] text-[#3D2B1F] bg-[#FAF5EC] hover:border-[#BF5A2F]"
                      : "border-white/30 text-white bg-white/[0.18] hover:border-white/60"
                  }`}
                >
                  <span className="uppercase">{session.user?.name?.[0] || <User size={16} />}</span>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_8px_32px_rgba(26,18,11,0.08)] border border-[rgba(26,18,11,0.08)] py-2 overflow-hidden animate-[fadeUp_0.2s_ease]">
                    <div className="px-4 py-2 border-b border-[rgba(26,18,11,0.04)] mb-1">
                      <p className="text-[13px] font-medium text-[#1A120B] truncate">{session.user?.name}</p>
                      <p className="text-[11px] text-[#9A806A] truncate">{session.user?.email}</p>
                    </div>
                    
                    {(session.user as any)?.role === 'admin' && (
                      <Link 
                        href="/admin" 
                        onClick={() => setUserMenuOpen(false)}
                        className="block px-4 py-2 text-[12px] font-medium text-[#BF5A2F] hover:bg-[#FAF5EC] transition-colors"
                      >
                        Admin Portal
                      </Link>
                    )}

                    <Link 
                      href="/my-orders" 
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-[12px] font-medium text-[#6B5040] hover:bg-[#FAF5EC] transition-colors"
                    >
                      My Orders
                    </Link>
                    
                    <button 
                      onClick={() => { setUserMenuOpen(false); signOut(); }}
                      className="w-full text-left px-4 py-2 text-[12px] font-medium text-[#6B5040] hover:bg-[#FAF5EC] transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className={`flex items-center justify-center w-[36px] h-[36px] rounded-full transition-all duration-300 border ${
                  solid
                    ? "border-[rgba(26,18,11,0.1)] text-[#3D2B1F] bg-transparent hover:bg-[#FAF5EC] hover:border-[#BF5A2F]"
                    : "border-white/30 text-white/85 bg-white/[0.08] backdrop-blur-lg hover:bg-white/[0.18] hover:border-white/60"
                }`}
              >
                <User size={16} />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 ${solid ? "text-[#1A120B]" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FDFAF6] border-t border-[rgba(26,18,11,0.1)] px-6 py-6 space-y-4 animate-[fadeUp_0.3s_ease]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block text-[13px] tracking-[0.1em] uppercase text-[#3D2B1F] hover:text-[#BF5A2F] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-[rgba(26,18,11,0.1)]">
            {session ? (
              <>
                <div className="mb-3">
                  <p className="text-[13px] font-medium text-[#1A120B]">{session.user?.name}</p>
                  <p className="text-[11px] text-[#9A806A]">{session.user?.email}</p>
                </div>
                {(session.user as any)?.role === 'admin' && (
                  <Link 
                    href="/admin" 
                    onClick={() => setMobileOpen(false)}
                    className="block text-[13px] tracking-[0.1em] uppercase text-[#BF5A2F] mb-4"
                  >
                    Admin Portal
                  </Link>
                )}
                <Link 
                  href="/my-orders" 
                  onClick={() => setMobileOpen(false)}
                  className="block text-[13px] tracking-[0.1em] uppercase text-[#6B5040] mb-4"
                >
                  My Orders
                </Link>
                <button 
                  onClick={() => { setMobileOpen(false); signOut(); }}
                  className="block text-[13px] tracking-[0.1em] uppercase text-[#6B5040]"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setMobileOpen(false)}
                className="block text-[13px] tracking-[0.1em] uppercase text-[#1A120B]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
