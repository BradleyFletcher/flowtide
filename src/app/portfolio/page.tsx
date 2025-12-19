import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { BrandButton } from "@/components/ui/brand-button";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View my portfolio of web development projects including WordPress websites, Next.js applications, and custom web solutions for businesses worldwide.",
  keywords: [
    "web development portfolio",
    "WordPress projects",
    "Next.js projects",
    "web design examples",
    "developer portfolio",
    "case studies",
  ],
  openGraph: {
    title: "Portfolio - Web Development Projects | Flowtide",
    description:
      "View my portfolio of web development projects including WordPress websites, Next.js applications, and custom web solutions.",
    url: "https://flowtide.com/portfolio",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Flowtide Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Web Development Projects | Flowtide",
    description:
      "View my portfolio of web development projects including WordPress websites, Next.js applications, and custom web solutions.",
    images: ["/social-share.webp"],
  },
};

const projects = [
  {
    id: 1,
    title: "Super Guttering Services",
    category: "WordPress",
    description:
      "Professional WordPress website for a guttering services company with custom design and lead generation features.",
    image: "/portfolio/super-guttering-services.png",
    url: "https://superguttering.co.uk/",
    slug: "super-guttering",
    tags: ["WordPress", "Custom Theme", "SEO", "Lead Generation"],
  },
  {
    id: 2,
    title: "Chai Chatbot",
    category: "WordPress Plugin",
    description:
      "Free AI-powered WordPress chatbot plugin with OpenAI GPT-4 and Google Gemini integration for intelligent customer support.",
    image: "/portfolio/chai.png",
    url: "https://github.com/BradleyFletcher/chai",
    slug: "chai",
    caseStudyLink: "/chai",
    tags: ["WordPress", "AI", "OpenAI", "Gemini", "Open Source"],
  },
];

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio",
    description:
      "View my portfolio of web development projects including WordPress websites, Next.js applications, and custom web solutions.",
    url: "https://flowtide.com/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: project.url,
          image: `https://flowtide.com${project.image}`,
          genre: project.category,
        },
      })),
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
                Portfolio
              </h1>
              <p className="text-xl text-zinc-600">
                A selection of recent projects showcasing my work across web
                development, AI integration, and cloud infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-lg border border-zinc-200 transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden bg-zinc-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-2 text-sm font-semibold text-brand-blue">
                        {project.category}
                      </p>
                      <h3 className="mb-3 text-2xl font-bold text-zinc-900">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-zinc-600">
                        {project.description}
                      </p>
                      <div className="mb-4 flex gap-3">
                        <Link
                          href={
                            project.caseStudyLink ||
                            `/portfolio/${project.slug}`
                          }
                        >
                          <BrandButton variant="primary" size="sm">
                            View Case Study
                          </BrandButton>
                        </Link>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BrandButton
                              variant="dark"
                              size="sm"
                              icon={<ExternalLink />}
                              iconPosition="right"
                            >
                              Visit Site
                            </BrandButton>
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-brand-mint to-brand-teal py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-brand-deep md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-xl text-brand-deep/80">
                Let's discuss how I can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-full bg-brand-deep px-10 py-4 text-base font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-navy"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
