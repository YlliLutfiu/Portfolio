import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/toast";
import BackToTop from "@/components/back-to-top";
import { Analytics } from "@vercel/analytics/next"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ylli Lutfiu",
      jobTitle: "Full-Stack Developer",
      url: "https://www.yllilutfiu.com",
      sameAs: [
        "https://github.com/YlliLutfiu",
      ],
    }),
  }}
/>

export const metadata: Metadata = {
  title: {
    default: "Ylli Lutfiu | Full-Stack Developer",
    template: "%s | Ylli Lutfiu",
  },
  description:
    "Full-stack developer specializing in Angular, NestJS, and modern web applications. Portfolio showcasing projects, experience, and scalable software engineering work.",

  keywords: [
    "Ylli Lutfiu",
    "Full Stack Developer",
    "Angular Developer",
    "NestJS Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Full Stack Developer Kosovo",
    "Next.js Portfolio",
    "Software Engineer Portfolio",
    "Web Developer Prishtinë",
    "Web Developer Prizren",
    "TypeScript Developer",
    "Javascript Developer",
    "Software Engineer Kosovo",
    "Software Engineer Prishtinë",
    "Software Engineer Prizren",
  ],

  verification: {
    google: "vLgZNnDFB2Rcadf6BdpsCpNTWDHkkDsTm57klTPuJnM",
  },

  authors: [{ name: "Ylli Lutfiu" }],
  creator: "Ylli Lutfiu",

  openGraph: {
    title: "Ylli Lutfiu | Full-Stack Developer",
    description:
      "Portfolio of Ylli Lutfiu – Full-stack developer building scalable web applications with Angular and NestJS.",
    url: "https://www.yllilutfiu.com",
    siteName: "Ylli Portfolio",
    images: [
      {
        url: "https://www.yllilutfiu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ylli Lutfiu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ylli Lutfiu | Full-Stack Developer",
    description:
      "Full-stack developer specializing in Angular, NestJS, and modern web applications.",
    images: ["https://www.yllilutfiu.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.yllilutfiu.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ToastProvider>{children}</ToastProvider>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}