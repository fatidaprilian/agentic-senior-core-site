const docs = [
  {
    code: 'DOC-01',
    title: 'AGENTS.md',
    description: 'Canonical governance contract and agent instructions baseline.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/AGENTS.md'
  },
  {
    code: 'DOC-02',
    title: '.agent-context/',
    description: 'Rules library containing Layer 1 to 9 governance guidelines.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/tree/main/.agent-context'
  },
  {
    code: 'DOC-03',
    title: 'Checklists & Policies',
    description: 'Strict quality thresholds, security checks, and PR checklists.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/tree/main/.agent-context/rules'
  }
];

export default function Documentation() {
  return (
    <section id="docs" className="section section-band" aria-label="Accession Documentation Indexes">
      <div className="container">
        <div className="section-head">
          <h2 className="heading-lg">Accession Indexes</h2>
          <p className="text-lead">
            Everything is stored file-first in your workspace so you can audit, customize, and version-control all rules.
          </p>
        </div>

        <div className="docs-stack">
          {docs.map((doc) => (
            <a 
              key={doc.code} 
              className="doc-card" 
              href={doc.href} 
              target="_blank" 
              rel="noopener noreferrer"
              title={`Read ${doc.title}`}
            >
              <div className="doc-code">{doc.code} // INDEX</div>
              <div>
                <div className="heading-md">{doc.title}</div>
                <p className="text-body" style={{ marginBlockStart: '6px' }}>{doc.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
