import { processSection } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-ink-2 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          id="process-title"
          number={processSection.number}
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          description={processSection.description}
          align="center"
        />

        <ol className="relative mt-12 grid gap-0 md:mt-16 lg:grid-cols-5 lg:gap-6">
          {/* 연결선 */}
          <span
            aria-hidden
            className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-orange/60 via-white/15 to-white/5 lg:top-7 lg:right-[10%] lg:bottom-auto lg:left-[10%] lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {processSection.steps.map(({ icon: Icon, title, description }, i) => (
            <FadeUp
              as="li"
              key={title}
              delay={i * 0.08}
              className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:text-center"
            >
              <span
                className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border ${
                  i === 0 ? "border-transparent bg-grad-orange" : "border-white/15 bg-ink-3"
                }`}
                aria-hidden
              >
                <Icon className="size-6" strokeWidth={1.7} />
              </span>
              <div className="pt-1 lg:pt-6">
                <p className="text-xs font-bold tracking-[0.2em] text-orange">STEP {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1.5 text-lg font-bold tracking-[-0.02em] md:text-xl">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{description}</p>
              </div>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
