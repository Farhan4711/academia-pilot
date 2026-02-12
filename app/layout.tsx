import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Academia Pilot - Navigate the Agentic Frontier",
    template: "%s | Academia Pilot"
  },
  description: "Your co-pilot for navigating the agentic frontier. Get breaking AI news, tool reviews, prompts, and courses to simplify AI breakthroughs for entrepreneurs and creators.",
  keywords: [
    "Academia Pilot AI",
    "agentic frontier",
    "AI news",
    "AI tools",
    "AI prompts",
    "Google Antigravity",
    "AI for entrepreneurs",
    "AI breakthroughs 2026",
    "ChatGPT",
    "Claude AI",
    "AI automation"
  ],
  authors: [{ name: "Academia Pilot" }],
  creator: "Academia Pilot",
  publisher: "Academia Pilot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academiapilot.com",
    siteName: "Academia Pilot",
    title: "Academia Pilot - Navigate the Agentic Frontier",
    description: "Your co-pilot for navigating the agentic frontier. Breaking AI news, tool reviews, prompts, and courses.",
    // TODO: Uncomment when og-image.png is generated from og-image-template.html
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Academia Pilot"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Pilot - Navigate the Agentic Frontier",
    description: "Your co-pilot for navigating the agentic frontier. Breaking AI news, tool reviews, prompts, and courses.",
    // TODO: Uncomment when og-image.png is generated
    // images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4U-JQTWnZbDhBOHoNB7KT2n0-w-g2hYfhhI-bQzTLVk',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics Placeholder */}
        {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
