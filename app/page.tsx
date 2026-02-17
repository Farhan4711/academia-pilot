import Link from 'next/link';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import { getLatestContent, formatDate } from '@/lib/content';

export default function Home() {
  // Dynamically load latest 4 news articles
  const trendingNews = getLatestContent('news', 4);

  const pilotsPicks = [
    {
      title: "Claude 3.5 Sonnet",
      description: "Best-in-class for coding and analysis",
      score: 9.5,
      badge: "Top Pick"
    },
    {
      title: "Google Antigravity",
      description: "Revolutionary vibe coding experience",
      score: 9.0,
      badge: "Game Changer"
    },
    {
      title: "Perplexity Pro",
      description: "The future of AI-powered research",
      score: 8.5,
      badge: "Essential"
    }
  ];

  const vaultTeasers = [
    "The Vibe Coding Starter",
    "Agentic Swarm Orchestrator",
    "Multi-Agent Debate System",
    "Research Assistant Prompt",
    "Autonomous Research Pipeline"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-surface) 100%)',
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Badge variant="accent" style={{ marginBottom: 'var(--space-4)' }}>
              Welcome to the Agentic Frontier
            </Badge>

            <h1 style={{
              fontSize: 'var(--text-6xl)',
              fontWeight: 'var(--font-black)',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1'
            }}>
              Your Co-Pilot for AI Breakthroughs
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-8)',
              lineHeight: '1.6'
            }}>
              Navigate the rapidly evolving world of AI with breaking news, tool reviews,
              battle-tested prompts, and curated courses. Built for entrepreneurs and creators
              who want to stay ahead without the overwhelm.
            </p>

            <div className="flex gap-4 justify-center" style={{ marginBottom: 'var(--space-12)' }}>
              <Button variant="cta" size="lg" href="#newsletter-signup">
                Join the Flight Crew
              </Button>
              <Button variant="secondary" size="lg" href="/ai-mastery-hub">
                Start with AI Mastery Hub
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-3 gap-6" style={{ marginTop: 'var(--space-12)' }}>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', color: 'var(--color-accent)' }}>
                  50+
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                  AI Tools Reviewed
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', color: 'var(--color-accent)' }}>
                  100+
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                  Prompts in Vault
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-black)', color: 'var(--color-accent)' }}>
                  Daily
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                  AI News Updates
                </div>
              </div>
            </div>

            {/* Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Academia Pilot?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Academia Pilot is your co-pilot for navigating the agentic frontier. We provide breaking AI news, tool reviews, battle-tested prompts, and curated courses to help entrepreneurs and creators stay ahead in the rapidly evolving AI landscape."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I access premium prompts in the Vault?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Join the Flight Crew by subscribing to our newsletter. Premium prompts are available to all subscribers and include advanced agentic workflows that can save you 20+ hours per week."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes Academia Pilot different from other AI resources?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We focus on the 'agentic' frontier - AI systems that can act autonomously. Our content is curated specifically for entrepreneurs and creators, cutting through the noise to deliver only what matters for building real businesses with AI."
                      }
                    }
                  ]
                })
              }}
            />
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="section-title">Trending Now</h2>
            <p className="text-center text-secondary" style={{ fontSize: 'var(--text-lg)', marginTop: 'calc(var(--space-4) * -1)' }}>
              The latest AI breakthroughs you need to know about
            </p>
          </div>

          <div className="grid grid-3">
            {trendingNews.map((news, index) => (
              <Card key={index} href={`/news/${news.category || 'uncategorized'}/${news.slug.split('/').pop()}`}>
                <div style={{ marginBottom: 'var(--space-2)' }}>
                  <Badge variant="cta">{formatDate(news.date)}</Badge>
                </div>
                <CardTitle>{news.title}</CardTitle>
                <CardDescription>{news.excerpt}</CardDescription>
                <div style={{ marginTop: 'var(--space-4)' }}>
                  <span className="text-accent" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)' }}>
                    Read more →
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
            <Button variant="secondary" href="/news">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Pilot's Picks Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="section-title">The Pilot's Picks</h2>
            <p className="text-center text-secondary" style={{ fontSize: 'var(--text-lg)', marginTop: 'calc(var(--space-4) * -1)' }}>
              Essential AI tools every creator needs right now
            </p>
          </div>

          <div className="grid grid-3">
            {pilotsPicks.map((tool, index) => (
              <Card key={index} variant="highlight" href="/tool-hangar">
                <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-3)' }}>
                  <Badge variant="success">{tool.badge}</Badge>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-black)',
                    color: 'var(--color-accent)'
                  }}>
                    {tool.score}
                  </div>
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
                <div style={{ marginTop: 'var(--space-4)' }}>
                  <span className="text-accent" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)' }}>
                    View in Tool Hangar →
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
            <Button variant="primary" href="/tool-hangar">
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Vault Teaser Section */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="section-title">The Prompt Vault</h2>
            <p className="text-center text-secondary" style={{ fontSize: 'var(--text-lg)', marginTop: 'calc(var(--space-4) * -1)' }}>
              Battle-tested prompts that save you 20+ hours per week
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="grid grid-2 gap-4">
              {vaultTeasers.map((prompt, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: index >= 2
                      ? 'linear-gradient(135deg, var(--color-surface) 0%, rgba(255, 77, 0, 0.05) 100%)'
                      : 'var(--color-surface)'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-1)'
                      }}>
                        {prompt}
                      </div>
                      {index >= 2 && (
                        <Badge variant="cta" style={{ fontSize: 'var(--text-xs)' }}>
                          Premium
                        </Badge>
                      )}
                    </div>
                    {index >= 2 && (
                      <div style={{ fontSize: 'var(--text-2xl)' }}>🔒</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
              <Button variant="cta" href="/prompt-vault">
                Unlock the Vault
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>

      {/* FAQ Section - AEO Optimization */}
      <section className="section">
        <div className="container container-md">
          <h2 style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: 'var(--font-bold)',
            marginBottom: 'var(--space-8)',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                What is Academia Pilot?
              </h3>
              <p className="text-secondary">
                Academia Pilot is your co-pilot for navigating the agentic frontier. We provide breaking AI news,
                tool reviews, battle-tested prompts, and curated courses to help entrepreneurs and creators stay
                ahead in the rapidly evolving AI landscape.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                How do I access premium prompts in the Vault?
              </h3>
              <p className="text-secondary">
                Join the Flight Crew by subscribing to our newsletter. Premium prompts are available to all subscribers
                and include advanced agentic workflows that can save you 20+ hours per week.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                What makes Academia Pilot different from other AI resources?
              </h3>
              <p className="text-secondary">
                We focus on the "agentic" frontier - AI systems that can act autonomously. Our content is curated
                specifically for entrepreneurs and creators, cutting through the noise to deliver only what matters
                for building real businesses with AI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
