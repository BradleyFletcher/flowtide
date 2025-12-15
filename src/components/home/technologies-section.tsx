"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  Search,
  Sparkles,
  Cloud,
  Bot,
  Smartphone,
  FileText,
  Mail,
} from "lucide-react";
import { TechCard } from "@/components/ui/tech-card";

const technologies = [
  {
    title: "WordPress",
    description:
      "Custom designs built for your needs. No templates, no bloat—just clean development and custom plugins.",
    bgColor: "#4194b0", // Blue
    video: "/wordpress.mp4",
    icon: ArrowRight,
    backContent:
      "Custom WordPress development tailored to your brand. From design to deployment, I create high-performance sites that stand out.",
    size: "large", // Spans 2 cols, 2 rows
  },
  {
    title: "Next.js",
    description:
      "The React framework powering the modern web. Blazing-fast performance and seamless deployment.",
    bgColor: "#040d59", // Deep
    icon: Code,
    backContent:
      "Build modern web applications with Next.js. Lightning-fast, SEO-friendly, and built to scale with your business.",
    size: "medium", // Spans 1 col, 1 row
  },
  {
    title: "Ecommerce",
    description:
      "Powerful online stores on WooCommerce and Shopify with seamless checkout and conversion-focused design.",
    bgColor: "#77d4c1", // Teal
    icon: ShoppingCart,
    backContent:
      "Launch your online store with confidence. I handle everything from product catalogs to payment processing and beyond.",
    size: "medium", // Spans 1 col, 1 row
  },
  {
    title: "SEO",
    description:
      "SEO and scalability built in from day one. Clean code and search-friendly architecture as standard.",
    bgColor: "#b0f2bf", // Mint
    icon: Search,
    image: "/searching-seo.webp",
    backContent:
      "Your website built right from the start. Optimized code, fast loading, and search-friendly architecture included as standard.",
    size: "wide", // Spans 2 cols, 1 row
  },
  {
    title: "AI SEO",
    description:
      "Semantic markup and clear architecture help your content surface in AI platform responses.",
    bgColor: "#b0f2bf",
    icon: Sparkles,
    backContent:
      "Future-proof your content for AI discovery. Structured data and semantic markup that helps AI platforms find and reference your work.",
    size: "medium", // Spans 1 col, 1 row
  },
  {
    title: "Hosting",
    description:
      "Cloud hosting on AWS, Azure, and Google Cloud. Scalable infrastructure with dedicated server options.",
    bgColor: "#1e4f9e", // Navy
    icon: Cloud,
    backContent:
      "Reliable cloud infrastructure tailored to your needs. From managed cloud platforms to custom server configurations, I handle deployment and scaling.",
    size: "medium", // Spans 1 col, 1 row
  },
  {
    title: "AI Integration",
    description:
      "Intelligent automation with OpenAI, Claude, and Gemini. Chatbots and workflow automation that enhance user experience.",
    bgColor: "#040d59", // Deep
    icon: Bot,
    backContent:
      "Add AI-powered features to your platform. Smart chatbots, automated support, content generation, and custom AI workflows using industry-leading APIs.",
    size: "tall", // Spans 1 col, 2 rows
  },
  {
    title: "Mobile Apps",
    description:
      "Native iOS and Android apps with React Native and Flutter. Cross-platform or fully native solutions.",
    bgColor: "#77d4c1", // Teal
    video: "/development.mp4",
    icon: Smartphone,
    backContent:
      "Launch your mobile presence across iOS and Android. From concept to App Store deployment, I build fast, reliable mobile apps that users love.",
    size: "wide", // Spans 2 cols, 1 row
  },
  {
    title: "Request Proposal",
    description:
      "Ready to start your project? Get a detailed proposal tailored to your needs.",
    bgColor: "#b0f2bf", // Mint
    icon: FileText,
    backContent:
      "Share your vision and I'll create a comprehensive proposal with timeline, scope, and investment details.",
    size: "medium", // Spans 1 col, 1 row
  },
  {
    title: "Get in Touch",
    description:
      "Have questions? Let's talk about how I can help bring your ideas to life.",
    bgColor: "#4194b0", // Blue
    icon: Mail,
    backContent:
      "Reach out anytime. I'm here to answer questions, discuss your project, or explore possibilities together.",
    size: "medium", // Spans 1 col, 1 row
  },
];

export const TechnologiesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid auto-rows-[350px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ gridAutoFlow: "dense" }}
        >
          {technologies.map((tech) => {
            // Map size to grid classes for masonry layout
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2", // 2x2
              wide: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1", // 2x1
              tall: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2", // 1x2
              medium: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1", // 1x1
            };

            const colSpan = tech.size
              ? sizeClasses[tech.size as keyof typeof sizeClasses]
              : "";

            return (
              <motion.div key={tech.title} variants={item} className={colSpan}>
                <TechCard
                  title={tech.title}
                  description={tech.description}
                  bgColor={tech.bgColor}
                  icon={tech.icon}
                  video={tech.video}
                  image={tech.image}
                  href={`/services/${tech.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  backContent={tech.backContent}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
