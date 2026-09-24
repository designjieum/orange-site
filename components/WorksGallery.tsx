"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { works } from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";
import { FadeUp } from "./FadeUp";

type Filter = (typeof works.filters)[number];
/** 탭마다 보여줄 사례 수 (2×2 중 나머지 한 칸은 상담 안내 카드) */
const CASES = 3;

/** 업종 필터 + 비포/애프터 + 사례 카드 그리드 */
export function WorksGallery({ label, heading }: { label: React.ReactNode; heading: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("전체");

  // '전체'는 업종별 첫 사례를 하나씩, 나머지 탭은 해당 업종 사례를 순서대로
  const visible = (
    filter === "전체"
      ? works.filters
          .filter((f) => f !== "전체")
          .map((f) => works.items.find((w) => w.category === f))
          .filter((w) => w !== undefined)
      : works.items.filter((w) => w.category === filter)
  ).slice(0, CASES);

  return (
    <>
      {label}
      {/* 제목과 필터 탭의 시작 높이를 맞춤 */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {heading}
        <FadeUp delay={0.08} className="-mx-[clamp(20px,4vw,40px)] lg:mx-0 lg:mt-[calc(2rem+0.2em)] lg:text-[clamp(1.75rem,1.333rem+1.39vw,2.375rem)]">
          <div
            role="group"
            aria-label="업종별 시공사례 보기"
            className="flex gap-2 overflow-x-auto px-[clamp(20px,4vw,40px)] [scrollbar-width:none] lg:px-0"
          >
            {works.filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`h-11 shrink-0 rounded-full border px-5 text-[15px] font-medium transition-colors duration-200 md:px-6 ${
                    active
                      ? "border-transparent bg-grad-orange font-bold text-white shadow-[0_6px_20px_-8px_rgb(255_107_26/0.8)]"
                      : "border-white/25 text-white/80 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </FadeUp>
      </div>

      <div className="mt-8 grid gap-4 md:mt-8 lg:grid-cols-[1.38fr_1fr] lg:gap-6">
        <FadeUp>
          <BeforeAfter before={works.featured.before} after={works.featured.after} className="aspect-square" />
        </FadeUp>

        <ul
          aria-live="polite"
          className="grid grid-cols-2 gap-3 md:gap-[18px] lg:grid-rows-2"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => (
              <motion.li
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="aspect-[3/4] lg:aspect-auto"
              >
                <figure className="group relative size-full overflow-hidden rounded-2xl border border-white/15 bg-ink-3">
                  <Image
                    src={item.image}
                    alt={`${item.type} ${item.work} 시공 사례 (${item.location})`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(0_0_0/0.8))]" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3.5 text-[13px] leading-snug font-semibold md:p-4 md:text-sm">
                    {item.type} · {item.location} · {item.work}
                  </figcaption>
                </figure>
              </motion.li>
            ))}

            {/* 오른쪽 아래: 상담 안내 카드 */}
            <motion.li
              key="more"
              layout
              transition={{ duration: 0.3 }}
              // 사례가 2개뿐인 탭에서는 아래 줄 전체를 채움 (빈칸 방지)
              className={visible.length === 2 ? "col-span-2 min-h-[160px]" : "aspect-[3/4] lg:aspect-auto"}
            >
              <a
                href={works.moreCard.href}
                className="group relative flex size-full flex-col justify-between overflow-hidden rounded-2xl border border-orange/30 bg-[linear-gradient(160deg,rgb(255_107_26/0.16),rgb(255_107_26/0.03)_60%)] p-4 transition-colors duration-300 hover:border-orange/70 md:p-6"
              >
                <span
                  aria-hidden
                  className="grid size-10 place-items-center self-end rounded-full bg-grad-orange shadow-[0_6px_20px_-6px_rgb(255_107_26/0.8)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:size-12"
                >
                  <ArrowUpRight className="size-5" />
                </span>
                <span>
                  <span className="block text-base leading-snug font-bold tracking-[-0.02em] md:text-xl">
                    {works.moreCard.text.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                  <span className="mt-2 block text-[13px] font-semibold text-orange-light md:mt-3 md:text-sm">
                    {works.moreCard.label}
                  </span>
                </span>
              </a>
            </motion.li>
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
}
