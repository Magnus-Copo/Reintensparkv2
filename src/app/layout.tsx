import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Unbounded } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { WebVitals } from "./web-vitals";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-unbounded",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#010409' },
    { media: '(prefers-color-scheme: light)', color: '#010409' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reintenspark.com"),
  title: {
    default: "Reinternspark Technology | Igniting Future Innovation",
    template: "%s · Reinterspark Technology",
  },
  description:
    "Reinternspark Technology blends hardware, software, AI and EdTech to deliver future-ready innovation labs, industry projects and immersive learning.",
  openGraph: {
    title: "Reinternspark Technology | Igniting Future Innovation",
    description:
      "Hardware, software, AI, IOT and EdTech programs designed for students, researchers and industries.",
    url: "https://reintenspark.com",
    siteName: "Reinternspark",
    images: [{ url: "/reintenspark-logo.png", width: 1024, height: 343 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reinternspark Technology",
    description:
      "Igniting the future with innovation across hardware, software, AI, IOT and EdTech.",
    images: ["/reintenspark-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lottie.host" />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} ${unbounded.variable} antialiased`}>
        <WebVitals />
        <LoadingBar />
        <div className="site-shell">
          <div className="site-shell__glow" aria-hidden="true" />
          <SiteHeader />
          <main className="site-main" id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
