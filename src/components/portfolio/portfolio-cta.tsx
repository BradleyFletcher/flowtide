import Link from "next/link";
import { BrandButton } from "@/components/ui/brand-button";
import { ArrowRight, Briefcase } from "lucide-react";

export const PortfolioCTA = () => {
  return (
    <section className="bg-linear-to-br from-brand-mint via-brand-teal to-brand-blue py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Let's discuss how I can help bring your vision to life with a custom
            solution.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <BrandButton
                variant="light"
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Get in Touch
              </BrandButton>
            </Link>
            <Link href="/portfolio">
              <BrandButton
                variant="dark"
                size="lg"
                icon={<Briefcase />}
                iconPosition="left"
              >
                View All Projects
              </BrandButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
