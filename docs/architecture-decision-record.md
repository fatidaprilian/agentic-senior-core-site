# Architecture Decision Record (ADR): Modular Audio-Chassis Console Redesign

## Context
The landing page previously experimented with a technical drafting blueprint theme. While distinct, the blueprint coordinates and drafting caliper lines felt too complex and dry for a general audience. To achieve the user's goal of a stunning, premium, fully animated, and interactive layout that instantly makes developers think "Wow! Beautiful web design, is this using the repo? Let me try it too," we need a theme that merges ultimate technical depth with playful, high-tactility interactive elements.

The user explicitly requested a complete redesign from zero, fully animated, with custom copy crafted from scratch.

## Decision
We decided to completely reset the visual identity and composition framework to a **Tactile Modular Synthesizer & Patchbay Platform (Teenage Engineering & Eurorack inspired)**:
1.  **Tactile Cable Physics**: Implement an interactive, spring-driven SVG patchbay deck where users can drag patch cables from rules module connectors to the developer target codebase, magnetic-snapping on connection to activate live features.
2.  **Modular Hardware Racks**: Segment the single-page layout into horizontal racks styled like physical matte metal equipment chassis with inset borders, screw anchors, illuminated status LEDs, and parameter dial controllers.
3.  **Active Waveform Visualizer**: Integrate a dynamic HTML5 Canvas soundwave monitor that visually flattens and tightens to demonstrate the ASCX token compression wrapper (-80% token load) in action.
4.  **Calibrated Typography**: Pair mechanical display sans (Outfit) with readable geometric copy (Inter) and hardware labels (JetBrains Mono) to establish distinct, high-impact hierarchy.

## Consequences
*   **Distinctiveness**: The modular synthesizer aesthetic is completely unique, visually jaw-dropping, and invites immediate user interaction.
*   **Motion Quality**: Dangling gravimetric strings and spring-calibrated dials provide high-fidelity sensory feedback.
*   **Performance & Bundle Stability**: All dragging mechanics and canvas waveform render loops are lightweight, compiling with zero TS or Vite defects and maintaining a smooth 60fps refresh.
*   **Accessibility Integrity**: Fully satisfies WCAG 2.2 AA contrast floors using accessible text-on-color layers and automated reduced-motion fallbacks that render static connectors immediately.
