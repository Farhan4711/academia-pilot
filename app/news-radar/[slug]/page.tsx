import React from 'react';
import { getAllContent, getContentBySlug, getRelatedContent, formatDate } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NextImage from 'next/image';
import Badge from '@/components/ui/Badge';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import FAQAccordion from '@/components/ui/FAQAccordion';
import TLDRBox from '@/components/ui/TLDRBox';
import TableOfContents from '@/components/ui/TableOfContents';
import SocialShare from '@/components/ui/SocialShare';
import InlineCTA from '@/components/ui/InlineCTA';
import AgenticVsIDETable from '@/components/content/AgenticVsIDETable';
import AgenticArchitecture from '@/components/content/AgenticArchitecture';
import WorkflowComparison from '@/components/content/WorkflowComparison';
import AIOverviewTable from '@/components/content/AIOverviewTable';
import AITestResults from '@/components/content/AITestResults';
import AIFinalVerdict from '@/components/content/AIFinalVerdict';
import SkillsVsTraditionalTable from '@/components/content/SkillsVsTraditionalTable';
import AIToolsGrid from '@/components/content/AIToolsGrid';
import CareerRoadmap from '@/components/content/CareerRoadmap';
import SalaryComparisonChart from '@/components/content/SalaryComparisonChart';
import SuccessStoriesCards from '@/components/content/SuccessStoriesCards';
import LearningRoadmap from '@/components/content/LearningRoadmap';
import AIDevToolkit from '@/components/content/AIDevToolkit';
import CareerPathsGrid from '@/components/content/CareerPathsGrid';
import NinetyDayPlan from '@/components/content/NinetyDayPlan';
import GeminiTierComparisonTable from '@/components/content/GeminiTierComparisonTable';
import GeminiPricingTable from '@/components/content/GeminiPricingTable';
import CompetitorMatrixTable from '@/components/content/CompetitorMatrixTable';
import GeminiArchitectureDiagram from '@/components/content/GeminiArchitectureDiagram';
import PromptPillarsDiagram from '@/components/content/PromptPillarsDiagram';
import PromptTemplateCard from '@/components/content/PromptTemplateCard';
import BeforeAfterPromptComparison from '@/components/content/BeforeAfterPromptComparison';
import InteractivePromptChecklist from '@/components/content/InteractivePromptChecklist';
import AICodingToolsComparison from '@/components/content/AICodingToolsComparison';
import ClaudeMDRelativeValue from '@/components/content/ClaudeMDRelativeValue';
import AestheticDirectionsGrid from '@/components/content/AestheticDirectionsGrid';
import ScreenshotLoopDiagram from '@/components/content/ScreenshotLoopDiagram';
import ComponentUpgradeShowcase from '@/components/content/ComponentUpgradeShowcase';
import VibeToProductionRoadmap from '@/components/content/VibeToProductionRoadmap';
import ClaudePricingTable from '@/components/content/ClaudePricingTable';
import ClaudeVsCompetitorsTable from '@/components/content/ClaudeVsCompetitorsTable';
import ClaudeModelComparisonTable from '@/components/content/ClaudeModelComparisonTable';
import IDEvsBuilderMetaTable from '@/components/content/IDEvsBuilderMetaTable';
import EasternAIIDEComparison from '@/components/content/EasternAIIDEComparison';
import FileLevelLimitationMatrix from '@/components/content/FileLevelLimitationMatrix';
import MicrosoftCoursesComparison from '@/components/content/MicrosoftCoursesComparison';
import MicrosoftLearningPathDiagram from '@/components/content/MicrosoftLearningPathDiagram';
import MicrosoftCredentialArchitecture from '@/components/content/MicrosoftCredentialArchitecture';
import MicrosoftLearnPlatformComparison from '@/components/content/MicrosoftLearnPlatformComparison';
import MicrosoftCourseROI from '@/components/content/MicrosoftCourseROI';
import MicrosoftSkillMethod from '@/components/content/MicrosoftSkillMethod';
import MicrosoftCourseDetailBreakdown from '@/components/content/MicrosoftCourseDetailBreakdown';
import OpenClawArchitectureDiagram from '@/components/content/OpenClawArchitectureDiagram';
import OpenClawTechComparison from '@/components/content/OpenClawTechComparison';
import OpenClawMonetizationTable from '@/components/content/OpenClawMonetizationTable';
import OpenClawRiskMatrix from '@/components/content/OpenClawRiskMatrix';
import CLAWExecutionFramework from '@/components/content/CLAWExecutionFramework';
import OpenClawProductionComponents from '@/components/content/OpenClawProductionComponents';
import OpenClawMistakes from '@/components/content/OpenClawMistakes';
import OpenClawEcosystemComparison from '@/components/content/OpenClawEcosystemComparison';
import OpenClawCostStructure from '@/components/content/OpenClawCostStructure';
import AIGlobalPricingMatrix from '@/components/content/AIGlobalPricingMatrix';
import LiteracyVsFluencyTable from '@/components/content/LiteracyVsFluencyTable';
import FluencyBehaviorsMatrix from '@/components/content/FluencyBehaviorsMatrix';
import FluencyDimensionsGrid from '@/components/content/FluencyDimensionsGrid';
import FluencyMaturityModel from '@/components/content/FluencyMaturityModel';
import FluencySelfAssessmentChecklist from '@/components/content/FluencySelfAssessmentChecklist';
import GravityConfigVisual from '@/components/content/GravityConfigVisual';
import TerminalPolicyTiers from '@/components/content/TerminalPolicyTiers';
import ModelRotationStrategy from '@/components/content/ModelRotationStrategy';
import ArtifactReviewPolicyCard from '@/components/content/ArtifactReviewPolicyCard';
import MCPServerCards from '@/components/content/MCPServerCards';
import AntigravityFixesSummary from '@/components/content/AntigravityFixesSummary';
import NxMIntegrationVisual from '@/components/content/NxMIntegrationVisual';
import ProtocolAdoptionStats from '@/components/content/ProtocolAdoptionStats';
import ProtocolLayerArchitecture from '@/components/content/ProtocolLayerArchitecture';
import StackDecisionFramework from '@/components/content/StackDecisionFramework';
import ProtocolSecurityMatrix from '@/components/content/ProtocolSecurityMatrix';
import ProtocolComparisonTable from '@/components/content/ProtocolComparisonTable';
import AgentHQArchitectureDiagram from '@/components/content/AgentHQArchitectureDiagram';
import MultiAgentOrchestrationFlow from '@/components/content/MultiAgentOrchestrationFlow';
import AgentHQCompetitorMatrix from '@/components/content/AgentHQCompetitorMatrix';
import AgentSessionCostMatrix from '@/components/content/AgentSessionCostMatrix';
import GravityVariantsTable from '@/components/content/GravityVariantsTable';
import DOMPhysicsLayerDiagram from '@/components/content/DOMPhysicsLayerDiagram';
import PhysicsMaterialSelector from '@/components/content/PhysicsMaterialSelector';
import PHYSICSMethodFramework from '@/components/content/PHYSICSMethodFramework';
import PerformanceOptimizationRanking from '@/components/content/PerformanceOptimizationRanking';
import BrowserCompatibilityMatrix from '@/components/content/BrowserCompatibilityMatrix';
import MigrationEventTimeline from '@/components/content/MigrationEventTimeline';
import UninstallSurgeStats from '@/components/content/UninstallSurgeStats';
import ClaudeVsChatGPTMatrix from '@/components/content/ClaudeVsChatGPTMatrix';
import OutageIncidentTracker from '@/components/content/OutageIncidentTracker';
import SwitchDecisionFramework from '@/components/content/SwitchDecisionFramework';
import DatabaseSelector from '@/components/content/DatabaseSelector';
import RelationalDatabaseTable from '@/components/content/RelationalDatabaseTable';
import AgentSuccessBenchmark from '@/components/content/AgentSuccessBenchmark';
import CompoundAccuracyVisualizer from '@/components/content/CompoundAccuracyVisualizer';
import AbandonmentStatsCards from '@/components/content/AbandonmentStatsCards';
import AgentCapabilityMatrix from '@/components/content/AgentCapabilityMatrix';
import VerifyFrameworkGuide from '@/components/content/VerifyFrameworkGuide';
import ToolSelectionMatrix from '@/components/content/ToolSelectionMatrix';
import NoCodeStackVisualizer from '@/components/content/NoCodeStackVisualizer';
import LAUNCHFrameworkCards from '@/components/content/LAUNCHFrameworkCards';
import HandoffChecklist from '@/components/content/HandoffChecklist';
import NoCodePricingTable from '@/components/content/NoCodePricingTable';

