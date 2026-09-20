import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { themeScript } from "@/lib/theme";
import { personalInfo, socialLinks } from "@/data/portfolio";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const situs = "https://dedeproject.dev";
const judul = "Dede Febriansyah — membangun sistem yang dipakai bisnis setiap hari";
const deskripsi =
  "Full-stack developer dari Depok. ERP, POS, akuntansi, koperasi, BUM Desa, dan monitoring VPS yang saya bangun berjalan di server sendiri dan dipakai setiap hari. Laravel, Go, React, PostgreSQL, MySQL.";

export const metadata: Metadata = {
  title: { default: judul, template: "%s — Dede Febriansyah" },
  description: deskripsi,
  keywords: [
    "Dede Febriansyah",
    "full stack developer Indonesia",
    "jasa pembuatan aplikasi",
    "ERP Laravel",
    "Go developer",
    "React developer",
    "PT Karya Cipta Solusi",
    "Depok",
  ],
  authors: [{ name: personalInfo.name, url: situs }],
  creator: personalInfo.name,
  metadataBase: new URL(situs),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: situs,
    siteName: "dedeproject.dev",
    title: judul,
    description: deskripsi,
    images: [{ url: "/project/dedeprojectdev-og.png", width: 1200, height: 630, alt: "Dede Febriansyah — sistem yang berjalan di produksi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: judul,
    description: deskripsi,
    images: ["/project/dedeprojectdev-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${situs}/#dede`,
      name: personalInfo.name,
      url: situs,
      email: personalInfo.email,
      jobTitle: "Full Stack Developer",
      worksFor: { "@type": "Organization", name: "PT Karya Cipta Solusi", url: "https://karyaciptasolusi.com" },
      address: { "@type": "PostalAddress", addressLocality: "Depok", addressCountry: "ID" },
      sameAs: [socialLinks.github, socialLinks.linkedin].filter(Boolean),
      knowsAbout: ["Laravel", "Go", "React", "Next.js", "PostgreSQL", "MySQL", "Docker"],
    },
    {
      "@type": "WebSite",
      "@id": `${situs}/#situs`,
      url: situs,
      name: "dedeproject.dev",
      inLanguage: "id-ID",
      author: { "@id": `${situs}/#dede` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${bricolage.variable} ${plex.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
