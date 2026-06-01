import { motion } from "motion/react";

const features = [
  {
    code: "ARCH-001",
    title: "Loads only the right rules",
    body: "The context command selects the smallest relevant rule set for the current task instead of flooding the agent with every policy file.",
    metric: "9 layers",
  },
  {
    code: "PERF-001",
    title: "Compresses noisy command output",
    body: "ASCX wrappers keep terminal output readable and compact, so builds and tests do not waste the agent context window.",
    metric: "up to 80% less noise",
  },
  {
    code: "TEST-001",
    title: "Forces validation before done",
    body: "Every meaningful change carries a validation plan, and completion requires the relevant checks instead of vibes-based confidence.",
    metric: "validation gate",
  },
  {
    code: "FE-015",
    title: "Keeps responses usable",
    body: "Compact-natural-mode removes filler while preserving exact commands, file paths, assumptions, and validation evidence.",
    metric: "less slop",
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
