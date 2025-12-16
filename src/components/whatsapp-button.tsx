"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile devices
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = "447990592141";
  const message = encodeURIComponent(
    "Hi, I'd like to discuss a project with you."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* WhatsApp Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] p-3 shadow-lg">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={64}
            height={64}
            className="h-full w-full brightness-0 invert"
          />
        </div>

        {/* Online indicator with pulse animation */}
        <span className="absolute bottom-0 right-0 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"></span>
        </span>
      </div>
    </a>
  );
};
