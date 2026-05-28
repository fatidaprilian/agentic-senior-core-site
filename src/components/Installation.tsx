import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SetupBlock = ({ command, label, desc, step }: { command: string, label: string, desc: string, step: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className="chassis-panel"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 90, damping: 18 }}
      style={{ 
        padding: '24px', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        borderRadius: 'var(--radius-companion)',
        border: '1.5px solid var(--border-fine)'
      }}
    >
      {/* Corner selection anchors */}
      <div className="chassis-panel-inner" />

      {/* Block Header details */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-accent)' }}>
            {step}. {label}
          </span>
          <p className="text-body" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {desc}
          </p>
        </div>
        <span className="mono-tag" style={{ fontSize: '0.65rem', background: 'var(--bg-surface-tertiary)', padding: '4px 10px', borderRadius: '9999px' }}>Command</span>
      </div>

      {/* Copyable Console container */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--bg-surface-tertiary)',
        border: '1.5px solid var(--border-fine)',
        borderRadius: '12px',
        padding: '12px 16px',
        width: '100%',
        gap: '16px',
        zIndex: 1,
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <code style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.84rem', 
          color: 'var(--text-primary)', 
          wordBreak: 'break-all',
          textAlign: 'left',
          fontWeight: 600
        }}>
          {command}
        </code>
        
        {/* Copy trigger */}
        <button
          onClick={handleCopy}
          aria-label={`Copy command for ${label}`}
          title="Copy command"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '34px',
            height: '34px',
            borderRadius: '10px',
            border: '1.5px solid var(--border-fine)',
            color: copied ? 'var(--color-green)' : 'var(--text-muted)',
            backgroundColor: 'var(--bg-base)',
            transition: 'all 0.2s',
            cursor: 'pointer',
            boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
          }}
          onMouseEnter={(e) => {
            if (!copied) e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            if (!copied) e.currentTarget.style.borderColor = 'var(--border-fine)';
          }}
        >
          {copied ? (
            <Check size={14} style={{ filter: 'drop-shadow(0 0 4px var(--color-green))' }} />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default function Installation() {
  return (
    <section id="install" className="section" aria-label="Setup Guides" style={{ paddingBlock: '80px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '48px', maxWidth: '720px', textAlign: 'left' }}>
          <span className="mono-tag" style={{ color: 'var(--color-accent)', fontWeight: 800 }}>
            Setup & Onboarding
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Initialize your workspace in seconds
          </h2>
          <p className="text-lead" style={{ maxWidth: '640px' }}>
            Set up active rules and compiler scripts inside your project directories using these quick terminal commands.
          </p>
        </div>

        {/* Configuration stack */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '20px', 
          width: '100%', 
          maxWidth: '800px' 
        }}>
          <SetupBlock
            step="1"
            label="Initialize AI Rules Engine"
            desc="Generates core files, coding rules checklists, local directories, and active memory registries."
            command="npx @ryuenn3123/agentic-senior-core init"
          />
          <SetupBlock
            step="2"
            label="Generate Code Editor Sync"
            desc="Enables real-time MCP communication with Cursor, Windsurf, Claude Code, or VS Code."
            command="npx @ryuenn3123/agentic-senior-core init --mcp-template"
          />
          <SetupBlock
            step="3"
            label="Update Workspace Rules"
            desc="Upgrades active rule presets to the latest version and prunes outdated guidelines."
            command="npx @ryuenn3123/agentic-senior-core upgrade --yes"
          />
        </div>
      </div>
    </section>
  );
}
