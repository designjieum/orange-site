import { business, contact, painPoint, processSection, services, site, social, works } from "@/lib/content";

export const dynamic = "force-static";

/** AI 검색·답변 서비스용 요약 문서 (/llms.txt) — lib/content.ts 내용으로 자동 생성 */
export function GET() {
  const workLines = works.items.map((w) => `- ${w.location} ${w.type}: ${w.work}`);

  const body = `# ${site.name} (${site.logo})

> ${site.description}

${site.name}는 ${business.addressParts.region} ${business.addressParts.locality}에 있는 간판·현수막·인쇄물 제작 시공 업체로, 간판부터 명함까지 ${painPoint.answer.highlight} ${painPoint.answer.tail}

## 업체 정보
- 상호: ${business.companyName}
- 대표: ${business.ceo}
- 사업자등록번호: ${business.registrationNo}
- 주소: ${business.address}
- 전화: ${contact.phone}
- 이메일: ${contact.email}
- 상담 시간: ${contact.hours}
- 상담 방식: 전화, 카카오톡, 네이버 톡톡, 방문·출장 상담
- 서비스 지역: ${business.areaServed.join(", ")}
- 웹사이트: ${site.url}

## 서비스
${services.items.map((s) => `- ${s.title}${"description" in s ? `: ${s.description}` : ""}`).join("\n")}

## 진행 과정
${processSection.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.description}`).join("\n")}

## 시공 사례
${workLines.join("\n")}

## 상담 링크
- 전화 상담: ${contact.tel}
- 카카오톡 사진 견적: ${contact.kakao}
- 네이버 톡톡 사진 견적: ${contact.talktalk}
${social
  .filter((s) => s.key !== "kakao")
  .map((s) => `- ${s.label}: ${s.href}`)
  .join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
