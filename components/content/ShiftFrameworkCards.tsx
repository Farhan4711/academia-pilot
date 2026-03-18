'use client';
import React from 'react';
import { Target, Map, ArrowDownToLine, ArrowRight, Clock } from 'lucide-react';

const shiftSteps = [
  {
    letter: 'S',
    title: 'Skills Hardening',
    desc: 'Build irreplaceability in the Gap Tasks. Focus on physical presence, relationship capital, ethical accountability, and novel problem decomposition.',
    icon: <Target className="step-icon" size={20} />
  },
  {
    letter: 'H',
    title: 'High-Gap Task ID',
    desc: 'Map your specific exposure. Isolate the tasks in your role that resist text-specification or lack full automation workflows to find your growth window.',
    icon: <Map className="step-icon" size={20} />
  },
  {
    letter: 'I',
    title: 'Identify Your Floor',
    desc: 'Know the minimum observed exposure roles. Evaluate adjacent pivots toward physical presence or relationship primacy to drastically reduce exposure.',
    icon: <ArrowDownToLine className="step-icon" size={20} />
  },
  {
    letter: 'F',
    title: 'Forward Exposure Mapping',
    desc: 'Read the theoretical ceiling, not just today\'s observed floor. Track tasks currently performed by AI in leading-edge organizations as deprecating assets.',
    icon: <ArrowRight className="step-icon" size={20} />
  },
  {
    letter: 'T',
    title: 'Transition Runway',
    desc: 'Act on the 14% entry-level hiring drop timeline. New entrants have zero runway; existing workers have a 5–10 year window to build gap-task expertise.',
    icon: <Clock className="step-icon" size={20} />
  }
];

const ShiftFrameworkCards: React.FC = () => {
  return (
    <div className="shift-container">
      {shiftSteps.map((step, idx) => (
        <div key={idx} className="shift-card">
          <div className="shift-marker">
            <div className="letter-circle">{step.letter}</div>
            {idx < shiftSteps.length - 1 && <div className="connector-line"></div>}
          </div>
          <div className="shift-content">
            <div className="shift-title-area">
              <span className="icon-wrap">{step.icon}</span>
              <h5>{step.title}</h5>
            </div>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}

      <style jsx>{`
        .shift-container {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6) var(--space-8);
          margin: var(--space-8) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          box-shadow: var(--shadow-sm);
        }

        .shift-card {
          display: flex;
          gap: var(--space-6);
        }

        .shift-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
          flex-shrink: 0;
        }

        .letter-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.25rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .connector-line {
          width: 2px;
          flex-grow: 1;
          background-color: var(--color-border);
          margin-top: -5px;
          margin-bottom: -15px;
          z-index: 1;
        }

        .shift-content {
          flex-grow: 1;
          background-color: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-5);
          margin-bottom: var(--space-4);
          transition: transform var(--transition-short), box-shadow var(--transition-short);
        }

        .shift-content:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-border-hover);
        }

        .shift-title-area {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-2);
        }

        .icon-wrap {
          color: var(--color-text-secondary);
          display: flex;
        }

        .shift-content h5 {
          margin: 0;
          color: var(--color-text-primary);
          font-size: 1.15rem;
        }

        .shift-content p {
          margin: 0;
          color: var(--color-text-secondary);
          line-height: 1.5;
          font-size: 0.95rem;
        }

        @media (max-width: 640px) {
          .shift-container {
            padding: var(--space-4);
          }
          .shift-card {
            gap: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ShiftFrameworkCards;
