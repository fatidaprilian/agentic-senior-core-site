# Design Intent and Product Personality

The visual identity is anchored on a **Museum Custody Ledger and Conservation Inspection Report**. We treat rule packs and instructions not as generic marketing bullet points, but as audited archival artifacts inside a strict custody chain. Every line of code, config file, or validation rule is a conservation item: recorded, analyzed, and stamped with wax seals of provenance.

Confidence comes from absolute accountability, ink records, and wax seals, rather than polished SaaS gradient blobs.

# Audience and Use-Context Signals

Technical evaluators (Principal Engineers and AI operators) arrive seeking an immediate install decision. They need proof that the rules enforce tight discipline across their AI tools. The copy and structural elements must convey absolute authority, archival permanence, and structured rigor.

# Visual Direction and Distinctive Moves

- **Archival Manila Sleeve Grid**: A primary structural grid mimicking a folded, heavy-stock manila ledger sleeve.
- **Wax Custody Seals**: Interactive status stamps (drops with inertia tilt and settle) encoding validation results.
- **Accession Receipt Runbook**: An installation guide styled as an official print receipt with accession numbers and ink stamps.
- **Provenance Annotation Margins**: Margin annotation cards displaying specific rule logs aligned with the main narrative sections.

## Motion/Palette Decision
- **Motion**: Tactile sliding-drawers on folder reveal; heavy dropping wax stamps that settle with rotational tilt.
- **Palette**: Manila paper base (`oklch(0.95 0.02 85)`), graphite writing ink (`oklch(22% 0.01 240)`), vermillion wax seal (`oklch(58% 0.18 35)`), and conservation green (`oklch(60% 0.14 145)`). No gradients or neon glowing elements.

# Color, Typography, Spacing, and Density Decisions

- **Color**:
  - Warm Manila Stock (`--base-stock`): `oklch(0.95 0.02 85)`
  - Graphite Archival Ink (`--ink-primary`): `oklch(0.22 0.01 240)`
  - Vermillion Wax Stamp (`--stamp-vermillion`): `oklch(0.58 0.18 35)`
  - Conservation Green (`--stamp-conservation`): `oklch(0.60 0.14 145)`
  - Amber Caution Seal (`--stamp-caution`): `oklch(0.75 0.15 75)`
  - Neutral Archival Folder Border: `oklch(0.85 0.01 90)`
  - *Gamut Safeguard (OKLCH Compatibility):* Although OKLCH is Baseline supported in all 2023+ browsers, we will define native RGB/Hex fallbacks directly before OKLCH custom properties and use `@supports` bounds to insulate older renderers from gamut-mapping clipping faults.
- **Typography**:
  - *Authority Display*: Playfair Display (Serif) or EB Garamond. Gives a premium classic catalog feel.
  - *Evidence Logs*: Courier Prime (Slab typewriter) for logs, checklist evidence, and status lines.
  - *Accession Codes*: Technical Mono (JetBrains Mono) for CLI commands, variables, and code paths.
  - *Fluid Scaling Sizing:* To satisfy WCAG 2.2 AA manual text zoom accessibility, we strictly avoid plain viewport-only sizing (e.g. `2.5vw`). Sizing formulas will mix relative `rem` units inside preferred limits: e.g. `clamp(1rem, 2.5vw + 1rem, 2.5rem)`.
- **Spacing**:
  - 4px grid base with 8/12/16/24/32/48/64 multiples. Dense ledger rows nested within highly spacious, generous folder margins.
- **Density**:
  - Variable density. Generous negative margins in sections to isolate the manila folder silhouette, highly compact lines within ledger rows.

# Token Architecture and Alias Strategy

Semantic tokens strictly alias back to our Museum Custody anchor:
- `color-surface-folder-base` -> `--base-stock`
- `color-text-archival-ink` -> `--ink-primary`
- `color-border-folder-crease` -> `--neutral-border`
- `color-stamp-approved` -> `--stamp-conservation`
- `color-stamp-failed` -> `--stamp-vermillion`

No raw hex codes or physical-direction layout rules allowed.

# Responsive Recomposition Plan

| Viewport | Folder Recomposition | Ledger Layout | Accession CTA Placement |
| --- | --- | --- | --- |
| **Mobile** | Single-page folder card, tabs stack vertically at top. | Single-column records with margin slips moved under parent blocks. | Registration Receipt anchored at top fold. |
| **Tablet** | Folded layout showing tab indices on left edge. | Two-column grid, margin slips compressed. | Receipt block remains floating on bottom fold. |
| **Desktop** | Expansive Manila sleeve with full index tab lanes on left. | Wide ledger rows with inline margin provenance annotations on right. | Large accession command slab placed in the primary focus fold. |

# Motion, Interaction, and Feedback Rules

- **Accession Slip Reveal**: On page load, the manila sleeve slides up (`y: 40px` to `0px` with a custom cubic-bezier `[0.16, 1, 0.3, 1]` over `450ms`).
- **Wax Seal drop + settle**: Wax stamps scale down from `1.15` to `1.0` with a rotational swing `[-3deg to 0deg]` mimicking a heavy imprint hammer drop with `framer-motion` spring dynamics.
- **Reduced Motion**: Swap scale/rotate transformations with clean opacity crossfades.

# Component Language, States, and Morphology

- **ManilaSleeve (Hero)**: A framed folder block with tab indicators (`Accession 24.05`).
- **AccessionReceipt (Installation)**: An overlay container mimicking an accession ledger entry.
- **ProvenanceLedger (Features)**: Alternating rows listing rule clauses with verification checkbox inputs.
- **WaxSeal (Verdict Stamps)**: Round/rectangular textured stamp badges overlaying text blocks.
- **EvidencePlayback (Terminal)**: A dark-slate index tray housing typewriter terminal playback logs.

# Source Boundaries and Context Hygiene

- **Continuity Ledger**: `Flight progress strip rack` and `Galley proof sheet with margin corrections` are blocklisted from visual styles to prevent design repetition.
- **Authority Floor**: Stricter governance files in `.agent-context/` outrank standard Vite/React project defaults.

# Accessibility Non-Negotiables

- **Contrast Floor**: All text-on-background pairs (e.g. Graphite text on Manila base, Vermillion stamp overlay) satisfy WCAG 2.2 AA (minimum 4.5:1 ratio).
- **Interactive Targets**: Custom styled tabs and command buttons provide a minimum touch size of `44px` and custom focus-visible borders.
- **State Semantics**: Non-visual screenreaders receive `aria-live` status announcements when the terminal playback changes verification states.

# Anti-Patterns to Avoid

- No floating blobs or glowing backgrounds.
- No SaaS grid lines, neon code highlights, or centered hero templates.
- No placeholder copy, testing labels, or default Inter font styles.
- No flat components lacking spatial hierarchy or wax seal depth.

# Implementation Notes for Future UI Tasks

Ensure that any secondary interface components (e.g. secondary links, inline code snippets) utilize custom Courier Prime and EB Garamond styling. Never default to browser-safe sans-serif without explicit brand aliases.