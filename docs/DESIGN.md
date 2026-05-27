# Agentic-Senior-Core Site Design: Minimalist Launch Canvas (Notion & Apple Hybrid)

This document describes the design language, token architecture, and implementation rationale for the Agentic-Senior-Core site, following a **Minimalist Launch Canvas** concept (inspired by the clean modular structure of Notion's landing page and the bold typography and sleek dual-mode spaces of Apple's product sites).

---

## 1. Design Intent and Product Personality
The Agentic Senior Core is a powerful developer tool for strict AI instruction oversight. To match the precision and premium quality of the code, the public website is structured as a **stark, high-impact product launch canvas**. 

We reject over-decorated layouts, cyberpunk consoles, and slow archival poetry. The site uses massive, confident headlines, clean flat outline cards (bento grids), highly functional terminal blocks, and snappy interactive feedback, establishing total authority through clarity and extreme visual polish.

---

## 2. Audience and Use-Context Signals
*   **Audience**: Engineering leaders, principal builders, and senior developers looking for high-performance compliance tools.
*   **Context**: Quick evaluation of rule structures, instant workspace bootstrapping, and code playback review.
*   **Tone**: Confident, sleek, precise, hyper-modern, and authoritative.

---

## 3. Visual Direction and Distinctive Moves
*   **Layout / Composition**: A high-impact centered and bento-grid hybrid layout:
    *   **Hero Section**: Oversized bold title headlines, clean subheads, and centered quick-action buttons framing an embedded terminal console readout.
    *   **Feature Bento Grid**: A modern, multi-size card grid separating features into clean, flat outline boxes with subtle rounded corners.
*   **Backgrounds (The Launch Palette)**:
    *   **Light Mode (Titanium White)**: Pure pristine white background (`#ffffff`) with ultra-fine light grey dividers (`#e5e5e7`).
    *   **Dark Mode (Space Black)**: Absolute pitch black (`#000000`) with dark gunmetal grid borders (`#26262a`).
*   **Typography (Bold Geometric Sans-Serif)**:
    *   Display headings use **Inter** at massive sizes and ultra-bold weights (`700`/`800`) with tight line-heights (`1.1`) and tight letter-spacing (`-0.02em`), styled like Apple's launch headlines.
    *   Body text uses **Inter** at high-performance reading weights (`400`/`500`).
    *   Terminal and annotations use **JetBrains Mono** for absolute technical clarity.
*   **Interactive Accents**:
    *   **Apple/Notion Blue** (`#0071e3`) represents primary targets, active toggles, and key accents.
    *   Fine outline borders and solid fill hover scales.

---

## 4. Color, Typography, Spacing, and Density Decisions
*   **Typography Scale**: A dynamic `1.414` (augmented fourth) fluid scale, ensuring oversized headlines command immediate attention while body copy remains comfortably readable.
*   **Density**: Spacious and high-impact. Negative space acts as a framing device, projecting confidence and luxury through restraint.
*   **Spacing / Boundaries**: Bounded by razor-thin `1px solid var(--border-fine)` light grey/gunmetal lines. No heavy physical drop shadows or rounded plastic panels.

---

## 5. Token Architecture and Alias Strategy
*   `--bg-base`: Core canvas background (Pure white in Light, Space black in Dark).
*   `--bg-surface-secondary`: Secondary block layers (Warm grey in Light, Gunmetal-grey in Dark).
*   `--text-primary`: Primary text (Apple black in Light, Pale silver in Dark).
*   `--text-muted`: Captions and secondary notes (Muted slate-grey in Light, Faded grey in Dark).
*   `--color-accent`: High-energy action triggers (Vivid launch blue).
*   `--border-fine`: Fine wireframe grid boundaries (`#e5e5e7` in Light, `#26262a` in Dark).

---

## 6. Responsive Recomposition Plan
*   **Mobile**: Display headlines scale down elegantly using fluid `clamp()` utilities. Bento boxes stack cleanly into a single vertical column, compressing spacing margins to preserve readability.
*   **Tablet & Desktop**: Fluid multi-column bento grids that reorganize surfaces based on screen size, maximizing spatial utility and reading comfort.

---

## 7. Motion, Interaction, and Feedback Rules
*   **Hover States**: Sleek, snappy scale-up spring effects on action buttons and bento cards (scale from `1` to `1.02` using a fast `0.2s` ease-out spring), providing instant physical feedback.
*   **Section reveals**: Snappy, clean vertical fade reveals (`350ms`) as elements enter the viewport.
*   **Immediate States**: Toggle tabs and dark-mode light-mode changes trigger instantaneously without fading lag, maintaining a highly responsive software experience.

---

## 8. Component Language, States, and Morphology
*   **Bento Cards**: Flat outline boxes bordered with ultra-fine `1px` lines, featuring subtle hover expansions and rounded margins.
*   **Launch Buttons**: Crisp rounded rectangular tags (`border-radius: 6px`) with high-contrast color fills and bold tracked text.
*   **Terminal Playback**: A sleek, dark code frame embedded centered in the hero section, featuring safety status markers and dynamic line-printing animations.

---

## 9. Accessibility Non-Negotiables
*   **Contrast**: Every interactive element satisfies a **WCAG 2.2 AA** contrast floor (>= 4.5:1 for body, >= 3:1 for text-on-color).
*   **Focus Outlines**: Standard offset high-contrast outlines that appear immediately on tab navigation.
*   **Assistive Labels**: Fully labeled ARIA structures for sidebars, collapse toggles, and state panels.

---

## 10. Anti-Patterns to Avoid
*   **No Apple OS Glassmorphism**: Banish blurred backdrop filters, floating neon spheres, and heavy drop shadows.
*   **No Symmetrical Center-Poetry**: Headings are centered for impact, but all paragraph reading content is left-aligned for optimal scanning comfort.
*   **No Cyberpunk Consoles**: Keep terminal commands framed inside clean grey code tags, rejecting hyper-saturated terminal screens.