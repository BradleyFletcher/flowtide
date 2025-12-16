"use client";

import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "@/components/ui/icon-button";
import { BrandButton } from "@/components/ui/brand-button";
import Link from "next/link";
import { useState } from "react";

interface FullPageMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "WordPress Development", href: "/services/wordpress" },
      { label: "Next.js Development", href: "/services/next.js" },
      { label: "Cloud Hosting", href: "/services/hosting" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "AI Integration", href: "/services/ai-integration" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const FullPageMenu = ({ isOpen, onClose }: FullPageMenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-gradient-to-br from-brand-mint to-brand-teal transition-transform duration-500 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Header with close button */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-brand-deep/10 bg-gradient-to-r from-brand-mint/95 to-brand-teal/95 px-4 py-4 backdrop-blur-sm md:px-8">
        <div className="text-lg font-bold text-brand-deep md:text-xl">Menu</div>
        <IconButton
          icon={X}
          onClick={onClose}
          aria-label="Close menu"
          className="text-brand-deep"
        />
      </div>

      {/* Scrollable content area */}
      <div className="h-full overflow-y-auto pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 md:px-8 md:py-12">
          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Left Column - Navigation */}
            <nav className="flex flex-col justify-start lg:justify-center">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div
                    key={item.href}
                    className="border-b border-brand-deep/10 pb-2 last:border-0"
                  >
                    {"submenu" in item && item.submenu ? (
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="group flex w-full items-center justify-between py-3 text-left transition-all hover:pl-2"
                      >
                        <span className="text-2xl font-bold text-brand-deep transition-colors group-hover:text-brand-blue md:text-3xl lg:text-4xl">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-6 w-6 shrink-0 text-brand-deep transition-all duration-300 group-hover:text-brand-blue md:h-7 md:w-7",
                            expandedMenu === item.label && "rotate-180"
                          )}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 text-2xl font-bold text-brand-deep transition-all hover:pl-2 hover:text-brand-blue md:text-3xl lg:text-4xl"
                      >
                        {item.label}
                      </a>
                    )}
                    {"submenu" in item && item.submenu && (
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          expandedMenu === item.label
                            ? "max-h-96 pb-4 pt-2 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="ml-4 space-y-2 border-l-2 border-brand-deep/20 pl-4">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              onClick={onClose}
                              className="block py-2 text-base font-medium text-brand-deep/70 transition-all hover:pl-2 hover:text-brand-deep md:text-lg"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Column - Contact/CTA */}
            <div className="flex flex-col justify-start gap-8 pb-8 lg:justify-center lg:pb-0">
              <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
                <h3 className="mb-3 text-xl font-bold text-brand-deep md:text-2xl">
                  Let's Work Together
                </h3>
                <p className="mb-6 text-base text-brand-deep/80 md:text-lg">
                  Ready to start your project? Get in touch and let's create
                  something amazing.
                </p>
                <Link href="/contact" onClick={onClose}>
                  <BrandButton
                    variant="dark"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Get Started
                  </BrandButton>
                </Link>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand-deep">
                  Contact Info
                </h4>
                <div className="space-y-3 text-brand-deep/80">
                  <a
                    href="mailto:brad@flowtide.ai"
                    className="flex items-center gap-2 text-base transition-colors hover:text-brand-deep"
                  >
                    <span className="text-sm">✉</span>
                    brad@flowtide.ai
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-base transition-colors hover:text-brand-deep"
                  >
                    <span className="text-sm">☎</span>
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
