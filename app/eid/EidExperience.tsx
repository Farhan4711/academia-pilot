'use client';

import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Amiri, Playfair_Display } from 'next/font/google';
import styles from './eid.module.css';

const amiri = Amiri({ weight: ['400', '700'], subsets: ['arabic'], display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' });

// â”€â”€â”€ CONSTANTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const MESSAGES = [
  {
    label: 'Spiritual',
    arabic: 'تقبل الله منا ومنكم صالح الأعمال، وغفر لنا ولكم، وجعلنا من عتقائه من النار في هذا الشهر الفضيل. عيدكم مبارك وسعيد.',
    english: 'May Allah accept our righteous deeds and grant us forgiveness. May He shower His infinite mercy upon you and your loved ones on this blessed day of Eid.',
  },
  {
    label: 'Joyful',
    arabic: 'جعل الله عيدكم فرحاً بأعمال قُبلت، وذنوب مُحيت، ودرجات رُفعت، ورقاب عُتقت. كل عام وأنتم إلى الله أقرب.',
    english: 'May your Eid be a celebration of accepted deeds and elevated spirits. Wishing you a day brimming with divine joy, laughter, and the warmth of family.',
  },
  {
    label: 'Traditional',
    arabic: 'أدام الله عليكم الأعياد دهوراً، وألبسكم من تقواه نوراً، جعل الله عيدكم مباركاً. كل عام وأنتم بخير وصحة وعافية.',
    english: 'May the blessings of Allah stay with you forever. Wishing you a traditional Eid filled with the light of faith and the sweetness of togetherness.',
  },
  {
    label: 'Prayer',
    arabic: 'عساكم من عواده، وجعلكم الله من الفائزين السعداء. نسأل الله أن يتقبل صيامكم وقيامكم وطاعتكم في كل حين.',
    english: 'May you witness many more Eids in the best of health and spirit. We pray that Allah accepts your devotion and rewards you with eternal happiness.',
  },
  {
    label: 'Warm',
    arabic: 'عيدكم مبارك، وكل عام وأنتم بخير. أعاده الله علينا وعليكم باليمن والبركات والسرور. تقبل الله طاعتكم.',
    english: 'Eid Mubarak! Wishing you a heart full of peace, a home full of love, and a life full of Allah’s most wondrous blessings today and always.',
  },
];

const SALAM = 'السلام عليكم ورحمة الله وبركاته';

// â”€â”€â”€ TYPES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; decay: number;
  size: number; color: string;
  trail: { x: number; y: number }[];
}

// â”€â”€â”€ SVG COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function CrescentStar() {
  return (
    <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crescent */}
      <path
        d="M20 30C20 17.85 28.1 7.6 39.2 4.4C37.5 4.15 35.76 4 34 4C19.64 4 8 15.64 8 30C8 44.36 19.64 56 34 56C35.76 56 37.5 55.85 39.2 55.6C28.1 52.4 20 42.15 20 30Z"
        fill="#D4AF37"
      />
      {/* Star */}
      <polygon
        points="55,8 57.2,15 64.5,15 58.65,19.4 60.85,26.4 55,22 49.15,26.4 51.35,19.4 45.5,15 52.8,15"
        fill="#D4AF37"
      />
    </svg>
  );
}

function LanternSVG({ size = 52, glow = false }: { size?: number; glow?: boolean }) {
  const glowId = `g${size}`;
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 52 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {glow && (
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        )}
      </defs>
      {/* String */}
      <line x1="26" y1="0" x2="26" y2="8" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
      {/* Top cap */}
      <rect x="14" y="8" width="24" height="5" rx="2" fill="#D4AF37" opacity="0.9" />
      {/* Body */}
      <path d="M16 13 Q8 38 10 56 L42 56 Q44 38 36 13Z" fill="rgba(212,175,55,0.12)" stroke="#D4AF37" strokeWidth="1.2" filter={glow ? `url(#${glowId})` : undefined} />
      {/* Lattice verticals */}
      <line x1="20" y1="14" x2="16" y2="55" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
      <line x1="26" y1="13" x2="26" y2="56" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
      <line x1="32" y1="14" x2="36" y2="55" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
      {/* Lattice horizontals */}
      <line x1="12" y1="28" x2="40" y2="28" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
      <line x1="11" y1="42" x2="41" y2="42" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
      {/* Inner glow */}
      <ellipse cx="26" cy="34" rx="8" ry="12" fill="rgba(255,220,80,0.18)" />
      {/* Bottom cap */}
      <rect x="14" y="56" width="24" height="5" rx="2" fill="#D4AF37" opacity="0.85" />
      {/* Bottom tassel */}
      <line x1="22" y1="61" x2="20" y2="70" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
      <line x1="26" y1="61" x2="26" y2="72" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
      <line x1="30" y1="61" x2="32" y2="70" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
      <circle cx="20" cy="71" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="26" cy="73" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="32" cy="71" r="2" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}

