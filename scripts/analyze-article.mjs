import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Simple keywords mapping to suggest existing components
const COMPONENT_KEYWORD_MAP = {
    'AgenticVsIDETable': ['agentic vs ide', 'traditional coding', 'ide limitations'],
    'WorkflowComparison': ['workflow comparison', 'process comparison', 'old way vs new way'],
    'SkillsVsTraditionalTable': ['skills vs traditional', 'traditional skills', 'new skills required'],
    'GeminiTierComparisonTable': ['gemini tier', 'gemini advanced vs pro', 'gemini models'],
    'GeminiPricingTable': ['gemini pricing', 'gemini cost', 'how much is gemini'],
    'CompetitorMatrixTable': ['competitor matrix', 'chatgpt vs claude vs gemini', 'ai comparison'],
    'AICodingToolsComparison': ['cursor vs claude', 'copilot vs', 'coding tool comparison'],
    'BeforeAfterPromptComparison': ['before and after prompt', 'bad prompt vs good prompt'],
    'AgenticArchitecture': ['agentic architecture', 'how agents work', 'agent system design'],
    'SalaryComparisonChart': ['salary comparison', 'ai engineer salary', 'compensation'],
    'GeminiArchitectureDiagram': ['gemini architecture', 'gemini models architecture'],
    'PromptPillarsDiagram': ['prompt pillars', 'prompt framework', 'prompt engineering structure'],
    'ScreenshotLoopDiagram': ['screenshot loop', 'visual iteration', 'vibe coding loop'],
    'AITestResults': ['test results', 'benchmark results', 'evaluations'],
    'AIFinalVerdict': ['final verdict', 'conclusion', 'final thoughts'],
    'AIToolsGrid': ['tools grid', 'ai tool stack', 'recommended tools'],
    'CareerRoadmap': ['career roadmap', 'career path', 'how to become'],
    'SuccessStoriesCards': ['success stories', 'case studies', 'examples of success'],
    'LearningRoadmap': ['learning roadmap', 'curriculum', 'what to learn'],
    'AIDevToolkit': ['dev toolkit', 'developer stack', 'coding setup'],
    'CareerPathsGrid': ['career paths', 'job options', 'career options'],
    'NinetyDayPlan': ['90 day plan', '90-day plan', 'three month plan'],
    'PromptTemplateCard': ['prompt template', 'reusable prompt'],
    'InteractivePromptChecklist': ['prompt checklist', 'prompting steps', 'step by step prompt'],
    'ClaudeMDRelativeValue': ['claude.md', 'system prompt file'],
    'AestheticDirectionsGrid': ['aesthetic directions', 'design styles', 'ui themes'],
    'ComponentUpgradeShowcase': ['component upgrade', 'ui polish', 'design details'],
    'VibeToProductionRoadmap': ['vibe to production', 'vibe coding roadmap']
};

function readAllExistingArticles() {
    const articles = [];
    const contentDir = path.join(process.cwd(), 'content');

    // Check known categories
    const categories = ['news', 'tools', 'prompts', 'courses', 'ai-mastery-hub'];

    categories.forEach(category => {
        const catDir = path.join(contentDir, category);
        if (!fs.existsSync(catDir)) return;

        const files = fs.readdirSync(catDir, { recursive: true });

        files.forEach(file => {
            if (file.endsWith('.mdx')) {
                const fullPath = path.join(catDir, file);
                try {
                    const stat = fs.statSync(fullPath);
                    if (stat.isDirectory()) return;

                    const fileContents = fs.readFileSync(fullPath, 'utf8');
                    const { data } = matter(fileContents);

                    // Reconstruct a simple relative slug format for linking
                    const relativePath = path.relative(catDir, fullPath).replace(/\\/g, '/');
                    const slug = relativePath.replace(/\.mdx$/, '');

                    let linkPath = `/${category}/${slug.split('/').pop()}`;

                    if (data && data.title) {
                        articles.push({
                            title: data.title,
                            path: linkPath,
                            tags: data.tags || []
                        });
                    }
                } catch (e) {
                    // ignore read errors for this lightweight check
                }
            }
        });
    });

    return articles;
}

