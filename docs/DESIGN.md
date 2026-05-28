# System Design Specifications: Friendly Companion Workspace

This document details the visual identity, styling tokens, layout principles, and interactive parameters for the website, establishing a highly approachable, warm, and playful workspace.

---

## 1. Design Intent and Product Personality
The product is a high-performance rules engine designed to organize, validate, and optimize AI coding workflows. To present this to modern builders, developers, and the public, we visualize the tool as a **playful, soft, and alive creative companion workspace** (reminiscent of the organic layouts and friendly character-driven interfaces seen on premium websites like family.co).

Rather than using complex console structures or industrial dials, we embrace soft rounded shapes, friendly off-whites, and a cute breathing AI companion character whose expressions react dynamically to rules adjustments. Copywriting is crafted to be exceptionally warm, clear, and direct, explaining complex benefits in plain public language.

---

## 2. Audience and Use-Context Signals
*   **Audience**: Modern software builders, tech leads, and general technology enthusiasts seeking clean coding workflows.
*   **Context**: Quick evaluation of rule structures, copy-pasting initialization terminal guides, and testing interactive rule badges in an active sandbox.
*   **Tone**: Soft, cozy, playful, alive, and extremely friendly.

---

## 3. Visual Direction and Distinctive Moves
*   **Breathing AI Companion**: An animated, soft-blue vector character with cute eyes and expressive faces that breathes gently and reacts dynamically to actions.
*   **Soft Rounded Bento Cards**: All cards feature ultra-soft rounded corners (`border-radius: 24px` to `32px`), gentle shadows, and warm margins, creating a highly organic and premium layout.
*   **Snapping Rule Badges**: Rule configurations are styled as colorful, rounded badges (e.g. "Clean Code" in purple, "Safe Security" in orange, "Fast Queries" in green) that users drag and snap onto the AI companion.
*   **Dynamic Red Spacing Guides**: Dragging rule badges draws organic red caliper guides showing layout spacing offsets in real-time.
*   **Active Color Swatches**: Interactive, rounded swatch dots in the header that users can click to dynamically update the active accent theme across the site.

---

## 4. Color, Typography, Spacing, and Density Decisions
*   **Workspace Palette**: Highly curated, soft organic accents against a warm ivory backdrop.
    *   Light Mode: Warm off-white chassis base (`#faf9f6`), chalk white cards (`#ffffff`), active blue highlights (`#18a0fb`), guideline coral (`#f24e1e`), and leafy green (`#0acf83`).
    *   Dark Mode: Elegant carbon slate enclosure (`#09090b`) with soft glowing accents.
*   **Cozy Typography**: Cozy displays sans (**Outfit** at weight 800 with tight `-0.015em` tracking) for modern, soft headers, paired with comfortable reading copy (**Inter**).
*   **Spacious Gutters**: Extremely generous paddings and negative spaces to convey structural clarity.

---

## 5. Token Architecture and Alias Strategy
*   `--bg-base`: Core canvas backdrop (Warm off-white in Light Mode; Carbon slate in Dark Mode).
*   `--bg-surface-secondary`: Soft component card (Pristine white; Zinc dark matte).
*   `--text-primary`: Primary labels copy (Pitch charcoal; Off-white zinc).
*   `--text-muted`: Secondary technical metadata and specs tags.
*   `--border-fine`: Fine layout outline (Soft grey; Zinc divider).
*   `--border-active`: Active selection bounds (Figma active blue; Bright cyan).
*   `--color-accent`: Main action highlight.

---

## 6. Responsive Recomposition Plan
*   **Mobile Viewports**: Space-saving reflow stacks cards vertically into a single column. Dragging physics and particle vectors are disabled to save rendering power, presenting clean static spec selectors with active touch targets (minimum 44px bounds).
*   **Tablet Viewports**: Layout structures group into clean two-column grid cells.
*   **Desktop Viewports**: Expansive horizontal specs board showcasing drag-and-snap canvases, dynamic spacing indicators, active color swatches, and property inspector widgets.

---

## 7. Motion, Interaction, and Feedback Rules
*   **Breathing Animation**: The AI character expands and contracts smoothly using an infinite keyframe loop (`scale: [1, 1.03, 1]`) to feel alive.
*   **Reactive Faces**: Morphing facial expressions transition smoothly in React state based on whether rule badges are active or snapped.
*   **Elastic Snapping**: Rules badges slide with crisp spring damping and snap instantly on close contact.
*   **Theme Swatches**: Clicking active color swatches changes theme accent values immediately.

---

## 8. Component Language, States, and Morphology
*   **Draggable Badges**: Soft-pill rule layers with rounded corners.
*   **Breathing Companion Slot**: Dotted target frame hosting the animated AI character.
*   **Sidebar widgets**: Properties inspectors styled like design system sidebars.

---

## 9. Source Boundaries and Context Hygiene
All design tokens and custom variables are maintained inside the centralized stylesheet, avoiding ad-hoc overrides in favor of reusable class names.

---

## 10. Accessibility Non-Negotiables
*   **Rigid Contrast**: Satisfies absolute WCAG 2.2 AA contrast ratios under both themes.
*   **Tactile Focus**: Focused components show high-contrast blue bounding frames instantly.
*   **Reduced-Motion Override**: Under user preferences for reduced motion, dragging physics and breathing loops are disabled, presenting static smiling characters instantly.

---

## 11. Anti-Patterns to Avoid
*   **No Sharp Blueprints**: Banish dark console telemetry grids and coordinate sweep lines; the canvas must stay clean and visually approachable.
*   **No Technical Jargon in Public Copy**: Remove abbreviations like `CH_01_FEAT` or `LAYOUT_SPEC_CALIBRATED` in favor of readable public words.
*   **No Interchangeable Cards**: Create depth, organic characters, and visual hierarchy.