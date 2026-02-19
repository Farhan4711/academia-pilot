---
description: How to add a new article post that includes custom React diagrams, tables, or interactive components
---

# Adding an Article with Injected React Components

This workflow documents the standard pattern for embedding custom React components (diagrams, tables, comparison charts) inside article content (both news `.mdx` files and standalone TSX pages).

## Why This Pattern Exists

`MarkdownRenderer` uses `react-markdown` which cannot execute JSX. To embed real React components in article prose, we use a **marker injection** pattern: placeholder strings in the Markdown content that a parent component splits on and replaces with the actual React component.

## Pattern: Marker Injection

**Marker format:** `:::COMPONENT:ComponentName:::`

The article page template (`app/news/[category]/[slug]/page.tsx`) detects these markers and injects the corresponding React components inline.

---

## Step-by-Step Workflow

### 1. Create the Component File

- Place in `components/content/` (for article-specific) or `components/diagrams/` (for reusable diagrams).
- **Always add `'use client';` as the very first line** — all visual/interactive components use hooks or event handlers.

```tsx
'use client';
import React from 'react';

const MyComponent: React.FC = () => {
  return <div>...</div>;
};

export default MyComponent;
```

### 2. Register the Component in the Article Page Template

In `app/news/[category]/[slug]/page.tsx`, add:

1. Import the component at the top:
```tsx
import MyComponent from '@/components/content/MyComponent';
```

2. Add it to the `COMPONENT_MAP` in the article content section:
```tsx
const COMPONENT_MAP: Record<string, React.ReactNode> = {
    'AgenticVsIDETable': <AgenticVsIDETable />,
    'AgenticArchitecture': <AgenticArchitecture />,
    'WorkflowComparison': <WorkflowComparison />,
    'MyComponent': <MyComponent />,  // ← Add here
};
```

### 3. Write the Article (`.mdx` file)

- Place in `content/news/`.
- Do **NOT** add `import` statements in the `.mdx` file — they don't work with `react-markdown`.
- At the location where you want a component, insert the marker on its own line:

```
## Section Heading

Some article prose here...

:::COMPONENT:MyComponent:::

## Next Section
```

### 4. For Standalone TSX Article Pages (e.g., AI Mastery Hub pages)

For `app/ai-mastery-hub/*/page.tsx` pages, use `MarkdownRenderer` with a helper function that splits content on markers:

```tsx
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import MyComponent from '@/components/content/MyComponent';

const COMPONENT_MAP: Record<string, React.ReactNode> = {
    'MyComponent': <MyComponent />,
};

function renderContent(content: string) {
    const MARKER_REGEX = /:::COMPONENT:(\w+):::/g;
    const segments = [];
    let lastIndex = 0;
    let match;
    while ((match = MARKER_REGEX.exec(content)) !== null) {
        if (match.index > lastIndex) segments.push({ type: 'markdown', value: content.slice(lastIndex, match.index) });
        segments.push({ type: 'component', value: match[1] });
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) segments.push({ type: 'markdown', value: content.slice(lastIndex) });
    return segments.map((seg, i) =>
        seg.type === 'component'
            ? <div key={i} style={{ margin: 'var(--space-10) 0' }}>{COMPONENT_MAP[seg.value]}</div>
            : <MarkdownRenderer key={i} content={seg.value} />
    );
}
```

Then in JSX:
```tsx
<div className="container container-md">
    {renderContent(articleContent)}
</div>
```

---

## Component Rules

| Rule | Detail |
|------|--------|
| `'use client'` | Required on **all** component files that use hooks or event handlers |
| File location | `components/content/` for article-specific, `components/diagrams/` for shared |
| Naming | PascalCase matching the marker name exactly: `:::COMPONENT:MyTable:::` → `MyTable.tsx` |
| No imports in `.mdx` | Never put `import` statements inside `.mdx` content — use the COMPONENT_MAP pattern |
| Image assets | Place article images in `public/assets/news/` named `[slug].png`, 16:9 aspect ratio |

---

## Checklist for Each New Article

- [ ] Component file created with `'use client'`
- [ ] Component added to `COMPONENT_MAP` in article page template
- [ ] `.mdx` written with `:::COMPONENT:Name:::` markers (no imports)
- [ ] Frontmatter complete: `title`, `date`, `category`, `tags`, `badge`, `image`, `faq`
- [ ] Featured image at `public/assets/news/[slug].png`
