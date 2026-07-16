# Technical Implementation Plan (TIP)

## Portfolio Website — Haris A. Majid

**Version:** 1.0

**Framework:** Astro

**Deployment:** Cloudflare Pages

**Rendering Strategy:** Static Site Generation (SSG)

---

# 1. Technical Objectives

The technical implementation should prioritize:

* Performance
* Maintainability
* Scalability
* Accessibility
* SEO
* Simplicity

This is a static portfolio website.

Do not introduce unnecessary complexity.

---

# 2. Tech Stack

Framework

* Astro

Language

* TypeScript

Styling

* TailwindCSS

Animation

* GSAP
* ScrollTrigger
* Lenis
* Motion (Framer Motion)

Icons

* Lucide Icons

Image Optimization

* Astro Assets

Font

* Geist

Package Manager

* pnpm

Linting

* ESLint

Formatting

* Prettier

Deployment

* Cloudflare Pages

---

# 3. Architecture Principles

Architecture should follow these principles.

Simple

Composable

Reusable

Maintainable

Static First

Performance First

Accessibility First

SEO First

Do not optimize for features that do not currently exist.

---

# 4. Rendering Strategy

Use Astro Static Output.

```ts
export default defineConfig({
  output: "static"
})
```

No SSR.

No API Routes.

No Authentication.

No Database.

No Middleware.

Everything should be generated during build time.

---

# 5. Astro Islands Strategy

Astro components should remain static by default.

Only interactive components should become islands.

Interactive Components

* Navigation
* Scroll Progress
* Command Palette (future)
* Theme Toggle (future)
* Animated KPI Counter
* Interactive Timeline
* Project Carousel (if needed)

Everything else should remain server-rendered static HTML.

---

# 6. Project Structure

```
portfolio/

├── public/
│
├── src/
│
│   ├── assets/
│   │
│   ├── components/
│   │
│   │   ├── common/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── timeline/
│   │   ├── expertise/
│   │   ├── impact/
│   │   ├── projects/
│   │   ├── certificates/
│   │   ├── contact/
│   │   └── ui/
│   │
│   ├── content/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │
│   ├── styles/
│   │
│   ├── lib/
│   │
│   └── utils/
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

# 7. Component Architecture

Each section should be isolated.

Example

```
HeroSection

AboutSection

CareerTimeline

ExpertiseSection

BusinessImpact

FeaturedProjects

CertificatesSection

DownloadCV

ContactSection

Footer
```

Each section owns its own components.

Avoid giant component files.

---

# 8. Layout Architecture

Create one reusable layout.

```
MainLayout

↓

Navbar

↓

Main Content

↓

Footer
```

All metadata should live inside MainLayout.

---

# 9. Styling Strategy

TailwindCSS only.

Avoid custom CSS whenever possible.

Custom CSS is allowed only for:

* GSAP utilities
* Global resets
* Typography improvements

---

# 10. Component Naming

Use PascalCase.

Examples

HeroSection

ProjectCard

SectionTitle

TimelineItem

PrimaryButton

Container

Never use ambiguous names.

---

# 11. State Management

Avoid global state.

No Redux.

No Zustand.

No Context unless absolutely necessary.

Local state only.

---

# 12. Content Management

Store content separately from UI.

Example

```
content/

projects.ts

experience.ts

certificates.ts

