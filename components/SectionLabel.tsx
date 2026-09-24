/** "01 — PROBLEM" 형태의 섹션 라벨 */
export function SectionLabel({ number, text, className = "" }: { number: string; text: string; className?: string }) {
  return (
    <p
      className={`flex items-center gap-4 text-[15px] leading-none font-semibold tracking-[0.04em] text-orange uppercase md:text-base ${className}`}
    >
      <span>{number}</span>
      <span aria-hidden className="h-px w-7 bg-orange/70" />
      <span>{text}</span>
    </p>
  );
}
