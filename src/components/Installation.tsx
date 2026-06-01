import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Initialize the repo",
    body: "Adds the governance files, active memory, and rule directories.",
    command: "npx @ryuenn3123/agentic-senior-core init",
  },
  {
    number: "02",
    title: "Generate editor sync",
    body: "Creates MCP configuration for Cursor, VS Code, Windsurf, or Claude Code.",
    command: "npx @ryuenn3123/agentic-senior-core init --mcp-template",
  },
  {
    number: "03",
    title: "Upgrade rules later",
    body: "Refreshes rule presets and removes stale governance files.",
    command: "npx @ryuenn3123/agentic-senior-core upgrade --yes",
  },
];

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="command-box" style={{ marginTop: 16 }}>
      <code>{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy command: ${command}`}
      >
        {copied ? (
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <Check size={15} /> Copied
          </span>
        ) : (
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <Copy size={15} /> Copy
          </span>
        )}
      </button>
    </div>
  );
}

export default function Installation() {
  return (
    <section id="install" className="section" aria-label="Quick Start">
      <div className="container">
        <div className="grid-12" style={{ alignItems: "start" }}>
          <motion.div
            className="col-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3 }}
          >
            <span className="label-mono">Quick Start</span>
            <h2
              className="heading-lg"
              style={{ marginTop: 10, marginBottom: 14 }}
            >
              Install when the value is clear.
            </h2>
            <p className="text-lead">
              Keep setup boring: run one command, connect your editor when
              needed, and upgrade the rule pack later.
            </p>
            <div
              className="neo-card"
              style={{ marginTop: 28, padding: 18, display: "inline-block" }}
            >
              <div className="heading-md">30s</div>
              <div className="label-mono" style={{ marginTop: 8 }}>
                average setup path
              </div>
            </div>
          </motion.div>

          <div className="col-7" style={{ display: "grid", gap: 18 }}>
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                className="neo-card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                style={{ padding: 20 }}
              >
                <div style={{ display: "flex", gap: 16, alignItems: "start" }}>
                  <span className="badge badge-live">{step.number}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="heading-md">{step.title}</h3>
                    <p className="text-body" style={{ marginTop: 8 }}>
                      {step.body}
                    </p>
                    <CopyCommand command={step.command} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
