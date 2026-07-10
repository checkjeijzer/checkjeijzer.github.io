import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AboutContent from "@/components/AboutContent";

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
      <AboutContent />
      <SiteFooter />
    </>
  );
}
