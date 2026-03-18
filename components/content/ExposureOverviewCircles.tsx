'use client';
import React, { useEffect, useState, useRef } from 'react';

const topOccs = [
  { label: 'Computer programmers', pct: 74.5, color: '#185FA5', sub: 'Highest single occupation' },
  { label: 'Customer service reps', pct: 70.1, color: '#1D9E75', sub: 'Highest non-technical role' },
  { label: 'Data entry keyers', pct: 67.1, color: '#185FA5', sub: 'Fully automatable pipeline' },
  { label: 'Medical record specialists', pct: 66.7, color: '#1D9E75', sub: 'Healthcare admin only' },
  { label: 'Market research analysts', pct: 64.8, color: '#185FA5', sub: 'Synthesis & reporting' },
  { label: 'Legal occupations', pct: 20.4, color: '#BA7517', sub: 'Low observed, high theoretical' },
];

const workforce = [
  { label: 'Jobs with 25%+ AI exposure', pct: 49, color: '#185FA5', sub: 'Up from 36% a year ago' },
  { label: 'Workers with zero AI exposure', pct: 30, color: '#1D9E75', sub: 'Cooks, mechanics, bartenders' },
];

const SVGRing = ({ pct, color, size, labelSize, unit }: { pct: number, color: string, size: number, labelSize: number, unit: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ringRef.current) observer.observe(ringRef.current);
    return () => observer.disconnect();
  }, []);

  const strokeWidth = size * 0.12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isVisible ? circumference - (pct / 100) * circumference : circumference;

  return (
    <div className="ring-wrap" style={{ width: size, height: size }} ref={ringRef}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle 
          cx={size/2} cy={size/2} r={radius} 
          fill="none" stroke="var(--color-border-tertiary)" strokeWidth={strokeWidth} 
        />
        <circle 
          cx={size/2} cy={size/2} r={radius} 
          fill="none" stroke={color} strokeWidth={strokeWidth + 1} 
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} 
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1)' }}
        />
      </svg>
      <div className="ring-center">
        <div className="ring-pct" style={{ fontSize: labelSize }}>{isVisible ? pct : 0}%</div>
        <div className="ring-unit">{unit}</div>
      </div>
    </div>
  );
};

const ExposureOverviewCircles: React.FC = () => {
  return (
    <div className="wrap">
      <p className="section-label">Top exposed occupations — observed AI coverage</p>
      <div className="grid-3">
        {topOccs.map((d, i) => (
          <div key={i} className="ring-card">
            <SVGRing pct={d.pct} color={d.color} size={110} labelSize={22} unit="exposed" />
            <div className="ring-label">{d.label}</div>
            <div className="ring-sub">{d.sub}</div>
          </div>
        ))}
      </div>

      <p className="section-label" style={{ marginTop: '2rem' }}>US workforce exposure distribution</p>
      <div className="grid-2">
        {workforce.map((d, i) => (
          <div key={i} className="ring-card">
            <SVGRing pct={d.pct} color={d.color} size={150} labelSize={32} unit="of US jobs" />
            <div className="ring-label" style={{ fontSize: '15px', marginTop: '8px' }}>{d.label}</div>
            <div className="ring-sub" style={{ fontSize: '13px' }}>{d.sub}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .wrap { font-family: var(--font-sans); padding: 2rem 0; margin: 2rem 0; }
        .section-label { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 1.2rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 24px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 24px; }
        .ring-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem 1rem; text-align: center; box-shadow: var(--shadow-sm); transition: transform 0.2s; }
        .ring-card:hover { transform: translateY(-4px); border-color: var(--color-border-hover); }
        :global(.ring-wrap) { position: relative; margin: 0 auto 16px; }
        :global(.ring-center) { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; pointer-events: none; }
        :global(.ring-pct) { font-weight: 700; color: var(--color-text-primary); line-height: 1; }
        :global(.ring-unit) { font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 4px; font-weight: 500; }
        .ring-label { font-size: 0.9rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 6px; }
        .ring-sub { font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.4; }

        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr; }
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ExposureOverviewCircles;
