import Image from "next/image";
import { ImageIcon, PhoneCall } from "lucide-react";
import { hero, site } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { btn } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[max(680px,100svh)] flex-col overflow-hidden min-[900px]:min-h-[max(760px,100svh)]"
    >
      {/* 배경 */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-0 right-0 h-[62%] w-full min-[900px]:h-full min-[900px]:w-[52%]">
          <Image
            src={hero.image.src}
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
            className="object-cover object-[70%_20%] min-[900px]:object-[50%_30%]"
          />
        </div>
        <div className="hero-fade absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow pointer-events-none absolute bottom-0 opacity-45 -left-[40%] h-[55%] w-[110%] min-[900px]:-left-[18%] min-[900px]:h-[70%] min-[900px]:w-[55%]" />
      </div>

      {/* 본문 */}
      <div className="container-x flex flex-1 items-end pt-[140px] pb-10 min-[900px]:items-center min-[900px]:pb-16">
        <div className="max-w-[620px]">
          <FadeUp onMount>
            <p className="mb-4 flex items-center gap-2.5 text-xs font-bold tracking-[0.26em] text-orange uppercase md:mb-6 md:gap-3.5 md:text-sm md:tracking-[0.32em]">
              {hero.eyebrow.map((word, i) => (
                <span key={word} className="flex items-center gap-2.5 md:gap-3.5">
                  {i > 0 && (
                    <span aria-hidden className="tracking-normal opacity-80">
                      ·
                    </span>
                  )}
                  {word}
                </span>
              ))}
            </p>
          </FadeUp>
          <FadeUp onMount delay={0.08}>
            <h1
              id="hero-title"
              className="text-[clamp(2.1rem,5.2vw,4.25rem)] leading-[1.22] font-extrabold tracking-[-0.035em] [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]"
            >
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeUp>
          <FadeUp onMount delay={0.16}>
            <p className="mt-5 text-[clamp(1.0625rem,1.5vw,1.25rem)] font-medium text-white/80 md:mt-7">
              {hero.description[0]}
              <br className="md:hidden" /> {hero.description[1]}
            </p>
          </FadeUp>
          <FadeUp onMount delay={0.24}>
            <div id="hero-ctas" className="mt-8 flex flex-wrap gap-3 md:mt-12 md:gap-4">
              <a href={hero.primaryCta.href} className={`${btn.primary} ${btn.lg} max-md:h-14 max-md:w-full`}>
                <PhoneCall className="size-5" aria-hidden />
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className={`${btn.outline} ${btn.lg} max-md:h-14 max-md:w-full`}>
                <ImageIcon className="size-5" aria-hidden />
                {hero.secondaryCta.label}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* 특징 바 */}
      <div className="relative border-y border-t-orange-light/30 border-b-orange-light/20 bg-[linear-gradient(90deg,rgb(40_20_10/0.72),rgb(20_16_14/0.55))] backdrop-blur-lg">
        <ul aria-label={`${site.name} 서비스 특징`} className="grid grid-cols-2 min-[900px]:container-x min-[900px]:grid-cols-4">
          {hero.features.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={[
                "relative flex min-h-[76px] items-center gap-3 px-[clamp(20px,4vw,40px)] py-3.5",
                "min-[900px]:min-h-[104px] min-[900px]:justify-center min-[900px]:gap-4 min-[900px]:px-3",
                i % 2 === 1 && "border-l border-white/12 min-[900px]:border-l-0",
                i >= 2 && "border-t border-white/12 min-[900px]:border-t-0",
                i > 0 &&
                  "min-[900px]:before:absolute min-[900px]:before:top-1/2 min-[900px]:before:left-0 min-[900px]:before:h-14 min-[900px]:before:w-px min-[900px]:before:-translate-y-1/2 min-[900px]:before:bg-white/25",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5 min-[900px]:size-[54px]"
                aria-hidden
              >
                <Icon className="size-5 min-[900px]:size-6" strokeWidth={1.6} />
              </span>
              <span className="text-sm font-semibold tracking-[-0.01em] min-[900px]:text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
