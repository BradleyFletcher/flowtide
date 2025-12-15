import type { Metadata } from "next";
import "./globals.css";

const googleSans = {
  variable: "--font-google-sans",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flowtide.com"),
  title: {
    default: "Flowtide - Performance-Focused Web Solutions",
    template: "%s | Flowtide",
  },
  description:
    "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications. Specializing in WordPress, Next.js, AI integration, and performance optimization.",
  keywords: [
    "web developer",
    "WordPress development",
    "Next.js development",
    "web design",
    "AI integration",
    "mobile app development",
    "cloud hosting",
    "freelance developer",
    "custom websites",
  ],
  authors: [{ name: "Brad Fletcher" }],
  creator: "Brad Fletcher",
  publisher: "Flowtide",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowtide.com",
    siteName: "Flowtide",
    title: "Flowtide - Performance-Focused Web Solutions",
    description:
      "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flowtide - Performance-Focused Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtide - Performance-Focused Web Solutions",
    description:
      "Solo web developer with 15+ years of experience delivering enterprise-quality websites and applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon-128.png",
    apple: "/icon-128.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Bad+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
