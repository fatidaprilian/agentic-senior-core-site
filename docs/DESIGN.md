# Design Contract: Restrained Neo-Brutal Product Sheet

## 1. Design Intent

The site presents Agentic-Senior-Core as a useful open-source tool, not a generic AI startup page. The first viewport should make the product obvious: current package version, host support, setup command, and the core promise.

The visual direction uses restrained neo-brutalism: visible structure, thick borders, hard shadows, large display type, flat surfaces, and a small set of saturated accents. Motion supports state changes and section entry only.

## 2. Product Anchors

- Product name in the hero headline: `Agentic Senior Core`.
- Primary command: `npm install -g @ryuenn3123/agentic-senior-core`.
- Current repo context: v5.4.0 universal plugin system.
- Key surfaces: `AGENTS.md`, plugin manifests, adapters, skills, `/asc-*` commands, `ascx`, and `asc mcp`.
- Source docs: `docs/agent-portability.md` and `docs/architecture.md` in the source repo.

## 3. Typography

- Display: Archivo Black.
- Body: DM Sans.
- Metadata and commands: Geist Mono.
- Letter spacing stays at `0` for readable, stable headings.

## 4. Color

Light mode is default.

- Base: `#f7f8fb`
- Surface: `#ffffff`
- Muted surface: `#e7edf3`
- Ink: `#111111`
- Muted ink: `#566170`
- Primary accent: `#ff6b35`
- Live accent: `#96f550`
- Secondary accent: `#7b61ff`

Dark mode is opt-in through the theme toggle.

- Base: `#151515`
- Surface: `#222222`
- Muted surface: `#2f2f2f`
- Ink: `#f7f1df`
- Muted ink: `#c0b7a4`

## 5. Motion

Use supportive motion only:

- Short fade/slide section entry.
- Copy button state feedback.
- Theme icon transition.
- Terminal sample line reveal.

Avoid continuous animation, text scramble, custom cursor, scroll-jacking, and large decorative motion.

## 6. Composition

- Hero uses a two-column product sheet: product statement on the left, install command and package facts on the right.
- Capabilities precede installation so users understand the surface before setup.
- CLI sample shows `asc status` and `ascx`, not imaginary boot logs.
- Documentation section links directly to source repo docs and summarizes current rule/host/utility groups.

## 7. Responsive Rules

- Mobile: one-column layout, full-width command blocks, nav links hidden, stacked cards.
- Tablet: cards reflow through responsive grid tracks.
- Desktop: exposed 12-column grid.
- No horizontal scrolling.
- Touch targets stay at least 44px.

## 8. Accessibility

- WCAG 2.2 AA is mandatory.
- Focus states use a visible accent outline.
- Copy buttons expose visible copied state.
- Color is never the only status carrier.
- Reduced-motion users receive near-instant transitions.
