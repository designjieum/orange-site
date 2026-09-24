"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { btn } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // 스크롤 시 헤더 배경 진하게
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 현재 보고 있는 섹션의 메뉴 강조
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ESC로 메뉴 닫기, 데스크톱 폭이 되면 자동 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 900px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={`fixed left-1/2 z-50 w-[min(1248px,calc(100%-24px))] -translate-x-1/2 transition-[top] duration-300 md:w-[min(1248px,calc(100%-32px))] ${
        scrolled ? "top-2.5" : "top-3 md:top-4"
      }`}
    >
      <div
        className={`flex h-15 items-center justify-between gap-6 rounded-full border pr-1.5 pl-5 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 min-[900px]:h-16 min-[900px]:pr-3 min-[900px]:pl-7 ${
          scrolled || open ? "border-white/10 bg-[rgb(14_14_16/0.85)]" : "border-white/12 bg-[rgb(14_14_16/0.45)]"
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center" aria-label={`${site.name} 홈`}>
          <Logo className="text-xl min-[900px]:text-[22px]" />
        </a>

        <nav aria-label="주요 메뉴" className="hidden min-[900px]:block">
          <ul className="flex gap-[clamp(20px,3.4vw,48px)]">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative block px-0.5 py-2 text-[15px] font-medium transition-colors hover:text-white ${
                      isActive ? "text-white" : "text-white/75"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-orange transition-transform duration-300 group-hover:scale-100 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 min-[900px]:gap-4">
          <a
            href={contact.tel}
            className="group flex items-center gap-2.5 text-[15px] font-semibold"
            aria-label={`전화 상담 ${contact.phone}`}
          >
            <span className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/5 transition-colors group-hover:border-orange group-hover:bg-orange/15 min-[900px]:size-9">
              <PhoneCall className="size-[17px]" strokeWidth={1.8} aria-hidden />
            </span>
            <span className="hidden tabular-nums lg:inline">{contact.phone}</span>
          </a>
          <a href="#contact" className={`${btn.primary} ${btn.sm} max-[899px]:hidden`}>
            상담하기
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full min-[900px]:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-3xl border border-white/10 bg-[rgb(14_14_16/0.95)] px-4 pt-3 pb-4 backdrop-blur-xl min-[900px]:hidden"
          >
            <nav aria-label="모바일 메뉴">
              <ul className="mb-3 divide-y divide-white/6">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center justify-between px-2 text-[17px] font-semibold"
                    >
                      {item.label}
                      <ChevronRight className="size-5 text-white/40" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href={contact.tel} className={`${btn.primary} ${btn.lg} w-full`}>
              <PhoneCall className="size-5" aria-hidden />
              {contact.phone} 전화하기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
