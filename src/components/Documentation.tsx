const docs = [
  {
    code: 'DOC-01',
    title: 'AGENTS.md',
    description: 'Canonical governance contract and agent instructions baseline.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/AGENTS.md'
  },
  {
    code: 'DOC-02',
    title: '.agent-context',
    description: 'Library containing Layer 1 to 9 guidelines.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/tree/main/.agent-context'
  },
  {
    code: 'DOC-03',
    title: 'Policies',
    description: 'Strict thresholds, security checks, and checklists.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/tree/main/.agent-context/rules'
  }
];

export default function Documentation() {
  return (
    <section id="docs" style={{ paddingBlock: '60px', width: '100%' }} aria-label="Reference Documentation">
      <div className="container">
        <div style={{ marginBottom: '80px', maxWidth: '800px', textAlign: 'center', marginInline: 'auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '40px' }}>ARCHIVE</h2>
          <div className="gold-line"></div>
          <p className="text-lead" style={{ marginInline: 'auto' }}>
            Stored file-first in your workspace. Audit, customize, and version-control all rules effortlessly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {docs.map((doc, i) => (
            <a 
              key={i} 
              className="exhibition-plate" 
              href={doc.href} 
              target="_blank" 
              rel="noopener noreferrer"
              title={`Read ${doc.title}`}
              style={{ display: 'block', cursor: 'pointer' }}
            >
              <div className="eyebrow" style={{ marginBottom: '16px', color: 'var(--color-accent)' }}>{doc.code}</div>
              <div className="heading-md" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>{doc.title}</div>
              <p className="text-body" style={{ maxWidth: '280px', marginInline: 'auto' }}>{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