function ArabesqueCorner() {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4 L4 32 Q4 36 8 36 L10 36 Q14 36 14 32 L14 14 L32 14 Q36 14 36 10 L36 8 Q36 4 32 4 Z"
        stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.05)" opacity="0.7"
      />
      <path
        d="M4 4 Q24 4 24 24 Q24 4 44 4"
        stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4"
      />
      <circle cx="14" cy="14" r="3.5" stroke="#D4AF37" strokeWidth="0.8" fill="rgba(212,175,55,0.1)" opacity="0.8" />
      <circle cx="8"  cy="8"  r="2"   fill="#D4AF37" opacity="0.6" />
      <path
        d="M18 18 L26 18 Q30 18 30 22 L30 30"
        stroke="#D4AF37" strokeWidth="0.7" fill="none" opacity="0.35"
      />
    </svg>
  );
}

function IslamicPattern() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="girih" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#D4AF37" strokeWidth="0.2" opacity="0.15" />
          <circle cx="10" cy="10" r="2" fill="none" stroke="#D4AF37" strokeWidth="0.1" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#girih)" />
    </svg>
  );
}

// â”€â”€â”€ KAABA DOOR (BAB AL-KAABA) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function KaabaDoor() {
  return (
    <svg viewBox="0 0 200 300" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Soft, ethereal gold gradient */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAD8A7" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9C7F23" />
        </linearGradient>
        {/* Inner shadow to give the door depth without harsh black */}
        <linearGradient id="doorShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(10,15,44,0.7)" />
          <stop offset="100%" stopColor="rgba(10,15,44,0.1)" />
        </linearGradient>
        {/* Deep, rich navy for the Kiswa, blending better than harsh #0A0A0A */}
        <linearGradient id="kiswaTheme" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#080C1E" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#040715" stopOpacity="0.95"/>
        </linearGradient>
      </defs>
      
      {/* Kiswa Background - gracefully rounded top corners */}
      <path d="M 0 15 Q 0 0 15 0 L 185 0 Q 200 0 200 15 L 200 300 L 0 300 Z" fill="url(#kiswaTheme)" />
      
      {/* Inner Door Shadow & Outer Frame - delicate lines */}
      <rect x="25" y="30" width="150" height="270" fill="url(#doorShadow)" />
      <rect x="25" y="30" width="150" height="270" fill="none" stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.8" />
      <rect x="30" y="35" width="140" height="265" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.6" />

      {/* Top Arch Panel */}
      <path d="M 25 75 Q 100 20 175 75" fill="none" stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.9" />
      <path d="M 30 78 Q 100 28 170 78" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.7" />

      {/* Calligraphy Panels */}
      <rect x="35" y="85" width="130" height="25" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.8" />
      <path d="M 40 97 Q 100 90 160 97 Q 100 105 40 97 Z" fill="url(#goldGradient)" opacity="0.35" />

      <rect x="35" y="120" width="60" height="30" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.8" />
      <circle cx="65" cy="135" r="8" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
      
      <rect x="105" y="120" width="60" height="30" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.8" />
      <circle cx="135" cy="135" r="8" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />

      {/* Center locks/handles - using subtle gold instead of stark black */}
      <line x1="100" y1="155" x2="100" y2="300" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.5" />
      
      <circle cx="92" cy="180" r="3" fill="url(#goldGradient)" opacity="0.9" />
      <circle cx="108" cy="180" r="3" fill="url(#goldGradient)" opacity="0.9" />
      
      {/* Bottom Panels */}
      <rect x="35" y="210" width="130" height="80" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.8" />
      <rect x="40" y="215" width="120" height="70" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.6" />
      
      <path d="M 35 250 L 165 250" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.6" />
      
      {/* Decorative inner circles */}
      <circle cx="65" cy="230" r="6" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.8" />
      <circle cx="135" cy="230" r="6" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.8" />
      <circle cx="65" cy="270" r="6" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.8" />
      <circle cx="135" cy="270" r="6" fill="none" stroke="url(#goldGradient)" strokeWidth="0.4" opacity="0.8" />
    </svg>
  );
}

