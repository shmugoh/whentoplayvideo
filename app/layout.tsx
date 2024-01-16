import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "When to Play Video?",
  description: "pretend there's some cool text here",

  metadataBase: new URL("https://whentoplayvideo.vercel.app/"),
  openGraph: {
    siteName: "by @shmugo_",
    title: "When to Play Video?",
    description: "pretend there's some cool text here",
    url: "https://whentoplayvideo.vercel.app/",
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "When to Play Viedo?",
    description: "pretend there's some cool text here",
    siteId: "706095733687115776",
    creator: "@shmugo_",
    creatorId: "706095733687115776",
    images: "/twitter-image.png", // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
