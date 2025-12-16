import { ReactNode } from "react";

interface PortfolioSectionProps {
  title: string;
  children: ReactNode;
  background?: "white" | "gray";
}

export const PortfolioSection = ({
  title,
  children,
  background = "white",
}: PortfolioSectionProps) => {
  const bgClass = background === "gray" ? "bg-zinc-50" : "bg-white";

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 md:text-4xl">
            {title}
          </h2>
          <div className="text-lg text-zinc-600">{children}</div>
        </div>
      </div>
    </section>
  );
};
