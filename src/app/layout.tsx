import type { Metadata } from "next";
import { Playfair_Display, Cairo, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OIJIH Assurances – Courtier Assurance à Salé, Maroc | Devis Gratuit",
  description:
    "OIJIH Assurances, votre courtier d'assurance de confiance à Salé, Maroc. Devis gratuit pour assurance auto, habitation, santé, entreprise et voyage. Réponse sous 24h.",
  keywords: [
    "assurance Salé",
    "courtier assurance Maroc",
    "assurance auto Salé",
    "devis assurance gratuit",
    "OIJIH Assurances",
  ],
  authors: [{ name: "OIJIH Assurances" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "OIJIH Assurances – Courtier Assurance à Salé, Maroc",
    description:
      "Ce qui compte pour vous, compte pour nous. Votre courtier d'assurance de confiance à Salé.",
    url: "https://oijih-assurances.ma",
    siteName: "OIJIH Assurances",
    type: "website",
    locale: "fr_MA",
    alternateLocale: "ar_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: "OIJIH Assurances – Courtier Assurance à Salé, Maroc",
    description:
      "Ce qui compte pour vous, compte pour nous. Devis gratuit sous 24h.",
  },
  alternates: {
    languages: {
      "fr-MA": "/fr",
      "ar-MA": "/ar",
    },
  },
  other: {
    "geo.region": "MA-SAL",
    "geo.placename": "Salé",
    "geo.position": "34.0531;-6.7985",
    "ICBM": "34.0531, -6.7985",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="fr-MA" href="https://oijih-assurances.ma/fr" />
        <link rel="alternate" hrefLang="ar-MA" href="https://oijih-assurances.ma/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://oijih-assurances.ma" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "InsuranceAgency"],
              name: "OIJIH Assurances",
              alternateName: "تأمينات وجيه",
              description:
                "Courtier d'assurance à Salé, Maroc. Assurance auto, habitation, santé, entreprise et voyage.",
              url: "https://oijih-assurances.ma",
              telephone: ["+212662409860", "+212537838938"],
              email: "oijih.assurance25@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda",
                addressLocality: "Salé",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0531,
                longitude: -6.7985,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cairo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
