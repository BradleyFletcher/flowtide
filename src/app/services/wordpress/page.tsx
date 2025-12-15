import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";

export default function WordPressPage() {
  return (
    <div className="min-h-screen bg-white">
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
