# Agentic-Senior-Core Site Design

This document describes the design language, token architecture, and implementation rationale for the Agentic-Senior-Core site, following a **Fine Art Editorial & Gallery** concept (inspired by luxury/artistic sites like Dervish Ebru Art). The primary aesthetic focuses on classic, highly spaced serif typography, deep fluid backgrounds, and extremely fine gold/copper accents.

## 1. Design Intent and Product Personality
The product enforces strict instruction compliance, but its presentation here is elevated to an art form. It treats strict rules not as a machine constraint, but as a carefully curated *Masterpiece*. We completely reject "tech SaaS" or "Apple OS" glassmorphism looks in favor of a timeless, archival gallery presentation.

## 2. Audience and Use-Context Signals
*   **Audience**: Engineering leads who appreciate extreme craftsmanship and timeless design.
*   **Context**: A moment of calm, focused reading and contemplation before installation.
*   **Tone**: Luxury, timeless, authoritative, and deeply artistic.

## 3. Visual Direction and Distinctive Moves
*   **Backgrounds**: 
    *   **Light Mode**: Warm ivory / parchment paper feeling, representing an ancient art catalog.
    *   **Dark Mode**: Deep, dark, immersive tones (Dark Forest Green/Rich Black) mimicking a fluid canvas or marbling art.
*   **Text/Accents**:
    *   **Light Mode**: Deep copper or dark brown-gold.
    *   **Dark Mode**: Pale Gold/Champagne (`#d4af37` or similar).
*   **Signature Motion**: Extremely slow, languid fades. No bouncy springs.
*   **Anti-Pattern Rejection**: No thick borders, no glassmorphism bubbles, no pure white SaaS backgrounds, no chunky tech sans-serifs for headings.

## 4. Color, Typography, Spacing, and Density Decisions
*   **Typography**:
    *   **Display/Headings**: `Cinzel` or `Cormorant Garamond`, all-caps or title case with extremely wide letter-spacing (`0.15em` to `0.3em`).
    *   **Data/Readouts**: `JetBrains Mono` for terminal code blocks, styled minimally.
    *   **Body**: A highly legible, thin sans-serif (`Inter` or `Montserrat` at thin weights) to contrast the ornate serifs.
*   **Density**: Extremely sparse and centered. Negative space is the primary design tool.
*   **Spacing**: Symmetrical, centered layouts with thin 1px separator lines.

## 5. Token Architecture and Alias Strategy
*   `--bg-base`: Warm Ivory (Light) / Deep Rich Dark (Dark).
*   `--text-primary`: Dark Copper (Light) / Pale Gold (Dark).
*   `--text-muted`: Faded Brown (Light) / Dimmed Gold/Olive (Dark).
*   `--border-fine`: Thin Copper/Gold border.

## 6. Responsive Recomposition Plan
*   **Mobile**: Centered typography scales down gracefully. Lines remain thin.
*   **Desktop**: Expansive centering, allowing the background to breathe.

## 7. Motion, Interaction, and Feedback Rules
*   **Hover States**: Subtle opacity shifts or very slow color transitions. No physical "lifting" or bouncy scaling.
*   **Reveal**: Slow, 1.5-second opacity fades as elements enter the viewport.

## 8. Component Language, States, and Morphology
*   **Cards**: Replaced by transparent "Exhibition Plates" with a single fine top or bottom border.
*   **Buttons**: Transparent backgrounds with a solid fine border and wide-tracked serif text.
*   **Navbar/Footer**: Centered, minimal, acting as subtle framing devices at the top and bottom of the canvas.

## 9. Accessibility Non-Negotiables
*   WCAG 2.2 AA contrast minimums.
*   Legible body text sizes despite the "fine art" styling.

## 10. Anti-Patterns to Avoid
*   "Apple-like" Glassmorphic blurs or rounded chunky cards.
*   Animated floating mesh backgrounds.
*   Default tech-blue accent colors.
*   Left-aligned dense text blocks (prefer centered poetry-style alignment).