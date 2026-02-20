import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getLatestContent } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://academiapilot.com"),
  title: {
    default: "Academia Pilot - Navigate the Agentic Frontier",
    template: "%s | Academia Pilot"
  },
  description: "Your co-pilot for navigating the agentic frontier. Get breaking AI news, tool reviews, prompts, and courses to simplify AI breakthroughs for entrepreneurs and creators.",
  keywords: [
    "Academia Pilot AI",
    "AI Mastery Hub",
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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academiapilot.com/",
    siteName: "Academia Pilot",
    title: "Academia Pilot - Navigate the Agentic Frontier",
    description: "Your co-pilot for navigating the agentic frontier. Breaking AI news, tool reviews, prompts, and courses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Academia Pilot"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Pilot - Navigate the Agentic Frontier",
    description: "Your co-pilot for navigating the agentic frontier. Breaking AI news, tool reviews, prompts, and courses.",
    images: ["/og-image.png"]
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Academia Pilot",
  "url": "https://academiapilot.com",
  "description": "Your co-pilot for navigating the agentic frontier. Breaking AI news, tool reviews, prompts, and courses.",
  "publisher": {
    "@type": "Organization",
    "name": "Academia Pilot",
    "url": "https://academiapilot.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://academiapilot.com/logo.png"
    },
    "sameAs": [
      "https://twitter.com/AcademiaPilot",
      "https://github.com/Farhan4711/academia-pilot"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@academiapilot.com"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://academiapilot.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

import ExploreRelated from "@/components/ui/ExploreRelated";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const newsItems = getLatestContent('news', 3);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('unhandledrejection', function(event) {
              console.error('[CRITICAL] Unhandled Promise Rejection:', event.reason);
            });
            window.addEventListener('error', function(event) {
              console.error('[CRITICAL] Global Error:', event.error);
            });
            document.addEventListener('click', function(event) {
              var target = event.target.closest('a');
              if (target) {
                console.log('[NAV] Clicked link:', target.getAttribute('href'));
              }
            }, true);
          `
        }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header newsItems={newsItems} />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <ExploreRelated />
        <Footer />
      </body>
    </html>
  );
}
