"use client";

import { ImageIcon, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { mobileCta } from "@/lib/content";

/** 모바일 하단 고정 상담 바: 히어로 버튼이 사라지면 나타나고, 문의 섹션에서는 숨김 */
export function MobileCTABar() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const heroCtas = document.getElementById("hero-ctas");
    const contactEl = document.getElementById("contact");
    const observers: IntersectionObserver[] = [];

    if (heroCtas) {
      const o = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting));
      o.observe(heroCtas);
      observers.push(o);
    }
    if (contactEl) {
      const o = new IntersectionObserver(([e]) => setContactVisible(e.isIntersecting), { threshold: 0.25 });
      o.observe(contactEl);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const show = !heroVisible && !contactVisible;

  return (
    <div
      aria-label="빠른 상담"
      role="region"
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1.4fr] gap-2 border-t border-white/10 bg-[rgb(11_11_12/0.9)] px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-lg transition-transform duration-300 ease-out-soft md:hidden ${
        show ? "translate-y-0" : "translate-y-[110%]"
      }`}
    >
      <a
        href={mobileCta.secondary.href}
        className="flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/25 text-base font-bold"
      >
        <ImageIcon className="size-5" aria-hidden />
        {mobileCta.secondary.label}
      </a>
      <a href={mobileCta.primary.href} className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-grad-orange text-base font-bold">
        <PhoneCall className="size-5" aria-hidden />
        {mobileCta.primary.label}
      </a>
    </div>
  );
}
