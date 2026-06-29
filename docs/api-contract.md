# API And Layout Contract

## 1. NPM Version Fetch

The hero displays the latest published package version from the public NPM registry.

- Endpoint URL: `https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest`
- Method: `GET`
- Expected response:

```json
{
  "name": "@ryuenn3123/agentic-senior-core",
  "version": "5.4.0"
}
```

- Fallback: if the request fails, display the compiled fallback version `v5.4.0`.
- UX rule: rendering must not block while the version loads.

## 2. Theme Token API

The site uses CSS custom properties on `:root` and `html.dark`. Light mode is default; dark mode is opt-in through the theme toggle.

| Variable | Light mode | Dark mode | Purpose |
|---|---:|---:|---|
| `--bg-base` | `#f7f8fb` | `#151515` | Page background |
| `--bg-surface` | `#ffffff` | `#222222` | Primary card surface |
| `--bg-muted` | `#e7edf3` | `#2f2f2f` | Secondary panels |
| `--text-primary` | `#111111` | `#f7f1df` | Main text |
| `--text-muted` | `#566170` | `#c0b7a4` | Secondary text |
| `--border-strong` | `#111111` | `#f7f1df` | Neo-brutal structural border |
| `--accent` | `#ff6b35` | `#ff875c` | Primary action and focus |
| `--accent-live` | `#96f550` | `#baff63` | Live version/status |
| `--accent-violet` | `#7b61ff` | `#a996ff` | Secondary metadata accent |

## 3. Responsive Recomposition

- Mobile `< 720px`: one-column hero, nav links hidden, cards stack vertically, command blocks full width.
- Tablet `720px-1024px`: cards reflow through responsive grid tracks.
- Desktop `> 1024px`: hero and major sections use the exposed 12-column grid.

No layout may require horizontal scroll.
