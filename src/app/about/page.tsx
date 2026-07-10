import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Over CheckjeIjzer",
  description:
    "Over CheckjeIjzer: een gratis, privacyvriendelijk en meertalig beslissingsondersteunend instrument voor het screenen op ijzertekort door zorgverleners.",
  alternates: { canonical: "https://checkjeijzer.github.io/about/" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container content">
        <h1>Over CheckjeIjzer</h1>
        <p className="lead">
          CheckjeIjzer is een gratis, meertalig hulpmiddel dat zorgverleners
          ondersteunt bij het inschatten van de waarschijnlijkheid van
          ijzertekort (iron deficiency) op basis van biomarkers en symptomen.
        </p>

        <h2>Wat het doet</h2>
        <p>
          De toepassing stelt een reeks gestructureerde vragen over laboratoriumwaarden
          (zoals ferritine, transferrinesaturatie, hemoglobine, MCV en CRP), symptomen
          en risicofactoren. Op basis van conventionele referentiewaarden berekent het
          een waarschijnlijkheidsscore en geeft het een onderbouwd advies: laag, matig
          of hoog risico op ijzertekort. Alle vragen en drempelwaarden zijn
          configureerbaar en aanpasbaar aan lokale richtlijnen.
        </p>

        <h2>Privacy</h2>
        <p>
          Er zijn geen gebruikersaccounts. Alle patiëntsessies worden uitsluitend
          lokaal in de browser opgeslagen (localStorage) en verlaten het apparaat
          niet. Er worden geen gegevens naar een server verzonden.
        </p>

        <h2>Voor wie</h2>
        <p>
          CheckjeIjzer is bedoeld als hulpmiddel voor zorgverleners. Het vervangt geen
          klinische beoordeling of bevestigend laboratoriumonderzoek.
        </p>

        <div className="disclaimer-box">
          <strong>Medische disclaimer:</strong> Dit is een educatief, beslissingsondersteunend
          screeningsinstrument en stelt geen diagnose. Klinisch oordeel en bevestigende
          tests blijven essentieel.
        </div>

        <p className="small muted">
          Available in Nederlands, English, Français, Deutsch, Italiano and Español —
          use the language selector in the header.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
