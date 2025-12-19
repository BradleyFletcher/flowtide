import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Bot,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Settings,
  Download,
  Github,
  ExternalLink,
} from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chai - WordPress AI Chatbot Plugin",
  description:
    "Free WordPress AI chatbot plugin with OpenAI GPT-4 and Google Gemini integration. Add intelligent, context-aware customer support to your WordPress site.",
  keywords: [
    "WordPress chatbot",
    "AI chatbot plugin",
    "OpenAI WordPress",
    "Gemini chatbot",
    "WordPress AI",
    "free chatbot plugin",
    "customer support automation",
  ],
  openGraph: {
    title: "Chai - WordPress AI Chatbot Plugin | Flowtide",
    description:
      "Free WordPress AI chatbot plugin with OpenAI GPT-4 and Google Gemini integration. Add intelligent customer support to your site.",
    url: "https://flowtide.com/chai",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Chai WordPress AI Chatbot Plugin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chai - WordPress AI Chatbot Plugin | Flowtide",
    description:
      "Free WordPress AI chatbot plugin with OpenAI GPT-4 and Google Gemini integration.",
    images: ["/social-share.webp"],
  },
};

export default function ChaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chai Chatbot",
    applicationCategory: "Plugin",
    operatingSystem: "WordPress",
    description:
      "AI-powered WordPress chatbot plugin with OpenAI GPT-4 and Google Gemini integration for intelligent customer support.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Brad Fletcher",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-20">
        <section className="relative py-24">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='rgba(4,13,89,0.3)' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 20px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal">
                <Bot className="h-4 w-4" />
                Free WordPress Plugin
              </div>
              <h1 className="mb-6 text-5xl font-bold text-zinc-900 md:text-6xl">
                Chai Chatbot
              </h1>
              <p className="mb-8 text-xl text-zinc-600">
                Transform your WordPress website with intelligent AI chatbot
                technology. Seamlessly integrate OpenAI GPT-4 and Google Gemini
                AI models for instant, context-aware customer support.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/BradleyFletcher/chai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/BradleyFletcher/chai/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-teal bg-white px-6 py-3 font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                >
                  <Download className="h-5 w-5" />
                  Download Plugin
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
                Key Features
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Dual AI Provider Support
                  </h3>
                  <p className="text-zinc-600">
                    Choose between OpenAI (GPT-4o, GPT-4o-mini, GPT-3.5-turbo)
                    and Google Gemini (1.5 Pro, 1.5 Flash) based on your needs
                    and budget.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Context-Aware Responses
                  </h3>
                  <p className="text-zinc-600">
                    Automatically learns from your website content to provide
                    accurate, relevant responses about your products, services,
                    and policies.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Comprehensive Analytics
                  </h3>
                  <p className="text-zinc-600">
                    Track conversations, monitor performance, and gain insights
                    with detailed analytics including response times and user
                    engagement.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-zinc-600">
                    Built with WordPress security best practices, secure API key
                    storage, and protection against SQL injection and XSS
                    attacks.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Multilingual Support
                  </h3>
                  <p className="text-zinc-600">
                    Communicate with global audiences in 50+ languages. The
                    chatbot automatically detects and responds in the user's
                    language.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    Easy Setup & Configuration
                  </h3>
                  <p className="text-zinc-600">
                    Intuitive 3-step setup wizard with visual model comparison,
                    real-time API testing, and cost estimation for different
                    models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
                Documentation
              </h2>

              <div className="space-y-12">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Installation
                  </h3>
                  <div className="space-y-4 text-zinc-700">
                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        Method 1: WordPress Admin Panel (Recommended)
                      </h4>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>Download the chai-chatbot.zip file from GitHub</li>
                        <li>Navigate to WordPress Admin → Plugins → Add New</li>
                        <li>Click Upload Plugin and select the zip file</li>
                        <li>Click Install Now and then Activate</li>
                        <li>Go to Chai Chatbot → Setup to configure</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        Method 2: Manual Installation
                      </h4>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>Download and extract the plugin files</li>
                        <li>
                          Upload the chai-chatbot folder to /wp-content/plugins/
                        </li>
                        <li>Activate through the Plugins menu in WordPress</li>
                        <li>Navigate to Chai Chatbot → Setup</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Getting API Keys
                  </h3>
                  <div className="space-y-4 text-zinc-700">
                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        OpenAI API Key
                      </h4>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          Visit{" "}
                          <a
                            href="https://platform.openai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-teal hover:underline"
                          >
                            platform.openai.com
                          </a>
                        </li>
                        <li>Sign up or log in to your OpenAI account</li>
                        <li>Navigate to API Keys in your profile</li>
                        <li>Click "Create new secret key"</li>
                        <li>
                          Copy the key immediately (you won't see it again)
                        </li>
                        <li>Set up billing in your account settings</li>
                      </ol>
                      <p className="mt-3 text-sm text-zinc-600">
                        Cost: Pay-as-you-go. GPT-4o-mini starts at $0.15/1M
                        input tokens.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        Google Gemini API Key
                      </h4>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          Visit{" "}
                          <a
                            href="https://aistudio.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-teal hover:underline"
                          >
                            aistudio.google.com
                          </a>
                        </li>
                        <li>Sign in with your Google account</li>
                        <li>Click "Get API Key" button</li>
                        <li>
                          Select "Create API key in new project" or use existing
                        </li>
                        <li>Copy and save your API key securely</li>
                      </ol>
                      <p className="mt-3 text-sm text-zinc-600">
                        Cost: Free tier available. Gemini 1.5 Flash is free up
                        to 15 requests/minute.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Configuration
                  </h3>
                  <div className="space-y-4 text-zinc-700">
                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        Initial Setup
                      </h4>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          Navigate to Chai Chatbot → Setup in WordPress admin
                        </li>
                        <li>
                          Choose your AI provider (OpenAI or Google Gemini)
                        </li>
                        <li>Enter your API key</li>
                        <li>
                          Select your preferred model:
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            <li>
                              GPT-4o: Most capable, best for complex queries
                            </li>
                            <li>GPT-4o-mini: Fast and cost-effective</li>
                            <li>
                              Gemini 1.5 Pro: High intelligence, multimodal
                            </li>
                            <li>
                              Gemini 1.5 Flash: Ultra-fast, free tier available
                            </li>
                          </ul>
                        </li>
                        <li>Click "Test Connection" to verify setup</li>
                        <li>Save your settings</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-6">
                      <h4 className="mb-3 font-bold text-zinc-900">
                        Context Awareness
                      </h4>
                      <p className="mb-3">
                        Enable context awareness to help your chatbot learn from
                        your website content:
                      </p>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          Navigate to Chai Chatbot → Settings → Context
                          Awareness
                        </li>
                        <li>Toggle "Include Website Content" ON</li>
                        <li>
                          Select priority pages (About, FAQ, Products, Policies)
                        </li>
                        <li>Save settings</li>
                      </ol>
                      <p className="mt-3 text-sm text-zinc-600">
                        Note: More content = higher token usage. Select only
                        essential pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
                Frequently Asked Questions
              </h2>

              <Accordion
                items={[
                  {
                    question: "How much does it cost to run the chatbot?",
                    answer: (
                      <>
                        <p className="mb-3">
                          Costs depend on your chosen AI provider and usage:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                          <li>
                            OpenAI GPT-4o-mini: ~$0.15 per 1M input tokens,
                            $0.60 per 1M output tokens
                          </li>
                          <li>
                            OpenAI GPT-4o: ~$2.50 per 1M input tokens, $10 per
                            1M output tokens
                          </li>
                          <li>
                            Google Gemini Flash: Free tier available (15 RPM),
                            then $0.075 per 1M tokens
                          </li>
                          <li>
                            Google Gemini Pro: $1.25 per 1M input tokens, $5 per
                            1M output tokens
                          </li>
                        </ul>
                        <p className="mt-3 text-sm text-zinc-600">
                          Average conversation: 500-2000 tokens depending on
                          context.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "Can I customize the chat widget appearance?",
                    answer: (
                      <p>
                        Currently, the widget uses a modern, responsive design.
                        Custom styling options are planned for future releases.
                        You can modify CSS directly if needed.
                      </p>
                    ),
                  },
                  {
                    question: "Does the chatbot work in multiple languages?",
                    answer: (
                      <p>
                        Yes! Both OpenAI and Google models support 50+
                        languages. The chatbot automatically detects and
                        responds in the user's language.
                      </p>
                    ),
                  },
                  {
                    question: "Is the chatbot GDPR compliant?",
                    answer: (
                      <p>
                        The plugin provides tools for GDPR compliance (data
                        deletion, session management), but you must update your
                        privacy policy and implement proper consent mechanisms
                        as required by your jurisdiction.
                      </p>
                    ),
                  },
                  {
                    question: "What if the chat widget doesn't appear?",
                    answer: (
                      <>
                        <p className="mb-3">Common solutions:</p>
                        <ul className="list-disc space-y-2 pl-5">
                          <li>Ensure the plugin is activated</li>
                          <li>
                            Complete the setup wizard (Chai Chatbot → Setup)
                          </li>
                          <li>Test your API connection</li>
                          <li>
                            Check browser console for JavaScript errors (F12)
                          </li>
                          <li>Try disabling other plugins temporarily</li>
                          <li>Clear your browser cache</li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    question: "Can multiple admins access the dashboard?",
                    answer: (
                      <p>
                        Yes, any WordPress user with manage_options capability
                        (typically Administrators) can access all plugin
                        features.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-zinc-900">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-zinc-600">
                Download Chai Chatbot and add intelligent AI-powered customer
                support to your WordPress site today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/BradleyFletcher/chai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/BradleyFletcher/chai/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-teal bg-white px-6 py-3 font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                >
                  <Download className="h-5 w-5" />
                  Download Plugin
                </a>
                <a
                  href="https://github.com/BradleyFletcher/chai#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700 transition-colors hover:border-zinc-400"
                >
                  <ExternalLink className="h-5 w-5" />
                  Full Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
