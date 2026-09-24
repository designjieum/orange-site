/** 브랜드 아이콘 (lucide-react 1.x에는 브랜드 아이콘이 없어 직접 정의) */
type IconProps = { className?: string };

export function KakaoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 3.5c-5.1 0-9.25 3.24-9.25 7.23 0 2.58 1.73 4.84 4.33 6.12l-.9 3.3a.35.35 0 0 0 .53.38l3.87-2.57c.46.06.93.09 1.42.09 5.1 0 9.25-3.23 9.25-7.22S17.1 3.5 12 3.5Z" />
    </svg>
  );
}

export function BlogIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      <path
        d="M4 4.5h16a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-5.2L12 20.5l-2.8-3H4A1.5 1.5 0 0 1 2.5 16V6A1.5 1.5 0 0 1 4 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="13.6"
        textAnchor="middle"
        fontSize="6.2"
        fontWeight="800"
        fontFamily="Pretendard Variable, Pretendard, sans-serif"
        fill="currentColor"
      >
        blog
      </text>
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const socialIcons = { kakao: KakaoIcon, blog: BlogIcon, instagram: InstagramIcon };