skills.ts
```

UI should never contain hardcoded content.

---

# 13. Project Data Structure

Each project should contain

Title

Subtitle

Description

Business Problem

Challenge

Role

Solution

Impact

Technology

Gallery

Demo URL

GitHub URL

Order

Tags

Images

Everything should be data-driven.

---

# 14. Image Strategy

Use Astro Image.

Formats

AVIF

WebP

Responsive Images

Lazy Loading

Never use oversized images.

---

# 15. Animation Architecture

GSAP controls

* ScrollTrigger
* Section animations
* Pinning

Motion

* Small component interactions

Lenis

* Smooth scrolling

Do not mix responsibilities.

---

# 16. Performance Strategy

Target Lighthouse

Performance >95

Accessibility >95

SEO >95

Best Practices >95

Strategies

Minimal JavaScript

Code Splitting

Tree Shaking

Image Optimization

Font Optimization

Lazy Loading

Avoid unnecessary hydration.

---

# 17. Accessibility Strategy

Semantic HTML

Heading hierarchy

Keyboard navigation

ARIA labels

Reduced motion support

Visible focus

Color contrast

Every component should be accessible.

---

# 18. SEO Strategy

Generate

robots.txt

sitemap.xml

Canonical URL

OpenGraph

Twitter Card

Structured Data

Meaningful Metadata

Meaningful Titles

Meaningful Descriptions

---

# 19. Responsive Strategy

Desktop First

Tablet

Mobile

Content order should never change.

Only layout changes.

Animations should gracefully degrade.

---

# 20. Error Handling

Broken Images

Fallback Image

Broken Links

404 Page

Unexpected Content

Graceful fallback

---

# 21. Future Scalability

Architecture should allow:

Blog

Case Studies

Additional Projects

Dark Mode

Analytics

Internationalization

Without restructuring the project.

---

# 22. Deployment Strategy

Repository

GitHub

↓

Cloudflare Pages

↓

Automatic Deployment

Branch

main

Production

Pull Request

Preview Deployment

Environment Variables

Only when necessary.

---

# 23. Code Standards

Prefer composition.

Avoid duplication.

Keep components under approximately 200 lines when practical.

Functions should have a single responsibility.

Use meaningful variable names.

Avoid deeply nested logic.

---

# 24. Folder Rules

Components

UI only.

Content

Static data only.

Utils

Pure helper functions.

Lib

External integrations.

Assets

Images and icons.

---

# 25. Git Workflow

main

Production

feature/*

New Features

fix/*

Bug Fixes

refactor/*

Code Improvements

Commit messages should follow Conventional Commits.

Examples

feat:

fix:

refactor:

docs:

style:

---

# 26. Development Phases

Phase 1

Project Setup

Astro

Tailwind

Fonts

Base Layout

Navigation

---

Phase 2

Hero

About

Timeline

---

Phase 3

Expertise

Business Impact

---

Phase 4

Projects

---

Phase 5

Certificates

Download CV

Contact

---

Phase 6

Motion

Optimization

SEO

Accessibility

Testing

---

# 27. Testing Checklist

Desktop

Tablet

Mobile

Chrome

Edge

Safari

Firefox

Keyboard Navigation

Reduced Motion

Dark Mode (future)

Broken Links

Responsive Images

Performance

SEO

Accessibility

---

# 28. Definition of Done

The project is complete when:

✓ Static output

✓ Deployable to Cloudflare Pages

✓ Responsive

✓ Lighthouse >95

✓ SEO optimized

✓ Accessible

✓ Smooth animations

✓ Components reusable

✓ Clean architecture

✓ No unnecessary JavaScript

✓ No hydration unless required

---

# 29. Non-Goals

The following are explicitly out of scope for version 1:

* User Authentication
* CMS
* Admin Dashboard
* Database
* Comment System
* Search Engine
* Blog Editor
* Contact Form Backend
* User Accounts

These features can be added in future versions if required.

---

# 30. Instructions for the Coding Agent

You are acting as a Senior Frontend Architect with expertise in Astro, UI Engineering, Motion Design, and Web Performance.

Your responsibilities are:

* Produce production-ready code.
* Follow this specification strictly.
* Explain architectural decisions before implementation.
* Favor maintainability over clever solutions.
* Favor performance over unnecessary visual effects.
* Use Astro Islands only when interactivity is required.
* Keep JavaScript payloads as small as possible.
* Build reusable, modular components.
* Ensure the website feels like a premium digital product rather than a generic portfolio.

Do not introduce additional libraries unless they provide clear value.

When making implementation decisions, prioritize the following order:

1. User Experience
2. Performance
3. Accessibility
4. Maintainability
5. Visual Polish
6. Developer Convenience

The final deliverable should reflect the craftsmanship expected from a senior frontend engineer and create an experience comparable in quality to modern product websites from Apple, Linear, Stripe, or Vercel, while remaining original in design and implementation.
