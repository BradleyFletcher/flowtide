"use client";

import Link from "next/link";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface OtherServicesProps {
  currentService: string;
}

const allServices: Service[] = [
  {
    title: "Web Design",
    description:
      "Beautiful, user-focused designs that convert visitors into customers.",
    href: "/services/web-design",
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress solutions built for your needs.",
    href: "/services/wordpress",
  },
  {
    title: "Next.js Development",
    description: "Blazing-fast performance and seamless deployment.",
    href: "/services/next.js",
  },
  {
    title: "Cloud Hosting",
    description:
      "Reliable cloud infrastructure on AWS, Azure, and Google Cloud.",
    href: "/services/hosting",
  },
  {
    title: "Mobile App Development",
    description: "Native iOS and Android apps with React Native and Flutter.",
    href: "/services/mobile-apps",
  },
  {
    title: "AI Integration",
    description: "Intelligent automation with OpenAI, Claude, and Gemini.",
    href: "/services/ai-integration",
  },
];

export const OtherServices = ({ currentService }: OtherServicesProps) => {
  const otherServices = allServices.filter(
    (service) => service.title !== currentService
  );

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
            Other Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-zinc-200 p-6 transition-all hover:border-brand-teal hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-brand-blue">
                  {service.title}
                </h3>
                <p className="text-zinc-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
