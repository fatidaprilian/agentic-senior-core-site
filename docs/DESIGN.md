# Design Contract: The Authored Signal

Version 2.0 — Full redesign from "Friendly Companion Workspace" baseline.

---

## 1. Design Intent

The product is a production-grade rules engine for AI coding agents. The site must read as the work of a world-class design team who happen to use this tool themselves. First impression target: "this was built by the repo it documents — I want to try it."

The previous direction (soft bento cards, breathing companion character, Figma-UI chrome, warm ivory + Outfit font) was rejected because it signaled approachable consumer tool rather than authoritative engineering governance. The new direction is: playful confidence and editorial boldness — a studio-grade landing page that happens to be for a developer tool.

**Anti-repeat ledger (do not reuse in future iterations):**
- Friendly companion / breathing character aesthetic
- Figma-inspired coordinate HUD decoration
- Centered bento card grid layout
- Soft rounded pill buttons as primary CTA
- Warm ivory + Figma blue (#18a0fb) palette
- Outfit typeface

---

## 2. Design Anchor

**Anchor: Locomotive Studio's editorial motion approach** — specifically the mechanics of text scramble resolve on entry, per-word blur reveal on scroll, and typography as architectural element rather than label.

What is borrowed: text scramble as brand mechanic (the site demonstrates the tool's core behavior: noise → signal), oversized editorial type that IS the layout, cursor-aware magnetic interactions discovered not announced.

What is NOT borrowed: Locomotive's monochromatic film-noir palette, their dense project thumbnail grids, or any surface styling.

---

## 3. Creative Commitments

### Typography

- **Display / Hero:** Clash Display (400–700 weight range, geometric grotesque with character). Used for all section headlines and the hero product name. Sizes: `clamp(4.5rem, 11vw, 10rem)` for hero, `clamp(2.2rem, 4vw, 3.4rem)` for section headings.
- **Body:** DM Sans (300–600, optical size 9–40). Clean, airy, technically legible.
- **Metadata / Code / Labels:** Geist Mono (300–700). Used for rule IDs, terminal output, badges, stats labels, and all monospace contexts.

Avoid: Outfit, Inter, Space Grotesk, system fonts.

### Color and Palette

Light mode (default):
- Base canvas: `#f5f3ee` — warm bone, not pure white.
- Surface: `#edeae3` / card: `#ffffff`
- Text primary: `#0f0f0f`, muted: `#7a7870`
- Accent (lime): `#8dc63f` — muted lime that reads as "active" against warm bone without being aggressive.
- Violet: `#7c6fff` — secondary accent for rule badges, alternate states.

Dark mode (opt-in via toggle):
- Base: `#0a0a0f` — anthracite near-black with blue tint. Not pure black.
- Surface: `#111118` / card: `#16161f`
- Text primary: `#f2f0e8` — warm off-white.
- Accent (lime): `#c8f542` — electric lime, phosphor-level brightness against anthracite.
- Violet: `#9d8fff`

**One color behavior that does not transfer to another category:** The electric lime `#c8f542` used as a card border on hover in dark mode reads exactly like an active circuit trace or oscilloscope signal. On a consumer app this would read as a warning. Here it reads as "system active and verified."

### Motion and Interaction

- **Signature motion: Text scramble resolve.** Hero product name scrambles random characters into final text over 1.2s. This IS the tool's behavior demonstrated: noise → clean signal. Not decorative, mechanically meaningful.
- **Per-word blur reveal on scroll:** Section headlines reveal word-by-word with `blur(8px) → blur(0)` stagger as user scrolls. Directional, purposeful.
- **Cursor-aware magnetic buttons:** Primary CTAs pull toward cursor with `useSpring` (stiffness 300, damping 20, max 8px offset). Discovered, not announced.
- **Custom cursor:** Dot + ring (mix-blend-mode: difference). Ring expands on hover targets. Section-color-aware in feature cards.
- **Horizontal pinned scroll for features:** Feature cards reveal via scroll-linked translateX rather than page-scroll card stacks. One theatrical mechanic, earned by the content structure.
- No: breathing/pulse animations, elastic bounce, floating elements, auto-playing carousels.

### Composition

- **Left-weighted asymmetric hero:** 60/40 split. Giant type on left, Bootstrap Receipt panel on right. Rejects centered-everything default.
- **The "gokil" moment:** The hero's right panel renders a live Bootstrap Receipt — the exact CLI output format mandated by AGENTS.md. Developers who know the tool recognize it immediately. Those who don't are intrigued enough to scroll.
- **Features as horizontal pinned scroll:** 4 feature cards presented as a horizontal track that advances on scroll — feels like turning pages in a spec document.
- **No decorative illustrations.** Depth via plane separation (surface layers), typography weight contrast, and opacity. No shadows for elevation.

---

## 4. Token Architecture

```
Light:  --bg-base #f5f3ee / --bg-surface #edeae3 / --bg-surface-secondary #ffffff / --bg-inset #e4e1d9
Dark:   --bg-base #0a0a0f / --bg-surface #111118 / --bg-surface-secondary #16161f / --bg-inset #1c1c27

Accent light:  --accent #8dc63f  / --accent-rgb: 141,198,63
Accent dark:   --accent #c8f542  / --accent-rgb: 200,245,66

Violet light:  --violet #7c6fff
Violet dark:   --violet #9d8fff

--font-display: 'Clash Display'
--font-body:    'DM Sans'
--font-mono:    'Geist Mono'
```

---

## 5. Responsive Architecture

- **Mobile (< 640px):** Hero stacks vertically, receipt panel hidden. Features fall back to vertical card stack (no pinned scroll). Navigation collapses to brand + icons only.
- **Tablet (640–768px):** Hero two columns with reduced padding. Features vertical stack.
- **Desktop (> 768px):** Full two-column hero, pinned horizontal scroll for features, two-column documentation layout.

Dragging physics disabled on touch. Custom cursor disabled on touch (`navigator.maxTouchPoints > 0`).

---

## 6. Accessibility

- WCAG 2.2 AA hard floor for all text/background contrast pairs (both light and dark modes).
- `prefers-reduced-motion`: all animations disabled via CSS `animation-duration: 0.01ms` override. Scramble effect renders final text immediately.
- Focus-visible: `2px solid var(--accent)` outline with 3px offset on all interactive elements.
- All interactive elements have aria-labels. Custom cursor is `pointer-events: none`, `aria-hidden`.

---

## 7. Post-Implementation Checks

1. If the product name were removed, would a designer identify this was built for an AI rules engine? **Yes** — the Bootstrap Receipt panel, rule ID badges (ARCH-001, PERF-001), and monospace metadata throughout are specific to this product's governance contract vocabulary.
2. Does the primary viewport avoid centered-everything? **Yes** — the hero is left-weighted 60/40 asymmetric.
3. The one default most tempting to use: **AI startup gradient hero** (purple-to-pink + glass cards). Rejected with product-specific reason: gradient signals "vibe," this product's value is precision and enforcement — the Bootstrap Receipt demonstrates precision, gradients would undermine that immediately.
