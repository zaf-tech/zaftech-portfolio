# Content Quality Testing Skills & Automated QA

## Overview
This guide provides automated and manual testing skills for evaluating website content quality, ensuring all pages meet professional standards for clarity, accuracy, and user experience.

## Quick Start - Running Quality Assurance

### Available QA Commands

```bash
# Run all quality assurance checks (build + content)
npm run qc:qa

# Run only content quality tests
npm run qc:content
npm run qc:skills

# Run technical QC checks
npm run qc

# Run full QC (build + technical checks)
npm run qc:full
```

### What Each Command Tests

| Command | Tests | Duration |
|---------|-------|----------|
| `npm run qc:content` | Spelling, grammar, readability, metadata, alt text, links, tone, CTAs | 30s |
| `npm run qc` | Build validation, TypeScript, links, SEO, accessibility, dependencies | 2-3m |
| `npm run qc:qa` | Both content AND technical checks (comprehensive) | 3-4m |
| `npm run qc:build` | Build compilation only | 1-2m |

## Content Quality Assessment Framework

### 1. Spelling & Grammar
**Tools:**
- Grammarly
- VS Code spell checker
- Language Tool
- Automated check: `npm run qc:content`

**Skills to Test:**
- No spelling errors
- Proper grammar usage
- Consistent tense
- No duplicate words
- Proper punctuation

**Command:** `npm run qc:spelling`

---

### 2. Copy Writing Quality
**Evaluation Criteria:**
- Clear value proposition
- Action-oriented language
- Appropriate tone for audience
- Consistent brand voice
- Proper call-to-action (CTA) phrasing

**Pages to Review:**
- Homepage hero section
- Service descriptions
- Blog article introductions
- Contact page messaging
- Footer content

**Skills:**
- ✓ Use power words (proven, guaranteed, secure)
- ✓ Avoid fluff and jargon
- ✓ Use active voice
- ✓ Short paragraphs (2-3 sentences max)
- ✓ Benefit-focused (not feature-focused)

---

### 3. Readability Testing
**Metrics:**
- Flesch Reading Ease >= 60 (conversational)
- Flesch-Kincaid Grade Level <= 8
- Average sentence length < 20 words
- Average paragraph <= 5 sentences

**Tools:**
- Hemingway App
- Readable.com
- Grammarly readability score

**Skills:**
- ✓ Short sentences over long ones
- ✓ Simple words over complex ones
- ✓ Active voice over passive
- ✓ Scannable layout (bullets, headers)

---

### 4. SEO Content Quality
**Page Elements to Check:**
- Title tags (50-60 chars, includes keyword)
- Meta descriptions (150-160 chars)
- H1 tag (one per page, includes keyword)
- Header hierarchy (H1 > H2 > H3)
- Keyword density (1-2% of content)
- Internal links (relevant, contextual)

**Content Skills:**
- ✓ Natural keyword integration
- ✓ Descriptive anchor text
- ✓ User-focused content
- ✓ FAQ sections for long content
- ✓ Related content links

---

### 5. Tone & Voice Consistency
**Brand Voice Guidelines:**
- Professional yet approachable
- Technical when needed, accessible always
- Confident and authoritative
- Helpful and supportive

**Checklist:**
- [ ] Consistent pronouns (we/our/you)
- [ ] Consistent terminology
- [ ] Consistent formality level
- [ ] Consistent cultural references
- [ ] No inconsistent capitalization

**Pages to Audit:**
- Check all service descriptions
- Review blog articles
- Validate about page
- Test contact page copy

---

### 6. Factual Accuracy
**Testing Skills:**
- Verify dates and statistics
- Validate author credentials
- Check company information
- Confirm technical accuracy
- Verify external references

**Checklist:**
- [ ] No outdated information
- [ ] Statistics have sources
- [ ] Technical claims are accurate
- [ ] Contact details are current
- [ ] Links to sources work

---

### 7. Link Quality
**Internal Links:**
- All internal links work (return 200)
- Links are contextual and relevant
- Anchor text is descriptive
- No link spam ("click here")

**External Links:**
- Links open in new tab (target="_blank")
- Relevant to content
- No broken links
- Credible sources

**Command:** `npm run qc:links`

---

### 8. Image Alt Text Quality
**Criteria:**
- Every image has alt text
- Alt text is descriptive (not "image" or "photo")
- Alt text < 125 characters
- Alt text describes content, not obvious context
- Decorative images have empty alt text

**Good Examples:**
- ✓ "Dashboard showing CI/CD pipeline metrics"
- ✓ "Team members collaborating on code review"

**Bad Examples:**
- ✗ "Image"
- ✗ "Photo of team"
- ✗ "Picture" (too vague)

---

### 9. Form Field Quality
**Label Quality:**
- All inputs have associated labels
- Labels are clear and specific
- Help text is provided for complex fields
- Error messages are helpful
- Placeholder text doesn't replace labels

**Button Copy:**
- [ ] Clear action ("Get Started", not "Submit")
- [ ] Proper punctuation
- [ ] Consistent across site

---

### 10. Content Structure
**Scanning Pattern:**
- H1 introduces topic
- Subheadings break content logically
- Paragraphs are short (3-4 sentences)
- Important info comes first (inverted pyramid)
- Bulleted lists for easy scanning
- Visual breaks between sections

**Skills:**
- ✓ Use descriptive headers
- ✓ Front-load key information
- ✓ 1 idea per paragraph
- ✓ Use white space effectively

---

## Testing Workflow

