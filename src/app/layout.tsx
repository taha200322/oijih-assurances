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
  title: "OIJIH Assurances – Courtier Assurance à Salé, Maroc | +20 Ans d'Expérience | Devis Gratuit",
  description:
    "OIJIH Assurances, votre courtier d'assurance de confiance à Salé, Maroc. Plus de 20 ans d'expérience. Devis gratuit pour assurance auto, habitation, multirisque, santé, entreprise et voyage. Réponse sous 24h. +500 clients satisfaits.",
  keywords: [
    "assurance Salé",
    "assurance Rabat Salé",
    "courtier assurance Maroc",
    "courtier assurance Salé",
    "assurance auto Salé",
    "assurance habitation Maroc",
    "assurance santé Maroc",
    "assurance entreprise Maroc",
    "assurance voyage Maroc",
    "assurance multirisque Maroc",
    "devis assurance gratuit",
    "OIJIH Assurances",
    "تأمينات وجيه",
    "وكيل تأمين سلا",
    "تأمين المغرب",
    "courtier assurance Rabat",
    "meilleur assurance Maroc",
    "comparateur assurance Maroc",
    "agence assurance Salé",
    "assurance pas cher Maroc",
  ],
  authors: [{ name: "OIJIH Assurances", url: "https://oijih-assurances.ma" }],
  creator: "OIJIH Assurances",
  publisher: "OIJIH Assurances",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://oijih-assurances.ma"),
  openGraph: {
    title: "OIJIH Assurances – Courtier Assurance à Salé, Maroc | +20 Ans d'Expérience",
    description:
      "Plus de 20 ans d'expertise en assurance à Salé. Auto, habitation, santé, entreprise, voyage. Devis gratuit sous 24h. +500 clients satisfaits.",
    url: "https://oijih-assurances.ma",
    siteName: "OIJIH Assurances",
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "fr_FR"],
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OIJIH Assurances – Courtier Assurance à Salé, Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OIJIH Assurances – Courtier Assurance à Salé | +20 Ans d'Expérience",
    description:
      "Votre courtier d'assurance de confiance à Salé, Maroc. Devis gratuit sous 24h. +500 clients satisfaits.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://oijih-assurances.ma",
    languages: {
      "fr-MA": "https://oijih-assurances.ma/fr",
      "ar-MA": "https://oijih-assurances.ma/ar",
      "x-default": "https://oijih-assurances.ma",
    },
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
  other: {
    "geo.region": "MA-SAL",
    "geo.placename": "Salé, Rabat-Salé-Kénitra, Morocco",
    "geo.position": "34.0531;-6.7985",
    "ICBM": "34.0531, -6.7985",
    "language": "fr, ar",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
    "copyright": "OIJIH Assurances 2024",
  },
  category: "insurance",
  classification: "Insurance Broker",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "InsuranceAgency"],
                name: "OIJIH Assurances",
                alternateName: ["تأمينات وجيه", "OIJIH Insurance", "OIJIH"],
                description:
                  "Courtier d'assurance à Salé, Maroc avec plus de 20 ans d'expérience. Assurance auto, habitation, multirisque, santé, entreprise et voyage. Devis gratuit sous 24h.",
                url: "https://oijih-assurances.ma",
                telephone: ["+212662409860", "+212537838938"],
                email: "oijih.assurance25@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda",
                  addressLocality: "Salé",
                  addressRegion: "Rabat-Salé-Kénitra",
                  postalCode: "11000",
                  addressCountry: "MA",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 34.0531,
                  longitude: -6.7985,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "09:00",
                    closes: "13:00",
                  }
                ],
                priceRange: "$$",
                currenciesAccepted: "MAD",
                paymentAccepted: "Cash, Credit Card, Bank Transfer",
                areaServed: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 34.0531,
                    longitude: -6.7985,
                  },
                  geoRadius: "50000",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Services d'Assurance",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Auto" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Habitation" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Multirisque" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Santé" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Entreprise" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Voyage" } },
                  ],
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "127",
                  bestRating: "5",
                },
                foundingDate: "2004",
                numberOfEmployees: {
                  "@type": "QuantitativeValue",
                  minValue: 5,
                  maxValue: 15,
                },
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quels types d'assurance proposez-vous ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nous proposons une gamme complète : assurance auto, habitation, multirisque, santé, entreprise et voyage. Chaque contrat est personnalisé selon vos besoins spécifiques et votre budget.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Combien de temps faut-il pour obtenir un devis ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nous nous engageons à vous répondre sous 24 heures. Dans la plupart des cas, vous recevez votre devis gratuit le jour même de votre demande.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Que faire en cas de sinistre ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Contactez-nous immédiatement par téléphone ou WhatsApp. Notre équipe vous guide étape par étape et assure un suivi complet jusqu'au règlement de votre dossier.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Proposez-vous des tarifs pour les entreprises ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui, nous offrons des solutions sur mesure pour les professionnels et entreprises : multirisque professionnelle, flotte automobile, responsabilité civile et couverture des employés.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelles compagnies d'assurance représentez-vous ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nous travaillons avec plus de 15 compagnies d'assurance de premier plan au Maroc, ce qui nous permet de vous proposer les meilleures garanties aux tarifs les plus compétitifs.",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://oijih-assurances.ma",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services d'Assurance",
                    item: "https://oijih-assurances.ma/#services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Contact",
                    item: "https://oijih-assurances.ma/#contact",
                  },
                ],
              },
            ]),
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
