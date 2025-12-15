import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your web development project. I typically respond within 24 hours. Available for WordPress, Next.js, and custom web solutions.",
  openGraph: {
    title: "Contact | Flowtide",
    description:
      "Get in touch to discuss your web development project. I typically respond within 24 hours.",
    url: "https://flowtide.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
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
                Get in Touch
              </h1>
              <p className="text-xl text-zinc-600">
                Have a project in mind? Let's discuss how I can help bring your
                vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <ContactForm />

                {/* Contact Information */}
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-zinc-900">
                    Contact Information
                  </h2>
                  <p className="mb-8 text-lg text-zinc-600">
                    Prefer to reach out directly? You can contact me through any
                    of the following channels.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-zinc-900">
                          Email
                        </h3>
                        <a
                          href="mailto:brad@flowtide.ai"
                          className="text-zinc-600 transition-colors hover:text-brand-blue"
                        >
                          brad@flowtide.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-zinc-900">
                          Phone
                        </h3>
                        <a
                          href="tel:+1234567890"
                          className="text-zinc-600 transition-colors hover:text-brand-blue"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-zinc-900">
                          Location
                        </h3>
                        <p className="text-zinc-600">
                          Remote - Available Worldwide
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 rounded-lg bg-zinc-50 p-6">
                    <h3 className="mb-3 text-xl font-bold text-zinc-900">
                      Response Time
                    </h3>
                    <p className="text-zinc-600">
                      I typically respond to all inquiries within 24 hours
                      during business days. For urgent matters, please mention
                      it in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
