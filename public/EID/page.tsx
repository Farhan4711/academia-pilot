import type { Metadata } from 'next';
import { Suspense } from 'react';
import EidExperience from './EidExperience';

interface EidPageProps {
  searchParams: Promise<{ to?: string; from?: string; msg?: string }>;
}

export async function generateMetadata({ searchParams }: EidPageProps): Promise<Metadata> {
  const params = await searchParams;
  const to = params.to ? decodeURIComponent(params.to) : null;
  const from = params.from ? decodeURIComponent(params.from) : null;

  const title = to
    ? `${to}, you have a blessed Eid greeting 🌙`
    : 'Eid Mubarak — A Celestial Greeting for You 🌙';

  const description = from
    ? `${from} has sent you a special Eid Mubarak blessing. Open to receive your personalized message.`
    : 'A beautifully crafted digital Eid greeting. Wishing you and your family peace, joy, and countless blessings.';

  const ogUrl = `/og-eid.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: 'Eid Mubarak — Celestial Greeting',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
    other: {
      'theme-color': '#0A0F2C',
    },
  };
}

export default function EidPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100dvh',
            background: '#0A0F2C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37',
            fontFamily: 'serif',
            fontSize: '1.5rem',
            letterSpacing: '0.1em',
          }}
        >
          🌙
        </div>
      }
    >
      <EidExperience />
    </Suspense>
  );
}
