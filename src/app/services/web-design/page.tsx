import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services",
  description:
    "Beautiful, user-focused web designs that convert visitors into customers. Modern, responsive interfaces built with your brand and users in mind.",
  keywords: [
    "web design",
    "UI/UX design",
    "responsive design",
    "user interface design",
    "brand identity",
    "conversion optimization",
    "modern web design",
  ],
  openGraph: {
    title: "Web Design Services | Flowtide",
    description:
      "Beautiful, user-focused web designs that convert visitors into customers. Modern, responsive interfaces built with your brand and users in mind.",
    url: "https://flowtide.com/services/web-design",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Web Design Services - Flowtide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Flowtide",
    description:
      "Beautiful, user-focused web designs that convert visitors into customers.",
    images: ["/social-share.webp"],
  },
};

export default function WebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design Services",
    description:
      "Beautiful, user-focused web designs that convert visitors into customers. Modern, responsive interfaces built with your brand and users in mind.",
    provider: {
      "@type": "Organization",
      name: "Flowtide",
      url: "https://flowtide.com",
    },
    areaServed: "Worldwide",
    serviceType: "Web Design",
  };
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-20">
        <ServicePageHeader
          title="Web Design"
          description="Beautiful, user-focused designs that convert visitors into customers. Modern interfaces built with your brand and users in mind."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why Great Design Matters
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  Your website is often the first impression customers have of
                  your business. Great design isn't just about looking good—it's
                  about creating intuitive experiences that guide users toward
                  action.
                </p>
                <p>
                  I create modern, responsive designs that work beautifully
                  across all devices. From initial concepts to final
                  implementation, every design decision is made with your users
                  and business goals in mind.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    UI/UX Design
                  </h3>
                  <p className="text-zinc-600">
                    User-centered design that balances aesthetics with
                    functionality and usability.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Responsive Design
                  </h3>
                  <p className="text-zinc-600">
                    Designs that look and work perfectly on desktop, tablet, and
                    mobile devices.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Brand Identity
                  </h3>
                  <p className="text-zinc-600">
                    Cohesive visual systems that strengthen your brand and
                    create memorable experiences.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Conversion Optimization
                  </h3>
                  <p className="text-zinc-600">
                    Strategic design choices that guide users toward taking
                    action and becoming customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Web Design" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
