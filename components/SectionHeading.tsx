import { FadeUp } from "./FadeUp";
import { sectionTitle } from "./ui";
import { SectionLabel } from "./SectionLabel";

type Props = {
  number: string;
  eyebrow: string;
  title: readonly string[];
  description?: string;
  align?: "left" | "center";
  id?: string;
};

/** 섹션 라벨(01 — TEXT) + 제목 + 설명 */
export function SectionHeading({ number, eyebrow, title, description, align = "left", id }: Props) {
  const center = align === "center";
  return (
    <FadeUp className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <SectionLabel number={number} text={eyebrow} className={center ? "justify-center" : ""} />
      <h2
        id={id}
        className={sectionTitle}
      >
        {title.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {description && (
        <p className={`mt-4 text-base text-white/65 md:text-lg ${center ? "text-balance" : ""}`}>{description}</p>
      )}
    </FadeUp>
  );
}
