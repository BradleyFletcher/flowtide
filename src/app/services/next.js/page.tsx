import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Development Services",
  description:
    "The React framework powering the modern web. Blazing-fast performance, SEO-friendly, and built to scale. Full-stack Next.js applications with server-side rendering.",
  keywords: [
    "Next.js development",
    "React framework",
    "server-side rendering",
    "static site generation",
    "full-stack development",
    "Next.js applications",
    "React development",
  ],
  openGraph: {
    title: "Next.js Development Services | Flowtide",
    description:
      "The React framework powering the modern web. Blazing-fast performance, SEO-friendly, and built to scale.",
    url: "https://flowtide.com/services/next.js",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Next.js Development - Flowtide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Development Services | Flowtide",
    description:
      "The React framework powering the modern web. Blazing-fast performance and SEO-friendly.",
    images: ["/social-share.webp"],
  },
};

export default function NextJSPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Development Services",
    description:
      "The React framework powering the modern web. Blazing-fast performance, SEO-friendly, and built to scale. Full-stack Next.js applications with server-side rendering.",
    provider: {
      "@type": "Organization",
      name: "Flowtide",
      url: "https://flowtide.com",
    },
    areaServed: "Worldwide",
    serviceType: "Next.js Development",
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
          title="Next.js Development"
          description="The React framework powering the modern web. Blazing-fast performance and seamless deployment."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why Next.js?
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  Next.js is the React framework for production. It provides the
                  best developer experience with all the features you need for
                  production: hybrid static & server rendering, TypeScript
                  support, smart bundling, route pre-fetching, and more.
                </p>
                <p>
                  I build modern web applications with Next.js that are
                  lightning-fast, SEO-friendly, and built to scale with your
                  business. From marketing sites to complex web applications,
                  Next.js delivers exceptional performance and user experience.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Full-Stack Applications
                  </h3>
                  <p className="text-zinc-600">
                    Complete web applications with server-side rendering, API
                    routes, and database integration.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Static Site Generation
                  </h3>
                  <p className="text-zinc-600">
                    Lightning-fast static sites with dynamic capabilities for
                    blogs, documentation, and marketing sites.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    E-commerce Solutions
                  </h3>
                  <p className="text-zinc-600">
                    High-performance online stores with headless CMS integration
                    and modern checkout experiences.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Performance Optimization
                  </h3>
                  <p className="text-zinc-600">
                    Optimized builds with automatic code splitting, image
                    optimization, and edge deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Next.js Development" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
