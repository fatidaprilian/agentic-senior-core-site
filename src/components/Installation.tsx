import { motion } from 'framer-motion';
import { Archive, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const SetupCodeBlock = ({ command, label }: { command: string, label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="command-strip" aria-label={`CLI Command for ${label}`}>
      <div className="command-header">
        <span className="command-label">{label}</span>
      </div>
      <div className="command-body">
        <div className="command-code">
          <Archive size={16} className="command-icon" aria-hidden="true" />
          <code>{command}</code>
        </div>
        <button onClick={handleCopy} className="icon-button" aria-label="Copy Command Code">
          {copied ? <Check size={18} style={{ color: 'var(--color-stamp-approve)' }} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};

export default function Installation() {
  return (
    <section id="install" className="section section-band" aria-label="Installation Registry">
      <div className="container">
        <motion.div
          className="runbook-shell"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="runbook-summary">
            <h2 className="heading-lg">Installation & Upgrades</h2>
            <p className="text-lead">
              Initialize the oversight rule pack, then keep it current with managed upgrades.
            </p>
          </div>

          <div className="runbook-steps">
            <div className="runbook-step">
              <SetupCodeBlock
                label="Step 1: Initialize Workspace Rules"
                command="npx @ryuenn3123/agentic-senior-core init"
              />
              <p className="text-body" style={{ marginBlockStart: '8px' }}>
                Creates <code>AGENTS.md</code>, import bridges, checklists, policies, state files, and the <code>.agent-context/</code> rules catalog automatically. Token optimization is enabled by default.
              </p>
            </div>

            <div className="runbook-step">
              <SetupCodeBlock
                label="Step 2: Managed Upgrades"
                command="npx @ryuenn3123/agentic-senior-core upgrade --yes"
              />
              <p className="text-body" style={{ marginBlockStart: '8px' }}>
                Updates to the latest official rules while preserving all your custom, user-owned instructions safely.
              </p>
            </div>

            <div className="runbook-options">
              <h3 className="heading-md">Setup Options</h3>
              <ul className="option-list">
                <li>Add <code>--mcp-template</code> to generate MCP workspace configs for VS Code.</li>
                <li>Add <code>--no-token-optimize</code> if you prefer to disable compact natural model instructions.</li>
                <li>Add <code>--local-only</code> to ignore instructions in <code>.gitignore</code> so they are not pushed to remote repositories.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
