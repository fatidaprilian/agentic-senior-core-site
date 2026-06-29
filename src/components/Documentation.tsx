import { useState } from "react";
import { motion } from "motion/react";

const docs = [
  [
    "Agent Portability",
    "ASC supports 23+ AI coding hosts at two tiers (plugin and instruction).",
    "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/agent-portability.md",
  ],
  [
    "Architecture",
    "Plugin architecture, hook event mapping, and token budgeting details.",
    "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/architecture.md",
  ],
] as const;

const groups = {
  Core: ["Code Quality", "Response Style", "Testing"],
  Design: ["Architecture", "API Design", "Frontend"],
  Systems: ["Database", "Infrastructure", "Resilience", "Async and Events"],
  Safety: ["Security", "Error Handling"],
};

export default function Documentation() {
  const [active, setActive] = useState<keyof typeof groups>("Core");

  return (
    <section id="docs" className="section" aria-label="Documentation">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 28 }}>
          <span className="label-mono">Docs</span>
          <h2
            className="heading-lg"
            style={{ marginTop: 10, marginBottom: 14 }}
          >
            Rules and references.
          </h2>
          <p className="text-lead">
            Jump into the documents or inspect the rule families that shape the
            agent behavior.
          </p>
        </div>

        <div className="grid-12">
          <div className="col-5" style={{ display: "grid", gap: 14 }}>
            {docs.map(([title, body, href], index) => (
              <motion.a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.22, delay: index * 0.04 }}
                style={{ padding: 18, textDecoration: "none" }}
              >
                <div
                  className="label-mono"
                  style={{ color: "var(--accent-violet)" }}
                >
                  Manual 0{index + 1}
                </div>
                <h3 className="heading-md" style={{ marginTop: 8 }}>
                  {title}
                </h3>
                <p className="text-body" style={{ marginTop: 8 }}>
                  {body}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="col-7 neo-card" style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 20,
              }}
            >
              {(Object.keys(groups) as Array<keyof typeof groups>).map(
                (key) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setActive(key)}
                    className={key === active ? "btn btn-primary" : "btn"}
                    style={{ minHeight: 40, padding: "8px 12px" }}
                  >
                    {key}
                  </button>
                ),
              )}
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {groups[active].map((rule) => (
                <div
                  key={rule}
                  className="neo-card-soft"
                  style={{ padding: 16 }}
                >
                  <span className="badge badge-live">{rule}</span>
                  <p className="text-body" style={{ marginTop: 10 }}>
                    Universal invariant rule injected on every session start.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
