import { CheckCircle2 } from "lucide-react";

interface PortfolioFeaturesProps {
  features: string[];
}

export const PortfolioFeatures = ({ features }: PortfolioFeaturesProps) => {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 md:text-4xl">
            What We Delivered
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-lg bg-white p-4"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" />
                <span className="text-lg text-zinc-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
