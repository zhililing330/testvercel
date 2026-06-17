# Multi-Industry Portfolio Design

## Goal

Expand the current single-case dental website into a client-facing portfolio hosted on the same Next.js project and domain. The site should present one portfolio homepage plus three polished industry case studies:

- Dental clinic
- Law firm
- Real estate brokerage

The result should feel like a boutique web studio portfolio rather than a template marketplace.

## Approved Direction

The approved direction is a hybrid portfolio:

- The root homepage acts as the designer's or studio's front door.
- Each industry case study feels like a believable, production-quality client website.
- Each case page ends with a light "capability summary" that explains what the case demonstrates without breaking immersion.

The homepage visual tone should be modern creative-studio style: editorial composition, premium typography, restrained palette, generous whitespace, and high-confidence presentation. The case pages should each shift into their own industry-appropriate tone while still belonging to one overall system.

## Working Brand

Use a provisional portfolio brand for the homepage:

- Brand name: `Linea Studio`
- Brand role: a boutique studio that builds premium, conversion-aware websites for service businesses

This is a design and copy default only. It can be renamed later without changing the information architecture.

## Information Architecture

The portfolio should use four top-level routes:

- `/` - portfolio homepage
- `/dental` - dental clinic case study
- `/law` - law firm case study
- `/real-estate` - real estate brokerage case study

The current dental homepage should stop being the site root and become the `/dental` case page.

## Homepage Structure

The homepage should balance self-presentation and case discovery. It should not read like a resume or a generic agency landing page.

### Section order

1. Header
2. Hero
3. Featured case studies
4. Capabilities
5. Process
6. Contact / inquiry
7. Footer

### Header

- `Linea Studio` wordmark
- Primary navigation anchored to homepage sections
- A visible CTA such as `View Case Studies` or `Start a Project`

### Hero

Purpose:
- Establish taste and credibility quickly
- Explain that the portfolio covers multiple service-industry website styles
- Move the viewer toward the case studies

Content direction:
- A concise, strong value proposition
- Supporting copy focused on custom website design, responsive execution, SEO foundations, and launch readiness
- Two CTAs: one toward case studies and one toward contact

### Featured case studies

This is the core selling section on the homepage.

Each of the three case cards should include:
- Industry label
- Case brand name
- One-line positioning statement
- Preview image or visual crop
- Link into the full case page

The cards should feel substantial and editorial, not like small blog thumbnails.

### Capabilities

Summarize what the portfolio demonstrates:

- Brand-led homepage design
- Responsive front-end implementation
- SEO-friendly page structure
- Conversion-oriented contact flows
- Deployment-ready delivery

This section should be visually restrained and readable, not icon-grid filler.

### Process

Show a simple small-studio workflow:

1. Discovery
2. Direction
3. Design and build
4. Launch

This section should reinforce professionalism without turning into a long services page.

### Contact

Include a compact inquiry surface that feels real but lightweight:

- Intro copy
- Contact method summary
- A simple inquiry form or CTA block

## Case Study Strategy

Each case page should first work as a convincing standalone website for that industry. Only after the main website experience should it lightly reveal itself as a portfolio example.

Every case page should therefore include:

1. A real-website hero
2. Industry-appropriate content sections
3. A contact or consultation area
4. A small case-summary block near the bottom that explains the design and business value of the page

## Industry Case Definitions

### Dental case: `晴禾齿科`

Route:
- `/dental`

Status:
- Reuse the existing dental case as the base

Tone:
- Bright
- Calm
- Hygienic
- Family-friendly
- Reassuring

Primary content:
- Hero
- Services
- Trust/process
- Contact and appointment

Portfolio summary block should frame the case as demonstrating:
- Healthcare trust-building
- Clean conversion-friendly hierarchy
- Warm but professional branding
- Strong mobile presentation

### Law case: `衡正律师事务所`

Route:
- `/law`

Tone:
- Authoritative
- Calm
- High-trust
- Premium business
- Minimal and serious

Suggested sections:
- Hero with consultation CTA
- Practice areas
- Firm strengths / positioning
- Lawyers or leadership profiles
- Contact / consultation

Visual system:
- Dark ink, stone, warm white, restrained metallic accent
- Strong typography
- Minimal decorative treatment
- Confident spacing and framed content blocks

