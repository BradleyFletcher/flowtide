interface DetailItem {
  label: string;
  value: string;
}

interface PortfolioDetailsProps {
  details: DetailItem[];
}

export const PortfolioDetails = ({ details }: PortfolioDetailsProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 md:text-4xl">
            Project Details
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6"
              >
                <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {detail.label}
                </dt>
                <dd className="text-lg font-medium text-zinc-900">
                  {detail.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
