import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ValuePropositionSection } from "@/components/home/value-proposition-section";
import { TechnologiesSection } from "@/components/home/technologies-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowtide - Performance-Focused Web Solutions",
  description:
    "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications. Specializing in WordPress, Next.js, AI integration, and performance optimization.",
  keywords: [
    "web developer",
    "WordPress development",
    "Next.js development",
    "web design",
    "AI integration",
    "mobile app development",
    "cloud hosting",
    "freelance developer",
    "custom websites",
    "performance optimization",
  ],
  openGraph: {
    title: "Flowtide - Performance-Focused Web Solutions",
    description:
      "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications.",
    url: "https://flowtide.com",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Flowtide - Modern Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtide - Performance-Focused Web Solutions",
    description:
      "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications.",
    images: ["/social-share.webp"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Flowtide",
    description:
      "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications.",
    url: "https://flowtide.com",
    logo: "https://flowtide.com/icon-128.png",
    founder: {
      "@type": "Person",
      name: "Brad Fletcher",
      jobTitle: "Web Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote",
      addressCountry: "Worldwide",
    },
    email: "brad@flowtide.ai",
    telephone: "+1234567890",
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "WordPress Development",
      "Next.js Development",
      "AI Integration",
      "Mobile App Development",
      "Cloud Hosting",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
