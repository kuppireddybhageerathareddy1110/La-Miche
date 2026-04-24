"use client";

import { TICKER_ITEMS } from "../lib/data";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // doubled for seamless loop

  return (
    <div className="bg-[#BF5A2F] overflow-hidden py-3.5 border-y border-[#A34A22]">
      <div className="flex animate-[ticker_28s_linear_infinite] whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-6">
            <span className="text-white/80 text-[11px] tracking-[0.18em] uppercase font-medium">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
