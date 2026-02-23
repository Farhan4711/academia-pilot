---
description: How to analyze a newly added article for components, FAQ structure, and internal link suggestions.
---

# Analyze New Article Workflow

Whenever a new `.mdx` article is added to the site (e.g., under `content/news/`), run this workflow to ensure it fits the "shape" of the application properly.

This step runs a Node.js script that checks the frontmatter format, identifies what components are currently injected, suggests new interactive components based on the text, and recommends internal links to other existing articles.

## Steps to Analyze an Article

### 1. Run the Analysis Script

Run the following command in the terminal, replacing the path with the path to the newly added article.

```bash
// turbo
node scripts/analyze-article.mjs <path/to/the/new-article.mdx>
```
*(Example: `node scripts/analyze-article.mjs content/news/my-new-article.mdx`)*

### 2. Review the Generated Article Shape Report

The terminal will output a detailed 4-part report:

1. **FAQ Structure:** 
   - Ensure you see `✅ FAQ Structure is valid`. 
   - If not, check the frontmatter to ensure there is a `faq` YAML array where each item has both a `question:` and an `answer:` string.
2. **Injected Components:** 
   - Verify that any `:::COMPONENT:Name:::` markers in the text are recognized correctly.
3. **Suggested Components:**
   - The AI checks the body text for specific keywords. If it suggests a component (e.g., `WorkflowComparison` or `AgenticVsIDETable`), consider adding the `:::COMPONENT:...:::` marker into the MDX file at a relevant location.
4. **Internal Link Suggestions:**
   - The script scans all other published articles and compares their titles/tags with the new article's text.
   - It will suggest Markdown links such as `[Also read: Cursor AI](/tools/cursor-ai)`.
   - Take these suggestions and manually inject them into the related paragraph context in the `.mdx` file.

### 3. Apply the Suggestions

After reviewing the terminal output, make any requested adjustments, inject the suggested links inline, and re-run the script if necessary to verify validity.
