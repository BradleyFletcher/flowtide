"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  const wordGroups = [
    { words: "I help brands", highlight: false },
    { words: "launch fast,", highlight: true },
    { words: "scale cleanly", highlight: false },
    { words: "and stay ahead with", highlight: false },
    { words: "performance-focused", highlight: true },
    { words: "web solutions.", highlight: false },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const groupVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] w-full flex-col items-center justify-center text-center">
      {/* Wave Pattern Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='rgba(4,13,89,0.3)' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 20px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.p
          className="relative z-10 w-full text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {wordGroups.map((group, index) => {
            // Split "launch fast," to apply gradient only to text, not comma
            if (group.highlight && group.words.endsWith(",")) {
              const textWithoutComma = group.words.slice(0, -1);
              return (
                <motion.span key={index} variants={groupVariant}>
                  <span className="bg-gradient-to-r from-brand-mint to-brand-teal bg-clip-text text-transparent">
                    {textWithoutComma}
                  </span>
                  <span className="text-zinc-900">,</span>{" "}
                </motion.span>
              );
            }

            return (
              <motion.span
                key={index}
                variants={groupVariant}
                className={
                  group.highlight
                    ? "bg-gradient-to-r from-brand-mint to-brand-teal bg-clip-text text-transparent"
                    : "text-zinc-900"
                }
              >
                {group.words}{" "}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
    </section>
  );
};
