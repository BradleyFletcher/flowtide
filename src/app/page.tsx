import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ValuePropositionSection } from "@/components/home/value-proposition-section";
import { TechnologiesSection } from "@/components/home/technologies-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flowtide - Performance-Focused Web Solutions",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <HeroSection />
        <ValuePropositionSection />
        <TechnologiesSection />
      </main>

      <Footer />
    </div>
  );
}
