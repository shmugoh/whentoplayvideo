import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Foot } from "@/components/footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
/* --- */

const SITE_TITLE = "When to Play Video";
const SITE_DESCRIPTION =
  "Perfectly sync songs or videos for celebrations - no complex calculations needed!";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  metadataBase: new URL("https://whentoplayvideo.vercel.app/"),
  openGraph: {
    siteName: "by @shmugo_",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://whentoplayvideo.vercel.app/",
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background dark:bg-background flex flex-col mx-auto">
            {children}
            <Foot />
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
