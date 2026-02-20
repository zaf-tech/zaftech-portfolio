/**
 * Page Quality Control Tests
 * Validates all website pages for health, performance, and compliance
 * Run: npm run test:qc
 */

interface PageConfig {
  path: string;
  title: string;
  minLoadTime?: number;
  maxLoadTime?: number;
  requiresSEO?: boolean;
  requiresImages?: boolean;
  criticalElements?: string[];
  isPublic?: boolean;
}

const pages: PageConfig[] = [
  {
    path: '/',
    title: 'Homepage',
    maxLoadTime: 2500,
    requiresSEO: true,
    criticalElements: ['hero-section', 'navigation', 'footer'],
    isPublic: true,
  },
  {
    path: '/about',
    title: 'About Page',
    maxLoadTime: 2000,
    requiresSEO: true,
    criticalElements: ['about-hero', 'team-section', 'values'],
    isPublic: true,
  },
  {
    path: '/services',
    title: 'Services Page',
    maxLoadTime: 2500,
    requiresSEO: true,
    criticalElements: ['services-grid', 'cta-section'],
    isPublic: true,
  },
  {
    path: '/blog',
    title: 'Blog Index',
    maxLoadTime: 2500,
    requiresSEO: true,
    criticalElements: ['blog-list', 'filters'],
    isPublic: true,
  },
  {
    path: '/blog/ai-powered-cicd-pipeline-analysis',
    title: 'CI/CD Cost Optimization Blog',
    maxLoadTime: 3000,
    requiresSEO: true,
    criticalElements: ['article-header', 'main-content', 'sidebar'],
    isPublic: true,
  },
  {
    path: '/blog/devops-best-practices-successful-mvps',
    title: 'DevOps Best Practices Blog',
    maxLoadTime: 3000,
    requiresSEO: true,
    criticalElements: ['article-header', 'main-content'],
    isPublic: true,
  },
  {
    path: '/contact',
    title: 'Contact Page',
    maxLoadTime: 2500,
    requiresSEO: true,
    criticalElements: ['contact-form', 'contact-info'],
    isPublic: true,
  },
];

/**
 * QC Validation Rules
 */
export const QCValidationRules = {
  // Build Validation
  BUILD: {
    mustCompile: 'Page must build without errors',
    noTypeErrors: 'Page must have no TypeScript errors',
    noBuildWarnings: 'Page should have no critical build warnings',
  },

  // Performance Validation
  PERFORMANCE: {
    LCP: 'Largest Contentful Paint < 2.5s (GOOD)',
    FID: 'First Input Delay < 100ms (GOOD)',
    CLS: 'Cumulative Layout Shift < 0.1 (GOOD)',
    pageSize: 'Total page size < 1 MB',
    firstLoad: 'First Load JS < 200KB',
    imageOptimization: 'Use next/image for all images',
  },

  // SEO Validation
  SEO: {
    metaTitle: 'Must have meta title (50-60 chars)',
    metaDescription: 'Must have meta description (150-160 chars)',
    headings: 'Must have proper h1 > h2 > h3 hierarchy',
    altText: 'All images must have descriptive alt text',
    schemaMarkup: 'Critical pages must have Schema.org markup',
    robotsMeta: 'Must not be blocked by robots meta',
    canonicalTag: 'Should have canonical URL',
  },

  // Accessibility Validation
  ACCESSIBILITY: {
    wcag2_1_AA: 'Must meet WCAG 2.1 AA standard',
    colorContrast: 'Text contrast ratio >= 4.5:1 (normal), 3:1 (large)',
    ariaLabels: 'Interactive elements must have aria-labels',
    keyboardNav: 'All interactive elements keyboard accessible',
    focusIndicators: 'All focusable elements have visible focus',
    formLabels: 'All form inputs have associated labels',
    semanticHTML: 'Use semantic HTML5 elements',
  },

  // Content Validation
  CONTENT: {
    noPlaceholderText: 'No Lorem ipsum or placeholder text',
    noDeadLinks: 'No broken internal/external links',
    noEmptyElements: 'No empty paragraphs or divs',
    contentLength: 'Pages should have meaningful content',
    consistentFormatting: 'Consistent typography and spacing',
  },

  // Responsive Design
  RESPONSIVE: {
    mobile375: 'Must be usable at 375px width',
    mobile768: 'Must be usable at 768px width',
    desktop1024: 'Must be usable at 1024px width',
    desktop1920: 'Must be usable at 1920px width',
    noHorizontalScroll: 'No horizontal scroll on any viewport',
    touchTargets: 'Touch targets >= 44px (mobile)',
  },

  // Browser/Device Support
  COMPATIBILITY: {
    chrome: 'Latest 2 versions of Chrome',
    firefox: 'Latest 2 versions of Firefox',
    safari: 'Latest 2 versions of Safari',
    edge: 'Latest 2 versions of Edge',
    mobileChrome: 'Mobile Chrome last 2 versions',
    mobileSafari: 'Mobile Safari last 2 versions',
  },

  // Security Validation
  SECURITY: {
    noConsoleErrors: 'No console errors or security warnings',
    noMixedContent: 'No mixed HTTP/HTTPS content',
    cspHeaders: 'Content-Security-Policy headers set',
    xFrameOptions: 'X-Frame-Options set correctly',
    securityHeaders: 'All security headers present',
  },
};

