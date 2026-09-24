import { painPoint } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { sectionTitle } from "./ui";
import { SectionLabel } from "./SectionLabel";

export function PainPoint() {
  const { answer } = painPoint;
  const AnswerIcon = answer.icon;

  return (
    <section id="problem" aria-labelledby="problem-title" className="relative isolate overflow-hidden py-24 md:py-36">
      {/* 배경 광원 */}
      <div aria-hidden className="hero-glow absolute top-[20%] -left-[28%] -z-10 h-[60%] w-[45%] opacity-60" />
      <div aria-hidden className="hero-glow absolute top-0 -right-[30%] -z-10 h-[50%] w-[45%] opacity-45" />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* 제목 */}
          <FadeUp>
            <SectionLabel number={painPoint.number} text={painPoint.eyebrow} />
            <h2
              id="problem-title"
              className={sectionTitle}
            >
              {painPoint.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </FadeUp>

          {/* 문제 목록 */}
          <ol className="divide-y divide-white/10">
            {painPoint.items.map((item, i) => (
              <FadeUp
                as="li"
                key={item.title}
                delay={i * 0.08}
                className="flex items-center gap-5 py-6 first:pt-0 last:pb-0 md:gap-7 md:py-8"
              >
                <span
                  aria-hidden
                  className="grid size-16 shrink-0 place-items-center rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgb(255_255_255/0.07),rgb(255_255_255/0.02))] text-[28px] font-medium text-white/75 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_8px_24px_-12px_rgb(0_0_0/0.8)] tabular-nums md:size-[84px] md:text-[36px]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.03em] md:text-2xl">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/60 md:mt-2 md:text-[17px]">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </ol>
        </div>

        {/* 결론 패널 */}
        <FadeUp className="relative mt-14 md:mt-16">
          <div className="flex flex-col items-center gap-6 rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgb(255_255_255/0.035),rgb(255_255_255/0.01))] px-6 py-10 text-center md:flex-row md:gap-0 md:rounded-[28px] md:px-12 md:py-12 lg:px-16 md:text-left">
            <span
              aria-hidden
              className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgb(255_255_255/0.07),rgb(255_255_255/0.02))] text-orange shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] sm:size-16 md:size-20 md:rounded-3xl lg:size-24"
            >
              <AnswerIcon className="size-7 sm:size-8 md:size-10 lg:size-12" strokeWidth={1.5} />
            </span>
            <span aria-hidden className="hidden h-[72px] w-px shrink-0 bg-white/15 md:mx-8 md:block lg:mx-12" />
            <p className="text-[clamp(1.25rem,2.1vw,1.875rem)] leading-[1.45] font-bold tracking-[-0.035em]">
              {answer.lead}{" "}
              <span className="relative inline-block text-orange">
                {answer.highlight}
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full md:-bottom-2"
                >
                  <path
                    d="M2 8 Q 150 1 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              {answer.tail}
            </p>
          </div>
          {/* 하단 주황 라인 광원 */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] -bottom-px h-px bg-[linear-gradient(90deg,transparent,rgb(255_107_26/0.9)_50%,transparent)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[40%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(255_107_26/0.45),transparent)] blur-md"
          />
        </FadeUp>
      </div>
    </section>
  );
}
