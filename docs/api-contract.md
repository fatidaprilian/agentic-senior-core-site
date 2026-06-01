# API & Layout Contract: Agentic-Senior-Core Site

This document records the public data fetch, theme tokens, and responsive layout contracts used by the landing page.

---

## 1. NPM Version Fetch

The hero displays the latest published package version from the public NPM registry.

- **Endpoint URL:** `https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest`
- **Method:** `GET`
- **Expected response:**

```json
{
  "name": "@ryuenn3123/agentic-senior-core",
  "version": "4.2.0"
}
```

- **Fallback:** if the request fails, display the compiled fallback version `v4.2.0`.
- **UX rule:** do not block rendering while the version loads.

---

## 2. Theme Token API

The site uses CSS custom properties on `:root` and `html.dark`. Light mode is default; dark mode is opt-in through the theme toggle.

| Variable | Light mode | Dark mode | Purpose |
|---|---:|---:|---|
| `--bg-base` | `#fff7df` | `#151515` | Page background |
| `--bg-surface` | `#ffffff` | `#222222` | Primary card surface |
| `--bg-muted` | `#f2e8c9` | `#2f2f2f` | Secondary panels |
| `--text-primary` | `#111111` | `#f7f1df` | Main text |
| `--text-muted` | `#5f5a4f` | `#c0b7a4` | Secondary text |
| `--border-strong` | `#111111` | `#f7f1df` | Neo-brutal structural border |
| `--accent` | `#ff6b35` | `#ff875c` | Primary action and focus |
| `--accent-live` | `#96f550` | `#baff63` | Live version/status |
| `--accent-violet` | `#7b61ff` | `#a996ff` | Rule metadata accent |

---

## 3. Responsive Recomposition

- **Mobile `< 720px`:** one-column hero, nav links hidden, cards stack vertically, command block full width.
- **Tablet `720px–1024px`:** hero remains readable with two columns only when width permits; capability cards use two columns.
- **Desktop `> 1024px`:** hero uses exposed two-column grid; sections use 2x2 or 12-column layouts.

No layout may require horizontal scroll.