function MosqueSilhouette() {
  return (
    <svg
      viewBox="0 0 480 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block' }}
    >
      {/* Ground */}
      <rect x="0" y="128" width="480" height="12" fill="#004225" opacity="0.8" />

      {/* Left minaret */}
      <rect x="18" y="30" width="18" height="98" fill="#002818" />
      <ellipse cx="27" cy="30" rx="10" ry="16" fill="#002818" />
      <rect x="23" y="14" width="8" height="18" fill="#002818" />
      <polygon points="27,4 23,14 31,14" fill="#D4AF37" opacity="0.8" />
      <rect x="15" y="72" width="24" height="4" rx="2" fill="#004225" opacity="0.7" />
      {/* Minaret windows */}
      <rect x="23" y="44" width="8" height="12" rx="4" fill="#D4AF37" opacity="0.15" />
      <rect x="23" y="62" width="8" height="10" rx="4" fill="#D4AF37" opacity="0.12" />

      {/* Right minaret */}
      <rect x="444" y="30" width="18" height="98" fill="#002818" />
      <ellipse cx="453" cy="30" rx="10" ry="16" fill="#002818" />
      <rect x="449" y="14" width="8" height="18" fill="#002818" />
      <polygon points="453,4 449,14 457,14" fill="#D4AF37" opacity="0.8" />
      <rect x="441" y="72" width="24" height="4" rx="2" fill="#004225" opacity="0.7" />
      <rect x="449" y="44" width="8" height="12" rx="4" fill="#D4AF37" opacity="0.15" />
      <rect x="449" y="62" width="8" height="10" rx="4" fill="#D4AF37" opacity="0.12" />

      {/* Side small minarets */}
      <rect x="72"  y="60" width="12" height="68" fill="#002818" />
      <ellipse cx="78" cy="60" rx="7" ry="10" fill="#002818" />
      <polygon points="78,50 75,60 81,60" fill="#D4AF37" opacity="0.7" />
      <rect x="396" y="60" width="12" height="68" fill="#002818" />
      <ellipse cx="402" cy="60" rx="7" ry="10" fill="#002818" />
      <polygon points="402,50 399,60 405,60" fill="#D4AF37" opacity="0.7" />

      {/* Side domes */}
      <ellipse cx="120" cy="90" rx="36" ry="30" fill="#002818" />
      <ellipse cx="360" cy="90" rx="36" ry="30" fill="#002818" />

      {/* Main dome */}
      <ellipse cx="240" cy="74" rx="62" ry="52" fill="#002818" />
      {/* Dome highlight */}
      <path d="M200 74 Q240 34 280 74" stroke="#004225" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Main body */}
      <rect x="88"  y="100" width="304" height="28" fill="#002818" />

      {/* Arched windows â€” main facade */}
      <rect x="110" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />
      <rect x="138" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />
      <rect x="166" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />
      <rect x="222" y="100" width="24" height="28" rx="12" fill="#D4AF37" opacity="0.22" />
      <rect x="278" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />
      <rect x="306" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />
      <rect x="334" y="104" width="18" height="22" rx="9" fill="#D4AF37" opacity="0.18" />

      {/* Crescent on main dome */}
      <path
        d="M234 46 C234 38 244 33 252 36 C248 37 245 40 245 46 C245 52 248 55 252 56 C244 59 234 54 234 46Z"
        fill="#D4AF37" opacity="0.85"
      />
      <circle cx="255" cy="40" r="3" fill="#D4AF37" opacity="0.85" />

      {/* Ground foliage suggestion */}
      <ellipse cx="60"  cy="130" rx="30" ry="8" fill="#003a1a" opacity="0.5" />
      <ellipse cx="420" cy="130" rx="30" ry="8" fill="#003a1a" opacity="0.5" />
    </svg>
  );
}

