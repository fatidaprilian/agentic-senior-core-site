import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const SetupBlock = ({ command, label, desc }: { command: string, label: string, desc: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bento-card" style={{ padding: '24px', width: '100%', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontWeight: 600 }}>
          {label}
        </span>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {desc}
        </p>
      </div>

      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--bg-base)',
        border: '1px solid var(--border-fine)',
        borderRadius: '6px',
        padding: '12px 16px',
        width: '100%',
        gap: '16px'
      }}>
        <code style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.85rem', 
          color: 'var(--text-primary)', 
          wordBreak: 'break-all',
          textAlign: 'left'
        }}>
          {command}
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy command to clipboard"
          title="Copy command"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '32px',
            height: '32px',
            borderRadius: '4px',
            border: '1px solid var(--border-fine)',
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-surface-secondary)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          {copied ? <Check size={14} style={{ color: '#27c93f' }} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};

export default function Installation() {
  return (
    <section id="install" className="section" aria-label="Installation Guide">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '64px', maxWidth: '800px', textAlign: 'center' }}>
          <span style={{ 
            color: 'var(--color-accent)', 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase' 
          }}>
            Accession Setup
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '24px' }}>
            Initialize in One Command
          </h2>
          <p className="text-lead">
            Easily bootstrap your project with the production-ready developer oversight pack.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '24px', 
          width: '100%', 
          maxWidth: '800px' 
        }}>
          <SetupBlock
            label="I. STANDARD INITIALIZATION"
            desc="Generates AGENTS.md, native IDE config bridges, and the lazy rule library."
            command="npx @ryuenn3123/agentic-senior-core init"
          />
          <SetupBlock
            label="II. VS CODE MCP TEMPLATE"
            desc="Generates workspace Model Context Protocol configuration inside .vscode/mcp.json."
            command="npx @ryuenn3123/agentic-senior-core init --mcp-template"
          />
          <SetupBlock
            label="III. SYSTEM UPGRADES"
            desc="Upgrades managed rule files and prunes obsolete context configurations."
            command="npx @ryuenn3123/agentic-senior-core upgrade --yes"
          />
        </div>
      </div>
    </section>
  );
}
