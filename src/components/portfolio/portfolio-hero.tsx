import Link from "next/link";
import { BrandButton } from "@/components/ui/brand-button";
import { ExternalLink } from "lucide-react";

interface PortfolioHeroProps {
  title: string;
  category: string;
  url?: string;
  description: string;
  image: string;
  tags?: string[];
}

export const PortfolioHero = ({
  title,
  category,
  url,
  description,
  image,
  tags = [],
}: PortfolioHeroProps) => {
  return (
    <section className="relative bg-zinc-50 py-24">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='rgba(4,13,89,0.3)' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 20px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <BrandButton
                  variant="dark"
                  size="sm"
                  icon={<ExternalLink />}
                  iconPosition="right"
                >
                  Visit Site
                </BrandButton>
              </a>
            ) : (
              <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-blue">
                {category}
              </span>
            )}
          </div>

          <h1 className="mb-6 text-5xl font-bold text-zinc-900 md:text-6xl">
            {title}
          </h1>

          <p className="mb-8 text-xl text-zinc-600 md:max-w-3xl">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
