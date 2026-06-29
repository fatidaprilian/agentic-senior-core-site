import { useState } from "react";
import { motion } from "motion/react";

const docs = [
  [
    "Agent Portability",
    "Plugin-tier hosts, instruction-tier adapters, hook mapping, and Antigravity format.",
    "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/agent-portability.md",
  ],
  [
    "Architecture",
    "Layered delivery, SessionStart/SubagentStart hooks, skills, commands, and token budget.",
    "https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/architecture.md",
  ],
] as const;

const groups = {
  Rules: [
    ["Decision ladder", "Reuse first, use standard tools, then write the smallest working code."],
    ["Security floor", "Validate boundaries, protect secrets, authorize resources, and avoid unsafe shell/query interpolation."],
    ["Testing stance", "Cover business behavior, boundary failures, edge cases, and critical data paths."],
    ["Response style", "Keep answers compact while preserving exact paths, commands, errors, risks, and validation status."],
  ],
  Plugins: [
    ["Claude Code", "Plugin hooks load AGENTS.md at SessionStart and SubagentStart."],
    ["Codex CLI", "Codex plugin manifest points to the same hooks, skills, and commands."],
    ["Gemini CLI", "gemini-extension.json loads AGENTS.md and TOML command metadata."],
    ["Copilot CLI", "GitHub plugin files use Copilot hook casing and command metadata."],
  ],
  Adapters: [
    ["Cursor", "asc adapter --cursor writes .cursor/rules/agentic-senior-core.mdc."],
    ["Devin Desktop", "asc adapter --devin is the preferred path over legacy Windsurf."],
    ["GitHub Copilot", "asc adapter --copilot writes .github/copilot-instructions.md."],
    ["OpenHands", "asc adapter --openhands writes a microagent instruction file."],
  ],
  Utilities: [
    ["asc status", "Detect installed hosts and print install hints."],
    ["asc clean", "Remove v4 .agent-context and bridge artifacts from older projects."],
    ["ascx", "Compress noisy command output while preserving exit code and raw-output safety tee behavior."],
    ["asc mcp", "Start the MCP stdio server with validation, rule lookup, audit, fetch, trend, and state tools."],
  ],
} as const;

export default function Documentation() {
  const [active, setActive] = useState<keyof typeof groups>("Rules");

  return (
    <section id="docs" className="section" aria-label="Documentation">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 28 }}>
          <span className="label-mono">Docs</span>
          <h2
            className="heading-lg"
            style={{ marginTop: 10, marginBottom: 14 }}
          >
            Rules, hosts, and utilities.
          </h2>
          <p className="text-lead">
            The source repo now documents portability and architecture directly.
            Use these references to inspect what ships in the npm package.
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
              {groups[active].map(([name, body]) => (
                <div
                  key={name}
                  className="neo-card-soft"
                  style={{ padding: 16 }}
                >
                  <span className="badge badge-live">{name}</span>
                  <p className="text-body" style={{ marginTop: 10 }}>
                    {body}
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
