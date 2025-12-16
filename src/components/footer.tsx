import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "WordPress Development", href: "/services/wordpress" },
      { label: "Next.js Development", href: "/services/next.js" },
      { label: "Cloud Hosting", href: "/services/hosting" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "AI Integration", href: "/services/ai-integration" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-brand-deep">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/icon-128.png"
                alt="Flowtide"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h3 className="text-3xl font-bold text-white">Flowtide</h3>
            </div>
            <p className="mb-6 text-lg text-white/90">
              Performance-focused web solutions that help brands launch fast and
              scale cleanly.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white/80">
              © {currentYear} Flowtide. All rights reserved.
            </p>
            <p className="text-white/80">
              Amesbury, Salisbury, Wiltshire, United Kingdom SP47TX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
