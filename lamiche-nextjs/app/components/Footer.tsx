"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Shop",
      links: [
        { label: "Full Menu", href: "#catalog" },
        { label: "Weekly Specials", href: "#specials" },
        { label: "World Breads", href: "#regional" },
        { label: "Gift Vouchers", href: "#" },
        { label: "Catering Orders", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#about" },
        { label: "Craft & Method", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Press", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Delivery Info", href: "#contact" },
        { label: "Allergen Guide", href: "#" },
        { label: "Pre-Orders", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "https://instagram.com/lamiche.bakery",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/lamiche",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    },
    {
      label: "Twitter / X",
      href: "https://twitter.com/lamiche",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
    },
  ];

  return (
    <footer className="bg-[#0F0A06] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="font-display text-[30px] font-extralight text-white tracking-wide block mb-4 no-underline">
              La <em className="italic text-[#F0B090]">Miche</em>
            </Link>
            <p className="text-[13px] leading-[1.85] text-white/40 font-light max-w-[260px] mb-7">
              Artisan bakery crafting slow-fermented breads and classic French pastries from heirloom grains. Bengaluru, since 1987.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#BF5A2F] hover:bg-[#BF5A2F]/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-7 border-t border-white/[0.06]">
              <p className="text-[12px] text-white/30 font-light">Mon–Fri 6:30 am · Sat 7 am · Sun 8 am</p>
              <p className="text-[12px] text-white/30 font-light mt-1">14 Gandhi Bazaar Cross, Basavanagudi</p>
            </div>
          </div>

          {/* Nav Cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-white/30 font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3 list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] font-light text-white/50 hover:text-[#F0B090] transition-colors duration-200 no-underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-7">
          <p className="text-[11px] text-white/25 font-light">
            © {year} La Miche Artisan Bakery. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Allergen Info"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[11px] text-white/25 hover:text-white/55 transition-colors font-light no-underline"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
