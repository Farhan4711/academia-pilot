'use client';
import React from 'react';
import { Shield, TrendingUp, AlertTriangle, Monitor } from 'lucide-react';

const exposureData = [
  { category: 'Computer and Math', theoretical: 94.3, observed: 35.8, gap: 58.5, icon: <Monitor size={18} /> },
  { category: 'Business and Finance', theoretical: 94.3, observed: 28.4, gap: 65.9, icon: <TrendingUp size={18} /> },
  { category: 'Office and Administrative', theoretical: 90.0, observed: 34.3, gap: 55.7, icon: <Shield size={18} /> },
  { category: 'Legal', theoretical: 89.0, observed: 20.4, gap: 68.6, icon: <AlertTriangle size={18} /> },
  { category: 'Arts and Media', theoretical: 83.7, observed: 19.2, gap: 64.5, icon: <Monitor size={18} /> },
  { category: 'Education and Library', theoretical: 85.0, observed: 18.2, gap: 66.8, icon: <Shield size={18} /> },
];

const AnthropicExposureTable: React.FC = () => {
  return (
    <div className="exposure-table-container">
      <div className="table-header">
        <h4>Structural Gap: Theoretical vs. Observed AI Exposure</h4>
        <p>The blue segment represents actual AI deployment; the gray segment represents unfulfilled potential.</p>
      </div>
      
      <div className="table-content">
        {exposureData.map((item, idx) => (
          <div key={idx} className="data-row">
            <div className="row-label">
              <span className="icon-wrapper">{item.icon}</span>
              <span className="category-name">{item.category}</span>
            </div>
            
            <div className="bar-container">
              <div className="bar-wrapper">
                {/* Observed Bar */}
                <div 
                  className="bar observed-bar" 
                  style={{ width: `${item.observed}%` }}
                >
                  <span className="bar-label">{item.observed}%</span>
                </div>
                {/* Gap Bar */}
                <div 
                  className="bar gap-bar" 
                  style={{ width: `${item.gap}%` }}
                >
                  <span className="bar-label hidden-mobile">Gap: {item.gap} pts</span>
                </div>
              </div>
              <div className="theoretical-marker" style={{ left: `${item.theoretical}%` }}>
                <span className="marker-label">{item.theoretical}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .exposure-table-container {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin: var(--space-8) 0;
          box-shadow: var(--shadow-sm);
        }

        .table-header {
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--color-border);
        }

        .table-header h4 {
          margin: 0 0 var(--space-2) 0;
          color: var(--color-text-primary);
        }

        .table-header p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: var(--text-sm);
        }

        .table-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .data-row {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .row-label {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex: 0 0 200px;
        }

        .icon-wrapper {
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-name {
          font-weight: var(--font-medium);
          font-size: var(--text-sm);
          color: var(--color-text-primary);
        }

        .bar-container {
          flex: 1;
          position: relative;
          height: 32px;
          display: flex;
          align-items: center;
        }

        .bar-wrapper {
          display: flex;
          width: 100%;
          height: 24px;
          background-color: var(--color-background);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .bar {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 var(--space-2);
          font-size: 0.75rem;
          font-weight: var(--font-bold);
          color: white;
          white-space: nowrap;
          transition: width 0.5s ease-in-out;
        }

        .observed-bar {
          background-color: var(--color-accent);
          justify-content: flex-end;
        }

        .gap-bar {
          background-color: var(--color-border);
          color: var(--color-text-secondary);
          justify-content: center;
        }

        .theoretical-marker {
          position: absolute;
          top: -4px;
          height: 40px;
          width: 2px;
          background-color: var(--color-text-primary);
          z-index: 2;
        }

        .marker-label {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          font-weight: var(--font-bold);
          color: var(--color-text-primary);
        }

        @media (max-width: 640px) {
          .data-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-2);
          }
          .row-label {
            flex: 0 0 auto;
          }
          .bar-container {
            width: 100%;
          }
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AnthropicExposureTable;
