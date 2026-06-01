import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface LogLine {
  text: string;
  color: string;
}

const COMPRESSED_LINES: LogLine[] = [
  { text: "$ ascx npm run build", color: "var(--text-secondary)" },
  {
    text: "\u2713 Loading rule context... [ARCH, SEC, PERF]",
    color: "var(--green)",
  },
  { text: "\u2713 21 layers validated.", color: "var(--green)" },
  {
    text: "\u2713 Compressing output... 82% overhead removed.",
    color: "var(--green)",
  },
  { text: "\u2713 Build complete. [exit 0]", color: "var(--accent)" },
];

const BYPASSED_LINES: LogLine[] = [
  { text: "$ npm run build", color: "var(--text-secondary)" },
  { text: "> WARNING: 74,842 tokens in context", color: "var(--orange)" },
  { text: "> Duplicate rules loaded: 14 conflicts", color: "var(--orange)" },
  { text: "> ERROR: Context overflow. Build aborted.", color: "var(--red)" },
  { text: "> exit code 1", color: "var(--red)" },
];

// ---------------------------------------------------------------------------
// Dot matrix geometry
// ---------------------------------------------------------------------------

const DOT_COUNT = 64;
const PHI = 2.39996; // golden angle in radians — deterministic spiral spread

// Grid: 8x8, 22px center-to-center, 7px start offset inside a 192px container.
const gridX = (i: number) => 7 + (i % 8) * 22;
const gridY = (i: number) => 7 + Math.floor(i / 8) * 22;

// Scatter: deterministic golden-angle spiral, contained within [16, 166].
const scatterX = (i: number) => 91 + Math.cos(i * PHI) * 75;
const scatterY = (i: number) => 91 + Math.sin(i * PHI) * 75;

// ---------------------------------------------------------------------------
// Framer Motion variants for log lines
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.12 },
  },
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function TerminalDemo() {
  const [isCompressed, setIsCompressed] = useState(true);

  const lines = isCompressed ? COMPRESSED_LINES : BYPASSED_LINES;

  return (
    <section id="demo" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ maxWidth: 640, marginBottom: "48px" }}
        >
          <p className="label-mono">Interactive Demo</p>
          <h2 className="heading-lg" style={{ marginTop: "16px" }}>
            Watch the engine work
          </h2>
          <p className="text-lead" style={{ marginTop: "16px" }}>
            Toggle between raw AI prompt chaos and the compressed, validated
            output ASCX delivers.
          </p>
        </motion.div>

        {/* Main panel */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          style={{ overflow: "hidden" }}
        >
          {/* ----------------------------------------------------------------
              Panel header bar
          ---------------------------------------------------------------- */}
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid var(--border-fine)",
              background: "var(--bg-surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {["#ef4444", "#f59e0b", "#22c55e"].map((color) => (
                <div
                  key={color}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: color,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Console label */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text-muted)",
              }}
            >
              Engine Console
            </span>

            {/* Toggle control */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* BYPASS label */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: !isCompressed ? "var(--orange)" : "var(--text-muted)",
                  transition: "color 0.2s ease",
                  userSelect: "none",
                }}
              >
                BYPASS
              </span>

              {/* Pill toggle */}
              <button
                onClick={() => setIsCompressed((v) => !v)}
                aria-label={
                  isCompressed
                    ? "Switch to bypass mode"
                    : "Switch to compressed mode"
                }
                aria-pressed={isCompressed}
                style={{
                  position: "relative",
                  width: "48px",
                  height: "24px",
                  borderRadius: "12px",
                  border: "none",
                  background: isCompressed ? "var(--green)" : "var(--orange)",
                  cursor: "pointer",
                  transition: "background 0.25s ease",
                  padding: 0,
                  flexShrink: 0,
                  outline: "none",
                }}
              >
                <motion.div
                  animate={{ x: isCompressed ? 3 : 27 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: 0,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </button>

              {/* ENGAGE label */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: isCompressed ? "var(--green)" : "var(--text-muted)",
                  transition: "color 0.2s ease",
                  userSelect: "none",
                }}
              >
                ENGAGE
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------------
              Two-column panel body
          ---------------------------------------------------------------- */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "260px",
            }}
          >
            {/* Left — Build output */}
            <div
              style={{
                borderRight: "1px solid var(--border-fine)",
                padding: "0",
              }}
            >
              <div
                style={{
                  padding: "8px 20px 8px",
                  borderBottom: "1px solid var(--border-fine)",
                  background: "var(--bg-surface)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Build Output
                </span>
              </div>

              <div
                className="inset-terminal"
                style={{
                  borderRadius: 0,
                  border: "none",
                  minHeight: "220px",
                  padding: "20px",
                  lineHeight: 1.7,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isCompressed ? "compressed" : "bypassed"}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {lines.map((line, i) => (
                      <motion.div
                        key={i}
                        variants={lineVariants}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          color: line.color,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {line.text}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right — Token visualizer */}
            <div style={{ padding: "0" }}>
              <div
                style={{
                  padding: "8px 20px 8px",
                  borderBottom: "1px solid var(--border-fine)",
                  background: "var(--bg-surface)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Token Visualizer
                </span>
              </div>

              <div
                className="inset-terminal"
                style={{
                  borderRadius: 0,
                  border: "none",
                  minHeight: "220px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Dot matrix container: 192x192px, dots positioned via x/y transforms */}
                <div
                  style={{
                    position: "relative",
                    width: "192px",
                    height: "192px",
                    flexShrink: 0,
                  }}
                >
                  {Array.from({ length: DOT_COUNT }, (_, i) => {
                    const isRed = i % 3 === 0;
                    return (
                      <motion.div
                        key={i}
                        initial={{
                          x: gridX(i),
                          y: gridY(i),
                          backgroundColor: "#22c55e",
                          boxShadow: "0 0 5px rgba(34, 197, 94, 0.45)",
                          opacity: 0,
                        }}
                        animate={{
                          x: isCompressed ? gridX(i) : scatterX(i),
                          y: isCompressed ? gridY(i) : scatterY(i),
                          backgroundColor: isCompressed
                            ? "#22c55e"
                            : isRed
                              ? "#ef4444"
                              : "#f97316",
                          boxShadow: isCompressed
                            ? "0 0 5px rgba(34, 197, 94, 0.45)"
                            : "0 0 0px rgba(0,0,0,0)",
                          opacity: 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 22,
                          delay: i * 0.005,
                          opacity: { duration: 0.3 },
                        }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------
              Stat footer
          ---------------------------------------------------------------- */}
          <div
            style={{
              padding: "12px 24px",
              borderTop: "1px solid var(--border-fine)",
              background: "var(--bg-surface)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isCompressed ? "stat-on" : "stat-off"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: isCompressed ? "var(--green)" : "var(--orange)",
                }}
              >
                {isCompressed
                  ? "5,400 tokens active \u00b7 82% saved"
                  : "28,400 tokens unfiltered"}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
