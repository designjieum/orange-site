import { business, contact, hero, processSection, services, site, social, works } from "@/lib/content";

/** 검색엔진·AI가 업체 정보를 정확히 이해하도록 돕는 구조화 데이터 (JSON-LD) */
export function StructuredData() {
  const abs = (path: string) => `${site.url}${path}`;
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: site.name,
        alternateName: site.logo,
        description: site.description,
        url: site.url,
        logo: abs("/apple-touch-icon.jpg"),
        image: [abs(site.ogImage.src), abs(hero.image.src)],
        telephone: contact.phone,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR",
          addressRegion: business.addressParts.region,
          addressLocality: business.addressParts.locality,
          streetAddress: business.addressParts.street,
        },
        areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: business.openingHours.opens,
          closes: business.openingHours.closes,
        },
        founder: { "@type": "Person", name: business.ceo },
        taxID: business.registrationNo,
        sameAs: social.filter((s) => s.key !== "kakao").map((s) => s.href), // 블로그 · 인스타그램
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: contact.phone,
          availableLanguage: "Korean",
        },
        knowsAbout: site.keywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "간판 · 현수막 · 인쇄물 제작 시공",
          itemListElement: services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title.replaceAll(" · ", ", "),
              ...("description" in item && { description: item.description }),
              image: abs(item.image.src),
              provider: { "@id": businessId },
            },
          })),
        },
        // 시공 사례 (업종 · 지역 · 시공 품목)
        subjectOf: works.items.map((w) => ({
          "@type": "CreativeWork",
          name: `${w.location} ${w.type} ${w.work} 시공`,
          image: abs(w.image),
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        inLanguage: "ko-KR",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "ko-KR",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        primaryImageOfPage: abs(site.ogImage.src),
      },
      // 진행 과정
      {
        "@type": "ItemList",
        name: `${site.name} 간판 제작 진행 과정`,
        itemListElement: processSection.steps.map((step, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: step.title,
          description: step.description,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
