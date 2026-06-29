import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Check IDE Status",
    body: "Run status to auto-detect your editors and see installation hints.",
    command: "npx @ryuenn3123/agentic-senior-core status",
  },
  {
    number: "02",
    title: "Adapter Install",
    body: "Generate the instruction-tier adapter file for your project (e.g., Cursor, Windsurf).",
    command: "npx @ryuenn3123/agentic-senior-core adapter --all",
  },
  {
    number: "03",
    title: "Clean Legacy Files",
    body: "If upgrading from v4, remove legacy per-project artifacts and bridge files.",
    command: "npx @ryuenn3123/agentic-senior-core clean",
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
              Keep setup boring: use plugin marketplace for native integration,
              or generate a single adapter file for instruction-tier IDEs.
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
