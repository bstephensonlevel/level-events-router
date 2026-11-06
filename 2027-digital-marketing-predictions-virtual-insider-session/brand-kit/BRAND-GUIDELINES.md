---
name: level-brand-guidelines
description: Level Agency brand identity guidelines and standards. Use when creating marketing materials, presentations, documents, or any content that needs to align with Level Agency's visual identity and brand voice. This includes logo usage, color palettes, typography, writing style, tone, brand personality, company values, and the canonical Level Messaging Platform (one-liner, elevator pitch, four pillars, Level Intelligence Suite, AI Fiduciary, proof points). Use whenever content states what Level is, does, or how it is different. ALSO use when building web pages, frontend UI, or HTML/CSS/JS templates - this skill includes a complete template library with production-ready components.
---

# Level Agency Brand Guidelines

This skill provides comprehensive brand guidelines for Level Agency to ensure consistent brand representation across all materials and communications.

## Template Library for Web Development

**CRITICAL: This skill includes a complete HTML/CSS/JS template library with production-ready components. When building web pages or frontend UI, you MUST use these pre-built assets - do NOT recreate them from scratch.**

### Quick Start Workflow

When asked to build a web page:

1. **Check examples first:** See `assets/examples/` for complete page templates you can copy
2. **Use existing CSS:** Always link to `assets/templates-library/assets/css/brand.css` and `components.css`
3. **Reference components:** See `assets/templates-library/pages/components-demo.html` for all available components
4. **Read CSS guide:** For detailed CSS usage, see `references/css-guide.md`

### ⚠️ Critical Rules

**DO:**
- ✅ Link to `brand.css` and `components.css` in every page
- ✅ Use pre-built component classes (`.btn`, `.card`, `.form-input`, etc.)
- ✅ Copy and modify example pages from `assets/examples/`
- ✅ Reference CSS variables for colors/spacing (`var(--color-primary)`)
- ✅ Add custom CSS ONLY for page-specific layouts not covered by components

**DON'T:**
- ❌ Recreate component styles inline or in `<style>` tags
- ❌ Hardcode brand colors (#000000, #86D5F4) - use CSS variables
- ❌ Write custom button/form/card CSS - use component classes
- ❌ Skip linking to the external CSS files

### Available Resources

**Complete Example Pages** (`assets/examples/`):
- `simple-landing.html` - Minimal landing page (hero, features, CTA)
- `marketing-page.html` - Full marketing site (nav, services, testimonials, form)
- Start by copying one of these and modifying the content

**Template Library** (`assets/templates-library/`):
- `pages/login.html` - Login page
- `pages/homepage.html` - Dashboard with table/search/pagination
- `pages/components-demo.html` - Interactive component showcase
- `assets/css/brand.css` - Brand foundation (colors, typography, variables)
- `assets/css/components.css` - All UI components
- `assets/js/components.js` - JavaScript component classes
- `assets/js/utils.js` - Helper utilities
- `README.md` - Complete documentation

**Reference Documentation** (`references/`):
- `css-guide.md` - Detailed CSS usage guide (READ THIS for complex projects)

### Standard Page Template

Every page should start with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>

  <!-- Tailwind CSS (optional for utility classes) -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts (required) -->
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,700;1,9..40,400&family=Inter+Tight:wght@700;900&display=swap" rel="stylesheet" />

  <!-- Level Agency CSS (REQUIRED - DO NOT SKIP) -->
  <link rel="stylesheet" href="../assets/css/brand.css">
  <link rel="stylesheet" href="../assets/css/components.css">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../assets/brand/level-favicon.png">

  <!-- Tailwind Config (if using Tailwind) -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ["DM Sans", "sans-serif"],
            display: ["Inter Tight", "sans-serif"],
          },
          colors: {
            border: "#D9DEF0",
            primary: "#000000",
            "primary-hover": "#333333",
            accent: "#86D5F4",
          },
        },
      },
    };
  </script>

  <!-- Custom CSS for THIS PAGE ONLY (minimal) -->
  <style>
    /* Only page-specific layout CSS here */
    /* DO NOT recreate buttons, forms, cards, etc. */
  </style>
</head>
<body class="bg-white">
  <!-- Content using component classes -->

  <script src="../assets/js/utils.js"></script>
  <script src="../assets/js/components.js"></script>
</body>
</html>
```

### Common Component Classes

Use these pre-built classes from `components.css`:

**Buttons:**
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-primary btn-lg">Large</button>
```

