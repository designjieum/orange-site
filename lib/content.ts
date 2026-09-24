/**
 * 사이트의 모든 문구 · 연락처 · 이미지 경로를 관리하는 파일입니다.
 * 이 파일만 수정하면 전체 페이지에 반영됩니다.
 * [확인 필요] 표시가 있는 값은 실제 정보로 교체해 주세요.
 */
import {
  Clock,
  Files,
  Hammer,
  Layers,
  Headset,
  IdCard,
  MapPin,
  MessageSquareText,
  PenTool,
  Ruler,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ---------- 기본 정보 ---------- */
export const site = {
  name: "오렌지애드컴퍼니",
  logo: "Orange AD",
  // 로고 표기: accent=true 부분에 포인트 색상 적용
  logoParts: [
    { text: "O", accent: true },
    { text: "range " },
    { text: "AD", accent: true },
  ],
  // 검색 결과 제목 (60자 이내 권장)
  title: "오렌지애드컴퍼니 | 양주 간판 · 현수막 · 인쇄물 제작 시공",
  // 검색 결과 설명 (80~120자 권장)
  description:
    "경기 양주 간판 제작·시공 전문 오렌지애드컴퍼니. LED 채널간판·갈바간판·어닝부터 현수막·전단지·명함까지 한 곳에서 같은 톤으로. 전국 방문·출장 상담, 매일 20시까지 상담.",
  // 카카오톡·SNS 공유 시 제목/설명 (짧고 행동을 유도하게)
  shareTitle: "간판 · 현수막 · 인쇄물, 한 곳에서 한 번에 | 오렌지애드컴퍼니",
  shareDescription: "지나가던 손님이 문을 열게 만드는 간판. 사진만 보내도 견적 상담해 드려요.",
  url: "https://orange-site.pages.dev", // 도메인 구매 후 "https://orangead.com"으로 변경
  ogImage: { src: "/images/og.jpg", alt: "오렌지애드컴퍼니 - 간판 · 현수막 · 인쇄물 제작 시공" },
  keywords: [
    "양주 간판",
    "양주 간판 제작",
    "의정부 간판",
    "옥정 간판",
    "경기 북부 간판",
    "간판 제작",
    "간판 시공",
    "LED 채널간판",
    "갈바간판",
    "플렉스 간판",
    "어닝",
    "현수막 제작",
    "실사출력",
    "전단지 인쇄",
    "명함 제작",
    "리플렛",
    "스티커 제작",
    "종이자석",
    "개업 간판",
    "간판 교체",
    "간판 A/S",
  ],
  // 검색엔진 소유 확인 코드 (각 서비스에서 발급받아 입력, 비워두면 출력 안 함)
  verification: {
    google: "", // Google Search Console
    naver: "", // 네이버 서치어드바이저
  },
};

export const contact = {
  phone: "0507-1318-5039",
  tel: "tel:050713185039",
  talktalk: "https://talk.naver.com/ct/w5zko2?frm=mnmb&frm=nmb_detail#nafullscreen", // 네이버 톡톡 상담
  kakao: "https://open.kakao.com/o/s9Texbmf", // 카카오톡 상담 채팅
  hours: "매일 09:00 – 20:00",
  email: "blue1170@naver.com",
};

export const social = [
  { key: "kakao", label: "카카오톡 상담", href: contact.kakao },
  { key: "blog", label: "네이버 블로그", href: "https://blog.naver.com/blue1170" },
  { key: "instagram", label: "인스타그램", href: "https://www.instagram.com/o_range5009" },
] as const;

export const business = {
  companyName: "오렌지애드컴퍼니",
  ceo: "김미경",
  registrationNo: "820-19-01536",
  address: "경기 양주시 고원2나길 40 1층 오렌지애드컴퍼니",
  // 구조화 데이터(검색엔진·AI용) 주소
  addressParts: { region: "경기도", locality: "양주시", street: "고원2나길 40 1층" },
  // 방문·출장 상담 주요 지역 (검색엔진·AI가 서비스 지역을 이해하는 데 사용)
  areaServed: ["양주", "의정부", "동두천", "서울", "경기", "인천", "전국"], // 시공사례 지역 기준
  openingHours: { opens: "09:00", closes: "20:00" }, // 매일
};

export const nav = [
  { label: "서비스", href: "#services" },
  { label: "시공사례", href: "#works" },
  { label: "진행과정", href: "#process" },
  { label: "문의하기", href: "#contact" },
];

// 모바일(768px 미만) 헤더 오른쪽에 버튼 대신 보이는 문구: [윗줄, 아랫줄(강조)]
export const headerTagline = ["간판 · 현수막 · 인쇄물", "한 곳에서 한 번에"];

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: ["Sign", "Banner", "Print"],
  title: ["지나가던 손님이", "문을 열게 만드는 간판"],
  description: ["간판 · 현수막 · 인쇄물까지,", "상담부터 시공까지 한 번에."],
  primaryCta: { label: "지금 전화 상담하기", href: contact.tel },
  secondaryCta: { label: "사진 보내고 견적 받기", href: "#contact" },
  image: { src: "/images/hero.jpg", alt: "야간에 조명이 켜진 카페 채널 간판" },
  features: [
    { icon: Headset, label: "방문 · 출장 상담" },
    { icon: MapPin, label: "전국 권역 상담" },
    { icon: IdCard, label: "간판부터 명함까지" },
    { icon: Clock, label: "20시까지 상담" },
  ] satisfies { icon: LucideIcon; label: string }[],
};

