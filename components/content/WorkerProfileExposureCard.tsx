'use client';
import React, { useEffect, useState, useRef } from 'react';

const profileData = [
  { label: 'More likely female', pct: 16, unit: 'pts higher', color: '#D85A30', size: 100 },
  { label: 'Higher earnings', pct: 47, unit: '% more pay', color: '#185FA5', size: 100 },
  { label: 'Graduate degree', pct: 75, unit: '4× more likely', color: '#1D9E75', size: 100 },
  { label: 'Entry hire drop', pct: 14, unit: '% age 22–25', color: '#BA7517', size: 100 },
];

const WorkerProfileExposureCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrap" ref={containerRef}>
      <p className="section-label">Profile of most AI-exposed worker</p>
      <div className="profile-card">
        <div className="profile-rings">
          {profileData.map((d, i) => {
            const strokeWidth = d.size * 0.12;
            const radius = (d.size - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;
            const pctVal = Math.min(d.pct, 100);
            const strokeDashoffset = isVisible ? circumference - (pctVal / 100) * circumference : circumference;

            return (
              <div key={i} className="p-ring-wrap">
                <div className="ring-wrap" style={{ width: d.size, height: d.size, margin: '0 auto 12px' }}>
                  <svg width={d.size} height={d.size} viewBox={`0 0 ${d.size} ${d.size}`}>
                    <circle 
                      cx={d.size/2} cy={d.size/2} r={radius} 
                      fill="none" stroke="var(--color-border-tertiary)" strokeWidth={strokeWidth} 
                    />
                    <circle 
                      cx={d.size/2} cy={d.size/2} r={radius} 
                      fill="none" stroke={d.color} strokeWidth={strokeWidth + 1} 
                      strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} 
                      strokeLinecap="round" transform={`rotate(-90 ${d.size/2} ${d.size/2})`}
                      style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1)' }}
                    />
                  </svg>
                  <div className="ring-center">
                    <div className="ring-pct" style={{ fontSize: '20px' }}>{isVisible ? d.pct : 0}</div>
                    <div className="ring-unit">{d.unit}</div>
                  </div>
                </div>
                <div className="ring-label">{d.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .wrap { font-family: var(--font-sans); padding: 2rem 0; margin: 2rem 0; }
        .section-label { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 1.2rem; }
        .profile-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2.5rem 1.5rem; box-shadow: var(--shadow-sm); }
        .profile-rings { display: flex; justify-content: space-around; align-items: flex-start; flex-wrap: wrap; gap: 24px; }
        .p-ring-wrap { text-align: center; flex: 1; min-width: 120px; transition: transform 0.2s; }
        .p-ring-wrap:hover { transform: translateY(-4px); }
        .ring-wrap { position: relative; }
        .ring-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; pointer-events: none; width: 100%; }
        .ring-pct { font-weight: 800; color: var(--color-text-primary); line-height: 1; }
        .ring-unit { font-size: 0.65rem; color: var(--color-text-secondary); margin-top: 4px; font-weight: 600; text-transform: uppercase; }
        .ring-label { font-size: 0.9rem; font-weight: 600; color: var(--color-text-primary); margin: 0 auto; max-width: 100px; line-height: 1.3; }

        @media (max-width: 640px) {
          .profile-rings { gap: 32px; flex-direction: column; align-items: center; }
          .p-ring-wrap { width: 100%; display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default WorkerProfileExposureCard;
