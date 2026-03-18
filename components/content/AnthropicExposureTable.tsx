'use client';
import React from 'react';

const gaps = [
  { name: 'Computer & Math', theory: 94.3, observed: 35.8 },
  { name: 'Business & Finance', theory: 94.3, observed: 28.4 },
  { name: 'Office & Admin', theory: 90.0, observed: 34.3 },
  { name: 'Legal', theory: 89.0, observed: 20.4 },
  { name: 'Arts & Media', theory: 83.7, observed: 19.2 },
  { name: 'Education & Library', theory: 82.0, observed: 18.2 },
];

const AnthropicExposureTable: React.FC = () => {
  return (
    <div className="wrap">
      <p className="section-label">Theoretical capability vs observed deployment gap</p>
      <div className="gap-card">
        <div className="legend-row">
          <span className="legend-item"><span className="legend-dot" style={{ background: '#B5D4F4' }}></span>Theoretical capability</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: '#185FA5' }}></span>Observed exposure</span>
        </div>
        
        <div className="gap-rows-container">
          {gaps.map((d, i) => {
            const gap = (d.theory - d.observed).toFixed(1);
            return (
              <div key={i} className="gap-row">
                <div className="gap-row-top">
                  <span className="gap-name">{d.name}</span>
                  <span className="gap-nums">
                    {d.theory}% theory · {d.observed}% observed · <strong style={{ color: 'var(--color-text-primary)' }}>{gap}pt gap</strong>
                  </span>
                </div>
                <div className="bar-track">
                  {/* The theory bar */}
                  <div className="bar-theory" style={{ width: `${d.theory}%` }}></div>
                  {/* The observed bar overlaid on top */}
                  <div className="bar-observed" style={{ width: `${d.observed}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .wrap { font-family: var(--font-sans); padding: 2rem 0; margin: 2rem 0; }
        .section-label { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 1.2rem; }
        
        .gap-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; box-shadow: var(--shadow-sm); }
        
        .legend-row { display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); }
        .legend-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 500; color: var(--color-text-secondary); }
        .legend-dot { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
        
        .gap-rows-container { display: flex; flex-direction: column; gap: 20px; }
        .gap-row { display: flex; flex-direction: column; }
        
        .gap-row-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .gap-name { font-size: 0.95rem; font-weight: 600; color: var(--color-text-primary); }
        .gap-nums { font-size: 0.8rem; color: var(--color-text-secondary); }
        
        .bar-track { background: var(--color-border-tertiary); border-radius: 6px; height: 12px; position: relative; overflow: hidden; }
        .bar-theory { position: absolute; top: 0; left: 0; height: 100%; border-radius: 6px; background: #B5D4F4; transition: width 1s ease-out; }
        .bar-observed { position: absolute; top: 0; left: 0; height: 100%; border-radius: 6px; background: #185FA5; transition: width 1s ease-out; }

        @media (max-width: 640px) {
          .gap-card { padding: 1.5rem 1rem; }
          .gap-row-top { flex-direction: column; gap: 4px; }
        }
      `}</style>
    </div>
  );
};

export default AnthropicExposureTable;
