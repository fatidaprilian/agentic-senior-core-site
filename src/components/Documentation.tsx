import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const docsList = [
  {
    code: 'Manual 1',
    title: 'Workspace FAQ',
    description: 'Guidelines to exclude folders, configure local backups, and resolve rules verification errors.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/faq.md'
  },
  {
    code: 'Manual 2',
    title: 'Engine Architecture',
    description: 'Detailed analysis of background setups, active memory logs, and prompt caching layers.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/deep-dive.md'
  },
  {
    code: 'Manual 3',
    title: 'Editor Sync Playbook',
    description: 'Step-by-step instructions to bind rulesets inside Cursor, VS Code, Windsurf, or Claude Code.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/integration-playbook.md'
  },
  {
    code: 'Manual 4',
    title: 'Optimization Benchmarks',
    description: 'Prompt compilation speeds, token saving benchmarks, and local cache guidelines.',
    href: 'https://github.com/fatidaprilian/Agentic-Senior-Core/blob/main/docs/benchmark-reference.md'
  }
];

const rulesets = [
  {
    id: 'arch',
    label: 'Architecture',
    rules: [
      { id: 'ARCH-*', name: 'System Structure Standards', desc: 'Enforces clean workspace structure, thin adapter layers, and validates models before editing.' },
      { id: 'NAME-*', name: 'Naming & Folder Rules', desc: 'Validates file casing, folder structures, and function variables for consistency.' },
      { id: 'API-*', name: 'API Schema Guidelines', desc: 'Validates route parameters, payload schemas, and prevents endpoint drift.' }
    ],
    codeExample: 'active_rules: [ARCH-002, NAME-001]\naction: "Review layer boundaries; check naming consistency before editing."'
  },
  {
    id: 'data',
    label: 'Database Safety',
    rules: [
      { id: 'DATA-*', name: 'Query Safety Standards', desc: 'Blocks unsafe database calls outside repositories and requires proper query indexes.' },
      { id: 'MIG-*', name: 'Safe Migrations & Schemas', desc: 'Ensures backward-compatible schema changes and verified rollback options.' },
      { id: 'SVC-*', name: 'Service Boundaries', desc: 'Controls microservices context boundaries and keeps interfaces thin.' }
    ],
    codeExample: 'active_rules: [DATA-001, MIG-002]\naction: "Verify index keys on target queries; assert rollback is compatible."'
  },
  {
    id: 'security',
    label: 'Access & Security',
    rules: [
      { id: 'SEC-*', name: 'Access Control Policies', desc: 'Blocks raw uploads, secret exposures, and ensures safe validation layers.' },
      { id: 'CFG-*', name: 'Configuration Security', desc: 'Validates runtime configs against production schemas, keeping secrets isolated.' },
      { id: 'DOCK-*', name: 'Container Governance', desc: 'Ensures container assets utilize tested official builds.' }
    ],
    codeExample: 'active_rules: [SEC-002, CFG-001]\naction: "Filter configuration scopes; ensure secrets never enter commits."'
  },
  {
    id: 'perf',
    label: 'Performance & Tests',
    rules: [
      { id: 'PERF-*', name: 'Bundle Limits & Speed', desc: 'Validates file size boundaries and enforces strict memory limits.' },
      { id: 'TEST-*', name: 'Mocks & Automated Tests', desc: 'Requires mocked API wrappers and automated test suites on complex logic.' },
      { id: 'RES-*', name: 'Resilience Circuit-Breakers', desc: 'Governs circuit-breakers, background queues, and failure isolation bounds.' }
    ],
    codeExample: 'active_rules: [PERF-001, RES-002]\naction: "Ensure memory profiles stay within parameters; mock external APIs."'
  }
];

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('arch');
  const selectedGroup = rulesets.find(g => g.id === activeTab) || rulesets[0];

  return (
    <section id="docs" className="section" aria-label="Reference schematics" style={{ paddingBlockEnd: '100px', paddingBlockStart: '80px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        
        {/* Header Section */}
        <div style={{ maxWidth: '720px', textAlign: 'left' }}>
          <span className="mono-tag" style={{ color: 'var(--color-accent)', fontWeight: 800 }}>
            Active Directory
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Rules Schematics & Handbooks
          </h2>
          <p className="text-lead" style={{ maxWidth: '640px' }}>
            Browse every standard operating manual, speed benchmark sheet, and custom ruleset built directly into your workspace.
          </p>
        </div>

        {/* 2-Column Split: Manuals Left, Active Registry Right */}
        <div className="bento-grid" style={{ gap: '24px' }}>
          
          {/* Left: 4 Manual Cards */}
          <div className="bento-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)' }}>Workspace Handbooks</span>
            
            {docsList.map((doc, i) => (
              <motion.a 
                key={i} 
                className="chassis-panel" 
                href={doc.href} 
                target="_blank" 
                rel="noopener noreferrer"
                title={`Open ${doc.title}`}
                style={{ display: 'flex', cursor: 'pointer', textDecoration: 'none', padding: '20px', borderRadius: 'var(--radius-badge)', border: '1.5px solid var(--border-fine)' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 90, damping: 18 }}
              >
                {/* selection corners */}
                <div className="chassis-panel-inner" />

                <div style={{ zIndex: 1, width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '0.72rem' }}>
                      {doc.code}
                    </span>
                    <span className="mono-tag" style={{ fontSize: '0.62rem', background: 'var(--bg-surface-tertiary)', padding: '2px 8px', borderRadius: '4px' }}>MANUAL</span>
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '6px' }}>{doc.title}</h3>
                  <p className="text-body" style={{ fontSize: '0.86rem', lineHeight: '1.4' }}>{doc.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right: Interactive 21-Rulesets Active Calibrator */}
          <div className="bento-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)' }}>Active Rules Directory</span>
            
            <div className="chassis-panel" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', borderRadius: 'var(--radius-companion)', border: '1.5px solid var(--border-fine)' }}>
              {/* selection corners */}
              <div className="chassis-panel-inner" />

              {/* Physical tabs buttons */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                marginBottom: '24px',
                borderBottom: '1.5px solid var(--border-fine)',
                paddingBottom: '16px',
                zIndex: 1
              }}>
                {rulesets.map(group => (
                  <button
                    key={group.id}
                    onClick={() => setActiveTab(group.id)}
                    className="btn-hardware"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.75rem',
                      background: activeTab === group.id ? 'var(--text-primary)' : 'var(--bg-surface-secondary)',
                      color: activeTab === group.id ? 'var(--bg-base)' : 'var(--text-primary)',
                      borderColor: activeTab === group.id ? 'var(--text-primary)' : 'var(--border-fine)',
                      borderRadius: '12px',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800
                    }}
                  >
                    {group.label}
                  </button>
                ))}
              </div>

              {/* Active Rules List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1, flexGrow: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    {selectedGroup.rules.map(rule => (
                      <div key={rule.id} style={{ display: 'flex', gap: '16px' }}>
                        <span style={{ 
                          fontFamily: 'var(--font-mono)', 
                          fontSize: '0.74rem', 
                          fontWeight: 800, 
                          color: 'var(--color-accent)',
                          minWidth: '65px'
                        }}>
                          [{rule.id}]
                        </span>
                        <div>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '2px', color: 'var(--text-primary)' }}>{rule.name}</h4>
                          <p className="text-body" style={{ fontSize: '0.84rem' }}>{rule.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Inset specs code block */}
                <div className="inset-console" style={{ marginTop: 'auto', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--color-accent)', marginBottom: '8px', fontSize: '0.72rem', fontWeight: 800 }}>// Active Guidelines Config</div>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.4', fontSize: '0.82rem' }}>{selectedGroup.codeExample}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
