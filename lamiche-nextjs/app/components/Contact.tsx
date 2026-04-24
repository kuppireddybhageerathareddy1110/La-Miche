"use client";

export default function Contact() {
  const info = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: "Opening Hours",
      lines: ["Mon – Fri: 6:30 am – 7:00 pm", "Saturday: 7:00 am – 5:00 pm", "Sunday: 8:00 am – 2:00 pm"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Find Us",
      lines: ["14 Gandhi Bazaar Cross", "Basavanagudi", "Bengaluru – 560 004"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Phone & Email",
      lines: ["+91 80 2345 6789", "hello@lamiche.in", "Catering: events@lamiche.in"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "Delivery",
      lines: ["Free above ₹600", "Same-day cutoff: 11:00 am", "Radius: 15 km from store"],
    },
  ];

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#BF5A2F]" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#BF5A2F] font-medium">
              Visit Us
            </span>
            <div className="w-8 h-px bg-[#BF5A2F]" />
          </div>
          <h2 className="font-display text-[52px] font-extralight leading-[0.95] text-[#1A120B] tracking-tight">
            Find us in the{" "}
            <em className="text-[#BF5A2F] italic">heart of Bengaluru</em>
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {info.map((item) => (
            <div
              key={item.title}
              className="group p-7 rounded-xl border border-[rgba(26,18,11,0.08)] hover:border-[#BF5A2F] hover:shadow-[0_12px_40px_rgba(191,90,47,0.1)] transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF5EC] flex items-center justify-center text-[#BF5A2F] mb-5 group-hover:bg-[#BF5A2F] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-[20px] font-light text-[#1A120B] mb-3 tracking-tight">
                {item.title}
              </h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-[13px] text-[#6B5040] font-light leading-[1.8]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="rounded-xl overflow-hidden h-[280px] bg-[#FAF5EC] flex items-center justify-center border border-[rgba(26,18,11,0.08)] relative">
          <div className="text-center">
            <div className="text-[48px] mb-3">📍</div>
            <p className="font-display text-[22px] font-light text-[#1A120B]">14 Gandhi Bazaar Cross, Basavanagudi</p>
            <p className="text-[13px] text-[#9A806A] mt-1">Bengaluru – 560 004, Karnataka</p>
            <a
              href="https://maps.google.com/?q=Gandhi+Bazaar+Basavanagudi+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[12px] tracking-[0.1em] uppercase text-[#BF5A2F] border border-[#BF5A2F] px-5 py-2.5 rounded-sm hover:bg-[#BF5A2F] hover:text-white transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
