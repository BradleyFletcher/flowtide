import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Flowtide. Learn how we collect, use, and protect your personal information when using our web development services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Flowtide",
    description:
      "Privacy Policy for Flowtide. Learn how we collect, use, and protect your personal information.",
    url: "https://flowtide.com/privacy",
    type: "website",
    images: [
      {
        url: "/social-share.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Flowtide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Flowtide",
    description:
      "Privacy Policy for Flowtide. Learn how we collect, use, and protect your personal information.",
    images: ["/social-share.webp"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='rgba(4,13,89,0.3)' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 20px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 text-5xl font-bold text-zinc-900 md:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-lg text-zinc-600">
                Last updated: December 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Introduction
                </h2>
                <p className="text-lg text-zinc-600">
                  Flowtide ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website flowtide.com or use our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                      Personal Information
                    </h3>
                    <p>
                      We may collect personal information that you voluntarily
                      provide to us when you:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-2">
                      <li>Contact us through our contact form</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote or consultation</li>
                      <li>Engage our services</li>
                    </ul>
                    <p className="mt-2">
                      This information may include your name, email address,
                      phone number, company name, and project details.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                      Automatically Collected Information
                    </h3>
                    <p>
                      When you visit our website, we may automatically collect
                      certain information about your device, including:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-2">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  How We Use Your Information
                </h2>
                <div className="space-y-2 text-lg text-zinc-600">
                  <p>We use the information we collect to:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Respond to your inquiries and provide customer support
                    </li>
                    <li>Process and fulfill service requests</li>
                    <li>
                      Send you updates, newsletters, and marketing
                      communications (with your consent)
                    </li>
                    <li>Improve our website and services</li>
                    <li>Analyze website usage and trends</li>
                    <li>Prevent fraud and enhance security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information with:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors
                      who assist us in operating our website and providing
                      services (e.g., hosting providers, email services)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or to protect our rights, property, or safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with
                      any merger, sale, or transfer of our business
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-lg text-zinc-600">
                  We use cookies and similar tracking technologies to track
                  activity on our website and store certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  website.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Data Security
                </h2>
                <p className="text-lg text-zinc-600">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Your Rights
                </h2>
                <div className="space-y-2 text-lg text-zinc-600">
                  <p>
                    Depending on your location, you may have the following
                    rights:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your information</li>
                    <li>Data portability</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at
                    brad@flowtide.ai
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Third-Party Links
                </h2>
                <p className="text-lg text-zinc-600">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Children's Privacy
                </h2>
                <p className="text-lg text-zinc-600">
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you become aware that a child has provided us
                  with personal information, please contact us, and we will take
                  steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-lg text-zinc-600">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date. You are
                  advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Contact Us
                </h2>
                <div className="text-lg text-zinc-600">
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:brad@flowtide.ai"
                        className="text-brand-blue hover:text-brand-navy"
                      >
                        brad@flowtide.ai
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://flowtide.com"
                        className="text-brand-blue hover:text-brand-navy"
                      >
                        flowtide.com
                      </a>
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
