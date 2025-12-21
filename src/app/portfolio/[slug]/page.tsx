import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioDetails } from "@/components/portfolio/portfolio-details";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { PortfolioFeatures } from "@/components/portfolio/portfolio-features";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { PortfolioTestimonial } from "@/components/portfolio/portfolio-testimonial";
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Portfolio data - you can move this to a separate file later
const portfolioItems = {
  "super-guttering": {
    title: "Super Guttering Services",
    category: "WordPress",
    url: "https://superguttering.co.uk/",
    description:
      "Professional WordPress website for a guttering services company with custom design and lead generation features.",
    tags: ["WordPress", "Custom Theme", "SEO", "Lead Generation"],
    details: [
      { label: "Client", value: "Super Guttering Services" },
      { label: "Industry", value: "Home Services" },
      { label: "Timeline", value: "1 week" },
      { label: "Platform", value: "WordPress" },
      { label: "Services", value: "Design & Development" },
      { label: "Year", value: "2025" },
    ],
    challenge:
      "Super Guttering Services needed a professional online presence to showcase their services and generate leads. They required a fast, mobile-friendly website with easy content management.",
    solution:
      "Built a custom WordPress theme with a focus on conversion optimization. Implemented a streamlined quote request system, integrated Google Maps for service areas, and optimized for local SEO.",
    features: [
      "Custom WordPress theme development",
      "Mobile-responsive design",
      "Lead capture forms with email notifications",
      "Service area mapping with Google Maps integration",
      "Integration of client's own drone footage into design",
      "Before/after photo gallery",
      "Customer testimonials section",
      "Local SEO optimization",
      "Fast page load times (< 2 seconds)",
      "Easy-to-use admin panel for content updates",
      "Contact form with spam protection",
    ],
    images: [],
    testimonial: {
      quote:
        "The new website has transformed our business. We're getting 3x more leads than before, and customers love how easy it is to request a quote.",
      author: "Karl West",
      role: "Owner",
      company: "Super Guttering Services",
    },
  },
  "civic-society": {
    title: "Civic Society Demo",
    category: "Next.js",
    url: "https://civicsociety.flowtide.ai",
    description:
      "Modern web application demo for civic societies in the UK, showcasing membership management and community engagement features.",
    tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    details: [
      { label: "Client", value: "Demo Project" },
      { label: "Industry", value: "Community Organizations" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Platform", value: "Next.js 15" },
      { label: "Services", value: "Full-Stack Development" },
      { label: "Year", value: "2025" },
    ],
    challenge:
      "Civic societies in the UK need modern digital tools to manage memberships, organize events, and engage with their communities. Traditional solutions are often outdated, difficult to use, or lack the features needed for effective community management.",
    solution:
      "Built a modern, full-stack web application using Next.js 15 with TypeScript, Supabase for backend services, and TailwindCSS for a clean, responsive design. The demo showcases key features that civic societies need while maintaining simplicity and ease of use.",
    features: [
      "Modern, responsive UI built with Next.js 15 and TailwindCSS",
      "TypeScript for type-safe development",
      "Supabase integration for authentication and database",
      "Membership management system",
      "Event organization and calendar features",
      "Community engagement tools",
      "Mobile-first responsive design",
      "Fast page loads with Next.js optimization",
      "Secure authentication and authorization",
      "Real-time data updates",
      "Admin dashboard for society management",
    ],
    images: [],
    testimonial: undefined,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems[slug as keyof typeof portfolioItems];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Flowtide Portfolio`,
      description: project.description,
      url: `https://flowtide.com/portfolio/${slug}`,
      type: "website",
      images: [
        {
          url: "/social-share.webp",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Flowtide Portfolio`,
      description: project.description,
      images: ["/social-share.webp"],
    },
  };
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems[slug as keyof typeof portfolioItems];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <PortfolioHero
          title={project.title}
          category={project.category}
          url={project.url}
          description={project.description}
          image=""
          tags={project.tags}
        />

        <PortfolioDetails details={project.details} />

        <PortfolioSection title="The Challenge" background="gray">
          <p>{project.challenge}</p>
        </PortfolioSection>

        <PortfolioSection title="The Solution">
          <p>{project.solution}</p>
        </PortfolioSection>

        <PortfolioFeatures features={project.features} />

        {project.images.length > 0 && (
          <PortfolioGallery images={project.images} />
        )}

        {project.testimonial && (
          <PortfolioTestimonial
            quote={project.testimonial.quote}
            author={project.testimonial.author}
            role={project.testimonial.role}
            company={project.testimonial.company}
          />
        )}

        <PortfolioCTA />
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(portfolioItems).map((slug) => ({
    slug,
  }));
}
