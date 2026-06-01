import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
const HERO_LINES = ["AGENTIC", "SENIOR", "CORE"] as const;
const SCRAMBLE_DURATION_MS = 1200;
const SCRAMBLE_INTERVAL_MS = 40;

const RECEIPT_ROWS: Array<{
  key: string;
  value: string;
  accent?: boolean;
}> = [
  { key: "loaded_files", value: "architecture.md, security.md" },
  {
    key: "selected_rules",
    value: "ARCH-001, SEC-003, PERF-002",
    accent: true,
  },
  { key: "skipped_rules", value: "docker-runtime.md" },
  {
    key: "validation_plan",
    value: "npm run validate \u2192 tsc",
    accent: true,
  },
];

const TYPING_COMMAND = "$ ascx npm run validate";

// ─── HOOKS ────────────────────────────────────────────────────────────────────

/**
 * Scrambles a word's characters left-to-right over `duration` ms.
 * Returns the current display string and whether scramble is complete.
 */
function useScramble(
  word: string,
  startDelay: number,
  duration: number,
): { display: string; done: boolean } {
  const [display, setDisplay] = useState(() =>
    word.replace(/./g, SCRAMBLE_CHARS[0]),
  );
  const [done, setDone] = useState(false);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (startedRef.current) return;
      startedRef.current = true;

      const totalFrames = Math.ceil(duration / SCRAMBLE_INTERVAL_MS);
      // Each character resolves over an equal share of frames, left-to-right.
      const framesPerChar = totalFrames / word.length;
      let frame = 0;

      frameRef.current = setInterval(() => {
        frame++;
        const resolvedCount = Math.min(
          Math.floor(frame / framesPerChar),
          word.length,
        );
        const scrambled = word
          .split("")
          .map((char, i) => {
            if (i < resolvedCount) return char;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("");
        setDisplay(scrambled);

        if (resolvedCount >= word.length) {
          setDisplay(word);
          setDone(true);
          if (frameRef.current) clearInterval(frameRef.current);
        }
      }, SCRAMBLE_INTERVAL_MS);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [word, startDelay, duration]);

  return { display, done };
}

/**
 * Types a string character-by-character after an initial delay.
 */
function useTyping(
  text: string,
  startDelay: number,
  charIntervalMs: number,
): string {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setTyped(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, charIntervalMs);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, startDelay, charIntervalMs]);

  return typed;
}

// ─── MAGNETIC BUTTON ──────────────────────────────────────────────────────────

