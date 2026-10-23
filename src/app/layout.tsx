import type { Metadata } from "next";
import { Playfair_Display, Cairo, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { content } from "@/config/content";
import MetaPixel from "@/components/site/MetaPixel";

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

const desc =
  "OIJIH Assurances, courtier d'assurances agréé ACAPS à Salé. Plus de 20 ans d'expérience. Devis gratuit : auto, habitation, santé, entreprise, voyage. Réponse en moins de 24h.";

export const metadata: Metadata = {
  title: "OIJIH Assurances – Courtier d'assurances à Salé | Devis gratuit",
  description: desc,
  keywords: [
    "assurance Salé", "courtier assurance Salé", "assurance auto Salé", "assurance habitation Salé",
    "assurance santé Maroc", "assurance entreprise Salé", "devis assurance gratuit", "courtier agréé ACAPS",
    "assurance Laayayda", "assurance Rabat Salé", "OIJIH Assurances", "تأمينات وجيه", "وسيط تأمين سلا", "تأمين السيارة سلا",
  ],
  authors: [{ name: site.name, url: site.url }],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "OIJIH Assurances – Courtier d'assurances à Salé",
    description: desc,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA"],
    images: [{ url: "/logo.png", alt: "OIJIH Assurances – Courtier d'assurances à Salé" }],
  },
  twitter: { card: "summary_large_image", title: "OIJIH Assurances – Courtier d'assurances à Salé", description: desc, images: ["/logo.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "geo.region": "MA", "geo.placename": "Salé, Maroc" },
  category: "insurance",
};

const days: Record<string, string[]> = {
  "Lundi – Vendredi": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "Samedi": ["Saturday"],
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: site.name,
    alternateName: site.nameAr,
    description: desc,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    telephone: [site.phoneAgence.intl, site.phoneMobile.intl],
    email: site.email,
    hasMap: site.mapsLink,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: "Rabat-Salé-Kénitra",
      addressCountry: "MA",
    },
    openingHoursSpecification: site.hours.fr
      .filter((h) => days[h.days])
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days[h.days],
        opens: h.time.split(" – ")[0],
        closes: h.time.split(" – ")[1],
      })),
    areaServed: ["Salé", "Rabat", "Témara", "Maroc"],
    currenciesAccepted: "MAD",
    knowsLanguage: ["fr", "ar"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.fr.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body
        className={`${playfair.variable} ${cairo.variable} ${inter.variable} antialiased`}
      >
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
