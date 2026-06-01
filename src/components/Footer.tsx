import { motion } from "motion/react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const RESOURCES_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core",
    external: true,
  },
  {
    label: "Documentation",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs",
    external: true,
  },
  {
    label: "Benchmarks",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/benchmark-reference.md",
    external: true,
  },
];

const NAVIGATE_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "Demo", href: "#demo" },
  { label: "Rules", href: "#docs" },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingBlock: "48px",
      }}
    >
      <div className="container">
        {/* ----------------------------------------------------------------
            Row 1 — Brand + links
        ---------------------------------------------------------------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Brand block */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--text-primary)",
              }}
            >
              agentic-senior-core
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.84rem",
                color: "var(--text-muted)",
                marginTop: "6px",
                marginBottom: "16px",
                maxWidth: "260px",
              }}
            >
              Production-grade rules engine for AI coding agents.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="badge">MIT License</span>
              <span className="badge badge-accent">Open Source</span>
            </div>
          </div>

          {/* Link groups */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            {/* Resources */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Resources
              </p>
              {RESOURCES_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.84rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Navigate */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Navigate
              </p>
              {NAVIGATE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.84rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------
            Row 2 — Legal strip
        ---------------------------------------------------------------- */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            &copy; 2025 Agentic-Senior-Core. Released under the MIT License.
          </p>

          {/* Meta moment: the site itself was built with the tool */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            Built with agentic-senior-core v4.0
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
