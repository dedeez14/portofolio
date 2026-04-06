import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dede Febriansyah | Full Stack Developer",
  description: "Full Stack Developer with 7+ years of experience building scalable web applications. Specialized in Laravel, React, Next.js, and Node.js. Open to full-time roles and freelance projects.",
  keywords: [
    "Dede Febriansyah",
    "Full Stack Developer",
    "Web Developer Indonesia",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "Frontend Developer",
    "PHP Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer Indonesia",
    "Jakarta Developer",
    "dedeprojectdev",
    "portfolio",
  ],
  authors: [{ name: "Dede Febriansyah", url: "https://dedeproject.dev" }],
  creator: "Dede Febriansyah",
  publisher: "Dede Febriansyah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dedeproject.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dede Febriansyah | Full Stack Developer",
    description: "Full Stack Developer with 7+ years of experience. Specialized in Laravel, React, Next.js, and Node.js. Open to new opportunities.",
    url: "https://dedeproject.dev",
    siteName: "Dede Febriansyah - Portfolio",
    images: [
      {
        url: "/project/dedeprojectdev-og.png",
        width: 1200,
        height: 630,
        alt: "Dede Febriansyah - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dede Febriansyah | Full Stack Developer",
    description: "Full Stack Developer with 7+ years of experience. Specialized in Laravel, React, and Node.js.",
    creator: "@dedeez14",
    images: ["/project/dedeprojectdev-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'eOD5FyC2v_q7xt9LRMZ-_oGU4_hD_2Ti6ZP9ZpML4wo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="kadam-verification" content="kadambb61ba4b5b66d613515ddfeed2ead123" />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dede Febriansyah",
              "alternateName": "DedeProjectDev",
              "url": "https://dedeproject.dev",
              "email": "febriansyahd65@gmail.com",
              "telephone": "+62-838-9891-1244",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer with 7+ years of experience building scalable web applications using Laravel, React, Next.js, and Node.js.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "sameAs": [
                "https://github.com/dedeez14",
                "https://linkedin.com/in/dede-febriansyah",
                "https://instagram.com/dedeez14"
              ],
              "knowsAbout": [
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
                "Laravel", "PHP", "MySQL", "PostgreSQL", "Docker",
                "Full Stack Development", "Web Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Jakarta"
                },
                "skills": [
                  "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
                  "Laravel", "PHP", "MySQL", "PostgreSQL", "Tailwind CSS", "Docker"
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
