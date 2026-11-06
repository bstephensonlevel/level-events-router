# CSS Guide for Level Agency Projects

This guide provides detailed instructions for using the Level Agency CSS framework when building web pages.

## Table of Contents
- [Quick Start](#quick-start)
- [CSS Architecture](#css-architecture)
- [Using Pre-built Styles](#using-pre-built-styles)
- [Component Classes](#component-classes)
- [Customization](#customization)

## Quick Start

**CRITICAL: Always use the pre-built CSS files. DO NOT recreate styles inline.**

Every Level Agency web page should include these two CSS files from the skill's templates-library:

```html
<!-- Adjust paths based on where your HTML file is located relative to the skill -->
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/brand.css">
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/components.css">
```

**Note:** Copy the entire `assets/templates-library/` folder to your project, then reference the CSS files relative to your HTML file's location.

These files contain all brand-compliant styles. Recreating these styles inline or in custom `<style>` tags defeats the purpose of having a reusable template library.

## CSS Architecture

The CSS framework is split into two files:

### 1. brand.css - Foundation Layer
Contains:
- CSS custom properties (variables) for colors, fonts, spacing
- Typography base styles (headings, body text)
- Brand color utilities
- Core brand guidelines

**When to reference:** Always include this file first.

### 2. components.css - Component Layer
Contains:
- All UI component styles (buttons, forms, cards, tables, etc.)
- Layout components (header, navigation, modals, chat)
- Utility classes (spacing, display, positioning)
- Responsive design patterns

**When to reference:** Always include this file second (after brand.css).

## Using Pre-built Styles

### Standard Page Setup

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

  <!-- Level Agency CSS (required) -->
  <!-- Adjust paths to point to templates-library in your project -->
  <link rel="stylesheet" href="path/to/assets/templates-library/assets/css/brand.css">
  <link rel="stylesheet" href="path/to/assets/templates-library/assets/css/components.css">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="path/to/assets/templates-library/assets/brand/level-favicon.png">

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
</head>
<body class="bg-white">
  <!-- Content here -->
</body>
</html>
```

### DO NOT Do This:

❌ **Inline CSS recreating existing styles:**
```html
<style>
  :root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    /* ... recreating brand.css variables ... */
  }

  .btn {
    /* ... recreating components.css button styles ... */
  }
</style>
```

✅ **Instead, use the external CSS files:**
```html
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/brand.css">
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/components.css">
```

## Component Classes

All component classes are available in components.css. Reference them directly in your HTML:

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent">Accent Button</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Label</label>
  <input type="text" class="form-input" placeholder="Enter text...">
</div>

<textarea class="form-textarea"></textarea>
<select class="form-select">...</select>
<input type="text" class="form-input search-input" placeholder="Search...">

<!-- Dark Form Variant (use when form is on dark background or needs high contrast) -->
<form class="form-dark">
  <div class="form-group">
    <label class="form-label">Label</label>
    <input type="text" class="form-input" placeholder="Enter text...">
  </div>
</form>
```

**When to use `.form-dark`:**
- When a form card is placed in a dark section (e.g., black/dark background)
- When you need stronger text contrast for labels
- Add `.form-dark` class to the `<form>` element or parent container

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">Content</div>
</div>

<!-- Info cards -->
<div class="info-card info-card-blue">Info</div>
<div class="info-card info-card-green">Success</div>
<div class="info-card info-card-yellow">Warning</div>
<div class="info-card info-card-red">Error</div>
```

### Tables
```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr><th>Column</th></tr>
    </thead>
    <tbody>
      <tr><td>Data</td></tr>
    </tbody>
  </table>
</div>
```

### Navigation
```html
<header class="header">
  <div class="flex items-center">
    <img src="path/to/assets/templates-library/assets/brand/level-logo.svg" class="header-logo">
    <h1 class="header-title">Title</h1>
  </div>
</header>

<nav class="nav-tabs">
  <button class="nav-tab active">Tab 1</button>
  <button class="nav-tab">Tab 2</button>
</nav>

<div class="user-profile">
  <div class="user-avatar">DB</div>
  <span class="user-name">Dave Brong</span>
</div>
```

### Badges
```html
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Green</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-gray">Gray</span>
```

### Modals
```html
<div id="modal" class="hidden">
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <h2>Modal Title</h2>
      <p>Content</p>
    </div>
  </div>
</div>
```

### Chat
```html
<div class="chat-container">
  <div class="chat-header">
    <h3>Chat</h3>
  </div>
  <div class="chat-messages">
    <div class="chat-message assistant">
      <div class="chat-bubble">Message</div>
    </div>
    <div class="chat-message user">
      <div class="chat-bubble">Message</div>
    </div>
  </div>
  <div class="chat-input-container">
    <input type="text" class="chat-input">
  </div>
</div>
```

### Status Messages
```html
<div class="status-message success">Success!</div>
<div class="status-message error">Error!</div>
<div class="status-message loading">Loading...</div>
<div class="status-message info">Info</div>
```

### Loading
```html
<div class="loading-spinner"></div>
```

### Pagination
```html
<div class="pagination">
  <button class="btn btn-secondary">Previous</button>
  <span class="pagination-info">Page 1 of 5</span>
  <button class="btn btn-secondary">Next</button>
</div>
```

## Customization

### When Custom CSS IS Appropriate

You may add custom CSS in a `<style>` tag or separate file for:
- Page-specific layouts not covered by components
- Unique animations or transitions
- One-off styling that doesn't fit existing components

### When Custom CSS IS NOT Appropriate

DO NOT add custom CSS for:
- Recreating brand colors, fonts, or spacing (use CSS variables from brand.css)
- Recreating button, form, or component styles (use component classes)
- Override brand guidelines (colors, typography, spacing)

### Using CSS Variables

All brand values are available as CSS custom properties:

```css
/* From brand.css - use these instead of hardcoding */
var(--font-display)      /* Inter Tight */
var(--font-body)         /* DM Sans */

var(--color-white)       /* #FFFFFF */
var(--color-black)       /* #000000 */
var(--color-gray)        /* #D9DEF0 */
var(--color-blue)        /* #86D5F4 */
var(--color-pink)        /* #FD6EF8 */
var(--color-green)       /* #8EE34D */
var(--color-orange)      /* #FFAA53 */

var(--color-border)      /* #D9DEF0 */
var(--color-primary)     /* #000000 */
var(--color-accent)      /* #86D5F4 */

var(--shadow)
var(--shadow-lg)
var(--radius)
var(--radius-lg)
var(--spacing)
var(--spacing-lg)
var(--spacing-xl)
```

Example of appropriate custom CSS:
```css
/* ✅ Good - uses CSS variables, adds unique layout */
.hero-section {
  background: linear-gradient(135deg, var(--color-white) 0%, var(--color-gray) 100%);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
}

/* ❌ Bad - recreates existing button styles */
.my-button {
  padding: 0.75rem 1.5rem;
  background: #000000;
  color: #FFFFFF;
  border-radius: 0.375rem;
}
/* Should use: <button class="btn btn-primary"> instead */
```

## Best Practices

1. **Always link to brand.css and components.css** - Don't recreate these files
2. **Use component classes** - Don't write custom CSS for standard components
3. **Reference CSS variables** - Don't hardcode brand colors or spacing
4. **Check examples** - Look at `assets/examples/` for complete page examples
5. **Check templates** - Look at `assets/templates-library/pages/` for working pages
6. **Read README** - The templates-library README has full documentation

## Quick Reference

**Standard imports:**
```html
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/brand.css">
<link rel="stylesheet" href="path/to/assets/templates-library/assets/css/components.css">
```

**Most common classes:**
- Buttons: `.btn .btn-primary .btn-secondary .btn-accent`
- Forms: `.form-group .form-label .form-input .form-textarea`
- Cards: `.card .card-header .card-title .card-body`
- Layout: `.header .container .nav-tabs`
- Feedback: `.status-message .loading-spinner .badge`

**Color palette (CSS variables):**
- Primary: `var(--color-black)`, `var(--color-white)`, `var(--color-gray)`
- Accent: `var(--color-blue)`, `var(--color-pink)`, `var(--color-green)`, `var(--color-orange)`

**Typography:**
- Headlines: Inter Tight (use `<h1>`-`<h6>` or `.font-display`)
- Body: DM Sans (default, or `.font-body`)