function analyzeArticle(targetPath) {
    console.log(`\n--- Article Analysis Report ---`);
    console.log(`Analyzing: ${targetPath}\n`);

    if (!fs.existsSync(targetPath)) {
        console.error(`❌ Error: File not found at ${targetPath}`);
        process.exit(1);
    }

    const fileContent = fs.readFileSync(targetPath, 'utf8');
    const { data, content } = matter(fileContent);

    // 1. FAQ Validation
    console.log('--- 1. FAQ Structure ---');
    if (!data.faq || !Array.isArray(data.faq) || data.faq.length === 0) {
        console.log('⚠️  No FAQs found in frontmatter.');
    } else {
        console.log(`✅ Found ${data.faq.length} FAQ item(s).`);
        let hasErrors = false;
        data.faq.forEach((item, index) => {
            if (!item.question || !item.answer) {
                console.log(`   ❌ Item ${index + 1} is missing 'question' or 'answer'`);
                hasErrors = true;
            } else {
                console.log(`   ✅ Q: "${item.question.substring(0, 50)}..."`);
            }
        });
        if (hasErrors) {
            console.log('\n❌ Fix FAQ structure. Each item needs a `question:` and `answer:` string.');
        } else {
            console.log('✅ FAQ Structure is valid.');
        }
    }

    // 2. Component Extraction
    console.log('\n--- 2. Injected Components ---');
    const markerRegex = /:::COMPONENT:(\w+):::/g;
    const existingComponents = [];
    let match;
    while ((match = markerRegex.exec(content)) !== null) {
        existingComponents.push(match[1]);
    }

    if (existingComponents.length > 0) {
        console.log('Found the following components correctly injected:');
        existingComponents.forEach(c => console.log(`   🔹 ${c}`));
    } else {
        console.log('No custom components injected inside the article content.');
    }

    // 3. Component Suggestions
    console.log('\n--- 3. Suggested Components ---');
    const suggestions = [];
    const contentLower = content.toLowerCase();

    for (const [componentName, keywords] of Object.entries(COMPONENT_KEYWORD_MAP)) {
        // Skip if already injected
        if (existingComponents.includes(componentName)) continue;

        for (const keyword of keywords) {
            if (contentLower.includes(keyword)) {
                suggestions.push({ component: componentName, reason: `Matched topic '${keyword}'` });
                break;
            }
        }
    }

    if (suggestions.length > 0) {
        console.log('Consider adding these components based on article text:');
        suggestions.forEach(s => {
            console.log(`   💡 :::COMPONENT:${s.component}::: (${s.reason})`);
        });
    } else {
        console.log('No obvious component suggestions found.');
    }

    // 4. Internal Link Suggestions
    console.log('\n--- 4. Internal Link Suggestions ---');
    const otherArticles = readAllExistingArticles();
    const linkSuggestions = [];

    // Simple logic: if another article's title keywords mostly appear in this text, suggest it
    // Or if there's a strong tag overlap
    const newTags = data.tags || [];

    otherArticles.forEach(article => {
        // Don't suggest linking to itself (loose check by title)
        if (article.title === data.title) return;

        // Check if a substantial part of the article title is mentioned
        // Remove stop words for rough check
        const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'in', 'on', 'to', 'for', 'with'];
        const titleWords = article.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ')
            .filter(w => w.length > 3 && !stopWords.includes(w));

        if (titleWords.length > 0) {
            const matches = titleWords.filter(w => contentLower.includes(w));
            const matchRatio = matches.length / titleWords.length;

            // If more than 60% of significant title words appear, or there are shared tags
            const sharedTags = article.tags.filter(t => newTags.includes(t));

            if (matchRatio >= 0.7 || sharedTags.length >= 2) {
                linkSuggestions.push({
                    title: article.title,
                    path: article.path,
                    reason: sharedTags.length >= 2 ? `Shared tags: ${sharedTags.join(', ')}` : 'Text discusses similar topics'
                });
            }
        }
    });

    if (linkSuggestions.length > 0) {
        console.log('Consider injecting these internal links into your text using Markdown:');
        // De-duplicate based on path
        const uniqueLinks = [...new Map(linkSuggestions.map(item => [item.path, item])).values()];
        // Limit to top 5 sensible suggestions
        uniqueLinks.slice(0, 5).forEach(link => {
            console.log(`   🔗 "Also read: [${link.title}](${link.path})"`);
            console.log(`      Reason: ${link.reason}`);
        });
    } else {
        console.log('No strong internal link suggestions found.');
    }

    console.log('\n--- End of Report ---\n');
}

// CLI Execution
const targetFile = process.argv[2];

if (!targetFile) {
    console.log('Usage: node scripts/analyze-article.mjs <path/to/article.mdx>');
    process.exit(1);
}

analyzeArticle(targetFile);
