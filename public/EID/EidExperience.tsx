'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './eid.module.css';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const MESSAGES = [
  {
    label: 'Spiritual',
    arabic: 'تَقَبَّلَ اللّٰهُ مِنَّا وَمِنْكُمْ صَالِحَ الأَعْمَالِ',
    english:
      'May Allah accept our good deeds. Wishing you a blessed Eid filled with peace, gratitude, and light.',
  },
  {
    label: 'Joyful',
    arabic: 'جَعَلَ اللّٰهُ عِيدَكُمْ فَرَحاً',
    english:
      'May Allah fill your Eid with joy and blessings. Wishing you and your family a wonderful celebration.',
  },
  {
    label: 'Traditional',
    arabic: 'كُلُّ عَامٍ وَأَنْتُمْ بِخَيْر',
    english:
      'May you be well every year. Wishing you a very Happy Eid filled with laughter and love.',
  },
  {
    label: 'Prayer',
    arabic: 'عَسَاكُمْ مِنْ عُوَّادَه',
    english:
      'May you witness many more Eids in good health and happiness. Sending warm prayers your way.',
  },
  {
    label: 'Warm',
    arabic: 'عِيدٌ مُبَارَك',
    english:
      'Eid Mubarak! Wishing you a brilliant soul, a joyous day, and a future as bright as this celebration.',
  },
];

const SALAM = 'السَّلامُ عَلَيْكُم وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ';

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; decay: number;
  size: number; color: string;
  trail: { x: number; y: number }[];
}

// ─── SVG COMPONENTS ──────────────────────────────────────────────────────────

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
      <path
        d="M22 4 L22 10 Q22 14 26 14 L40 14"
        stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.25"
      />
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

      {/* Arched windows — main facade */}
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

// ─── FIREWORKS ────────────────────────────────────────────────────────────────

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

