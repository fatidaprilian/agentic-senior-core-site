# Design Contract: Restrained Neo-Brutal Product Sheet

Version 3.0 — Full redesign from the previous animated studio direction.

---

## 1. Design Intent

The site presents Agentic-Senior-Core as a useful open-source tool with a confident product identity. The first screen must avoid AI-startup theatrics and avoid terminal-only developer cliches. The desired impression is direct, memorable, and immediately usable: users can read the value, see the current package version, and copy the init command without hunting.

The direction uses restrained neo-brutalism: visible structure, thick borders, strong typography, flat surfaces, and deliberate color. It rejects pure brutalism's hostility and keeps modern UX clarity.

---

## 2. Research Summary

Brutalism is not obsolete, but pure web brutalism is a narrow fit. Current commercial usage is mostly **neo-brutalism**: blunt visual structure with polished usability underneath. Research sources consistently distinguish:

- Pure brutalism: raw HTML, awkward layouts, anti-polish, often hard to use.
- Neo-brutalism: thick borders, hard shadows, bold type, flat color blocks, clearer navigation, and accessible product UX.

For this project, use neo-brutalism only as a structure language. Do not use chaotic anti-design, glitch effects, scroll-jacking, or dark default styling.

---

## 3. Defaults Rejected

1. **AI startup default:** gradient hero, glass cards, vague copy. Rejected because it would make the tool look like a generic AI wrapper.
2. **Terminal/dev-tool default:** dark console as the whole site. Rejected because dark terminal-first UI reads like every CLI project and hides the product value behind aesthetics.
3. **Fully animated studio default:** text scramble, custom cursor, pinned scroll, heavy transitions. Rejected because the user wants animation as support, not the main product.

---

## 4. Anchor

**Anchor: product launch tear sheet / zine-style software card.**

Borrowed mechanics:
- Above-the-fold command block as the primary interaction.
- Exposed grid and thick borders to make content feel deliberately assembled.
- Oversized editorial headline paired with compact metadata.
- Section cards that read like product facts, not decorative feature tiles.

Not borrowed:
- Chaotic anti-design layouts.
- Pure black-and-white harshness.
- Glitch, custom cursor, or pinned horizontal scroll.

---

## 5. Creative Commitments

### Typography

- Display: **Archivo Black** for large product headlines and section titles.
- Body: **DM Sans** for readable public copy.
- Metadata and command text: **Geist Mono**.

Avoid Inter, Roboto, Arial, Space Grotesk, and previous Outfit usage.

### Color

Light mode is default.

- Light base: `#fff7df` warm paper.
- Light surface: `#ffffff`.
- Ink: `#111111`.
- Muted ink: `#5f5a4f`.
- Primary accent: `#ff6b35` safety orange for CTA and command emphasis.
- Secondary accent: `#96f550` lime for live version/status.
- Tertiary accent: `#7b61ff` violet for selected rule metadata.

Dark mode is optional through the theme toggle and must re-derive surfaces instead of simply inverting.

- Dark base: `#151515`.
- Dark surface: `#222222`.
- Dark ink: `#f7f1df`.
- Dark muted: `#c0b7a4`.

### Motion

Use only supportive motion:
- One short fade/slide on section entry.
- Command copy state feedback.
- Theme icon transition.
- No text scramble, custom cursor, pinned scroll, or continuous animations.

### Composition

- Hero is a two-column exposed grid: left is the product statement, right is the install command and live package facts.
- Capabilities appear before Quick Start because users should understand the tool before installation.
- Cards use thick borders and hard offset shadows, but remain responsive and readable.
- No dark default. Dark is a mode only.

---

## 6. Responsive Rules

- Mobile: one-column layout, full-width command block, nav links hidden, cards stack vertically.
- Tablet: two-column feature grid where space permits.
- Desktop: asymmetric hero grid and 2x2 capability grid.
- Never require horizontal scrolling.
- Maintain touch targets at 44px minimum.

---

## 7. Accessibility

- WCAG 2.2 AA is mandatory.
- Focus states use a visible orange outline.
- Command copy buttons announce state through visible text changes.
- Color is never the only meaning carrier; labels accompany status.
- Reduced-motion users receive instant state changes.

---

## 8. Post-Implementation Checks

1. If the product name were removed, the NPM version, init command, rule IDs, and ASCX references still identify the tool category.
2. The primary viewport avoids centered-everything: it uses an exposed two-column product sheet.
3. The rejected default was fully animated studio UI. The shipped direction uses restrained motion and prioritizes install clarity.