/* ---------- 문제제기 ---------- */
export const painPoint = {
  number: "01",
  eyebrow: "Problem",
  title: ["간판 하나 바꾸는데,", "업체 세 곳에 따로 연락하고 계신가요?"],
  items: [
    {
      title: "디자인이 제각각",
      description: "간판, 현수막, 전단지를 따로 맡기다 보니 톤이 맞지 않습니다.",
    },
    {
      title: "설치 날 붙는 추가 비용",
      description: "사진만 보고 받은 견적과 실제 비용이 다릅니다.",
    },
    {
      title: "시공 후 연락 두절",
      description: "LED가 나가도 맡길 곳이 없습니다.",
    },
  ],
  answer: {
    icon: Store,
    lead: "오렌지애드컴퍼니는 간판부터 명함까지",
    highlight: "한 곳에서, 같은 톤으로",
    tail: "만듭니다.",
  },
};

/* ---------- 서비스 ---------- */
export const services = {
  number: "02",
  eyebrow: "Service",
  title: ["가게에 필요한 건,", "전부 여기서"],
  description: "품목이 여러 개라면 한 번에 상담하세요.",
  // 순서대로 [큰 카드 · 오른쪽 위 넓은 카드 · 오른쪽 아래 카드 2개]에 배치됩니다.
  items: [
    {
      title: "간판 · 어닝",
      description: "매장의 얼굴을 설계부터 설치까지",
      image: { src: "/images/services/sign.jpg", alt: "야간에 조명이 켜진 카페 채널 간판과 어닝" },
    },
    {
      title: "현수막 · 실사출력",
      description: "오픈 · 행사 일정에 맞춰 빠르게",
      image: { src: "/images/services/banner.jpg", alt: "건물 외벽에 걸린 그랜드 오픈 현수막" },
    },
    {
      icon: Files,
      title: "전단지 · 명함 · 리플렛",
      description: "간판과 같은 톤의 인쇄물",
      image: { src: "/images/services/print.jpg", alt: "브랜드 톤을 맞춘 명함과 리플렛" },
    },
    {
      icon: Layers,
      title: "스티커 · 종이자석",
      image: { src: "/images/services/sticker.jpg", alt: "로고가 인쇄된 원형 스티커" },
    },
  ] satisfies { icon?: LucideIcon; title: string; description?: string; image: { src: string; alt: string } }[],
};

/* ---------- 시공사례 ---------- */
const workFilters = ["전체", "음식점", "디저트", "펫·미용", "기타"] as const;
type WorkCategory = Exclude<(typeof workFilters)[number], "전체">;

