/** 버튼 공통 클래스 */
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-bold whitespace-nowrap tracking-[-0.01em] transition duration-300 ease-out-soft active:translate-y-0";

export const btn = {
  primary: `${base} bg-grad-orange text-white shadow-[0_8px_24px_-8px_rgb(255_107_26/0.7),inset_0_1px_0_rgb(255_255_255/0.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgb(255_107_26/0.85),inset_0_1px_0_rgb(255_255_255/0.3)]`,
  outline: `${base} border-[1.5px] border-white/85 bg-black/20 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white hover:bg-white/10`,
  lg: "h-15 px-8 text-[17px]",
  sm: "h-10 px-5 text-sm",
};

/** 섹션 메인 타이틀 공통 스타일 (모든 섹션 h2): 1200px 이상 38px, 480px 이하 28px */
export const sectionTitle =
  "mt-6 text-[clamp(1.75rem,1.333rem+1.39vw,2.375rem)] leading-[1.4] font-extrabold tracking-[-0.035em] md:mt-8";
