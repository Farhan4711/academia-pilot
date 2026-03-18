'use client';
import React from 'react';
import { UserCheck, GraduationCap, DollarSign } from 'lucide-react';

const WorkerProfileExposureCard: React.FC = () => {
  return (
    <div className="profile-card-container">
      <div className="card-header">
        <h3>The Profile of Maximum AI Exposure</h3>
        <p>The Anthropic data inverts the standard automation narrative.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon-box magenta">
            <UserCheck size={24} />
          </div>
          <div className="stat-value">+16 pts</div>
          <div className="stat-label">More Likely Female</div>
          <p className="stat-desc">Concentrated in clerical, admin, and healthcare records.</p>
        </div>

        <div className="stat-card">
          <div className="icon-box green">
            <DollarSign size={24} />
          </div>
          <div className="stat-value">+47%</div>
          <div className="stat-label">Higher Earnings</div>
          <p className="stat-desc">Compared to the least AI-exposed physical worker baseline.</p>
        </div>

        <div className="stat-card">
          <div className="icon-box blue">
            <GraduationCap size={24} />
          </div>
          <div className="stat-value">4&times;</div>
          <div className="stat-label">More Grad Degrees</div>
          <p className="stat-desc">Cognitive-linguistic tasks mirror graduate-level training.</p>
        </div>
      </div>

      <style jsx>{`
        .profile-card-container {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6) var(--space-8);
          margin: var(--space-8) 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .card-header h3 {
          margin: 0 0 var(--space-2) 0;
          color: var(--color-text-primary);
          font-size: 1.5rem;
        }

        .card-header p {
          color: var(--color-text-secondary);
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--space-6);
          background-color: var(--color-background);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          transition: transform var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
          color: white;
        }

        .magenta { background: linear-gradient(135deg, #d946ef, #a21caf); }
        .green { background: linear-gradient(135deg, #22c55e, #15803d); }
        .blue { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text-primary);
          line-height: 1;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-weight: 700;
          color: var(--color-text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          margin-bottom: var(--space-3);
        }

        .stat-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .profile-card-container {
            padding: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export default WorkerProfileExposureCard;
