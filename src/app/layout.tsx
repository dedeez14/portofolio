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
  title: "Dede Febriansyah - Jasa Pembuatan Website Professional | DedeProjectDev Jakarta",
  description: "🚀 Jasa pembuatan website professional oleh Dede Febriansyah (DedeProjectDev). Full Stack Developer berpengalaman Jakarta. Spesialis website company profile, e-commerce, aplikasi web custom. ✅ Konsultasi GRATIS via WhatsApp! ✅ Harga terjangkau ✅ Garansi revisi",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website jakarta",
    "jasa website murah",
    "dedeprojectdev",
    "dede febriansyah",
    "developer website jakarta",
    "full stack developer jakarta",
    "jasa website professional",
    "pembuatan website company profile",
    "jasa website e-commerce",
    "jasa aplikasi web custom",
    "website developer indonesia",
    "freelance web developer",
    "jasa website terpercaya",
    "pembuatan website murah jakarta",
    "developer react jakarta",
    "next js developer indonesia",
    "node js developer",
    "website responsive mobile",
    "jasa website freelance",
    "order website whatsapp",
    "konsultasi website gratis",
    "jasa buat website online shop",
    "developer website toko online",
    "pembuatan website bisnis",
    "jasa website landing page",
    "developer website profesional",
    "jasa pembuatan aplikasi web"
  ],
  authors: [{ name: "Dede Febriansyah", url: "https://dedeproject.dev" }],
  creator: "Dede Febriansyah - DedeProjectDev",
  publisher: "DedeProjectDev",
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
    title: "DedeProjectDev - Jasa Pembuatan Website Professional Jakarta #1",
    description: "🏆 Jasa pembuatan website #1 di Jakarta! Spesialis React, Next.js, Node.js. ✅ Company Profile ✅ E-commerce ✅ Aplikasi Web Custom. Konsultasi GRATIS via WhatsApp!",
    url: "https://dedeproject.dev",
    siteName: "DedeProjectDev - Jasa Pembuatan Website Jakarta",
    images: [
      {
        url: "/project/dedeprojectdev-og.png",
        width: 1200,
        height: 630,
        alt: "DedeProjectDev - Jasa Pembuatan Website Professional Jakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DedeProjectDev - Jasa Pembuatan Website Professional Jakarta",
    description: "🚀 Full Stack Developer Jakarta | Jasa website company profile, e-commerce, aplikasi web. Order via WhatsApp untuk konsultasi GRATIS!",
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
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* WhatsApp Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DedeProjectDev - Jasa Pembuatan Website Jakarta",
              "alternateName": "Dede Febriansyah Web Developer",
              "description": "Jasa pembuatan website professional dan aplikasi web custom dengan teknologi terkini. Spesialis React, Next.js, Node.js.",
              "url": "https://dedeproject.dev",
              "telephone": "+62-857-7006-2121",
              "email": "febriansyahd65@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2088,
                "longitude": 106.8456
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-15:00",
              "priceRange": "Rp 500.000 - Rp 50.000.000",
              "paymentAccepted": "Cash, Bank Transfer, E-Wallet",
              "currenciesAccepted": "IDR",
              "serviceArea": {
                "@type": "Country",
                "name": "Indonesia"
              },
              "areaServed": [
                "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Indonesia"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Layanan Pembuatan Website",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Pembuatan Website Company Profile",
                      "description": "Pembuatan website company profile professional dan responsive dengan CMS",
                      "provider": {
                        "@type": "Person",
                        "name": "Dede Febriansyah"
                      }
                    },
                    "price": "1500000",
                    "priceCurrency": "IDR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Pembuatan Website E-commerce",
                      "description": "Pembuatan toko online dan platform e-commerce dengan sistem pembayaran",
                      "provider": {
                        "@type": "Person",
                        "name": "Dede Febriansyah"
                      }
                    },
                    "price": "5000000",
                    "priceCurrency": "IDR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Pembuatan Aplikasi Web Custom",
                      "description": "Pengembangan aplikasi web sesuai kebutuhan bisnis dengan teknologi modern",
                      "provider": {
                        "@type": "Person",
                        "name": "Dede Febriansyah"
                      }
                    },
                    "price": "10000000",
                    "priceCurrency": "IDR"
                  }
                ]
              },
              "sameAs": [
                "https://github.com/dedeez14",
                "https://linkedin.com/in/dede-febriansyah",
                "https://instagram.com/dedeez14",
                "https://wa.me/6283898911244"
              ]
            })
          }}
        />

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
              "telephone": "+62-857-7006-2121",
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "DedeProjectDev",
                "url": "https://dedeproject.dev"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "sameAs": [
                "https://github.com/dedeez14",
                "https://linkedin.com/in/dede-febriansyah",
                "https://instagram.com/dedeez14",
                "https://wa.me/6283898911244"
              ],
              "knowsAbout": [
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
                "Full Stack Development", "Web Development", "E-commerce Development",
                "Website Development Services", "Mobile App Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Web Developer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Jakarta"
                },
                "skills": [
                  "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
                  "MongoDB", "PostgreSQL", "Tailwind CSS", "Express.js"
                ]
              }
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Berapa harga jasa pembuatan website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harga mulai dari Rp 1.5 juta untuk website company profile, Rp 5 juta untuk e-commerce, dan Rp 10 juta untuk aplikasi web custom. Konsultasi gratis via WhatsApp!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Berapa lama proses pembuatan website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website company profile: 1-2 minggu, E-commerce: 2-4 minggu, Aplikasi custom: 1-3 bulan tergantung kompleksitas fitur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apakah ada garansi revisi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, kami memberikan garansi revisi unlimited selama masa pengerjaan dan garansi bug fix 3 bulan setelah website selesai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana cara order jasa pembuatan website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hubungi kami via WhatsApp di +62-857-7006-2121 untuk konsultasi gratis dan diskusi kebutuhan website Anda."
                  }
                }
              ]
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
