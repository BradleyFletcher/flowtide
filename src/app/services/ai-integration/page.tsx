import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageHeader } from "../service-page-header";
import { OtherServices } from "../other-services";
import { ServiceCTA } from "../service-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services",
  description:
    "Intelligent automation with OpenAI, Claude, and Gemini. AI chatbots, workflow automation, and custom AI solutions that enhance user experience.",
  keywords: [
    "AI integration",
    "OpenAI integration",
    "ChatGPT integration",
    "AI chatbots",
    "workflow automation",
    "Claude AI",
    "artificial intelligence",
  ],
  openGraph: {
    title: "AI Integration Services | Flowtide",
    description:
      "Intelligent automation with OpenAI, Claude, and Gemini. AI chatbots and workflow automation that enhance user experience.",
    url: "https://flowtide.com/services/ai-integration",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "AI Integration Services - Flowtide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services | Flowtide",
    description:
      "Intelligent automation with OpenAI, Claude, and Gemini. AI chatbots and workflow automation.",
    images: ["/social-share.webp"],
  },
};

export default function AIIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Integration Services",
    description:
      "Intelligent automation with OpenAI, Claude, and Gemini. AI chatbots, workflow automation, and custom AI solutions that enhance user experience.",
    provider: {
      "@type": "Organization",
      name: "Flowtide",
      url: "https://flowtide.com",
    },
    areaServed: "Worldwide",
    serviceType: "AI Integration",
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
          title="AI Integration"
          description="Intelligent automation with OpenAI, Claude, and Gemini. Chatbots and workflow automation that enhance user experience."
        />

        {/* Content Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                Why AI Integration?
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  AI is transforming how businesses interact with customers and
                  automate workflows. I integrate industry-leading AI platforms
                  to add intelligent features to your applications.
                </p>
                <p>
                  From smart chatbots to automated support, content generation,
                  and custom AI workflows, I help you leverage AI to enhance
                  user experience and streamline operations.
                </p>
              </div>

              <h2 className="mb-8 mt-16 text-3xl font-bold text-zinc-900">
                What I Offer
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    AI Chatbots
                  </h3>
                  <p className="text-zinc-600">
                    Intelligent chatbots powered by GPT-4, Claude, or Gemini for
                    customer support and engagement.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Content Generation
                  </h3>
                  <p className="text-zinc-600">
                    Automated content creation for product descriptions, blog
                    posts, and marketing copy.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Workflow Automation
                  </h3>
                  <p className="text-zinc-600">
                    Custom AI workflows to automate repetitive tasks and improve
                    operational efficiency.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Custom AI Solutions
                  </h3>
                  <p className="text-zinc-600">
                    Tailored AI integrations using OpenAI, Anthropic, and Google
                    AI APIs for your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="AI Integration" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
