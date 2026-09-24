"use client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useRef, useState } from "react";

type Img = { src: string; alt: string };

/** 드래그(마우스·터치)와 키보드(←/→)로 비교하는 비포/애프터 슬라이더 */
export function BeforeAfter({ before, after, className = "" }: { before: Img; after: Img; className?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className={`group relative cursor-ew-resize touch-pan-y overflow-hidden rounded-2xl border border-white/15 bg-ink-3 select-none ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={after.src} alt={after.alt} fill sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-[rgb(90_90_110/0.75)] px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm md:top-6 md:left-6 md:text-[13px]">
        BEFORE
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full border border-orange bg-black/50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-orange-light backdrop-blur-sm md:top-6 md:right-6 md:text-[13px]">
        AFTER
      </span>

      {/* 구분선 + 핸들 */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_4px_16px_rgb(0_0_0/0.4)] transition-transform group-active:scale-95 group-has-[input:focus-visible]:ring-2 group-has-[input:focus-visible]:ring-orange-light group-has-[input:focus-visible]:ring-offset-2 group-has-[input:focus-visible]:ring-offset-ink">
          <ChevronsLeftRight className="size-5" strokeWidth={2.2} aria-hidden />
        </span>
      </div>

      {/* 키보드 · 스크린리더용 */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="시공 전후 비교 (왼쪽: 시공 전, 오른쪽: 시공 후)"
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
