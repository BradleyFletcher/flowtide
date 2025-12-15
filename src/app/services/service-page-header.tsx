"use client";

interface ServicePageHeaderProps {
  title: string;
  description: string;
}

export const ServicePageHeader = ({
  title,
  description,
}: ServicePageHeaderProps) => {
  return (
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
            {title}
          </h1>
          <p className="text-xl text-zinc-600">{description}</p>
        </div>
      </div>
    </section>
  );
};
