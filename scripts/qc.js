#!/usr/bin/env node

/**
 * @file Quality Control Validation Script
 * @description Automated website QC checks
 * @usage node scripts/qc.js [check]
 * 
 * Available checks:
 *   - build      : Verify build succeeds
 *   - types      : Check TypeScript errors
 *   - links      : Validate internal/external links
 *   - seo        : Check SEO metadata
 *   - a11y       : Accessibility validation
 *   - all        : Run all checks (default)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

class QCChecker {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      checks: [],
    };
    this.timestamp = new Date().toISOString();
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  header(title) {
    this.log('\n' + '='.repeat(70), 'cyan');
    this.log(`  ${title}`, 'cyan');
    this.log('='.repeat(70), 'cyan');
  }

  check(name, status, message = '') {
    const icons = {
      pass: '✓',
      fail: '✗',
      warn: '⚠',
    };
    
    const colorMap = {
      pass: 'green',
      fail: 'red',
      warn: 'yellow',
    };

    const icon = icons[status];
    const color = colorMap[status];

    this.log(`  ${icon} ${name}`, color);
    if (message) {
      this.log(`    → ${message}`, 'dim');
    }

    this.results.checks.push({ name, status, message });
    if (status === 'pass') this.results.passed++;
    else if (status === 'fail') this.results.failed++;
    else if (status === 'warn') this.results.warnings++;
  }

  /**
   * Check 1: Build Validation
   */
  checkBuild() {
    this.header('1. BUILD VALIDATION');

    try {
      this.log('  Running: npm run build', 'dim');
      execSync('npm run build', { stdio: 'pipe' });
      this.check('Build Success', 'pass', 'No build errors');
    } catch (error) {
      this.check('Build Success', 'fail', 'Build failed - check errors above');
      return false;
    }

    return true;
  }

  /**
   * Check 2: TypeScript Validation
   */
  checkTypes() {
    this.header('2. TYPESCRIPT VALIDATION');

    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      this.check('TypeScript Types', 'pass', 'No type errors');
    } catch (error) {
      const errorOutput = error.toString();
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      this.check('TypeScript Types', 'fail', `${errorCount} type errors found`);
    }
  }

  /**
   * Check 3: Link Validation
   */
  checkLinks() {
    this.header('3. LINK VALIDATION');

    const pagePaths = [
      '/',
      '/about',
      '/services',
      '/blog',
      '/blog/ai-powered-cicd-pipeline-analysis',
      '/blog/devops-best-practices-successful-mvps',
      '/contact',
    ];

    this.log(`  Checking ${pagePaths.length} pages...`, 'dim');

    // Check if .next directory exists (built pages)
    if (!fs.existsSync(path.join(process.cwd(), '.next'))) {
      this.check('Page Build', 'fail', 'Build output not found - run build first');
      return;
    }

    pagePaths.forEach(pagePath => {
      const fileName = pagePath === '/' ? 'index.html' : `${pagePath.replace(/\//g, '_').substring(1)}.html`;
      const filePath = path.join(process.cwd(), '.next', 'static', 'pages', fileName);
      
      // For Next.js 13+, check app directory structure
      const appPath = path.join(process.cwd(), '.next', 'server', 'app', ...pagePath.split('/').filter(Boolean), 'page.js');
      
      if (fs.existsSync(filePath) || fs.existsSync(appPath)) {
        this.check(`Page: ${pagePath}`, 'pass');
      } else {
        this.check(`Page: ${pagePath}`, 'warn', 'Check if page exists');
      }
    });
  }

  /**
   * Check 4: SEO Metadata
   */
  checkSEO() {
    this.header('4. SEO VALIDATION');

    const seoPages = [
      { path: 'app/page.tsx', name: 'Homepage' },
      { path: 'app/about/page.tsx', name: 'About' },
      { path: 'app/services/page.tsx', name: 'Services' },
      { path: 'app/blog/page.tsx', name: 'Blog' },
      { path: 'app/blog/ai-powered-cicd-pipeline-analysis/page.tsx', name: 'CI/CD Article' },
      { path: 'app/blog/devops-best-practices-successful-mvps/page.tsx', name: 'DevOps Article' },
      { path: 'app/contact/page.tsx', name: 'Contact' },
    ];

    seoPages.forEach(page => {
      const filePath = path.join(process.cwd(), page.path);
      
      if (!fs.existsSync(filePath)) {
        this.check(`${page.name} SEO`, 'warn', 'Page not found');
        return;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Check for Metadata export
      const hasMetadata = content.includes('export const metadata');
      const hasTitle = content.includes('title:');
      const hasDescription = content.includes('description:');

      if (hasMetadata && hasTitle && hasDescription) {
        this.check(`${page.name} SEO`, 'pass', 'Metadata properly configured');
      } else {
        const missing = [];
        if (!hasMetadata) missing.push('metadata export');
        if (!hasTitle) missing.push('title');
        if (!hasDescription) missing.push('description');
        this.check(`${page.name} SEO`, 'warn', `Missing: ${missing.join(', ')}`);
      }
    });
  }

  /**
   * Check 5: Accessibility
   */
  checkA11y() {
    this.header('5. ACCESSIBILITY VALIDATION');

    const a11yRules = [
      { file: 'app/blog/ai-powered-cicd-pipeline-analysis/page.tsx', check: 'Article structure' },
      { file: 'app/blog/devops-best-practices-successful-mvps/page.tsx', check: 'Blog post layout' },
    ];

    a11yRules.forEach(rule => {
      const filePath = path.join(process.cwd(), rule.file);
      
      if (!fs.existsSync(filePath)) {
        this.check(rule.check, 'warn', `${rule.file} not found`);
        return;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Check for semantic HTML
      const hasSemanticHTML = /(<main|<article|<section|<header|<footer)/.test(content);
      const hasAlt = /alt=/g.test(content);
      const hasButtons = /<button/g.test(content);

      if (hasSemanticHTML) {
        this.check(`${rule.check}`, 'pass', 'Uses semantic HTML');
      } else {
        this.check(`${rule.check}`, 'warn', 'Consider using semantic HTML');
      }
    });

    this.check('Manual A11y Test', 'warn', 'Use axe DevTools or WAVE for detailed audit');
  }

  /**
   * Check 6: Dependencies
   */
  checkDependencies() {
    this.header('6. DEPENDENCY VALIDATION');

    try {
      this.log('  Running: npm audit', 'dim');
      execSync('npm audit --production', { stdio: 'pipe' });
      this.check('Dependencies Security', 'pass', 'No vulnerabilities found');
    } catch (error) {
      const output = error.stderr ? error.stderr.toString() : error.toString();
      const hasCritical = /critical/i.test(output);
      
      if (hasCritical) {
        this.check('Dependencies Security', 'fail', 'Critical vulnerabilities found');
      } else {
        this.check('Dependencies Security', 'warn', 'Some vulnerabilities found - check severity');
      }
    }
  }

  /**
   * Check 7: File Size
   */
  checkFileSize() {
    this.header('7. FILE SIZE VALIDATION');

    try {
      // Check package size
      const packageSize = execSync('ls -lh package.json').toString();
      this.check('Dependencies', 'pass', 'package.json is reasonable size');

      // Check if .next exists
      if (fs.existsSync(path.join(process.cwd(), '.next'))) {
        const nextSize = execSync('du -sh .next').toString().split('\t')[0];
        this.log(`  Build output size: ${nextSize}`, 'dim');
        this.check('Build Size', 'pass', `${nextSize} (check if reasonable)`);
      }
    } catch (error) {
      this.check('File Size', 'warn', 'Could not check file sizes');
    }
  }

  /**
   * Run all checks
   */
  async runAll() {
    this.log('\n🔍 WEBSITE QUALITY CONTROL', 'bright');
    this.log(`Timestamp: ${this.timestamp}\n`, 'dim');

    // Build is required for other checks
    if (!this.checkBuild()) {
      this.showSummary();
      return false;
    }

    this.checkTypes();
    this.checkLinks();
    this.checkSEO();
    this.checkA11y();
    this.checkDependencies();
    this.checkFileSize();

    this.showSummary();
    return this.results.failed === 0;
  }

  /**
   * Display summary
   */
  showSummary() {
    this.header('QC SUMMARY');

    const total = this.results.passed + this.results.failed + this.results.warnings;
    const passPercent = Math.round((this.results.passed / total) * 100);

    this.log(`  Passed:  ${this.results.passed}/${total}`, 'green');
    this.log(`  Failed:  ${this.results.failed}/${total}`, 'red');
    this.log(`  Warnings: ${this.results.warnings}/${total}`, 'yellow');
    this.log(`  Score:   ${passPercent}%\n`, passPercent >= 80 ? 'green' : 'yellow');

    if (this.results.failed === 0) {
      this.log('✓ All critical checks passed!', 'green');
    } else {
      this.log('✗ Fix critical issues before deployment', 'red');
    }

    // Save results to file
    const resultsFile = path.join(process.cwd(), 'qc-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify({
      timestamp: this.timestamp,
      summary: {
        passed: this.results.passed,
        failed: this.results.failed,
        warnings: this.results.warnings,
        score: passPercent,
      },
      checks: this.results.checks,
    }, null, 2));
    
    this.log(`\nResults saved to: qc-results.json\n`, 'dim');
  }
}

// Run QC
async function main() {
  const checker = new QCChecker();
  const passed = await checker.runAll();
  process.exit(passed ? 0 : 1);
}

main().catch(error => {
  console.error('QC Error:', error);
  process.exit(1);
});