### Content Validation Checklist
```markdown
Page: ___________
Date: ___________
Reviewer: ___________

GRAMMAR & SPELLING:
- [ ] No spelling errors
- [ ] Proper grammar throughout
- [ ] Correct punctuation
- [ ] No duplicate words

READABILITY:
- [ ] Short sentences (< 20 words avg)
- [ ] Simple words preferred
- [ ] Active voice used
- [ ] Scannable layout

TONE & VOICE:
- [ ] Consistent brand voice
- [ ] Appropriate formality level
- [ ] Confident and helpful
- [ ] No contradictions

ACCURACY:
- [ ] Facts are verified
- [ ] Dates are current
- [ ] Links work
- [ ] Contact info correct

SEO:
- [ ] H1 tag present
- [ ] Meta description present
- [ ] Keywords naturally integrated
- [ ] Internal links present

IMAGES:
- [ ] All images have alt text
- [ ] Alt text is descriptive
- [ ] Images load correctly

OVERALL:
- [ ] Professional appearance
- [ ] Engaging content
- [ ] Clear CTA (if applicable)
- [ ] Mobile ready

Issues Found:
1. ________________
2. ________________

Actions Taken:
1. ________________
2. ________________
```

---

## Common Content Issues & Fixes

### Issue: Content is Hard to Read
**Fixes:**
- Break into shorter paragraphs
- Add subheadings every 2-3 paragraphs
- Use bullet points for lists
- Use simpler vocabulary
- Reduce sentence length

### Issue: Content Feels Salesy
**Fixes:**
- Replace benefits with specific examples
- Remove superlatives ("best", "amazing")
- Focus on customer needs, not features
- Add social proof (testimonials, case studies)
- Use conversational tone

### Issue: Content is Outdated
**Fixes:**
- Update dates and statistics
- Verify all links still work
- Remove outdated references
- Check author bios for accuracy
- Update version numbers

### Issue: Tone is Inconsistent
**Fixes:**
- Create brand voice guide
- Use consistent pronouns (we vs. I)
- Standardize terminology
- Review for consistency before publish
- Use templates for similar content

---

## Tools & Resources
- **Grammarly**: Grammar and spell checking
- **Hemingway App**: Readability analysis
- **Readable.com**: Reading level metrics
- **axe DevTools**: Accessibility + SEO
- **Moz**: SEO content audit
- **Google PageSpeed Insights**: Overall quality scoring
- **WAVE**: Alt text validation

---

## Best Practices Summary

| Aspect | Best Practice |
|--------|--------------|
| Sentence Length | Average < 20 words |
| Paragraph Length | 2-5 sentences max |
| Content Width | 50-75 characters per line |
| Readability Grade | 8th grade or lower |
| Keywords | 1-2% of content naturally |
| Headers | Hierarchical, descriptive |
| Links | Contextual, descriptive anchor text |
| Images | All with descriptive alt text |
| CTAs | Clear, action-oriented |
| Voice | Professional, approachable, consistent |

---

## Quick QC Review (5 minutes)
1. **Scan**: Read headlines and first sentence of each section
2. **Skim**: Look for spelling/grammar errors (red squiggles)
3. **Check**: Verify all links work
4. **Review**: Ensure tone is consistent with brand
5. **Validate**: Confirm facts and dates are current

---

## Automated QA Commands Reference

### Command: `npm run qc:content` (Content Quality)
Tests content quality aspects:
- **Spelling & Grammar**: Checks for common misspellings
- **Readability**: Analyzes sentence and paragraph structure
- **Content Length**: Ensures pages have sufficient content
- **Metadata**: Validates title and description tags
- **Headings**: Checks H1-H6 structure and hierarchy
- **Alt Text**: Verifies images have descriptive alt attributes
- **Links**: Analyzes anchor text quality
- **Tone & Voice**: Checks for consistency in pronouns and formality
- **CTAs**: Validates call-to-action button text

**Output**: Detailed report with pass/fail/warning status for each page

### Command: `npm run qc` (Technical QC)
Tests technical aspects:
- **Build Validation**: Ensures project compiles
- **TypeScript**: Checks for type errors
- **Link Validation**: Verifies pages exist
- **SEO Metadata**: Checks for proper metadata exports
- **Accessibility**: Audits semantic HTML usage
- **Dependencies**: Scans for security vulnerabilities
- **File Size**: Checks build output size

**Output**: Comprehensive QC report with build details

### Command: `npm run qc:qa` (Comprehensive)
Runs BOTH content quality + technical QC checks
- Combines results from `npm run qc:content` and `npm run qc`
- Best for pre-deployment validation
- Takes 3-4 minutes

**Output**: Complete `qc-results.json` with all checks

---

## Reading QC Results

All test results are saved to `qc-results.json` with:
- **timestamp**: When the test ran
- **summary**: Overall pass/fail/warning counts and score
- **checks**: Detailed results for each individual test

### Example Result
```json
{
  "contentQA": {
    "timestamp": "2026-02-19T10:30:00.000Z",
    "summary": {
      "passed": 45,
      "failed": 2,
      "warnings": 8,
      "score": 84
    },
    "checks": [
      {
        "name": "Homepage - Spelling",
        "status": "pass",
        "message": "No common spelling mistakes found"
      }
    ]
  }
}
```

---

## Approval Checklist
- [ ] No spelling or grammar errors
- [ ] Content is readable (Flesch >= 60)
- [ ] Tone is consistent with brand
- [ ] Facts and dates verified
- [ ] All links work
- [ ] Images have alt text
- [ ] No outdated information
- [ ] Mobile-friendly layout
- [ ] Ready for publication
