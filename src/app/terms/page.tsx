import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Flowtide. Read our terms and conditions for using our web development services.",
  openGraph: {
    title: "Terms of Service | Flowtide",
    description:
      "Terms of Service for Flowtide. Read our terms and conditions for using our web development services.",
    url: "https://flowtide.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
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
                Terms of Service
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
                  Agreement to Terms
                </h2>
                <p className="text-lg text-zinc-600">
                  By accessing or using the Flowtide website and services, you
                  agree to be bound by these Terms of Service. If you disagree
                  with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Services
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    Flowtide provides web development services including but not
                    limited to:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Custom website design and development</li>
                    <li>WordPress development and customization</li>
                    <li>Next.js application development</li>
                    <li>Mobile app development</li>
                    <li>AI integration services</li>
                    <li>Cloud hosting and maintenance</li>
                    <li>Consulting and technical support</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Project Scope and Deliverables
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    All projects will be defined by a written agreement or
                    statement of work that includes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Project scope and deliverables</li>
                    <li>Timeline and milestones</li>
                    <li>Pricing and payment terms</li>
                    <li>Revision policy</li>
                    <li>Ownership and intellectual property rights</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Payment Terms
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>Unless otherwise agreed in writing:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>A deposit of 50% is required before work begins</li>
                    <li>
                      The remaining balance is due upon project completion
                    </li>
                    <li>Invoices are payable within 14 days of receipt</li>
                    <li>
                      Late payments may incur interest charges of 1.5% per month
                    </li>
                    <li>
                      We reserve the right to suspend services for non-payment
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Client Responsibilities
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>Clients are responsible for:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Providing timely feedback and approvals</li>
                    <li>Supplying necessary content, materials, and access</li>
                    <li>
                      Ensuring all provided content is legally owned or licensed
                    </li>
                    <li>Maintaining backups of their data</li>
                    <li>Complying with all applicable laws and regulations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    Upon full payment, clients receive ownership of the final
                    deliverables. However:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      We retain the right to display work in our portfolio
                    </li>
                    <li>
                      Pre-existing code, frameworks, and tools remain our
                      property
                    </li>
                    <li>
                      Third-party licenses and components are subject to their
                      respective terms
                    </li>
                    <li>
                      Source code and development files may be provided upon
                      request
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Revisions and Changes
                </h2>
                <p className="text-lg text-zinc-600">
                  Each project includes a specified number of revision rounds.
                  Additional revisions or scope changes may incur extra charges.
                  Major changes to project scope will require a new agreement
                  and additional payment.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Timeline and Delays
                </h2>
                <p className="text-lg text-zinc-600">
                  Project timelines are estimates and may be affected by factors
                  including client feedback delays, scope changes, or unforeseen
                  technical challenges. We will communicate any timeline changes
                  promptly.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Warranties and Disclaimers
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>We warrant that:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Services will be performed with professional care and
                      skill
                    </li>
                    <li>
                      Deliverables will substantially conform to agreed
                      specifications
                    </li>
                    <li>We have the right to provide the services</li>
                  </ul>
                  <p className="mt-4">
                    EXCEPT AS EXPRESSLY PROVIDED, ALL SERVICES ARE PROVIDED "AS
                    IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Limitation of Liability
                </h2>
                <p className="text-lg text-zinc-600">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLOWTIDE SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. OUR
                  TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE
                  SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Termination
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    Either party may terminate a project with written notice.
                    Upon termination:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Client must pay for all work completed to date</li>
                    <li>
                      We will deliver work completed up to the termination date
                    </li>
                    <li>Deposits are non-refundable</li>
                    <li>Outstanding invoices remain due</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Confidentiality
                </h2>
                <p className="text-lg text-zinc-600">
                  Both parties agree to keep confidential any proprietary
                  information shared during the course of the project. This
                  obligation survives termination of the agreement.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Indemnification
                </h2>
                <p className="text-lg text-zinc-600">
                  Client agrees to indemnify and hold Flowtide harmless from any
                  claims arising from client-provided content, materials, or
                  instructions, or from client's use of the deliverables.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Governing Law
                </h2>
                <p className="text-lg text-zinc-600">
                  These Terms shall be governed by and construed in accordance
                  with applicable local laws, without regard to conflict of law
                  principles.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Changes to Terms
                </h2>
                <p className="text-lg text-zinc-600">
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective immediately upon posting to the
                  website. Continued use of our services constitutes acceptance
                  of modified terms.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  Contact Information
                </h2>
                <div className="text-lg text-zinc-600">
                  <p className="mb-4">
                    For questions about these Terms of Service, please contact:
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
