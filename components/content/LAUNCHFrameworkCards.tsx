'use client';
import React, { useState } from 'react';
import { Target, Boxes, ShieldAlert, Navigation, Currency, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';

const LAUNCHFrameworkCards: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "L - Lean Validation",
            subtitle: "Prove the idea before building",
            icon: <Target className="text-blue-400" size={32} />,
            details: "Name 5 specific people who would pay. Document their current workaround. Confirm they will pay for your solution.",
            deliverable: "List of 10 potential customers with documented responses."
        },
        {
            title: "A - Assemble the Stack",
            subtitle: "Build in the right order",
            icon: <Boxes className="text-purple-400" size={32} />,
            details: "Connect GitHub first. Build core value flow (Day 1-3). Add Auth (Day 3-5). Set up Database schema (Day 5-7).",
            deliverable: "Working app on preview URL with Auth and core feature."
        },
        {
            title: "U - Underpin the Backend",
            subtitle: "The security pass",
            icon: <ShieldAlert className="text-rose-400" size={32} />,
            details: "Enable Row Level Security (RLS). Cross-user authorization tests. Secure environment variables & API keys.",
            deliverable: "Supabase RLS enabled on all tables. Authorization verified."
        },
        {
            title: "N - Navigate the Cliff",
            subtitle: "Stripe & payment security",
            icon: <Navigation className="text-amber-400" size={32} />,
            details: "Integrate Stripe Checkout and Portal. Configure Webhooks for event sync. Test with test card numbers.",
            deliverable: "Live Stripe Checkout and working Subscription Portal."
        },
        {
            title: "C - Connect Revenue",
            subtitle: "Launch and distribution",
            icon: <Currency className="text-emerald-400" size={32} />,
            details: "Product Hunt launch. Direct outreach to validation list. Post in niche communities (Reddit/Slack).",
            deliverable: "First 1–10 paying customers secured."
        },
        {
            title: "H - Hand off or Scale",
            subtitle: "Knowing when to hire",
            icon: <GraduationCap className="text-sky-400" size={32} />,
            details: "Identify 'Spaghetti Point'. Generate technical README. Grant system access to your first engineer.",
            deliverable: "GitHub repo handed over with documentation."
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ color: '#fafafa', fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0' }}>The LAUNCH Methodology</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>The 6 stages from idea to paying customers without writing code.</p>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '12px' }}>
                {steps.map((step, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        style={{
                            flex: 1,
                            minWidth: '60px',
                            height: '6px',
                            background: activeStep === idx ? '#3b82f6' : '#27272a',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>

            <div style={{ 
                background: '#18181b', 
                border: '1px solid #27272a', 
                borderRadius: '24px', 
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                    <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {steps[activeStep].icon}
                    </div>
                    <div>
                        <h4 style={{ color: '#fafafa', fontSize: '22px', fontWeight: '800', margin: 0 }}>{steps[activeStep].title}</h4>
                        <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600', margin: 0, textTransform: 'uppercase' }}>{steps[activeStep].subtitle}</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                    <div>
                        <div style={{ color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>Core Activities</div>
                        <p style={{ color: '#d4d4d8', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{steps[activeStep].details}</p>
                    </div>
                    <div style={{ padding: '24px', background: 'rgba(59, 130, 246, 0.03)', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                        <div style={{ color: '#3b82f6', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>Milestone Deliverable</div>
                        <p style={{ color: '#93c5fd', fontSize: '14px', fontWeight: '500', margin: 0, fontStyle: 'italic' }}>"{steps[activeStep].deliverable}"</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #27272a' }}>
                    <button 
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        style={{ background: 'transparent', border: 'none', color: activeStep === 0 ? '#3f3f46' : '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}
                    >
                        <ChevronLeft size={18} /> Previous Stage
                    </button>
                    <button 
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        style={{ background: 'transparent', border: 'none', color: activeStep === steps.length - 1 ? '#3f3f46' : '#fafafa', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}
                    >
                        Next Stage <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LAUNCHFrameworkCards;
