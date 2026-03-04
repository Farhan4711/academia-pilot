import Link from 'next/link';

export const metadata = {
    title: "Privacy Policy",
    description: "Academia Pilot Privacy Policy - How we handle your data and protect your privacy.",
    alternates: {
        canonical: "/privacy-policy/",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-12)'
            }}>
                <div className="container container-md">
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Privacy Policy
                        </h1>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            Last updated: February 3, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container container-md">
                    <div className="card" style={{ padding: 'var(--space-8)' }}>
                        <div style={{
                            padding: 'var(--space-8) 0',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.8',
                            fontSize: 'var(--text-base)'
                        }}>
                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>1. Introduction</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                Welcome to Academia Pilot. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>2. The Data We Collect</h2>
                            <p style={{ marginBottom: 'var(--space-4)' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                            <ul style={{ marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-6)', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Contact Data</strong> includes email address.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                            </ul>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>3. How We Use Your Data</h2>
                            <p style={{ marginBottom: 'var(--space-4)' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                            <ul style={{ marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-6)', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Where we need to comply with a legal obligation.</li>
                            </ul>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>4. Third-Party Links</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>5. Data Security</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>6. Your Legal Rights</h2>
                            <p style={{ marginBottom: 'var(--space-4)' }}>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                            <ul style={{ marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-6)', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Request access to your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Request correction of your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Request erasure of your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Object to processing of your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Request restriction of processing your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Request transfer of your personal data.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Right to withdraw consent.</li>
                            </ul>
                            <p style={{ marginBottom: 'var(--space-6)' }}>If you wish to exercise any of the rights set out above, please contact us at <a href="mailto:privacy@academiapilot.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>privacy@academiapilot.com</a>.</p>
                        </div>

                        <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
                            <Link href="/" className="text-accent hover:underline">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
