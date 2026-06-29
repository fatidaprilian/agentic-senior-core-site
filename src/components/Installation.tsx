import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Install package",
    body: "Install the global CLI once so asc, agentic-senior-core, and ascx are available.",
    command: "npm install -g @ryuenn3123/agentic-senior-core",
  },
  {
    number: "02",
    title: "Native plugin",
    body: "For Codex CLI, install the plugin so rules load through SessionStart hooks.",
    command: "codex plugins install agentic-senior-core",
  },
  {
    number: "03",
    title: "IDE adapters",
    body: "For instruction-tier IDEs, generate one rules file in the current project.",
    command: "asc adapter --all",
  },
  {
    number: "04",
    title: "Verify setup",
    body: "Detect installed hosts and get host-specific install hints.",
    command: "asc status",
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
              Install once, route by host.
            </h2>
            <p className="text-lead">
              Terminal agents use plugin bundles with hooks. IDE agents use one
              adapter file per project. v4 projects can clean old bridge files
              with <code>asc clean</code>.
            </p>
            <div
              className="neo-card"
              style={{ marginTop: 28, padding: 18, display: "inline-block" }}
            >
              <div className="heading-md">v5</div>
              <div className="label-mono" style={{ marginTop: 8 }}>
                universal plugin system
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
                <div className="install-step-inner">
                  <span className="badge badge-live">{step.number}</span>
                  <div className="install-step-content">
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
