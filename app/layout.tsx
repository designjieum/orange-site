import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/content";
import "./globals.css";

const ogImage = { url: site.ogImage.src, width: 1200, height: 630, alt: site.ogImage.alt, type: "image/jpeg" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: { url: "/favicon.jpg", type: "image/jpeg" },
    apple: { url: "/apple-touch-icon.jpg", type: "image/jpeg" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: site.name,
    title: site.shareTitle,
    description: site.shareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.shareTitle,
    description: site.shareDescription,
    images: [ogImage],
  },
  verification: {
    ...(site.verification.google && { google: site.verification.google }),
    ...(site.verification.naver && { other: { "naver-site-verification": site.verification.naver } }),
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
