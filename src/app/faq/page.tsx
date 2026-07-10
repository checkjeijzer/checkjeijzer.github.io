import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Veelgestelde vragen (FAQ)",
  description:
    "Veelgestelde vragen over ijzertekort, ferritine, transferrinesaturatie en het gebruik van CheckjeIjzer als screeningsinstrument.",
  alternates: { canonical: "https://checkjeijzer.github.io/faq/" },
};

// Q&A content — kept in one array so the visible page and the FAQPage JSON-LD
// (for AEO / rich results) never drift apart.
const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is ijzertekort?",
    a: "IJzertekort (iron deficiency) is een toestand waarbij het lichaam onvoldoende ijzer heeft voor normale functies zoals de aanmaak van hemoglobine. Het kan bestaan met of zonder bloedarmoede (anemie) en veroorzaakt onder meer vermoeidheid, bleekheid, kortademigheid en concentratieproblemen.",
  },
  {
    q: "Welke bloedwaarde is het belangrijkst voor de diagnose?",
    a: "Serumferritine is de meest informatieve losse marker. Een ferritine onder 30 µg/L wijst sterk op uitgeputte ijzervoorraden. Bij ontsteking kan ferritine echter vals verhoogd zijn; dan zijn transferrinesaturatie (TSAT, <20%) en CRP nuttig als aanvulling.",
  },
  {
    q: "Kan ik ijzertekort hebben zonder bloedarmoede?",
    a: "Ja. IJzertekort zonder anemie komt vaak voor: de ijzervoorraden zijn uitgeput (lage ferritine) terwijl het hemoglobine nog normaal is. Symptomen zoals vermoeidheid kunnen dan al aanwezig zijn.",
  },
  {
    q: "Hoe berekent CheckjeIjzer de waarschijnlijkheid?",
    a: "De toepassing kent aan elk antwoord punten toe op basis van conventionele referentiewaarden en weegt deze. De som wordt genormaliseerd naar een score van 0 tot 100 en ingedeeld als laag, matig of hoog risico. De volledige logica staat in een configuratiebestand en is aanpasbaar.",
  },
  {
    q: "Worden patiëntgegevens opgeslagen of gedeeld?",
    a: "Nee. Er zijn geen accounts en er wordt niets naar een server gestuurd. Alle sessies worden uitsluitend lokaal in de browser (localStorage) bewaard en blijven op uw apparaat.",
  },
  {
    q: "Vervangt dit een arts of laboratoriumonderzoek?",
    a: "Nee. CheckjeIjzer is een beslissingsondersteunend screeningsinstrument, geen diagnose. Klinisch oordeel en bevestigend laboratoriumonderzoek blijven essentieel.",
  },
  {
    q: "In welke talen is de tool beschikbaar?",
    a: "In het Nederlands, Engels, Frans, Duits, Italiaans en Spaans. U kunt de taal wisselen met de keuzelijst in de bovenbalk.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="container content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <h1>Veelgestelde vragen</h1>
        <p className="lead">
          Antwoorden op veelgestelde vragen over ijzertekort en het gebruik van
          CheckjeIjzer.
        </p>
        {faqs.map((f) => (
          <div className="faq-item" key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
        <div className="disclaimer-box">
          <strong>Medische disclaimer:</strong> Deze informatie is educatief en
          vervangt geen professioneel medisch advies of onderzoek.
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
