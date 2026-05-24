import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ArtSetupCodeBlock = ({ command, label }: { command: string, label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="exhibition-plate" style={{ borderTop: label === 'II. MANAGED UPGRADES' ? 'none' : '1px solid var(--border-fine)' }}>
      <div className="eyebrow" style={{ marginBottom: '24px', color: 'var(--color-accent)' }}>{label}</div>
      <div className="art-terminal" style={{ 
        padding: '24px', 
        background: 'transparent', 
        border: 'none', 
        borderBottom: '1px solid var(--border-fine)', 
        maxWidth: '460px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        <code>{command}</code>
        <button 
          onClick={handleCopy} 
          aria-label="Copy Command" 
          title="Copy to clipboard"
          style={{ 
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '32px', 
            height: '32px', 
            border: '1px solid var(--border-fine)',
            borderRadius: '0',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};

export default function Installation() {
  return (
    <section id="install" className="section" style={{ paddingBlock: '60px', width: '100%' }} aria-label="Installation Guide">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '40px' }}>ACCESSION</h2>
          <div className="gold-line"></div>
          <p className="text-lead" style={{ marginBottom: '60px' }}>
            Initialize the rule pack with a single command.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <ArtSetupCodeBlock
              label="I. INITIALIZE WORKSPACE"
              command="npx @ryuenn3123/agentic-senior-core init"
            />
            <ArtSetupCodeBlock
              label="II. MANAGED UPGRADES"
              command="npx @ryuenn3123/agentic-senior-core upgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
