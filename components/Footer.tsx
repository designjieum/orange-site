import { ArrowUp } from "lucide-react";
import { business, contact, nav, services, site, social } from "@/lib/content";
import { Logo } from "./Logo";
import { socialIcons } from "./SocialIcons";

const colTitle = "text-[15px] font-bold tracking-[-0.01em] text-white";
const linkClass = "text-[15px] text-white/55 transition-colors hover:text-white";

export function Footer() {
  const info = [
    ["상호", business.companyName],
    ["대표", business.ceo],
    ["사업자등록번호", business.registrationNo],
    ["이메일", contact.email],
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.07] bg-ink-2">
      {/* 상단 주황 라인 광원 */}
      <span
        aria-hidden
        className="absolute inset-x-[15%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(255_107_26/0.7)_50%,transparent)]"
      />

      <div className="container-x pt-16 md:pt-20">
        {/* 링크 컬럼 */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#top" className="inline-block" aria-label={`${site.name} 맨 위로`}>
              <Logo className="text-2xl" />
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              간판 · 현수막 · 인쇄물,
              <br />
              상담부터 시공까지 한 번에.
            </p>
          </div>

          <nav aria-label="푸터 메뉴">
            <p className={colTitle}>메뉴</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={colTitle}>서비스</p>
            <ul className="mt-5 space-y-3">
              {services.items.map((item) => (
                <li key={item.title}>
                  <a href="#services" className={linkClass}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <p className={colTitle}>상담 문의</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={contact.tel} className="text-2xl font-extrabold tabular-nums transition-colors hover:text-orange-light">
                  {contact.phone}
                </a>
              </li>
              <li className="text-[15px] text-white/55">{contact.hours}</li>
              <li>
                <a href={contact.kakao} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  카카오톡 상담 채팅<span className="sr-only"> (새 창)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 주소 · 사업자 정보 / 소셜 */}
        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 md:mt-16 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-white/85">{business.address}</p>
            <dl className="mt-3 flex flex-col gap-1.5 text-[13px] text-white/45 md:flex-row md:flex-wrap md:gap-x-4">
              {info.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex items-center gap-1.5 ${
                    i > 0 ? "md:before:mr-2.5 md:before:h-3 md:before:w-px md:before:bg-white/15 md:before:content-['']" : ""
                  }`}
                >
                  <dt className="text-white/30">{label}</dt>
                  <dd>
                    {label === "이메일" ? (
                      <a href={`mailto:${value}`} className="hover:text-white">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[13px] text-white/35">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <ul className="flex gap-2.5" aria-label="소셜 채널">
              {social.map((s) => {
                const Icon = socialIcons[s.key];
                return (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (새 창)`}
                      title={s.label}
                      className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-orange hover:bg-orange/10 hover:text-orange"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <span aria-hidden className="mx-1.5 h-6 w-px bg-white/15" />
            <a
              href="#top"
              aria-label="맨 위로"
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange hover:text-orange"
            >
              <ArrowUp className="size-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* 대형 워드마크 */}
      <div aria-hidden className="container-x pointer-events-none mt-10 select-none md:mt-14">
        <p className="-mb-[0.22em] text-center text-[clamp(3rem,18.5vw,15.5rem)] leading-none font-extrabold tracking-[-0.045em] whitespace-nowrap">
          {site.logoParts.map((part) => (
            <span
              key={part.text}
              className={`bg-clip-text text-transparent ${
                "accent" in part && part.accent
                  ? "bg-[linear-gradient(180deg,rgb(255_107_26/0.32),rgb(255_107_26/0)_85%)]"
                  : "bg-[linear-gradient(180deg,rgb(255_255_255/0.13),rgb(255_255_255/0)_85%)]"
              }`}
            >
              {part.text}
            </span>
          ))}
        </p>
      </div>

      {/* 모바일 하단 고정 바 높이만큼 여백 */}
      <div aria-hidden className="h-[calc(80px+env(safe-area-inset-bottom))] md:hidden" />
    </footer>
  );
}
