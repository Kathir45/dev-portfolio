import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skathir45.netlify.app"),
  title: {
    default: "Kathirvel S | Software Developer — MERN Stack & React Native",
    template: "%s | Kathirvel S",
  },
  description:
    "Kathirvel S is a Software Developer from Chennai, India building responsive full-stack web applications with MERN Stack and cross-platform mobile apps with React Native.",
  keywords: [
    "Kathirvel S",
    "Kathirvel",
    "Software Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "Next.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Mobile App Developer",
    "Chennai Developer",
    "Tamil Nadu Developer",
    "Portfolio",
    "Hackathon Winner",
    "SIH 2024",
  ],
  authors: [{ name: "Kathirvel S", url: "https://skathir45.netlify.app" }],
  creator: "Kathirvel S",
  publisher: "Kathirvel S",
  applicationName: "Kathirvel S Portfolio",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "https://skathir45.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skathir45.netlify.app",
    siteName: "Kathirvel S",
    title: "Kathirvel S | Software Developer — MERN Stack & React Native",
    description:
      "Software Developer from Chennai, India building responsive full-stack web applications with MERN Stack and cross-platform mobile apps with React Native.",
    images: [
      {
        url: "/kathirvel_profile.png",
        width: 1200,
        height: 630,
        alt: "Kathirvel S — Software Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathirvel S | Software Developer — MERN Stack & React Native",
    description:
      "Building full-stack web apps with MERN Stack and mobile apps with React Native. Based in Chennai, India.",
    images: ["/kathirvel_profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Dark-first: runs before paint, no FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(!t||t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        {/* Geo meta tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* SVG favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://leetcode.com" />

        {/* Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kathirvel S",
              url: "https://skathir45.netlify.app",
              image: "https://skathir45.netlify.app/kathirvel_profile.png",
              sameAs: [
                "https://github.com/Kathir45",
                "https://linkedin.com/in/kathirvel45",
                "https://leetcode.com/u/Kathirs45/",
              ],
              jobTitle: "Software Developer",
              description:
                "Software Developer specialising in MERN Stack, React Native, and full-stack web development.",
              knowsAbout: [
                "MERN Stack",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React Native",
                "Next.js",
                "TypeScript",
                "Full-Stack Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Panimalar Engineering College",
              },
            }),
          }}
        />

        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kathirvel S — Software Developer Portfolio",
              url: "https://skathir45.netlify.app",
              author: {
                "@type": "Person",
                name: "Kathirvel S",
              },
              description:
                "Portfolio of Kathirvel S — Software Developer building full-stack web and mobile applications.",
            }),
          }}
        />
      </head>
      <body className="bg-[#FAFAF9] text-gray-950 relative pt-20 pb-16 md:pb-0 dark:bg-[#09090b] dark:text-white/90">
        {/* Background Effects */}
        <div className="bg-[#e8d89e] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#000]" />
        <div className="bg-[#CDECFF] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#000]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <main>
              <Header />
              {children}
              <SpeedInsights />
              <Toaster position="top-right" />
              <Footer />
              <ThemeSwitch />
            </main>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