// Generate static params for all news articles (required for static export)
export async function generateStaticParams() {
    try {
        const allNews = getAllContent('news');
        return allNews.map(news => ({
            slug: news.slug.split('/').pop() || news.slug,
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;
        const article = getContentBySlug('news', slug);

        if (!article) {
            return { title: 'Article Not Found - Academia Pilot' };
        }

        let baseTitle = article.title;
        if (baseTitle.length > 50) {
            baseTitle = `${baseTitle.substring(0, 47)}...`;
        }

        return {
            title: baseTitle,
            description: article.excerpt,
            keywords: article.tags?.join(', '),
            alternates: {
                canonical: `/news-radar/${slug}/`,
            },
            openGraph: {
                title: article.title,
                description: article.excerpt,
                type: 'article',
                url: `https://academiapilot.com/news-radar/${slug}/`,
                images: [
                    {
                        url: article.image || '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: article.title,
                description: article.excerpt,
                images: [article.image || '/og-image.png'],
            },
        };
    } catch (error) {
        return { title: 'Error - Academia Pilot' };
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getContentBySlug('news', slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedContent('news', slug, article.tags || [], 3);

    return (
        <div>
            {/* Article Header */}
            <article>
                <section className="section" style={{
                    background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-primary) 100%)',
                    paddingTop: 'var(--space-16)',
                    paddingBottom: 'var(--space-8)'
                }}>
                    <div className="container container-article">
                        {/* Breadcrumb */}
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <div className="flex items-center gap-2 text-sm text-accent">
                                <Link href="/" className="hover:underline">Home</Link>
                                <span>/</span>
                                <Link href="/news-radar" className="hover:underline">News Radar</Link>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-2 items-center" style={{ marginBottom: 'var(--space-4)' }}>
                            <Badge variant="cta">{formatDate(article.date)}</Badge>
                            {article.badge && (
                                <Badge variant="cta">{article.badge}</Badge>
                            )}
                            {article.featured && (
                                <Badge variant="accent">Featured</Badge>
                            )}
                            {article.category && (
                                <Badge variant="accent">{article.category}</Badge>
                            )}
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'var(--text-5xl)',
                            fontWeight: 'var(--font-black)',
                            marginBottom: 'var(--space-4)',
                            lineHeight: '1.2'
                        }}>
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6',
                            marginBottom: 'var(--space-6)'
                        }}>
                            {article.excerpt}
                        </p>

                        {/* Meta info */}
                        <div className="flex gap-4 items-center text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                            {article.author && (
                                <span>By {article.author}</span>
                            )}
                            <span>•</span>
                            <span>{formatDate(article.date)}</span>
                        </div>

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--space-4)' }}>
                                {article.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: 'var(--text-xs)',
                                            color: 'var(--color-text-muted)',
                                            backgroundColor: 'var(--color-primary)',
                                            padding: 'var(--space-1) var(--space-3)',
                                            borderRadius: 'var(--radius-full)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Hero image */}
                        {article.image && (
                            <div style={{ marginTop: 'var(--space-8)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                                <NextImage
                                    src={article.image}
                                    alt={article.title}
                                    width={1200}
                                    height={630}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Article Content */}
                <section className="section">
                    <div className="container container-article">
                        {/* TL;DR / Key Takeaways */}
                        {article.tldr && Array.isArray(article.tldr) && article.tldr.length > 0 && (
                            <TLDRBox points={article.tldr} />
                        )}
                        {/* Auto table of contents */}
                        <TableOfContents content={article.content} />

                        {(() => {
                            const COMPONENT_MAP: Record<string, React.ReactNode> = {
                                'AgenticVsIDETable': <AgenticVsIDETable />,
                                'AgenticArchitecture': <AgenticArchitecture />,
                                'WorkflowComparison': <WorkflowComparison />,
                                'AIOverviewTable': <AIOverviewTable />,
                                'AITestResults': <AITestResults />,
                                'AIFinalVerdict': <AIFinalVerdict />,
                                'InlineCTA': <InlineCTA title="Explore the Vault" description="Check out our curated prompts." buttonText="View Prompts" href="/prompt-vault/" />,
                                'SkillsVsTraditionalTable': <SkillsVsTraditionalTable />,
                                'AIToolsGrid': <AIToolsGrid />,
                                'CareerRoadmap': <CareerRoadmap />,
                                'SalaryComparisonChart': <SalaryComparisonChart />,
                                'SuccessStoriesCards': <SuccessStoriesCards />,
                                'LearningRoadmap': <LearningRoadmap />,
                                'AIDevToolkit': <AIDevToolkit />,
                                'CareerPathsGrid': <CareerPathsGrid />,
                                'NinetyDayPlan': <NinetyDayPlan />,
                                'GeminiTierComparisonTable': <GeminiTierComparisonTable />,
                                'GeminiPricingTable': <GeminiPricingTable />,
                                'CompetitorMatrixTable': <CompetitorMatrixTable />,
                                'GeminiArchitectureDiagram': <GeminiArchitectureDiagram />,
                                'PromptPillarsDiagram': <PromptPillarsDiagram />,
                                'PromptTemplateCard': <PromptTemplateCard />,
                                'BeforeAfterPromptComparison': <BeforeAfterPromptComparison />,
                                'InteractivePromptChecklist': <InteractivePromptChecklist />,
                                'AICodingToolsComparison': <AICodingToolsComparison />,
                                'ClaudeMDRelativeValue': <ClaudeMDRelativeValue />,
                                'AestheticDirectionsGrid': <AestheticDirectionsGrid />,
                                'ScreenshotLoopDiagram': <ScreenshotLoopDiagram />,
                                'ComponentUpgradeShowcase': <ComponentUpgradeShowcase />,
                                'VibeToProductionRoadmap': <VibeToProductionRoadmap />,
                                'ClaudePricingTable': <ClaudePricingTable />,
                                'ClaudeVsCompetitorsTable': <ClaudeVsCompetitorsTable />,
                                'ClaudeModelComparisonTable': <ClaudeModelComparisonTable />,
                                'IDEvsBuilderMetaTable': <IDEvsBuilderMetaTable />,
                                'EasternAIIDEComparison': <EasternAIIDEComparison />,
                                'FileLevelLimitationMatrix': <FileLevelLimitationMatrix />,
                                'MicrosoftCoursesComparison': <MicrosoftCoursesComparison />,
                                'MicrosoftLearningPathDiagram': <MicrosoftLearningPathDiagram />,
                                'MicrosoftCredentialArchitecture': <MicrosoftCredentialArchitecture />,
                                'MicrosoftLearnPlatformComparison': <MicrosoftLearnPlatformComparison />,
                                'MicrosoftCourseROI': <MicrosoftCourseROI />,
                                'MicrosoftSkillMethod': <MicrosoftSkillMethod />,
                                'MicrosoftCourseDetailBreakdown': <MicrosoftCourseDetailBreakdown />,
                                'OpenClawArchitectureDiagram': <OpenClawArchitectureDiagram />,
                                'OpenClawTechComparison': <OpenClawTechComparison />,
                                'OpenClawMonetizationTable': <OpenClawMonetizationTable />,
                                'OpenClawRiskMatrix': <OpenClawRiskMatrix />,
                                'CLAWExecutionFramework': <CLAWExecutionFramework />,
                                'OpenClawProductionComponents': <OpenClawProductionComponents />,
                                'OpenClawMistakes': <OpenClawMistakes />,
                                'OpenClawEcosystemComparison': <OpenClawEcosystemComparison />,
                                'OpenClawCostStructure': <OpenClawCostStructure />,
                                'AIGlobalPricingMatrix': <AIGlobalPricingMatrix />,
                                'LiteracyVsFluencyTable': <LiteracyVsFluencyTable />,
                                'FluencyBehaviorsMatrix': <FluencyBehaviorsMatrix />,
                                'FluencyDimensionsGrid': <FluencyDimensionsGrid />,
                                'FluencyMaturityModel': <FluencyMaturityModel />,
                                'FluencySelfAssessmentChecklist': <FluencySelfAssessmentChecklist />,

                                'GravityConfigVisual': <GravityConfigVisual />,
                                'TerminalPolicyTiers': <TerminalPolicyTiers />,
                                'ModelRotationStrategy': <ModelRotationStrategy />,
                                'ArtifactReviewPolicyCard': <ArtifactReviewPolicyCard />,
                                'MCPServerCards': <MCPServerCards />,
                                'AntigravityFixesSummary': <AntigravityFixesSummary />,
                                'NxMIntegrationVisual': <NxMIntegrationVisual />,
                                'ProtocolAdoptionStats': <ProtocolAdoptionStats />,
                                'ProtocolLayerArchitecture': <ProtocolLayerArchitecture />,
                                'StackDecisionFramework': <StackDecisionFramework />,
                                'ProtocolSecurityMatrix': <ProtocolSecurityMatrix />,
                                'ProtocolComparisonTable': <ProtocolComparisonTable />,
                                'AgentHQArchitectureDiagram': <AgentHQArchitectureDiagram />,
                                'MultiAgentOrchestrationFlow': <MultiAgentOrchestrationFlow />,
                                'AgentHQCompetitorMatrix': <AgentHQCompetitorMatrix />,
                                'AgentSessionCostMatrix': <AgentSessionCostMatrix />,
                                'GravityVariantsTable': <GravityVariantsTable />,
                                'DOMPhysicsLayerDiagram': <DOMPhysicsLayerDiagram />,
                                'PhysicsMaterialSelector': <PhysicsMaterialSelector />,
                                'PHYSICSMethodFramework': <PHYSICSMethodFramework />,
                                'PerformanceOptimizationRanking': <PerformanceOptimizationRanking />,
                                'BrowserCompatibilityMatrix': <BrowserCompatibilityMatrix />,
                                'MigrationEventTimeline': <MigrationEventTimeline />,
                                'UninstallSurgeStats': <UninstallSurgeStats />,
                                'ClaudeVsChatGPTMatrix': <ClaudeVsChatGPTMatrix />,
                                'OutageIncidentTracker': <OutageIncidentTracker />,
                                'SwitchDecisionFramework': <SwitchDecisionFramework />,
                                'DatabaseSelector': <DatabaseSelector />,
                                'RelationalDatabaseTable': <RelationalDatabaseTable />,
                                'AgentSuccessBenchmark': <AgentSuccessBenchmark />,
                                'CompoundAccuracyVisualizer': <CompoundAccuracyVisualizer />,
                                'AbandonmentStatsCards': <AbandonmentStatsCards />,
                                'AgentCapabilityMatrix': <AgentCapabilityMatrix />,
                                'VerifyFrameworkGuide': <VerifyFrameworkGuide />,
                                'ToolSelectionMatrix': <ToolSelectionMatrix />,
                                'NoCodeStackVisualizer': <NoCodeStackVisualizer />,
                                'LAUNCHFrameworkCards': <LAUNCHFrameworkCards />,
                                'HandoffChecklist': <HandoffChecklist />,
                                'NoCodePricingTable': <NoCodePricingTable />,
                            };

                            const MARKER_REGEX = /:::COMPONENT:(\w+):::/g;
                            const segments: Array<{ type: 'markdown' | 'component'; value: string }> = [];
                            let lastIndex = 0;
                            let match;
                            const content = article.content;
                            while ((match = MARKER_REGEX.exec(content)) !== null) {
                                if (match.index > lastIndex) {
                                    segments.push({ type: 'markdown', value: content.slice(lastIndex, match.index) });
                                }
                                segments.push({ type: 'component', value: match[1] });
                                lastIndex = match.index + match[0].length;
                            }
                            if (lastIndex < content.length) {
                                segments.push({ type: 'markdown', value: content.slice(lastIndex) });
                            }
                            if (segments.length === 0) {
                                return <MarkdownRenderer content={content} />;
                            }
                            return (
                                <>
                                    {segments.map((seg, i) =>
                                        seg.type === 'component' ? (
                                            <div key={i} className="not-readable" style={{ margin: 'var(--space-10) 0' }}>
                                                {COMPONENT_MAP[seg.value] ?? null}
                                            </div>
                                        ) : (
                                            <MarkdownRenderer key={i} content={seg.value} />
                                        )
                                    )}
                                </>
                            );
                        })()}
                    </div>
                </section>

                {/* Social Share */}
                <section style={{ padding: '0 0 var(--space-4)' }}>
                    <div className="container container-article">
                        <SocialShare
                            url={`/news-radar/${slug}/`}
                            title={article.title}
                            excerpt={article.excerpt}
                        />
                    </div>
                </section>

                {/* Dynamic FAQ Section */}
                {article.faq && article.faq.length > 0 && (
                    <section className="section" style={{ padding: 0 }}>
                        <FAQAccordion
                            faqs={article.faq.map(item => ({
                                ...item,
                                icon: item.icon || '❓'
                            }))}
                            title="Frequently Asked Questions"
                            subtitle="Common questions about this topic"
                        />
                    </section>
                )}

                {/* Newsletter CTA */}
                <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <div className="container container-article">
                        <NewsletterSignup />
                    </div>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="section">
                        <div className="container">
                            <h2 style={{
                                fontSize: 'var(--text-3xl)',
                                fontWeight: 'var(--font-bold)',
                                marginBottom: 'var(--space-8)',
                                textAlign: 'center'
                            }}>
                                Related Articles
                            </h2>
                            <div className="grid grid-3">
                                {relatedArticles.map((related) => (
                                    <Card key={related.slug} href={`/news-radar/${related.slug.split('/').pop()}/`}>
                                        <div style={{ marginBottom: 'var(--space-3)' }}>
                                            <Badge variant="cta">
                                                {new Date(related.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </Badge>
                                        </div>
                                        <CardTitle>{related.title}</CardTitle>
                                        <CardDescription>{related.excerpt}</CardDescription>
                                        <div style={{ marginTop: 'var(--space-4)' }}>
                                            <span className="text-accent" style={{
                                                fontSize: 'var(--text-sm)',
                                                fontWeight: 'var(--font-semibold)'
                                            }}>
                                                Read more →
                                            </span>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                            <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
                                <Button variant="secondary" href="/news-radar">
                                    View All News
                                </Button>
                            </div>
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}
