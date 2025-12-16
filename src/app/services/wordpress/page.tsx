import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Development Services",
  description:
    "Custom WordPress solutions built for your needs. No templates, no bloat—just clean development, custom plugins, and high-performance WordPress sites.",
  keywords: [
    "WordPress development",
    "custom WordPress",
    "WordPress theme development",
    "WordPress plugin development",
    "WooCommerce",
    "WordPress optimization",
    "custom CMS",
  ],
  openGraph: {
    title: "WordPress Development Services | Flowtide",
    description:
      "Custom WordPress solutions built for your needs. No templates, no bloat—just clean development and custom plugins.",
    url: "https://flowtide.com/services/wordpress",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Development - Flowtide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | Flowtide",
    description:
      "Custom WordPress solutions built for your needs. No templates, no bloat—just clean development.",
    images: ["/social-share.webp"],
  },
};

export default function WordPressPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Development Services",
    description:
      "Custom WordPress solutions built for your needs. No templates, no bloat—just clean development, custom plugins, and high-performance WordPress sites.",
    provider: {
      "@type": "Organization",
      name: "Flowtide",
      url: "https://flowtide.com",
    },
    areaServed: "Worldwide",
    serviceType: "WordPress Development",
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
          title="WordPress Development"
          description="Custom WordPress solutions built for your needs. No templates, no bloat—just clean development and custom plugins."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why WordPress?
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  WordPress powers over 40% of the web, and for good reason.
                  It's flexible, scalable, and when built correctly, incredibly
                  powerful. I specialize in custom WordPress development that
                  goes beyond themes and templates.
                </p>
                <p>
                  From design to deployment, I create high-performance WordPress
                  sites that stand out. Whether you need a custom theme, complex
                  functionality, or seamless integrations, I build solutions
                  tailored to your brand and business goals.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Custom Theme Development
                  </h3>
                  <p className="text-zinc-600">
                    Bespoke WordPress themes built from scratch to match your
                    brand identity and design requirements perfectly.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Plugin Development
                  </h3>
                  <p className="text-zinc-600">
                    Custom plugins to add unique functionality that
                    off-the-shelf solutions can't provide.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Performance Optimization
                  </h3>
                  <p className="text-zinc-600">
                    Fast-loading sites optimized for speed, SEO, and user
                    experience.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    WooCommerce Integration
                  </h3>
                  <p className="text-zinc-600">
                    Complete e-commerce solutions with custom checkout flows and
                    payment integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="WordPress Development" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
