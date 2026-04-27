# AI Agent Skills & Capabilities for ZafTech Portfolio Website

> **Purpose:** This file defines the skills, abilities, and standards that AI agents should follow when working on www.zaftech.ca portfolio website.

---

## Agent Profile: Expert Node.js Developer

**Role:** Full-stack Node.js developer specializing in professional portfolio websites, modern web technologies, and DevOps best practices.

**Core Competencies:**
- Node.js / Express.js backend development
- React / Next.js / Vue.js frontend development
- Professional UI/UX design
- Responsive web design
- SEO optimization
- Performance optimization
- DevOps and CI/CD pipelines

---

## Skill 1: Blog Article Creation

### Capability
Create comprehensive, SEO-optimized blog articles with professional formatting and code examples.

### Standards
- **Length:** 2,500-4,000 words minimum
- **Reading time:** 10-15 minutes
- **SEO score:** 80+ (Yoast/Rank Math)
- **Readability:** Flesch Reading Ease 60-70
- **Code quality:** Production-ready, tested examples

### Structure
```yaml
frontmatter:
  - title (60-70 characters)
  - slug (URL-friendly)
  - date (YYYY-MM-DD)
  - author
  - category
  - tags (5-8 relevant tags)
  - excerpt (150-160 characters)
  - readTime
  - featured (boolean)
  - image (hero image path)

content:
  - Introduction (300-400 words)
  - Main sections (500-800 words each)
  - Code examples (properly formatted)
  - Visual elements (tables, charts, diagrams)
  - Case studies / real-world examples
  - Actionable takeaways
  - Conclusion with CTA

technical:
  - Table of contents (auto-generated)
  - Reading progress indicator
  - Syntax highlighting
  - Responsive images
  - Social sharing buttons
  - Related articles
```

### File Locations
```
/content/blog/{slug}.md
/src/blog/posts/{slug}.md
/pages/blog/{slug}.mdx
```

### Metadata Template
```yaml
---
title: "Your Article Title Here"
slug: "url-friendly-slug"
date: "2026-02-19"
author: "ZafTech Team"
category: "DevOps | Web Development | Cloud | AI/ML"
tags: ["tag1", "tag2", "tag3"]
excerpt: "Compelling 150-character summary"
readTime: "12 min"
featured: true
image: "/images/blog/{slug}-hero.jpg"
seo:
  keywords: ["keyword1", "keyword2"]
  description: "Meta description 150-160 chars"
---
```

---

## Skill 2: Splash Page Creation

### Capability
Create modern, professional splash pages for portfolio sections, product launches, and campaigns.

### Types of Splash Pages

#### 2.1 Coming Soon Page
```javascript
// components/SplashComingSoon.jsx
export const ComingSoonSplash = () => {
  return {
    elements: [
      "Hero section with countdown timer",
      "Email capture form (newsletter signup)",
      "Social media links",
      "Teaser content / preview",
      "Animated background or video",
      "Progress indicator (optional)",
    ],
    features: [
      "Mobile responsive",
      "Email validation",
      "Analytics tracking",
      "Exit-intent popup (optional)",
    ]
  };
};
```

#### 2.2 Service Landing Splash
```javascript
// Purpose: Showcase specific service offering
export const ServiceSplash = () => {
  return {
    sections: [
      "Hero with value proposition",
      "Problem statement",
      "Solution overview",
      "Key benefits (3-4 items)",
      "Social proof / testimonials",
      "CTA (contact form / booking)",
      "FAQ section",
    ]
  };
};
```

#### 2.3 Portfolio Project Splash
```javascript
// Purpose: Individual project showcase
export const ProjectSplash = () => {
  return {
    sections: [
      "Project hero with mockup/screenshot",
      "Project overview",
      "Technologies used",
      "Challenges & solutions",
      "Results / metrics",
      "Code snippets / architecture",
      "Live demo link",
      "GitHub repository link",
    ]
  };
};
```

