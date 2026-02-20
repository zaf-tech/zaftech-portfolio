#!/usr/bin/env node

/**
 * @file Content Quality Assurance Script
 * @description Automated website content quality checks
 * @usage node scripts/content-quality.js [page]
 * 
 * Available checks:
 *   - all        : Check all pages (default)
 *   - homepage   : Check homepage content
 *   - about      : Check about page
 *   - services   : Check services page
 *   - blog       : Check blog content
 *   - contact    : Check contact page
 */

const fs = require('fs');
const path = require('path');

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

class ContentQualityChecker {
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
   * Check: Spelling & Grammar
   */
  checkSpellingAndGrammar(content, pageName) {
    this.log(`\n  Checking: Spelling & Grammar`, 'dim');

    // Basic common spelling mistakes
    const commonMistakes = [
      { word: '\\bteh\\b', suggestion: 'the' },
      { word: '\\brecieve\\b', suggestion: 'receive' },
      { word: '\\boccured\\b', suggestion: 'occurred' },
      { word: '\\bneccessary\\b', suggestion: 'necessary' },
      { word: '\\bseperate\\b', suggestion: 'separate' },
      { word: '  +', suggestion: 'double spaces' },
    ];

    let hasIssues = false;
    const mistakes = [];

    commonMistakes.forEach(item => {
      const regex = new RegExp(item.word, 'gi');
      const matches = content.match(regex);
      if (matches) {
        mistakes.push(`${matches.length}x "${item.suggestion}"`);
        hasIssues = true;
      }
    });

    if (!hasIssues) {
      this.check(`${pageName} - Spelling`, 'pass', 'No common spelling mistakes found');
    } else {
      this.check(`${pageName} - Spelling`, 'warn', `Found: ${mistakes.join(', ')}`);
    }
  }

  /**
   * Check: Readability
   */
  checkReadability(content, pageName) {
    this.log(`\n  Checking: Readability`, 'dim');

    // Simple readability checks
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = content.split(/\s+/).filter(w => w.length > 0);
    const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);

    const avgWordsPerSentence = words.length / sentences.length;
    const avgWordsPerParagraph = words.length / paragraphs.length;

    let readabilityStatus = 'pass';
    let issues = [];

    if (avgWordsPerSentence > 20) {
      readabilityStatus = 'warn';
      issues.push(`Avg sentence: ${avgWordsPerSentence.toFixed(1)} words (target: <20)`);
    }

    if (avgWordsPerParagraph > 100) {
      readabilityStatus = 'warn';
      issues.push(`Avg paragraph: ${avgWordsPerParagraph.toFixed(1)} words (target: <100)`);
    }

