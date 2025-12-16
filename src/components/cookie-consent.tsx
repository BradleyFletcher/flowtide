"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandButton } from "@/components/ui/brand-button";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isClosing ? 100 : 0, opacity: isClosing ? 0 : 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-mint to-brand-teal p-6 shadow-2xl md:p-8">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-brand-deep transition-colors hover:text-brand-navy"
              aria-label="Close cookie consent"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 pr-8">
                <div className="mb-3 flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-brand-deep" />
                  <h3 className="text-lg font-bold text-brand-deep md:text-xl">
                    We Value Your Privacy
                  </h3>
                </div>
                <p className="text-sm text-brand-deep/80 md:text-base">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking "Accept
                  All", you consent to our use of cookies.{" "}
                  <a
                    href="/privacy"
                    className="font-semibold underline hover:text-brand-navy"
                  >
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                <button
                  onClick={handleDecline}
                  className={cn(
                    "rounded-full border-2 border-brand-deep px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-deep transition-colors hover:bg-brand-deep/10",
                    "md:px-8 md:py-3"
                  )}
                >
                  Decline
                </button>
                <BrandButton
                  variant="dark"
                  size="md"
                  onClick={handleAccept}
                  className="whitespace-nowrap"
                >
                  Accept All
                </BrandButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
