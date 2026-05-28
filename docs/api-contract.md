# API & Layout Contract: Modular Audio-Chassis Console

This document details the dynamic data streams, CSS custom variables schema, and integration endpoints that power the website.

---

## 1. Registry Fetch Endpoint
To ensure that version metrics displayed on the landing page are completely live, the site queries the public NPM package registry on mount:

*   **Endpoint URL**: `https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest`
*   **Method**: `GET`
*   **Response Handling**:
    ```json
    {
      "name": "@ryuenn3123/agentic-senior-core",
      "version": "4.2.0"
    }
    ```
*   **Fallback Strategy**: If the network is unreachable, the client falls back silently to display the hardcoded compilation baseline (`v4.2.0`), satisfying reliability principles.

---

## 2. Layout Token API (CSS Custom Properties)
The site's visual states are governed by a robust, dual-mode CSS custom properties schema, dynamically applied to the `<html>` node.

| Variable Role | Light Mode (Studio Chalk) | Dark Mode (Charcoal Synth) | Purpose |
|---|---|---|---|
| `--bg-base` | `#f4f5f6` | `#0f0f11` | Main mixer chassis backdrop |
| `--bg-surface-secondary`| `#ffffff` | `#18181c` | Modular card layer background |
| `--bg-surface-tertiary`| `#e9ebea` | `#282830` | Inset terminal console background |
| `--text-primary` | `#18181b` | `#f4f4f5` | High-contrast hardware typography |
| `--text-muted` | `#71717a` | `#a1a1aa` | Monospaced tags and parameters |
| `--border-fine` | `#e2e2e5` | `#282830` | Fine structural metal divisions |
| `--border-active` | `#1e90ff` | `#00e5ff` | Active jack socket and patch highlights |
| `--color-accent` | `#ff5722` | `#ff5722` | Retro active action highlights |
| `--color-led-green` | `#00e676` | `#00e676` | Glowing active status LED |
| `--color-led-warning` | `#ffab00` | `#ffab00` | Flashing warning state LED |

---

## 3. Responsive Recomposition Breakpoints
Layouts mutate structurally based on the viewport width:

*   **Mobile viewports (`< 768px`)**: Spacing compresses, Display Outfit type scales down via fluid `clamp()`, and horizontal mixer blocks stack into vertical single-column slots. Gravity cords fall back to straight line connection vectors to save rendering power.
*   **Tablet viewports (`768px - 1024px`)**: Grid elements snap to a two-column bento system.
*   **Desktop viewports (`> 1024px`)**: Full horizontal physical mixer board with gravimetric dangling cables, parameter knobs, active status LEDs, and real-time spectrum waveform monitors.
