import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

// 검색엔진과 AI 검색·답변 서비스 모두 수집 허용
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot", // ChatGPT 검색 · Copilot 기반
];

// 국내 검색엔진: 네이버(Yeti) · 다음(Daumoa)
const krCrawlers = ["Yeti", "Daumoa"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: [...krCrawlers, ...aiCrawlers], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