    const message = issues.length > 0 ? issues.join('; ') : 'Good sentence structure';
    this.check(`${pageName} - Readability`, readabilityStatus, message);
  }

  /**
   * Check: Content Length
   */
  checkContentLength(content, pageName, minWords = 100) {
    this.log(`\n  Checking: Content Length`, 'dim');

    const words = content.split(/\s+/).filter(w => w.length > 0).length;
    
    if (words >= minWords) {
      this.check(`${pageName} - Content Length`, 'pass', `${words} words (minimum: ${minWords})`);
    } else {
      this.check(`${pageName} - Content Length`, 'warn', `${words} words (minimum: ${minWords})`);
    }
  }

  /**
   * Check: Metadata Quality
   */
  checkMetadata(fileContent, pageName) {
    this.log(`\n  Checking: Metadata`, 'dim');

    const hasTitle = /title\s*:\s*['"`]/.test(fileContent);
    const hasDescription = /description\s*:\s*['"`]/.test(fileContent);
    const hasMetadata = /export\s+const\s+metadata/.test(fileContent);

    const issues = [];
    if (!hasMetadata) issues.push('Missing metadata export');
    if (!hasTitle) issues.push('Missing title');
    if (!hasDescription) issues.push('Missing description');

    if (issues.length === 0) {
      this.check(`${pageName} - Metadata`, 'pass', 'All metadata present');
    } else {
      this.check(`${pageName} - Metadata`, 'warn', issues.join(', '));
    }
  }

  /**
   * Check: Alt Text for Images
   */
  checkAltText(fileContent, pageName) {
    this.log(`\n  Checking: Image Alt Text`, 'dim');

    const imgRegex = /<img[^>]+>/g;
    const images = fileContent.match(imgRegex) || [];

    if (images.length === 0) {
      this.check(`${pageName} - Alt Text`, 'pass', 'No images to check');
      return;
    }

    let missingAlt = 0;
    let poorAlt = 0;

    images.forEach(img => {
      if (!img.includes('alt=')) {
        missingAlt++;
      } else {
        // Check for poor alt text
        const altMatch = img.match(/alt=["']([^"']+)["']/);
        if (altMatch) {
          const altText = altMatch[1].toLowerCase();
          if (altText === 'image' || altText === 'photo' || altText === 'picture') {
            poorAlt++;
          }
        }
      }
    });

    if (missingAlt === 0 && poorAlt === 0) {
      this.check(`${pageName} - Alt Text`, 'pass', `All ${images.length} images have descriptive alt text`);
    } else {
      const issues = [];
      if (missingAlt > 0) issues.push(`${missingAlt} missing alt`);
      if (poorAlt > 0) issues.push(`${poorAlt} poor quality alt`);
      this.check(`${pageName} - Alt Text`, 'warn', issues.join(', '));
    }
  }

  /**
   * Check: Headings Structure
   */
  checkHeadings(fileContent, pageName) {
    this.log(`\n  Checking: Heading Structure`, 'dim');

    const h1Count = (fileContent.match(/<h1/gi) || []).length;
    const h2Plus = (fileContent.match(/<h[2-6]/gi) || []).length;

    const issues = [];
    if (h1Count === 0) issues.push('No H1 tag found');
    if (h1Count > 1) issues.push(`Multiple H1 tags (${h1Count})`);
    if (h2Plus === 0 && h1Count > 0) issues.push('No subheadings');

    if (issues.length === 0) {
      this.check(`${pageName} - Headings`, 'pass', 'Proper heading hierarchy');
    } else {
      this.check(`${pageName} - Headings`, 'warn', issues.join(', '));
    }
  }

  /**
   * Check: Links Quality
   */
  checkLinks(fileContent, pageName) {
    this.log(`\n  Checking: Links`, 'dim');

    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
    const links = [];
    let match;

    while ((match = linkRegex.exec(fileContent)) !== null) {
      links.push({ href: match[1], text: match[2] });
    }

    if (links.length === 0) {
      this.check(`${pageName} - Links`, 'pass', 'No links to check');
      return;
    }

    let poorAnchor = 0;
    const poorAnchorText = ['click here', 'read more', 'link', 'button'];

    links.forEach(link => {
      if (poorAnchorText.includes(link.text.toLowerCase())) {
        poorAnchor++;
      }
    });

    if (poorAnchor === 0) {
      this.check(`${pageName} - Links`, 'pass', `All ${links.length} links have descriptive text`);
    } else {
      this.check(`${pageName} - Links`, 'warn', `${poorAnchor} links with poor anchor text`);
    }
  }

  /**
   * Check: Consistency of Tone & Voice
   */
  checkToneConsistency(fileContent, pageName) {
    this.log(`\n  Checking: Tone & Voice`, 'dim');

    // Check for mixed pronouns
    const we = (fileContent.match(/\bwe\b/gi) || []).length;
    const our = (fileContent.match(/\bour\b/gi) || []).length;
    const you = (fileContent.match(/\byou\b/gi) || []).length;
    const your = (fileContent.match(/\byour\b/gi) || []).length;
    const i = (fileContent.match(/\bI\b/gi) || []).length;

    // Check for contractions consistency
    const contractions = (fileContent.match(/\b(we're|you're|it's|don't|can't|won't)\b/gi) || []).length;
    const noContractions = (fileContent.match(/\b(we are|you are|it is|do not|cannot|will not)\b/gi) || []).length;

    const issues = [];

    if (we > 5 && you > 5) {
      issues.push('Mixed pronouns (we/your)');
    }

    if (i > 5 && we > 5) {
      issues.push('Mixed pronouns (I/we)');
    }

    if (contractions > 0 && noContractions > 0) {
      issues.push('Inconsistent contractions');
    }

    if (issues.length === 0) {
      this.check(`${pageName} - Tone & Voice`, 'pass', 'Consistent brand voice');
    } else {
      this.check(`${pageName} - Tone & Voice`, 'warn', issues.join(', '));
    }
  }

  /**
   * Check: CTA Quality
   */
  checkCTAs(fileContent, pageName) {
    this.log(`\n  Checking: Call-to-Action`, 'dim');

    // Look for button text and links that might be CTAs
    const buttonRegex = /<button[^>]*>([^<]+)<\/button>/gi;
    const ctas = [];
    let match;

    while ((match = buttonRegex.exec(fileContent)) !== null) {
      ctas.push(match[1].trim());
    }

    if (ctas.length === 0) {
      this.check(`${pageName} - CTAs`, 'pass', 'No primary CTAs to check');
      return;
    }

    let poorCTA = 0;
    const poorCTATexts = ['submit', 'ok', 'yes', 'no', 'button'];

    ctas.forEach(cta => {
      if (poorCTATexts.includes(cta.toLowerCase())) {
        poorCTA++;
      }
    });

    if (poorCTA === 0) {
      this.check(`${pageName} - CTAs`, 'pass', `All ${ctas.length} CTAs are action-oriented`);
    } else {
      this.check(`${pageName} - CTAs`, 'warn', `${poorCTA} generic CTA text (use action words)`);
    }
  }

  /**
   * Check specific page
   */
  checkPage(pagePath, pageName) {
    this.header(`CHECKING: ${pageName || pagePath}`);

    const filePath = path.join(process.cwd(), pagePath);

    if (!fs.existsSync(filePath)) {
      this.check(pageName || pagePath, 'fail', 'File not found');
      return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Extract text content (remove JSX/HTML tags for analysis)
    const textContent = fileContent
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/['"`]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    this.checkMetadata(fileContent, pageName);
    this.checkHeadings(fileContent, pageName);
    this.checkSpellingAndGrammar(textContent, pageName);
    this.checkReadability(textContent, pageName);
    this.checkContentLength(textContent, pageName);
    this.checkAltText(fileContent, pageName);
    this.checkLinks(fileContent, pageName);
    this.checkToneConsistency(fileContent, pageName);
    this.checkCTAs(fileContent, pageName);
  }

  /**
   * Run all content checks
   */
  async runAll() {
    this.log('\n📝 CONTENT QUALITY ASSURANCE', 'bright');
    this.log(`Timestamp: ${this.timestamp}\n`, 'dim');

    const pages = [
      { path: 'app/page.tsx', name: 'Homepage' },
      { path: 'app/about/page.tsx', name: 'About Page' },
      { path: 'app/services/page.tsx', name: 'Services Page' },
      { path: 'app/blog/page.tsx', name: 'Blog Index' },
      { path: 'app/blog/ai-powered-cicd-pipeline-analysis/page.tsx', name: 'CI/CD Article' },
      { path: 'app/blog/devops-best-practices-successful-mvps/page.tsx', name: 'DevOps Article' },
      { path: 'app/contact/page.tsx', name: 'Contact Page' },
    ];

    pages.forEach(page => {
      this.checkPage(page.path, page.name);
    });

    this.showSummary();
    return this.results.failed === 0;
  }

  /**
   * Display summary
   */
  showSummary() {
    this.header('CONTENT QA SUMMARY');

    const total = this.results.passed + this.results.failed + this.results.warnings;
    const passPercent = Math.round((this.results.passed / total) * 100);

    this.log(`  Passed:   ${this.results.passed}/${total}`, 'green');
    this.log(`  Failed:   ${this.results.failed}/${total}`, 'red');
    this.log(`  Warnings: ${this.results.warnings}/${total}`, 'yellow');
    this.log(`  Score:    ${passPercent}%\n`, passPercent >= 80 ? 'green' : 'yellow');

    if (this.results.failed === 0) {
      this.log('✓ Content quality checks passed!', 'green');
    } else {
      this.log('⚠ Review warnings before publishing', 'yellow');
    }

    // Save results to file
    const resultsFile = path.join(process.cwd(), 'qc-results.json');
    const existingResults = fs.existsSync(resultsFile) 
      ? JSON.parse(fs.readFileSync(resultsFile, 'utf-8')) 
      : {};

    fs.writeFileSync(resultsFile, JSON.stringify({
      ...existingResults,
      contentQA: {
        timestamp: this.timestamp,
        summary: {
          passed: this.results.passed,
          failed: this.results.failed,
          warnings: this.results.warnings,
          score: passPercent,
        },
        checks: this.results.checks,
      }
    }, null, 2));
    
    this.log(`Results saved to: qc-results.json\n`, 'dim');
  }
}

// Run Content QA
async function main() {
  const checker = new ContentQualityChecker();
  const passed = await checker.runAll();
  process.exit(passed ? 0 : 1);
}

main().catch(error => {
  console.error('Content QA Error:', error);
  process.exit(1);
});