#### 2.4 Event/Webinar Splash
```javascript
export const EventSplash = () => {
  return {
    elements: [
      "Event date/time with timezone",
      "Speaker information",
      "Agenda / topics",
      "Registration form",
      "Calendar add button",
      "Countdown timer",
    ]
  };
};
```

### Design Standards

#### Color Palette
```css
:root {
  /* Primary Brand Colors */
  --primary: #0066FF;
  --primary-dark: #0052CC;
  --primary-light: #4D94FF;
  
  /* Neutral Colors */
  --dark: #1A1A1A;
  --gray-dark: #333333;
  --gray: #666666;
  --gray-light: #CCCCCC;
  --light: #F5F5F5;
  --white: #FFFFFF;
  
  /* Accent Colors */
  --accent: #00D9FF;
  --success: #00C853;
  --warning: #FFB300;
  --error: #FF3D00;
}
```

#### Typography
```css
/* Professional Typography Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Poppins', 'Inter', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

#### Layout Grid
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .container { padding: 0 2rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 3rem; }
}
```

### Animation Standards
```javascript
// Smooth, professional animations
const animations = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  fadeIn: {
    opacity: [0, 1],
    duration: 300,
  },
  slideUp: {
    transform: ['translateY(20px)', 'translateY(0)'],
    opacity: [0, 1],
    duration: 400,
  },
};
```

### Component Template
```jsx
// components/splash/BaseSplash.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const BaseSplash = ({ 
  title, 
  subtitle, 
  cta, 
  background,
  children 
}) => {
  return (
    <div className="splash-container" style={{ background }}>
      <motion.div
        className="splash-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="splash-title">{title}</h1>
        <p className="splash-subtitle">{subtitle}</p>
        
        {children}
        
        {cta && (
          <motion.button
            className="splash-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cta.text}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
```

---

## Skill 3: Professional Code Quality

### Standards
```javascript
// All code must follow these standards

const codeQualityStandards = {
  linting: {
    tool: 'ESLint',
    extends: ['eslint:recommended', 'next/core-web-vitals'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
    }
  },
  
  formatting: {
    tool: 'Prettier',
    config: {
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
    }
  },
  
  testing: {
    unit: 'Jest',
    integration: 'Cypress',
    coverage: '>80%',
  },
  
  documentation: {
    comments: 'JSDoc for functions',
    readme: 'Required for features',
    changelog: 'Semantic versioning',
  }
};
```

### File Structure
```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── splash/          # Splash page components
│   ├── blog/            # Blog components
│   └── layout/          # Layout components
├── pages/
│   ├── blog/
│   ├── projects/
│   └── splash/
├── styles/
│   ├── globals.css
│   ├── components/
│   └── utilities/
├── lib/
│   ├── api/
│   ├── utils/
│   └── hooks/
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── content/
    ├── blog/
    └── projects/
```

---

## Skill 4: Responsive Design Implementation

### Breakpoints
```javascript
const breakpoints = {
  xs: '320px',   // Small phones
  sm: '640px',   // Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large desktops
};
```

### Mobile-First Approach
```css
/* Always start with mobile styles */
.element {
  /* Mobile styles (default) */
  padding: 1rem;
  font-size: 1rem;
}

/* Then add tablet styles */
@media (min-width: 768px) {
  .element {
    padding: 1.5rem;
    font-size: 1.125rem;
  }
}

/* Then desktop styles */
@media (min-width: 1024px) {
  .element {
    padding: 2rem;
    font-size: 1.25rem;
  }
}
```

### Touch Targets
```css
/* Minimum 44x44px for touch targets */
.button,
.link,
.interactive {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}
```

---

## Skill 5: SEO Optimization

### Meta Tags Template
```jsx
// components/SEO.jsx
export const SEO = ({ 
  title, 
  description, 
  image, 
  url,
  type = 'website' 
}) => {
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title} | ZafTech</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0066FF" />
    </>
  );
};
```

