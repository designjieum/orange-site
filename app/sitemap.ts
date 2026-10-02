import type { MetadataRoute } from "next";
import { hero, services, site, works } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 이미지 검색(구글 · 네이버) 노출용: 페이지에 쓰인 대표 이미지 전체
  const images = [
    site.ogImage.src,
    hero.image.src,
    ...services.items.map((s) => s.image.src),
    works.featured.before.src,
    works.featured.after.src,
    ...works.items.map((w) => w.image),
  ].map((src) => `${site.url}${src}`);

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images,
    },
  ];
}
