import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FaqContent from "@/components/FaqContent";
import { faqContent } from "@/i18n/content";

export const metadata: Metadata = {
  title: "Veelgestelde vragen (FAQ)",
  description:
    "Veelgestelde vragen over ijzertekort, ferritine, transferrinesaturatie en het gebruik van CheckjeIjzer als screeningsinstrument.",
  alternates: { canonical: "https://checkjeijzer.github.io/faq/" },
};

// FAQPage structured data (AEO / rich results). Built from the Dutch content —
// the primary language of the site — so it is present in the static HTML.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.nl.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
      <SiteFooter />
    </>
  );
}
