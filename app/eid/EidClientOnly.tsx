'use client';

import { useEffect, useState } from 'react';
import EidExperience from './EidExperience';

function EidFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #050b09 0%, #07120e 55%, #040707 100%)',
        color: 'rgba(245,245,220,0.86)',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      Loading…
    </div>
  );
}

export default function EidClientOnly() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <EidFallback />;
  return <EidExperience />;
}
