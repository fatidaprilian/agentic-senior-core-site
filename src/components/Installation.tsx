import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const CodeBlock = ({ command, label }: { command: string, label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h4 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>{label}</h4>
      </div>
      <div style={{ 
        background: 'var(--term-bg)', 
        borderRadius: '12px', 
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid var(--term-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflowX: 'auto' }}>
          <TerminalIcon size={16} color="var(--term-prompt)" />
          <code style={{ color: 'var(--term-text)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            {command}
          </code>
        </div>
        <button 
          onClick={handleCopy}
          style={{ 
            color: copied ? 'var(--term-success)' : 'var(--term-muted)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            marginLeft: '12px'
          }}
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};

export default function Installation() {
  return (
    <section id="install" className="section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Installation & Usage</h2>
            <p className="text-lead" style={{ marginBottom: '40px' }}>
              Add production-grade rules to your AI workspace in seconds. Works instantly with your favorite LLM-powered IDE.
            </p>

            <CodeBlock 
              label="1. Install & Initialize" 
              command="npx @ryuenn3123/agentic-senior-core init" 
            />
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem' }}>
              Initializes <code>AGENTS.md</code>, native import bridges, checklists, policies, state files, and the lazy <code>.agent-context/</code> rule library. Token optimization and Compact Natural Mode are enabled by default.
            </p>

            <CodeBlock 
              label="2. Upgrade Managed Rules" 
              command="npx @ryuenn3123/agentic-senior-core upgrade --yes" 
            />
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem' }}>
              Preview changes with <code>--dry-run</code>, then apply with <code>--yes</code>. Upgrade prunes obsolete managed files by default. User-owned files without Agentic markers are never overwritten.
            </p>

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-color)' }}>
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>Options</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Add <code>--mcp-template</code> to generate VS Code MCP workspace config.</li>
                <li>Add <code>--no-token-optimize</code> only when you do not want ASCX command guidance enabled.</li>
                <li>Add <code>--local-only</code> to ignore instructions in <code>.gitignore</code> so they are not pushed to GitHub.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
