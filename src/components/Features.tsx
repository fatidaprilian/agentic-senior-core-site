import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

type BadgeVariant = "badge-accent" | "badge-violet";

interface Feature {
  number: string;
  badge: string;
  badgeVariant: BadgeVariant;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    number: "01",
    badge: "ARCH-001",
    badgeVariant: "badge-violet",
    title: "Smart Context Loading",
    description:
      "Scans your workspace and loads only the specific rule layers required for the active task. Keeps prompt contexts lean, saves AI memory, and eliminates token overhead instantly.",
    stat: "9x",
    statLabel: "Context precision",
    accent: "var(--violet)",
  },
  {
    number: "02",
    badge: "PERF-001",
    badgeVariant: "badge-accent",
    title: "Token Compression Engine",
    description:
      "Intercepts ASCX wrapper calls to filter 80% of redundant build output, duplicate instructions, and verbose shell logs before they reach the AI context window.",
    stat: "80%",
    statLabel: "Token reduction",
    accent: "var(--accent)",
  },
  {
    number: "03",
    badge: "API-001",
    badgeVariant: "badge-violet",
    title: "Response Structure Enforcement",
    description:
      "Enforces a compact-natural-mode response contract. Guarantees short, evidence-backed answers with zero filler. Cuts conversational noise at the rule level.",
    stat: "5x",
    statLabel: "Signal-to-noise ratio",
    accent: "var(--violet)",
  },
  {
    number: "04",
    badge: "CFG-001",
    badgeVariant: "badge-accent",
    title: "Native Editor Sync",
    description:
      "Binds rule checklists and validation pipelines directly into Cursor, VS Code, Windsurf, and Claude Code via MCP configuration — no manual setup required.",
    stat: "4",
    statLabel: "Editors supported",
    accent: "var(--accent)",
  },
];

// ─── Card animation helper ────────────────────────────────────────────────────
// Returns the target animate object for each card based on its position
// relative to the currently active card.
//
//  diff < 0  → card has been seen — flies off above
//  diff = 0  → active card — front and centre
//  diff > 0  → queued card — stacked behind, scaled down
//
// All y values are in px so Framer Motion never has to interpolate
// between incompatible types.

const STACK_Y = [0, 22, 40, 54] as const;
const STACK_SCALE = [1, 0.95, 0.9, 0.85] as const;

function getCardAnimate(index: number, activeIndex: number) {
  const diff = index - activeIndex;

  if (diff < 0) {
    // Gone — shifted far above viewport
    return { y: -900, scale: 1, opacity: 0 };
  }

  if (diff === 0) {
    // Active card
    return { y: 0, scale: 1, opacity: 1 };
  }

  // Queued cards stacked behind
  const d = Math.min(diff, 3) as 0 | 1 | 2 | 3;
  return {
    y: STACK_Y[d],
    scale: STACK_SCALE[d],
    opacity: 1,
  };
}

// ─── Mobile responsive CSS ────────────────────────────────────────────────────