**Forms:**
```html
<div class="form-group">
  <label class="form-label">Label</label>
  <input type="text" class="form-input">
</div>

<!-- Use .form-dark when form card is in a dark section -->
<form class="form-dark">
  <div class="form-group">
    <label class="form-label">Label</label>
    <input type="text" class="form-input">
  </div>
</form>
```

**Cards:**
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">Content</div>
</div>
```

**Navigation:**
```html
<header class="header">
  <img src="../assets/brand/level-logo.svg" class="header-logo">
</header>
```

For complete list, see `references/css-guide.md` or `assets/templates-library/pages/components-demo.html`.

## Logo Usage

### Primary Logo
The primary logo is the preferred visual representation consisting of the L mnemonic with "LEVEL" beneath it. Use this version wherever space allows on all external-facing communications.

**Critical Rule:** The L mnemonic and the word LEVEL must NEVER be separated or arranged differently.

### Logo Variants
- **Black Primary Logo**: Use on light backgrounds
- **White Primary Logo**: Use on dark backgrounds or photos
- **Black Mnemonic**: L icon alone (for space-constrained applications)
- **White Mnemonic**: L icon alone on dark backgrounds

### Secondary Logo
The horizontal secondary logo places the L mnemonic next to "LEVEL". Use this when you have horizontal space or to differentiate certain applications.

### Logo Misuse - NEVER Do These:
1. DO NOT add color to the logo - the L should only be black or white
2. DO NOT use accent colors in the logo or change the color of bars within the design
3. DO NOT separate the word LEVEL from the L mnemonic
4. DO NOT rearrange or modify the logo elements

The logo can be used on photos and different color backgrounds - use whichever version (black or white) is most readable.

## Color Palette

### Primary Colors (Use in Large Fields)
- **Black**: #000000
- **White**: #FFFFFF
- **Gray**: #D9DEF0 (R:217 G:222 B:240)

Primary colors provide the basis of the visual system and should be used in large fields.

### Secondary Colors (Accents Only - Use Sparingly)
These are highlights designed for small fields to provide vibrant personality:

- **Blue**: #86D5F4 (R:134 G:213 B:244) - CMYK: 47% 0% 2% 0%
- **Pink**: #FD6EF8 (R:253 G:110 B:248) - CMYK: 0% 92% 0% 0%
- **Green**: #8EE34D (R:142 G:227 B:77) - CMYK: 49% 0% 100% 0%
- **Orange**: #FFAA53 (R:255 G:170 B:83) - CMYK: 0% 42% 84% 0%

### Color Usage Guidelines
- Primary colors (Black/White) are the foundation - use these predominantly
- Secondary colors are highlights - use sparingly for impact
- DO NOT use all secondary colors at once
- Secondary colors should NOT be used as font colors or with white text on them
- For digital use: secondary colors do not pass contrast checks for accessibility

## Typography

### Headline Font: Inter Tight
Use Inter Tight for headlines and impactful text:
- **Headlines**: Inter Tight Black
- **Subheads**: Inter Tight Bold

### Body Font: DM Sans
Use DM Sans for body copy and smaller text sizes.

### Capitalization and Punctuation
- **Headlines and subheads**: Always use sentence case (not title case)
- **Period usage**: 
  - Use a period when the headline/subhead forms a complete sentence (has subject and predicate)
  - Omit the period for phrases that don't form complete sentences

**Examples:**
- ✓ "We're kinda a big deal." (complete sentence - use period)
- ✓ "Delivering epic wins" (phrase - no period)

### Em Dash Usage
**CRITICAL: Never use em dashes (—) in any response or content.** Use alternatives instead:
- Use a colon when introducing a related idea or explanation
- Use a comma for brief parenthetical asides
- Use parentheses for supplemental context
- Use a period and start a new sentence for a distinct thought
- Use "and," "or," "but," or other conjunctions to join clauses

This rule applies to all Claude-generated content: conversation responses, documents, presentations, copy, and any other output.

## Brand Essence & Taglines

**Core Belief:** Good enough isn't.
This is the core belief that fuels every decision, deliverable, process, and partnership.

**Primary Tagline:** Good enough isn't.
**Secondary Tagline:** Expect better? Challenge accepted.

## Brand Vision

Brands aspiring to lead their category partner with Level to turn insight into compounding growth.

Level brings specialized expertise and integrated capacity through dedicated, humble, and proactive people. We own outcomes: showing up early with ideas, acting fast on signals, and optimizing long after most would stop.

## Level Messaging Platform

This is Level's canonical messaging hierarchy (per the Level Messaging Platform, 2026). All positioning language in any Level content must ladder up to it. Do not improvise alternative positioning.

### Category descriptor
Level is a **digital marketing agency**. This remains the only acceptable category descriptor whenever a category noun is needed (boilerplate, bios, directories, press releases, "About Level" copy). The messaging platform below is the positioning frame that sits on top of that descriptor. The two work together: descriptor for what Level is, platform for how Level is different.

### The one-liner
Enterprise capability. Mid-market focus.

### Why we exist
Level exists to provide marketers with a single, connected growth system.

### The elevator pitch (30-second version)
Growth mandates keep rising while budgets stay flat, and the buying journey has splintered across more channels, more data, and more decisions than any one team can hold together. They don't need another specialist. Level exists to provide marketers with a single, connected growth system, so mid-market and high-consideration brands have access to enterprise-grade capabilities and outcomes.

### The market moment
The old model can't keep up.

1. **Pressure up, budgets flat.** Growth mandates keep rising while budgets stay flat.
2. **A splintered journey.** More channels, more data, and more decisions than any one team can hold together.
3. **AI changes discovery.** AI is reshaping how buyers discover, judge, and choose.
4. **A new infrastructure bar.** The platforms now demand data infrastructure and measurement most brands have never had to build.

Clients don't need another specialist. They need one connected system, spanning intelligence, creative, experience, activation, and measurement.

### Four pillars. One connected growth system.

**1. Domain expertise**
Financial Services · Education · B2B · Home Services · Healthcare · Consumer Health and CPG
Deep expertise across our account and delivery teams, with dozens of clients in each category, so we read performance data and drive innovation generalists can't.
(Vertical naming note: the source deck lists "Pharma and CPG." The approved working name is "Consumer Health and CPG" for now, given current client mix. Use Consumer Health and CPG until revised.)

**2. Connected intelligence**
One AI system that turns that expertise into measurable growth.
The Level Intelligence Suite helps clients understand, reach, and convert. Pathfinder maps how buyers behave and surfaces creative territories before a dollar is spent. Foundry builds the digital experiences that convert. Signal activates media and CRM against your highest-value customers with an advanced propensity and prediction model. Prism develops and tests creative in-house. Pulse proves incremental growth and feeds it back into the loop.

**3. Human taste, context & judgment**
Our strategists and creatives make the calls that require expertise, taste, and accountability while understanding the full context of the market and our client's business.
We bring client-partnership experience a model can't: deciding what a brand should say and where budget should go, and orchestrating the technology so it serves the strategy instead of running on its own. That combination is what you're buying in a partnership with Level.

**4. Enterprise sophistication**
Platform access most service businesses cannot get on their own, regardless of budget.
Not a single flex but a full stack: intelligence, creative, experience, data engineering, and measurement, plus platform access.

Proof points (cleared for external use):
- Founding member of a $6B+ media buying collective, with preferred rates and betas from Google, Meta, and others.
- One of only six agencies in Google's data-infrastructure program.
- First independent agency to deploy PubMatic's agentic buying at scale.

## Brand Objectives

- Turn intelligence into momentum.
- Create compounding performance through systems, not spikes.
- Redefine partnership through radical accountability.
- Advance growth using AI and human creativity together.
- Illuminate the customer journey by connecting strategy, media, and creative.

## Level Intelligence Suite

The Level Intelligence Suite helps clients understand, reach, and convert across one connected, AI-enabled stack. These descriptions are canonical:

**Level.Pathfinder**: AI-powered strategic intelligence. Maps how buyers behave and surfaces creative territories before a dollar is spent.
**Level.Signal**: Predictive lead and value modeling. Activates media and CRM against your highest-value customers with an advanced propensity and prediction model.
**Level.Prism**: Creative signal intelligence (what's working, and why). Develops and tests creative in-house.
**Level.Pulse**: On demand performance intelligence. Proves incremental growth and feeds it back into the loop.
**Level.Foundry**: Our agentic web development and prototyping tool. Builds the digital experiences that convert.

## The AI Fiduciary

Level's differentiator: we manage the technology in your interest. Acting as an AI fiduciary means:

- We evaluate and select the tools.
- We guide the processes.
- We fund AI innovation at Level.

We're transparent about how we use AI, and our incentives are aligned with yours.

## Partnership Principles

What clients can expect from Level:
- We reset the goalposts. Every win becomes the new baseline.
- We're radically accountable. Your numbers are our scoreboard.
- We're human. Calm collaboration, no chaos.
- We make growth repeatable. Built-in experimentation keeps you ahead.
- We like to have fun, and we'll pick up the tab.

## Brand Benefits

**Functional Benefits:**
- Accelerate complex buying journeys.
- Unite AI, creative, and media into one performance system.
- Deliver clear, frequent insight on what's working, and what's next.
- Push beyond today's playbook with data-informed ideas.

**Emotional Benefits:**
- Relief for teams carrying big growth goals.
- Confidence in a partner who's ahead of the curve.
- Momentum and clarity.
- Trust in a plainspoken, accountable team.
- Energy and collaboration that make partnership enjoyable.

## Brand Personality & Voice

### Personality Traits
- Direct
- Confident (not cocky)
- Shoulder-to-shoulder
- Energetic yet composed
- Practical
- Human

### Brand Attributes
Embedded, Precise, Plainspoken, Accountable, Proactive, Intelligent, Energetic, Human, Spirited, Relentless, Attuned, Composed

These are the characteristics all communications, behaviors, and experiences should reinforce.

### Voice Do's
- Speak to clients, not about ourselves.
- Keep it short, clear, and confident.
- State truths plainly.
- Always say what matters and why.

### Voice Don'ts
- Don't hype or posture.
- Don't hide meaning in jargon.
- Don't write like a report.
- Don't talk theory. Show action.

## Core Values

### No Ego, All In
We stay humble and work together. No task is too small, no person too big. We lift each other up, embrace challenges, and celebrate success as a team.

### Better Every Day
We embrace curiosity and growth. Progress over perfection, learning from every challenge to be better, every single day.

### Relentless For Results
We're driven to win and smash goals. We act with urgency and accountability, delivering outcomes that exceed expectations.

### Driven By Truth
We speak up, even when it's tough. We value honesty, transparency, and data-driven decisions. Truth guides our work.

## Organizational Culture

### How We Operate
- Proactive toward goals.
- Work is a living system: measured, optimized, and owned.
- Signals are clear; accountability is direct.
- AI multiplies impact across every discipline.

### Internal Standards
- Speak in outcomes, not activity.
- Fix what's unclear or inefficient.
- No "that's not my lane."
- Elite capability, low ego.
- Serious about results, relaxed in culture.

## Brand Story

Level was built on a simple belief: good enough isn't.

Too many brands hit a growth moment and then stall. A campaign works, numbers spike, and momentum fades. We kept seeing smart teams doing solid work without a system built to sustain performance, especially in complex, high-consideration markets. So we built one.

Level acts as an embedded growth partner, not a vendor. We integrate deeply with your team, take real accountability, and focus on what actually moves the business.

Today, we partner with brands that expect more from their marketing and from the people behind it. We treat your numbers as our scoreboard and momentum as the goal.

### Level Agencies

Level is headquartered in Pittsburgh, PA with employees across the US and Canada, with over 250 people across three brands:

- **Becker Media (acq. 2023):** A higher-ed marketing powerhouse with deep capabilities in media measurement and optimization. With this acquisition, Level Agency became the leader in higher education performance marketing.
- **WebMechanix (acq. 2024):** A leading performance marketing agency. This acquisition allowed Level to integrate deep capabilities in SEO/content, performance media, creative and website development.
- **BAM Strategy (acq. 2025):** A CRM-led creative and loyalty agency known for building durable customer relationships. BAM strengthens Level's ability to drive growth beyond acquisition, across the full customer lifecycle.

### Industries Served
Financial Services, Education, B2B, Home Services, Healthcare, Consumer Health and CPG.
(These mirror the domain expertise pillar of the Level Messaging Platform.)

### Capabilities
Performance Media Planning & Buying, Nurturing & Marketing Automation, Performance Content & Creative, Data Science & Analytics, Strategy & Consulting, AI SEO.

## Name & Symbol Meaning

Level signals calibration, elevation, and forward motion. It implies precision, balance, and the belief that baseline performance is never the goal.

## Visual System Foundation

The L mnemonic represents the platform: the space where success thrives and builds upon itself. It's made of a series of lines forming an L shape and acts as an instant signifier of our brand. The mnemonic should be widely used to build brand equity.

The logo is simple by design. It loves whitespace. It asks to be left alone.

## Questions?

For questions about proper brand usage, reach out in the #creative-ama Slack channel.
