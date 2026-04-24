"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, MessageCircle } from "lucide-react";
import { AI_CHIPS, MENU_CONTEXT } from "../lib/data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the La Miche assistant 🥐 I can help you explore our menu, find allergen info, or answer any questions about our bakery. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async (text?: string) => {
    const query = (text || input).trim();
    if (!query || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    setLoading(true);

    // Simple rule-based responses (fallback when no API key)
    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = "";

      if (lower.includes("gluten") || lower.includes("gf")) {
        reply = "Our **gluten-free options** are: **GF Multigrain Bread** ₹300, **Vegan Chocolate Cake** ₹580, **GF Brownie** ₹120, and **Macaron Assortment** ₹240. All are prepared in a dedicated area of our kitchen.";
      } else if (lower.includes("vegan")) {
        reply = "We have **Vegan Chocolate Cake** ₹580 and **GF Brownie** ₹120 that are dairy and egg free. Please ask our staff about cross-contamination risks.";
      } else if (lower.includes("open") || lower.includes("hour") || lower.includes("time")) {
        reply = "We're open **Mon–Fri 6:30 am – 7 pm**, **Saturday 7 am – 5 pm**, and **Sunday 8 am – 2 pm**.";
      } else if (lower.includes("delivery")) {
        reply = "We offer **free delivery above ₹600** within a 15 km radius. Same-day order cutoff is **11:00 am**. Call +91 80 2345 6789 for orders.";
      } else if (lower.includes("birthday") || lower.includes("cake")) {
        reply = "For a birthday, I'd recommend our **Black Forest Gateau** ₹860, **Chocolate Layer Cake** ₹780, or **Tres Leches** ₹680. We also take custom cake orders — call us 48 hours in advance!";
      } else if (lower.includes("croissant") || lower.includes("pastry")) {
        reply = "Our most loved pastries are the **Croissant au Beurre** ₹120, **Pain au Chocolat** ₹130, and the seasonal **Kouign-Amann** ₹190. All made fresh before 6 am with cultured French butter.";
      } else if (lower.includes("special") || lower.includes("today")) {
        reply = "This week's specials: **Kouign-Amann** ₹190 (daily), **Brioche Feuilletée** ₹160 (Saturday only), **Galette des Rois** ₹240 (weekends), and \**Miso Sourdough*\* ₹310 — our chef's signature.";
      } else if (lower.includes("location") || lower.includes("address") || lower.includes("where")) {
        reply = "We're at **14 Gandhi Bazaar Cross, Basavanagudi, Bengaluru 560 004** — near the Ragigudda temple. Easy parking available!";
      } else if (lower.includes("allergen") || lower.includes("nut") || lower.includes("dairy")) {
        reply = "All our products display allergen information on the card (Gluten, Dairy, Eggs, Nuts, Seeds). For a printed allergen guide, ask our staff at the counter or email **hello@lamiche.in**.";
      } else if (lower.includes("recommend") || lower.includes("best") || lower.includes("popular")) {
        reply = "Our bestsellers are: **Country Sourdough** ₹280, **Croissant au Beurre** ₹120, **Opéra Cake** ₹320, and **Macaron Assortment** ₹240. Any category preference I can narrow down for you?";
      } else {
        reply = "Great question! For anything specific I can't answer here, please call us at **+91 80 2345 6789** or email **hello@lamiche.in** — our team is happy to help. Is there anything else I can tell you about our menu?";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 800);
  };

  const formatMessage = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI chat assistant"
        className="fixed bottom-6 left-6 z-[800] w-[56px] h-[56px] bg-[#BF5A2F] hover:bg-[#A34A22] text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(191,90,47,0.45)] hover:shadow-[0_12px_40px_rgba(191,90,47,0.55)] transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 left-6 z-[850] w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.22)] flex flex-col overflow-hidden border border-[rgba(26,18,11,0.08)] animate-[fadeUp_0.35s_ease]">
          {/* Header */}
          <div className="bg-[#BF5A2F] px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-[14px]">La Miche Assistant</p>
                <p className="text-white/60 text-[11px]">Ask me anything about our menu</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FDFAF6]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-[1.7] font-light ${
                    msg.role === "user"
                      ? "bg-[#BF5A2F] text-white rounded-br-sm"
                      : "bg-white text-[#1A120B] shadow-[0_2px_8px_rgba(26,18,11,0.07)] rounded-bl-sm"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-[0_2px_8px_rgba(26,18,11,0.07)]">
                  <div className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-[#BF5A2F] rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Chips */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none border-t border-[rgba(26,18,11,0.06)] bg-white flex-shrink-0">
              {AI_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="text-[11px] text-[#6B5040] border border-[rgba(26,18,11,0.12)] rounded-full px-3 py-1.5 whitespace-nowrap hover:border-[#BF5A2F] hover:text-[#BF5A2F] transition-all duration-200 flex-shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 px-4 py-3 border-t border-[rgba(26,18,11,0.08)] bg-white flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about our menu…"
              className="flex-1 text-[13px] font-light text-[#1A120B] placeholder-[#C4B0A0] bg-[#FAF5EC] rounded-full px-4 py-2.5 outline-none border border-transparent focus:border-[#BF5A2F] transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || loading}
              className="w-10 h-10 bg-[#BF5A2F] disabled:opacity-40 hover:bg-[#A34A22] text-white rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
