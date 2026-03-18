'use client';
import React from 'react';
import { CreditCard, CheckCircle2, AlertCircle, Wallet } from 'lucide-react';

const NoCodePricingTable: React.FC = () => {
    const costs = [
        { service: "Lovable Pro", price: "$25", frequency: "/mo", detail: "Unlimited generations & private projects.", note: "Day 1 requirement" },
        { service: "Vercel Pro", price: "$20", frequency: "/mo", detail: "Commercial use & custom domains.", note: "Required at launch" },
        { service: "Supabase Pro", price: "$25", frequency: "/mo", detail: "Beyond 50k users or 500MB data.", note: "Often free at start" },
        { service: "Custom Domain", price: "$1", frequency: "/mo", detail: "Professional .com or .ai branding.", note: "$12/year approx" },
    ];

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            background: '#09090b',
            padding: '40px 24px',
            borderRadius: '24px',
            margin: '48px 0',
            border: '1px solid #27272a',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    color: '#3b82f6', 
                    padding: '6px 12px', 
                    borderRadius: '99px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                }}>
                    <Wallet size={14} /> Startup Economics
                </div>
                <h3 style={{ color: '#fafafa', fontSize: '28px', fontWeight: '800', margin: '0 0 12px 0', letterSpacing: '-0.025em' }}>
                    Production Stack Monthly Cost
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px' }}>
                    The all-in cost to run a $1M ARR business without a developer.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                {costs.map((item, idx) => (
                    <div key={idx} style={{ 
                        background: '#18181b', 
                        padding: '24px', 
                        borderRadius: '20px', 
                        border: '1px solid #27272a',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ color: '#71717a', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>{item.service}</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                            <span style={{ color: '#fafafa', fontSize: '24px', fontWeight: '800' }}>{item.price}</span>
                            <span style={{ color: '#71717a', fontSize: '14px' }}>{item.frequency}</span>
                        </div>
                        <p style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: '1.5', margin: '0 0 16px 0', flex: 1 }}>{item.detail}</p>
                        <div style={{ color: '#3b82f6', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <CheckCircle2 size={12} /> {item.note}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ 
                background: 'var(--color-surface)', 
                padding: '32px', 
                borderRadius: '24px', 
                border: '1px solid #312e81',
                textAlign: 'center'
            }}>
                <div style={{ color: '#818cf8', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>Total Monthly Burn</div>
                <div style={{ color: '#fafafa', fontSize: '48px', fontWeight: '900', margin: '0 0 8px 0', letterSpacing: '-0.05em' }}>$50—$70</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto' }}>
                    Compare this to the <strong>$15,000/mo</strong> cost of a single senior full-stack engineer in 2026.
                </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', alignItems: 'start', padding: '16px', background: 'rgba(16, 185, 129, 0.03)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <div style={{ color: '#10b981' }}><AlertCircle size={18} /></div>
                <p style={{ color: '#6ee7b7', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                    <strong>Pro Tip:</strong> Most founders stay on Supabase and Vercel's Free tiers for the first 3 months. Your only mandatory Day 1 cost is usually just the builder subscription (Lovable/Replit).
                </p>
            </div>
        </div>
    );
};

export default NoCodePricingTable;
