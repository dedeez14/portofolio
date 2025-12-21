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
  title: "Jasa Pembuatan Website Termurah 2026 | Mulai Rp 500rb | DedeProjectDev",
  description: "� Jasa Pembuatan Website Termurah di Indonesia! Harga mulai Rp 500.000. ✅ Website Company Profile ✅ Toko Online ✅ Landing Page ✅ Aplikasi Web Custom. Garansi 100% | Revisi Gratis | Konsultasi GRATIS via WhatsApp. Developer berpengalaman Jakarta.",
  keywords: [
    "jasa pembuatan website termurah",
    "jasa pembuatan website termurah 2026",
    "jasa website termurah indonesia",
    "jasa pembuatan website murah",
    "jasa buat website murah",
    "jasa pembuatan website harga murah",
    "jasa website murah berkualitas",
    "jasa pembuatan website",
    "jasa pembuatan website jakarta",
    "jasa website murah jakarta",
    "pembuatan website termurah",
    "bikin website murah",
    "jasa web murah",
    "jasa pembuatan website company profile murah",
    "jasa pembuatan toko online murah",
    "jasa website landing page murah",
    "jasa pembuatan website profesional murah",
    "harga jasa pembuatan website",
    "tarif jasa pembuatan website",
    "paket website murah",
    "jasa website umkm",
    "jasa pembuatan website bisnis murah",
    "developer website murah",
    "freelance web developer murah",
    "order website murah whatsapp",
    "jasa website terpercaya murah",
    "dedeprojectdev",
    "dede febriansyah"
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
    title: "Jasa Pembuatan Website Termurah 2026 | Mulai Rp 500rb",
    description: "🔥 Jasa Pembuatan Website Termurah di Indonesia! Harga mulai Rp 500.000. Website Company Profile, Toko Online, Landing Page. Garansi 100% + Revisi Gratis!",
    url: "https://dedeproject.dev",
    siteName: "Jasa Pembuatan Website Termurah - DedeProjectDev",
    images: [
      {
        url: "/project/dedeprojectdev-og.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Termurah 2026 - DedeProjectDev",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Termurah 2026 | Mulai Rp 500rb",
    description: "� Jasa Pembuatan Website Termurah! Harga mulai Rp 500.000. ✅ Company Profile ✅ Toko Online ✅ Landing Page. Garansi 100% + Revisi Gratis!",
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
        <meta name="kadam-verification" content="kadambb61ba4b5b66d613515ddfeed2ead123" />

        {/* WhatsApp Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jasa Pembuatan Website Termurah",
              "alternateName": ["Jasa Website Termurah", "Dede Febriansyah Web Developer", "DedeProjectDev"],
              "description": "Jasa Pembuatan Website Termurah di Indonesia. Harga mulai Rp 500.000. Website company profile, toko online, landing page, aplikasi web custom. Garansi 100% dan revisi gratis.",
              "url": "https://dedeproject.dev",
              "telephone": "+62-838-9891-1244",
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
              "openingHours": "Mo-Su 08:00-22:00",
              "priceRange": "Rp 500.000 - Rp 15.000.000",
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
                      "name": "Jasa Pembuatan Website Company Profile Termurah",
                      "description": "Jasa pembuatan website company profile termurah. Website professional dan responsive mulai Rp 500.000",
                      "provider": {
                        "@type": "Person",
                        "name": "Dede Febriansyah"
                      }
                    },
                    "price": "500000",
                    "priceCurrency": "IDR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Pembuatan Toko Online Termurah",
                      "description": "Jasa pembuatan toko online termurah dengan sistem pembayaran lengkap. Harga terjangkau mulai Rp 1.500.000",
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
                      "name": "Jasa Pembuatan Aplikasi Web Custom Murah",
                      "description": "Jasa pembuatan aplikasi web custom dengan harga terjangkau. Teknologi modern, hasil profesional.",
                      "provider": {
                        "@type": "Person",
                        "name": "Dede Febriansyah"
                      }
                    },
                    "price": "3000000",
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
              "telephone": "+62-838-9891-1244",
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
                  "name": "Berapa harga jasa pembuatan website termurah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jasa pembuatan website termurah kami mulai dari Rp 500.000 untuk website company profile, Rp 1.5 juta untuk toko online, dan Rp 3 juta untuk aplikasi web custom. Konsultasi gratis via WhatsApp!"
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
                    "text": "Ya, kami memberikan garansi revisi selama masa pengerjaan dan garansi bug fix 3 bulan setelah website selesai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana cara order jasa pembuatan website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hubungi kami via WhatsApp di +62-838-9891-1244 untuk konsultasi gratis dan diskusi kebutuhan website Anda."
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