export const works = {
  number: "03",
  eyebrow: "Works",
  title: "간판을 바꾼 가게들의 오늘",
  description: ["오랜 시간 사랑받는 가게들, 그 시작엔", "오렌지애드컴퍼니의 간판이 있었습니다."],
  filters: workFilters,
  // 왼쪽 비포/애프터 비교 (드래그로 비교)
  featured: {
    before: { src: "/images/works/before.jpg", alt: "시공 전: 낡고 빛바랜 한식당 간판" },
    after: { src: "/images/works/after.jpg", alt: "시공 후: 조명이 켜진 한식당 채널 간판과 어닝" },
  },
  // 이미지 번호 규칙: 음식점 01–03 · 디저트 04–06 · 펫·미용 07–09 · 기타 10–12
  // 탭마다 사례 3개 + 오른쪽 아래 상담 안내 카드, '전체'는 업종별 첫 사례를 보여줍니다.
  items: [
    { category: "음식점", type: "돈카츠", location: "양주", work: "LED 채널간판", image: "/images/works/work-01.jpg" },
    { category: "음식점", type: "이자카야", location: "가락", work: "플렉스 간판", image: "/images/works/work-02.jpg" },
    { category: "음식점", type: "식당", location: "동두천", work: "갈바간판", image: "/images/works/work-03.jpg" },
    { category: "디저트", type: "아이스크림", location: "의정부", work: "BAR 타입 간판", image: "/images/works/work-04.jpg" },
    { category: "디저트", type: "케이크", location: "옥정동", work: "어닝 + 간판", image: "/images/works/work-05.jpg" },
    { category: "디저트", type: "과일", location: "인천", work: "갈바간판", image: "/images/works/work-06.jpg" },
    { category: "펫·미용", type: "동물병원", location: "동탄", work: "갈바간판", image: "/images/works/work-07.jpg" },
    { category: "펫·미용", type: "애견", location: "옥정동", work: "갈바간판", image: "/images/works/work-08.jpg" },
    { category: "펫·미용", type: "헤어샵", location: "민락동", work: "갈바간판", image: "/images/works/work-09.jpg" },
    { category: "기타", type: "공장", location: "양주", work: "알루미늄 간판", image: "/images/works/work-10.jpg" },
    { category: "기타", type: "부동산", location: "양주", work: "갈바간판", image: "/images/works/work-11.jpg" },
    { category: "기타", type: "세차장", location: "하남", work: "경관조명", image: "/images/works/work-12.jpg" },
  ] satisfies { category: WorkCategory; type: string; location: string; work: string; image: string }[],
  moreCard: {
    text: ["더 많은 사례는", "상담 때 보여드려요"],
    label: "상담 문의하기",
    href: "#contact",
  },
};

/* ---------- 진행과정 ---------- */
export const processSection = {
  number: "04",
  eyebrow: "Process",
  title: ["상담부터 시공까지,", "5단계면 충분합니다."],
  description: "처음이셔도 괜찮아요. 단계마다 담당자가 먼저 안내해 드립니다.",
  steps: [
    { icon: MessageSquareText, title: "상담 · 견적", description: "전화나 사진으로 간편하게 상담하고 예상 견적을 받아보세요." },
    { icon: Ruler, title: "현장 실측", description: "필요한 경우 직접 방문해 정확한 크기와 설치 환경을 확인합니다." },
    { icon: PenTool, title: "디자인 시안", description: "업종과 거리 환경을 고려한 시안을 만들고 원하실 때까지 수정합니다." },
    { icon: Hammer, title: "제작", description: "확정된 시안으로 꼼꼼하게 제작하고 진행 상황을 공유합니다." },
    { icon: Wrench, title: "시공 · A/S", description: "안전하게 설치하고, 시공 후에도 문제가 생기면 바로 달려갑니다." },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
};

/* ---------- 문의 (CTA) ---------- */
export const contactSection = {
  number: "05",
  eyebrow: "Contact",
  title: ["개업일은 다가오는데", "간판이 아직이라면, 오늘 연락 주세요."],
  description: [
    "오렌지애드컴퍼니는 간판·현수막·인쇄물까지",
    "매장의 시작을 함께하는 종합 광고 전문 업체입니다.",
    "지금 바로 상담하고, 성공적인 오픈을 준비하세요.",
  ],
  actions: [
    { key: "tel", label: "전화 상담", sub: contact.phone, href: contact.tel },
    { key: "kakao", label: "카카오톡 사진 견적", sub: "채팅으로 편하게", href: contact.kakao },
    { key: "talktalk", label: "톡톡으로 사진 견적", sub: "사진만 보내도 OK", href: contact.talktalk },
  ] as const,
  tipsTitle: "이렇게 보내주시면 더 정확해요",
  tips: ["가게 정면 전체가 보이는 사진", "원하시는 간판 크기 또는 위치", "참고하고 싶은 디자인 (선택)"],
};

/* ---------- 모바일 하단 바 ---------- */
export const mobileCta = {
  secondary: { label: "사진 견적", href: "#contact" },
  primary: { label: "전화 상담", href: contact.tel },
};
