# Website Quality Control (QC) Guide

## Overview
This guide ensures all website pages meet quality standards before deployment. Use this after any code changes to validate page health.

## Quick Start
```bash
# Run all QC checks
npm run qc

# Run specific checks
npm run qc:build
npm run qc:lighthouse
npm run qc:links
npm run qc:accessibility
```

---

## QC Categories

### 1. BUILD VALIDATION ✓
**Ensures the website compiles without errors**

**Checklist:**
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors shown
- [ ] No build warnings (critical ones)
- [ ] All pages are generated
- [ ] Production bundle size is reasonable

**Command:** `npm run qc:build`

---

### 2. PERFORMANCE VALIDATION ⚡
**Checks page speed and Core Web Vitals**

**Targets:**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Total page size < 1MB
- First Load JS < 200KB
- Lighthouse Score >= 90

**Checklist:**
- [ ] All pages < 2.5s load time (Chrome DevTools)
- [ ] Images are optimized (use next/image)
- [ ] No render-blocking resources
- [ ] JavaScript is code-split
- [ ] Unused CSS is removed
- [ ] Caching headers are set

**Command:** `npm run qc:lighthouse`

**Manual Test:**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for each page
4. Screenshot results for records

---

### 3. SEO VALIDATION 🔍
**Ensures pages are discoverable and search-engine optimized**

**Checklist:**
- [ ] Meta title present (50-60 characters)
- [ ] Meta description present (150-160 characters)
- [ ] H1 tag present and meaningful
- [ ] Heading hierarchy is logical (H1 > H2 > H3)
- [ ] All images have alt text
- [ ] Canonical URL set
- [ ] Schema.org markup present (for articles)
- [ ] Robots meta allows indexing
- [ ] Sitemap.xml is updated
- [ ] Open Graph tags present

**Pages to Check:**
- `/` - Homepage
- `/about` - About page
- `/services` - Services page
- `/blog` - Blog index
- `/blog/*` - Individual blog articles
- `/contact` - Contact page

**Command:** `npm run qc:seo`

---

### 4. ACCESSIBILITY VALIDATION ♿
**Meets WCAG 2.1 AA accessibility standards**

**Checklist:**
- [ ] No accessibility errors in automated scan
- [ ] Color contrast >= 4.5:1 (normal text), 3:1 (large text)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all focusable elements
- [ ] All form inputs have associated labels
- [ ] Alt text is descriptive (not "image" or "photo")
- [ ] No keyboard traps
- [ ] Semantic HTML used (not div/span for buttons)
- [ ] ARIA labels present where needed
- [ ] Screen reader friendly

**Test Tools:**
- Chrome DevTools (Lighthouse > Accessibility)
- axe DevTools extension
- WAVE browser extension
- Screen reader (NVDA, JAWS, VoiceOver)

**Command:** `npm run qc:a11y`

**Manual Test (Keyboard):**
1. Close mouse/trackpad
2. Use Tab to navigate page
3. Verify all elements are reachable
4. Verify focus indicators are visible
5. Test with Enter/Space on interactive elements

---

### 5. LINK VALIDATION 🔗
**Ensures all links work and point to correct pages**

