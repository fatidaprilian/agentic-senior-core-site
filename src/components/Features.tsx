import { motion } from 'framer-motion';

const featureList = [
  {
    code: 'F-01',
    title: 'Dynamic Scope Filtering',
    description: 'Loads only the rule files required by the current task surface and hides the rest to minimize context noise.',
  },
  {
    code: 'F-02',
    title: 'Oversight Evidence Trail',
    description: 'Preserves the complete reasoning trail and rule check history permanently inside your workspace.',
  },
  {
    code: 'F-03',
    title: 'Unified Checklist Gates',
    description: 'Enforces strict architecture, security, UI design, and testing checklists automatically before any commit.',
  },
  {
    code: 'F-04',
    title: 'Compact Token Memory',
    description: 'Optimizes code logs while preserving core context, maximizing token and context window efficiency.',
  }
];

export default function Features() {
  return (
    <section id="features" className="section section-band" aria-label="Product Features Ledger">
      <div className="container">
        <div className="section-head">
          <h2 className="heading-lg">Verification & Oversight Ledger</h2>
          <p className="text-lead">
            Every rule capability is structured as a verifiable gate you can audit, not a promise you must trust.
          </p>
        </div>

        <div className="evidence-ledger">
          {featureList.map((item, index) => (
            <motion.article
              key={item.code}
              className="evidence-row"
              initial={{ opacity: 0, scale: 0.98, rotate: -0.4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="evidence-code">{item.code} // FEATURE</div>
              <div>
                <h3 className="heading-md">{item.title}</h3>
                <p className="text-body" style={{ marginBlockStart: '8px' }}>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
