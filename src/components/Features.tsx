import { motion } from "motion/react";

const features = [
  {
    code: "PLUG-001",
    title: "Plugin-tier delivery",
    body: "Claude Code, Codex CLI, Copilot CLI, Gemini CLI, Devin, Hermes, OpenCode, OpenClaw, and Antigravity get native plugin or extension surfaces.",
    metric: "23+ hosts",
  },
  {
    code: "CORE-001",
    title: "Small always-on core",
    body: "AGENTS.md stays around 1,200 tokens and keeps the decision ladder, security floor, testing stance, and response compactness active.",
    metric: "~1.2k tokens",
  },
  {
    code: "SKIL-001",
    title: "Skills and commands",
    body: "Detailed review, audit, refactor, and adapter workflows live in skills and /asc-* commands, so long procedures load only when invoked.",
    metric: "on demand",
  },
  {
    code: "ASCX-001",
    title: "Output compression",
    body: "ascx wraps commands such as git status, npm test, npm run build, tsc, rg, and npm install to preserve evidence while cutting noisy output.",
    metric: "safe tee",
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.3 }}
          style={{ maxWidth: 680, marginBottom: 28 }}
        >
          <span className="label-mono">Capabilities</span>
          <h2
            className="heading-lg"
            style={{ marginTop: 10, marginBottom: 14 }}
          >
            Current product surface
          </h2>
          <p className="text-lead">
            The repo is now a universal plugin package: short rules always on,
            longer workflows on demand, and utilities for setup, cleanup, status,
            MCP, and token-aware command output.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.code}
              className="neo-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              style={{
                padding: 22,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "start",
                }}
              >
                <span
                  className={
                    index % 2 === 0 ? "badge badge-violet" : "badge badge-live"
                  }
                >
                  {feature.code}
                </span>
                <span className="label-mono">0{index + 1}</span>
              </div>
              <h3
                className="heading-md"
                style={{ marginTop: 24, marginBottom: 12 }}
              >
                {feature.title}
              </h3>
              <p className="text-body">{feature.body}</p>
              <div
                className="neo-card-soft"
                style={{ marginTop: "auto", padding: 12 }}
              >
                <span className="label-mono">{feature.metric}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
