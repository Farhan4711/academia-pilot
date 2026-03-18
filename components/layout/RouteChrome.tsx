'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExploreRelated from '@/components/ui/ExploreRelated';
import CookieBanner from '@/components/layout/CookieBanner';
import AIAssistant from '@/components/ui/AIAssistant';
import type { ContentItem } from '@/lib/content';

export default function RouteChrome({
  children,
  newsItems,
}: {
  children: React.ReactNode;
  newsItems: ContentItem[];
}) {
  const pathname = usePathname() || '/';
  const hideChrome = pathname === '/eid' || pathname.startsWith('/eid/');

  return (
    <>
      {!hideChrome && <Header newsItems={newsItems} />}
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      {!hideChrome && (
        <>
          <ExploreRelated />
          <CookieBanner />
          <AIAssistant />
          <Footer />
        </>
      )}
    </>
  );
}
