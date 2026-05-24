import { motion } from 'framer-motion';
import { ArrowRight, FileCheck, Layers } from 'lucide-react';

const coreRulesList = [
  {
    title: 'Scope-Aware Rules',
    description: 'Loads only the instruction layers matching the active project surface, maximizing token and context efficiency.',
    icon: <Layers size={20} />
  },
  {
    title: 'Evidence-Preserving Trails',
    description: 'Maintains absolute proof and reasoning logs permanently attached to every codebase modification.',
    icon: <FileCheck size={20} />
  }
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="section hero" id="top" aria-label="Project Core Release Deck">
      <div className="container case-grid">
        <motion.div
          className="case-main"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="case-meta">
            <span className="case-chip">Release</span>
            <span className="case-chip">Workspace Core Pack</span>
          </motion.div>

          <motion.p variants={itemVariants} className="eyebrow">
            Strict Rule & Checklist Enforcement
          </motion.p>

          <motion.h1 variants={itemVariants} className="heading-xl">
            Ship AI-generated code with absolute proof, not guesswork.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lead">
            A multi-layered workspace oversight tool that enforces architecture, security, 
            and test discipline across Cursor, Windsurf, Claude Code, and Gemini.
          </motion.p>

          <motion.div variants={itemVariants} className="cta-row">
            <a href="#install" className="btn btn-primary" title="Begin setup protocol">
              Install Rule Pack <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#demo" className="btn btn-secondary" title="View historical audit log">
              Watch Demo Playback
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="case-command">
            <div className="command-label">Installation Gate</div>
            <div className="case-command-body">
              <span className="command-caret">$</span>
              <code>npx @ryuenn3123/agentic-senior-core init</code>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container proof-stack" aria-label="Core Rules Details">
        {coreRulesList.map((rule) => (
          <div key={rule.title} className="proof-card">
            <div className="proof-icon" aria-hidden="true">{rule.icon}</div>
            <div>
              <div className="proof-title">{rule.title}</div>
              <div className="proof-desc">{rule.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
