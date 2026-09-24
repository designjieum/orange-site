"use client";

import { useEffect, useState } from "react";
import { headerTagline, nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { btn } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header
      className={`fixed left-1/2 z-50 w-[min(1248px,calc(100%-24px))] -translate-x-1/2 transition-[top] duration-300 md:w-[min(1248px,calc(100%-32px))] ${
        scrolled ? "top-2.5" : "top-3 md:top-4"
      }`}
    >
      <div
        className={`flex h-15 items-center justify-between gap-6 rounded-full border pr-5 pl-5 md:pr-2.5 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 min-[900px]:h-16 min-[900px]:pr-3 min-[900px]:pl-7 ${
          scrolled ? "border-white/10 bg-[rgb(14_14_16/0.85)]" : "border-white/12 bg-[rgb(14_14_16/0.45)]"
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center" aria-label={`${site.name} 홈`}>
          <Logo className="text-xl min-[900px]:text-[22px]" />
        </a>

        {/* 좁은 화면에서는 메뉴를 숨기고 견적 문의 버튼만 노출 (원페이지) */}
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

        <a href="#contact" className={`${btn.primary} ${btn.sm} shrink-0 max-md:hidden`}>
          견적 문의
        </a>

        {/* 모바일에서는 버튼 대신 핵심 문구 */}
        <p className="text-right leading-tight tracking-[-0.02em] whitespace-nowrap md:hidden">
          <span className="block text-xs text-white/65">{headerTagline[0]}</span>
          <span className="mt-0.5 block text-[13px] font-bold text-orange">{headerTagline[1]}</span>
        </p>
      </div>
    </header>
  );
}