const MOBILE_STYLES = `
  @media (max-width: 768px) {
    .features-scroll-region {
      height: auto !important;
    }
    .features-sticky-area {
      position: static !important;
      height: auto !important;
      overflow: visible !important;
      padding-bottom: 64px;
    }
    .features-card-stack {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      display: flex !important;
      flex-direction: column;
      gap: 20px;
    }
    .features-card-stack > article {
      position: static !important;
      inset: auto !important;
      height: auto !important;
      min-height: 320px;
    }
    .features-progress-row {
      display: none !important;
    }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Features() {
  // The scroll region is a separate div below the header that owns
  // the 400vh height. This keeps the header in normal flow so it
  // scrolls past without eating into the card-transition progress.
  const scrollRegionRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Keep isMobile in sync on resize
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // scrollYProgress goes 0→1 as the scroll region passes through
  // the viewport (start-start to end-end).
  const { scrollYProgress } = useScroll({
    target: scrollRegionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(
      Math.min(FEATURES.length - 1, Math.floor(v * FEATURES.length)),
    );
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOBILE_STYLES }} />

      <section
        id="features"
        aria-label="Capabilities"
        className="section"
        style={{
          paddingBlock: 0,
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {/* ── Section header — normal document flow ────────────────────── */}
        <div
          className="container"
          style={{ paddingTop: 96, paddingBottom: 56 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ maxWidth: 600 }}
          >
            <span
              className="label-mono"
              style={{ display: "block", marginBottom: 12 }}
            >
              Capabilities
            </span>
            <h2 className="heading-lg" style={{ marginBottom: 16 }}>
              What the engine does
            </h2>
            <p className="text-lead" style={{ maxWidth: 520 }}>
              Four precision systems working together to strip noise, enforce
              structure, and keep AI responses accurate and lean.
            </p>
          </motion.div>
        </div>

        {/* ── Scroll region: owns the 400 vh height ───────────────────── */}
        <div
          ref={scrollRegionRef}
          className="features-scroll-region"
          style={{ height: isMobile ? "auto" : "400vh", position: "relative" }}
        >
          {/* Sticky viewport */}
          <div
            className="features-sticky-area"
            style={{
              position: "sticky",
              top: 60,
              height: "calc(100vh - 60px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ── Card stack ─────────────────────────────────────────── */}
            <div
              className="features-card-stack"
              style={{
                position: "relative",
                width: "min(640px, calc(100vw - 64px))",
                height: "min(460px, calc(100vh - 200px))",
              }}
            >
              {FEATURES.map((feature, index) => (
                <motion.article
                  key={feature.number}
                  className="card"
                  aria-hidden={index !== activeIndex}
                  animate={getCardAnimate(index, activeIndex)}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 28,
                    mass: 0.9,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "clamp(28px, 4vw, 44px)",
                    borderRadius: "var(--radius-xl)",
                    display: "flex",
                    flexDirection: "column",
                    transformOrigin: "top center",
                    zIndex: FEATURES.length - index,
                    // Subtle per-card background tint so stacked cards
                    // are visually distinct even when close in colour
                    background: "var(--bg-surface-secondary)",
                  }}
                >
                  {/* Top row: number + badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 28,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {feature.number} /{" "}
                      {String(FEATURES.length).padStart(2, "0")}
                    </span>
                    <span className={`badge ${feature.badgeVariant}`}>
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                        fontWeight: 600,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                        marginBottom: 14,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-body"
                      style={{ maxWidth: 480, lineHeight: 1.65 }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom stat */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 28,
                      borderTop: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                          fontWeight: 700,
                          lineHeight: 1,
                          color: feature.accent,
                        }}
                      >
                        {feature.stat}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          fontWeight: 500,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          marginTop: 6,
                        }}
                      >
                        {feature.statLabel}
                      </div>
                    </div>

                    {/* Swipe hint (desktop only) — fades out after first card */}
                    {index === activeIndex && index < FEATURES.length - 1 && (
                      <motion.span
                        key={`hint-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        scroll for next ↓
                      </motion.span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* ── Progress indicator ──────────────────────────────────── */}
            <div
              className="features-progress-row"
              role="tablist"
              aria-label="Feature navigation"
              style={{
                position: "absolute",
                bottom: 28,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {FEATURES.map((_, i) => (
                <motion.div
                  key={i}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Feature ${i + 1} of ${FEATURES.length}`}
                  animate={{
                    width: activeIndex === i ? 24 : 8,
                    background:
                      activeIndex === i
                        ? "var(--accent)"
                        : "var(--border-strong)",
                    opacity: activeIndex === i ? 1 : 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  style={{ height: 8, borderRadius: 4 }}
                />
              ))}

              {/* Numeric counter */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  marginLeft: 6,
                  letterSpacing: "0.04em",
                  minWidth: 32,
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;
                {String(FEATURES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