interface MagneticButtonProps {
  href: string;
  target?: string;
  rel?: string;
  className: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function MagneticButton({
  href,
  target,
  rel,
  className,
  children,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const springConfig = { stiffness: 300, damping: 20, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const MAX_PULL = 8;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.max(rect.width, rect.height) * 1.5;
    const factor = Math.max(0, 1 - dist / maxDist);
    x.set(dx * factor * (MAX_PULL / maxDist) * maxDist);
    y.set(dy * factor * (MAX_PULL / maxDist) * maxDist);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ ...style, x, y }}
      whileHover={{ y: -2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}

// ─── SCRAMBLE LINE ────────────────────────────────────────────────────────────

interface ScrambleLineProps {
  word: string;
  startDelay: number;
  motionDelay: number;
  isLast: boolean;
  allDone: boolean;
}

function ScrambleLine({
  word,
  startDelay,
  motionDelay,
  isLast,
  allDone,
}: ScrambleLineProps) {
  const { display, done } = useScramble(word, startDelay, SCRAMBLE_DURATION_MS);
  // Show cursor for 1.5s after last line resolves, then fade it out.
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorFaded, setCursorFaded] = useState(false);

  useEffect(() => {
    if (!isLast || !allDone) return;
    const fadeTimer = setTimeout(() => setCursorFaded(true), 1500);
    const removeTimer = setTimeout(() => setCursorVisible(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [isLast, allDone]);

  return (
    <motion.div
      className="display-hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: motionDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label={word}
    >
      {display}
      {isLast && done && cursorVisible && (
        <span
          className="cursor-bar"
          style={{
            marginLeft: "4px",
            height: "0.75em",
            opacity: cursorFaded ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </motion.div>
  );
}

// ─── RECEIPT PANEL ────────────────────────────────────────────────────────────

function ReceiptPanel() {
  const typedCommand = useTyping(TYPING_COMMAND, 1500, 40);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.58, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "28px",
        borderRadius: "var(--radius-xl)",
      }}
      aria-label="Bootstrap Receipt panel"
    >
      {/* Traffic lights + badge header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "16px",
          borderBottom: "1px solid var(--border-fine)",
          marginBottom: "20px",
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {(
            [
              { color: "#ef4444", label: "close" },
              { color: "#f59e0b", label: "minimize" },
              { color: "#22c55e", label: "maximize" },
            ] as const
          ).map(({ color, label }) => (
            <span
              key={label}
              aria-label={label}
              style={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                flexShrink: 0,
              }}
            />
          ))}
        </div>
        <span className="badge">Bootstrap Receipt</span>
      </div>

      {/* Receipt rows */}
      <motion.div
        className="receipt-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {RECEIPT_ROWS.map(({ key, value, accent }) => (
          <motion.div key={key} variants={rowVariants}>
            <span className="receipt-key">{key}</span>
            <span
              style={{
                color: "var(--text-muted)",
                marginRight: "4px",
              }}
            >
              :{" "}
            </span>
            {accent ? (
              <span className="receipt-accent">{value}</span>
            ) : (
              <span className="receipt-val">{value}</span>
            )}
          </motion.div>
        ))}

        {/* Typing command line */}
        <motion.div variants={rowVariants} style={{ marginTop: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent)",
            }}
          >
            {typedCommand}
            {typedCommand.length < TYPING_COMMAND.length && (
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "0.8em",
                  backgroundColor: "var(--accent)",
                  verticalAlign: "middle",
                  marginLeft: "1px",
                  opacity: cursorOn ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            )}
          </span>
        </motion.div>
      </motion.div>

      {/* Status bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "1px solid var(--border-fine)",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              display: "block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--green)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
            }}
          >
            Active
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--text-muted)",
          }}
        >
          agentic-senior-core &middot; v4.0
        </span>
      </div>
    </motion.div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  // Hoist CORE's scramble completion here so ScrambleLine can receive it
  // as a prop without duplicating scramble state or using setState in an effect.
  const { done: coreDone } = useScramble("CORE", 200, SCRAMBLE_DURATION_MS);

  const STAGGER = 0.15;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hero-grid {
              display: grid;
              grid-template-columns: 60fr 40fr;
              gap: 48px;
              align-items: center;
            }
            .hero-right {
              display: block;
            }
            @media (max-width: 768px) {
              .hero-grid {
                grid-template-columns: 1fr;
              }
              .hero-right {
                display: none;
              }
            }
            @media (min-width: 640px) and (max-width: 768px) {
              .hero-right {
                display: block;
              }
            }
            .hero-stat-divider {
              width: 1px;
              align-self: stretch;
              background: var(--border-fine);
            }
          `,
        }}
      />

      <section
        className="section"
        style={{
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Hero — The Authored Signal"
      >
        <div className="container">
          <div className="hero-grid">
            {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
            <div>
              {/* 1. Entry badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                style={{ marginBottom: "28px" }}
              >
                <span
                  className="badge"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  v4.0 &middot; 21 Rules &middot; WCAG AA
                </span>
              </motion.div>

              {/* 2. Hero headline with text scramble */}
              <div
                style={{ marginBottom: "0" }}
                role="heading"
                aria-level={1}
                aria-label="Agentic Senior Core"
              >
                {HERO_LINES.map((word, i) => (
                  <ScrambleLine
                    key={word}
                    word={word}
                    startDelay={0}
                    motionDelay={i * STAGGER}
                    isLast={i === HERO_LINES.length - 1}
                    allDone={coreDone}
                  />
                ))}
              </div>

              {/* 3. Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  color: "var(--text-muted)",
                  maxWidth: "380px",
                  marginTop: "24px",
                  lineHeight: 1.4,
                }}
              >
                Give your AI a spine.
              </motion.p>

              {/* 4. Sub-copy */}
              <motion.p
                className="text-lead"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                style={{ maxWidth: "400px", marginTop: "12px" }}
              >
                A production-grade rules engine that enforces staff-engineer
                architectural invariants across every AI coding session.
              </motion.p>

              {/* 5. CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "36px",
                }}
              >
                <MagneticButton href="#install" className="btn btn-primary">
                  Get started
                  <ArrowRight size={16} aria-hidden="true" />
                </MagneticButton>

                <MagneticButton
                  href="https://github.com/fatidaprilian/Agentic-Senior-Core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  GitHub
                  <ExternalLink size={14} aria-hidden="true" />
                </MagneticButton>
              </motion.div>

              {/* 6. Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: "24px",
                  marginTop: "36px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {(
                  [
                    { number: "21", label: "Rule layers" },
                    { number: "80%", label: "Token reduction" },
                    { number: "9", label: "Governance layers" },
                  ] as const
                ).map(({ number, label }, i) => (
                  <>
                    {i > 0 && (
                      <div
                        key={`divider-${i}`}
                        className="hero-stat-divider"
                        aria-hidden="true"
                      />
                    )}
                    <div key={number + label}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "1.4rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.1,
                        }}
                      >
                        {number}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginTop: "4px",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  </>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN ─────────────────────────────────────────── */}
            <div className="hero-right">
              <ReceiptPanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