// â”€â”€â”€ FIREWORKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function launchFirework(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  W: number, H: number
) {
  const colors = [
    '#D4AF37', '#FFD700', '#B8942E',
    '#004225', '#006B3C', '#00A86B',
    '#F5F0DC', '#E8D5A3',
  ];
  const cx = W * (0.25 + Math.random() * 0.5);
  const cy = H * (0.1 + Math.random() * 0.35);
  const count = Math.min(28, 18 + Math.floor(Math.random() * 10));

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const speed = 1.8 + Math.random() * 2.8;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      alpha: 1,
      decay: 0.012 + Math.random() * 0.014,
      size: 2.5 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: [],
    });
  }
}

function animateFireworks(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  W: number, H: number,
  rafRef: React.MutableRefObject<number | null>
) {
  ctx.clearRect(0, 0, W, H);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.trail.push({ x: p.x, y: p.y });
    if (p.trail.length > 6) p.trail.shift();

    // trail
    for (let t = 0; t < p.trail.length; t++) {
      const ta = (t / p.trail.length) * p.alpha * 0.4;
      ctx.beginPath();
      ctx.arc(p.trail[t].x, p.trail[t].y, p.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = ta;
      ctx.fill();
    }

    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x  += p.vx;
    p.y  += p.vy;
    p.vy += 0.06; // gravity
    p.vx *= 0.98;
    p.alpha -= p.decay;

    if (p.alpha <= 0) particles.splice(i, 1);
  }
  ctx.globalAlpha = 1;

  if (particles.length > 0) {
    rafRef.current = requestAnimationFrame(() =>
      animateFireworks(ctx, particles, W, H, rafRef)
    );
  }
}

// â”€â”€â”€ GENERATE STARS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function generateStars(count = 90) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 70}%`,
    size: 1 + Math.random() * 2.5,
    dur: `${2.5 + Math.random() * 4}s`,
    delay: `${Math.random() * 5}s`,
  }));
}

const STARS = generateStars(90);

function generateParticles(count = 14) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    bottom: `${Math.random() * 20}%`,
    color: Math.random() > 0.5 ? 'rgba(212,175,55,0.35)' : 'rgba(0,108,56,0.35)',
    dur: `${7 + Math.random() * 8}s`,
    delay: `${Math.random() * 8}s`,
    drift: `${-20 + Math.random() * 40}px`,
  }));
}

const FLOAT_PARTICLES = generateParticles(14);

function generateBalloons(count = 12) {
  const colors = ['#D4AF37', '#004225', '#C0C0C0', '#B8860B', '#006400'];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    color: colors[i % colors.length],
    size: 40 + Math.random() * 30,
    delay: `${Math.random() * 2}s`,
    dur: `${6 + Math.random() * 4}s`,
  }));
}

const BALLOONS = generateBalloons(12);

