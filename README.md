# ORANGE AD 랜딩 페이지

Next.js (App Router, TypeScript) + Tailwind CSS v4 정적 사이트. Cloudflare Pages 배포용.

## 개발 / 빌드

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 결과물: out/
```

## Cloudflare Pages 설정

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`

## 수정 방법

- 문구 · 연락처 · 이미지 경로: `lib/content.ts` (`[확인 필요]` 표시 값은 실제 정보로 교체)
- 섹션 컴포넌트: `components/`

## 이미지 (public/images/)

| 파일 | 용도 | 권장 사이즈 |
| --- | --- | --- |
| `hero.jpg` | 히어로 배경 (야간 매장 전면, 간판 점등) | 1600×2000 (4:5 세로) |
| `services/sign.jpg` | 서비스 · 간판/어닝 (큰 카드) | 1400×1200 |
| `services/banner.jpg` | 서비스 · 현수막/실사출력 (가로 넓은 카드) | 1400×600 |
| `services/print.jpg` | 서비스 · 전단지/명함/리플렛 | 900×650 |
| `services/sticker.jpg` | 서비스 · 스티커/종이자석 | 600×650 |
| `works/before.jpg` · `works/after.jpg` | 시공사례 비포/애프터 비교 (같은 구도로 촬영) | 1200×1200 (1:1) |
| `works/work-01.jpg` ~ `work-12.jpg` | 시공사례 카드 12장 (업종별 3장) | 900×1200 (3:4 세로) |
| `og.jpg` | 카카오톡 · SNS 공유 미리보기 | 1200×630 |

JPG, 장당 200KB 안팎 권장 (이미지 최적화가 꺼져 있어 원본이 그대로 전송됩니다).
압축 전 원본은 `_originals/images/`에 보관합니다 (git·배포 제외).
