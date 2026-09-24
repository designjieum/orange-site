import { works } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";
import { WorksGallery } from "./WorksGallery";
import { sectionTitle } from "./ui";

export function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="relative isolate overflow-hidden border-t border-white/[0.07] py-24 md:py-32"
    >
      <div aria-hidden className="hero-glow absolute top-0 -right-[25%] -z-10 h-[40%] w-[45%] opacity-40" />
      <div aria-hidden className="hero-glow absolute -right-[25%] bottom-0 -z-10 h-[40%] w-[40%] opacity-60" />

      <div className="container-x">
        <WorksGallery
          label={
            <FadeUp>
              <SectionLabel number={works.number} text={works.eyebrow} />
            </FadeUp>
          }
          heading={
            <FadeUp>
              <h2
                id="works-title"
                className={sectionTitle}
              >
                {works.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
                {works.description[0]}
                <br />
                {works.description[1]}
              </p>
            </FadeUp>
          }
        />
      </div>
    </section>
  );
}