// ─── GENERATE STARS ──────────────────────────────────────────────────────────

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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function EidExperience() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const toName   = searchParams.get('to')   || '';
  const fromName = searchParams.get('from') || '';
  const msgIdx   = Math.min(4, Math.max(0, parseInt(searchParams.get('msg') || '0', 10)));

  const isPersonalized = Boolean(toName || fromName);

  // ─ Phase state
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
  const [showAudio, setShowAudio] = useState(false);

  // ─ Typewriter
  const [salamText, setSalamText] = useState('');
  const [salamDone, setSalamDone] = useState(false);
  const [showQuranic, setShowQuranic] = useState(false);
  const [showMsgDivider, setShowMsgDivider] = useState(false);
  const [showMsgText, setShowMsgText] = useState(false);

  // ─ Creator panel
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [draftTo, setDraftTo] = useState('');
  const [draftFrom, setDraftFrom] = useState('');
  const [draftMsg, setDraftMsg] = useState(0);

  // ─ Toast
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  // ─ Audio
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ─ Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // ─── OPEN CARD ───────────────────────────────────────────────
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
    setTimeout(() => setShowAudio(true),    5600);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── TYPEWRITER ──────────────────────────────────────────────
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

  // ─── FIREWORKS ───────────────────────────────────────────────
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

    // 3 bursts at 0, 600, 1200ms
    [0, 650, 1300].forEach((delay) => {
      setTimeout(() => {
        launchFirework(ctx, pts, W, H);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        animateFireworks(ctx, pts, W, H, rafRef);
      }, delay);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [showFireworks]);

  // ─── AUDIO ───────────────────────────────────────────────────
  const toggleAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/eid-audio.mp3');
      audioRef.current.loop   = true;
      audioRef.current.volume = 0.35;
    }
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setAudioPlaying(true);
    }
  }, [audioPlaying]);

  // ─── SHARE ───────────────────────────────────────────────────
  const showToastMsg = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const shareData = {
      title: toName
        ? `${toName}, you have a blessed Eid greeting 🌙`
        : 'Eid Mubarak — A Celestial Greeting 🌙',
      text: fromName
        ? `${fromName} has sent you a special Eid blessing.`
        : 'Wishing you a blessed Eid filled with peace and joy.',
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        showToastMsg('Link copied to clipboard ✓');
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        showToastMsg('Link copied to clipboard ✓');
      } catch {
        showToastMsg('Copy the URL from your browser');
      }
    }
  }, [toName, fromName]);

  // ─── SAVE AS IMAGE ────────────────────────────────────────────
  const handleSave = useCallback(async () => {
    showToastMsg('Preparing your card…');
    try {
      const { default: html2canvas } = await import('html2canvas');
      const el = document.getElementById('eid-card-capture');
      if (!el) return;
      const canvas = await html2canvas(el, {
        backgroundColor: '#0A0F2C',
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement('a');
      link.download = 'eid-mubarak.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToastMsg('Card saved! 🌙');
    } catch {
      showToastMsg('Could not save — try screenshot');
    }
  }, []);

  // ─── BUILD SHARE URL ──────────────────────────────────────────
  const buildShareUrl = useCallback(() => {
    if (typeof window === 'undefined') return '';
    const base = `${window.location.origin}/eid`;
    const params = new URLSearchParams();
    if (draftTo)   params.set('to',   encodeURIComponent(draftTo));
    if (draftFrom) params.set('from', encodeURIComponent(draftFrom));
    params.set('msg', String(draftMsg));
    return `${base}?${params.toString()}`;
  }, [draftTo, draftFrom, draftMsg]);

  const handleCreateShare = useCallback(async () => {
    const url = buildShareUrl();
    const shareData = {
      title: draftTo
        ? `${draftTo}, you have a blessed Eid greeting 🌙`
        : 'Eid Mubarak — A Celestial Greeting 🌙',
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
        showToastMsg('Personalized link copied! 🌙');
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        showToastMsg('Personalized link copied! 🌙');
      } catch {
        showToastMsg('Could not copy link');
      }
    }
  }, [buildShareUrl, draftFrom, draftTo]);

  // ─── AUTO-OPEN IF PERSONALIZED ────────────────────────────────
  useEffect(() => {
    if (isPersonalized) {
      openCard();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const msg = MESSAGES[msgIdx];

  // ─── RENDER ───────────────────────────────────────────────────
  return (
    <div className={styles.root}>
      {/* ─ Starfield */}
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

      {/* ─ Nebula atmosphere */}
      <div className={styles.nebulaLayer} />

      {/* ─ Floating particles */}
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

      {/* ─ Fireworks canvas */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* ─ Arabesque corners */}
      <div className={`${styles.cornerBorders} ${showCorners ? styles.visible : ''}`} aria-hidden="true">
        <ArabesqueCorner /><ArabesqueCorner /><ArabesqueCorner /><ArabesqueCorner />
      </div>

      {/* ─ INTRO ─────────────────────────────────────────────── */}
      <div className={`${styles.intro} ${phase !== 'intro' ? styles.hidden : ''}`}>
        <div className={styles.introLantern}>
          <LanternSVG size={80} glow />
        </div>
        <p className={styles.introBismillah}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم</p>
        <p className={styles.introTap} onClick={openCard} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openCard()}>
          {isPersonalized ? 'Open Your Greeting' : 'Tap to Open'}
        </p>
      </div>

      {/* ─ CARD ──────────────────────────────────────────────── */}
      <main
        id="eid-card-capture"
        className={`${styles.card} ${phase === 'card' ? styles.visible : ''}`}
        aria-label="Eid Mubarak Greeting Card"
      >
        {/* Header */}
        <div className={styles.headerZone}>
          {/* Crescent */}
          <div className={`${styles.crescentWrap} ${showCrescent ? styles.visible : ''}`}>
            <CrescentStar />
          </div>

          {/* Arabic title */}
          <h1 className={`${styles.eidArabic} ${showTitle ? styles.visible : ''}`}>
            عِيدٌ مُبَارَك
          </h1>
          <p className={`${styles.eidEnglish} ${showTitle ? styles.visible : ''}`}>
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
          {/* Salam typewriter */}
          <p
            className={`${styles.salamLine} ${salamText ? styles.typing : ''}`}
            aria-live="polite"
          >
            {salamText}
            {!salamDone && <span style={{ opacity: 0.7, animation: 'pulse 1s infinite' }}>|</span>}
          </p>

          {/* Quranic phrase */}
          <p className={`${styles.quranicLine} ${showQuranic ? styles.visible : ''}`}>
            {msg.arabic}
          </p>

          {/* Divider */}
          <div className={`${styles.messageDivider} ${showMsgDivider ? styles.visible : ''}`} aria-hidden="true" />

          {/* Message body */}
          <p className={`${styles.messageText} ${showMsgText ? styles.visible : ''}`}>
            {msg.english}
          </p>

          {/* Recipient names */}
          {(toName || fromName) && (
            <div className={`${styles.recipientLine} ${showRecipient ? styles.visible : ''}`}>
              {toName && (
                <div className={styles.recipientBlock}>
                  <span className={styles.recipientLabel}>To</span>
                  <span className={styles.recipientName}>{toName}</span>
                </div>
              )}
              {toName && fromName && <div className={styles.recipientSep} aria-hidden="true" />}
              {fromName && (
                <div className={styles.recipientBlock}>
                  <span className={styles.recipientLabel}>From</span>
                  <span className={styles.recipientName}>{fromName}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className={`${styles.actionsRow} ${showActions ? styles.visible : ''}`}>
          <button className={styles.btnPrimary} onClick={handleShare} type="button">
            🌙 Share This Greeting
          </button>
          <button className={styles.btnSecondary} onClick={handleSave} type="button">
            ⬇ Save as Image
          </button>
          <button
            className={styles.btnCTA}
            onClick={() => { setCreatorOpen(true); setDraftMsg(msgIdx); }}
            type="button"
          >
            ✨ Create a <span>Personalized Card</span> for Someone
          </button>
        </div>
      </main>

      {/* ─ Mosque silhouette */}
      <div
        className={`${styles.mosqueWrap} ${showMosque ? styles.visible : ''}`}
        aria-hidden="true"
      >
        <MosqueSilhouette />
      </div>

      {/* ─ Audio toggle */}
      <button
        className={`${styles.audioToggle} ${showAudio ? styles.visible : ''}`}
        onClick={toggleAudio}
        aria-label={audioPlaying ? 'Mute background music' : 'Play background music'}
        type="button"
      >
        {audioPlaying ? '🔊' : '🔇'}
      </button>

      {/* ─ Toast */}
      <div
        className={`${styles.toast} ${showToast ? styles.show : ''}`}
        role="status"
        aria-live="polite"
      >
        {toastMsg}
      </div>

      {/* ─ Creator Sheet */}
      <div
        className={`${styles.creatorOverlay} ${creatorOpen ? styles.open : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setCreatorOpen(false); }}
        role="dialog"
        aria-modal="true"
        aria-label="Create personalized Eid card"
      >
        <div className={styles.creatorSheet}>
          <div className={styles.creatorHandle} />
          <p className={styles.creatorTitle}>🌙 Personalise Your Card</p>
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

          <button className={styles.btnPrimary} onClick={handleCreateShare} type="button">
            🌙 Send Personalised Greeting
          </button>
        </div>
      </div>
    </div>
  );
}
