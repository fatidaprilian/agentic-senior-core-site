import { useState } from "react";
import { motion } from "motion/react";

const statusLines = [
  "$ asc status",
  "Agentic Senior Core -- Host Status",
  "",
  "  [x] Codex CLI          (plugin)   detected",
  "      Install: codex plugins install agentic-senior-core",
  "  [x] Cursor             (adapter)  detected",
  "      Install: asc adapter --cursor",
  "",
  'Plugin hosts get always-on rules via SessionStart hook.',
  'Adapter hosts need one file per project via "asc adapter".',
];

const ascxLines = [
  "$ ascx npm test",
  "PASS tests/adapter.test.mjs",
  "",
  "[ascx]",
  "command: npm test",
  "exit: 0",
  "classification: compressible",
  "filter: npm-test",
  "raw_output: none",
];

export default function TerminalDemo() {
  const [showStatus, setShowStatus] = useState(true);
  const lines = showStatus ? statusLines : ascxLines;

  return (
    <section id="demo" className="section" aria-label="CLI Demo">
      <div className="container">
        <div className="grid-12" style={{ alignItems: "start" }}>
          <div className="col-5">
            <span className="label-mono">CLI</span>
            <h2
              className="heading-lg"
              style={{ marginTop: 10, marginBottom: 14 }}
            >
              Setup checks and quieter output.
            </h2>
            <p className="text-lead">
              <code>asc status</code> reports detected hosts and install hints.{" "}
              <code>ascx</code> wraps noisy commands and keeps evidence in a
              compact footer.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowStatus((value) => !value)}
              style={{ marginTop: 24 }}
            >
              Show {showStatus ? "ASCX" : "Status"}
            </button>
          </div>

          <motion.div
            className="col-7 neo-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: "hidden", minWidth: 0 }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "3px solid var(--border-strong)",
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "center",
                background: "var(--bg-muted)",
              }}
            >
              <span className="label-mono">CLI sample</span>
              <span
                className={
                  showStatus ? "badge badge-live" : "badge badge-violet"
                }
              >
                {showStatus ? "STATUS" : "ASCX"}
              </span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: 22,
                minHeight: 260,
                background: "#111111",
                color: "#f7f8fb",
                overflowX: "auto",
                maxWidth: "100%",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.76rem, 1.5vw, 0.88rem)",
                lineHeight: 1.9,
              }}
            >
              {lines.map((line, index) => (
                <motion.div
                  key={`${showStatus}-${line}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16, delay: index * 0.035 }}
                  style={{
                    color:
                      line.startsWith("  [x]") || line.startsWith("[ascx]")
                        ? "var(--accent-live)"
                        : "inherit",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
