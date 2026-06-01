import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface GuideCard {
  label: string;
  title: string;
  description: string;
  href: string;
}

const GUIDE_CARDS: GuideCard[] = [
  {
    label: "Manual 01",
    title: "Workspace FAQ",
    description:
      "Guidelines to exclude folders, configure local backups, and resolve rules verification errors.",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/faq.md",
  },
  {
    label: "Manual 02",
    title: "Engine Architecture",
    description:
      "Detailed analysis of background setups, active memory logs, and prompt caching layers.",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/deep-dive.md",
  },
  {
    label: "Manual 03",
    title: "Editor Sync Playbook",
    description:
      "Step-by-step instructions to bind rulesets inside Cursor, VS Code, Windsurf, or Claude Code.",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/integration-playbook.md",
  },
  {
    label: "Manual 04",
    title: "Optimization Benchmarks",
    description:
      "Prompt compilation speeds, token saving benchmarks, and local cache guidelines.",
    href: "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/benchmark-reference.md",
  },
];

// ---------------------------------------------------------------------------
// Rules directory per tab
// ---------------------------------------------------------------------------

type TabName = "Architecture" | "Database" | "Security" | "Performance";

interface RuleRow {
  id: string;
  title: string;
}

const RULES: Record<TabName, RuleRow[]> = {
  Architecture: [
    { id: "[ARCH-*]", title: "System Structure Standards" },
    { id: "[NAME-*]", title: "Naming & Folder Rules" },
    { id: "[API-*]", title: "API Schema Guidelines" },
  ],
  Database: [
    { id: "[DATA-*]", title: "Query Safety Standards" },
    { id: "[MIG-*]", title: "Safe Migrations & Schemas" },
    { id: "[SVC-*]", title: "Service Boundaries" },
  ],
  Security: [
    { id: "[SEC-*]", title: "Access Control Policies" },
    { id: "[CFG-*]", title: "Configuration Security" },
    { id: "[DOCK-*]", title: "Container Governance" },
  ],
  Performance: [
    { id: "[PERF-*]", title: "Bundle Limits & Speed" },
    { id: "[TEST-*]", title: "Mocks & Automated Tests" },
    { id: "[RES-*]", title: "Resilience Circuit-Breakers" },
  ],
};

const CODE_EXAMPLES: Record<TabName, string> = {
  Architecture: `# ARCH-001: Module boundary contract
# No direct cross-module imports.
# All inter-module calls go through adapters.

export interface UserAdapter {
  getById(id: string): Promise<User>;
  listByTenant(tenantId: string): Promise<User[]>;
}`,
  Database: `# DATA-001: Query safety standard
# Parameterized queries required on all user input.
# Direct string interpolation is a hard gate failure.

const user = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);`,
  Security: `# SEC-001: Access control policy
# Validate role on every protected route handler.
# Never rely on client-side role checks alone.

if (!req.user?.hasRole('admin')) {
  throw new ForbiddenError(
    'Insufficient permissions'
  );
}`,
  Performance: `# PERF-001: Bundle limits
# Max 200kB initial chunk (gzipped).
# Code-split at every route boundary.

const Dashboard = lazy(
  () => import('./features/dashboard')
);`,
};

const TABS: TabName[] = ["Architecture", "Database", "Security", "Performance"];

const MOBILE_STYLES = `
  @media (max-width: 768px) {
    .docs-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function Documentation() {
  const [activeTab, setActiveTab] = useState<TabName>("Architecture");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOBILE_STYLES }} />

      <section id="docs" className="section">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ maxWidth: 640, marginBottom: "56px" }}
          >
            <p className="label-mono">Reference</p>
            <h2 className="heading-lg" style={{ marginTop: "16px" }}>
              Rules & Documentation
            </h2>
            <p className="text-lead" style={{ marginTop: "16px" }}>
              Browse every governance standard, benchmark sheet, and integration
              guide built into the engine.
            </p>
          </motion.div>

          {/* Two-column grid */}
          <div
            className="docs-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* ----------------------------------------------------------------
                Left — Workspace Guides
            ---------------------------------------------------------------- */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.76rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Workspace Guides
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {GUIDE_CARDS.map((card, index) => (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="card"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    style={{
                      padding: "20px",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--accent)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {card.label}
                    </span>
                    <div
                      className="heading-md"
                      style={{ marginBottom: "6px", fontSize: "1rem" }}
                    >
                      {card.title}
                    </div>
                    <p
                      className="text-body"
                      style={{
                        margin: 0,
                        fontSize: "0.88rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------------------
                Right — Active Rules Directory
            ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.76rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Active Rules Directory
              </p>

              <div className="card" style={{ padding: "28px", height: "100%" }}>
                {/* Tab navigation */}
                <LayoutGroup>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      borderBottom: "1px solid var(--border-fine)",
                      paddingBottom: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    {TABS.map((tab) => {
                      const isActive = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          style={{
                            position: "relative",
                            padding: "6px 16px",
                            borderRadius: "var(--radius-sm)",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            border: `1px solid ${isActive ? "var(--text-primary)" : "var(--border-fine)"}`,
                            background: isActive
                              ? "transparent"
                              : "var(--bg-surface)",
                            color: isActive
                              ? "var(--bg-base)"
                              : "var(--text-muted)",
                            overflow: "hidden",
                            transition:
                              "color 0.2s ease, border-color 0.2s ease",
                            outline: "none",
                          }}
                        >
                          {/* Shared background animates between active tabs */}
                          {isActive && (
                            <motion.div
                              layoutId="tab-bg"
                              style={{
                                position: "absolute",
                                inset: 0,
                                background: "var(--text-primary)",
                                borderRadius: "var(--radius-sm)",
                                zIndex: 0,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                              }}
                            />
                          )}
                          <span style={{ position: "relative", zIndex: 1 }}>
                            {tab}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </LayoutGroup>

                {/* Rules list */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        marginBottom: "24px",
                      }}
                    >
                      {RULES[activeTab].map((rule) => (
                        <div
                          key={rule.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.74rem",
                              fontWeight: 600,
                              color: "var(--accent)",
                              minWidth: "72px",
                              flexShrink: 0,
                            }}
                          >
                            {rule.id}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                            }}
                          >
                            {rule.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Code example */}
                    <div
                      className="inset-terminal"
                      style={{ padding: "16px 18px" }}
                    >
                      <pre
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.76rem",
                          lineHeight: 1.7,
                          color: "var(--text-secondary)",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {CODE_EXAMPLES[activeTab]}
                      </pre>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
