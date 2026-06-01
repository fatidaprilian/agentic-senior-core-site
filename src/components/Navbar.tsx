import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Navbar() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .nav-links { display: none; }
            @media (min-width: 768px) {
              .nav-links { display: flex; }
            }
            .nav-link:hover { color: var(--text-primary) !important; }
            .github-link:hover { color: var(--text-primary) !important; }
          `,
        }}
      />
      <motion.nav
        className="navbar"
        aria-label="Main navigation"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.92rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            agentic
          </span>
          <span className="badge badge-accent label-mono">v4</span>
        </div>

        {/* Center nav links */}
        <div
          className="nav-links"
          style={{
            alignItems: "center",
            gap: "2px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {[
            { label: "Features", href: "#features" },
            { label: "Install", href: "#install" },
            { label: "Demo", href: "#demo" },
            { label: "Rules", href: "#docs" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              style={{
                fontSize: "0.84rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "4px 10px",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginLeft: "auto",
          }}
        >
          <a
            href="https://github.com/fatidaprilian/Agentic-Senior-Core"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="github-link"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              transition: "color 0.2s",
            }}
          >
            <GitHubIcon />
          </a>
          <ThemeToggle />
        </div>
      </motion.nav>
    </>
  );
}
