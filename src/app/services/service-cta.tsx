"use client";

import Link from "next/link";
import { BrandButton } from "@/components/ui/brand-button";

export const ServiceCTA = () => {
  return (
    <section className="bg-gradient-to-br from-brand-mint to-brand-teal py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-brand-deep md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-xl text-brand-deep/80">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <BrandButton variant="dark" size="lg">
                Get in Touch
              </BrandButton>
            </Link>
            <Link href="/services">
              <BrandButton variant="dark" size="lg">
                View All Services
              </BrandButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
