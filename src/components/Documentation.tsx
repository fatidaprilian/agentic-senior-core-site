import { motion } from 'framer-motion';

const docs = [
  {
    code: 'DOC-01',
    title: 'FAQ Manual',
    description: 'Frequently asked questions covering path exclusion, local snaps, and custom rule extensions.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/faq.md'
  },
  {
    code: 'DOC-02',
    title: 'Deep Dive Internals',
    description: 'Detailed analysis of ascx interceptors, tee outputs, active memory logs, and rule metrics.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/deep-dive.md'
  },
  {
    code: 'DOC-03',
    title: 'Integration Playbook',
    description: 'Step-by-step guidance to bind the rules engine to Cursor, Windsurf, Claude Code, and Copilot.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/integration-playbook.md'
  },
  {
    code: 'DOC-04',
    title: 'Benchmark & Stack Reference',
    description: 'Token optimization logs, caching boundaries, and provider-free benchmarks.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/benchmark-reference.md'
  }
];

export default function Documentation() {
  return (
    <section id="docs" className="section" aria-label="Reference Documentation">
      <div className="container">
        <div style={{ marginBottom: '64px', maxWidth: '800px', textAlign: 'center', marginInline: 'auto' }}>
          <span style={{ 
            color: 'var(--color-accent)', 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase' 
          }}>
            Archive Registry
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '24px' }}>
            Comprehensive Reference
          </h2>
          <p className="text-lead">
            Every file, standard operating procedure, and deep-dive technical manual is stored file-first in your workspace.
          </p>
        </div>

        <div className="bento-grid">
          {docs.map((doc, i) => (
            <motion.a 
              key={i} 
              className="bento-card" 
              href={doc.href} 
              target="_blank" 
              rel="noopener noreferrer"
              title={`Read ${doc.title}`}
              style={{ display: 'flex', cursor: 'pointer', textDecoration: 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                    {doc.code}
                  </span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '12px' }}>{doc.title}</h3>
                <p className="text-body" style={{ color: 'var(--text-muted)' }}>{doc.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
