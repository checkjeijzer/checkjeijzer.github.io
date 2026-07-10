import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nContext";

const SITE = "https://checkjeijzer.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CheckjeIjzer — IJzertekort screening voor zorgverleners",
    template: "%s · CheckjeIjzer",
  },
  description:
    "CheckjeIjzer is een beslissingsondersteunend screeningsinstrument voor ijzertekort (iron deficiency). Beantwoord vragen over biomarkers en symptomen en krijg een waarschijnlijkheidsadvies. Beschikbaar in 6 talen.",
  keywords: [
    "ijzertekort", "iron deficiency", "ferritine", "ferritin", "anemie", "anemia",
    "screening", "transferrinesaturatie", "TSAT", "hemoglobine", "zorgverlener",
  ],
  alternates: {
    canonical: SITE,
    languages: {
      nl: `${SITE}/?lang=nl`,
      en: `${SITE}/?lang=en`,
      fr: `${SITE}/?lang=fr`,
      de: `${SITE}/?lang=de`,
      it: `${SITE}/?lang=it`,
      es: `${SITE}/?lang=es`,
      "x-default": SITE,
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CheckjeIjzer",
    title: "CheckjeIjzer — IJzertekort screening voor zorgverleners",
    description:
      "Beslissingsondersteunende screening voor ijzertekort op basis van biomarkers en symptomen. Meertalig, privacyvriendelijk, volledig lokaal.",
  },
  twitter: {
    card: "summary",
    title: "CheckjeIjzer — IJzertekort screening",
    description: "Beslissingsondersteunende screening voor ijzertekort. Meertalig en privacyvriendelijk.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "CheckjeIjzer",
  url: SITE,
  inLanguage: ["nl", "en", "fr", "de", "it", "es"],
  audience: { "@type": "MedicalAudience", audienceType: "Clinician" },
  about: { "@type": "MedicalCondition", name: "Iron deficiency" },
  description:
    "Decision-support screening tool for iron deficiency based on biomarkers and symptoms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* hreflang alternates are generated from metadata.alternates.languages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