Portfolio summary block should frame the case as demonstrating:
- Trust-oriented service positioning
- Premium professional presentation
- Content hierarchy for legal services
- Lead capture for high-consideration clients

### Real estate case: `珑域地产`

Route:
- `/real-estate`

Tone:
- Urban
- Aspirational
- Premium residential
- Confident and polished
- Slightly more image-led than the law case

Suggested sections:
- Hero with featured property or city-living angle
- Featured listings or showcase properties
- Buyer and seller services
- Agent or advisor credibility
- Viewing / inquiry section

Visual system:
- Refined neutral base
- Rich charcoal, off-black, and muted bronze or deep blue accent
- Large property imagery
- Spacious card or listing treatment with strong scanability

Portfolio summary block should frame the case as demonstrating:
- Visual merchandising for real estate
- Conversion-friendly listing presentation
- Brand polish for local brokerage positioning
- Effective mobile-first browsing structure

## Shared Design System Rules

The site should feel unified at the portfolio level without flattening each case into the same template.

### Shared rules

- Consistent typography discipline
- Consistent spacing logic
- Consistent button quality and interaction polish
- Consistent radius strategy using restrained corners
- Consistent footer and cross-case navigation logic
- Shared SEO and metadata architecture

### Allowed variation by case

- Palette
- Hero treatment
- Section ordering details
- Media density
- Tone of copy

## Navigation Model

The portfolio needs a clear way to move between the homepage and the three cases.

### Homepage

Navigation should point to:
- About/Capabilities
- Case studies
- Process
- Contact

### Case pages

Each case page should include:
- Brand-specific nav suitable for that case page
- A subtle return path to the portfolio homepage
- A cross-link area near the bottom for the other case studies

This keeps immersion while preserving portfolio browsing.

## SEO Requirements

Each route should have its own metadata.

### Homepage SEO

Position the homepage for:
- premium website portfolio
- service business website design
- responsive business website case studies

### Case-page SEO

Each case page should have:
- unique title
- unique description
- canonical route
- Open Graph metadata
- semantic headings
- meaningful alt text

## Asset and Media Strategy

The site needs a stronger portfolio-level asset system than the current single-case implementation.

### Homepage assets

- One editorial-style hero visual or abstract studio-style composition
- Three large case preview visuals

### Case assets

- Keep existing dental assets
- Generate or source matching law and real-estate imagery
- Maintain a realistic, premium, modern feel
- Avoid stock-like filler where possible

## Component Architecture

The implementation should move from one route-level page to a small reusable system.

Expected reusable parts:

- portfolio header
- footer
- hero wrappers
- case study cards
- capability list section
- process section
- inquiry/contact block
- case-summary block

Case-specific content should live in typed data structures or focused route components rather than a single giant page file.

## Data Flow and Behavior

This remains primarily a static content site.

- No CMS is required in this phase.
- No authenticated state is required.
- Contact forms may remain UI-only unless a later phase adds delivery.
- Navigation and route transitions should be simple and reliable.

## Error Handling

The build should remain robust even if some assets are changed later.

- Image paths must be explicit and verified
- Internal route links must be checked after route changes
- Every page must still function if contact submission remains non-persistent

## Responsive Requirements

The portfolio must work cleanly across mobile, tablet, and desktop.

Key responsive goals:

- Homepage hero stays legible and premium on mobile
- Case study cards maintain visual hierarchy without collapsing into clutter
- Law and real-estate pages keep their premium tone on small screens
- Case-page CTA and contact sections remain easy to use on phones

## Testing and Verification

Implementation should be verified at both UX and code levels.

### Code verification

- `npm run lint`
- `npm run build`

### Browser verification

- Homepage on desktop and mobile
- All three case routes on desktop and mobile
- Navigation between homepage and cases
- Contact section visibility and layout
- Case-study cross-links

### Design verification

Check:
- homepage clearly feels like a creative portfolio
- each case feels like a believable client website
- tone differences between industries are visible
- the three cases still feel like work from one capable studio

## Out of Scope

This phase does not include:

- CMS integration
- live booking backends
- live real-estate inventory
- legal intake workflow automation
- multilingual support
- analytics dashboards

## Success Criteria

The work is successful when:

- `ai1234567.xyz` becomes a polished portfolio rather than a single-industry site
- the homepage clearly sells the creator's capability
- each of the three industry pages is convincing enough to show to a potential client as a real example
- the site is responsive, deployment-safe, and SEO-aware
