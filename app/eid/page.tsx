import type { Metadata } from 'next';
import EidClientOnly from './EidClientOnly';

export const metadata: Metadata = {
  title: 'Celestial Eid — Personalized Greeting',
  description:
    'Create and share a personalized Eid greeting card with a cinematic reveal, tasteful animations, and a shareable link.',
  alternates: {
    canonical: '/eid/',
  },
  openGraph: {
    type: 'website',
    title: 'You have a personalized Eid greeting!',
    description: 'Tap to open your Celestial Eid greeting — then create your own and share it.',
    url: 'https://academiapilot.com/eid/',
    images: [
      {
        url: '/og-eid.png',
        width: 1200,
        height: 630,
        alt: 'You have a personalized Eid greeting!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'You have a personalized Eid greeting!',
    description: 'Tap to open your Celestial Eid greeting — then create your own and share it.',
    images: ['/og-eid.png'],
  },
};

export default function EidPage() {
  return <EidClientOnly />;
}
