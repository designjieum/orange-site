import Image from "next/image";
import { services } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { sectionTitle } from "./ui";
import { SectionLabel } from "./SectionLabel";

type Item = (typeof services.items)[number];

// 벤토 그리드 배치: [큰 카드, 오른쪽 위 넓은 카드, 오른쪽 아래 카드 2개]
const layout = [
  {
    cell: "col-span-2 aspect-[4/3.4] sm:aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto",
    sizes: "(max-width: 1024px) 100vw, 50vw",
    featured: true,
  },
  {
    cell: "col-span-2 aspect-[16/9] sm:aspect-[21/9] lg:col-span-2 lg:aspect-auto",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
  { cell: "aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto", sizes: "(max-width: 1024px) 50vw, 30vw" },
  { cell: "aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto", sizes: "(max-width: 1024px) 50vw, 20vw" },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative isolate overflow-hidden border-t border-white/[0.07] bg-ink-2 py-24 md:py-32">
      <div aria-hidden className="hero-glow absolute top-0 -left-[30%] -z-10 h-[50%] w-[45%] opacity-45" />
      <div aria-hidden className="hero-glow absolute top-0 -right-[32%] -z-10 h-[50%] w-[45%] opacity-40" />

      <div className="container-x">
        <FadeUp>
          <SectionLabel number={services.number} text={services.eyebrow} />
          <h2
            id="services-title"
            className={sectionTitle}
          >
            {services.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-xl">{services.description}</p>
        </FadeUp>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:h-[clamp(520px,41vw,600px)] lg:grid-cols-[680fr_404fr_260fr] lg:grid-rows-[28fr_29fr] lg:gap-[18px]">
          {services.items.map((item, i) => (
            <FadeUp as="li" key={item.title} delay={i * 0.08} className={layout[i].cell}>
              <ServiceCard item={item} sizes={layout[i].sizes} featured={layout[i].featured} />
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ item, sizes, featured = false }: { item: Item; sizes: string; featured?: boolean }) {
  const Icon = "icon" in item ? item.icon : undefined;

  return (
    <article
      className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-2xl border p-5 md:rounded-[20px] ${
        featured
          ? "border-orange/80 shadow-[0_0_32px_-6px_rgb(255_107_26/0.45)] md:p-8"
          : "border-white/20 md:p-6"
      }`}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={sizes}
        className="-z-20 object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
      />
      {/* 텍스트 가독성용 그라데이션 */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          featured
            ? "bg-[linear-gradient(180deg,transparent_45%,rgb(0_0_0/0.85))]"
            : "bg-[linear-gradient(90deg,rgb(0_0_0/0.75),rgb(0_0_0/0.25)_60%,transparent),linear-gradient(180deg,transparent_40%,rgb(0_0_0/0.6))]"
        }`}
      />

      {Icon && (
        <span
          aria-hidden
          className="absolute top-5 left-5 grid size-12 place-items-center rounded-xl border border-white/15 bg-[rgb(20_20_22/0.85)] backdrop-blur-sm md:top-6 md:left-6 md:size-[62px] md:rounded-2xl"
        >
          <Icon className="size-6 md:size-7" strokeWidth={1.5} />
        </span>
      )}

      <span aria-hidden className={`block h-[3px] rounded-full bg-orange ${featured ? "w-10" : "w-8"}`} />
      <h3
        className={`mt-3 font-extrabold tracking-[-0.03em] md:mt-4 ${
          featured ? "text-[26px] md:text-[38px]" : "text-[17px] leading-snug md:text-[26px]"
        }`}
      >
        {item.title}
      </h3>
      {"description" in item && (
        <p className={`mt-1.5 text-white/80 md:mt-2 ${featured ? "text-base md:text-xl" : "text-sm md:text-base"}`}>
          {item.description}
        </p>
      )}
    </article>
  );
}