### Schema Markup
```javascript
// lib/schema.js
export const generateBlogSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "image": article.image,
  "datePublished": article.date,
  "dateModified": article.updated || article.date,
  "author": {
    "@type": "Person",
    "name": article.author,
    "url": "https://www.zaftech.ca/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ZafTech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.zaftech.ca/logo.png"
    }
  },
  "description": article.excerpt,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.zaftech.ca/blog/${article.slug}`
  }
});
```

---

## Skill 6: Performance Optimization

### Core Web Vitals Targets
```javascript
const performanceTargets = {
  LCP: '<2.5s',    // Largest Contentful Paint
  FID: '<100ms',   // First Input Delay
  CLS: '<0.1',     // Cumulative Layout Shift
  FCP: '<1.8s',    // First Contentful Paint
  TTI: '<3.8s',    // Time to Interactive
  TTFB: '<600ms',  // Time to First Byte
};
```

### Image Optimization
```jsx
// Always use Next.js Image component or equivalent
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority={true}  // For above-fold images
  loading="lazy"   // For below-fold images
  placeholder="blur"
  quality={85}
/>
```

### Code Splitting
```javascript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('../components/HeavyComponent'),
  { 
    loading: () => <LoadingSpinner />,
    ssr: false // If component doesn't need SSR
  }
);
```

---

## Skill 7: Accessibility (WCAG 2.1 AA)

### Standards Checklist
```javascript
const a11yChecklist = {
  semanticHTML: {
    required: true,
    example: '<header>, <nav>, <main>, <article>, <aside>, <footer>',
  },
  
  altText: {
    required: true,
    rule: 'All images must have descriptive alt text',
  },
  
  colorContrast: {
    normalText: '4.5:1 minimum',
    largeText: '3:1 minimum',
    tool: 'WebAIM Contrast Checker',
  },
  
  keyboardNav: {
    required: true,
    test: 'All interactive elements accessible via Tab',
  },
  
  ariaLabels: {
    required: 'For icons and non-text elements',
    example: '<button aria-label="Close menu">×</button>',
  },
  
  focusIndicators: {
    required: true,
    visible: 'Must be clearly visible',
  },
  
  headingHierarchy: {
    required: true,
    rule: 'Logical H1 → H2 → H3 structure',
  },
};
```

### Implementation
```jsx
// Accessible splash page example
export const AccessibleSplash = () => {
  return (
    <main role="main" aria-labelledby="splash-title">
      <h1 id="splash-title" className="sr-only">
        Page Title for Screen Readers
      </h1>
      
      <section aria-label="Hero section">
        <button 
          aria-label="Learn more about our services"
          className="cta-button"
        >
          Learn More
        </button>
      </section>
      
      <nav aria-label="Skip navigation">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
      </nav>
    </main>
  );
};
```

---

## Skill 8: Form Handling & Validation

### Contact Form Standard
```jsx
// components/ContactForm.jsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data) => {
    // Handle form submission
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Your Name" />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input {...register('email')} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <textarea {...register('message')} placeholder="Message" />
      {errors.message && <span>{errors.message.message}</span>}
      
      <button type="submit">Send Message</button>
    </form>
  );
};
```

---

## Skill 9: Analytics & Tracking

### Implementation
```javascript
// lib/analytics.js
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Custom analytics
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      event: eventName,
      properties,
      timestamp: new Date().toISOString(),
    }),
  });
};

// Usage examples
trackEvent('blog_article_view', {
  article_title: 'DevOps Pipeline Automation',
  category: 'DevOps',
});

trackEvent('cta_click', {
  button_text: 'Contact Us',
  page: '/splash/services',
});

trackEvent('form_submission', {
  form_type: 'contact',
  success: true,
});
```

---

## Skill 10: Git Workflow & Branching

### Branch Naming Convention
```bash
# Feature branches
feature/blog-devops-automation
feature/splash-page-services
feature/contact-form-validation

