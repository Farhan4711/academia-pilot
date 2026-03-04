import Link from 'next/link';

export const metadata = {
    title: "Terms of Service",
    description: "Academia Pilot Terms of Service - Terms and conditions for using our platform.",
    alternates: {
        canonical: "/terms-of-service/",
    },
};

export default function TermsOfServicePage() {
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
                            Terms of Service
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
                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>1. Agreement to Terms</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                By accessing or using Academia Pilot, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service. These Terms apply to all visitors, users, and others who wish to access or use the Service.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>2. Use of Content</h2>
                            <p style={{ marginBottom: 'var(--space-4)' }}>The content on Academia Pilot (including text, graphics, images, prompts, and information) is for informational and educational purposes only.</p>
                            <ul style={{ marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-6)', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: 'var(--space-2)' }}>You may use the prompts and tool recommendations for personal and commercial projects.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>You may not reproduce, distribute, modify, or create derivative works of our original articles or guides without explicit permission.</li>
                                <li style={{ marginBottom: 'var(--space-2)' }}>Automated scraping or extraction of data from our website is strictly prohibited.</li>
                            </ul>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>3. User Accounts & Subscriptions</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                When you create an account or subscribe to our newsletter, you guarantee that the information you provide is accurate, complete, and current. We reserve the right to suspend or terminate accounts that violate our terms or provide false information.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>4. Third-Party Links & Services</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by Academia Pilot. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third party web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites that you visit.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>5. Limitation of Liability</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                In no event shall Academia Pilot, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>

                            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontWeight: 'var(--font-bold)' }}>6. Changes to Terms</h2>
                            <p style={{ marginBottom: 'var(--space-6)' }}>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>

                            <p style={{ marginTop: 'var(--space-8)' }}>If you have any questions about these Terms, please contact us at <a href="mailto:legal@academiapilot.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>legal@academiapilot.com</a>.</p>
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