// â”€â”€â”€ FLOWERS / PETALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function generatePetals(count = 25) {
  const types = ['rose', 'jasmine'];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${-10 - Math.random() * 20}%`, // Start above screen
    type: types[Math.floor(Math.random() * types.length)],
    size: 15 + Math.random() * 20,
    delay: `${Math.random() * 10}s`,
    dur: `${8 + Math.random() * 7}s`,
    rot: Math.random() * 360,
  }));
}

const PETALS = generatePetals(25);

// â”€â”€â”€ MAIN COMPONENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function EidExperience() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const toName   = searchParams.get('to')   || '';
  const fromName = searchParams.get('from') || '';
  const msgIdx   = Math.min(4, Math.max(0, parseInt(searchParams.get('msg') || '0', 10)));

  const styleParam = (searchParams.get('s') || 'emerald').toLowerCase();
  const styleKey = styleParam === 'noor' || styleParam === 'saffron' || styleParam === 'emerald' ? styleParam : 'emerald';

  const fontParam = (searchParams.get('f') || 'reem').toLowerCase();
  const fontKey = (['rahrovan','hasti','atiq','sabiyah','dang','midnight','amiri','reem'] as const).includes(fontParam as any)
    ? fontParam
    : 'reem';

  const isPersonalized = Boolean(toName || fromName);
  const rcp = toName || fromName; // For intro screen

  // â”€ Phase state
  const [phase, setPhase] = useState<'intro' | 'card'>('intro');
  const [showFireworks, setShowFireworks] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showMosque, setShowMosque] = useState(false);
  const [showCrescent, setShowCrescent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showLanterns, setShowLanterns] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRecipient, setShowRecipient] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showCorners, setShowCorners] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  // â”€ Typewriter
  const [salamText, setSalamText] = useState('');
  const [salamDone, setSalamDone] = useState(false);
  const [showQuranic, setShowQuranic] = useState(false);
  const [showMsgDivider, setShowMsgDivider] = useState(false);
  const [showMsgText, setShowMsgText] = useState(false);

  // â”€ Creator panel
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [draftTo, setDraftTo] = useState('');
  const [draftFrom, setDraftFrom] = useState('');
  const [draftMsg, setDraftMsg] = useState(0);
  const [draftStyle, setDraftStyle] = useState(styleKey);
  const [draftFont, setDraftFont] = useState(fontKey);

  // â”€ Toast
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  // â”€ Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // â”€ Intro visuals
  const [showIntroBalloons, setShowIntroBalloons] = useState(false);

  // â”€â”€â”€ OPEN CARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const openCard = useCallback(() => {
    setPhase('card');
    setShowFireworks(true);

    // Cascade phases
    setTimeout(() => setShowStars(true),    300);
    setTimeout(() => setShowCorners(true),  800);
    setTimeout(() => setShowMosque(true),   600);
    setTimeout(() => setShowCrescent(true), 1200);
    setTimeout(() => setShowTitle(true),    1600);
    setTimeout(() => setShowLanterns(true), 2000);
    setTimeout(() => setShowMessage(true),  2400);
    setTimeout(() => startTypewriter(),     2800);
    setTimeout(() => setShowActions(true),  5200);
    setTimeout(() => setShowBalloons(true), 3200);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // â”€â”€â”€ TYPEWRITER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const startTypewriter = useCallback(() => {
    let i = 0;
    const interval = setInterval(() => {
      setSalamText(SALAM.slice(0, i + 1));
      i++;
      if (i >= SALAM.length) {
        clearInterval(interval);
        setSalamDone(true);
        setTimeout(() => setShowQuranic(true),    400);
        setTimeout(() => setShowMsgDivider(true), 700);
        setTimeout(() => setShowMsgText(true),    1000);
        setTimeout(() => setShowRecipient(true),  1400);
      }
    }, 38);
  }, []);

  // â”€â”€â”€ FIREWORKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    if (!showFireworks) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const W = canvas.width;
    const H = canvas.height;
    const pts = particlesRef.current;

    // 3 initial bursts
    [0, 650, 1300].forEach((delay) => {
      setTimeout(() => {
        launchFirework(ctx, pts, W, H);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        animateFireworks(ctx, pts, W, H, rafRef);
      }, delay);
    });

    // Recurring bursts every 4-7 seconds
    const interval = setInterval(() => {
      launchFirework(ctx, pts, W, H);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      animateFireworks(ctx, pts, W, H, rafRef);
    }, 5500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(interval);
    };
  }, [showFireworks]);

  // â”€ Initial fireworks for Intro
  useEffect(() => {
    setShowFireworks(true);
    setTimeout(() => setShowIntroBalloons(true), 1000);
  }, []);

  // â”€â”€â”€ AUDIO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  // â”€â”€â”€ SHARE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const showToastMsg = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  const buildShareUrl = useCallback(() => {
    if (typeof window === 'undefined') return '';
    const base = `${window.location.origin}/eid`;
    const params = new URLSearchParams();
    if (draftTo)   params.set('to', draftTo);
    if (draftFrom) params.set('from', draftFrom);
    params.set('msg', String(draftMsg));
    params.set('s', draftStyle);
    params.set('f', draftFont);
    return `${base}?${params.toString()}`;
  }, [draftTo, draftFrom, draftMsg, draftStyle, draftFont]);

  const toggleAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
        setAudioPlaying(true);
      } else {
        audio.pause();
        setAudioPlaying(false);
      }
    } catch {
      setAudioAvailable(false);
    }
  }, []);

  const handleCreateShare = useCallback(async () => {
    const url = buildShareUrl();
    const shareData = {
      title: draftTo
        ? `${draftTo}, you have a blessed Eid greeting `
        : 'Eid Mubarak â€” A Celestial Greeting ',
      text: draftFrom
        ? `${draftFrom} has sent you a special Eid blessing.`
        : 'Wishing you a blessed Eid!',
      url,
    };
    setCreatorOpen(false);
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        showToastMsg('Personalized link copied! ');
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        showToastMsg('Personalized link copied! ');
      } catch {
        showToastMsg('Could not copy link');
      }
    }
  }, [buildShareUrl, draftFrom, draftTo]);

  // â”€â”€â”€ AUTO-OPEN IF PERSONALIZED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    if (isPersonalized) {
      openCard();
    }
  }, [isPersonalized, openCard]);

  const msg = MESSAGES[msgIdx];

  // â”€â”€â”€ RENDER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <div className={[styles.root, styleKey === 'noor' ? styles.themeNoor : styleKey === 'saffron' ? styles.themeSaffron : styles.themeEmerald, fontKey === 'rahrovan' ? styles.fontRahrovan : fontKey === 'hasti' ? styles.fontHasti : fontKey === 'atiq' ? styles.fontAtiq : fontKey === 'sabiyah' ? styles.fontSabiyah : fontKey === 'dang' ? styles.fontDang : fontKey === 'midnight' ? styles.fontMidnight : fontKey === 'amiri' ? styles.fontAmiri : styles.fontReem].join(' ')}>
      {/* â”€ Starfield */}
      <div className={`${styles.starfield} ${showStars ? styles.visible : ''}`}>
        {STARS.map((s) => (
          <span
            key={s.id}
            className={styles.star}
            style={{
              left: s.left, top: s.top,
              width: s.size, height: s.size,
              '--dur': s.dur, '--delay': s.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* â”€ Nebula atmosphere */}
      <div className={styles.nebulaLayer} />

      {/* â”€ Floating particles */}
      {phase === 'card' && FLOAT_PARTICLES.map((p) => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            left: p.left, bottom: p.bottom,
            background: p.color,
            '--dur': p.dur, '--delay': p.delay, '--drift': p.drift,
          } as React.CSSProperties}
        />
      ))}

      {/* â”€ Balloons */}
      {showBalloons && BALLOONS.map((b) => (
        <div
          key={b.id}
          className={styles.balloon}
          style={{
            left: b.left,
            '--color': b.color,
            '--size': `${b.size}px`,
            '--delay': b.delay,
            '--dur': b.dur,
          } as React.CSSProperties}
        >
          <div className={styles.balloonBody} />
          <div className={styles.balloonString} />
        </div>
      ))}

      {/* â”€ Fireworks canvas */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* â”€ Arabesque corners */}
      <div className={`${styles.cornerBorders} ${showCorners ? styles.visible : ''}`} aria-hidden="true">
        <ArabesqueCorner /><ArabesqueCorner /><ArabesqueCorner /><ArabesqueCorner />
      </div>

      {/* â”€ Background audio */}
      <audio
        ref={audioRef}
        src="/EID/07 (mp3cut.net).mp3"
        loop
        preload="none"
        onError={() => setAudioAvailable(false)}
      />

      {audioAvailable && (
        <button
          className={`${styles.audioToggle} ${phase === 'card' ? styles.visible : ''}`}
          onClick={toggleAudio}
          type="button"
          aria-label={audioPlaying ? 'Mute background audio' : 'Play background audio'}
        >
          <span aria-hidden="true">{audioPlaying ? '🔊' : '🔇'}</span>
        </button>
      )}

      {/* â”€ INTRO SCREEN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className={`${styles.intro} ${phase === 'intro' ? styles.visible : styles.hidden}`}>
        
        {/* Intro Kaaba Background */}
        <div className={styles.kaabaIntroBg}>
          <div className={styles.kaabaWrap}>
            <KaabaDoor />
            <div className={styles.kaabaGlow} />
          </div>
          <div className={styles.contrastScrim} />
        </div>

        <div className={styles.introContentWrap}>
          <div className={styles.introLantern}>
            <LanternSVG size={60} />
          </div>
          <h1 className={styles.introBismillah} lang="ar" dir="rtl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>
          <p className={styles.introGift}>
            {isPersonalized ? `${rcp} has sent you a special Eid greeting. Tap to unwrap its blessings.` : 'Someone sent you a gift. Tap to get it.'}
          </p>
          <p className={styles.introTap} onClick={openCard} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openCard()}>
            {isPersonalized ? 'Open Your Greeting' : 'Tap to Open'}
          </p>
        </div>

        {/* Intro Balloons */}
        {showIntroBalloons && phase === 'intro' && BALLOONS.slice(0, 6).map((b) => (
          <div
            key={`intro-${b.id}`}
            className={styles.balloon}
            style={{
              left: b.left,
              '--color': b.color,
              '--size': `${b.size * 0.8}px`,
              '--delay': b.delay,
              '--dur': `${parseFloat(b.dur) * 1.5}s`,
            } as React.CSSProperties}
          >
            <div className={styles.balloonBody} />
            <div className={styles.balloonString} />
          </div>
        ))}
      </div>

      {/* â”€ CARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <main
        id="eid-card-capture"
        className={`${styles.card} ${phase === 'card' ? styles.visible : styles.hidden}`}
        aria-label="Eid Mubarak Greeting Card"
      >
        
        {/* Kaaba Background for Main Card */}
        <div className={styles.kaabaMainBg}>
          <div className={styles.kaabaWrap}>
            <KaabaDoor />
            <div className={styles.kaabaGlow} />
          </div>
          <div className={styles.contrastScrim} />
        </div>

        {/* Petals Animation */}
        {phase === 'card' && PETALS.map((p) => (
          <div
            key={`petal-${p.id}`}
            className={`${styles.petal} ${p.type === 'rose' ? styles.petalRose : styles.petalJasmine}`}
            style={{
              left: p.left,
              top: p.top,
              '--size': `${p.size}px`,
              '--delay': p.delay,
              '--dur': p.dur,
              '--rot': `${p.rot}deg`,
            } as React.CSSProperties}
          />
        ))}

        {/* Dynamic Wrapper for Live Preview Layout adjustments */}
        <div className={`${styles.cardContentsWrap} ${creatorOpen ? styles.previewModeActive : ''}`}>
          {/* Header */}
          <div className={styles.headerZone}>
          {/* Crescent */}
          <div className={`${styles.crescentWrap} ${showCrescent ? styles.visible : ''}`}>
            <CrescentStar />
          </div>

          {/* Arabic title */}
          <h1 className={`${styles.eidArabic} ${showTitle ? styles.visible : ''} ${amiri.className}`}>
            عيد مبارك
          </h1>
          <p className={`${styles.eidEnglish} ${showTitle ? styles.visible : ''} ${playfair.className}`}>
            Eid Mubarak
          </p>

          {/* Divider */}
          <div className={`${styles.divider} ${showTitle ? styles.visible : ''}`} aria-hidden="true" />

          {/* Lanterns */}
          <div className={`${styles.lanternsRow} ${showLanterns ? styles.visible : ''}`} aria-hidden="true">
            <div className={styles.lanternWrap}><LanternSVG size={38} /></div>
            <div className={styles.lanternWrap}><LanternSVG size={52} glow /></div>
            <div className={styles.lanternWrap}><LanternSVG size={38} /></div>
          </div>
        </div>
 
         {/* Message box */}
         <div className={`${styles.messageBox} ${showMessage ? styles.visible : ''}`}>
           <div className={styles.patternBg} aria-hidden="true">
             <IslamicPattern />
           </div>
          {/* Salam typewriter */}
          <p lang="ar" dir="rtl"
            className={`${styles.salamLine} ${salamText ? styles.typing : ''} ${amiri.className}`}
            aria-live="polite"
          >
            {salamText}
            {!salamDone && <span style={{ opacity: 0.7, animation: 'pulse 1s infinite' }}>|</span>}
          </p>

          {/* Quranic phrase - Switch to Live Preview if creator is open */}
          <p lang="ar" dir="rtl" className={`${styles.quranicLine} ${showQuranic ? styles.visible : ''} ${amiri.className}`}>
            {creatorOpen ? MESSAGES[draftMsg].arabic : msg.arabic}
          </p>

          {/* Divider */}
          <div className={`${styles.messageDivider} ${showMsgDivider ? styles.visible : ''}`} aria-hidden="true" />

          {/* Message body - Switch to Live Preview if creator is open */}
          <p className={`${styles.messageText} ${showMsgText ? styles.visible : ''} ${playfair.className}`}>
            {creatorOpen ? MESSAGES[draftMsg].english : msg.english}
          </p>

          {/* Recipient names - Switch to Live Preview if creator is open */}
          {(toName || fromName || creatorOpen) && (
            <div className={`${styles.recipientLine} ${showRecipient || creatorOpen ? styles.visible : ''}`}>
              {(creatorOpen ? draftTo : toName) && (
                <div className={styles.recipientBlock}>
                  <span className={`${styles.recipientLabel} ${playfair.className}`}>To</span>
                  <span className={`${styles.recipientName} ${playfair.className}`}>{creatorOpen ? draftTo : toName}</span>
                </div>
              )}
              {(creatorOpen ? (draftTo && draftFrom) : (toName && fromName)) && <div className={styles.recipientSep} aria-hidden="true" />}
              {(creatorOpen ? draftFrom : fromName) && (
                <div className={styles.recipientBlock}>
                  <span className={`${styles.recipientLabel} ${playfair.className}`}>From</span>
                  <span className={`${styles.recipientName} ${playfair.className}`}>{creatorOpen ? draftFrom : fromName}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className={`${styles.actionsRow} ${showActions ? styles.visible : ''}`}>
          <button
            className={styles.btnCTA}
            onClick={() => { setCreatorOpen(true); setDraftMsg(msgIdx); setDraftStyle(styleKey); setDraftFont(fontKey); }}
            type="button"
          >
             Create & Share <span>Your Eid Card</span>
          </button>
        </div>
        </div> {/* End card contents wrap */}
      </main>

      {/* â”€ Mosque silhouette */}
      <div
        className={`${styles.mosqueWrap} ${showMosque ? styles.visible : ''}`}
        aria-hidden="true"
      >
        <MosqueSilhouette />
      </div>

      {/* â”€ Toast */}
      <div
        className={`${styles.toast} ${showToast ? styles.show : ''}`}
        role="status"
        aria-live="polite"
      >
        {toastMsg}
      </div>

      {/* â”€ Creator Sheet */}
      <div
        className={`${styles.creatorOverlay} ${creatorOpen ? styles.open : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setCreatorOpen(false); }}
        role="dialog"
        aria-modal="true"
        aria-label="Create personalized Eid card"
      >
        <div className={styles.creatorSheet}>
          <div className={styles.creatorHandle} />
          <p className={styles.creatorTitle}>Personalize Your Card</p>
          <p className={styles.creatorSubtitle}>Craft a blessing with someone's name</p>

          <div className={styles.fieldGroup}>
            <div className={styles.fieldWrap}>
              <label className={styles.fieldLabel} htmlFor="draft-to">To</label>
              <input
                id="draft-to"
                className={styles.fieldInput}
                placeholder="Receiver's name"
                value={draftTo}
                onChange={(e) => setDraftTo(e.target.value)}
                maxLength={30}
                autoComplete="off"
              />
            </div>
            <div className={styles.fieldWrap}>
              <label className={styles.fieldLabel} htmlFor="draft-from">From</label>
              <input
                id="draft-from"
                className={styles.fieldInput}
                placeholder="Your name"
                value={draftFrom}
                onChange={(e) => setDraftFrom(e.target.value)}
                maxLength={30}
                autoComplete="off"
              />
            </div>
          </div>

          <span className={styles.msgLabel}>Choose a message</span>
          <div className={styles.msgGrid}>
            {MESSAGES.map((m, i) => (
              <button
                key={i}
                className={`${styles.msgOption} ${draftMsg === i ? styles.selected : ''}`}
                onClick={() => setDraftMsg(i)}
                type="button"
              >
                <strong>{m.label}:</strong> {m.english.slice(0, 58)}…
              </button>
            ))}
          </div>

          
          <span className={styles.msgLabel}>Choose a style</span>
          <div className={styles.styleGrid}>
            <button
              type="button"
              className={[styles.styleOption, draftStyle === 'emerald' ? styles.selected : ''].filter(Boolean).join(' ')}
              onClick={() => setDraftStyle('emerald')}
            >
              Emerald
            </button>
            <button
              type="button"
              className={[styles.styleOption, draftStyle === 'noor' ? styles.selected : ''].filter(Boolean).join(' ')}
              onClick={() => setDraftStyle('noor')}
            >
              Noor
            </button>
            <button
              type="button"
              className={[styles.styleOption, draftStyle === 'saffron' ? styles.selected : ''].filter(Boolean).join(' ')}
              onClick={() => setDraftStyle('saffron')}
            >
              Saffron
            </button>
          </div>

          <button className={styles.btnPrimary} onClick={handleCreateShare} type="button">
             Share Personalized Greeting
          </button>
        </div>
      </div>
    </div>
  );
}