**Checklist:**
- [ ] All internal links work (return 200)
- [ ] External links work and load correctly
- [ ] No broken image links
- [ ] No redirect loops
- [ ] Anchor links work (#section)
- [ ] CTA buttons go to correct pages

**Command:** `npm run qc:links`

---

### 6. RESPONSIVE DESIGN 📱
**Verifies design works on all screen sizes**

**Breakpoints to Test:**
- [ ] 375px (Mobile - iPhone SE)
- [ ] 768px (Tablet - iPad)
- [ ] 1024px (Desktop - Laptop)
- [ ] 1920px (Wide - Desktop)

**Checklist for Each Breakpoint:**
- [ ] Text is readable (no tiny fonts)
- [ ] Images don't overflow
- [ ] Buttons/touch targets >= 44px
- [ ] Layout is logical
- [ ] No horizontal scrolling
- [ ] Navigation is usable
- [ ] Forms are functional

**How to Test:**
1. Chrome DevTools (F12)
2. Click device toggle (phone icon)
3. Select each device preset
4. Resize manually to test between breakpoints
5. Test on actual devices if possible

**Command:** `npm run qc:responsive`

---

### 7. BROWSER COMPATIBILITY 🌐
**Ensures pages work in all major browsers**

**Browsers to Test:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Chrome
- Mobile Safari (iOS)

**Checklist:**
- [ ] Page renders correctly in each browser
- [ ] No JavaScript errors in console
- [ ] Images display correctly
- [ ] Forms work properly
- [ ] CSS looks identical
- [ ] Fonts display correctly

**Quick Test:**
1. Use BrowserStack for quick testing
2. Or test locally on available devices
3. Check console for errors (F12)

---

### 8. SECURITY VALIDATION 🔒
**Ensures no security vulnerabilities**

**Checklist:**
- [ ] HTTPS is enforced (not HTTP)
- [ ] No console security warnings
- [ ] No sensitive data in source code
- [ ] Environment variables are not exposed
- [ ] Security headers are set
- [ ] No dependency vulnerabilities (`npm audit`)
- [ ] Forms validate and sanitize input
- [ ] No cross-site scripting (XSS) vulnerabilities

**Command:** `npm audit`

---

### 9. CONTENT QUALITY 📝
**Ensures content is accurate and professional**

**Checklist:**
- [ ] No Lorem ipsum or placeholder text
- [ ] All copy is spell-checked
- [ ] No grammar errors
- [ ] Consistent tone and voice
- [ ] Links are contextual (not "click here")
- [ ] Content is up-to-date
- [ ] No broken references or outdated info
- [ ] Phone numbers and emails are correct
- [ ] Social media links are correct

**How to Test:**
1. Read through entire page
2. Use Grammarly or similar tool
3. Verify all dates and facts
4. Test all contact information

---

## QC Workflow

### After Code Changes
1. **Build**: `npm run qc:build`
2. **Performance**: Run Lighthouse locally
3. **Accessibility**: Use axe DevTools
4. **Links**: Verify all links work
5. **Responsive**: Test 4 breakpoints
6. **Content**: Read and verify copy
7. **Security**: Run `npm audit`

### Before Deployment
1. Create deployment checklist (see below)
2. Run all automated checks
3. Perform full manual review
4. Test in staging environment
5. Get sign-off

### Deployment Checklist
- [ ] All QC checks passed
- [ ] No console errors
- [ ] Lighthouse >= 90
- [ ] All links verified
- [ ] Mobile design verified
- [ ] Accessibility verified
- [ ] Content proofread
- [ ] Security scan clean
- [ ] Browser compatibility tested
- [ ] Analytics tracking verified
- [ ] Forms submission tested
- [ ] Backup created
- [ ] Rollback plan documented

---

## Common Issues & Fixes

### Build Fails
- Check TypeScript errors: `npm run type-check`
- Clear cache: `rm -rf .next`
- Reinstall deps: `npm ci`

### Slow Performance
- Check images: using next/image?
- Check bundle size: `npm run analyze`
- Check unused CSS/JS
- Enable compression headers

### Accessibility Issues
- Add alt text to images
- Add aria-labels to buttons
- Increase color contrast
- Ensure semantic HTML

### SEO Issues
- Add meta tags to page
- Add H1 tag
- Add schema.org markup
- Update sitemap.xml

### Link Failures
- Check relative vs absolute paths
- Verify file exists at path
- Check for typos
- Verify external URLs work

---

## Pages to Validate (Current Site)

| Page | Priority | Status | Notes |
|------|----------|--------|-------|
| / | HIGH | ⬜ | Homepage - most trafficked |
| /about | MEDIUM | ⬜ | About page |
| /services | MEDIUM | ⬜ | Services listing |
| /blog | HIGH | ⬜ | Blog index |
| /blog/ai-powered-cicd-pipeline-analysis | HIGH | ⬜ | New article |
| /blog/devops-best-practices-successful-mvps | HIGH | ⬜ | DevOps article |
| /contact | HIGH | ⬜ | Lead generation |

---

## Recording Results

### QC Results Template
```
Date: [Date]
Tester: [Name]
Change: [Description of changes]

BUILD: ✓ Pass / ✗ Fail
PERFORMANCE: ✓ Pass / ✗ Fail (Lighthouse: XX)
SEO: ✓ Pass / ✗ Fail
ACCESSIBILITY: ✓ Pass / ✗ Fail
LINKS: ✓ Pass / ✗ Fail
RESPONSIVE: ✓ Pass / ✗ Fail
BROWSER: ✓ Pass / ✗ Fail
SECURITY: ✓ Pass / ✗ Fail
CONTENT: ✓ Pass / ✗ Fail

Issues Found:
1. ...
2. ...

Resolved:
1. ...
2. ...

Approval: [ ] Approved  [ ] Needs Fixes
```

---

## References
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Next.js Best Practices](https://nextjs.org/docs/basic-features/eslint)
- [Schema.org Markup](https://schema.org/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
