import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";

export default function HostingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <ServicePageHeader
          title="Cloud Hosting Solutions"
          description="Reliable cloud infrastructure on AWS, Azure, and Google Cloud. Scalable solutions with dedicated server options."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why Professional Hosting Matters
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  Your hosting infrastructure is the foundation of your online
                  presence. I provide reliable cloud infrastructure tailored to
                  your needs, from managed cloud platforms to custom server
                  configurations.
                </p>
                <p>
                  Whether you need a simple hosting solution or complex
                  multi-server architecture, I handle deployment and scaling so
                  you can focus on your business.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Cloud Platform Management
                  </h3>
                  <p className="text-zinc-600">
                    Expert deployment and management on AWS, Azure, and Google
                    Cloud platforms.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Dedicated Servers
                  </h3>
                  <p className="text-zinc-600">
                    Custom server configurations for high-traffic sites and
                    specialized applications.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Auto-Scaling Infrastructure
                  </h3>
                  <p className="text-zinc-600">
                    Automatically scale resources based on traffic to handle
                    peak loads efficiently.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Security & Monitoring
                  </h3>
                  <p className="text-zinc-600">
                    SSL certificates, DDoS protection, automated backups, and
                    24/7 monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Cloud Hosting" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
