'use client';
import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'Peak Exposure', value: 74.5, description: 'Computer Programmers (Highest)', color: 'var(--color-accent)' },
  { label: 'Broad Exposure', value: 49.0, description: 'US Jobs with >25% Task Exposure', color: '#3b82f6' },
  { label: 'Zero Exposure', value: 30.0, description: 'Requires physical environmental presence', color: '#10b981' }
];

const ExposureOverviewCircles: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="circles-wrapper" ref={containerRef}>
      <div className="circles-header">
        <h3>The AI Jobs Reality, Visualized</h3>
        <p>A statistical reality check on the labor market trajectory.</p>
      </div>

      <div className="circles-grid">
        {stats.map((stat, idx) => {
          const radius = 54;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = isVisible ? circumference - (stat.value / 100) * circumference : circumference;

          return (
            <div key={idx} className="circle-card">
              <div className="svg-container">
                <svg width="140" height="140" viewBox="0 0 140 140">
                  {/* Background Circle */}
                  <circle
                    className="circle-bg"
                    cx="70"
                    cy="70"
                    r={radius}
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <circle
                    className="circle-progress"
                    cx="70"
                    cy="70"
                    r={radius}
                    strokeWidth="12"
                    fill="none"
                    stroke={stat.color}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 70 70)"
                  />
                </svg>
                <div className="circle-text">
                  <span className="percentage">{isVisible ? stat.value : 0}%</span>
                </div>
              </div>
              <h4>{stat.label}</h4>
              <p>{stat.description}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .circles-wrapper {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          margin: var(--space-8) 0;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }

        .circles-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .circles-header h3 {
          margin: 0 0 var(--space-2) 0;
          color: var(--color-text-primary);
          font-size: 1.5rem;
        }

        .circles-header p {
          color: var(--color-text-secondary);
          margin: 0;
        }

        .circles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .circle-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .svg-container {
          position: relative;
          width: 140px;
          height: 140px;
          margin-bottom: var(--space-4);
        }

        .circle-bg {
          stroke: var(--color-border);
        }

        .circle-progress {
          transition: stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .circle-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .percentage {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-text-primary);
          line-height: 1;
        }

        .circle-card h4 {
          margin: 0 0 var(--space-2) 0;
          font-size: 1.1rem;
          color: var(--color-text-primary);
        }

        .circle-card p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          line-height: 1.5;
          max-width: 180px;
        }

        @media (max-width: 768px) {
          .circles-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          .circles-wrapper {
            padding: var(--space-6) var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ExposureOverviewCircles;
