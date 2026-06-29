import { motion } from "motion/react";

const features = [
  {
    code: "PLUG-001",
    title: "Universal Plugin System",
    body: "Supports 23+ AI coding hosts at two tiers. Plugin-tier hosts get automatic hook injection, while instruction-tier hosts get a single adapter file.",
    metric: "23+ hosts",
  },
  {
    code: "CORE-001",
    title: "Always-on Invariants",
    body: "Short, high-signal rules injected on every session start. Enforces code quality, security, and response compactness without burning token budget.",
    metric: "~1.2k tokens",
  },
  {
    code: "SKIL-001",
    title: "On-demand Skills",
    body: "Long-form workflow guidance is kept out of the main prompt and only loaded when explicitly invoked via the skills directory.",
    metric: "zero idle cost",
  },
  {
    code: "PERF-001",
    title: "Caching Optimized",
    body: "Consolidating universal rules into a single always-on file maximizes prompt cache hits across subagents, reducing API costs.",
    metric: "cost savings",
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.3 }}
          style={{ maxWidth: 680, marginBottom: 28 }}
        >
          <span className="label-mono">Capabilities</span>
          <h2
            className="heading-lg"
            style={{ marginTop: 10, marginBottom: 14 }}
          >
            What the engine does
          </h2>
          <p className="text-lead">
            Four practical systems working together to strip noise, enforce
            structure, and keep AI responses accurate and lean.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.code}
              className="neo-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              style={{
                padding: 22,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "start",
                }}
              >
                <span
                  className={
                    index % 2 === 0 ? "badge badge-violet" : "badge badge-live"
                  }
                >
                  {feature.code}
                </span>
                <span className="label-mono">0{index + 1}</span>
              </div>
              <h3
                className="heading-md"
                style={{ marginTop: 24, marginBottom: 12 }}
              >
                {feature.title}
              </h3>
              <p className="text-body">{feature.body}</p>
              <div
                className="neo-card-soft"
                style={{ marginTop: "auto", padding: 12 }}
              >
                <span className="label-mono">{feature.metric}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
