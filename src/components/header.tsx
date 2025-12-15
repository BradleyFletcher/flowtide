"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import { IconButton } from "@/components/ui/icon-button";
import { FullPageMenu } from "@/components/full-page-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-40"
        initial={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.8)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <IconButton
            icon={Menu}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="text-zinc-900"
          />

          <div className="flex-1" />

          <Image
            src="/icon-128.png"
            alt="Flowtide"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </div>
      </motion.header>

      <FullPageMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
