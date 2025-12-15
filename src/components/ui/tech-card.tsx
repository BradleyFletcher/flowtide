"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { BrandButton } from "@/components/ui/brand-button";

export interface TechCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: LucideIcon;
  video?: string;
  image?: string;
  href?: string;
  onLearnMore?: () => void;
  isLarge?: boolean;
  backContent?: string;
}

export const TechCard = ({
  title,
  description,
  bgColor,
  icon: Icon,
  video,
  image,
  href,
  onLearnMore,
  isLarge = false,
  backContent,
}: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full w-full overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />

      {video && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {image && !video && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

      {/* Front Content */}
      <motion.div
        className="absolute inset-0 flex h-full flex-col justify-between p-10 text-white"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div>
          <h3 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed opacity-95 md:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Back Content */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-3xl bg-brand-deep"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isHovered ? "0%" : "-100%",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        {/* Wave Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='rgba(255,255,255,0.3)' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 20px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center p-10 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h3>
          <p className="mb-6 text-sm leading-relaxed opacity-90 md:text-base">
            {backContent ||
              "Discover how we can help transform your digital presence with our expertise."}
          </p>
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isHovered ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            }
            transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Shine effect overlay */}
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "200%" : "-100%" }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {href ? (
              <Link href={href}>
                <BrandButton
                  variant="ghost"
                  size="md"
                  iconPosition="right"
                  icon={<Icon />}
                  disableHover={true}
                >
                  Learn More
                </BrandButton>
              </Link>
            ) : (
              <BrandButton
                variant="ghost"
                size="md"
                iconPosition="right"
                icon={<Icon />}
                onClick={onLearnMore}
                disableHover={true}
              >
                Learn More
              </BrandButton>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
