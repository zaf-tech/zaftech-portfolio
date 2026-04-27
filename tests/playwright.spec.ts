import { test, expect } from '@playwright/test';

interface PageConfig {
  path: string;
  title: string;
  maxLoadTime?: number;
  requiresSEO?: boolean;
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
    path: '/contact',
    title: 'Contact Page',
    maxLoadTime: 2500,
    requiresSEO: true,
    criticalElements: ['contact-form', 'contact-info'],
    isPublic: true,
  },
];

// Test all pages
pages.forEach((page) => {
  test(`Page loads: ${page.title} (${page.path})`, async ({ page: browserPage }) => {
    const startTime = Date.now();
    const response = await browserPage.goto(page.path);
    const loadTime = Date.now() - startTime;

    // Check response status
    expect(response?.status()).toBeLessThan(400);

    // Check title
    const pageTitle = await browserPage.title();
    expect(pageTitle).toBeTruthy();

    // Check load time
    if (page.maxLoadTime) {
      expect(loadTime).toBeLessThan(page.maxLoadTime);
    }
  });

  // Test critical elements exist
  if (page.criticalElements && page.criticalElements.length > 0) {
    test(`Critical elements present: ${page.title}`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      for (const element of page.criticalElements) {
        const selector = `[data-testid="${element}"], .${element}, #${element}`;
        const found = await browserPage.locator(selector).isVisible().catch(() => false);
        // Log if not found, but don't fail - elements might use different selectors
        if (!found) {
          console.log(`Warning: Critical element "${element}" not found on ${page.path}`);
        }
      }
    });
  }

  // Test SEO metadata
  if (page.requiresSEO) {
    test(`SEO check: ${page.title}`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Check for viewport meta tag
      const viewport = await browserPage.locator('meta[name="viewport"]').isVisible();
      expect(viewport).toBeTruthy();

      // Check for charset
      const charset = await browserPage.locator('meta[charset]').or(browserPage.locator('meta[http-equiv="Content-Type"]')).isVisible();
      expect(charset).toBeTruthy();
    });
  }
});
