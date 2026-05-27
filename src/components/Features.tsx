import { motion } from 'framer-motion';

const featureList = [
  {
    code: '01',
    wide: true,
    title: 'Adaptive Context',
    description: 'Only the essential rule files required by the current task surface are loaded. Eliminates context noise completely and maximizes attention window efficiency by pulling from 21 target-scoped rule libraries (architecture, security, background jobs, migrations, config).',
    tag: 'Layer 1-9 Rules'
  },
  {
    code: '02',
    wide: false,
    title: 'ASCX Command Wrappers',
    description: 'Dynamically compresses verbose shell outputs (tests, git status, builds) before they hit the agent context, saving up to 80% of token overhead while preserving exit codes and error logs.',
    tag: 'Token Saver Runtime'
  },
  {
    code: '03',
    wide: false,
    title: 'Compact Natural Mode',
    description: 'A structural prompt-level contract that guarantees concise, factual, and compact replies from the agent, completely avoiding verbose filler text while preserving paths, errors, and actions.',
    tag: 'Response Efficiency'
  },
  {
    code: '04',
    wide: true,
    title: 'Model Context Protocol (MCP) Server',
    description: 'A native stdio workspace server for VS Code, Cursor, and Windsurf. Provides real-time rule compliance diagnostics, checklists, and active memory logs directly inside your interactive chat workspace.',
    tag: 'IDE Workspace Integration'
  }
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Product Features">
      <div className="container">
        <div style={{ marginBottom: '64px', maxWidth: '800px', textAlign: 'center', marginInline: 'auto' }}>
          <span style={{ 
            color: 'var(--color-accent)', 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase' 
          }}>
            Oversight Infrastructure
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '24px' }}>
            Built for Staff-Grade Performance
          </h2>
          <p className="text-lead">
            Every capability is engineered to establish strict architectural boundaries while minimizing LLM token overhead.
          </p>
        </div>

        <div className="bento-grid">
          {featureList.map((item, index) => (
            <motion.div
              key={item.code}
              className={`bento-card ${item.wide ? 'bento-wide' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--color-accent)', 
                    fontWeight: 600,
                    background: 'var(--hover-bg)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.tag}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    [{item.code}]
                  </span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
