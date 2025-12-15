import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Code2, Database, Bot, Palette } from "lucide-react";
import { OtherServices } from "@/app/services/other-services";
import { ServiceCTA } from "@/app/services/service-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Brad Fletcher, a solo web developer with 15+ years of experience building high-quality digital solutions using AI-powered development and modern frameworks.",
  openGraph: {
    title: "About | Flowtide",
    description:
      "Learn about Brad Fletcher, a solo web developer with 15+ years of experience building high-quality digital solutions.",
    url: "https://flowtide.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24">
          {/* Wave Pattern Background */}
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
              <h1 className="mb-6 text-5xl font-bold text-zinc-900 md:text-6xl">
                About Me
              </h1>
              <p className="text-xl text-zinc-600">
                Solo developer delivering high-quality web solutions with 15
                years of experience and AI-powered efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-zinc-900">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  I'm Brad Fletcher, a solo web developer with over 15 years of
                  experience building digital solutions for businesses of all
                  sizes. My journey in web development has taken me from
                  traditional agency work to embracing the cutting edge of
                  AI-powered development.
                </p>
                <p>
                  What sets me apart is my ability to deliver enterprise-quality
                  work at accessible prices. By leveraging AI tools and modern
                  development frameworks, I can work faster and more efficiently
                  without sacrificing quality. This means you get professional
                  results without the agency price tag.
                </p>
                <p>
                  I specialize in creating performance-focused websites and
                  applications that help brands launch fast and scale cleanly.
                  Whether it's a custom WordPress site, a blazing-fast Next.js
                  application, or AI-powered automation, I bring the same level
                  of dedication and expertise to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
                What I Believe In
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-200 p-8">
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Quality First
                  </h3>
                  <p className="text-zinc-600">
                    Every project deserves the same level of attention and
                    craftsmanship, regardless of size or budget.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-8">
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Transparency
                  </h3>
                  <p className="text-zinc-600">
                    Clear communication, honest timelines, and no hidden costs.
                    You'll always know where your project stands.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-8">
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                    Innovation
                  </h3>
                  <p className="text-zinc-600">
                    Staying ahead of the curve with the latest technologies and
                    best practices to give you a competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
                Technical Expertise
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal">
                    <Code2 className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-zinc-900">
                    Frontend Development
                  </h3>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal"></span>
                      <span>React & Next.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal"></span>
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal"></span>
                      <span>TailwindCSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal"></span>
                      <span>Responsive Design</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-zinc-900">
                    Backend & CMS
                  </h3>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue"></span>
                      <span>WordPress Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue"></span>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue"></span>
                      <span>Database Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue"></span>
                      <span>API Integration</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-zinc-900">
                    AI & Automation
                  </h3>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"></span>
                      <span>OpenAI & Claude Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"></span>
                      <span>Workflow Automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"></span>
                      <span>Chatbot Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"></span>
                      <span>Content Generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="About" />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}
