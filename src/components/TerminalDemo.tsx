import { useState } from "react";
import { motion } from "motion/react";

const compactLines = [
  "$ ascx npm run build",
  "✓ context selected: FE + API",
  "✓ noisy output compressed",
  "✓ validation summary preserved",
  "exit 0",
];

const rawLines = [
  "$ npm run build",
  "> verbose transform output x 2149 modules",
  "> repeated plugin logs and warnings",
  "> useful result buried below noise",
  "exit 0",
];

export default function TerminalDemo() {
  const [compact, setCompact] = useState(true);
  const lines = compact ? compactLines : rawLines;

  return (
    <section id="demo" className="section" aria-label="ASCX Demo">
      <div className="container">
        <div className="grid-12" style={{ alignItems: "start" }}>
          <div className="col-5">
            <span className="label-mono">Demo</span>
            <h2
              className="heading-lg"
              style={{ marginTop: 10, marginBottom: 14 }}
            >
              Cleaner command output.
            </h2>
            <p className="text-lead">
              ASCX keeps the important evidence and removes repetitive terminal
              noise before it fills the AI context.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setCompact((value) => !value)}
              style={{ marginTop: 24 }}
            >
              Show {compact ? "raw" : "ASCX"} output
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
              <span className="label-mono">Engine Output</span>
              <span className={compact ? "badge badge-live" : "badge"}>
                {compact ? "ASCX" : "RAW"}
              </span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: 22,
                minHeight: 200,
                background: "#111111",
                color: "#fff7df",
                overflowX: "auto",
                maxWidth: "100%",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.76rem, 1.5vw, 0.88rem)",
                lineHeight: 1.9,
              }}
            >
              {lines.map((line, index) => (
                <motion.div
                  key={`${compact}-${line}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16, delay: index * 0.035 }}
                  style={{
                    color: line.startsWith("✓")
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
