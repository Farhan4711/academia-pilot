# Analysis: Article Routing Issues

## Problem Summary
Articles fail to open after navigating back to home and trying to open another article. After clearing cache, articles don't open at all.

## Root Causes Identified

### 1. **CRITICAL: Slug Mismatch in `getContentBySlug` Function**
**Location**: `lib/content.ts:185-238`

**Issue**: 
- The function receives a slug parameter (e.g., `'claude-ai-courses-2026'`)
- It searches for the file and finds it correctly
- BUT: It returns the slug parameter passed in (line 219), NOT the actual file path slug
- This creates a mismatch when `getRelatedContent` tries to filter out the current article

**Impact**: 
- Related articles might not filter correctly
- Could cause issues if slug format differs between what's passed and what's stored

**Code Flow**:
```typescript
// In article page: app/news/[category]/[slug]/page.tsx:86
const article = getContentBySlug('news', slug); // slug = 'claude-ai-courses-2026'

// In getContentBySlug (lib/content.ts:219)
return {
    slug,  // ❌ Uses parameter, not actual file path slug
    content,
    ...
}

// Later in article page:93
const relatedArticles = getRelatedContent('news', slug, ...);
// ❌ If slug format differs, filtering won't work correctly
```

---

### 2. **CRITICAL: Static Export + Client-Side Navigation Issue**
**Location**: `next.config.mjs:3` + `app/news/[category]/[slug]/page.tsx`

**Issue**:
- Site uses `output: 'export'` (static export)
- With static export, Next.js generates HTML files at build time
- Client-side navigation relies on these pre-generated files
- If files aren't generated correctly OR if there's a route mismatch, navigation fails

**Potential Problems**:
- `generateStaticParams()` might not generate all required routes
- Route structure mismatch between generated files and actual URLs
- Missing HTML files for certain article combinations

**Evidence**:
- `generateStaticParams()` extracts slug using `.split('/').pop()` which assumes slugs don't have paths
- But `getAllContent()` stores slugs as file paths relative to content directory
- If an article is in a subdirectory, the slug would be `category/article-name`, but `.pop()` would only return `article-name`

---

### 3. **Slug Extraction Inconsistency**
**Location**: Multiple files using `.split('/').pop()`

**Issue**:
- Throughout the codebase, slugs are extracted using `item.slug.split('/').pop()`
- This assumes slugs are always simple filenames OR that we only want the last part
- If articles are stored in subdirectories, this could cause mismatches

**Files Affected**:
- `app/news/[category]/[slug]/page.tsx:18` - generateStaticParams
- `app/news/page.tsx:83` - Link generation
- `app/news/[category]/page.tsx:115` - Link generation
- `app/page.tsx:168` - Link generation
- `components/layout/NewsTicker.tsx:73` - Link generation
- And many more...

**Example**:
```typescript
// If slug is stored as: "ai-learning/claude-ai-courses-2026"
const slug = item.slug.split('/').pop(); // Returns: "claude-ai-courses-2026" ✅
// But if slug is stored as: "claude-ai-courses-2026"
const slug = item.slug.split('/').pop(); // Returns: "claude-ai-courses-2026" ✅
// This works, but is fragile
```

---

### 4. **getRelatedContent Slug Comparison Issue**
**Location**: `lib/content.ts:274-296` + `app/news/[category]/[slug]/page.tsx:93`

**Issue**:
- `getRelatedContent` filters out items where `item.slug !== currentSlug`
- But `currentSlug` passed is the extracted slug (just filename)
- `item.slug` from `getAllContent()` might be the full path slug
- Comparison might fail even for the same article

**Code**:
```typescript
// In article page:93
const relatedArticles = getRelatedContent('news', slug, ...);
// slug here is just 'claude-ai-courses-2026'

// In getRelatedContent:284
.filter(item => item.slug !== currentSlug)
// item.slug might be 'claude-ai-courses-2026' or full path
// currentSlug is 'claude-ai-courses-2026'
// Should work, but depends on slug format consistency
```

---

### 5. **Trailing Slash + Static Export Navigation**
**Location**: `next.config.mjs:4` + `.htaccess:9-18`

**Issue**:
- `trailingSlash: true` means all routes end with `/`
- `.htaccess` redirects non-trailing-slash URLs to trailing-slash versions
- Client-side navigation might not handle this correctly
- Browser might cache incorrect routes

**Potential Problem**:
- First navigation works (server handles redirect)
- Subsequent navigations might fail if client-side router doesn't account for trailing slashes
- Browser cache might serve stale redirects

---

### 6. **Missing Error Handling in getContentBySlug**
**Location**: `lib/content.ts:185-238`

**Issue**:
- Function returns `null` if file not found
- But doesn't log which slug was searched
- Makes debugging difficult

**Impact**:
- Hard to diagnose why articles aren't found
- No visibility into what slugs are being searched vs. what files exist

---

### 7. **Static Params Generation Might Miss Articles**
**Location**: `app/news/[category]/[slug]/page.tsx:12-24`

**Issue**:
- `generateStaticParams()` relies on `getAllContent('news')`
- If `getAllContent()` fails or returns incomplete data, static params won't be generated
- Missing static params = missing HTML files = 404 on navigation

**Potential Problems**:
- File system errors during build
- MDX parsing errors
- Category extraction issues

---

### 8. **Client-Side Link Component Usage**
**Location**: `components/ui/Card.tsx:38-42`

**Issue**:
- Uses Next.js `Link` component for internal links
- With static export, `Link` should work, but might have issues if:
  - Target route doesn't exist as static file
  - Route format doesn't match generated files
  - Browser cache interferes

---

## Most Likely Root Cause

**The primary issue is likely #2 (Static Export + Client-Side Navigation)** combined with **#3 (Slug Extraction Inconsistency)**:

1. When you click an article, it works because the HTML file exists
2. When you navigate back and click another article, the client-side router tries to navigate
3. If the route doesn't match exactly (due to slug extraction or trailing slash issues), it fails
4. After clearing cache, even the first navigation fails because the browser can't find the route

## Recommended Investigation Steps

1. **Check Build Output**: Verify that HTML files are generated for all articles
   - Look in `.next/out/news/[category]/[slug]/index.html` after build
   - Check if all expected routes exist

2. **Verify Slug Consistency**: 
   - Log actual slugs from `getAllContent()`
   - Log slugs passed to `getContentBySlug()`
   - Compare formats

3. **Test Static Export Locally**:
   - Run `npm run build`
   - Serve the `out` directory
   - Test navigation between articles

4. **Check Browser Console**:
   - Look for 404 errors
   - Check network tab for failed requests
   - Verify routes being requested

5. **Verify .htaccess Rules**:
   - Test if trailing slash redirects work correctly
   - Check if client-side navigation bypasses .htaccess (it should)

## Files Requiring Review

1. `lib/content.ts` - Slug handling and content retrieval
2. `app/news/[category]/[slug]/page.tsx` - Article page and static params
3. `next.config.mjs` - Static export configuration
4. `components/ui/Card.tsx` - Link component usage
5. `.htaccess` - Server routing rules

## Priority Fixes

1. **HIGH**: Fix slug consistency - ensure slugs are normalized throughout
2. **HIGH**: Add error logging to `getContentBySlug` for debugging
3. **MEDIUM**: Verify `generateStaticParams` generates all required routes
4. **MEDIUM**: Add fallback handling for missing articles
5. **LOW**: Improve error messages for better debugging
