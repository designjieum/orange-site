import { site } from "@/lib/content";

/** 텍스트 로고: "Orange AD" (O · AD 포인트 색상) */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-[0.01em] ${className}`}>
      {site.logoParts.map((part) => (
        <span key={part.text} className={"accent" in part && part.accent ? "text-orange" : undefined}>
          {part.text}
        </span>
      ))}
    </span>
  );
}
