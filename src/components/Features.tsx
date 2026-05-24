import { motion } from 'framer-motion';

const featureList = [
  {
    code: 'I',
    title: 'Dynamic Filtering',
    description: 'Only the essential rule files required by the current task surface are loaded. Context noise is utterly eliminated.',
  },
  {
    code: 'II',
    title: 'Evidence Trail',
    description: 'The complete reasoning trail and strict rule check history are permanently preserved as an immutable ledger.',
  },
  {
    code: 'III',
    title: 'Unified Gates',
    description: 'Architecture, security, UI design, and testing checklists are automatically enforced prior to any commit.',
  },
  {
    code: 'IV',
    title: 'Token Memory',
    description: 'Code logs are structurally optimized while preserving core context, maximizing true window efficiency.',
  }
];

export default function Features() {
  return (
    <section id="features" style={{ paddingBlock: '60px', width: '100%' }} aria-label="Product Features">
      <div className="container">
        <div style={{ marginBottom: '80px', maxWidth: '800px', textAlign: 'center', marginInline: 'auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '40px' }}>OVERSIGHT</h2>
          <div className="gold-line"></div>
          <p className="text-lead" style={{ marginInline: 'auto' }}>
            Every capability is structured as a verifiable gate. <br/> A masterpiece of friction-less control.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {featureList.map((item, index) => (
            <motion.article
              key={item.code}
              className="exhibition-plate"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: index * 0.2, duration: 1.5, ease: 'easeOut' }}
            >
              <div className="eyebrow" style={{ marginBottom: '24px', color: 'var(--color-accent)' }}>CHAPTER {item.code}</div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: '24px' }}>{item.title}</h3>
                <p className="text-body" style={{ maxWidth: '300px', marginInline: 'auto' }}>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
