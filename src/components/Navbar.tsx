import ThemeToggle from "./ThemeToggle";

function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

const links = [
  { href: "#features", label: "Capabilities" },
  { href: "#install", label: "Install" },
  { href: "#demo", label: "Demo" },
  { href: "#docs", label: "Docs" },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        <a
          href="#top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>ASC</span>
          <span
            className="badge badge-live"
            style={{ minHeight: 24, fontSize: "0.66rem" }}
          >
            v4
          </span>
        </a>

        <div className="nav-links" aria-label="Section navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://github.com/fatidaprilian/Agentic-Senior-Core"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository"
            title="GitHub repository"
            style={{
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid var(--border-strong)",
              background: "var(--bg-surface)",
              boxShadow: "var(--shadow-hard-small)",
            }}
          >
            <GitHubMark size={18} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
