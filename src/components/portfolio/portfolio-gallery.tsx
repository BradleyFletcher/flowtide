import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PortfolioGalleryProps {
  images: GalleryImage[];
}

export const PortfolioGallery = ({ images }: PortfolioGalleryProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 md:text-4xl">
            Gallery
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-zinc-200"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {image.caption && (
                  <div className="bg-zinc-50 p-4">
                    <p className="text-sm text-zinc-600">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