# Bug fixes
fix/mobile-navigation-bug
fix/image-loading-issue

# Improvements
improve/performance-optimization
improve/seo-meta-tags

# Documentation
docs/update-readme
docs/add-contributing-guide
```

### Commit Message Format
```bash
# Format: <type>(<scope>): <subject>

# Examples:
feat(blog): add DevOps pipeline automation article
fix(splash): resolve mobile responsive issues
style(components): update color scheme to match brand
perf(images): optimize hero images with next/image
docs(readme): add setup instructions
refactor(forms): migrate to react-hook-form
test(contact): add validation tests
chore(deps): update dependencies
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature (splash page, blog article, component)
- [ ] Bug fix
- [ ] Performance improvement
- [ ] Documentation update

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessibility tested
- [ ] SEO meta tags added
- [ ] Lighthouse score > 90

## Screenshots
[Add screenshots for visual changes]

## Testing
[Describe testing performed]
```

---

## Skill 11: Component Library Standards

### Reusable Components
```jsx
// components/common/Button.jsx
export const Button = ({ 
  variant = 'primary',
  size = 'md',
  children,
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-medium transition-all';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

---

## Skill 12: Error Handling & User Feedback

### Toast Notifications
```jsx
// lib/toast.js
import { toast } from 'react-hot-toast';

export const notify = {
  success: (message) => toast.success(message, {
    duration: 4000,
    position: 'top-right',
  }),
  
  error: (message) => toast.error(message, {
    duration: 5000,
    position: 'top-right',
  }),
  
  loading: (message) => toast.loading(message),
  
  dismiss: (toastId) => toast.dismiss(toastId),
};

// Usage
notify.success('Form submitted successfully!');
notify.error('Something went wrong. Please try again.');
```

---

## Agent Behavior Guidelines

### When creating content:
1. **Always** prioritize user experience
2. **Always** ensure mobile responsiveness
3. **Always** add proper SEO meta tags
4. **Always** include accessibility features
5. **Always** optimize for performance
6. **Never** use inline styles (use CSS modules or Tailwind)
7. **Never** skip error handling
8. **Never** commit console.log statements
9. **Never** use hardcoded values (use constants/config)
10. **Never** skip testing on multiple devices

### Quality Checklist Before Committing
- [ ] Runs without errors
- [ ] ESLint passes
- [ ] Prettier formatted
- [ ] Mobile responsive (tested on 375px, 768px, 1024px)
- [ ] Lighthouse score > 90
- [ ] Accessibility score > 90
- [ ] No console warnings
- [ ] SEO optimized
- [ ] Images optimized
- [ ] Proper git commit message

---

## Project-Specific Context

**Website:** www.zaftech.ca
**Tech Stack:** Node.js, Next.js/React, Tailwind CSS
**Target Audience:** Technical professionals, potential clients, recruiters
**Tone:** Professional, knowledgeable, approachable
**Primary Goals:** Showcase expertise, generate leads, build authority

---

## Resources & Tools

### Development
- Node.js v18+
- npm/yarn/pnpm
- VS Code with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

### Testing
- Lighthouse (Chrome DevTools)
- WebAIM Contrast Checker
- WAVE Accessibility Tool
- Google PageSpeed Insights

### Design
- Figma (design mockups)
- TinyPNG (image compression)
- Font Awesome / Heroicons

### Analytics
- Google Analytics 4
- Google Search Console
- Hotjar (optional)

---

## Version History

- v1.0.0 (2026-02-19): Initial skills definition
  - Blog article creation
  - Splash page creation
  - Professional code standards
  - SEO & accessibility guidelines

---

**Last Updated:** 2026-02-19
**Maintained By:** ZafTech Development Team
**AI Agents:** Use this file as reference for all development tasks on www.zaftech.ca