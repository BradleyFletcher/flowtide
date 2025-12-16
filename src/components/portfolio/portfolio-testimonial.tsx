import { Quote } from "lucide-react";

interface PortfolioTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const PortfolioTestimonial = ({
  quote,
  author,
  role,
  company,
}: PortfolioTestimonialProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto mb-6 h-12 w-12 text-brand-teal" />

          <blockquote className="mb-8 text-2xl font-medium text-zinc-900 md:text-3xl">
            "{quote}"
          </blockquote>

          <div>
            <p className="text-lg font-semibold text-zinc-900">{author}</p>
            <p className="text-zinc-700">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
