import { business, contact, contactSection, painPoint, processSection, services, site, social, works } from "@/lib/content";

export const dynamic = "force-static";

/** AI 검색·답변 서비스용 요약 문서 (/llms.txt) — lib/content.ts 내용으로 자동 생성 */
export function GET() {
  const workLines = works.items.map((w) => `- ${w.location} ${w.type}: ${w.work}`);

  // 자주 묻는 질문 — 페이지에 있는 사실만으로 구성 (AI 답변 인용용)
  const faq = [
    [`${site.name}는 어떤 업체인가요?`, `${business.addressParts.region} ${business.addressParts.locality}에 있는 간판·현수막·인쇄물 제작 시공 업체입니다. 간판부터 명함까지 ${painPoint.answer.highlight} 만듭니다.`],
    ["어떤 품목을 제작하나요?", services.items.map((s) => s.title).join(", ") + " 등을 제작합니다. LED 채널간판, 갈바간판, 플렉스 간판, 알루미늄 간판, 경관조명 시공 사례가 있습니다."],
    ["견적은 어떻게 받나요?", `전화(${contact.phone}), 카카오톡, 네이버 톡톡으로 상담할 수 있으며 가게 사진만 보내도 견적 상담이 가능합니다. ${contactSection.tips.join(", ")}을 함께 보내면 더 정확합니다.`],
    ["상담 가능한 지역은 어디인가요?", `${business.areaServed.join(", ")} 지역 방문·출장 상담이 가능합니다.`],
    ["상담 시간은 언제인가요?", `${contact.hours} 상담합니다.`],
    ["시공 후 A/S도 되나요?", processSection.steps[processSection.steps.length - 1].description],
  ];

  const body = `# ${site.name} (${site.alternateNames.join(", ")})

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

## 자주 묻는 질문
${faq.map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}

## 상담 링크
- 전화 상담: ${contact.tel}
- 카카오톡 사진 견적: ${contact.kakao}
- 네이버 톡톡 사진 견적: ${contact.talktalk}
${social
  .filter((s) => s.key !== "kakao")
  .map((s) => `- ${s.label}: ${s.href}`)
  .join("\n")}

최종 업데이트: ${new Date().toISOString().slice(0, 10)}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
