# Dental Clinic Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern responsive Next.js + Tailwind homepage for 晴禾齿科.

**Architecture:** A single App Router page composes focused homepage sections from typed data arrays. Global styling defines the Tailwind v4 theme tokens, and static generated images live under `public/images`.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, `next/image`, lucide-react.

---

### Task 1: Scaffold Project

**Files:**
- Create: Next.js project files in `D:\testvercel`

- [ ] Run `npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm`.
- [ ] Verify the scaffold produces `src/app/page.tsx`, `src/app/layout.tsx`, and `src/app/globals.css`.

### Task 2: Add Visual Assets

**Files:**
- Create: `public/images/clinic-hero.png`
- Create: `public/images/service-checkup.png`
- Create: `public/images/service-whitening.png`
- Create: `public/images/service-aligner.png`
- Create: `public/images/service-implant.png`
- Create: `public/images/clinic-reception.png`
- Create: `public/images/clinic-lounge.png`

- [ ] Generate or copy project-bound dental clinic images matching the approved concept.
- [ ] Verify every image path exists and can be loaded by Next.js.

### Task 3: Implement Homepage and SEO

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] Add metadata for title, description, keywords, Open Graph, and canonical URL.
- [ ] Implement the header, hero, services, process, contact form, and footer sections.
- [ ] Use responsive Tailwind classes for mobile-first layout.
- [ ] Use `next/image` with meaningful alt text for every bitmap asset.

### Task 4: Verify

**Files:**
- No source changes expected unless verification finds issues.

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start the dev server and inspect desktop and mobile rendering in the browser.
- [ ] Compare the rendered page against the approved concept for copy, hierarchy, palette, spacing, imagery, and responsive behavior.
