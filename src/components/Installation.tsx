import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, Copy } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Step {
  title: string;
  description: string;
  command: string;
}

const STEPS: Step[] = [
  {
    title: "Initialize Rules Engine",
    description:
      "Generates core rule files, active memory registries, and coding governance checklists.",
    command: "npx @ryuenn3123/agentic-senior-core init",
  },
  {
    title: "Sync with Your Editor (optional)",
    description:
      "Enables real-time MCP communication with Cursor, VS Code, Windsurf, or Claude Code.",
    command: "npx @ryuenn3123/agentic-senior-core init --mcp-template",
  },
  {
    title: "Stay Current",
    description:
      "Upgrades all rule presets to the latest version and prunes outdated guidelines.",
    command: "npx @ryuenn3123/agentic-senior-core upgrade --yes",
  },
];

const MOBILE_STYLES = `
  @media (max-width: 768px) {
    .install-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }
  }
`;

// ---------------------------------------------------------------------------
// StepCard
// ---------------------------------------------------------------------------

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

function StepCard({ step, index, isLast }: StepCardProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Single IntersectionObserver drives both entrance animation and color change.
  const isInView = useInView(ref, { once: true });

  const handleCopy = () => {
    navigator.clipboard.writeText(step.command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ delay: index * 0.12, duration: 0.4, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        // Spacing between steps: last step has no margin.
        marginBottom: isLast ? 0 : "24px",
      }}
    >
      {/* ----------------------------------------------------------------
          Timeline column
          align-self: stretch ensures the column matches card height so
          the connector line fills exactly to the next step's circle.
      ---------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
          width: "20px",
          flexShrink: 0,
        }}
      >
        {/* Circle node — border and text color animate when in view */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: `2px solid ${isInView ? "var(--accent)" : "var(--border-fine)"}`,
            background: "var(--bg-surface-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            fontWeight: 600,
            color: isInView ? "var(--accent)" : "var(--text-muted)",
            // CSS transition handles the smooth color shift.
            transition: "border-color 0.4s ease 0.2s, color 0.4s ease 0.2s",
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {index + 1}
        </div>

        {/* Connector line — negative margin-bottom pulls it 24px into the
            gap between steps, closing the visual join to the next circle. */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "2px",
              background: isInView ? "var(--accent)" : "var(--border-fine)",
              transition: "background 0.4s ease 0.4s",
              marginTop: "4px",
              marginBottom: "-24px",
            }}
          />
        )}
      </div>

      {/* ----------------------------------------------------------------
          Step card
      ---------------------------------------------------------------- */}
      <div
        className="card"
        style={{
          marginLeft: "32px",
          flex: 1,
          padding: "24px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1rem",
            color: "var(--text-primary)",
            marginBottom: "8px",
          }}
        >
          {step.title}
        </div>

        <p className="text-body" style={{ margin: 0 }}>
          {step.description}
        </p>

        {/* Command block */}
        <div
          className="inset-terminal"
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <code
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              flex: 1,
              wordBreak: "break-all",
              color: "var(--text-primary)",
            }}
          >
            {step.command}
          </code>

          <button
            onClick={handleCopy}
            aria-label={`Copy: ${step.command}`}
            style={{
              width: "36px",
              height: "36px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${copied ? "var(--green)" : "var(--border-fine)"}`,
              borderRadius: "var(--radius-sm)",
              background: "var(--bg-surface)",
              cursor: "pointer",
              transition: "border-color 0.2s ease, color 0.2s ease",
              color: copied ? "var(--green)" : "var(--text-muted)",
              outline: "none",
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function Installation() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOBILE_STYLES }} />

      <section id="install" className="section">
        <div className="container">
          <div
            className="install-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* ----------------------------------------------------------------
                Left column
            ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="label-mono">Quick Start</p>

              <h2 className="heading-lg" style={{ marginTop: "16px" }}>
                Up and running in 30 seconds
              </h2>

              <p className="text-lead" style={{ marginTop: "16px" }}>
                Three commands to initialize the rules engine, sync with your
                editor, and stay current.
              </p>

              {/* Inline stat card */}
              <div
                className="card"
                style={{ padding: "20px", marginTop: "32px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    30s
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Average setup time
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ----------------------------------------------------------------
                Right column — vertical timeline
            ---------------------------------------------------------------- */}
            <div>
              {STEPS.map((step, index) => (
                <StepCard
                  key={step.title}
                  step={step}
                  index={index}
                  isLast={index === STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