/**
 * QC Checklist for Manual Testing
 */
export const QCManualChecklist = {
  'Build & Compilation': [
    'npm run build completes without errors',
    'No TypeScript errors in console',
    'Build output is clean',
    'No deprecated dependencies',
  ],

  'Performance': [
    'Page loads in < 2.5s on 4G (Chrome DevTools)',
    'Lighthouse score >= 90',
    'No render-blocking resources',
    'Images are optimized and lazy-loaded',
    'No unused CSS or JavaScript',
    'All fonts are optimized',
  ],

  'Visual/Design': [
    'Layout matches design mockups',
    'Colors are correct per design system',
    'Spacing/padding is consistent',
    'Typography hierarchy is clear',
    'All visual elements are visible',
    'No placeholder or broken images',
  ],

  'Functionality': [
    'All links work (internal and external)',
    'All forms submit correctly',
    'Navigation flows smoothly',
    'No JavaScript errors in console',
    'Interactive elements respond correctly',
    'Mobile menu works (if applicable)',
  ],

  'Responsive Design': [
    'Looks good at 375px (mobile)',
    'Looks good at 768px (tablet)',
    'Looks good at 1024px (desktop)',
    'Looks good at 1920px (ultra-wide)',
    'Text is readable on all sizes',
    'No horizontal scrolling',
  ],

  'Accessibility': [
    'All interactive elements keyboard accessible',
    'Focus indicators are visible',
    'Color contrast meets WCAG AA',
    'Form labels present for all inputs',
    'Images have descriptive alt text',
    'No keyboard traps',
    'Screen reader friendly',
  ],

  'SEO': [
    'Meta title is present and descriptive',
    'Meta description is present (150-160 chars)',
    'H1 tag is present and meaningful',
    'Heading hierarchy is logical',
    'Schema markup appropriate',
    'Robots meta allows indexing',
  ],

  'Content Quality': [
    'No placeholder or Lorem ipsum text',
    'Content is accurate and up-to-date',
    'No typos or grammar errors',
    'Consistent tone and voice',
    'Links are contextual and helpful',
    'Content is scannable (short paragraphs)',
  ],

  'Browser Compatibility': [
    'Chrome: Latest version',
    'Firefox: Latest version',
    'Safari: Latest version',
    'Edge: Latest version',
    'Mobile Chrome: Latest version',
    'Mobile Safari: Latest version',
  ],

  'Security': [
    'HTTPS is enforced',
    'No console security warnings',
    'No sensitive data in source code',
    'Security headers are set',
    'Forms validate input',
    'No vulnerability warnings in dependencies',
  ],

  'User Experience': [
    'Call-to-action buttons are prominent',
    'User journey is logical',
    'Error messages are helpful',
    'Loading states are shown',
    'Feedback is immediate and clear',
    'No confusing or unclear UI',
  ],
};

/**
 * QC Test Suite
 */
export const QCTestSuite = {
  pages,
  validationRules: QCValidationRules,
  manualChecklist: QCManualChecklist,
};

export default QCTestSuite;
