# Design System: Verata Ventures

This is the implementation contract for the Verata Ventures brand. Read `BRAND.md`
for strategy, voice, and full usage guidance. Consume `brand/tokens.json` or
`brand/tokens.css` for exact values.

## Product context

- **What this is:** A founder-led venture studio combining executive judgment with AI-enabled execution.
- **Who it serves:** Corporate partners, venture investors, founders, and individual operators.
- **Project types:** Marketing website, presentations, decision memos, proposals, reports, outreach, and campaigns.
- **Memorable idea:** Judgment, accelerated.

## Aesthetic direction

- **System:** Live Mineral / Humanist Intelligence.
- **Aesthetic:** Executive editorial structure with visible operating metadata.
- **Decoration:** Intentional and restrained. Type, rules, the V trajectory, and color signals do the work.
- **Materiality:** Flat digital surfaces, no default texture, no ornamental gradients.
- **Default mode:** Light.
- **High-energy mode:** Saturated dark.

## Typography

- **Display and public editorial:** Newsreader 400/500 with optical sizing.
- **Body, UI, and operations:** Instrument Sans 400/500/600/700.
- **Metadata and evidence:** Geist Mono 400/500/600.
- **Operational-document rule:** Memos use Instrument Sans for titles, values, headings, and running copy. Geist Mono is limited to labels, identifiers, dates, and status.
- **Prohibition:** Never set running copy in Geist Mono. Never use Newsreader for forms, tables, navigation, or memo body copy.
- **Loading:** Prefer `next/font/google` for Newsreader, Instrument Sans, and Geist Mono on Next.js. Self-host the same OFL font files for documents and offline templates.

### Web scale

- Display: `clamp(3.5rem, 7vw, 6rem)` / 0.96 / `-0.045em`.
- H1: `clamp(2.75rem, 5vw, 4.5rem)` / 1.00 / `-0.035em`.
- H2: `clamp(2rem, 3.5vw, 3rem)` / 1.06 / `-0.025em`.
- H3: `clamp(1.5rem, 2.4vw, 2rem)` / 1.14 / `-0.018em`.
- Lead: `1.25rem` / 1.50.
- Body: `1rem` / 1.62.
- Small: `0.875rem` / 1.50.
- Label: `0.6875rem` / 1.40 / `0.09em`, uppercase.

## Color

### Light mode

- Background: `#F3F7F6`.
- Surface: `#FCFEFD`.
- Text: `#071B18`.
- Secondary text: `#314A45`.
- Muted text: `#5B706B`.
- Border: `#C7D2CF`.
- Accessible teal text: `#007A73`.
- Visual teal: `#00877E`.
- Strong teal: `#006C65`.
- Signal: `#C7F23A`.
- Decision: `#FF5A46`.

### Dark mode

- Background: `#03231F`.
- Surface: `#07342F`.
- Raised surface: `#0A4039`.
- Text: `#F4FAF8`.
- Secondary text: `#B5C8C4`.
- Border: `#35645D`.
- Accent: `#15B8AA`.
- Signal: `#C7F23A`.
- Decision: `#FF5A46`.

### Usage

- Light compositions: 80 to 90 percent neutrals, 5 to 8 percent teal, less than 2 percent citron plus coral.
- Dark compositions may carry more teal, but citron and coral remain semantic signals.
- Do not use `#00877E`, `#C7F23A`, or `#FF5A46` as small text on the light background.
- Never rely on color alone for status.

## Spacing

- **Base:** 4px.
- **Scale:** 2, 4, 8, 16, 24, 32, 48, 64, 96, 128px.
- **Density:** Spacious for marketing and presentation openers; comfortable for documents; compact only for metadata.

## Layout

- **Approach:** Hybrid editorial and grid-disciplined.
- **Desktop grid:** 12 columns, 24px gutters, 1240px max width.
- **Tablet grid:** 8 columns, 20px gutters.
- **Mobile grid:** 4 columns, 16px gutters.
- **Reading width:** 720px maximum.
- **Corners:** Square by default; 2px for controls; pill only for compact statuses.
- **Borders:** 1px hairlines; 2px only for emphasis.
- **Depth:** No default box shadows. Use borders, spacing, and surface contrast.

## Logo

- Use `brand/assets/verata-mark-light.svg` on light backgrounds.
- Use `brand/assets/verata-mark-dark.svg` for formal dark applications.
- Use `brand/assets/verata-mark-expressive.svg` only on dark high-energy applications.
- Preserve three parallel outgoing strokes with equal angles and increasing lengths.
- End all four upper terminals flat on one shared horizontal line.
- Preserve the shared two-color miter at the lower vertex; never stack independently capped strokes.
- Maintain clear space equal to half the mark width.
- Minimum mark size: 24px digital or 8mm print.
- Never fan, round, rotate, outline, shadow, glow, or gradient the mark.
- Treat `brand/assets/` as the canonical source and `public/brand/` as byte-identical website copies.

## Graphic language

- Thin horizontal rules organize information.
- Diagonal trajectory lines may echo the V once per composition.
- Mineral means primary or active.
- Citron means positive signal or recommended.
- Coral means decision, escalation, or outgoing action.
- Icons use simple 1.5px linework with square or butt terminals.

## Motion

- Micro: 100ms.
- Short: 160ms.
- Standard: 280ms.
- Reveal: 480ms maximum.
- Enter: `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Move: `cubic-bezier(0.65, 0, 0.35, 1)`.
- The mark may animate one incoming stroke into three outgoing strokes once. Never loop it.
- Honor `prefers-reduced-motion`.

## Content and voice

- Lead with the conclusion, value, or decision.
- Use concrete nouns, active verbs, owners, dates, and status.
- Do not imply fake scale.
- Use “I” for founder-authored notes and “Verata Ventures” for the company.
- Avoid hype, AI clichés, unsupported superlatives, and corporate filler.

## Artifact rules

- **Website:** light default, dark signal sections, editorial headlines, sans body.
- **Deck:** light content slides, dark dividers, one dominant statement per slide.
- **Memo:** all readable content in Instrument Sans; Geist Mono metadata only.
- **Proposal/report:** Newsreader cover and section openers; Instrument Sans body.
- **Outreach:** concise plain text or minimal HTML; no logo banner in every email.
- **Campaign:** dark mode preferred; expressive mark allowed.

## Anti-patterns

No purple gradients, centered-everything layouts, uniform rounded cards, generic stock
photography, floating-device mockups, neon AI imagery, serif memo copy, monospaced
paragraphs, multicolor marks on light backgrounds, or unsupported claims.

## Sources

- Human-facing guide: `BRAND.md`.
- Machine-readable tokens: `brand/tokens.json`.
- CSS variables: `brand/tokens.css`.
- AI prompt contract: `brand/ai-brief.md`.
- Visual specimen: `brand/brand-guide.html`.
