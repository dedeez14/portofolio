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
  title: "Dede Febriansyah - Full Stack Developer",
  description: "Passionate full-stack developer with expertise in modern web technologies. Specializing in React, Next.js, Node.js, and building scalable digital solutions.",
  keywords: ["Dede Febriansyah", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development"],
  authors: [{ name: "Dede Febriansyah" }],
  creator: "Dede Febriansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dedefebriansyah.dev",
    title: "Dede Febriansyah - Full Stack Developer",
    description: "Passionate full-stack developer with expertise in modern web technologies.",
    siteName: "Dede Febriansyah Portfolio",
  },
  twitter: {
    creator: "@dedefebriansyah",
    title: "Dede Febriansyah - Full Stack Developer",
    description: "Passionate full-stack developer with expertise in modern web technologies.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
