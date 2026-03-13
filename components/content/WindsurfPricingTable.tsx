'use client';
import React from 'react';

const WindsurfPricingTable: React.FC = () => {
    return (
        <div style={{ margin: 'var(--space-10) 0' }}>
            <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
                <div className="hud-border transition" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-surface)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-xl)' }}>Free</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold', margin: 'var(--space-4) 0', color: 'var(--color-text-primary)' }}>$0</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>For individuals</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', fontSize: 'var(--text-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>25 credits/month</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>SWE-1.5 Free</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>Basic Autocomplete</span></li>
                    </ul>
                </div>

                <div className="hud-border transition" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-surface)', textAlign: 'center', borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-accent)', position: 'relative', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-accent)', color: '#fff', fontSize: 'var(--text-xs)', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Most Popular</div>
                    <h3 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-xl)', color: 'var(--color-accent)' }}>Pro</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold', margin: 'var(--space-4) 0', color: 'var(--color-accent)' }}>$15<span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>/mo</span></div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>25% cheaper than Cursor</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', fontSize: 'var(--text-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>500 flow credits</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>Premium SWE-1.5 (Cerebras)</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>Arena Mode access</span></li>
                    </ul>
                </div>

                <div className="hud-border transition" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-surface)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-xl)' }}>Enterprise</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold', margin: 'var(--space-4) 0', color: 'var(--color-text-primary)' }}>$60<span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>/mo</span></div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Per user</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', fontSize: 'var(--text-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span style={{ textDecoration: 'underline decoration-dotted' }}>On-prem deployment</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>SOC 2 Type II</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>FedRAMP High</span></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✅ <span>MDM policy via Cascade</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WindsurfPricingTable;
