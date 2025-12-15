import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <ServicePageHeader
          title="Mobile App Development"
          description="Native iOS and Android apps with React Native and Flutter. Cross-platform or fully native solutions."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why Mobile Apps?
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  Mobile apps provide a direct connection to your customers with
                  push notifications, offline functionality, and native device
                  features. I build fast, reliable mobile apps that users love.
                </p>
                <p>
                  From concept to App Store deployment, I handle the entire
                  mobile development process. Whether you need a cross-platform
                  solution or fully native apps, I deliver quality mobile
                  experiences across iOS and Android.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    React Native Development
                  </h3>
                  <p className="text-zinc-600">
                    Cross-platform apps that share code between iOS and Android
                    while maintaining native performance.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Flutter Development
                  </h3>
                  <p className="text-zinc-600">
                    Beautiful, natively compiled applications with a single
                    codebase for mobile, web, and desktop.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Native iOS & Android
                  </h3>
                  <p className="text-zinc-600">
                    Fully native apps when you need maximum performance and
                    platform-specific features.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    App Store Deployment
                  </h3>
                  <p className="text-zinc-600">
                    Complete submission process for both Apple App Store and
                    Google Play Store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Mobile App Development" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
