# Dental Clinic Website Design

## Goal

Build a modern responsive Chinese dental clinic website for "晴禾齿科" using Next.js and Tailwind.

## Approved Direction

The approved concept uses a clean premium healthcare style: warm white backgrounds, deep teal and soft mint accents, sky-blue supporting surfaces, crisp typography, real clinic imagery, generous spacing, and restrained 8px-radius cards.

## Page Structure

- Header with brand, navigation, and appointment CTA.
- Hero section with the headline "让每一次微笑，都更安心。", supporting copy, primary booking CTA, secondary services CTA, and dental clinic imagery.
- Service introduction with four services: 口腔检查, 牙齿美白, 隐形矫正, 种植修复.
- Trust/process band showing the consultation-to-follow-up workflow.
- Contact section with phone, address, hours, waiting-room image, and appointment form.
- Footer with quick navigation, service links, and contact details.

## SEO Requirements

- Use Next.js metadata for title, description, keywords, Open Graph, and canonical metadata.
- Use semantic headings and meaningful section IDs.
- Add descriptive image alt text.

## Implementation Notes

- Use App Router, TypeScript, Tailwind, and `next/image`.
- Keep the page mostly server-rendered; no client state is required for the static appointment form.
- Use code-native Chinese text and form controls.
- Keep responsive behavior polished across mobile, tablet, and desktop.
