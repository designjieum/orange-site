import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포: `next build` → out/
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
