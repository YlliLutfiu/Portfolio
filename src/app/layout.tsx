import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/toast";
import BackToTop from "@/components/back-to-top";
import { Analytics } from "@vercel/analytics/react";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ylli Lutfiu | Full-Stack Developer",
    template: "%s | Ylli Lutfiu",
  },
  description:
    "Full-stack developer specializing in Angular, NestJS, and scalable web applications. Explore projects, experience, and modern web development work.",

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
  ],

  authors: [{ name: "Ylli Lutfiu" }],
  creator: "Ylli Lutfiu",

  openGraph: {
    title: "Ylli Lutfiu | Full-Stack Developer",
    description:
      "Portfolio of Ylli Lutfiu – Full-stack developer building scalable web applications with Angular and NestJS.",
    // url: "https://your-domain.com", // replace later with your domain !!!
    siteName: "Ylli Portfolio",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  // metadataBase: new URL("https://your-domain.com"), // update later !!!
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