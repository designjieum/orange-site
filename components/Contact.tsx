import { ArrowUpRight, CircleCheck, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { contact, contactSection } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import { sectionTitle } from "./ui";
import { SectionLabel } from "./SectionLabel";
import { TalkTalkIcon } from "./SocialIcons";

const icons = { tel: PhoneCall, kakao: MessageCircle, talktalk: TalkTalkIcon };

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-36">
      <div className="container-x">
        <FadeUp className="relative isolate overflow-hidden rounded-[28px] border border-orange/25 bg-ink-3 px-6 py-12 md:rounded-[36px] md:px-14 md:py-16 lg:px-20 lg:py-20">
          {/* 배경 광원 */}
          <div
            aria-hidden
            className="hero-glow absolute -top-1/3 -right-1/4 -z-10 h-[140%] w-[80%] opacity-70"
          />
          <div aria-hidden className="hero-grid absolute inset-0 -z-10 opacity-60" />

          <SectionLabel number={contactSection.number} text={contactSection.eyebrow} />
          <h2
            id="contact-title"
            className={sectionTitle}
          >
            {contactSection.title.map((line) => (
              <span key={line} className="block">
                {/* 쉼표로 나눈 덩어리를 통째로 묶어, 한 줄에 안 들어갈 때만 쉼표 뒤에서 줄바꿈 */}
                {line.split(", ").map((part, i, parts) => (
                  <span key={part}>
                    {i > 0 && " "}
                    <span className="inline-block">
                      {part}
                      {i < parts.length - 1 && ","}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <div className="mt-6 grid gap-10 md:mt-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
            <div>
              {/* 줄간격 여백을 상쇄해 글자 윗선을 오른쪽 버튼 윗선에 맞춤 */}
              <p className="text-base leading-[1.8] text-white/70 md:text-lg lg:-mt-[0.4em]">
                {contactSection.description.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br className="max-md:hidden" />}
                    {i > 0 && " "}
                    {line}
                  </span>
                ))}
              </p>

              <div className="mt-8">
                <p className="text-sm font-bold text-white/90">{contactSection.tipsTitle}</p>
                <ul className="mt-3 space-y-2">
                  {contactSection.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-[15px] text-white/70">
                      <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-orange" aria-hidden />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <ul className="space-y-3">
                {contactSection.actions.map((action) => {
                  const Icon = icons[action.key];
                  const primary = action.key === "tel";
                  const external = action.href.startsWith("http");
                  return (
                    <li key={action.key}>
                      <a
                        href={action.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`group flex min-h-[84px] items-center gap-4 rounded-2xl px-5 transition duration-300 ease-out-soft hover:-translate-y-0.5 max-[376px]:gap-3 max-[376px]:px-4 md:px-6 ${
                          primary
                            ? "bg-grad-orange shadow-[0_14px_36px_-12px_rgb(255_107_26/0.8)]"
                            : "border border-white/15 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08]"
                        }`}
                      >
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-full max-[376px]:size-10 ${primary ? "bg-white/20" : "bg-white/8"}`}
                          aria-hidden
                        >
                          <Icon className="size-[22px] max-[376px]:size-5" strokeWidth={1.8} />
                        </span>
                        {/* 375px 이하에서는 글자를 줄여 한 줄 유지 */}
                        <span className="flex-1 whitespace-nowrap">
                          <span className="block text-lg font-bold tracking-[-0.02em] max-[376px]:text-[15px]">{action.label}</span>
                          <span className={`block text-sm max-[376px]:text-[13px] ${primary ? "text-white/85 tabular-nums" : "text-white/55"}`}>
                            {action.sub}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-5 opacity-70 transition-transform max-[376px]:hidden group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/55 lg:justify-start">
                <Clock className="size-4" aria-hidden />
                상담 가능 시간 {contact.hours}
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
