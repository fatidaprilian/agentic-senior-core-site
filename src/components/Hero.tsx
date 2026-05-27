import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Hero() {
  const [version, setVersion] = useState('4.2.9');

  useEffect(() => {
    fetch('https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.version) {
          setVersion(data.version);
        }
      })
      .catch(() => {
        // Fallback to initial version silently on network errors
      });
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section" id="top" aria-label="Product Launch Deck" style={{ width: '100%', minHeight: '90vh', display: 'flex', alignItems: 'center', paddingBlockStart: '120px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={itemVariants} className="callout-box" style={{ 
            maxWidth: 'fit-content', 
            marginBottom: '24px', 
            padding: '8px 16px', 
            fontSize: '0.8rem', 
            fontWeight: 500,
            borderRadius: '100px',
            border: '1px solid var(--border-fine)',
            borderLeft: '1px solid var(--border-fine)',
            background: 'var(--bg-surface-secondary)'
          }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Version {version}</span>
            <span style={{ color: 'var(--text-muted)', marginInline: '8px' }}>|</span>
            <span style={{ color: 'var(--text-primary)' }}>Token Saver Adaptors Active</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-xl" style={{ marginBlockEnd: '24px', maxWidth: '900px' }}>
            Change your AI Agent to code like a <span style={{ color: 'var(--color-accent)' }}>Staff Engineer</span>, not a Junior.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lead" style={{ marginBlockEnd: '32px', maxWidth: '640px' }}>
            A rules for AI coding agents. Installs in seconds, loads scoped rulesets, and enforces strict architecture, security, and performance invariants flawlessly.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBlockEnd: '56px' }}>
            <a href="#install" className="btn btn-primary" title="Install CLI">
              Get Started
            </a>
            <a href="#demo" className="btn btn-secondary" title="View Demo Playback">
              View Playback
            </a>
          </motion.div>

          {/* Embedded Terminal Frame */}
          <motion.div 
            variants={itemVariants}
            className="embedded-terminal"
            style={{ width: '100%' }}
          >
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
              <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
              <div className="terminal-dot" style={{ background: '#27c93f' }}></div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>bash — agentic-senior-core init</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--color-accent)' }}>$</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>npx @ryuenn3123/agentic-senior-core init</span>
              </div>
              <div style={{ color: 'var(--text-muted)', paddingLeft: '20px' }}>
                Agentic-Senior-Core CLI v{version}
              </div>
              <div style={{ color: '#27c93f', paddingLeft: '20px' }}>
                ✔ Created AGENTS.md native governance entrypoint
              </div>
              <div style={{ color: '#27c93f', paddingLeft: '20px' }}>
                ✔ Initialized .agent-context/ (21 rule libraries, checklists, prompts)
              </div>
              <div style={{ color: '#27c93f', paddingLeft: '20px' }}>
                ✔ Activated token optimization (ascx command wrappers)
              </div>
              <div style={{ color: '#27c93f', paddingLeft: '20px' }}>
                ✔ Bridge wrappers added for CLAUDE.md & GEMINI.md
              </div>
              <div style={{ color: 'var(--text-primary)', paddingLeft: '20px', marginTop: '4px', fontWeight: 500 }}>
                Initialization complete. AI agent is now guided by staff-level guardrails.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
